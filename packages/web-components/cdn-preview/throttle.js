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

import { r as n, t as i, i as t } from './toNumber.js';
var r = function () {
    return n.Date.now();
  },
  e = 'Expected a function',
  o = Math.max,
  a = Math.min;
function u(n, u, f) {
  var c,
    v,
    d,
    l,
    m,
    s,
    p = 0,
    g = !1,
    T = !1,
    x = !0;
  if ('function' != typeof n) throw new TypeError(e);
  function h(i) {
    var t = c,
      r = v;
    return (c = v = void 0), (p = i), (l = n.apply(r, t));
  }
  function w(n) {
    var i = n - s;
    return void 0 === s || i >= u || i < 0 || (T && n - p >= d);
  }
  function y() {
    var n = r();
    if (w(n)) return E(n);
    m = setTimeout(
      y,
      (function (n) {
        var i = u - (n - s);
        return T ? a(i, d - (n - p)) : i;
      })(n)
    );
  }
  function E(n) {
    return (m = void 0), x && c ? h(n) : ((c = v = void 0), l);
  }
  function W() {
    var n = r(),
      i = w(n);
    if (((c = arguments), (v = this), (s = n), i)) {
      if (void 0 === m)
        return (function (n) {
          return (p = n), (m = setTimeout(y, u)), g ? h(n) : l;
        })(s);
      if (T) return clearTimeout(m), (m = setTimeout(y, u)), h(s);
    }
    return void 0 === m && (m = setTimeout(y, u)), l;
  }
  return (
    (u = i(u) || 0),
    t(f) &&
      ((g = !!f.leading),
      (d = (T = 'maxWait' in f) ? o(i(f.maxWait) || 0, u) : d),
      (x = 'trailing' in f ? !!f.trailing : x)),
    (W.cancel = function () {
      void 0 !== m && clearTimeout(m), (p = 0), (c = s = v = m = void 0);
    }),
    (W.flush = function () {
      return void 0 === m ? l : E(r());
    }),
    W
  );
}
function f(n, i, r) {
  var e = !0,
    o = !0;
  if ('function' != typeof n) throw new TypeError('Expected a function');
  return (
    t(r) &&
      ((e = 'leading' in r ? !!r.leading : e),
      (o = 'trailing' in r ? !!r.trailing : o)),
    u(n, i, { leading: e, maxWait: i, trailing: o })
  );
}
export { f as t };
