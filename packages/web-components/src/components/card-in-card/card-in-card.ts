/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css, html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import C4DCard from '../card/card';
import { CTA_TYPE } from '../cta/card-cta';
import './card-in-card-image';
import styles from './card-in-card.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * Card in Card.
 *
 * @element c4d-card-in-card
 * @csspart image - The Thumbnail image. Usage `c4d-card-in-card::part(image)`
 */
@customElement(`${c4dPrefix}-card-in-card`)
class C4DCardInCard extends StableSelectorMixin(C4DCard) {
  protected _renderImage() {
    const { ctaType, videoName, videoThumbnailUrl, _hasImage: hasImage } = this;
    const image =
      hasImage || ctaType !== CTA_TYPE.VIDEO
        ? undefined
        : html`
            <c4d-card-in-card-image
              alt="${ifDefined(videoName)}"
              default-src="${videoThumbnailUrl}"
              part="image">
            </c4d-card-in-card-image>
          `;
    return html`
      <slot name="image" @slotchange="${this._handleSlotChange}"></slot>${image}
    `;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    const { _linkNode: linkNode } = this;
    if (linkNode) {
      linkNode.classList.add(`${prefix}--card-in-card`);
    }

    this.onclick = () =>
      this.querySelector(`${c4dPrefix}-card-footer`)
        ?.shadowRoot?.querySelector(`a`)
        ?.click();
  }

  static get stableSelector() {
    return `${c4dPrefix}--card-in-card`;
  }

  static get styles() {
    return css`
      ${super.styles}${styles}
    `;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DCardInCard;
