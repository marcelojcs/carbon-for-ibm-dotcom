/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import ArrowRight16 from '@carbon/web-components/es/icons/arrow--right/16.js';
import ArrowLeft16 from '@carbon/web-components/es/icons/arrow--left/16.js';
import CDSSideNavMenuItem from '@carbon/web-components/es/components/ui-shell/side-nav-menu-item.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import styles from './masthead.scss';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * Masthead left nav submenu item.
 *
 * @element c4d-left-nav-menu-item
 * @csspart link - The link. Usage `c4d-left-nav-menu-item(link)`
 * @csspart title - The title. Usage `c4d-left-nav-menu-item(title)`
 */
@customElement(`${c4dPrefix}-left-nav-menu-item`)
class C4DLeftNavMenuItem extends CDSSideNavMenuItem {
  @property({ attribute: 'is-heading' })
  isHeading?: boolean;

  @property({ attribute: 'is-view-all' })
  isViewAll?: boolean;

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('isHeading')) {
      this.classList.toggle(
        `${prefix}--side-nav__group-header`,
        this.isHeading
      );
    }

    if (changedProperties.has('isViewAll')) {
      this.classList.toggle(
        `${prefix}--side-nav__group-view-all`,
        this.isViewAll
      );
    }
  }

  render() {
    const { active, href, title, isHeading, isViewAll } = this;

    const isRTL = document.dir.toLowerCase() === 'rtl';
    const Arrow = isRTL ? ArrowLeft16 : ArrowRight16;

    const linkClasses = classMap({
      [`${prefix}--side-nav__link`]: true,
      [`${prefix}--side-nav__link--current`]: active,
    });

    return href
      ? html`
          <a
            part="link"
            class="${linkClasses}"
            href="${href}"
            data-attribute1="headerNav"
            data-attribute2="FlatItem"
            data-attribute3="${title}">
            <span part="title" class="${prefix}--side-nav__link-text">
              <slot>${title}</slot>
              ${isHeading || isViewAll ? Arrow() : ''}
            </span>
          </a>
        `
      : html`
          <span part="link" class="${linkClasses}">
            <span part="title" class="${prefix}--side-nav__link-text">
              <slot>${title}</slot>
            </span>
          </span>
        `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default C4DLeftNavMenuItem;
