/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import CDSLink from '@carbon/web-components/es/components/link/link.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import { ICON_PLACEMENT } from '../../globals/defs';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './link-with-icon.scss';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

import CTAMixin from '../../component-mixins/cta/cta';
import { CTA_TYPE } from '../cta/defs';

export { ICON_PLACEMENT };

const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * Link with icon.
 *
 * @element c4d-link-with-icon
 * @slot icon - The icon.
 * @slot icon-left - The CTA icon to place at the left.
 * @csspart span - The span element. Usage: `c4d-lightbox-video-player::part(span)`
 */
@customElement(`${c4dPrefix}-link-with-icon`)
class C4DLinkWithIcon extends CTAMixin(StableSelectorMixin(CDSLink)) {
  /**
   * Icon placement(right (default) | left)
   */
  @property({ attribute: 'icon-placement', reflect: true })
  iconPlacement = ICON_PLACEMENT.RIGHT;

  /**
   * Positions the icon inline with text when `true`
   */
  @property({ type: Boolean })
  iconInline = true;

  /**
   * Property that specifies the link to use size large
   *
   * @internal
   */
  @property()
  size = 'lg';

  /**
   * `true` if there is a non-empty default slot content.
   */
  @state()
  protected _hasContent = false;

  /**
   * Handles `slotchange` event on the default `<slot>`.
   */
  protected _handleSlotChange({ target }: Event) {
    this._hasContent = (target as HTMLSlotElement)
      .assignedNodes()
      .some(
        (node) =>
          node.nodeType !== Node.COMMENT_NODE &&
          (node.nodeType !== Node.TEXT_NODE || node.nodeValue?.trim())
      );
  }

  _renderContent() {
    const { ctaType, _hasContent: hasContent } = this;
    if (ctaType !== CTA_TYPE.VIDEO) {
      return html`<span part="span"><slot></slot></span>`;
    }
    const {
      videoDuration,
      videoName,
      formatVideoCaption: formatVideoCaptionInEffect,
      formatVideoDuration: formatVideoDurationInEffect,
    } = this;

    const caption = hasContent
      ? undefined
      : formatVideoCaptionInEffect({
          duration: formatVideoDurationInEffect({
            duration: !videoDuration ? videoDuration : videoDuration * 1000,
          }),
          name: videoName,
        });
    return html`
      <span
        ><slot @slotchange="${this._handleSlotChange}"></slot>${caption}</span
      >
    `;
  }

  protected _renderInner() {
    return html` ${this._renderContent()}${this._renderIcon()} `;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    const { iconInline, iconPlacement, _linkNode: linkNode } = this;
    if (linkNode) {
      linkNode.classList.add(`${prefix}--link-with-icon`);
      linkNode.classList.toggle(
        `${prefix}--link-with-icon__icon-${ICON_PLACEMENT.LEFT}`,
        iconPlacement === ICON_PLACEMENT.LEFT
      );
      linkNode.classList.toggle(
        `${prefix}--link-with-icon__icon-${ICON_PLACEMENT.RIGHT}`,
        iconPlacement === ICON_PLACEMENT.RIGHT
      );

      if (iconInline && iconPlacement === ICON_PLACEMENT.RIGHT) {
        linkNode.classList.add(`${prefix}--link-with-icon--inline-icon`);
      }
    }
  }

  static get stableSelector() {
    return `${c4dPrefix}--link-with-icon`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DLinkWithIcon;
