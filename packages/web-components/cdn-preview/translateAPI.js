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

let e = { env: {} };
import { _ as t, a as n, r as o, b as a } from './index3.js';
import { L as r, a as s } from './Locale.js';
import { l as i } from './index.js';
import { l as c } from './localeAPI.js';
import { T as u } from './store.js';
var l =
    (e && (e.env.REACT_APP_TRANSLATION_HOST || e.env.TRANSLATION_HOST)) ||
    'https://1.www.s81c.com',
  f = '/common/carbon-for-ibm-dotcom/translations/masthead-footer/v2.1',
  v =
    (e &&
      (e.env.REACT_APP_C4D_TRANSLATION_ENDPOINT ||
        e.env.C4D_TRANSLATION_ENDPOINT)) ||
    f,
  p = {},
  d = 'en',
  m = 'us',
  T = (function () {
    return t(
      function e() {
        a(this, e);
      },
      null,
      [
        {
          key: 'clearCache',
          value: function (e) {
            var t = this.getSessionKey(e);
            if ('undefined' != typeof sessionStorage) {
              Object.keys(p).forEach(function (e) {
                return delete p[e];
              });
              for (var n = 0; n < sessionStorage.length; ++n) {
                var o = sessionStorage.key(n);
                0 === o.indexOf(t) && sessionStorage.removeItem(o);
              }
            }
          },
        },
        {
          key: 'getTranslation',
          value:
            ((e = n(
              o.mark(function e(t, n) {
                var a,
                  s,
                  i,
                  c = this;
                return o.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((a = 'en'), (s = 'us'), !(t && t.lc && t.cc))) {
                          e.next = 1;
                          break;
                        }
                        (a = t.lc), (s = t.cc), (e.next = 3);
                        break;
                      case 1:
                        return (e.next = 2), r.getLocale();
                      case 2:
                        (i = e.sent), (a = i.lc), (s = i.cc);
                      case 3:
                        return e.abrupt(
                          'return',
                          new Promise(function (e, t) {
                            c.fetchTranslation(a, s, n, e, t);
                          })
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (t, n) {
              return e.apply(this, arguments);
            }),
        },
        {
          key: 'fetchTranslation',
          value: function (e, t, n, o, a) {
            var r = this,
              i = this.getSessionKey(n),
              c = ''.concat(i, '-').concat(t, '-').concat(e),
              u = this.getSessionCache(c);
            if (u) o(u);
            else {
              var f =
                'undefined' !== t ? ''.concat(t, '-').concat(e) : ''.concat(e);
              if (!p[f]) {
                var T = n || v,
                  g = 'undefined' !== t ? ''.concat(t).concat(e) : ''.concat(e),
                  S = /((http(s?)):\/\/)/g.test(n) ? '' : l,
                  h = ''.concat(S).concat(T, '/').concat(g, '.json');
                if (/.*1.www.s81c.com\/?#.*/.test(h)) return null;
                p[f] = s
                  .get(h, {
                    headers: { 'Content-Type': 'text/plain', origin: l },
                  })
                  .then(function (e) {
                    return r.transformData(e.data);
                  })
                  .then(function (e) {
                    return (
                      (e.timestamp = Date.now()),
                      'undefined' != typeof sessionStorage &&
                        sessionStorage.setItem(
                          ''.concat(i, '-').concat(f),
                          JSON.stringify(e)
                        ),
                      e
                    );
                  });
              }
              p[f].then(o, function (s) {
                t === m && e === d ? a(s) : r.fetchTranslation(d, m, n, o, a);
              });
            }
          },
        },
        {
          key: 'getSessionKey',
          value: function (e) {
            var t = 'c4d-translation';
            (f !== v || e) &&
              (t = (e || v).replace(
                /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
                ''
              ));
            return t;
          },
        },
        {
          key: 'transformData',
          value: function (e) {
            var t,
              n =
                null === (t = e.profileMenu) || void 0 === t
                  ? void 0
                  : t.signedout;
            if (n) {
              var o = 'state=https%3A%2F%2Fwww.ibm.com',
                a = n.findIndex(function (e) {
                  var t;
                  return (
                    -1 !==
                    (null === (t = e.url) || void 0 === t
                      ? void 0
                      : t.indexOf(o))
                  );
                });
              if (-1 !== a && i.location) {
                var r = encodeURIComponent(i.location.href);
                e.profileMenu.signedout[a].url = n[a].url.replace(
                  o,
                  'state='.concat(r)
                );
              }
            }
            return e.footerMenu.push(e.socialFollow), e;
          },
        },
        {
          key: 'getSessionCache',
          value: function (e) {
            var t =
              'undefined' == typeof sessionStorage
                ? void 0
                : JSON.parse(sessionStorage.getItem(e));
            if (t && t.timestamp) {
              if (!(Date.now() - t.timestamp > 72e5)) return t;
              sessionStorage.removeItem(e);
            }
          },
        },
      ]
    );
    var e;
  })();
function g(e, t, n) {
  return { type: u.SET_TRANSLATION, language: e, translation: t, endpoint: n };
}
function S(e, t) {
  return async (n, o) => {
    var a;
    const r = null != e ? e : await n(c()),
      { requestsTranslation: s = {} } =
        null !== (a = o().translateAPI) && void 0 !== a ? a : {};
    if (null != s && s[r]) {
      const e = null == s ? void 0 : s[r];
      if (e && e.endpoint === t) return e;
    }
    const [i, l] = r.split('-'),
      f = T.getTranslation({ cc: l.toLowerCase(), lc: i.toLowerCase() }, t);
    n(
      /**
       * @license
       *
       * Copyright IBM Corp. 2020, 2023
       *
       * This source code is licensed under the Apache-2.0 license found in the
       * LICENSE file in the root directory of this source tree.
       */
      (function (e, t, n) {
        return {
          type: u.SET_REQUEST_TRANSLATION_IN_PROGRESS,
          language: e,
          request: t,
          endpoint: n,
        };
      })(r, f, t)
    );
    try {
      n(g(r, await f, t));
    } catch (e) {
      n(
        (function (e, t) {
          return {
            type: u.SET_ERROR_REQUEST_TRANSLATION,
            language: e,
            error: t,
          };
        })(r, e)
      );
    }
    return f;
  };
}
export { S as l, g as s };
