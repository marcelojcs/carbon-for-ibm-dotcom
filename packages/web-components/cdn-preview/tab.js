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

import { _ as e } from './decorate.js';
import { _ as t, a as o } from './get.js';
import { a as l, n as i, x as a } from './query-assigned-elements.js';
import { p as n } from './settings.js';
import { _ as s } from './objectSpread2.js';
import { o as d } from './class-map.js';
import { l as r } from './if-defined.js';
import { F as c } from './focus.js';
import { s as u, T as f, a as k } from './tabs.js';
import { c as p } from './carbon-element.js';
let y,
  h,
  v,
  m,
  b = (e) => e,
  $ = e(
    [p(`${n}-content-switcher-item`)],
    function (e, t) {
      return {
        F: class extends t {
          constructor(...t) {
            super(...t), e(this);
          }
        },
        d: [
          {
            kind: 'field',
            decorators: [i({ type: Boolean, reflect: !0 })],
            key: 'disabled',
            value: () => !1,
          },
          {
            kind: 'field',
            decorators: [
              i({ type: Boolean, reflect: !0, attribute: 'hide-divider' }),
            ],
            key: 'hideDivider',
            value: () => !1,
          },
          {
            kind: 'field',
            decorators: [i({ type: Boolean, reflect: !0 })],
            key: 'selected',
            value: () => !1,
          },
          { kind: 'field', decorators: [i()], key: 'target', value: void 0 },
          { kind: 'field', decorators: [i()], key: 'value', value: () => '' },
          {
            kind: 'field',
            decorators: [i({ type: Boolean, reflect: !0 })],
            key: 'icon',
            value: () => !1,
          },
          {
            kind: 'field',
            decorators: [i({ reflect: !0, type: String })],
            key: 'align',
            value: () => 'top',
          },
          {
            kind: 'field',
            decorators: [
              i({
                attribute: 'close-on-activation',
                reflect: !0,
                type: Boolean,
              }),
            ],
            key: 'closeOnActivation',
            value: () => !0,
          },
          { kind: 'field', key: 'enterDelayMs', value: () => 100 },
          { kind: 'field', key: 'leaveDelayMs', value: () => 100 },
          {
            kind: 'method',
            key: 'updated',
            value: function (e) {
              var t;
              e &&
                (null === (t = this.shadowRoot) ||
                  void 0 === t ||
                  null === (t = t.querySelector(`${n}-tooltip`)) ||
                  void 0 === t ||
                  null === (t = t.shadowRoot) ||
                  void 0 === t ||
                  null === (t = t.querySelector(`.${n}--tooltip`)) ||
                  void 0 === t ||
                  t.classList.add(`${n}--icon-tooltip`));
            },
          },
          {
            kind: 'method',
            key: '_renderTooltipContent',
            value: function () {
              return a(
                y ||
                  (y = b`
      <cds-tooltip-content>
        <slot name="tooltip-content"></slot>
      </cds-tooltip-content>
    `)
              );
            },
          },
          {
            kind: 'method',
            key: 'shouldUpdate',
            value: function (e) {
              if (e.has('selected') || e.has('target')) {
                const { selected: e, target: t } = this;
                if (t) {
                  const o = this.getRootNode(),
                    l = null == o ? void 0 : o.getElementById(t);
                  null == l || l.toggleAttribute('hidden', !e);
                }
              }
              return !0;
            },
          },
          {
            kind: 'method',
            key: 'render',
            value: function () {
              const { disabled: e, selected: t, target: o } = this,
                l = d({
                  [`${n}--content-switcher-btn`]: !0,
                  [`${n}--content-switcher--selected`]: t,
                }),
                i = a(
                  h ||
                    (h = b`<button
      type="button"
      role="tab"
      class="${0}"
      ?disabled="${0}"
      tabindex="${0}"
      aria-controls="${0}"
      aria-selected="${0}">
      <span class="${0}--content-switcher__label"><slot></slot></span>
    </button>`),
                  l,
                  e,
                  t ? '0' : '-1',
                  r(o),
                  Boolean(t),
                  n
                );
              if (this.icon) {
                const {
                  align: e,
                  closeOnActivation: t,
                  enterDelayMs: o,
                  leaveDelayMs: l,
                } = this;
                return a(
                  v ||
                    (v = b`<cds-tooltip
        align=${0}
        close-on-activation="${0}"
        enter-delay-ms=${0}
        leave-delay-ms=${0}>
        ${0} ${0}
      </cds-tooltip>`),
                  e,
                  t,
                  o,
                  l,
                  i,
                  this._renderTooltipContent()
                );
              }
              return i;
            },
          },
          {
            kind: 'field',
            static: !0,
            key: 'shadowRootOptions',
            value: () =>
              s(s({}, l.shadowRootOptions), {}, { delegatesFocus: !0 }),
          },
          { kind: 'field', static: !0, key: 'styles', value: () => u },
        ],
      };
    },
    c(l)
  ),
  g = (e) => e;
let j = e(
  [p(`${n}-tab`)],
  function (e, l) {
    class s extends l {
      constructor(...t) {
        super(...t), e(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'field',
          decorators: [i({ type: Boolean, reflect: !0 })],
          key: 'highlighted',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [i({ reflect: !0 })],
          key: 'type',
          value: () => f.REGULAR,
        },
        { kind: 'field', decorators: [i()], key: 'tabTitle', value: void 0 },
        {
          kind: 'method',
          key: '_handleSlotChange',
          value: function ({ target: e }) {
            const t = e.assignedNodes();
            this.tabTitle = t[0].textContent;
          },
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            this.hasAttribute('role') || this.setAttribute('role', 'listitem'),
              (function (e, l, i, a) {
                var n = t(o(1 & a ? e.prototype : e), l, i);
                return 2 & a
                  ? function (e) {
                      return n.apply(i, e);
                    }
                  : n;
              })(
                s,
                'connectedCallback',
                this,
                3
              )([]);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const {
              disabled: e,
              selected: t,
              tabTitle: o,
              _handleSlotChange: l,
            } = this;
            return a(
              m ||
                (m = g`
      <a
        class="${0}--tabs__nav-link"
        role="tab"
        aria-label="${0}"
        tabindex="${0}"
        ?disabled="${0}"
        aria-selected="${0}">
        <slot @slotchange="${0}"></slot>
      </a>
    `),
              n,
              o,
              t ? 0 : -1,
              e,
              Boolean(t),
              l
            );
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => k },
      ],
    };
  },
  $
);
export { j as C };
