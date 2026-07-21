/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 * 
 * This bundle contains the following third-party dependencies:
 * 
 * @carbon/web-components:
 * 
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @carbon/motion:
 * 
 * Copyright IBM Corp. 2018, 2026
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
 * 
 * @carbon/layout:
 * 
 * Copyright IBM Corp. 2018, 2026
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
 * 
 * lit-html:
 * 
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * lit-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @carbon/themes:
 * 
 * Copyright IBM Corp. 2016, 2023
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
 * 
 * @lit/reactive-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @babel/runtime:
 * 
 regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE
 * 
 * marked:
 * 
 * marked v4.3.0 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 * 
 * @carbon/type:
 * 
 * Copyright IBM Corp. 2018, 2023
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
 * 
 * @carbon/colors:
 * 
 * Copyright IBM Corp. 2018, 2026
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
 * 
 * js-cookie:
 * 
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 * 
 * dompurify:
 * 
 @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE
 * 
 * Also refer to the following links for the license of other third-party dependencies:
 * 
 * https://www.npmjs.com/package/lit
 * https://www.npmjs.com/package/redux
 * https://www.npmjs.com/package/lodash-es
 * https://www.npmjs.com/package/window-or-global
 * https://www.npmjs.com/package/redux-logger
 * https://www.npmjs.com/package/redux-thunk
 * https://www.npmjs.com/package/isomorphic-dompurify
 * https://www.npmjs.com/package/axios
 * https://www.npmjs.com/package/striptags
 * https://www.npmjs.com/package/color
 * https://www.npmjs.com/package/color-convert
 * https://www.npmjs.com/package/color-string
 * https://www.npmjs.com/package/color-name
 * https://www.npmjs.com/package/simple-swizzle
 * https://www.npmjs.com/package/@floating-ui/dom
 * https://www.npmjs.com/package/is-arrayish
 * https://www.npmjs.com/package/@floating-ui/utils
 * https://www.npmjs.com/package/@floating-ui/core
 */

import { _ as e } from './objectSpread2.js';
import { _ as i } from './decorate.js';
import { o as n } from './class-map.js';
import { l as t } from './if-defined.js';
import { i as o, a as d, x as l, n as s } from './query-assigned-elements.js';
import { i as r } from './query.js';
import { p as c } from './settings.js';
import { F as a } from './focus.js';
import { c as k } from './carbon-element.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v = o([
  '.cds--link{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);display:inline-flex;color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline:0;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--link *,.cds--link ::after,.cds--link ::before{box-sizing:inherit}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active,.cds--link:active:visited,.cds--link:active:visited:hover{outline:1px solid var(--cds-focus,#0f62fe);color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:active,.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:focus{outline:1px solid var(--cds-focus,#0f62fe);outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}@media screen and (prefers-contrast){.cds--link:focus{outline-style:dotted}}.cds--link:visited{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);color:var(--cds-text-disabled,rgba(22,22,22,.25));cursor:not-allowed;font-weight:400;text-decoration:none}.cds--link--disabled *,.cds--link--disabled ::after,.cds--link--disabled ::before,.cds--link--disabled:hover *,.cds--link--disabled:hover ::after,.cds--link--disabled:hover ::before{box-sizing:inherit}.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);line-height:var(--cds-helper-text-01-line-height,1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);line-height:var(--cds-body-compact-02-line-height,1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing,0)}.cds--link__icon{display:inline-flex;align-self:center;margin-inline-start:.5rem}:host(cds-link){outline:0}:host(cds-link) .cds--link--disabled{color:var(--cds-text-disabled,rgba(22,22,22,.25))}:host(cds-link) .cds--link__icon[hidden]{display:none}',
]);
let f,
  h,
  p,
  u = (e) => e;
const m = '';
let y = i(
  [k(`${c}-link`)],
  function (i, o) {
    return {
      F: class extends o {
        constructor(...e) {
          super(...e), i(this);
        }
      },
      d: [
        { kind: 'field', key: '_hasIcon', value: () => !1 },
        {
          kind: 'method',
          key: '_handleSlotChange',
          value: function ({ target: e }) {
            const { name: i } = e,
              n = e
                .assignedNodes()
                .some(
                  (e) => e.nodeType !== Node.TEXT_NODE || e.textContent.trim()
                );
            (this['icon' === i ? '_hasIcon' : ''] = n), this.requestUpdate();
          },
        },
        {
          kind: 'field',
          decorators: [r('#link')],
          key: '_linkNode',
          value: void 0,
        },
        {
          kind: 'get',
          key: '_classes',
          value: function () {
            const {
              disabled: e,
              size: i,
              inline: t,
              visited: o,
              _hasIcon: d,
            } = this;
            return n({
              [`${c}--link`]: !0,
              [`${c}--link--disabled`]: e,
              [`${c}--link--icon`]: d,
              [`${c}--link--inline`]: t,
              [`${c}--link--${i}`]: i,
              [`${c}--link--visited`]: o,
            });
          },
        },
        { kind: 'method', key: '_handleClick', value: function (e) {} },
        {
          kind: 'method',
          key: '_renderInner',
          value: function () {
            const { _hasIcon: e, _handleSlotChange: i } = this;
            return l(
              f ||
                (f = u`
      <slot @slotchange="${0}"></slot>
      <div ?hidden="${0}" class="${0}--link__icon">
        <slot name="icon" @slotchange="${0}"></slot>
      </div>
    `),
              i,
              !e,
              c,
              i
            );
          },
        },
        {
          kind: 'method',
          key: '_renderDisabledLink',
          value: function () {
            const { _classes: e } = this;
            return l(
              h ||
                (h = u`
      <p id="link" part="link" class="${0}">${0}</p>
    `),
              e,
              this._renderInner()
            );
          },
        },
        {
          kind: 'method',
          key: '_renderLink',
          value: function () {
            const {
              download: e,
              href: i,
              hreflang: n,
              linkRole: o,
              ping: d,
              rel: s,
              target: r,
              type: c,
              _classes: a,
              _handleClick: k,
            } = this;
            return l(
              p ||
                (p = u`
      <a
        tabindex="0"
        id="link"
        role="${0}"
        class="${0}"
        part="link"
        download="${0}"
        href="${0}"
        hreflang="${0}"
        ping="${0}"
        rel="${0}"
        target="${0}"
        type="${0}"
        @click="${0}">
        ${0}
      </a>
    `),
              t(o),
              a,
              t(e),
              t(i),
              t(n),
              t(d),
              t(s),
              t(r),
              t(c),
              k,
              this._renderInner()
            );
          },
        },
        {
          kind: 'field',
          decorators: [s({ type: Boolean, reflect: !0 })],
          key: 'disabled',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'download',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'href',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'hreflang',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ type: Boolean, reflect: !0 })],
          key: 'inline',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [s({ attribute: 'link-role' })],
          key: 'linkRole',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'ping',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'rel',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'size',
          value: () => m,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'target',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ reflect: !0 })],
          key: 'type',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [s({ type: Boolean, reflect: !0 })],
          key: 'visited',
          value: () => !1,
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const { disabled: e } = this;
            return e ? this._renderDisabledLink() : this._renderLink();
          },
        },
        {
          kind: 'field',
          static: !0,
          key: 'shadowRootOptions',
          value: () =>
            e(e({}, d.shadowRootOptions), {}, { delegatesFocus: !0 }),
        },
        { kind: 'field', static: !0, key: 'styles', value: () => v },
      ],
    };
  },
  a(d)
);
export { y as C };
