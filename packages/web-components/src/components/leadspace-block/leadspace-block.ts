/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { state, property } from 'lit/decorators.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import '../horizontal-rule/horizontal-rule';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './leadspace-block.scss';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * The table mapping slot name with the private property name that indicates the existence of the slot content.
 */
const slotExistencePropertyNames = {
  title: '_hasTitle',
};

/**
 * LeadSpace Block Component.
 *
 * @element c4d-leadspace-block
 * @csspart content-layout - The outer wrapper. Usage: c4d-leadpsace-block::part(content-layout)
 * @csspart content-body - The inner wrapper. Usage: c4d-leadpsace-block::part(content-body)
 * @csspart hr - The horizontal rule. Usage: c4d-leadpsace-block::part(hr)
 */
@customElement(`${c4dPrefix}-leadspace-block`)
class C4DLeadSpaceBlock extends StableSelectorMixin(LitElement) {
  /**
   * `true` if there is a title.
   */
  @state()
  protected _hasTitle = false;

  /**
   * `true` if there is a border.
   */
  @property({ type: Boolean })
  border = false;

  /**
   * Handles `slotchange` event.
   *
   * @param event The event.
   * @param event.target The event target.
   */
  protected _handleSlotChange({ target }: Event) {
    const { name } = target as HTMLSlotElement;
    const hasTitle = (target as HTMLSlotElement)
      .assignedNodes()
      .some(
        (node) => node.nodeType !== Node.TEXT_NODE || node!.textContent!.trim()
      );
    this[slotExistencePropertyNames[name] || '_hasTitle'] = hasTitle;
  }

  /**
   * Render the Leadspace Block title
   */
  protected _renderHeading() {
    const { _hasTitle: hasTitle } = this;
    return html`
      <slot
        ?hidden="${!hasTitle}"
        name="heading"
        @slotchange="${this._handleSlotChange}"></slot>
    `;
  }

  render() {
    return html`
      <div class="${prefix}--content-layout" part="content-layout">
        ${this._renderHeading()}
        <div class="${prefix}--content-layout__body" part="content-body">
          <slot></slot>
          ${this.border ? html`<c4d-hr part="hr"></c4d-hr>` : ``}
        </div>
      </div>
    `;
  }

  static get stableSelector() {
    return `${c4dPrefix}--leadspace-block`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DLeadSpaceBlock;
