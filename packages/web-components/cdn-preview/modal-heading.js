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
import { a as t, x as s } from './query-assigned-elements.js';
import { p as n } from './settings.js';
import { s as l } from './modal-close-button.js';
import { c as o } from './carbon-element.js';
let a,
  i,
  r = (e) => e,
  u = e(
    [o(`${n}-modal-header`)],
    function (e, t) {
      return {
        F: class extends t {
          constructor(...t) {
            super(...t), e(this);
          }
        },
        d: [
          { kind: 'field', key: '_hasSlug', value: () => !1 },
          {
            kind: 'method',
            key: '_handleSlotChange',
            value: function ({ target: e }) {
              const t = e
                .assignedNodes()
                .filter(
                  (e) =>
                    void 0 !== e.matches && e.matches(this.constructor.slugItem)
                );
              t.length > 0 &&
                ((this._hasSlug = Boolean(t)), t[0].setAttribute('size', 'lg')),
                this.requestUpdate();
            },
          },
          {
            kind: 'method',
            key: 'updated',
            value: function () {
              var e, t;
              this._hasSlug
                ? null === (e = this.parentElement) ||
                  void 0 === e ||
                  e.setAttribute('slug', '')
                : null === (t = this.parentElement) ||
                  void 0 === t ||
                  t.removeAttribute('slug');
            },
          },
          {
            kind: 'method',
            key: 'render',
            value: function () {
              return s(
                a ||
                  (a = r` <slot></slot>
      <slot name="slug" @slotchange="${0}"></slot>`),
                this._handleSlotChange
              );
            },
          },
          {
            kind: 'get',
            static: !0,
            key: 'slugItem',
            value: function () {
              return `${n}-slug`;
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => l },
        ],
      };
    },
    t
  ),
  d = (e) => e,
  m = e(
    [o(`${n}-modal-heading`)],
    function (e, t) {
      return {
        F: class extends t {
          constructor(...t) {
            super(...t), e(this);
          }
        },
        d: [
          {
            kind: 'method',
            key: 'render',
            value: function () {
              return s(i || (i = d` <slot></slot> `));
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => l },
        ],
      };
    },
    t
  );
export { u as C, m as a };
