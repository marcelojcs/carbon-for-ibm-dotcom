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

import { D as e } from './query-assigned-elements.js';
function t(e, t, r) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ('object' != typeof e || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, t || 'default');
          if ('object' != typeof n) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      })(e, 'string');
      return 'symbol' == typeof t ? t : t + '';
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
const r = (e, t) => {
    const n = e.closest(t);
    if (n) return n;
    const { host: o } = e.getRootNode();
    return o ? r(o, t) : null;
  },
  n = (n) =>
    class extends n {
      constructor(...e) {
        super(...e),
          t(this, '_disconnectedAfterCreation', !1),
          t(this, 'modalRenderRoot', null),
          t(this, 'modalTriggerProps', []);
      }
      _createAndRenderModal() {
        this.modalRenderRoot ||
          (this.modalRenderRoot = this.createModalRenderRoot());
        const { modalRenderRoot: t } = this;
        t && e(this.renderModal(), t);
      }
      get container() {
        const { selectorContainer: e } = this.constructor;
        return r(this, e) || this.ownerDocument.body;
      }
      createModalRenderRoot() {
        const { container: e, ownerDocument: t } = this,
          r = t.createElement('div');
        return (r.style.display = 'contents'), e.appendChild(r), r;
      }
      connectedCallback() {
        super.connectedCallback(),
          this._disconnectedAfterCreation &&
            ((this._disconnectedAfterCreation = !1),
            this._createAndRenderModal());
      }
      disconnectedCallback() {
        this.modalRenderRoot &&
          (this.modalRenderRoot.remove(), (this.modalRenderRoot = null)),
          super.disconnectedCallback(),
          (this._disconnectedAfterCreation = !0);
      }
      update(e) {
        const { modalTriggerProps: t } = this;
        if ((super.update(e), !this._disconnectedAfterCreation))
          if (t.length > 0) {
            const r = Array.from(e.keys());
            t.filter((e) => r.includes(e)).length > 0 &&
              this._createAndRenderModal();
          } else this._createAndRenderModal();
      }
      static get selectorContainer() {
        return '[data-modal-container]';
      }
    };
export { n as M };
