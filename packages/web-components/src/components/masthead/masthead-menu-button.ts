/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import HostListener from '@carbon/web-components/es/globals/decorators/host-listener.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import CDSHeaderMenuButton from '@carbon/web-components/es/components/ui-shell/header-menu-button.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import focuswrap from '@carbon/ibmdotcom-utilities/es/utilities/focuswrap/focuswrap.js';
import Handle from '../../globals/internal/handle';
import styles from './masthead.scss';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * Toggle button for masthead left nav.
 *
 * @element c4d-masthead-menu-button
 * @csspart sentinel-button - The sentinel button for managing focus.
 * @csspart ce-header-menu-trigger-container - Container for the menu trigger button.
 * @csspart sentinel-button--start - The start sentinel button for managing focus. Usage: `c4d-masthead-menu-button::part(sentinel-button--start)`
 * @csspart sentinel-button--end - The end sentinel button for managing focus. Usage: `c4d-masthead-menu-button::part(sentinel-button--end)`
 */
@customElement(`${c4dPrefix}-masthead-menu-button`)
class C4DMastheadMenuButton extends HostListenerMixin(CDSHeaderMenuButton) {
  /**
   * The handle for focus wrapping.
   */
  private _hFocusWrap: Handle | null = null;

  /**
   * Search bar opened flag.
   */
  @state()
  private _hasSearchActive = false;

  /**
   * Handles toggle event from the search component.
   *
   * @param event The event.
   */
  @HostListener('parentRoot:eventToggleSearch')
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
  private _handleSearchToggle = (event: Event) => {
    if ((event as CustomEvent).detail.active !== undefined) {
      this._hasSearchActive = (event as CustomEvent).detail.active;
      this.hideMenuButton = (event as CustomEvent).detail.active;
    }
  };

  /**
   * Node to track focus going outside of modal content.
   */
  @query('#start-sentinel')
  private _startSentinelNode!: HTMLAnchorElement;

  /**
   * Node to track focus going outside of modal content.
   */
  @query('#end-sentinel')
  private _endSentinelNode!: HTMLAnchorElement;

  /**
   * The `<button>`.
   */
  @query(`.${prefix}--header__menu-trigger`)
  private _buttonNode!: HTMLButtonElement;

  /**
   * The shadow slot this toggle button should be in.
   */
  @property({ reflect: true })
  slot = 'brand';

  /**
   * `true` to hide the logo at render
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-menu-button' })
  hideMenuButton = false;

  focus() {
    const { _buttonNode: buttonNode } = this;
    if (buttonNode) {
      buttonNode.focus();
    }
  }
  firstUpdated() {
    const boundHideButton = this.hideButtonIfNoNavItemsFound.bind(this);
    window.addEventListener(`load`, () => {
      boundHideButton();
    });
  }
  updated(changedProperties) {
    if (changedProperties.has('active')) {
      const {
        active,
        _startSentinelNode: startSentinelNode,
        _endSentinelNode: endSentinelNode,
      } = this;
      if (active) {
        this._hFocusWrap = focuswrap(this.shadowRoot!, [
          startSentinelNode,
          endSentinelNode,
        ]);
      } else if (this._hFocusWrap) {
        this._hFocusWrap = this._hFocusWrap.release();
      }
    }

    if (changedProperties.has('hideMenuButton')) {
      this._hasSearchActive = this.hideMenuButton;
    }
    this.hideButtonIfNoNavItemsFound();
  }

  hideButtonIfNoNavItemsFound() {
    const NavMenuItems = this.closest(
      `${c4dPrefix}-masthead-container`
    )?.querySelectorAll(`${c4dPrefix}-left-nav-menu`);
    if (!NavMenuItems?.length) {
      this.hideMenuButton = true;
      this.style.display = 'none';
    } else if (this.style.display == 'none') {
      this.hideMenuButton = false;
      this.style.display = '';
    }
  }

  private _renderSentinel = (side: String) => {
    return html`
      <button
        part="sentinel-button sentinel-button--${side}"
        id="${side}-sentinel"
        type="button"
        class="${prefix}--visually-hidden"></button>
    `;
  };

  render() {
    const {
      active,
      _hasSearchActive: hasSearchActive,
      _renderSentinel: renderSentinel,
    } = this;
    const classes = classMap({
      [`${c4dPrefix}-ce--header__menu-trigger__container`]: true,
      [`${c4dPrefix}-ce--header__menu-trigger__container--has-search-active`]:
        hasSearchActive,
    });
    const startSentinel = active ? renderSentinel('start') : '';
    const endSentinel = active ? renderSentinel('end') : '';
    return html`
      <div part="ce-header-menu-trigger-container" class="${classes}">
        ${startSentinel}${super.render()}${endSentinel}
      </div>
    `;
  }

  /**
   * The name of the custom event fired after the seach is toggled.
   */
  static get eventToggleSearch() {
    return `${c4dPrefix}-search-with-typeahead-toggled`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default C4DMastheadMenuButton;
