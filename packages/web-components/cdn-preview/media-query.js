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

import { b as e } from './index4.js';
import { l as t } from './index.js';
function i(e, t, i) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ('object' != typeof e || !e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
          var r = i.call(e, t || 'default');
          if ('object' != typeof r) return r;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      })(e, 'string');
      return 'symbol' == typeof t ? t : t + '';
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
let r = (function (e) {
    return (
      (e.SM = 'sm'),
      (e.MD = 'md'),
      (e.LG = 'lg'),
      (e.XLG = 'xlg'),
      (e.MAX = 'max'),
      e
    );
  })({}),
  n = (function (e) {
    return (e.MIN = 'min'), (e.MAX = 'max'), e;
  })({});
const a = (r, a) =>
  class extends r {
    constructor(...e) {
      super(...e),
        i(this, '_mqConfig', a),
        i(this, 'carbonBreakpoints', this._generateMediaQueriesByBreakpoint());
    }
    _generateMediaQueriesByBreakpoint() {
      const { _mqConfig: i } = this,
        r = Object.keys(i),
        n = {};
      return (
        r.forEach((r) => {
          n[r] = t.matchMedia(`(${i[r]}-width: ${e[r].width})`);
        }),
        n
      );
    }
    _attachMediaQueryEventListeners() {
      const { _mqConfig: e, carbonBreakpoints: t } = this;
      Object.keys(t).forEach((t) => {
        const i = `mediaQueryCallback${
          e[t] === n.MAX ? `${e[t][0].toUpperCase()}${e[t].slice(1)}` : ''
        }${t.toUpperCase()}`;
        'function' == typeof this[i]
          ? this.carbonBreakpoints[t].addEventListener(
              'change',
              this[i].bind(this)
            )
          : console.warn(
              `MediaQueryMixin: Element ${this.nodeName} has not defined a callback for the "${t}" breakpoint. Please remove the breakpoint from the mixin configuration or implement the following method: ${i}`
            );
      });
    }
    firstUpdated() {
      this._attachMediaQueryEventListeners(), super.firstUpdated();
    }
  };
export { a as M, r as a, n as b };
