/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import HostListener from '@carbon/web-components/es/globals/decorators/host-listener.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import KalturaPlayerAPI from '@carbon/ibmdotcom-services/es/services/KalturaPlayer/KalturaPlayer.js';
import HybridRenderMixin from '../../globals/mixins/hybrid-render';
import { MediaData } from '../../internal/vendor/@carbon/ibmdotcom-services-store/types/kalturaPlayerAPI';
import {
  VIDEO_PLAYER_CONTENT_STATE,
  VIDEO_PLAYER_PLAYING_MODE,
} from './video-player';
// Above import is interface-only ref and thus code won't be brought into the build
import './video-player';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import { BUTTON_POSITION } from './defs';
import ifNonEmpty from '@carbon/web-components/es/globals/directives/if-non-empty.js';

const { stablePrefix: c4dPrefix } = settings;

/**
 * Component that renders video player from its metadata, etc.
 *
 * @element c4d-video-player-composite
 * @csspart video-player - The video player. Usage `c4d-video-player-composite::part(video-player)`
 */
@customElement(`${c4dPrefix}-video-player-composite`)
class C4DVideoPlayerComposite extends HybridRenderMixin(
  HostListenerMixin(LitElement)
) {
  /**
   * The placeholder for `_loadVideoData()` Redux action that may be mixed in.
   *
   * @internal
   */
  _loadVideoData?: (videoId: string) => Promise<MediaData>;

  /**
   * The placeholder for `_loadVideoData()` Redux action that may be mixed in.
   *
   * @internal
   */
  _embedMedia?: (videoId: string) => Promise<any>;

  /**
   * The placeholder for `_setAutoplayPreference()` Redux action that may be mixed in.
   */
  // @ts-ignore
  _setAutoplayPreference: (preference: boolean) => void;

  /**
   * The placeholder for `_getAutoplayPreference()` Redux action that may be mixed in.
   */
  // @ts-ignore
  _getAutoplayPreference: () => null | boolean;

  /**
   * Activate the DOM nodes for the embedded video of the given video ID, and deactivates others.
   *
   * @param videoId The video ID to activate.
   */
  protected _activateEmbeddedVideo(videoId: string) {
    const { embeddedVideos = {} } = this;
    Object.keys(embeddedVideos).forEach((key) => {
      embeddedVideos[key].sendNotification(
        key === videoId ? 'doPlay' : 'doStop'
      );
    });
  }

  /**
   * The video player.
   */
  protected get _videoPlayer() {
    const { selectorVideoPlayer } = this
      .constructor as typeof C4DVideoPlayerComposite;
    return this.querySelector(selectorVideoPlayer);
  }

  /**
   * Clean-up and create intersection observers.
   *
   * When this.intersectionMode, we use intersection observers to track when
   * the video container is in view, and embed / play / pause the video
   * accordingly.
   *
   * @param [options] The options.
   * @param [options.create] `true` to create necessary intersection observers.
   */
  private _cleanAndCreateObserverIntersection({
    create,
  }: { create?: boolean } = {}) {
    // Cleanup.
    if (this._observerIntersectionIntoView) {
      this._observerIntersectionIntoView.unobserve(this);
    }
    if (this._observerIntersectionOutOfView) {
      this._observerIntersectionOutOfView.unobserve(this);
    }
    // Create new intersection observers.
    if (create) {
      this._observerIntersectionIntoView = new IntersectionObserver(
        this._intersectionIntoViewHandler.bind(this),
        {
          root: this.closest('c4d-carousel'),
          rootMargin: '0px',
          threshold: 0.9,
        }
      );
      this._observerIntersectionOutOfView = new IntersectionObserver(
        this._intersectionOutOfViewHandler.bind(this),
        {
          root: this.closest('c4d-carousel'),
          rootMargin: '0px',
          threshold: 0.5,
        }
      );
      this._observerIntersectionIntoView.observe(this);
      this._observerIntersectionOutOfView.observe(this);
    }
  }

  /**
   * Observer for when the video container enters into view.
   *
   * Autoplay the video, resecting the users stored autoplay preference.
   */
  private _intersectionIntoViewHandler(entries: IntersectionObserverEntry[]) {
    const { videoId } = this;
    entries.forEach((entry) => {
      if (entry.isIntersecting && this._getAutoplayPreference() !== false) {
        this._embedMedia?.(videoId);
        this.playAllVideos();
      }
    });
  }

  /**
   * Observer for when the video container goes out of view.
   *
   * Auto-pause the video, video playback controlled by intersection observers
   * here are meant to be ambient, without audio. No reason for playback when
   * user is not seeing the video content.
   */
  private _intersectionOutOfViewHandler(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        this.pauseAllVideos(false);
      }
    });
  }

  /**
   * Handles `c4d-video-player-content-state-changed` event.
   * Such event is fired when user changes video content state, e.g. from thumbnail to video player.
   *
   * @param event The event.
   */
  @HostListener('eventContentStateChange')
  protected _handleContentStateChange(event: CustomEvent) {
    const { contentState, playingMode, videoId } = event.detail;
    if (
      contentState === VIDEO_PLAYER_CONTENT_STATE.VIDEO &&
      playingMode === VIDEO_PLAYER_PLAYING_MODE.INLINE &&
      videoId
    ) {
      this._embedMedia?.(videoId);
    }
  }

  @HostListener('eventPlaybackStateChange')
  protected _handlePlaybackStateChange(event: CustomEvent) {
    const { videoId } = event.detail;
    const { embeddedVideos = {} } = this;

    if (this.isPlaying) {
      embeddedVideos[videoId].sendNotification('doPause');
      this.isPlaying = false;
    } else {
      embeddedVideos[videoId].sendNotification('doPlay');
      this.isPlaying = true;
    }

    this._setAutoplayPreference(this.isPlaying);
    this.playbackTriggered = true;
  }

  @HostListener('eventTogglePlayback')
  protected _handleEventTogglePlayback(event: CustomEvent) {
    const { videoId } = event.detail;
    if (videoId) {
      this._setAutoplayPreference(!this.isPlaying);

      // First ensure that the media has actually been embedded.
      this._embedMedia?.(videoId);
      if (this.isPlaying) {
        this.pauseAllVideos();
      } else {
        this.playAllVideos();
      }
    }
  }

  pauseAllVideos(updateAutoplayPreference = true) {
    const { embeddedVideos = {} } = this;

    Object.keys(embeddedVideos).forEach((videoId) => {
      embeddedVideos[videoId].sendNotification('doPause');
    });
    this.isPlaying = false;
    if (updateAutoplayPreference) {
      this._setAutoplayPreference(false);
    }
  }

  playAllVideos(updateAutoplayPreference = true) {
    const { embeddedVideos = {} } = this;

    Object.keys(embeddedVideos).forEach((videoId) => {
      embeddedVideos[videoId].sendNotification('doPlay');
    });
    this.isPlaying = true;
    this.playbackTriggered = true;
    if (updateAutoplayPreference) {
      this._setAutoplayPreference(true);
    }
  }

  /**
   * `true` to autoplay the videos.
   */
  @property({ type: Boolean, attribute: 'auto-play' })
  autoPlay = false;

  /**
   * `true` load videos with sound muted.
   */
  @property({ type: Boolean, attribute: 'muted' })
  muted = false;

  /**
   * The embedded Kaltura player element (that has `.sendNotification()`, etc. APIs), keyed by the video ID.
   */
  @property({ attribute: false })
  embeddedVideos?: { [videoId: string]: any };

  /**
   * Optional custom video caption.
   */
  @property({ reflect: true, attribute: 'caption' })
  caption?: '';

  /**
   * Custom video description. This property should only be set when `playing-mode="lightbox"`.
   */
  @property({ reflect: true, attribute: 'video-description' })
  customVideoDescription?: string;

  /**
   * The formatter for the video caption, composed with the video name and the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatCaption?: ({
    duration,
    name,
  }: {
    duration?: string;
    name?: string;
  }) => string;

  /**
   * The formatter for the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatDuration?: ({ duration }: { duration?: number }) => string;

  /**
   * `true` to hide the caption.
   */
  @property({ type: Boolean, attribute: 'hide-caption' })
  hideCaption = false;

  /**
   * `true` to autoplay, mute, and hide player UI.
   */
  @property({ type: Boolean, attribute: 'background-mode', reflect: true })
  backgroundMode = false;

  /**
   * Triggers playback on intersection with the viewport / carousel.
   */
  @property({ attribute: 'intersection-mode', reflect: true, type: Boolean })
  intersectionMode = false;

  /**
   * The position of the toggle playback button.
   */
  @property({ attribute: 'button-position', reflect: true })
  buttonPosition = BUTTON_POSITION.BOTTOM_RIGHT;

  /**
   * Track when we have triggered initial playback.
   */
  @state()
  playbackTriggered = false;

  /**
   * The video data, keyed by the video ID.
   */
  @property({ attribute: false })
  mediaData?: { [videoId: string]: MediaData };

  /**
   * The video ID.
   */
  @property({ attribute: 'video-id' })
  videoId = '';

  /**
   * The aspect ratio.
   */
  @property({ attribute: 'aspect-ratio' })
  aspectRatio?: '';

  /**
   * The current playback state
   */
  @property({ type: Boolean })
  isPlaying = false;

  /**
   * The video player's mode showing Inline or Lightbox.
   */
  @property({ reflect: true, attribute: 'playing-mode' })
  playingMode = VIDEO_PLAYER_PLAYING_MODE.INLINE;

  /**
   * Optional custom video thumbnail
   */
  @property({ reflect: true, attribute: 'thumbnail' })
  thumbnail?: '';

  /**
   * The video thumbnail width.
   */
  @property({ type: Number, attribute: 'video-thumbnail-width' })
  videoThumbnailWidth = 3;

  /**
   *  Determines if the direction is right-to-left
   */
  @property({ type: Boolean })
  isRTL = false;

  private observer!: MutationObserver;

  /**
   * Observe when the video container enters into view.
   */
  private _observerIntersectionIntoView?: IntersectionObserver;

  /**
   * Observe when the video container goes out of view.
   */
  private _observerIntersectionOutOfView?: IntersectionObserver;

  connectedCallback() {
    super.connectedCallback();

    if (this.backgroundMode) {
      this.hideCaption = true;
    }

    if (this.autoPlay || this.backgroundMode) {
      const storedPreference = this._getAutoplayPreference();
      if (storedPreference === null) {
        this.isPlaying = !window.matchMedia('(prefers-reduced-motion: reduce)')
          .matches;
      } else {
        this.isPlaying = storedPreference;
      }
    }

    if (this.intersectionMode) {
      this._cleanAndCreateObserverIntersection({ create: true });
    }

    // initializing the MutationObserver to observe for changes in the direction mode
    this.observer = new MutationObserver(() => {
      this.isRTL =
        this.dir === 'rtl' || getComputedStyle(this).direction === 'rtl';
    });

    // observing the 'dir' attr in the root element
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir'],
    });

    // Initial check for the direction
    this.isRTL =
      this.dir === 'rtl' || getComputedStyle(this).direction === 'rtl';
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanAndCreateObserverIntersection();
  }

  updated(changedProperties) {
    if (changedProperties.has('videoId')) {
      const { autoPlay, videoId, backgroundMode } = this;
      this._activateEmbeddedVideo(videoId);
      if (videoId) {
        this._loadVideoData?.(videoId);
        if (autoPlay || backgroundMode) {
          this._embedMedia?.(videoId);
        }
      }
    }
  }

  renderLightDOM() {
    // setting the direction mode of the video player.
    document
      .querySelector('.c4d--video-player__video')
      ?.setAttribute('dir-mode', `${this.isRTL ? 'rtl' : 'ltr'}`);

    const {
      aspectRatio,
      formatCaption,
      formatDuration,
      hideCaption,
      caption,
      customVideoDescription,
      mediaData = {},
      videoId,
      videoThumbnailWidth,
      thumbnail,
      playingMode,
      buttonPosition,
    } = this;
    const { [videoId]: currentVideoData = {} as MediaData } = mediaData;
    const { duration, name } = currentVideoData;
    const thumbnailUrl =
      thumbnail ||
      KalturaPlayerAPI.getThumbnailUrl({
        mediaId: videoId,
        width: String(videoThumbnailWidth),
      });
    return html`
      <c4d-video-player
        part="video-player"
        duration="${ifNonEmpty(duration)}"
        ?hide-caption=${hideCaption}
        name="${ifNonEmpty(caption || name)}"
        video-description="${ifNonEmpty(customVideoDescription)}"
        thumbnail-url="${ifNonEmpty(thumbnailUrl)}"
        video-id="${ifNonEmpty(videoId)}"
        aspect-ratio="${ifNonEmpty(aspectRatio)}"
        playing-mode="${ifNonEmpty(playingMode)}"
        content-state="${this.playbackTriggered
          ? VIDEO_PLAYER_CONTENT_STATE.VIDEO
          : VIDEO_PLAYER_CONTENT_STATE.THUMBNAIL}"
        button-position="${buttonPosition}"
        .formatCaption="${ifNonEmpty(formatCaption)}"
        .formatDuration="${ifNonEmpty(formatDuration)}"
        .isPlaying=${this.isPlaying}>
      </c4d-video-player>
    `;
  }

  render() {
    return html` <slot></slot> `;
  }

  /**
   * A selector selecting the video player component.
   */
  static get selectorVideoPlayer() {
    return `${c4dPrefix}-video-player`;
  }

  /**
   * The name of the custom event fired after video content state is changed upon a user gesture.
   */
  static get eventContentStateChange() {
    return `${c4dPrefix}-video-player-content-state-changed`;
  }

  /**
   * The name of the custom event fired requesting playback state change.
   */
  static get eventPlaybackStateChange() {
    return `${c4dPrefix}-video-player-playback-state-changed`;
  }

  /**
   * The name of the custom event fired requesting to toggle playback.
   */
  static get eventTogglePlayback() {
    return `${c4dPrefix}-video-player-toggle-playback`;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DVideoPlayerComposite;
