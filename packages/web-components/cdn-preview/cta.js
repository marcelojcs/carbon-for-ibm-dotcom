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
import { b as t, n as r, x as i, s as n } from './query-assigned-elements.js';
import { s as o } from './spread.js';
import { a, s as l, b as s } from './20.js';
import { g as d } from './_commonjsHelpers.js';
import { t as c, _ as u, a as p, r as h, b as v } from './index3.js';
import { l as f } from './index.js';
import { C as m, f as y, a as w } from './formatVideoCaption.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const b = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M24.59 16.59L17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ g = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M26 24v4H6V24H4v4H4a2 2 0 002 2H26a2 2 0 002-2h0V24zM26 14L24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"></path></svg>`;
var A,
  E,
  k = { exports: {} };
(A = k),
  (E = c.exports),
  (A.exports = function (e, t, r) {
    return (
      (t = E(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }),
  (A.exports.__esModule = !0),
  (A.exports.default = A.exports);
var T,
  D,
  O,
  _,
  V,
  C,
  M,
  x,
  P,
  L,
  I,
  R,
  H,
  N,
  U,
  S,
  $,
  j,
  z,
  B,
  F = d(k.exports);
function K(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? K(Object(r), !0).forEach(function (t) {
          F(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : K(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
var Z =
    null !==
      (T =
        null !==
          (D =
            null === (O = e) ||
            void 0 === O ||
            null === (O = O.env) ||
            void 0 === O
              ? void 0
              : O.REACT_APP_KALTURA_PARTNER_ID) && void 0 !== D
          ? D
          : null === (_ = e) ||
            void 0 === _ ||
            null === (_ = _.env) ||
            void 0 === _
          ? void 0
          : _.KALTURA_PARTNER_ID) && void 0 !== T
      ? T
      : 1773841,
  q = {
    VIDEO:
      null !==
        (V =
          null !==
            (C =
              null === (M = e) ||
              void 0 === M ||
              null === (M = M.env) ||
              void 0 === M
                ? void 0
                : M.REACT_APP_KALTURA_UICONF_ID_VIDEO) && void 0 !== C
            ? C
            : null === (x = e) ||
              void 0 === x ||
              null === (x = x.env) ||
              void 0 === x
            ? void 0
            : x.KALTURA_UICONF_ID_VIDEO) && void 0 !== V
        ? V
        : 57792212,
    AUDIO:
      null !==
        (P =
          null !==
            (L =
              null === (I = e) ||
              void 0 === I ||
              null === (I = I.env) ||
              void 0 === I
                ? void 0
                : I.REACT_APP_KALTURA_UICONF_ID_AUDIO) && void 0 !== L
            ? L
            : null === (R = e) ||
              void 0 === R ||
              null === (R = R.env) ||
              void 0 === R
            ? void 0
            : R.KALTURA_UICONF_ID_AUDIO) && void 0 !== P
        ? P
        : 57792222,
    PLAYLIST:
      null !==
        (H =
          null !==
            (N =
              null === (U = e) ||
              void 0 === U ||
              null === (U = U.env) ||
              void 0 === U
                ? void 0
                : U.REACT_APP_KALTURA_UICONF_ID_PLAYLIST) && void 0 !== N
            ? N
            : null === (S = e) ||
              void 0 === S ||
              null === (S = S.env) ||
              void 0 === S
            ? void 0
            : S.KALTURA_UICONF_ID_PLAYLIST) && void 0 !== H
        ? H
        : 57792212,
    REELS:
      null !==
        ($ =
          null !==
            (j =
              null === (z = e) ||
              void 0 === z ||
              null === (z = z.env) ||
              void 0 === z
                ? void 0
                : z.REACT_APP_KALTURA_UICONF_ID_REELS) && void 0 !== j
            ? j
            : null === (B = e) ||
              void 0 === B ||
              null === (B = B.env) ||
              void 0 === B
            ? void 0
            : B.KALTURA_UICONF_ID_REELS) && void 0 !== $
        ? $
        : 57792212,
  },
  W =
    (e && (e.env.REACT_APP_KALTURA_ENVIRONMENT || e.env.KALTURA_ENVIRONMENT)) ||
    'LATEST',
  X = { DEVELOPMENT: 'development', LATEST: 'latest', NEXT: 'next' },
  G = function () {
    return 'https://1.www.s81c.com/common/mediacenter/player/loader/'.concat(
      X[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W],
      '/loader.js'
    );
  };
void 0 === f._ibmKalturaScriptLoading && (f._ibmKalturaScriptLoading = !1);
var J = Promise.resolve();
function Q(e, t) {
  var r,
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : W,
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
  null != f &&
  null !== (r = f.IBM) &&
  void 0 !== r &&
  null !== (r = r.Mediacenter) &&
  void 0 !== r &&
  r.player
    ? ((f._ibmKalturaScriptLoading = !1), e())
    : f._ibmKalturaScriptLoading
    ? n < 50
      ? setTimeout(function () {
          Q(e, t, i, n + 1);
        }, 100)
      : t()
    : (!(function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W;
        f._ibmKalturaScriptLoading = !0;
        var t = document.createElement('script');
        (t.src = G(e)), (t.async = !0), document.body.appendChild(t);
      })(i),
      Q(e, t, i, n));
}
var ee = (function () {
  return u(
    function e() {
      v(this, e);
    },
    null,
    [
      {
        key: 'checkScript',
        value: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W;
          return new Promise(function (t, r) {
            Q(t, r, e);
          });
        },
      },
      {
        key: 'getThumbnailUrl',
        value: function (e) {
          var t,
            r = e.mediaId,
            i = void 0 === r ? '' : r,
            n = e.height,
            o = void 0 === n ? 0 : n,
            a = e.width,
            l = void 0 === a ? 0 : a,
            s = e.partnerId,
            d = void 0 === s ? Z : s;
          return (
            (null == f ||
            null === (t = f.IBM) ||
            void 0 === t ||
            null === (t = t.Mediacenter) ||
            void 0 === t ||
            null === (t = t.player) ||
            void 0 === t ||
            null === (t = t.api) ||
            void 0 === t
              ? void 0
              : t.getThumbnail(d, i, l, o)) || ''
          );
        },
      },
      {
        key: 'api',
        value:
          ((t = p(
            h.mark(function e(t) {
              var r,
                i = arguments;
              return h.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = i.length > 1 && void 0 !== i[1] ? i[1] : Z),
                          (e.next = 1),
                          this.checkScript().then(function () {
                            var e;
                            return (
                              (null == f ||
                              null === (e = f.IBM) ||
                              void 0 === e ||
                              null === (e = e.Mediacenter) ||
                              void 0 === e ||
                              null === (e = e.player) ||
                              void 0 === e ||
                              null === (e = e.api) ||
                              void 0 === e
                                ? void 0
                                : e.getMediaProperties(r, t)) || {}
                            );
                          })
                        );
                      case 1:
                        return e.abrupt('return', e.sent);
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function (e) {
            return t.apply(this, arguments);
          }),
      },
      {
        key: 'embedMedia',
        value:
          ((e = p(
            h.mark(function e(t, r) {
              var i,
                n,
                o,
                a = arguments;
              return h.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = a.length > 2 && void 0 !== a[2] ? a[2] : {}),
                          (n =
                            a.length > 3 && void 0 !== a[3]
                              ? a[3]
                              : function () {}),
                          (o = a.length > 4 && void 0 !== a[4] ? a[4] : Z),
                          (e.next = 1),
                          this.checkScript().then(function () {
                            var e = (function () {
                              var e = p(
                                h.mark(function e() {
                                  var a, l, s, d, c, u, p, v, m, y, w;
                                  return h.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (c =
                                              null !==
                                                (a =
                                                  null == i
                                                    ? void 0
                                                    : i.playerType) &&
                                              void 0 !== a
                                                ? a
                                                : 'VIDEO'),
                                            (u =
                                              null !==
                                                (l = X[i.playerEnvironment]) &&
                                              void 0 !== l
                                                ? l
                                                : X[W]),
                                            (p =
                                              null !== (s = i.playerUiConfId) &&
                                              void 0 !== s
                                                ? s
                                                : q[c]),
                                            (v = Y(
                                              {
                                                playerType: c,
                                                autoPlay: !0,
                                                muted: !0,
                                                loop: !1,
                                                playerMode: 'default',
                                                environment: u,
                                                partnerId: o,
                                                uiConfId: p,
                                                targetId: r,
                                              },
                                              i
                                            )),
                                            ('VIDEO' !== c && 'AUDIO' !== c) ||
                                              (v.entryId = t),
                                            !document.getElementById(r) &&
                                              document.querySelector(
                                                'cds-tabs-extended-media'
                                              ) &&
                                              ((y =
                                                document.createElement(
                                                  'div'
                                                )).classList.add(
                                                'bx--video-player__video'
                                              ),
                                              y.setAttribute('id', r),
                                              document.body.append(y),
                                              (m = !0)),
                                            (e.next = 1),
                                            null == f ||
                                            null === (d = f.IBM) ||
                                            void 0 === d ||
                                            null === (d = d.Mediacenter) ||
                                            void 0 === d ||
                                            null === (d = d.player) ||
                                            void 0 === d
                                              ? void 0
                                              : d.embed(v)
                                          );
                                        case 1:
                                          return (
                                            (w = e.sent),
                                            n(w),
                                            m &&
                                              document
                                                .querySelector(
                                                  'cds-tabs-extended-media'
                                                )
                                                .shadowRoot.querySelector(
                                                  '.bx--accordion__item--active cds-video-player'
                                                )
                                                .lastChild.parentElement.appendChild(
                                                  document.getElementById(r)
                                                ),
                                            e.abrupt('return', w)
                                          );
                                        case 2:
                                        case 'end':
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })();
                            return (J = J.then(function () {
                              return e();
                            }));
                          })
                        );
                      case 1:
                        return e.abrupt('return', e.sent);
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function (t, r) {
            return e.apply(this, arguments);
          }),
      },
    ]
  );
  var e, t;
})();
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const te = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"></path><path d="M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ re = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ ie = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M4 24H14V26H4zM4 18H14V20H4zM26 14H6a2 2 0 01-2-2V6A2 2 0 016 4H26a2 2 0 012 2v6A2 2 0 0126 14zM6 6v6H26V6zM26 28H20a2 2 0 01-2-2V20a2 2 0 012-2h6a2 2 0 012 2v6A2 2 0 0126 28zm-6-8v6h6V20z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ ne = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M30 18L30 16 24 16 24 26 26 26 26 22 29 22 29 20 26 20 26 18 30 18zM19 26H15V16h4a3.0033 3.0033 0 013 3v4A3.0033 3.0033 0 0119 26zm-2-2h2a1.0011 1.0011 0 001-1V19a1.0011 1.0011 0 00-1-1H17zM11 16H6V26H8V23h3a2.0027 2.0027 0 002-2V18A2.0023 2.0023 0 0011 16zM8 21V18h3l.001 3z"></path><path d="M22,14V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,14,2H4A2.0059,2.0059,0,0,0,2,4V28a2,2,0,0,0,2,2H20V28H4V4h8v6a2.0059,2.0059,0,0,0,2,2h6v2Zm-8-4V4.4L19.6,10Z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ oe = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"></path><path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"></path><path d="M26 6L26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6 26 6z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ ae = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ le = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2019, 2020
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ se = ({ children: e, ...r } = {}) =>
    t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${o(
      r
    )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"></path></svg>`;
let de,
  ce = (e) => e;
function ue(e, t, r, i) {
  var n = pe();
  if (i) for (var o = 0; o < i.length; o++) n = i[o](n);
  var a = t(function (e) {
      n.initializeInstanceElements(e, l.elements);
    }, r),
    l = n.decorateClass(
      (function (e) {
        for (
          var t = [],
            r = function (e) {
              return (
                'method' === e.kind &&
                e.key === o.key &&
                e.placement === o.placement
              );
            },
            i = 0;
          i < e.length;
          i++
        ) {
          var n,
            o = e[i];
          if ('method' === o.kind && (n = t.find(r)))
            if (me(o.descriptor) || me(n.descriptor)) {
              if (fe(o) || fe(n))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              n.descriptor = o.descriptor;
            } else {
              if (fe(o)) {
                if (fe(n))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                n.decorators = o.decorators;
              }
              ve(o, n);
            }
          else t.push(o);
        }
        return t;
      })(a.d.map(he)),
      e
    );
  return (
    n.initializeClassElements(a.F, l.elements),
    n.runClassFinishers(a.F, l.finishers)
  );
}
function pe() {
  pe = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, t) {
      ['method', 'field'].forEach(function (r) {
        t.forEach(function (t) {
          t.kind === r &&
            'own' === t.placement &&
            this.defineClassElement(e, t);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, t) {
      var r = e.prototype;
      ['method', 'field'].forEach(function (i) {
        t.forEach(function (t) {
          var n = t.placement;
          if (t.kind === i && ('static' === n || 'prototype' === n)) {
            var o = 'static' === n ? e : r;
            this.defineClassElement(o, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var r = t.descriptor;
      if ('field' === t.kind) {
        var i = t.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === i ? void 0 : i.call(e),
        };
      }
      Object.defineProperty(e, t.key, r);
    },
    decorateClass: function (e, t) {
      var r = [],
        i = [],
        n = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, n);
        }, this),
        e.forEach(function (e) {
          if (!fe(e)) return r.push(e);
          var t = this.decorateElement(e, n);
          r.push(t.element),
            r.push.apply(r, t.extras),
            i.push.apply(i, t.finishers);
        }, this),
        !t)
      )
        return { elements: r, finishers: i };
      var o = this.decorateConstructor(r, t);
      return i.push.apply(i, o.finishers), (o.finishers = i), o;
    },
    addElementPlacement: function (e, t, r) {
      var i = t[e.placement];
      if (!r && -1 !== i.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      i.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var r = [], i = [], n = e.decorators, o = n.length - 1;
        o >= 0;
        o--
      ) {
        var a = t[e.placement];
        a.splice(a.indexOf(e.key), 1);
        var l = this.fromElementDescriptor(e),
          s = this.toElementFinisherExtras((0, n[o])(l) || l);
        (e = s.element),
          this.addElementPlacement(e, t),
          s.finisher && i.push(s.finisher);
        var d = s.extras;
        if (d) {
          for (var c = 0; c < d.length; c++) this.addElementPlacement(d[c], t);
          r.push.apply(r, d);
        }
      }
      return { element: e, finishers: i, extras: r };
    },
    decorateConstructor: function (e, t) {
      for (var r = [], i = t.length - 1; i >= 0; i--) {
        var n = this.fromClassDescriptor(e),
          o = this.toClassDescriptor((0, t[i])(n) || n);
        if (
          (void 0 !== o.finisher && r.push(o.finisher), void 0 !== o.elements)
        ) {
          e = o.elements;
          for (var a = 0; a < e.length - 1; a++)
            for (var l = a + 1; l < e.length; l++)
              if (e[a].key === e[l].key && e[a].placement === e[l].placement)
                throw new TypeError('Duplicated element (' + e[a].key + ')');
        }
      }
      return { elements: e, finishers: r };
    },
    fromElementDescriptor: function (e) {
      var t = {
        kind: e.kind,
        key: e.key,
        placement: e.placement,
        descriptor: e.descriptor,
      };
      return (
        Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === e.kind && (t.initializer = e.initializer),
        t
      );
    },
    toElementDescriptors: function (e) {
      if (void 0 !== e)
        return ((t = e),
        (function (e) {
          if (Array.isArray(e)) return e;
        })(t) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return be(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? be(e, t)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (e) {
          var t = this.toElementDescriptor(e);
          return (
            this.disallowProperty(e, 'finisher', 'An element descriptor'),
            this.disallowProperty(e, 'extras', 'An element descriptor'),
            t
          );
        }, this);
      var t;
    },
    toElementDescriptor: function (e) {
      var t = e.kind + '';
      if ('method' !== t && 'field' !== t)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            t +
            '"'
        );
      var r = we(e.key),
        i = e.placement + '';
      if ('static' !== i && 'prototype' !== i && 'own' !== i)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            i +
            '"'
        );
      var n = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var o = {
        kind: t,
        key: r,
        placement: i,
        descriptor: Object.assign({}, n),
      };
      return (
        'field' !== t
          ? this.disallowProperty(e, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              n,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              n,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              n,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (o.initializer = e.initializer)),
        o
      );
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: ye(e, 'finisher'),
        extras: this.toElementDescriptors(e.extras),
      };
    },
    fromClassDescriptor: function (e) {
      var t = {
        kind: 'class',
        elements: e.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        t
      );
    },
    toClassDescriptor: function (e) {
      var t = e.kind + '';
      if ('class' !== t)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            t +
            '"'
        );
      this.disallowProperty(e, 'key', 'A class descriptor'),
        this.disallowProperty(e, 'placement', 'A class descriptor'),
        this.disallowProperty(e, 'descriptor', 'A class descriptor'),
        this.disallowProperty(e, 'initializer', 'A class descriptor'),
        this.disallowProperty(e, 'extras', 'A class descriptor');
      var r = ye(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: r };
    },
    runClassFinishers: function (e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = (0, t[r])(e);
        if (void 0 !== i) {
          if ('function' != typeof i)
            throw new TypeError('Finishers must return a constructor.');
          e = i;
        }
      }
      return e;
    },
    disallowProperty: function (e, t, r) {
      if (void 0 !== e[t])
        throw new TypeError(r + " can't have a ." + t + ' property.');
    },
  };
  return e;
}
function he(e) {
  var t,
    r = we(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var i = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: r,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (i.decorators = e.decorators),
    'field' === e.kind && (i.initializer = e.value),
    i
  );
}
function ve(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function fe(e) {
  return e.decorators && e.decorators.length;
}
function me(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function ye(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function we(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var i = r.call(e, t || 'default');
      if ('object' != typeof i) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function be(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function ge() {
  return (
    (ge =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var i = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = Ae(e)); );
              return e;
            })(e, t);
            if (i) {
              var n = Object.getOwnPropertyDescriptor(i, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }),
    ge.apply(null, arguments)
  );
}
function Ae(e) {
  return (
    (Ae = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Ae(e)
  );
}
const { prefix: Ee, stablePrefix: ke } = n,
  Te = {
    [m.LOCAL]: a,
    [`${m.LOCAL}-rtl`]: l,
    [m.DOWNLOAD]: g,
    [m.EXTERNAL]: te,
    [m.NEW_TAB]: oe,
    [m.JUMP]: b,
    [m.VIDEO]: re,
    [m.PDF]: ne,
    [m.BLOG]: ie,
    [m.EMAIL]: se,
    [m.SCHEDULE]: le,
    [m.CHAT]: s,
    [m.CALL]: ae,
  },
  De = {
    [m.LOCAL]: '',
    [m.DOWNLOAD]: ' - This link downloads a file',
    [m.EXTERNAL]: ' - This link opens in a new tab',
    [m.NEW_TAB]: ' - This link opens in a new tab',
    [m.JUMP]: '',
    [m.VIDEO]: ' - This link plays a video',
    [m.PDF]: ' - This link downloads a pdf',
    [m.BLOG]: '',
  },
  Oe = (e) =>
    ue(
      null,
      function (e, t) {
        class n extends t {
          constructor(...t) {
            super(...t), e(this);
          }
        }
        return {
          F: n,
          d: [
            {
              kind: 'method',
              key: '_handleClick',
              value: function (e) {
                const {
                  ctaType: t,
                  disabled: r,
                  href: i,
                  videoDescription: n,
                  videoName: o,
                } = this;
                if ((t === m.VIDEO && e.preventDefault(), r))
                  e.preventDefault(), e.stopPropagation();
                else {
                  const { eventRunAction: e } = this.constructor;
                  this.dispatchEvent(
                    new CustomEvent(e, {
                      bubbles: !0,
                      cancelable: !0,
                      composed: !0,
                      detail: {
                        href: i,
                        ctaType: t,
                        videoName: o,
                        videoDescription: n,
                      },
                    })
                  );
                }
              },
            },
            {
              kind: 'field',
              decorators: [
                r({ attribute: 'cta-type', type: String, reflect: !0 }),
              ],
              key: 'ctaType',
              value: () => m.REGULAR,
            },
            {
              kind: 'field',
              decorators: [r({ type: Boolean })],
              key: 'disabled',
              value: void 0,
            },
            {
              kind: 'field',
              decorators: [r()],
              key: 'download',
              value: void 0,
            },
            { kind: 'field', decorators: [r()], key: 'href', value: void 0 },
            { kind: 'field', decorators: [r()], key: 'target', value: void 0 },
            {
              kind: 'field',
              decorators: [r({ attribute: !1 })],
              key: 'formatVideoCaption',
              value: () => y,
            },
            {
              kind: 'field',
              decorators: [r({ attribute: !1 })],
              key: 'formatVideoDuration',
              value: () => w,
            },
            {
              kind: 'field',
              decorators: [
                r({ type: Number, attribute: 'video-duration', reflect: !0 }),
              ],
              key: 'videoDuration',
              value: void 0,
            },
            {
              kind: 'field',
              decorators: [r({ attribute: 'video-name', reflect: !0 })],
              key: 'videoName',
              value: void 0,
            },
            {
              kind: 'field',
              decorators: [r({ attribute: 'video-description', reflect: !0 })],
              key: 'videoDescription',
              value: void 0,
            },
            {
              kind: 'field',
              decorators: [r()],
              key: 'videoTitle',
              value: void 0,
            },
            {
              kind: 'method',
              key: '_renderIcon',
              value: function () {
                var e;
                const { ctaType: t } = this,
                  r =
                    null !== (e = Te[`${t}-${document.dir}`]) && void 0 !== e
                      ? e
                      : Te[t];
                return i(
                  de ||
                    (de = ce`
        <slot name="icon">
          <span class="${0}--visually-hidden" part="icon-visually-hidden"
            >${0}</span
          >
          ${0}
        </slot>
      `),
                  Ee,
                  De[t],
                  null == r
                    ? void 0
                    : r({
                        class: `${ke}--card__cta ${ke}-ce--cta__icon`,
                        part: 'cta-icon',
                      })
                );
              },
            },
            {
              kind: 'method',
              key: 'firstUpdated',
              value: function () {
                const { ctaType: e, href: t } = this;
                e === m.VIDEO && t && this._checkUrlVideoTrigger();
              },
            },
            {
              kind: 'method',
              key: 'updated',
              value: function (e) {
                var t, r, i, o, a, l;
                ((r = n),
                (i = 'updated'),
                (o = this),
                (l = ge(Ae(1 & (a = 3) ? r.prototype : r), i, o)),
                2 & a && 'function' == typeof l
                  ? function (e) {
                      return l.apply(o, e);
                    }
                  : l)([e]);
                const {
                  ctaType: s,
                  _linkNode: d,
                  videoName: c,
                  videoDescription: u,
                  href: p,
                  videoDuration: h,
                } = this;
                if (e.has('ctaType') || e.has('download')) {
                  const { download: e } = this;
                  ![m.DOWNLOAD, m.PDF].includes(s) &&
                    e &&
                    console.warn(
                      `\`download\` property used with a CTA data item besides \`type: download|pdf\` (\`type: ${s}\`).`
                    );
                  const t = {
                    [m.EMAIL]: 'email-link',
                    [m.SCHEDULE]: 'scheduler-link',
                    [m.CHAT]: 'chat-link',
                    [m.CALL]: 'phone-link',
                  };
                  Object.keys(t).includes(s) && (d.dataset.ibmContact = t[s]);
                }
                if (d && 'A' === d.nodeName) {
                  if (e.has('ctaType') || e.has('href')) {
                    const { href: e } = this,
                      t = s !== m.VIDEO ? e : '#';
                    null == t
                      ? d.removeAttribute('href')
                      : d.setAttribute('href', t);
                  }
                  if (e.has('ctaType') || e.has('target')) {
                    const { target: e } = this,
                      t =
                        [m.EXTERNAL, m.NEW_TAB].includes(s) && !e
                          ? '_blank'
                          : e;
                    t
                      ? d.setAttribute('target', t)
                      : d.removeAttribute('target');
                  }
                  d.hasAttribute('aria-label') &&
                    d.setAttribute(
                      'aria-label',
                      d.getAttribute('aria-label') + (s ? De[s] : '')
                    );
                }
                const { eventRequestVideoData: v } = this.constructor;
                e.has('ctaType') &&
                  s === m.VIDEO &&
                  void 0 === h &&
                  customElements
                    .whenDefined(`${ke}-video-cta-container`)
                    .then(() => {
                      this.dispatchEvent(
                        new CustomEvent(v, {
                          bubbles: !0,
                          cancelable: !0,
                          composed: !0,
                          detail: {
                            href: p,
                            videoName: c,
                            videoDescription: u,
                          },
                        })
                      );
                    }),
                  ((e.has('videoName') && (null === c || 'null' === c)) ||
                    e.has('videoDescription')) &&
                    void 0 === h &&
                    customElements
                      .whenDefined(`${ke}-video-cta-container`)
                      .then(() => {
                        this.dispatchEvent(
                          new CustomEvent(v, {
                            bubbles: !0,
                            cancelable: !0,
                            composed: !0,
                            detail: {
                              videoName: c,
                              videoDescription: u,
                              href: p,
                            },
                          })
                        );
                      });
                const f =
                  null == this || null === (t = this.shadowRoot) || void 0 === t
                    ? void 0
                    : t.querySelector(':first-child');
                s === m.VIDEO &&
                  f &&
                  f.offsetWidth > 0 &&
                  this._updateVideoThumbnailUrl(String(f.offsetWidth));
              },
            },
            {
              kind: 'method',
              key: '_checkUrlVideoTrigger',
              value: function () {
                const {
                  ctaType: e,
                  disabled: t,
                  href: r,
                  videoDescription: i,
                  videoName: n,
                } = this;
                if (e !== m.VIDEO || !r || t) return;
                if (this.ownerDocument.querySelector(`[href='${r}']`) !== this)
                  return;
                const { eventRunAction: o } = this.constructor;
                f.location.hash === `#${`cta-video-${r}`}` &&
                  this.dispatchEvent(
                    new CustomEvent(o, {
                      bubbles: !0,
                      cancelable: !0,
                      composed: !0,
                      detail: {
                        href: r,
                        ctaType: e,
                        videoName: n,
                        videoDescription: i,
                      },
                    })
                  );
              },
            },
            {
              kind: 'method',
              key: '_updateVideoThumbnailUrl',
              value: function (e) {
                this.videoThumbnailUrl = ee.getThumbnailUrl({
                  mediaId: this.href,
                  width: null != e ? e : '340',
                });
              },
            },
            {
              kind: 'get',
              static: !0,
              key: 'eventRequestVideoData',
              value: function () {
                return `${ke}-cta-request-video-data`;
              },
            },
            {
              kind: 'get',
              static: !0,
              key: 'eventRunAction',
              value: function () {
                return `${ke}-cta-run-action`;
              },
            },
          ],
        };
      },
      e
    );
export {
  Oe as C,
  ee as K,
  F as _,
  De as a,
  te as b,
  oe as c,
  b as d,
  ne as e,
  ie as f,
  se as g,
  le as h,
  Te as i,
  ae as j,
  re as k,
  g as s,
};
