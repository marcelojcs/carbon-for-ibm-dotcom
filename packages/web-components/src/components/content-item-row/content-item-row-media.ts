/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TemplateResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { baseFontSize, breakpoints } from '@carbon/layout';
import HostListener from '@carbon/web-components/es/globals/decorators/host-listener.js';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import C4DContentItem from '../content-item/content-item';
import styles from './content-item-row-media.scss';

import { MEDIA_ALIGN } from './defs';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

const { prefix, stablePrefix: c4dPrefix } = settings;

const breakpoint = parseFloat(breakpoints.lg.width) * baseFontSize;

/**
 * A component to present content in a row orientation with media.
 *
 * @element c4d-content-item-row-media
 * @csspart col--eyebrow - the column eyebrow. Usage. `c4d-content-item-row-media::part(col--eyebrow)`
 * @csspart col--media - thecontent column media. Usage. `c4d-content-item-row-media::part(col--media)`
 * @csspart row--media - the content row media. Usage. `c4d-content-item-row-media::part(row--media)`
 * @csspart
 */
@customElement(`${c4dPrefix}-content-item-row-media`)
class C4DContentItemRowMedia extends HostListenerMixin(C4DContentItem) {
  /**
   * Defines the alignment of the media: `left` or `right`
   */
  @property({ reflect: true })
  align = MEDIA_ALIGN.RIGHT;

  /**
   * Identifies whether the window width is below the breakpoint or not.
   */
  @state()
  _isOneColumn: boolean = window.innerWidth < breakpoint;

  @HostListener('window:resize')
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
  private _handleWindowResize = (): void => {
    this._isOneColumn = window.innerWidth < breakpoint;
  };

  /**
   * @returns The text column content.
   */
  protected _renderTextCol(): TemplateResult | string | void {
    return html`
      <div class="${prefix}--content-item-row__col" part="col col--eyebrow">
        <slot name="eyebrow" @slotchange="${this._handleSlotChange}"></slot>
        <slot name="heading"></slot>
        ${this._renderBody()} ${this._renderFooter()}
      </div>
    `;
  }

  /**
   * @returns The media column content.
   */
  protected _renderMediaCol(): TemplateResult | string | void {
    return html`
      <div class="${prefix}--content-item-row__col" part="col col--media">
        <slot name="media" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }

  /**
   * @returns The component content in the appropriate tabbing order.
   */
  protected _renderContent(): TemplateResult | string | void {
    const alignedRight = this.align === MEDIA_ALIGN.RIGHT;

    // Always return image first when stacked on mobile
    if (this._isOneColumn) {
      return html` ${this._renderMediaCol()} ${this._renderTextCol()} `;
    }
    return alignedRight
      ? html` ${this._renderTextCol()} ${this._renderMediaCol()} `
      : html` ${this._renderMediaCol()} ${this._renderTextCol()} `;
  }

  render() {
    return html`
      <div
        class="${prefix}--content-item-row__row ${prefix}--content-item-row-media__align-${this
          .align}"
        part="row row--media">
        ${this._renderContent()}
      </div>
    `;
  }

  static get stableSelector() {
    return `${c4dPrefix}--content-item-row-media`;
  }

  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DContentItemRowMedia;
