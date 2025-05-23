/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import findLast from 'lodash-es/findLast.js';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { selectorTabbable } from '@carbon/web-components/es/globals/settings.js';
import HostListener from '@carbon/web-components/es/globals/decorators/host-listener.js';
import CDSSideNav, {
  SIDE_NAV_USAGE_MODE,
} from '@carbon/web-components/es/components/ui-shell/side-nav.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import focuswrap from '@carbon/ibmdotcom-utilities/es/utilities/focuswrap/focuswrap.js';
import { find, forEach } from '../../globals/internal/collection-helpers';
import Handle from '../../globals/internal/handle';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import C4DLeftNavOverlay from './left-nav-overlay';
import styles from './masthead.scss';
import C4DLeftNavMenuSection from './left-nav-menu-section';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

const { prefix, stablePrefix: c4dPrefix } = settings;

// eslint-disable-next-line no-bitwise
const PRECEDING =
  Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
// eslint-disable-next-line no-bitwise
const FOLLOWING =
  Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY;

/**
 * Masthead left nav.
 *
 * @element c4d-left-nav
 * @csspart side-nav-wrapper - The wrapper element for the side nav. Usage: `c4d-left-nav::part(side-nav-wrapper)`
 * @csspart platform-name - The element containing the platform name slot. Usage: `c4d-left-nav::part(platform-name)`
 * @csspart menu-sections - The element containing the menu sections slot. Usage: `c4d-left-nav::part(menu-sections)`
 */
@customElement(`${c4dPrefix}-left-nav`)
//@ts-ignore: Temporary override. shoud be removed when fixed upstream.
class C4DLeftNav extends StableSelectorMixin(CDSSideNav) {
  /**
   * The handle for focus wrapping.
   */
  private _hFocusWrap: Handle | null = null;

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

  @property({ type: Boolean })
  private _importedSideNav = false;

  /**
   * Handles `${prefix}-header-menu-button-toggle` event on the document.
   */
  @HostListener('parentRoot:eventButtonToggle')
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
  protected _handleButtonToggle = async (event: CustomEvent) => {
    if (!this._importedSideNav) {
      await Promise.all([
        import('./left-nav-name'),
        import('./left-nav-menu'),
        import('./left-nav-menu-section'),
        import('./left-nav-menu-item'),
        import('./left-nav-menu-category-heading'),
        import('./left-nav-overlay'),
      ]);
      this._importedSideNav = true;
    }
    this.expanded = event.detail.active;
  };

  /**
   * Handles `cds-request-focus-wrap` event on the document dispatched from focuswrap.
   *
   * @param event The event.
   */
  @HostListener('document:cds-request-focus-wrap')
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
  private _handleRequestMenuButtonFocusWrap = (event: CustomEvent) => {
    const { selectorButtonToggle } = this.constructor as typeof C4DLeftNav;
    /**
     * If focus leaves this element, send focus to the menu toggle.
     * Else if focus leaves the menu toggle, bring it back to this element.
     */
    if (event.target === this) {
      const toggle = (this.getRootNode() as Document).querySelector(
        selectorButtonToggle
      );
      if (toggle) {
        (toggle as HTMLElement).focus();
      }
    } else if (
      (event.composedPath()[1] as HTMLElement).tagName ===
      selectorButtonToggle.toUpperCase()
    ) {
      const { comparisonResult } = event.detail;
      const {
        selectorExpandedMenuSection,
        selectorTabbable: selectorTabbableForLeftnav,
      } = this.constructor as typeof C4DLeftNav;
      const expandedMenuSection = this.querySelector(
        selectorExpandedMenuSection
      );

      // focus on first tabbable element when expanding left-nav
      if (comparisonResult === -1) {
        const tabbable = find(
          this.querySelectorAll(selectorTabbableForLeftnav),
          (elem) => Boolean((elem as HTMLElement).offsetParent)
        );

        if (tabbable) {
          (tabbable as HTMLElement).focus();
        }
      }
      // wrap focus to last tabbable element focusing out of first tabbable element
      // eslint-disable-next-line no-bitwise
      else if (comparisonResult & PRECEDING) {
        const tabbable = findLast(
          expandedMenuSection?.querySelectorAll(selectorTabbableForLeftnav),
          (elem) => Boolean((elem as HTMLElement).offsetParent)
        );
        if (tabbable) {
          (tabbable as HTMLElement).focus();
        }
      }
      // wrap focus to first tabbable element focusing out of last tabbable element
      // eslint-disable-next-line no-bitwise
      else if (comparisonResult & FOLLOWING) {
        const allTabbable = [
          ...Array.from(
            expandedMenuSection?.shadowRoot?.querySelectorAll(
              selectorTabbableForLeftnav
            ) || []
          ),
          ...Array.from(
            expandedMenuSection?.querySelectorAll(selectorTabbableForLeftnav) ||
              []
          ),
        ];

        if (allTabbable.length) {
          (allTabbable[0] as HTMLElement).focus();
        }
      }
    }
  };

  private _handleClickOut(event: MouseEvent) {
    const { selectorButtonToggle } = this.constructor as typeof C4DLeftNav;
    const toggleButton: HTMLElement | null = (
      this.getRootNode() as Document
    ).querySelector(selectorButtonToggle);

    // TODO: check why `target` returns `c4d-masthead-container` (parent) in Lit v2
    if (
      this.expanded &&
      (event.composedPath()[0] as HTMLElement).tagName ===
        'C4D-LEFT-NAV-OVERLAY'
    ) {
      this.expanded = false;
      toggleButton?.focus();
    }
  }

  @HostListener('keydown')
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
  private _handleKeydown(event: KeyboardEvent) {
    const { selectorButtonToggle } = this.constructor as typeof C4DLeftNav;
    const toggleButton: HTMLElement | null = (
      this.getRootNode() as Document
    ).querySelector(selectorButtonToggle);
    if (event.key === 'Escape') {
      this.expanded = false;
      toggleButton?.focus();
    }
  }

  @HostListener('parentRoot:eventToggle')
  protected _handleContentStateChangeDocument = (event: CustomEvent) => {
    const { selectorMenuSections } = this.constructor as typeof C4DLeftNav;
    const { panelId }: { panelId: string } = event.detail;

    const menuSections: C4DLeftNavMenuSection[] = Array.from(
      this.querySelectorAll(selectorMenuSections)
    );
    const expandedSection = menuSections
      .filter((section) => section.matches('[expanded]'))
      .shift();
    const requestedSection = menuSections
      .filter((section) => section.matches(`[section-id="${panelId}"]`))
      .shift();

    if (
      expandedSection !== undefined &&
      requestedSection !== undefined &&
      expandedSection !== requestedSection
    ) {
      const id = panelId.split(', ');
      requestedSection.expanded = true;
      requestedSection.ariaHidden = 'false';
      requestedSection.transition = false;

      expandedSection.expanded = false;
      expandedSection.ariaHidden = 'true';

      /**
       * if next menu section expanded is a level 2 menu section and current expanded
       * menu section is a level 1 menu section, add transition attribute for proper animation
       */
      if (
        id[0] !== '-1' &&
        id[1] !== '-1' &&
        !requestedSection.matches('[section-id*=" -1"]')
      ) {
        expandedSection.transition = true;
      }
    }
  };

  //TODO: Remove this override when upstream bug is fixed.
  //@ts-ignore: Overriding the Focus Out Function
  private _handleFocusOut({ relatedTarget }: FocusEvent) {
    const { collapseMode } = this;
    if (collapseMode !== this.collapseMode) {
      if (!this.contains(relatedTarget as Node)) {
        this.expanded = false;
      }
    }
  }

  /**
   * Usage mode of the side nav.
   */
  @property({ reflect: true, attribute: 'usage-mode' })
  usageMode = SIDE_NAV_USAGE_MODE.HEADER_NAV;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleClickOut.bind(this));
  }

  async updated(changedProperties) {
    super.updated(changedProperties);
    const { usageMode } = this;
    if (
      changedProperties.has('usageMode') &&
      usageMode !== SIDE_NAV_USAGE_MODE.HEADER_NAV
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        'c4d-left-nav supports only `header-nav` for its `usage-mode` attribute or `usageMode` property. The value is ignored:',
        usageMode
      );
    }
    if (changedProperties.has('expanded')) {
      const doc = this.getRootNode() as Document;
      forEach(
        doc.querySelectorAll(
          (this.constructor as typeof C4DLeftNav).selectorOverlay
        ),
        (item) => {
          (item as C4DLeftNavOverlay).active = this.expanded;
        }
      );
      const {
        expanded,
        _startSentinelNode: startSentinelNode,
        _endSentinelNode: endSentinelNode,
      } = this;

      const masthead: HTMLElement | null | undefined = doc
        ?.querySelector(
          `${c4dPrefix}-masthead-container,
          ${c4dPrefix}-masthead-composite`
        )
        ?.querySelector(`${c4dPrefix}-masthead`);
      if (expanded && masthead) {
        this._hFocusWrap = focuswrap(this.shadowRoot!, [
          startSentinelNode,
          endSentinelNode,
        ]);

        if (doc.body?.style) {
          doc.body.style.overflow = `hidden`;
        }

        // TODO: remove this logic once masthead can account for banners.
        // set masthead position to `fixed` when left-nav is open for cloud-mastead
        if (masthead) {
          masthead!.style.position = 'fixed';
        }
      } else {
        const { selectorMenuSections, selectorFirstMenuSection } = this
          .constructor as typeof C4DLeftNav;

        // TODO: remove this logic once masthead can account for banners.
        // remove set position from mastead when left-nav is closed for cloud-mastead
        if (masthead) {
          document.body.style.overflow = 'auto';
          masthead.style.position = '';
        }

        this.querySelectorAll(selectorMenuSections).forEach(
          (c4dLeftNavMenuSection) => {
            (c4dLeftNavMenuSection as C4DLeftNavMenuSection).expanded = false;
            (c4dLeftNavMenuSection as C4DLeftNavMenuSection).transition = false;
          }
        );

        // reset to first menu section
        this.querySelectorAll(selectorFirstMenuSection).forEach(
          (c4dLeftNavMenuSection) => {
            (c4dLeftNavMenuSection as C4DLeftNavMenuSection).expanded = true;
          }
        );

        if (this._hFocusWrap) {
          this._hFocusWrap = this._hFocusWrap.release();
        }
      }
    }
  }

  private _renderSentinel = (side: string) => {
    return html`
      <button
        id="${side}-sentinel"
        type="button"
        class="${prefix}--visually-hidden"></button>
    `;
  };

  render() {
    const { _renderSentinel: renderSentinel } = this;
    return html`
      <div class="${prefix}--side-nav__wrapper" part="side-nav-wrapper">
        ${renderSentinel('start')}
        <div class="${prefix}--side-nav__platform-name" part="platform-name">
          <slot name="platform-id"></slot>
        </div>
        <div class="${prefix}--side-nav__menu-sections" part="menu-sections">
          <slot></slot>
        </div>
        ${renderSentinel('end')}
      </div>
    `;
  }

  /**
   * A selector that will return the toggle buttons.
   */
  static get selectorButtonToggle() {
    return `${c4dPrefix}-masthead-menu-button`;
  }

  /**
   * A selector that will return side nav focusable items.
   */
  static get selectorNavItems() {
    return [
      `${c4dPrefix}-left-nav-menu`,
      `${c4dPrefix}-left-nav-menu-item`,
      `${c4dPrefix}-left-nav-name`,
    ].join(', ');
  }

  /**
   * A selector that will return menu sections.
   */
  static get selectorMenuSections() {
    return `${c4dPrefix}-left-nav-menu-section`;
  }

  /**
   * A selector that will return expanded menu section.
   */
  static get selectorExpandedMenuSection() {
    return `${c4dPrefix}-left-nav-menu-section[expanded]`;
  }

  /**
   * A selector that will return first main visible menu section.
   */
  static get selectorFirstMenuSection() {
    return `${c4dPrefix}-left-nav-menu-section[section-id='-1, -1']`;
  }

  /**
   * A selector selecting tabbable nodes.
   */
  static get selectorTabbable() {
    return [
      selectorTabbable,
      `${c4dPrefix}-left-nav-menu`,
      `${c4dPrefix}-left-nav-menu-item`,
      `${c4dPrefix}-left-nav-name`,
    ].join(', ');
  }

  /**
   * A selector that will return the overlays.
   */
  static get selectorOverlay() {
    return `${c4dPrefix}-left-nav-overlay`;
  }

  static get stableSelector() {
    return `${c4dPrefix}--masthead__l0-sidenav`;
  }

  /**
   * The name of the custom event fired after this side nav menu is toggled upon a user gesture.
   */
  static get eventToggle() {
    return `${c4dPrefix}-left-nav-menu-toggled`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default C4DLeftNav;
