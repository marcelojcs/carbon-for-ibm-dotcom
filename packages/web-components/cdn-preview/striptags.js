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

import { c as e } from './_commonjsHelpers.js';
var t,
  r = { exports: {} };
(t = r),
  (function (e) {
    if ('function' != typeof r) {
      var r = function (e) {
        return e;
      };
      r.nonNative = !0;
    }
    const a = r('plaintext'),
      n = r('html'),
      o = r('comment'),
      f = /<(\w*)>/g,
      i = /<\/?([^\s\/>]+)/;
    function s(e, t, r) {
      return u((e = e || ''), c((t = t || []), (r = r || '')));
    }
    function c(e, t) {
      return {
        allowable_tags: (e = (function (e) {
          let t = new Set();
          if ('string' == typeof e) {
            let r;
            for (; (r = f.exec(e)); ) t.add(r[1]);
          } else
            r.nonNative || 'function' != typeof e[r.iterator]
              ? 'function' == typeof e.forEach && e.forEach(t.add, t)
              : (t = new Set(e));
          return t;
        })(e)),
        tag_replacement: t,
        state: a,
        tag_buffer: '',
        depth: 0,
        in_quote_char: '',
      };
    }
    function u(e, t) {
      if ('string' != typeof e)
        throw new TypeError("'html' parameter must be a string");
      let r = t.allowable_tags,
        f = t.tag_replacement,
        i = t.state,
        s = t.tag_buffer,
        c = t.depth,
        u = t.in_quote_char,
        p = '';
      for (let t = 0, _ = e.length; t < _; t++) {
        let _ = e[t];
        if (i === a) '<' === _ ? ((i = n), (s += _)) : (p += _);
        else if (i === n)
          switch (_) {
            case '<':
              if (u) break;
              c++;
              break;
            case '>':
              if (u) break;
              if (c) {
                c--;
                break;
              }
              (u = ''),
                (i = a),
                (s += '>'),
                r.has(l(s)) ? (p += s) : (p += f),
                (s = '');
              break;
            case '"':
            case "'":
              (u = _ === u ? '' : u || _), (s += _);
              break;
            case '-':
              '<!-' === s && (i = o), (s += _);
              break;
            case ' ':
            case '\n':
              if ('<' === s) {
                (i = a), (p += '< '), (s = '');
                break;
              }
              s += _;
              break;
            default:
              s += _;
          }
        else
          i === o &&
            ('>' === _ ? ('--' == s.slice(-2) && (i = a), (s = '')) : (s += _));
      }
      return (
        (t.state = i),
        (t.tag_buffer = s),
        (t.depth = c),
        (t.in_quote_char = u),
        p
      );
    }
    function l(e) {
      let t = i.exec(e);
      return t ? t[1].toLowerCase() : null;
    }
    (s.init_streaming_mode = function (e, t) {
      let r = c((e = e || []), (t = t || ''));
      return function (e) {
        return u(e || '', r);
      };
    }),
      t.exports ? (t.exports = s) : (e.striptags = s);
  })(e);
var a = r.exports;
export { a as s };
