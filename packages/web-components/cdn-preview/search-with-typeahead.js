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
import { l as t } from './if-defined.js';
import { o as s } from './class-map.js';
import {
  b as o,
  i as r,
  a as i,
  n as d,
  x as c,
  s as n,
} from './query-assigned-elements.js';
import { t as a } from './state.js';
import { i as l } from './query.js';
import { s as p } from './204.js';
import { s as u } from './spread.js';
import { D as m, C as g } from './dropdown.js';
import { H as b } from './host-listener.js';
import { H as h } from './host-listener2.js';
import { b as v, a as f } from './index4.js';
import { _, a as x, r as y, b as k } from './index3.js';
import { a as w, L as z } from './Locale.js';
import { i as S, a as E } from './collection-helpers.js';
import { S as I } from './stable-selector.js';
import { c as $ } from './carbon-element.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const P = ({ children: e, ...t } = {}) =>
  o`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${u(
    t
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path></svg>`;
var T = (e && e.env.SEARCH_TYPEAHEAD_API) || 'https://www-api.ibm.com',
  A = (e && e.env.SEARCH_TYPEAHEAD_VERSION) || 'v1',
  R = ''.concat(T, '/search/typeahead/').concat(A),
  C = (function () {
    return _(
      function e() {
        k(this, e);
      },
      null,
      [
        {
          key: 'getResults',
          value:
            ((e = x(
              y.mark(function e(t) {
                var s,
                  o,
                  r,
                  i,
                  d = arguments;
                return y.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = d.length > 1 && void 0 !== d[1] ? d[1] : ''),
                          (e.next = 1),
                          z.getLang()
                        );
                      case 1:
                        return (
                          (o = e.sent),
                          (r = [
                            'lang='
                              .concat(o.lc)
                              .concat(o.cc ? '&cc='.concat(o.cc) : ''),
                            'query='.concat(encodeURIComponent(t)),
                            ''.concat(s ? 'appid='.concat(s) : ''),
                          ]
                            .filter(function (e) {
                              return e;
                            })
                            .join('&')),
                          (i = ''.concat(R, '?').concat(r)),
                          (e.next = 2),
                          w
                            .get(i, {
                              headers: {
                                'Content-Type':
                                  'application/json; charset=utf-8',
                              },
                            })
                            .then(function (e) {
                              return e.data.response;
                            })
                        );
                      case 2:
                        return e.abrupt('return', e.sent);
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (t) {
              return e.apply(this, arguments);
            }),
        },
      ]
    );
    var e;
  })(),
  B = r([
    '.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{--cds-popover-drop-shadow:drop-shadow(0 2px 2px rgba(0,0,0,.2))}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{filter:var(--cds-popover-drop-shadow,none);inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;background-color:var(--cds-popover-background-color,var(--cds-layer));border:0;border-radius:var(--cds-popover-border-radius,2px);box-sizing:border-box;color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;font-family:inherit;font-size:100%;inline-size:-moz-max-content;inline-size:max-content;margin:0;max-inline-size:23rem;padding:0;pointer-events:auto;position:absolute;vertical-align:baseline;z-index:6000}.cds--layout--size-sm .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{background-color:var(--cds-popover-background-color,var(--cds-layer));display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:0;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:0;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:2rem;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:inline-flex;font-family:inherit;font-size:100%;inline-size:100%;inline-size:2rem;justify-content:center;margin:0;padding:0;position:relative;text-align:start;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{color:var(--cds-text-inverse,#fff);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-block-end:1px dotted var(--cds-border-strong);border-radius:0;box-sizing:border-box;color:var(--cds-text-primary,#161616);cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{border-block-end-color:var(--cds-border-interactive,#0f62fe);outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;border-radius:0;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-shrink:0;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding:0;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline-end:calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);padding-inline-start:calc(var(--cds-layout-density-padding-inline-local) - .0625rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:baseline;vertical-align:top}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only>:first-child{margin-block-start:.0625rem;min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;inline-size:9.375rem;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:ButtonText}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--header{align-items:center;background-color:var(--cds-background,#fff);block-size:3rem;border:0;border-block-end:1px solid var(--cds-border-subtle);box-sizing:border-box;display:flex;font-family:inherit;font-size:100%;inset-block-start:0;inset-inline-end:0;inset-inline-start:0;margin:0;padding:0;position:fixed;vertical-align:baseline;z-index:8000}.cds--header *,.cds--header :after,.cds--header :before{box-sizing:inherit}.cds--header__action{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:3rem;border:.0625rem solid transparent;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;inline-size:3rem;margin:0;padding:0;text-align:start;transition:background-color .11s,border-color .11s;vertical-align:baseline}.cds--header__action *,.cds--header__action :after,.cds--header__action :before{box-sizing:inherit}.cds--header__action::-moz-focus-inner{border:0}@media (max-width:41.98rem){.cds--header__action{min-inline-size:3rem}}.cds--header__global .cds--popover{z-index:8001}.cds--header__action>:first-child{margin-block-start:0}.cds--header__action--active>svg.cds--navigation-menu-panel-expand-icon,.cds--header__action>svg.cds--navigation-menu-panel-collapse-icon{display:none}.cds--header__action--active>svg.cds--navigation-menu-panel-collapse-icon{display:inline}.cds--header__action--active{background:var(--cds-layer);border-block-end:1px solid transparent;border-inline-end:1px solid var(--cds-border-subtle);border-inline-start:1px solid var(--cds-border-subtle)}.cds--header__action--active>svg{fill:var(--cds-icon-primary,#161616)}.cds--header__action:focus{border-color:var(--cds-focus,#0f62fe);outline:none}.cds--header__action:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--header__action.cds--btn--icon-only{align-items:center;justify-content:center}.cds--btn.cds--btn--icon-only.cds--header__action svg{fill:var(--cds-icon-secondary,#525252)}.cds--btn.cds--btn--icon-only.cds--header__action--active svg,.cds--btn.cds--btn--icon-only.cds--header__action:active svg,.cds--btn.cds--btn--icon-only.cds--header__action:hover svg,.cds--header__menu-trigger:hover>svg,.cds--header__menu-trigger>svg{fill:var(--cds-icon-primary,#161616)}.cds--header__menu-toggle{align-items:center;display:flex;justify-content:center}@media (min-width:66rem){.cds--header__menu-toggle__hidden{display:none}}a.cds--header__name{align-items:center;block-size:100%;border:.125rem solid transparent;display:flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:600;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);letter-spacing:.1px;line-height:var(--cds-body-compact-01-line-height,1.28572);line-height:1.25rem;outline:none;padding:0 2rem 0 1rem;text-decoration:none;transition:border-color .11s;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (max-width:41.98rem){a.cds--header__name{padding:0 1rem}}a.cds--header__name:focus{border-color:var(--cds-focus,#0f62fe)}.cds--header__name--prefix{font-weight:400}a.cds--header__name,a.cds--header__name:hover{color:var(--cds-text-primary,#161616)}.cds--header__menu-toggle:not(.cds--header__menu-toggle__hidden)~.cds--header__name{padding-inline-start:.5rem}.cds--header__nav{block-size:100%;display:none;padding-inline-start:1rem;position:relative}@media (min-width:66rem){.cds--header__nav{display:block}}.cds--header__nav:before{background-color:var(--cds-border-subtle);block-size:1.5rem;content:"";display:block;inline-size:.0625rem;inset-block-start:50%;inset-inline-start:0;position:absolute;transform:translateY(-50%)}.cds--header__menu-bar{block-size:100%;border:0;box-sizing:border-box;display:flex;font-family:inherit;font-size:100%;list-style:none;margin:0;padding:0;vertical-align:baseline}.cds--header__menu-bar *,.cds--header__menu-bar :after,.cds--header__menu-bar :before{box-sizing:inherit}a.cds--header__menu-item{align-items:center;background-color:var(--cds-background,#fff);block-size:100%;border:2px solid transparent;color:var(--cds-text-secondary,#525252);display:flex;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.125rem;padding:0 1rem;position:relative;text-decoration:none;transition:background-color .11s,border-color .11s,color .11s;-webkit-user-select:none;-moz-user-select:none;user-select:none}a.cds--header__menu-item:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--header__action:active,a.cds--header__menu-item:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5));color:var(--cds-text-primary,#161616)}a.cds--header__menu-item:focus{border-color:var(--cds-focus,#0f62fe);outline:none}a.cds--header__menu-item:active>svg,a.cds--header__menu-item:hover>svg{fill:var(--cds-icon-primary,#161616)}.cds--header__menu-item--current,a.cds--header__menu-item[aria-current=page]{color:var(--cds-text-primary,#161616)}.cds--header__menu-item--current:after,a.cds--header__menu-item[aria-current=page]:after{background-color:var(--cds-border-interactive,#0f62fe);block-size:3px;content:"";inline-size:calc(100% + 4px);inset-block-end:-2px;inset-inline-start:-2px;position:absolute}.cds--header__menu-item--current:focus:after,a.cds--header__menu-item[aria-current=page]:focus:after{border:0}.cds--header__submenu .cds--header__menu .cds--header__menu-item--current:after,.cds--header__submenu .cds--header__menu a.cds--header__menu-item[aria-current=page]:after{background-color:var(--cds-border-interactive,#0f62fe);block-size:calc(100% + 4px);inline-size:3px;inset-block-start:-2px;inset-inline-start:-2px}.cds--header__submenu .cds--header__menu .cds--header__menu-item--current:focus:after,.cds--header__submenu .cds--header__menu a.cds--header__menu-item[aria-current=page]:focus:after{background-color:var(--cds-border-interactive,#0f62fe);block-size:calc(100% + 4px);inline-size:5px;inset-block-start:-2px;inset-inline-start:-2px}a.cds--header__menu-item.cds--header__menu-item--current:focus,a.cds--header__menu-item[aria-current=page]:focus{border:2px solid var(--cds-focus,#0f62fe)}.cds--header__menu-title[aria-haspopup=true],.cds--header__submenu{position:relative}.cds--header__menu-title[aria-expanded=true]{background-color:var(--cds-layer);color:var(--cds-text-secondary,#525252);z-index:8002}.cds--header__menu-title[aria-expanded=true]>.cds--header__menu-arrow{transform:rotate(180deg)}.cds--header__menu{display:none;list-style:none;margin:0;padding:0}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu{background-color:var(--cds-layer);box-shadow:0 4px 8px 0 rgba(0,0,0,.5);display:flex;flex-direction:column;inline-size:12.5rem;inset-block-end:0;inset-inline-start:0;position:absolute;transform:translateY(100%);z-index:8001}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item{background-color:var(--cds-layer)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item:hover{background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item:active{background-color:var(--cds-layer-active);color:var(--cds-text-primary,#161616)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item.cds--header__menu-item--current{background-color:var(--cds-layer-selected)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}.cds--header__menu .cds--header__menu-item{block-size:3rem}.cds--header__menu-arrow{fill:var(--cds-icon-secondary,#525252);margin-inline-start:.5rem;transition:transform .11s,fill .11s}.cds--header__global{block-size:100%;display:flex;flex:1 1 0%;justify-content:flex-end}.cds--skip-to-content{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap}.cds--skip-to-content:focus{clip:auto;align-items:center;block-size:3rem;border:4px solid var(--cds-focus,#0f62fe);display:flex;inline-size:auto;outline:none;padding:0 1rem;z-index:9999}.cds--side-nav,.cds--skip-to-content:focus{background-color:var(--cds-background,#fff);color:var(--cds-text-secondary,#525252);inset-block-start:0;inset-inline-start:0}.cds--side-nav{inline-size:3rem;inset-block-end:0;max-inline-size:16rem;overflow:hidden;position:fixed;transition:inline-size .11s cubic-bezier(.2,0,1,.9),transform .11s cubic-bezier(.2,0,1,.9);will-change:inline-size;z-index:8000}.cds--side-nav--ux{inline-size:16rem;inset-block-start:3rem}@media (max-width:65.98rem){.cds--side-nav--ux{inline-size:0}}.cds--side-nav--rail{inline-size:3rem}.cds--side-nav--hidden{inline-size:0}.cds--side-nav--expanded{inline-size:16rem}.cds--side-nav__overlay{background-color:transparent;block-size:0;inline-size:0;inset-block-start:3rem;inset-inline-start:0;opacity:0;position:fixed;transition:opacity .3s cubic-bezier(.5,0,.1,1),background-color .3s cubic-bezier(.5,0,.1,1)}@media (max-width:65.98rem){.cds--side-nav__overlay-active{background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:100vh;inline-size:100vw;opacity:1;transition:opacity .3s cubic-bezier(.5,0,.1,1),background-color .3s cubic-bezier(.5,0,.1,1);z-index:6000}}.cds--header~.cds--side-nav{block-size:calc(100% - 48px);inset-block-start:3rem}.cds--side-nav--fixed{inline-size:16rem}.cds--side-nav--collapsed{inline-size:16rem;transform:translateX(-16rem)}.cds--side-nav__navigation{display:flex;flex-direction:column}.cds--side-nav__items{border:0;box-sizing:border-box;flex:1 1 0%;font-family:inherit;font-size:100%;margin:0;overflow:hidden;padding:1rem 0 0;vertical-align:baseline}.cds--side-nav__items *,.cds--side-nav__items :after,.cds--side-nav__items :before{box-sizing:inherit}.cds--side-nav--expanded .cds--side-nav__items,.cds--side-nav--fixed .cds--side-nav__items,.cds--side-nav--ux .cds--side-nav__items,.cds--side-nav:hover .cds--side-nav__items{overflow-y:auto}.cds--side-nav__item{overflow:hidden}.cds--side-nav--ux .cds--side-nav__item,.cds--side-nav__item{block-size:auto;inline-size:auto}.cds--side-nav .cds--header__menu-title[aria-expanded=true]:hover,.cds--side-nav a.cds--header__menu-item:hover,.cds--side-nav__item:not(.cds--side-nav__item--active):hover .cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__submenu:hover,.cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__link:hover,.cds--side-nav__menu a.cds--side-nav__link:not(.cds--side-nav__link--current):not([aria-current=page]):hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--side-nav__item:not(.cds--side-nav__item--active) .cds--side-nav__menu-item>.cds--side-nav__link:hover>span,.cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__link:hover>span{color:var(--cds-text-primary,#161616)}.cds--side-nav__item--large{block-size:auto}.cds--side-nav__divider{background-color:var(--cds-border-subtle);block-size:1px;list-style-type:none;margin:.5rem 1rem}.cds--side-nav__divider hr{border:none}.cds--side-nav__submenu{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:2rem;border:0;box-sizing:border-box;color:var(--cds-text-secondary,#525252);cursor:pointer;display:inline-block;display:flex;font-family:inherit;font-size:100%;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);inline-size:100%;letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);margin:0;outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;text-align:start;transition:color .11s,background-color .11s,outline .11s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:baseline}.cds--side-nav__submenu *,.cds--side-nav__submenu :after,.cds--side-nav__submenu :before{box-sizing:inherit}.cds--side-nav__submenu::-moz-focus-inner{border:0}.cds--side-nav__submenu:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--side-nav__submenu:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--side-nav__submenu:focus{outline-style:dotted}}.cds--side-nav__submenu-title{overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap}.cds--side-nav__icon.cds--side-nav__submenu-chevron{display:flex;flex:1;justify-content:flex-end}.cds--side-nav__submenu-chevron>svg{block-size:1rem;inline-size:1rem;transition:transform .11s}.cds--side-nav__submenu[aria-expanded=true] .cds--side-nav__submenu-chevron>svg{transform:rotate(180deg)}.cds--side-nav__item--large .cds--side-nav__submenu{block-size:3rem}.cds--side-nav__item--active .cds--side-nav__submenu:hover,.cds--side-nav__item--active .cds--side-nav__submenu[aria-expanded=false]{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2));color:var(--cds-text-primary,#161616)}.cds--side-nav__item--active .cds--side-nav__submenu[aria-expanded=false]{position:relative}.cds--side-nav__item--active .cds--side-nav__submenu[aria-expanded=false]:before{background-color:var(--cds-border-interactive,#0f62fe);content:"";inline-size:3px;inset-block-end:0;inset-block-start:0;inset-inline-start:0;position:absolute}.cds--side-nav__item--active .cds--side-nav__submenu-title{color:var(--cds-text-primary,#161616);font-weight:600}.cds--side-nav__item--active .cds--side-nav__icon>svg{fill:var(--cds-icon-primary,#161616)}.cds--side-nav__menu{border:0;box-sizing:border-box;display:block;font-family:inherit;font-size:100%;margin:0;max-block-size:0;padding:0;vertical-align:baseline;visibility:hidden}.cds--side-nav__menu *,.cds--side-nav__menu :after,.cds--side-nav__menu :before{box-sizing:inherit}.cds--side-nav__submenu[aria-expanded=true]+.cds--side-nav__menu{max-block-size:93.75rem;visibility:inherit}.cds--side-nav__menu a.cds--side-nav__link{block-size:2rem;font-weight:400;min-block-size:2rem;padding-inline-start:2rem}.cds--side-nav__item.cds--side-nav__item--icon a.cds--side-nav__link{padding-inline-start:4.5rem}.cds--side-nav__menu a.cds--side-nav__link--current,.cds--side-nav__menu a.cds--side-nav__link[aria-current=page],a.cds--side-nav__link--current{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--side-nav__menu a.cds--side-nav__link--current>span,.cds--side-nav__menu a.cds--side-nav__link[aria-current=page]>span,a.cds--side-nav__link--current>span{color:var(--cds-text-primary,#161616);font-weight:600}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu,.cds--side-nav a.cds--header__menu-item,a.cds--side-nav__link{align-items:center;display:flex;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);min-block-size:2rem;outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;position:relative;text-decoration:none;transition:color .11s,background-color .11s,outline .11s}.cds--side-nav__item--large a.cds--side-nav__link{block-size:3rem}.cds--side-nav a.cds--header__menu-item .cds--text-truncate-end,a.cds--side-nav__link>.cds--side-nav__link-text{color:var(--cds-text-secondary,#525252);font-size:.875rem;letter-spacing:.1px;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.cds--side-nav a.cds--header__menu-item:focus,a.cds--side-nav__link:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--side-nav a.cds--header__menu-item:focus,a.cds--side-nav__link:focus{outline-style:dotted}}a.cds--side-nav__link--current,a.cds--side-nav__link[aria-current=page]{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2));font-weight:600}a.cds--side-nav__link--current .cds--side-nav__link-text,a.cds--side-nav__link[aria-current=page] .cds--side-nav__link-text{color:var(--cds-text-primary,#161616)}a.cds--side-nav__link--current:before,a.cds--side-nav__link[aria-current=page]:before{background-color:var(--cds-border-interactive,#0f62fe);content:"";inline-size:3px;inset-block-end:0;inset-block-start:0;inset-inline-start:0;position:absolute}.cds--side-nav__icon{align-items:center;display:flex;flex:0 0 1rem;justify-content:center}.cds--side-nav__icon:not(.cds--side-nav__submenu-chevron){margin-inline-end:1.5rem}.cds--side-nav__icon>svg{fill:var(--cds-icon-secondary,#525252);block-size:1rem;inline-size:1rem}.cds--side-nav--expanded .cds--side-nav__icon>svg.cds--side-nav-expand-icon,.cds--side-nav__icon>svg.cds--side-nav-collapse-icon{display:none}.cds--side-nav--expanded .cds--side-nav__icon>svg.cds--side-nav-collapse-icon{display:block}.cds--side-nav--fixed .cds--side-nav__submenu,.cds--side-nav--fixed a.cds--side-nav__link{padding-inline-start:1rem}.cds--side-nav--fixed .cds--side-nav__item:not(.cds--side-nav__item--icon) .cds--side-nav__menu a.cds--side-nav__link{padding-inline-start:2rem}@media (max-width:65.98rem){.cds--side-nav .cds--header__nav{display:block}}.cds--side-nav__header-navigation{border:0;box-sizing:border-box;display:none;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--side-nav__header-navigation *,.cds--side-nav__header-navigation :after,.cds--side-nav__header-navigation :before{box-sizing:inherit}@media (max-width:65.98rem){.cds--side-nav__header-navigation{display:block;margin-block-end:2rem;position:relative}}.cds--side-nav__header-divider:after{background:var(--cds-border-subtle);block-size:.0625rem;content:"";inline-size:calc(100% - 32px);inset-block-end:-1rem;inset-inline-start:1rem;position:absolute}.cds--side-nav a.cds--header__menu-item{color:var(--cds-text-secondary,#525252);justify-content:space-between;white-space:nowrap}.cds--side-nav a.cds--header__menu-item[aria-expanded=true]{background-color:transparent}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu{background-color:transparent;box-shadow:none;inline-size:100%;inset-block-end:inherit;padding:0;transform:none}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu li{inline-size:100%}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item{font-weight:400;padding-inline-start:4.25rem}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}.cds--side-nav .cds--side-nav__header-navigation .cds--header__menu-item--current:after,.cds--side-nav .cds--side-nav__header-navigation a.cds--header__menu-item[aria-current=page]:after{block-size:calc(100% + 4px);inline-size:3px}.cds--side-nav .cds--header__menu a.cds--header__menu-item{block-size:inherit}.cds--side-nav .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:focus .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:hover .cds--header__menu-arrow{fill:var(--cds-icon-secondary,#525252)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--side-nav .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:focus .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:hover .cds--header__menu-arrow,.cds--side-nav__icon>svg{fill:ButtonText}}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{-webkit-text-fill-color:var(--cds-text-primary,#161616);box-shadow:0 0 0 1000px var(--cds-field) inset}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label html{font-size:100%}.cds--label body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:flex;font-family:inherit;font-size:100%;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);inline-size:100%;justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);block-size:.875rem;border:none;box-shadow:none;inline-size:4.6875rem;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}input[type=number]{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement{display:none;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-secondary,#525252);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--text-input{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-md)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));background-color:var(--cds-field);block-size:var(--cds-layout-size-height-local);border:none;border-block-end:1px solid var(--cds-border-strong);box-sizing:border-box;color:var(--cds-text-primary,#161616);font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;outline:2px solid transparent;outline-offset:-2px;padding:0;padding:0 var(--cds-layout-density-padding-inline-local);transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.cds--text-input *,.cds--text-input :after,.cds--text-input :before{box-sizing:inherit}.cds--text-input:active,.cds--text-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input:active,.cds--text-input:focus{outline-style:dotted}}.cds--text-input-wrapper svg[hidden]{display:none}.cds--password-input{padding-inline-end:2.5rem}.cds--text-input--sm.cds--password-input{padding-inline-end:2rem}.cds--text-input--lg.cds--password-input{padding-inline-end:3rem}.cds--text-input::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input--light{background-color:var(--cds-field-02,#fff)}.cds--text-input__field-wrapper{display:flex;inline-size:100%;position:relative}.cds--text-input__invalid-icon{fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:1rem;position:absolute;transform:translateY(-50%)}.cds--text-input__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--text-input__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.cds--text-input--password__visibility{align-items:center;cursor:pointer;display:inline-flex;overflow:visible;position:relative}.cds--text-input--password__visibility:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus{outline-style:dotted}}.cds--text-input--password__visibility:focus{outline:1px solid transparent}.cds--text-input--password__visibility:focus svg{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus svg{outline-style:dotted}}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{align-items:center;display:flex;opacity:0;pointer-events:none;position:absolute;z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{display:inline-block}}.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:none}}.cds--text-input--password__visibility.cds--tooltip--a11y:after,.cds--text-input--password__visibility.cds--tooltip--a11y:before{transition:none}.cds--text-input--password__visibility:before{block-size:0;border-style:solid;content:"";inline-size:0}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text{box-sizing:content-box;color:inherit;opacity:1;white-space:normal;word-break:break-word}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{background-color:var(--cds-background-inverse,#393939);block-size:auto;border-radius:.125rem;box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));color:var(--cds-text-inverse,#fff);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:400;font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);max-inline-size:13rem;min-inline-size:1.5rem;padding:.1875rem 1rem;text-align:start;transform:translateX(-50%);z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-accelerator:true){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-ime-align:auto){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{border:1px solid transparent}}.cds--text-input--password__visibility:after{content:attr(aria-label)}.cds--text-input--password__visibility.cds--tooltip--a11y:after{content:none}.cds--text-input--password__visibility.cds--tooltip--visible:after,.cds--text-input--password__visibility.cds--tooltip--visible:before,.cds--text-input--password__visibility:focus:after,.cds--text-input--password__visibility:focus:before,.cds--text-input--password__visibility:hover:after,.cds--text-input--password__visibility:hover:before{opacity:1}@keyframes cds--tooltip-fade{0%{opacity:0}to{opacity:1}}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text{clip:auto;margin:auto;overflow:visible}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible.cds--tooltip--a11y:before,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:focus.cds--tooltip--a11y:before,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text,.cds--text-input--password__visibility:hover.cds--tooltip--a11y:before{animation:cds--tooltip-fade 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input--password__visibility.cds--tooltip--hidden .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--hidden+.cds--assistive-text{clip:rect(0,0,0,0);margin:-1px;overflow:hidden}.cds--text-input--password__visibility.cds--tooltip--hidden.cds--tooltip--a11y:before{animation:none;opacity:0}.cds--text-input--password__visibility .cds--assistive-text:after{block-size:.75rem;content:"";display:block;inline-size:100%;inset-block-start:-.75rem;inset-inline-start:0;position:absolute}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{inset-block-end:0;inset-inline-start:50%}.cds--text-input--password__visibility:before{border-color:transparent transparent var(--cds-background-inverse,#393939) transparent;border-width:0 .25rem .3125rem;inset-block-end:-.5rem;transform:translate(-50%,100%)}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inset-block-end:-.8125rem;transform:translate(-50%,100%)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{align-items:center;background:none;block-size:100%;border:0;cursor:pointer;display:flex;inline-size:2.5rem;inset-inline-end:0;justify-content:center;min-block-size:auto;outline:2px solid transparent;outline-offset:-2px;padding:0;position:absolute;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--toggle-password-tooltip .cds--popover{inset-inline-start:-2.5rem}.cds--toggle-password-tooltip .cds--popover-content{min-inline-size:2.5rem}.cds--text-input--sm+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:2rem}.cds--text-input--lg+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:3rem}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252);transition:fill 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:ButtonText}}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline-style:dotted}}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus svg,.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:hover svg{fill:var(--cds-icon-primary,#161616)}.cds--text-input--invalid,.cds--text-input--warning{padding-inline-end:2.5rem}.cds--text-input--invalid.cds--password-input{padding-inline-end:4rem}.cds--text-input--invalid+.cds--text-input--password__visibility__toggle{inset-inline-end:1rem}.cds--password-input-wrapper .cds--text-input__invalid-icon{inset-inline-end:2.5rem}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{cursor:not-allowed}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg,.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg:hover{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger{cursor:default}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover{cursor:default}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input__counter-alert{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}.cds--text-input:disabled{-webkit-text-fill-color:var(--cds-text-disabled,hsla(0,0%,9%,.25));background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;outline:2px solid transparent;outline-offset:-2px}.cds--text-input--light:disabled{background-color:var(--cds-field-02,#fff)}.cds--text-input:disabled::-moz-placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input:disabled::placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input--invalid{box-shadow:none;outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input--invalid{outline-style:dotted}}.cds--text-input--invalid .cds--text-input--password__visibility__toggle{inset-inline-end:2.5rem}.cds--skeleton.cds--text-input{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--skeleton.cds--text-input:active,.cds--skeleton.cds--text-input:focus,.cds--skeleton.cds--text-input:hover{border:none;cursor:default;outline:none}.cds--skeleton.cds--text-input:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton.cds--text-input:before{animation:none}}.cds--form--fluid .cds--text-input-wrapper{background:var(--cds-field);position:relative;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--form--fluid .cds--label{align-items:center;block-size:1rem;display:flex;inset-block-start:.8125rem;inset-inline-start:1rem;margin:0;position:absolute;z-index:1}.cds--form--fluid .cds--form__helper-text{display:none}.cds--form--fluid .cds--text-input{min-block-size:4rem;padding:2rem 1rem .8125rem}.cds--form--fluid .cds--text-input__divider,.cds--text-input__divider{display:none}.cds--form--fluid .cds--text-input--invalid,.cds--form--fluid .cds--text-input--warning{border-block-end:none}.cds--form--fluid .cds--text-input--invalid+.cds--text-input__divider,.cds--form--fluid .cds--text-input--warning+.cds--text-input__divider{border-color:var(--cds-border-subtle);border-style:solid;border-block-end:none;display:block;margin:0 1rem}.cds--form--fluid .cds--text-input__invalid-icon{inset-block-start:5rem}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid{outline:none}.cds--form--fluid .cds--text-input__field-wrapper--warning{border-block-end:1px solid var(--cds-border-strong)}.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning:focus,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:focus{outline:none}.cds--text-input-wrapper.cds--text-input-wrapper--inline{flex-flow:row wrap}.cds--text-input-wrapper .cds--label--inline{flex:1;margin:.8125rem 0 0;overflow-wrap:break-word;word-break:break-word}.cds--text-input-wrapper .cds--label--inline--sm{margin-block-start:.5625rem}.cds--text-input-wrapper .cds--label--inline--lg{margin-block-start:1.0625rem}.cds--text-input__label-helper-wrapper{flex:2;flex-direction:column;margin-inline-end:1.5rem;max-inline-size:8rem;overflow-wrap:break-word}.cds--text-input-wrapper .cds--form__helper-text--inline{margin-block-start:.125rem}.cds--text-input__field-outer-wrapper{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;inline-size:100%}.cds--text-input__field-outer-wrapper--inline{flex:8;flex-direction:column}.cds--text-input-wrapper--inline .cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--text-input-wrapper--inline--invalid .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input-wrapper--readonly,.cds--text-input-wrapper--readonly .cds--text-input{background:transparent;border-block-end-color:var(--cds-border-subtle)}.cds--text-input__field-wrapper .cds--slug{inset-block-start:50%;inset-inline-end:1rem;position:absolute;transform:translateY(-50%)}.cds--text-input__field-wrapper--slug .cds--text-input:not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff);padding-inline-end:2.5rem}.cds--text-input--invalid:has(~.cds--slug),.cds--text-input--warning:has(~.cds--slug){padding-inline-end:4rem}.cds--text-input--invalid~.cds--slug,.cds--text-input--warning~.cds--slug{inset-inline-end:2.5rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn.cds--btn--icon-only.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg,.cds--btn.cds--btn--icon-only.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:hover svg{fill:ButtonText}}.cds--text-input__label-wrapper{display:flex;inline-size:100%;justify-content:space-between}.cds--text-input__label-wrapper .cds--text-input__label-counter{align-self:end}.cds--tag{--cds-layout-size-height-xs:1.125rem;--cds-layout-size-height-sm:1.125rem;--cds-layout-size-height-md:1.5rem;--cds-layout-size-height-lg:2rem;--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-md)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-lg)));align-items:center;background-color:var(--cds-tag-background-gray,#e0e0e0);border-radius:1rem;color:var(--cds-tag-color-gray,#161616);cursor:default;display:inline-flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);margin:.25rem;max-inline-size:13rem;min-block-size:var(--cds-layout-size-height-local);min-inline-size:2rem;padding-inline:.5rem;vertical-align:middle;word-break:break-word}.cds--layout--size-xs .cds--tag{--cds-layout-size-height:var(--cds-layout-size-height-xs)}.cds--layout--size-sm .cds--tag{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--tag{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--tag{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--tag.cds--tag--operational{border:1px solid var(--cds-tag-background-gray,#e0e0e0)}.cds--tag .cds--tag__close-icon:hover,.cds--tag.cds--tag--operational:hover{background-color:var(--cds-tag-hover-gray,#d1d1d1)}.cds--tag.cds--tag--lg{padding-inline-start:.75rem}.cds--tag:has(.cds--tag__custom-icon){padding-inline-start:.25rem}.cds--tag.cds--tag--lg:not(.cds--tag--filter){padding-inline:.75rem}.cds--tag.cds--tag--lg:has(.cds--tag__custom-icon){padding-inline-start:.5rem}.cds--tag:not(.cds--tag--selectable){border:0}.cds--tag:not(:first-child){margin-inline-start:0}.cds--tag--operational>span,.cds--tag--selectable>span,.cds--tag__label{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cds--tag--interactive:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1px}.cds--tag--filter{padding-block-end:0;padding-block-start:0;padding-inline-end:0}.cds--tag--filter:hover{outline:none}.cds--tag--selectable{background-color:var(--cds-layer);border:1px solid var(--cds-border-inverse,#161616);color:var(--cds-text-primary,#161616);cursor:pointer}.cds--tag--selectable:hover{background-color:var(--cds-layer-hover);outline:none}.cds--tag--selectable:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1px}.cds--tag--selectable-selected{color:var(--cds-text-inverse,#fff)}.cds--tag--selectable-selected,.cds--tag--selectable-selected:hover{background-color:var(--cds-layer-selected-inverse,#161616)}.cds--tag--operational{background-color:var(--cds-tag-background-gray,#e0e0e0);border:1px solid var(--cds-tag-border-gray,#a8a8a8);color:var(--cds-tag-color-gray,#161616);cursor:pointer}.cds--tag--operational:hover{background-color:var(--cds-tag-hover-gray,#d1d1d1);outline:none}.cds--tag--operational:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1px}.cds--tag--red{background-color:var(--cds-tag-background-red,#ffd7d9);color:var(--cds-tag-color-red,#a2191f)}.cds--tag--red.cds--tag--operational{border:1px solid var(--cds-tag-border-red,#ff8389)}.cds--tag--red .cds--tag__close-icon:hover,.cds--tag--red.cds--tag--operational:hover{background-color:var(--cds-tag-hover-red,#ffc2c5)}.cds--tag--magenta{background-color:var(--cds-tag-background-magenta,#ffd6e8);color:var(--cds-tag-color-magenta,#9f1853)}.cds--tag--magenta.cds--tag--operational{border:1px solid var(--cds-tag-border-magenta,#ff7eb6)}.cds--tag--magenta .cds--tag__close-icon:hover,.cds--tag--magenta.cds--tag--operational:hover{background-color:var(--cds-tag-hover-magenta,#ffbdda)}.cds--tag--purple{background-color:var(--cds-tag-background-purple,#e8daff);color:var(--cds-tag-color-purple,#6929c4)}.cds--tag--purple.cds--tag--operational{border:1px solid var(--cds-tag-border-purple,#be95ff)}.cds--tag--purple .cds--tag__close-icon:hover,.cds--tag--purple.cds--tag--operational:hover{background-color:var(--cds-tag-hover-purple,#dcc7ff)}.cds--tag--blue{background-color:var(--cds-tag-background-blue,#d0e2ff);color:var(--cds-tag-color-blue,#0043ce)}.cds--tag--blue.cds--tag--operational{border:1px solid var(--cds-tag-border-blue,#78a9ff)}.cds--tag--blue .cds--tag__close-icon:hover,.cds--tag--blue.cds--tag--operational:hover{background-color:var(--cds-tag-hover-blue,#b8d3ff)}.cds--tag--cyan{background-color:var(--cds-tag-background-cyan,#bae6ff);color:var(--cds-tag-color-cyan,#00539a)}.cds--tag--cyan.cds--tag--operational{border:1px solid var(--cds-tag-border-cyan,#33b1ff)}.cds--tag--cyan .cds--tag__close-icon:hover,.cds--tag--cyan.cds--tag--operational:hover{background-color:var(--cds-tag-hover-cyan,#99daff)}.cds--tag--teal{background-color:var(--cds-tag-background-teal,#9ef0f0);color:var(--cds-tag-color-teal,#005d5d)}.cds--tag--teal.cds--tag--operational{border:1px solid var(--cds-tag-border-teal,#08bdba)}.cds--tag--teal .cds--tag__close-icon:hover,.cds--tag--teal.cds--tag--operational:hover{background-color:var(--cds-tag-hover-teal,#57e5e5)}.cds--tag--green{background-color:var(--cds-tag-background-green,#a7f0ba);color:var(--cds-tag-color-green,#0e6027)}.cds--tag--green.cds--tag--operational{border:1px solid var(--cds-tag-border-green,#42be65)}.cds--tag--green .cds--tag__close-icon:hover,.cds--tag--green.cds--tag--operational:hover{background-color:var(--cds-tag-hover-green,#74e792)}.cds--tag--gray{background-color:var(--cds-tag-background-gray,#e0e0e0);color:var(--cds-tag-color-gray,#161616)}.cds--tag--gray.cds--tag--operational{border:1px solid var(--cds-tag-border-gray,#a8a8a8)}.cds--tag--gray .cds--tag__close-icon:hover,.cds--tag--gray.cds--tag--operational:hover{background-color:var(--cds-tag-hover-gray,#d1d1d1)}.cds--tag--cool-gray{background-color:var(--cds-tag-background-cool-gray,#dde1e6);color:var(--cds-tag-color-cool-gray,#121619)}.cds--tag--cool-gray.cds--tag--operational{border:1px solid var(--cds-tag-border-cool-gray,#a2a9b0)}.cds--tag--cool-gray .cds--tag__close-icon:hover,.cds--tag--cool-gray.cds--tag--operational:hover{background-color:var(--cds-tag-hover-cool-gray,#cdd3da)}.cds--tag--warm-gray{background-color:var(--cds-tag-background-warm-gray,#e5e0df);color:var(--cds-tag-color-warm-gray,#171414)}.cds--tag--warm-gray.cds--tag--operational{border:1px solid var(--cds-tag-border-warm-gray,#ada8a8)}.cds--tag--warm-gray .cds--tag__close-icon:hover,.cds--tag--warm-gray.cds--tag--operational:hover{background-color:var(--cds-tag-hover-warm-gray,#d8d0cf)}.cds--tag--high-contrast:not(.cds--tag--operational){background-color:var(--cds-background-inverse,#393939);color:var(--cds-text-inverse,#fff)}.cds--tag--high-contrast:not(.cds--tag--operational).cds--tag--operational{border:1px solid var(--cds-background-inverse,#393939)}.cds--tag--high-contrast:not(.cds--tag--operational) .cds--tag__close-icon:hover,.cds--tag--high-contrast:not(.cds--tag--operational).cds--tag--operational:hover{background-color:var(--cds-background-inverse-hover,#474747)}.cds--tag--outline:not(.cds--tag--operational):not(span):not([disabled]){background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);outline:1px solid var(--cds-background-inverse,#393939);outline-offset:-1px}.cds--tag--outline:not(.cds--tag--operational):not(span):not([disabled]).cds--tag--operational{border:1px solid var(--cds-background,#fff)}.cds--tag--outline:not(.cds--tag--operational):not(span):not([disabled]) .cds--tag__close-icon:hover,.cds--tag--outline:not(.cds--tag--operational):not(span):not([disabled]).cds--tag--operational:hover{background-color:var(--cds-layer-hover)}.cds--tag--disabled:not(.cds--tag--operational),.cds--tag--filter.cds--tag--disabled,.cds--tag--interactive.cds--tag--disabled{background-color:var(--cds-layer);box-shadow:none;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--tag--disabled:not(.cds--tag--operational).cds--tag--operational,.cds--tag--filter.cds--tag--disabled.cds--tag--operational,.cds--tag--interactive.cds--tag--disabled.cds--tag--operational{border:1px solid var(--cds-layer)}.cds--tag--disabled:not(.cds--tag--operational) .cds--tag__close-icon:hover,.cds--tag--disabled:not(.cds--tag--operational).cds--tag--operational:hover,.cds--tag--filter.cds--tag--disabled .cds--tag__close-icon:hover,.cds--tag--filter.cds--tag--disabled.cds--tag--operational:hover,.cds--tag--interactive.cds--tag--disabled .cds--tag__close-icon:hover,.cds--tag--interactive.cds--tag--disabled.cds--tag--operational:hover{background-color:var(--cds-layer)}.cds--tag--disabled:not(.cds--tag--operational):hover,.cds--tag--filter.cds--tag--disabled:hover,.cds--tag--interactive.cds--tag--disabled:hover{cursor:not-allowed}.cds--tag--disabled:not(.cds--tag--operational) .cds--tag__label,.cds--tag--filter.cds--tag--disabled .cds--tag__label,.cds--tag--interactive.cds--tag--disabled .cds--tag__label{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--tag--operational.cds--tag--disabled,.cds--tag--selectable.cds--tag--disabled{background-color:var(--cds-layer);border:1px solid var(--cds-border-disabled,#c6c6c6);color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--tag--operational.cds--tag--disabled:hover,.cds--tag--selectable.cds--tag--disabled:hover{background-color:var(--cds-layer);cursor:not-allowed}.cds--tag--interactive{transition:background-color 70ms cubic-bezier(0,0,.38,.9)}.cds--tag__close-icon{align-items:center;background-color:transparent;block-size:var(--cds-layout-size-height-local);border:0;border-radius:50%;color:currentColor;cursor:pointer;display:flex;flex-shrink:0;inline-size:var(--cds-layout-size-height-local);justify-content:center;margin:0 0 0 .125rem;padding:0;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),box-shadow 70ms cubic-bezier(.2,0,.38,.9)}.cds--tag__close-icon svg{fill:currentColor}.cds--tag__custom-icon{background-color:transparent;block-size:1rem;border:0;color:currentColor;flex-shrink:0;inline-size:1rem;margin-inline-end:.25rem;outline:none;padding:0}.cds--tag__custom-icon svg{fill:currentColor}.cds--tag--disabled .cds--tag__close-icon{cursor:not-allowed}.cds--tag__close-icon:focus{border-radius:50%;box-shadow:inset 0 0 0 1px var(--cds-focus,#0f62fe);outline:none;z-index:99999}.cds--tag--high-contrast .cds--tag__close-icon:focus{box-shadow:inset 0 0 0 1px var(--cds-focus-inverse,#fff)}.cds--tag--filter.cds--tag--disabled .cds--tag__close-icon:hover{background-color:transparent}.cds--tag--filter.cds--tag--disabled svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--tag--sm.cds--tag--filter{padding-inline-end:0}.cds--tag--sm .cds--tag__close-icon{margin-inline-start:.3125rem}.cds--tag.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);background-color:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;color:var(--cds-text-primary,#161616);inline-size:3.75rem;overflow:hidden;padding:0;pointer-events:none;position:relative}.cds--tag.cds--skeleton:active,.cds--tag.cds--skeleton:focus,.cds--tag.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--tag.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--tag.cds--skeleton:before{animation:none}}.cds--tag.cds--skeleton.cds--tag--operational{border:1px solid var(--cds-skeleton-background,#e8e8e8)}.cds--tag.cds--skeleton .cds--tag__close-icon:hover,.cds--tag.cds--skeleton.cds--tag--operational:hover{background-color:var(--cds-skeleton-background,#e8e8e8)}@media not all and (min-resolution >= 0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){.cds--tag.cds--skeleton{transform:translateZ(0)}}}.cds--tag .cds--slug .cds--slug__button--inline{color:currentColor;margin-inline-start:.0625rem}.cds--tag .cds--slug .cds--slug__button--inline .cds--slug__text:before{background-color:currentColor}.cds--tag .cds--slug .cds--slug__button--inline:hover{border-color:currentColor}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--tag{outline:1px solid transparent}.cds--tag__close-icon svg,.cds--tag__custom-icon svg{fill:ButtonText}.cds--tag__close-icon:focus{color:Highlight;outline:1px solid Highlight}}.cds--tag-label-tooltip{max-inline-size:-webkit-fill-available}.cds--tag__custom-icon+.cds--tag-label-tooltip{max-inline-size:11rem}.cds--tag--filter .cds--tag__custom-icon+.cds--tag-label-tooltip{max-inline-size:9.875rem}.cds--interactive--tag-children{display:inline-flex;max-inline-size:12.5rem;place-items:center}.cds--tag--filter .cds--tag__custom-icon+span>.cds--interactive--tag-children{max-inline-size:11.5rem}.cds--tag .cds--definition-term{border-block-end:none;cursor:default;max-inline-size:12rem}.cds--tag .cds--tag__custom-icon+span>.cds--definition-term{max-inline-size:11rem}.cds--tag>.cds--popover-container{display:flex}.cds--toggletip-button:has(.cds--tag--operational.cds--tag--disabled){pointer-events:none}.cds--list-box__wrapper--inline{grid-gap:.25rem;align-items:center;display:inline-grid;grid-template:auto auto/auto auto}.cds--list-box__wrapper--inline .cds--label{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--list-box__wrapper--inline .cds--form-requirement,.cds--list-box__wrapper--inline .cds--form__helper-text,.cds--list-box__wrapper--inline .cds--label{margin:0}.cds--list-box__wrapper--inline .cds--form__helper-text{max-inline-size:none}.cds--list-box__wrapper--inline .cds--form-requirement{grid-column:2}.cds--list-box{background-color:var(--cds-field);block-size:2.5rem;border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);cursor:pointer;inline-size:100%;max-block-size:2.5rem;position:relative;transition:all 70ms cubic-bezier(.2,0,.38,.9)}.cds--list-box html{font-size:100%}.cds--list-box body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}.cds--list-box code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--list-box strong{font-weight:600}.cds--list-box:hover{background-color:var(--cds-field-hover)}.cds--list-box--lg{block-size:3rem;max-block-size:3rem}.cds--list-box--sm{block-size:2rem;max-block-size:2rem}.cds--list-box--expanded{border-block-end-color:var(--cds-border-subtle-01,#c6c6c6)}.cds--layer-two .cds--list-box--expanded{border-block-end-color:var(--cds-border-subtle-02,#e0e0e0)}.cds--layer-three .cds--list-box--expanded{border-block-end-color:var(--cds-border-subtle-03,#c6c6c6)}.cds--list-box--expanded:hover{background-color:var(--cds-field)}.cds--list-box--expanded:hover.cds--list-box--light:hover{background-color:var(--cds-field-02,#fff)}.cds--list-box .cds--text-input{block-size:100%;min-inline-size:0}.cds--list-box__invalid-icon{fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:2.5rem;position:absolute;transform:translateY(-50%)}.cds--list-box__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--list-box__invalid-icon--warning path[fill]{fill:#000;opacity:1}.cds--list-box.cds--list-box--warning .cds--list-box__field,.cds--list-box[data-invalid] .cds--list-box__field{border-block-end:0;padding-inline-end:4rem}.cds--list-box.cds--list-box--warning.cds--list-box--inline .cds--list-box__field,.cds--list-box[data-invalid].cds--list-box--inline .cds--list-box__field{padding-inline-end:3.5rem}.cds--list-box--light{background-color:var(--cds-field-02,#fff)}.cds--list-box--light:hover{background-color:var(--cds-field-hover)}.cds--list-box--light .cds--list-box__menu{background:var(--cds-layer)}.cds--list-box--light .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle)}.cds--list-box--light.cds--list-box--expanded{border-block-end-color:transparent}.cds--list-box--disabled:hover{background-color:var(--cds-field)}.cds--list-box--light.cds--list-box--disabled{background-color:var(--cds-field-02,#fff)}.cds--list-box--disabled,.cds--list-box--disabled .cds--list-box__field,.cds--list-box--disabled .cds--list-box__field:focus{border-block-end-color:transparent;outline:none}.cds--list-box--disabled .cds--list-box__label,.cds--list-box--disabled.cds--list-box--inline .cds--list-box__label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--list-box--disabled .cds--list-box__menu-icon>svg,.cds--list-box--disabled .cds--list-box__selection>svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--list-box--disabled,.cds--list-box--disabled .cds--list-box__field,.cds--list-box--disabled .cds--list-box__menu-icon{cursor:not-allowed}.cds--list-box--disabled .cds--list-box__menu-item,.cds--list-box--disabled .cds--list-box__menu-item--highlighted,.cds--list-box--disabled .cds--list-box__menu-item:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));text-decoration:none}.cds--list-box--disabled .cds--list-box__selection:hover{cursor:not-allowed}.cds--list-box--disabled.cds--list-box[data-invalid] .cds--list-box__field{padding-inline-end:3rem}.cds--list-box--disabled.cds--list-box[data-invalid].cds--list-box--inline .cds--list-box__field{padding-inline-end:2rem}.cds--list-box.cds--list-box--inline{background-color:transparent;border-width:0}.cds--list-box.cds--list-box--inline:hover{background-color:var(--cds-layer-hover)}.cds--list-box.cds--list-box--inline.cds--list-box--expanded{border-block-end-width:0}.cds--list-box.cds--list-box--inline.cds--list-box--expanded .cds--list-box__field[aria-expanded=true]{border-width:0}.cds--list-box.cds--list-box--inline.cds--list-box--disabled:hover,.cds--list-box.cds--list-box--inline.cds--list-box--expanded:hover{background-color:transparent}.cds--list-box.cds--list-box--inline .cds--list-box__field{padding:0 2rem 0 .5rem}.cds--list-box.cds--list-box--inline .cds--list-box__menu-icon{inset-inline-end:.5rem}.cds--list-box.cds--list-box--inline .cds--list-box__invalid-icon{inset-inline-end:2rem}.cds--list-box--inline .cds--list-box__label{color:var(--cds-text-primary,#161616)}.cds--list-box--inline .cds--list-box__field{block-size:100%}.cds--dropdown--inline .cds--list-box__field{max-inline-size:30rem}.cds--dropdown--inline .cds--list-box__menu{max-inline-size:30rem;min-inline-size:18rem}.cds--list-box__field{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:calc(100% + 1px);border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:inline-flex;font-family:inherit;font-size:100%;inline-size:100%;margin:0;outline:none;overflow:hidden;padding:0;padding-block:0;padding-inline-end:3rem;padding-inline-start:1rem;position:relative;text-align:start;text-overflow:ellipsis;vertical-align:baseline;vertical-align:top;white-space:nowrap}.cds--list-box__field *,.cds--list-box__field :after,.cds--list-box__field :before{box-sizing:inherit}.cds--list-box__field::-moz-focus-inner{border:0}.cds--list-box__field:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--list-box__field:focus{outline-style:dotted}}.cds--list-box__field[disabled]{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--list-box__field .cds--text-input{padding-inline-end:5rem}.cds--list-box--warning .cds--list-box__field .cds--text-input,.cds--list-box[data-invalid] .cds--list-box__field .cds--text-input{padding-inline-end:6.5625rem}.cds--list-box--warning .cds--list-box__field .cds--text-input+.cds--list-box__invalid-icon,.cds--list-box[data-invalid] .cds--list-box__field .cds--text-input+.cds--list-box__invalid-icon{inset-inline-end:5.125rem}.cds--list-box__field .cds--text-input--empty{padding-inline-end:3rem}.cds--list-box--warning .cds--list-box__field .cds--text-input--empty,.cds--list-box[data-invalid] .cds--list-box__field .cds--text-input--empty{padding-inline-end:4rem}.cds--list-box--warning .cds--list-box__field .cds--text-input--empty+.cds--list-box__invalid-icon,.cds--list-box[data-invalid] .cds--list-box__field .cds--text-input--empty+.cds--list-box__invalid-icon{inset-inline-end:2.5rem}.cds--list-box__label{color:var(--cds-text-primary,#161616);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.cds--list-box__menu-icon{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:1.5rem;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:flex;font-family:inherit;font-size:100%;inline-size:1.5rem;inset-inline-end:.75rem;justify-content:center;margin:0;outline:none;padding:0;position:absolute;text-align:start;transition:transform 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.cds--list-box__menu-icon *,.cds--list-box__menu-icon :after,.cds--list-box__menu-icon :before{box-sizing:inherit}.cds--list-box__menu-icon::-moz-focus-inner{border:0}.cds--list-box__menu-icon>svg{fill:var(--cds-icon-primary,#161616)}.cds--list-box__menu-icon--open{inline-size:1.5rem;justify-content:center;transform:rotate(180deg)}.cds--list-box__selection{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:1.5rem;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:flex;font-family:inherit;font-size:100%;inline-size:1.5rem;inset-block-start:50%;inset-inline-end:2.8125rem;justify-content:center;margin:0;padding:0;position:absolute;text-align:start;transform:translateY(-50%);transition:background-color 70ms cubic-bezier(.2,0,.38,.9);-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:baseline}.cds--list-box__selection *,.cds--list-box__selection :after,.cds--list-box__selection :before{box-sizing:inherit}.cds--list-box__selection::-moz-focus-inner{border:0}.cds--list-box__selection:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--list-box__selection:focus{outline-style:dotted}}.cds--list-box__selection:focus:hover{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--list-box__selection:focus:hover{outline-style:dotted}}.cds--list-box__selection>svg{fill:var(--cds-icon-primary,#161616)}.cds--list-box--disabled .cds--list-box__selection:focus{outline:none}.cds--list-box__selection--multi{align-items:center;background-color:var(--cds-background-inverse,#393939);block-size:1.5rem;border-radius:.75rem;color:var(--cds-text-inverse,#fff);display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);inline-size:auto;inset-block-start:auto;justify-content:space-between;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);line-height:0;margin-inline-end:.625rem;padding:.5rem;padding-inline-end:.125rem;position:static;transform:none}.cds--list-box__selection--multi>svg{fill:var(--cds-icon-inverse,#fff);block-size:1.25rem;inline-size:1.25rem;margin-inline-start:.25rem;padding:.125rem}.cds--list-box__selection--multi>svg:hover{background-color:var(--cds-button-secondary-hover,#474747);border-radius:50%}.cds--list-box--disabled .cds--list-box__selection--multi{background-color:var(--cds-text-disabled,hsla(0,0%,9%,.25));color:var(--cds-layer)}.cds--list-box--disabled .cds--list-box__selection--multi.cds--tag--operational{border:1px solid var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--list-box--disabled .cds--list-box__selection--multi .cds--tag__close-icon:hover,.cds--list-box--disabled .cds--list-box__selection--multi.cds--tag--operational:hover{background-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--list-box--disabled .cds--list-box__selection--multi>svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--list-box--disabled .cds--list-box__selection--multi>svg:hover{background-color:initial}.cds--list-box__selection--multi:hover{outline:none}.cds--list-box__menu{background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));display:none;inline-size:100%;inset-inline-end:0;inset-inline-start:0;overflow-y:auto;position:absolute;transition:max-height .11s cubic-bezier(.2,0,.38,.9);z-index:9100}.cds--list-box__menu:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--list-box__menu:focus{outline-style:dotted}}.cds--list-box .cds--list-box__field[aria-expanded=false] .cds--list-box__menu{display:none;max-block-size:0;visibility:hidden}.cds--list-box--expanded .cds--list-box__menu{display:block;max-block-size:13.75rem}.cds--list-box--expanded.cds--list-box--lg .cds--list-box__menu{max-block-size:16.5rem}.cds--list-box--expanded.cds--list-box--sm .cds--list-box__menu{max-block-size:11rem}.cds--list-box__menu-item{block-size:2.5rem;color:var(--cds-text-secondary,#525252);cursor:pointer;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);position:relative;transition:background 70ms cubic-bezier(.2,0,.38,.9);-webkit-user-select:none;-moz-user-select:none;user-select:none}.cds--list-box__menu-item:hover{background-color:var(--cds-layer-hover)}.cds--list-box__menu-item:active{background-color:var(--cds-layer-selected)}.cds--list-box--light .cds--list-box__menu-item:hover{background-color:var(--cds-layer-hover)}.cds--list-box--sm .cds--list-box__menu-item{block-size:2rem}.cds--list-box--lg .cds--list-box__menu-item{block-size:3rem}.cds--list-box--disabled .cds--list-box__menu-item:hover{background-color:transparent}.cds--list-box--light .cds--list-box__menu-item:active{background-color:var(--cds-layer-selected)}.cds--list-box--disabled .cds--list-box__menu-item__option:hover{border-block-start-color:var(--cds-border-subtle-01,#c6c6c6)}.cds--layer-two .cds--list-box--disabled .cds--list-box__menu-item__option:hover{border-block-start-color:var(--cds-border-subtle-02,#e0e0e0)}.cds--layer-three .cds--list-box--disabled .cds--list-box__menu-item__option:hover{border-block-start-color:var(--cds-border-subtle-03,#c6c6c6)}.cds--list-box__menu-item:first-of-type .cds--list-box__menu-item__option{border-block-start-color:transparent}.cds--list-box__menu-item:hover .cds--list-box__menu-item__option{color:var(--cds-text-primary,#161616)}.cds--list-box--disabled .cds--list-box__menu-item:hover+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-01,#c6c6c6)}.cds--layer-two .cds--list-box--disabled .cds--list-box__menu-item:hover+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-02,#e0e0e0)}.cds--layer-three .cds--list-box--disabled .cds--list-box__menu-item:hover+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-03,#c6c6c6)}.cds--layer-two .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-02,#e0e0e0)}.cds--layer-three .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-03,#c6c6c6)}.cds--list-box__menu-item__option{block-size:2.5rem;border:0;border-block-end:1px solid transparent;border-block-start:1px solid transparent;border-block-start-color:var(--cds-border-subtle-01,#c6c6c6);box-sizing:border-box;color:var(--cds-text-secondary,#525252);display:block;font-family:inherit;font-size:100%;font-weight:400;line-height:1rem;margin:0 1rem;outline:2px solid transparent;outline-offset:-2px;overflow:hidden;padding:.6875rem 0;padding-inline-end:1.5rem;text-decoration:none;text-overflow:ellipsis;transition:border-color 70ms cubic-bezier(.2,0,.38,.9),color 70ms cubic-bezier(.2,0,.38,.9);vertical-align:baseline;white-space:nowrap}.cds--list-box__menu-item__option *,.cds--list-box__menu-item__option :after,.cds--list-box__menu-item__option :before{box-sizing:inherit}.cds--list-box__menu-item__option:focus{border-color:transparent;margin:0;outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px;padding:.6875rem 1rem}@media screen and (prefers-contrast){.cds--list-box__menu-item__option:focus{outline-style:dotted}}.cds--list-box__menu-item__option:hover{border-color:transparent;color:var(--cds-text-primary,#161616)}.cds--list-box--sm .cds--list-box__menu-item__option{block-size:2rem;padding-block-end:.4375rem;padding-block-start:.4375rem}.cds--list-box--lg .cds--list-box__menu-item__option{block-size:3rem;padding-block-end:.9375rem;padding-block-start:.9375rem}.cds--list-box--disabled .cds--list-box__menu-item:hover .cds--list-box__menu-item__option,.cds--list-box--disabled .cds--list-box__menu-item__option{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--list-box__menu-item[disabled],.cds--list-box__menu-item[disabled] *,.cds--list-box__menu-item[disabled] .cds--list-box__menu-item__option,.cds--list-box__menu-item[disabled]:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;outline:none}.cds--list-box__menu-item[disabled]:hover{background-color:revert}.cds--list-box__menu-item[disabled] .cds--checkbox-label:before{border-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--list-box__menu-item[disabled] .cds--list-box__menu-item__option,.cds--list-box__menu-item[disabled]:hover+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-01,#c6c6c6)}.cds--layer-two .cds--list-box__menu-item[disabled] .cds--list-box__menu-item__option,.cds--layer-two .cds--list-box__menu-item[disabled]:hover+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-02,#e0e0e0)}.cds--layer-three .cds--list-box__menu-item[disabled] .cds--list-box__menu-item__option,.cds--layer-three .cds--list-box__menu-item[disabled]:hover+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:var(--cds-border-subtle-03,#c6c6c6)}.cds--list-box__menu-item--active+.cds--list-box__menu-item[disabled] .cds--list-box__menu-item__option,.cds--list-box__menu-item:hover+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:transparent}.cds--list-box.cds--list-box--inline .cds--list-box__menu-item__option{margin:0 .5rem}.cds--list-box.cds--list-box--inline .cds--list-box__menu-item__option:focus{margin:0;padding-inline-end:.5rem;padding-inline-start:.5rem}.cds--list-box__menu-item--highlighted{color:var(--cds-text-primary,#161616);outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--list-box__menu-item--highlighted{outline-style:dotted}}.cds--list-box__menu-item--highlighted .cds--list-box__menu-item__option,.cds--list-box__menu-item--highlighted+.cds--list-box__menu-item .cds--list-box__menu-item__option{border-block-start-color:transparent}.cds--list-box__menu-item--highlighted .cds--list-box__menu-item__option{color:var(--cds-text-primary,#161616)}.cds--list-box__menu-item--active{color:var(--cds-text-primary,#161616)}.cds--list-box--light .cds--list-box__menu-item--active,.cds--list-box__menu-item--active{background-color:var(--cds-layer-selected);border-block-end-color:var(--cds-layer-selected)}.cds--list-box__menu-item--active:hover{background-color:var(--cds-layer-selected-hover);border-block-end-color:var(--cds-layer-selected-hover)}.cds--list-box__menu-item--active .cds--list-box__menu-item__option{color:var(--cds-text-primary,#161616)}.cds--list-box__menu-item--active+.cds--list-box__menu-item>.cds--list-box__menu-item__option{border-block-start-color:transparent}.cds--list-box__menu-item__selected-icon{fill:var(--cds-icon-primary,#161616);display:none;inset-block-start:50%;inset-inline-end:1rem;position:absolute;transform:translateY(-50%)}.cds--list-box--inline .cds--list-box__menu-item__selected-icon{inset-inline-end:.5rem}.cds--list-box__menu-item--active .cds--list-box__menu-item__selected-icon{display:block}.cds--list-box__menu-item .cds--checkbox-label{inline-size:100%}.cds--list-box__menu-item .cds--checkbox-label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cds--list-box--up .cds--list-box__menu{inset-block-end:2.5rem}.cds--list-box--up .cds--list-box--sm .cds--list-box__menu,.cds--list-box--up.cds--dropdown--sm .cds--list-box__menu,.cds--list-box--up.cds--list-box--sm .cds--list-box__menu{inset-block-end:2rem}.cds--list-box--up .cds--list-box--lg .cds--list-box__menu,.cds--list-box--up.cds--dropdown--lg .cds--list-box__menu,.cds--list-box--up.cds--list-box--lg .cds--list-box__menu{inset-block-end:3rem}.cds--list-box input[role=combobox],.cds--list-box input[type=text]{background-color:inherit;min-inline-size:0;text-overflow:ellipsis}.cds--list-box__wrapper--slug .cds--slug{inset-block-start:50%;inset-inline-end:calc(2.5rem + 9px);margin-block-start:.03125rem;position:absolute;transform:translateY(-50%)}.cds--list-box__wrapper--slug .cds--slug:after,.cds--list-box__wrapper--slug .cds--slug:before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1rem;content:"";inline-size:.0625rem;position:absolute}.cds--list-box__wrapper--slug .cds--slug:before{display:none;inset-inline-start:-.5625rem}.cds--list-box__wrapper--slug .cds--slug:after{display:block;inset-inline-end:-.5625rem}.cds--list-box__wrapper--slug .cds--slug--revert:after{inset-block-start:.5rem;inset-inline-end:-.0625rem}.cds--list-box__wrapper--slug .cds--list-box:not(:has(.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}.cds--list-box__wrapper--slug .cds--list-box input[role=combobox]{border-block-end-color:transparent}.cds--list-box__wrapper--slug .cds--list-box__field,.cds--list-box__wrapper--slug .cds--text-input--empty{padding-inline-end:4rem}.cds--list-box__wrapper--slug .cds--list-box--invalid[data-invalid] .cds--list-box__field,.cds--list-box__wrapper--slug .cds--list-box--invalid[data-invalid] .cds--text-input--empty,.cds--list-box__wrapper--slug .cds--list-box--warning .cds--list-box__field,.cds--list-box__wrapper--slug .cds--list-box--warning .cds--text-input--empty,.cds--list-box__wrapper--slug .cds--text-input:not(.cds--text-input--empty){padding-inline-end:6rem}.cds--list-box__wrapper--slug .cds--list-box--invalid[data-invalid] .cds--text-input:not(.cds--text-input--empty),.cds--list-box__wrapper--slug .cds--list-box--warning .cds--text-input:not(.cds--text-input--empty){padding-inline-end:8.8125rem}.cds--list-box__wrapper--slug .cds--list-box--invalid[data-invalid] .cds--list-box__invalid-icon,.cds--list-box__wrapper--slug .cds--list-box--invalid[data-invalid] .cds--text-input--empty+.cds--list-box__invalid-icon,.cds--list-box__wrapper--slug .cds--list-box--warning .cds--list-box__invalid-icon.cds--list-box__invalid-icon--warning{inset-inline-end:5.1875rem}.cds--list-box__wrapper--slug .cds--list-box--invalid[data-invalid] .cds--slug:before,.cds--list-box__wrapper--slug .cds--list-box--warning .cds--slug:before{display:block}.cds--list-box__wrapper--slug .cds--list-box--warning .cds--list-box__field:has(.cds--list-box__selection)~.cds--slug,.cds--list-box__wrapper--slug .cds--list-box__field:has(.cds--list-box__selection)~.cds--slug{inset-inline-end:calc(4rem + 18px)}.cds--list-box__wrapper--slug .cds--list-box--invalid .cds--list-box__field:has(.cds--list-box__selection) .cds--list-box__invalid-icon,.cds--list-box__wrapper--slug .cds--list-box--warning .cds--list-box__field:has(.cds--list-box__selection) .cds--list-box__invalid-icon{inset-inline-end:7.25rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--list-box__field,.cds--list-box__menu,.cds--multi-select .cds--tag--filter{outline:1px solid transparent}.cds--list-box__field:focus,.cds--list-box__menu-item--highlighted .cds--list-box__menu-item__option,.cds--multi-select .cds--tag__close-icon:focus{color:Highlight;outline:1px solid Highlight}.cds--list-box__menu-icon>svg,.cds--list-box__selection--multi>svg,.cds--list-box__selection>svg{fill:ButtonText}}.cds--list-box__field:has(.cds--list-box__menu-icon) .cds--list-box__selection:after{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1rem;content:"";inline-size:.0625rem;margin-inline-start:2.0625rem;position:absolute}.cds--list-box--invalid[data-invalid] .cds--list-box__field:has(.cds--list-box__menu-icon) .cds--list-box__selection:before,.cds--list-box--warning .cds--list-box__field:has(.cds--list-box__menu-icon) .cds--list-box__selection:before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1rem;content:"";inline-size:.0625rem;margin-inline-end:2.0625rem;position:absolute}.cds--list-box__wrapper--slug:has(.cds--multi-select) .cds--list-box__menu-icon{inset-inline-end:.75rem}.cds--list-box__wrapper--slug:has(.cds--dropdown) .cds--list-box__menu-icon{inset-inline-end:.75rem}.cds--dropdown__wrapper--inline{grid-gap:0 1.5rem;align-items:center;display:inline-grid;grid-template:auto auto/auto min-content}.cds--dropdown__wrapper--inline .cds--label{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--dropdown__wrapper--inline .cds--form-requirement,.cds--dropdown__wrapper--inline .cds--form__helper-text,.cds--dropdown__wrapper--inline .cds--label{margin:0}.cds--dropdown__wrapper--inline .cds--form-requirement{grid-column:2}.cds--dropdown{background-color:var(--cds-field);block-size:2.5rem;border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);cursor:pointer;display:block;inline-size:100%;list-style:none;outline:2px solid transparent;outline-offset:-2px;position:relative;transition:background-color 70ms cubic-bezier(.2,0,.38,.9)}.cds--dropdown html{font-size:100%}.cds--dropdown body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}.cds--dropdown code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--dropdown strong{font-weight:600}.cds--dropdown:hover{background-color:var(--cds-field-hover)}.cds--dropdown .cds--list-box__field{text-align:start}.cds--dropdown--lg{block-size:3rem;max-block-size:3rem}.cds--dropdown--lg .cds--dropdown__arrow{inset-block-start:1rem}.cds--dropdown--sm{block-size:2rem;max-block-size:2rem}.cds--dropdown--sm .cds--dropdown__arrow{inset-block-start:.5rem}.cds--dropdown--open{border-block-end-color:var(--cds-border-subtle)}.cds--dropdown--open .cds--list-box__field{outline:none}.cds--dropdown--invalid{outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--dropdown--invalid{outline-style:dotted}}.cds--dropdown--invalid .cds--dropdown-text{padding-inline-end:3.5rem}.cds--dropdown--invalid+.cds--form-requirement{color:var(--cds-text-error,#da1e28);display:inline-block;max-block-size:12.5rem}.cds--dropdown__invalid-icon{fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:2.5rem;position:absolute;transform:translateY(-50%)}.cds--dropdown--open:hover{background-color:var(--cds-field)}.cds--dropdown--open:focus{outline:1px solid transparent}.cds--dropdown--open .cds--dropdown-list{box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));max-block-size:13.75rem;transition:max-height .11s cubic-bezier(0,0,.38,.9)}.cds--dropdown--light{background-color:var(--cds-field-02,#fff)}.cds--dropdown--light:hover{background-color:var(--cds-field-hover)}.cds--dropdown--up .cds--dropdown-list{inset-block-end:2rem}.cds--dropdown__arrow{fill:var(--cds-icon-primary,#161616);inset-block-start:.8125rem;inset-inline-end:1rem;pointer-events:none;position:absolute;transform-origin:50% 45%;transition:transform .11s cubic-bezier(.2,0,.38,.9)}button.cds--dropdown-text{background:none;border:none;color:var(--cds-text-primary,#161616);inline-size:100%;text-align:start}button.cds--dropdown-text:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){button.cds--dropdown-text:focus{outline-style:dotted}}.cds--dropdown-text{block-size:calc(100% + 1px);display:block;overflow:hidden;padding-inline-end:2.625rem;padding-inline-start:1rem;text-overflow:ellipsis;white-space:nowrap}.cds--dropdown-list,.cds--dropdown-text{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--dropdown-list{background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));display:flex;flex-direction:column;inline-size:100%;list-style:none;max-block-size:0;outline:2px solid transparent;outline-offset:-2px;overflow-x:hidden;overflow-y:auto;position:absolute;transition:max-height .11s cubic-bezier(.2,0,.38,.9);z-index:9100}.cds--dropdown-list html{font-size:100%}.cds--dropdown-list body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}.cds--dropdown-list code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--dropdown-list strong{font-weight:600}.cds--dropdown--light .cds--dropdown-list{background-color:var(--cds-layer)}.cds--dropdown:not(.cds--dropdown--open) .cds--dropdown-item{visibility:hidden}.cds--dropdown-item{opacity:0;position:relative;transition:visibility 70ms cubic-bezier(.2,0,.38,.9),opacity 70ms cubic-bezier(.2,0,.38,.9),background-color 70ms cubic-bezier(.2,0,.38,.9);visibility:inherit}.cds--dropdown-item:hover{background-color:var(--cds-layer-hover)}.cds--dropdown-item:hover+.cds--dropdown-item .cds--dropdown-link{border-color:transparent}.cds--dropdown-item:active{background-color:var(--cds-layer-selected)}.cds--dropdown-item:first-of-type .cds--dropdown-link{border-block-start-color:transparent}.cds--dropdown-item:last-of-type .cds--dropdown-link{border-block-end:none}.cds--dropdown-link{block-size:2.5rem;border:1px solid transparent;border-block-start-color:var(--cds-border-subtle);color:var(--cds-text-secondary,#525252);display:block;font-weight:400;line-height:1rem;margin:0 1rem;outline:2px solid transparent;outline-offset:-2px;overflow:hidden;padding:.6875rem 0;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.cds--dropdown-link:hover{border-color:transparent;color:var(--cds-text-primary,#161616)}.cds--dropdown--light .cds--dropdown-link{border-block-start-color:var(--cds-border-subtle-02,#e0e0e0)}.cds--dropdown--sm .cds--dropdown-link{block-size:2rem;padding-block-end:.4375rem;padding-block-start:.4375rem}.cds--dropdown--focused,.cds--dropdown-link:focus{margin:0;outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px;padding:.6875rem 1rem}@media screen and (prefers-contrast){.cds--dropdown--focused,.cds--dropdown-link:focus{outline-style:dotted}}.cds--dropdown-list[aria-activedescendant] .cds--dropdown-link:focus{margin:0 1rem;outline:none;padding:.6875rem 0}.cds--dropdown-list[aria-activedescendant] .cds--dropdown--focused:focus{margin:0;outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px;padding:.6875rem 1rem}@media screen and (prefers-contrast){.cds--dropdown-list[aria-activedescendant] .cds--dropdown--focused:focus{outline-style:dotted}}.cds--dropdown-list[aria-activedescendant] .cds--dropdown-item:active{background-color:inherit}.cds--dropdown-item:hover .cds--dropdown-link{border-block-end-color:var(--cds-layer-hover)}.cds--dropdown--open .cds--dropdown__arrow{transform:rotate(-180deg)}.cds--dropdown--open.cds--dropdown--sm .cds--dropdown-list{max-block-size:11rem}.cds--dropdown--open .cds--dropdown-item{opacity:1}.cds--dropdown--disabled{border-block-end-color:transparent}.cds--dropdown--disabled:hover{background-color:var(--cds-field)}.cds--dropdown--disabled:focus{outline:none}.cds--dropdown--disabled .cds--dropdown-text,.cds--dropdown--disabled .cds--list-box__label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--dropdown--disabled .cds--dropdown__arrow,.cds--dropdown--disabled .cds--list-box__menu-icon svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--dropdown--disabled.cds--dropdown--light:hover{background-color:var(--cds-field-02,#fff)}.cds--dropdown--disabled .cds--list-box__field,.cds--dropdown--disabled .cds--list-box__menu-icon{cursor:not-allowed}.cds--dropdown--auto-width{inline-size:auto;max-inline-size:25rem}.cds--dropdown--inline{background-color:transparent;border-block-end-color:transparent;display:inline-block;inline-size:auto;justify-self:start;transition:background 70ms cubic-bezier(0,0,.38,.9)}.cds--dropdown--inline:hover{background-color:var(--cds-layer-hover)}.cds--dropdown--inline.cds--dropdown--disabled{background-color:transparent}.cds--dropdown--inline .cds--dropdown__arrow{inset-block-start:.5rem;inset-inline-end:.5rem}.cds--dropdown--inline.cds--dropdown--open{background-color:transparent}.cds--dropdown--inline .cds--dropdown-text{block-size:2rem;color:var(--cds-text-primary,#161616);display:inline-block;overflow:visible;padding:.4375rem 2rem .4375rem .75rem}.cds--dropdown--inline.cds--dropdown--disabled .cds--dropdown-text{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--dropdown--inline.cds--dropdown--disabled:focus .cds--dropdown-text{outline:0}.cds--dropdown--inline.cds--dropdown--invalid .cds--dropdown__invalid-icon{inset-inline-end:2rem}.cds--dropdown--inline.cds--dropdown--invalid .cds--dropdown-text{padding-inline-end:3.5rem}.cds--dropdown--inline.cds--dropdown--open:focus .cds--dropdown-list{box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3))}.cds--dropdown--inline .cds--dropdown-link{font-weight:400}.cds--dropdown--show-selected .cds--dropdown--selected{background-color:var(--cds-layer-selected);color:var(--cds-text-primary,#161616);display:block}.cds--dropdown--show-selected .cds--dropdown--selected:hover{background-color:var(--cds-layer-selected-hover)}.cds--dropdown--show-selected .cds--dropdown--selected .cds--dropdown-link,.cds--dropdown--show-selected .cds--dropdown--selected+.cds--dropdown-item .cds--dropdown-link{border-block-start-color:transparent}.cds--dropdown--show-selected .cds--dropdown--selected .cds--list-box__menu-item__selected-icon{display:block}.cds--dropdown-v2.cds--skeleton,.cds--dropdown.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--dropdown-v2.cds--skeleton:active,.cds--dropdown-v2.cds--skeleton:focus,.cds--dropdown-v2.cds--skeleton:hover,.cds--dropdown.cds--skeleton:active,.cds--dropdown.cds--skeleton:focus,.cds--dropdown.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--dropdown-v2.cds--skeleton:before,.cds--dropdown.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--dropdown-v2.cds--skeleton:before,.cds--dropdown.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--dropdown .cds--list-box__field{outline:1px solid transparent}.cds--list-box__menu-item__option{outline:none}.cds--list-box__menu-item__selected-icon{fill:ButtonText}}.cds--dropdown--readonly,.cds--dropdown--readonly:hover{background-color:transparent;border-block-end-color:var(--cds-border-subtle)}.cds--dropdown--inline.cds--dropdown--readonly{border-block-end-color:transparent}.cds--dropdown--readonly .cds--list-box__field,.cds--dropdown--readonly .cds--list-box__menu-icon{cursor:default}.cds--dropdown--readonly .cds--list-box__menu-icon svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--select{align-items:flex-start;border:0;box-sizing:border-box;display:flex;flex-direction:column;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;position:relative;vertical-align:baseline}.cds--select *,.cds--select :after,.cds--select :before{box-sizing:inherit}.cds--select-input__wrapper{align-items:center;display:flex;inline-size:100%;position:relative}.cds--select-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--cds-field);block-size:2.5rem;border:none;border-block-end:1px solid var(--cds-border-strong);border-radius:0;color:var(--cds-text-primary,#161616);cursor:pointer;display:block;font-family:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);opacity:1;outline:2px solid transparent;outline-offset:-2px;padding-block:0;padding-inline:1rem 3rem;text-overflow:ellipsis;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--select-input:hover{background-color:var(--cds-field-hover)}.cds--select-input::-ms-expand{display:none}@-moz-document url-prefix(){.cds--select-input:-moz-focusring,.cds--select-input::-moz-focus-inner{background-image:none;color:transparent;text-shadow:0 0 0 #000}}.cds--select-input:focus{color:var(--cds-text-primary,#161616);outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--select-input:focus{outline-style:dotted}}.cds--select-input:disabled,.cds--select-input:hover:disabled{background-color:var(--cds-field);border-block-end-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--select-input--sm{block-size:2rem;max-block-size:2rem}.cds--select-input--lg{block-size:3rem;max-block-size:3rem}.cds--select--disabled .cds--form__helper-text,.cds--select--disabled .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--select--warning .cds--select-input,.cds--select-input__wrapper[data-invalid] .cds--select-input{padding-inline-end:4rem}.cds--select-input:disabled~.cds--select__arrow{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--select--light .cds--select-input{background-color:var(--cds-field-02,#fff)}.cds--select--light .cds--select-input:hover{background-color:var(--cds-field-hover)}.cds--select--light .cds--select-input:disabled,.cds--select--light .cds--select-input:hover:disabled{background-color:var(--cds-field-02,#fff);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--select__arrow{fill:var(--cds-icon-primary,#161616);block-size:100%;inset-block-start:0;inset-inline-end:1rem;pointer-events:none;position:absolute}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--select__arrow path{fill:ButtonText}}.cds--select__invalid-icon{inset-inline-end:2.5rem;position:absolute}.cds--select-input__wrapper[data-invalid] .cds--select-input~.cds--select__invalid-icon{fill:var(--cds-support-error,#da1e28)}.cds--select__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--select__invalid-icon--warning path[fill]{fill:#000;opacity:1}.cds--select-option,optgroup.cds--select-optgroup{background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--select-option:disabled,optgroup.cds--select-optgroup:disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--select--inline{align-items:center;display:flex;flex-direction:row}.cds--select--inline.cds--select--invalid .cds--form__helper-text,.cds--select--inline.cds--select--invalid .cds--label{align-self:flex-start;margin-block-start:.8125rem}.cds--select--inline .cds--form__helper-text{margin-block-end:0;margin-inline-start:.5rem}.cds--select--inline .cds--label{margin:0 .5rem 0 0;white-space:nowrap}.cds--select--inline .cds--select-input{background-color:transparent;border-block-end:none;color:var(--cds-text-primary,#161616);inline-size:auto;padding-inline-end:2rem;padding-inline-start:.5rem}.cds--select--inline .cds--select-input:focus,.cds--select--inline .cds--select-input:focus optgroup,.cds--select--inline .cds--select-input:focus option{background-color:var(--cds-background,#fff)}.cds--select--inline .cds--select-input[disabled],.cds--select--inline .cds--select-input[disabled]:hover{background-color:var(--cds-field)}.cds--select--inline .cds--select__arrow{inset-inline-end:.5rem}.cds--select--inline.cds--select--invalid .cds--select-input{padding-inline-end:3.5rem}.cds--select--inline.cds--select--invalid .cds--select-input~.cds--select__invalid-icon{inset-inline-end:2rem}.cds--select--inline .cds--select-input:disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--select--inline .cds--select-input:disabled~*{cursor:not-allowed}.cds--select--readonly .cds--select-input{background-color:transparent;border-block-end-color:var(--cds-border-subtle);cursor:default}.cds--select--readonly .cds--select__arrow{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--select.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);block-size:2.5rem;border:none;box-shadow:none;inline-size:100%;padding:0;pointer-events:none;position:relative}.cds--select.cds--skeleton:active,.cds--select.cds--skeleton:focus,.cds--select.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--select.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--select.cds--skeleton:before{animation:none}}.cds--select.cds--skeleton .cds--select-input{display:none}.cds--select--slug .cds--slug{inset-block-start:50%;inset-inline-end:calc(2.5rem + 9px);margin-block-start:.03125rem;position:absolute;transform:translateY(-50%)}.cds--select--slug .cds--slug:after,.cds--select--slug .cds--slug:before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1rem;content:"";inline-size:.0625rem;position:absolute}.cds--select--slug .cds--slug:before{display:none;inset-inline-start:calc(-.5rem - 1px)}.cds--select--slug .cds--slug:after{display:block;inset-inline-end:calc(-.5rem - 1px)}.cds--select--slug .cds--slug--revert:after{inset-block-start:.5rem;inset-inline-end:-.0625rem}.cds--select--slug .cds--select-input:not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff);padding-inline-end:4rem}.cds--select--slug:has(.cds--select__invalid-icon) .cds--select-input:not(:has(~.cds--slug--revert)){padding-inline-end:6rem}.cds--select--slug:has(.cds--select__invalid-icon) .cds--slug:before{display:block}.cds--select--slug .cds--select-input__wrapper .cds--select-input~.cds--select__invalid-icon,.cds--select--slug .cds--select-input__wrapper[data-invalid] .cds--select-input~.cds--select__invalid-icon{inset-inline-end:5rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--select__arrow{fill:ButtonText}}:root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:root{--cds-grid-columns:16}}@media (min-width:99rem){:root{--cds-grid-margin:1.5rem}}.cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start:0}.cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}.cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}.cds--subgrid--narrow{--cds-grid-gutter-start:0;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}.cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}.cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}.cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--md\\:col-span-0{display:none}.cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}.cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}.cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--lg\\:col-span-0{display:none}.cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){.cds--xlg\\:col-span-0{display:none}.cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){.cds--max\\:col-span-0{display:none}.cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){.cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){.cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}.cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){.cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){.cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}.cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}:host(c4d-search-with-typeahead-item){block-size:3rem;color:var(--cds-text-primary,#161616);display:flex}:host(c4d-search-with-typeahead-item) span{font-weight:600}:host(c4d-search-with-typeahead-item) .cds--container-class{align-items:center;border-block-end:1px solid var(--cds-layer-01,#f4f4f4);display:flex;flex:1;padding:0 1rem}:host(c4d-search-with-typeahead-item) .cds--container-class:focus{outline:none}@media screen and (prefers-reduced-motion:reduce){:host(c4d-search-with-typeahead-item:hover){background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));cursor:pointer;transition:none}}:host(c4d-search-with-typeahead-item:hover){background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));cursor:pointer;transition:95ms}:host(c4d-search-with-typeahead-item) .cds--container-highlight-class:not(:hover),:host(c4d-search-with-typeahead-item:active),:host(c4d-search-with-typeahead-item:focus){outline:.125rem solid var(--cds-focus,#0f62fe);outline-offset:-.125rem}:host(c4d-search-with-typeahead-item:last-of-type) .cds--container-class{border-block-end:none}:host(c4d-search-with-typeahead-item) span{white-space:pre}:host(c4d-search-with-typeahead-item[groupTitle]){color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857)}:host(c4d-search-with-typeahead-item[groupTitle]:active){outline:none}:host(c4d-search-with-typeahead-item[groupTitle]:hover){background:none;cursor:auto}:host(c4d-search-with-typeahead-item[lastBeforeGroup]) .cds--container-class{border-block-end-color:var(--cds-toggle-off,#8d8d8d)}:host(c4d-search-with-typeahead-item[alternate]){border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6)}:host(c4d-scoped-search-dropdown),:host(c4d-scoped-search-dropdown-mobile){border-inline-end:1px solid var(--cds-layer-accent-01,#e0e0e0);display:flex}:host(c4d-scoped-search-dropdown) .cds--list-box,:host(c4d-scoped-search-dropdown-mobile) .cds--list-box{block-size:3rem;max-block-size:none}:host(c4d-scoped-search-dropdown) .cds--list-box__field:focus,:host(c4d-scoped-search-dropdown-mobile) .cds--list-box__field:focus{outline:none}@media (max-width:65.98rem){:host(c4d-scoped-search-dropdown){display:none}}:host(c4d-scoped-search-dropdown) .cds--list-box__menu{inline-size:-moz-fit-content;inline-size:fit-content}:host(c4d-scoped-search-dropdown-mobile){inline-size:3rem}:host(c4d-scoped-search-dropdown-mobile) .cds--select-input{color:transparent;padding:0}:host(c4d-scoped-search-dropdown-mobile) .cds--select__arrow{inset-inline:0;margin-inline:auto;position:absolute;text-align:center}:host(c4d-scoped-search-dropdown-mobile) .cds--form__helper-text{inline-size:0}@media (min-width:66rem){:host(c4d-scoped-search-dropdown-mobile){display:none}}.cds--header__search,:host(c4d-top-nav){align-items:center;block-size:100%;display:flex;flex:1;position:relative}.cds--header__search.cds--masthead__platform .cds--header__nav,:host(c4d-top-nav.cds--masthead__platform) .cds--header__nav{padding-inline-start:0}.cds--header__search.cds--masthead__platform .cds--header__nav:before,:host(c4d-top-nav.cds--masthead__platform) .cds--header__nav:before{display:none}.cds--header__search.cds--masthead__platform .cds--masthead__platform-name,:host(c4d-top-nav.cds--masthead__platform) .cds--masthead__platform-name{background:var(--cds-background,#fff);block-size:100%;z-index:1}.cds--header__search.cds--masthead__header--search-active .cds--header__nav-container,:host(c4d-top-nav.cds--masthead__header--search-active) .cds--header__nav-container{display:none}.cds--header__search.cds--masthead__header--search-active+.cds--header__profile,:host(c4d-top-nav.cds--masthead__header--search-active)+.cds--header__profile{display:none}@media (min-width:42rem){.cds--header__search.cds--masthead__header--search-active+.cds--header__profile,:host(c4d-top-nav.cds--masthead__header--search-active)+.cds--header__profile{display:flex}}@media (min-width:42rem){.cds--header__search:not(.cds--masthead__header--search-active){overflow-x:visible}}.cds--header__action{align-items:center;background-color:var(--cds-background,#fff);border:.125rem solid transparent;display:inline-flex;justify-content:center}.cds--header__action>svg{fill:var(--cds-icon-secondary,#525252);position:relative}.cds--header__action:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));transition-duration:95ms}.cds--header__action:hover>svg{fill:var(--cds-icon-primary,#161616)}.cds--header__action:active,.cds--header__action:focus{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));border-color:var(--cds-focus,#0f62fe)}.cds--header__search--actions{background-color:var(--cds-background,#fff);display:flex;inset-block-start:0;inset-inline-end:0;position:absolute}.cds--header__search--actions .cds--header__search--close,.cds--header__search--actions .cds--header__search--search{background-color:var(--cds-background,#fff);color:var(--cds-icon-secondary,#525252);padding:0}.cds--header__search--actions .cds--header__search--close:hover,.cds--header__search--actions .cds--header__search--search:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--header__search--actions .cds--header__search--close:hover svg[focusable=false][aria-hidden=true],.cds--header__search--actions .cds--header__search--search:hover svg[focusable=false][aria-hidden=true]{fill:var(--cds-icon-primary,#161616)}.cds--header__search--actions .cds--header__search--close.cds--btn--icon-only.cds--tooltip--a11y.cds--tooltip__trigger .cds--assistive-text,.cds--header__search--actions .cds--header__search--close.cds--btn--icon-only.cds--tooltip--a11y.cds--tooltip__trigger:before,.cds--header__search--actions .cds--header__search--close.cds--btn--icon-only.cds--tooltip--visible .cds--assistive-text,.cds--header__search--actions .cds--header__search--close.cds--btn--icon-only.cds--tooltip--visible:before,.cds--header__search--actions .cds--header__search--search.cds--btn--icon-only.cds--tooltip--a11y.cds--tooltip__trigger .cds--assistive-text,.cds--header__search--actions .cds--header__search--search.cds--btn--icon-only.cds--tooltip--a11y.cds--tooltip__trigger:before,.cds--header__search--actions .cds--header__search--search.cds--btn--icon-only.cds--tooltip--visible .cds--assistive-text,.cds--header__search--actions .cds--header__search--search.cds--btn--icon-only.cds--tooltip--visible:before{display:none}.cds--header__profile .cds--header__action:focus,.cds--header__search--actions .cds--btn.cds--btn--icon-only.cds--tooltip__trigger:focus{border-color:var(--cds-focus,#0f62fe)}button.cds--header__search--close.cds--header__action[part=close-button]{border:none;display:none;inline-size:0;overflow:hidden}button.cds--header__search--close.cds--header__action[part=close-button] svg{position:relative}.cds--header__search--search{inline-size:3rem;outline:none}:host(c4d-search-with-typeahead){block-size:3rem;display:block;margin-inline-start:3rem;outline:none;position:relative}:host(c4d-search-with-typeahead) .c4d-ce__search__list{block-size:0;margin:0;overflow:hidden}:host(c4d-search-with-typeahead[open]) .c4d-ce__search__list{block-size:auto;padding:0}:host(c4d-search-with-typeahead[active]){inline-size:100%;margin-inline-start:0;z-index:999}:host(c4d-search-with-typeahead[active]) button.cds--header__search--close.cds--header__action[part=close-button]{display:inline-flex;min-inline-size:3rem}:host(c4d-search-with-typeahead[active]) button.cds--header__search--close.cds--header__action.cds--header__search--hide{display:none}:host(c4d-search-with-typeahead[active]) .cds--header__search--actions{z-index:10001}:host(c4d-search-with-typeahead[active]) .react-autosuggest__container:after{block-size:.125rem;border-block-end:.125rem solid var(--cds-border-interactive,#0f62fe);content:"";display:block;inline-size:100%;inset-block-end:0;inset-inline-start:0;position:absolute;z-index:10002}:host(c4d-search-with-typeahead[active]) .cds--header__search--input{background-color:var(--cds-layer-01,#f4f4f4);block-size:3rem;color:var(--cds-text-primary,#161616);display:flex;flex:1;outline:.125rem solid transparent;outline-offset:-.125rem;padding:0 1rem;z-index:10000}:host(c4d-search-with-typeahead)[active] .cds--header__search--input::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));inset-inline-start:0;opacity:1;transition-delay:.2s;transition-duration:112ms}:host(c4d-search-with-typeahead[active]) .cds--header__search--input::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));inset-inline-start:0;opacity:1;transition-delay:.2s;transition-duration:112ms}:host(c4d-search-with-typeahead[active]) .cds--header__search--close{display:inline-flex;inline-size:3rem}:host(c4d-search-with-typeahead[active]) .cds--header__search--close,:host(c4d-search-with-typeahead[active]) .cds--header__search--search{border:.125rem solid transparent}:host(c4d-search-with-typeahead[active]) .cds--header__search--close:active,:host(c4d-search-with-typeahead[active]) .cds--header__search--close:focus,:host(c4d-search-with-typeahead[active]) .cds--header__search--search:active,:host(c4d-search-with-typeahead[active]) .cds--header__search--search:focus{border:.125rem solid var(--cds-focus,#0f62fe)}:host(c4d-search-with-typeahead[active]) .cds--header__action{background-color:var(--cds-layer-01,#f4f4f4);transition-delay:.38s;transition-duration:112ms;transition-property:width}@media (max-width:65.98rem){:host(c4d-search-with-typeahead[scope-value]) .react-autosuggest__suggestions-container{inline-size:calc(100% - 3rem);inset-inline-start:3rem}}@media screen and (prefers-reduced-motion:reduce){:host(c4d-search-with-typeahead[leadspace-search]){background:var(--cds-layer-01,#f4f4f4);inset-block-start:0;outline:.125rem solid transparent;transition:none}:host(c4d-search-with-typeahead[leadspace-search]:focus){outline:.125rem solid var(--cds-focus,#0f62fe)}:host(c4d-search-with-typeahead[leadspace-search]:focus) .cds--header__search--actions{border-block-end:none}:host(c4d-search-with-typeahead[leadspace-search][unfocused]){outline:none}:host(c4d-search-with-typeahead[leadspace-search][unfocused]) .cds--header__search--actions{border-block-end:1px solid var(--cds-toggle-off,#8d8d8d)}:host(c4d-search-with-typeahead[leadspace-search]) .cds--header__search--actions{border-block-end:1px solid var(--cds-toggle-off,#8d8d8d);display:flex;inline-size:100%}:host(c4d-search-with-typeahead[leadspace-search]) .cds--search-magnifier-icon{fill:var(--cds-icon-secondary,#525252);inset-block-start:50%;inset-inline-start:1rem;pointer-events:none;position:absolute;transform:translateY(-50%);z-index:2}:host(c4d-search-with-typeahead[leadspace-search]) form{inline-size:100%;padding-inline-start:3rem}:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__container:after{content:none}:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__suggestions-container{inset-block-start:calc(3rem + 2px)}}@media screen and (prefers-reduced-motion:reduce) and (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__suggestions-container{inset-block-start:4.125rem}}@media screen and (prefers-reduced-motion:reduce){:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__suggestions-list{background-color:var(--cds-layer-01,#f4f4f4)}:host(c4d-search-with-typeahead[leadspace-search]) .cds--header__search--input{border-block-end:none;color:var(--cds-text-primary,#161616)}}@media screen and (prefers-reduced-motion:reduce) and (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]){block-size:3rem}}@media screen and (prefers-reduced-motion:reduce){:host(c4d-search-with-typeahead[leadspace-search][large]) form{inline-size:100%;padding-inline-start:3rem}}@media screen and (prefers-reduced-motion:reduce) and (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) form{block-size:3rem}}@media screen and (prefers-reduced-motion:reduce) and (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) .cds--header__search--input{block-size:3rem}}@media screen and (prefers-reduced-motion:reduce) and (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) .cds--header__search--close{block-size:3rem}}@media screen and (prefers-reduced-motion:reduce){:host(c4d-search-with-typeahead[leadspace-search][large]) .react-autosuggest__suggestions-container{inset-block-start:3.125rem}}@media screen and (prefers-reduced-motion:reduce) and (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) .react-autosuggest__suggestions-container{inset-block-start:3.125rem}}:host(c4d-search-with-typeahead[leadspace-search]){background:var(--cds-layer-01,#f4f4f4);inset-block-start:0;outline:.125rem solid transparent;transition:background-color .11s cubic-bezier(.2,0,.38,.9),outline .11s cubic-bezier(.2,0,.38,.9),top .11s cubic-bezier(0,0,.38,.9)}:host(c4d-search-with-typeahead[leadspace-search]:focus){outline:.125rem solid var(--cds-focus,#0f62fe)}:host(c4d-search-with-typeahead[leadspace-search]:focus) .cds--header__search--actions{border-block-end:none}:host(c4d-search-with-typeahead[leadspace-search][unfocused]){outline:none}:host(c4d-search-with-typeahead[leadspace-search][unfocused]) .cds--header__search--actions{border-block-end:1px solid var(--cds-toggle-off,#8d8d8d)}:host(c4d-search-with-typeahead[leadspace-search]) .cds--header__search--actions{border-block-end:1px solid var(--cds-toggle-off,#8d8d8d);display:flex;inline-size:100%}:host(c4d-search-with-typeahead[leadspace-search]) .cds--search-magnifier-icon{fill:var(--cds-icon-secondary,#525252);inset-block-start:50%;inset-inline-start:1rem;pointer-events:none;position:absolute;transform:translateY(-50%);z-index:2}:host(c4d-search-with-typeahead[leadspace-search]) form{inline-size:100%;padding-inline-start:3rem}:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__container:after{content:none}:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__suggestions-container{inset-block-start:calc(3rem + 2px)}@media (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__suggestions-container{inset-block-start:4.125rem}}:host(c4d-search-with-typeahead[leadspace-search]) .react-autosuggest__suggestions-list{background-color:var(--cds-layer-01,#f4f4f4)}:host(c4d-search-with-typeahead[leadspace-search]) .cds--header__search--input{border-block-end:none;color:var(--cds-text-primary,#161616)}@media (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]){block-size:3rem}}:host(c4d-search-with-typeahead[leadspace-search][large]) form{inline-size:100%;padding-inline-start:3rem}@media (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) form{block-size:3rem}}@media (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) .cds--header__search--input{block-size:3rem}}@media (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) .cds--header__search--close{block-size:3rem}}:host(c4d-search-with-typeahead[leadspace-search][large]) .react-autosuggest__suggestions-container{inset-block-start:3.125rem}@media (min-width:42rem){:host(c4d-search-with-typeahead[leadspace-search][large]) .react-autosuggest__suggestions-container{inset-block-start:3.125rem}}:host(c4d-search-with-typeahead[sticky-search]){inset-block-start:5rem}:host(c4d-search-with-typeahead[theme-sticky]){inset-block-start:1rem}@media (min-width:42rem){:host(c4d-search-with-typeahead[theme-sticky]){inset-block-start:2rem}}@media (min-width:66rem){:host(c4d-search-with-typeahead[theme-sticky]){inset-block-start:3rem}}.react-autosuggest__container{block-size:3rem;display:flex;justify-content:flex-end;position:relative}.react-autosuggest__suggestions-container{box-shadow:0 .125rem 6px 0 rgba(0,0,0,.3);inline-size:100%;inset-block-start:3rem;inset-inline-start:0;max-block-size:80vh;overflow-y:auto;position:absolute}.react-autosuggest__suggestions-list{background-color:var(--cds-background,#fff)}.react-autosuggest__section-title{align-items:center;background-color:var(--cds-background,#fff);block-size:3rem;border-block-end:solid 1px var(--cds-layer-01,#f4f4f4);border-block-start:solid 1px var(--cds-toggle-off,#8d8d8d);color:var(--cds-text-secondary,#525252);display:flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);padding:0 1rem}.react-autosuggest__suggestion{block-size:3rem;color:var(--cds-text-primary,#161616);display:flex}.react-autosuggest__suggestion span{font-weight:600}.react-autosuggest__suggestion .cds--container-class{align-items:center;border-block-end:1px solid var(--cds-layer-01,#f4f4f4);display:flex;flex:1;padding:0 1rem}.react-autosuggest__suggestion .cds--container-class:focus{outline:none}@media screen and (prefers-reduced-motion:reduce){.react-autosuggest__suggestion:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));cursor:pointer;transition:none}}.react-autosuggest__suggestion:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));cursor:pointer;transition:95ms}.react-autosuggest__suggestion .cds--container-highlight-class:not(:hover),.react-autosuggest__suggestion:active,.react-autosuggest__suggestion:focus{outline:.125rem solid var(--cds-focus,#0f62fe);outline-offset:-.125rem}.react-autosuggest__suggestion:last-of-type .cds--container-class{border-block-end:none}.cds--header__search--input{border:none;border-block-end:1px solid var(--cds-layer-accent-01,#e0e0e0);font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-size:1rem;inline-size:0;line-height:1.375rem;padding:0;transition:.12s}.cds--header__search--input::-moz-placeholder{inset-inline-start:5rem;opacity:0;position:relative}.cds--header__search--input::placeholder{inset-inline-start:5rem;opacity:0;position:relative}',
  ]);
let j,
  q,
  F = (e) => e;
function D() {
  D = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, t) {
      ['method', 'field'].forEach(function (s) {
        t.forEach(function (t) {
          t.kind === s &&
            'own' === t.placement &&
            this.defineClassElement(e, t);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, t) {
      var s = e.prototype;
      ['method', 'field'].forEach(function (o) {
        t.forEach(function (t) {
          var r = t.placement;
          if (t.kind === o && ('static' === r || 'prototype' === r)) {
            var i = 'static' === r ? e : s;
            this.defineClassElement(i, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var s = t.descriptor;
      if ('field' === t.kind) {
        var o = t.initializer;
        s = {
          enumerable: s.enumerable,
          writable: s.writable,
          configurable: s.configurable,
          value: void 0 === o ? void 0 : o.call(e),
        };
      }
      Object.defineProperty(e, t.key, s);
    },
    decorateClass: function (e, t) {
      var s = [],
        o = [],
        r = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, r);
        }, this),
        e.forEach(function (e) {
          if (!N(e)) return s.push(e);
          var t = this.decorateElement(e, r);
          s.push(t.element),
            s.push.apply(s, t.extras),
            o.push.apply(o, t.finishers);
        }, this),
        !t)
      )
        return { elements: s, finishers: o };
      var i = this.decorateConstructor(s, t);
      return o.push.apply(o, i.finishers), (i.finishers = o), i;
    },
    addElementPlacement: function (e, t, s) {
      var o = t[e.placement];
      if (!s && -1 !== o.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      o.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var s = [], o = [], r = e.decorators, i = r.length - 1;
        i >= 0;
        i--
      ) {
        var d = t[e.placement];
        d.splice(d.indexOf(e.key), 1);
        var c = this.fromElementDescriptor(e),
          n = this.toElementFinisherExtras((0, r[i])(c) || c);
        (e = n.element),
          this.addElementPlacement(e, t),
          n.finisher && o.push(n.finisher);
        var a = n.extras;
        if (a) {
          for (var l = 0; l < a.length; l++) this.addElementPlacement(a[l], t);
          s.push.apply(s, a);
        }
      }
      return { element: e, finishers: o, extras: s };
    },
    decorateConstructor: function (e, t) {
      for (var s = [], o = t.length - 1; o >= 0; o--) {
        var r = this.fromClassDescriptor(e),
          i = this.toClassDescriptor((0, t[o])(r) || r);
        if (
          (void 0 !== i.finisher && s.push(i.finisher), void 0 !== i.elements)
        ) {
          e = i.elements;
          for (var d = 0; d < e.length - 1; d++)
            for (var c = d + 1; c < e.length; c++)
              if (e[d].key === e[c].key && e[d].placement === e[c].placement)
                throw new TypeError('Duplicated element (' + e[d].key + ')');
        }
      }
      return { elements: e, finishers: s };
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
              if ('string' == typeof e) return Y(e, t);
              var s = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === s && e.constructor && (s = e.constructor.name),
                'Map' === s || 'Set' === s
                  ? Array.from(e)
                  : 'Arguments' === s ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                  ? Y(e, t)
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
      var s = H(e.key),
        o = e.placement + '';
      if ('static' !== o && 'prototype' !== o && 'own' !== o)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            o +
            '"'
        );
      var r = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var i = {
        kind: t,
        key: s,
        placement: o,
        descriptor: Object.assign({}, r),
      };
      return (
        'field' !== t
          ? this.disallowProperty(e, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              r,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              r,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              r,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (i.initializer = e.initializer)),
        i
      );
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: L(e, 'finisher'),
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
      var s = L(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: s };
    },
    runClassFinishers: function (e, t) {
      for (var s = 0; s < t.length; s++) {
        var o = (0, t[s])(e);
        if (void 0 !== o) {
          if ('function' != typeof o)
            throw new TypeError('Finishers must return a constructor.');
          e = o;
        }
      }
      return e;
    },
    disallowProperty: function (e, t, s) {
      if (void 0 !== e[t])
        throw new TypeError(s + " can't have a ." + t + ' property.');
    },
  };
  return e;
}
function O(e) {
  var t,
    s = H(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var o = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: s,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (o.decorators = e.decorators),
    'field' === e.kind && (o.initializer = e.value),
    o
  );
}
function M(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function N(e) {
  return e.decorators && e.decorators.length;
}
function U(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function L(e, t) {
  var s = e[t];
  if (void 0 !== s && 'function' != typeof s)
    throw new TypeError("Expected '" + t + "' to be a function");
  return s;
}
function H(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var s = e[Symbol.toPrimitive];
    if (void 0 !== s) {
      var o = s.call(e, t || 'default');
      if ('object' != typeof o) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function Y(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var s = 0, o = Array(t); s < t; s++) o[s] = e[s];
  return o;
}
function Q(e, t, s, o) {
  var r = X(G(1 & o ? e.prototype : e), t, s);
  return 2 & o && 'function' == typeof r
    ? function (e) {
        return r.apply(s, e);
      }
    : r;
}
function X() {
  return (
    (X =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, s) {
            var o = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = G(e)); );
              return e;
            })(e, t);
            if (o) {
              var r = Object.getOwnPropertyDescriptor(o, t);
              return r.get ? r.get.call(arguments.length < 3 ? e : s) : r.value;
            }
          }),
    X.apply(null, arguments)
  );
}
function G(e) {
  return (
    (G = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    G(e)
  );
}
const { prefix: V, stablePrefix: K } = n;
let W,
  Z,
  J,
  ee,
  te,
  se,
  oe,
  re,
  ie,
  de,
  ce,
  ne,
  ae,
  le,
  pe = (function (e, t, s, o) {
    var r = D();
    if (o) for (var i = 0; i < o.length; i++) r = o[i](r);
    var d = t(function (e) {
        r.initializeInstanceElements(e, c.elements);
      }, s),
      c = r.decorateClass(
        (function (e) {
          for (
            var t = [],
              s = function (e) {
                return (
                  'method' === e.kind &&
                  e.key === i.key &&
                  e.placement === i.placement
                );
              },
              o = 0;
            o < e.length;
            o++
          ) {
            var r,
              i = e[o];
            if ('method' === i.kind && (r = t.find(s)))
              if (U(i.descriptor) || U(r.descriptor)) {
                if (N(i) || N(r))
                  throw new ReferenceError(
                    'Duplicated methods (' + i.key + ") can't be decorated."
                  );
                r.descriptor = i.descriptor;
              } else {
                if (N(i)) {
                  if (N(r))
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for the same property (" +
                        i.key +
                        ').'
                    );
                  r.decorators = i.decorators;
                }
                M(i, r);
              }
            else t.push(i);
          }
          return t;
        })(d.d.map(O)),
        e
      );
    return (
      r.initializeClassElements(d.F, c.elements),
      r.runClassFinishers(d.F, c.finishers)
    );
  })(
    [$(`${K}-search-with-typeahead-item`)],
    function (e, t) {
      class o extends t {
        constructor(...t) {
          super(...t), e(this);
        }
      }
      return {
        F: o,
        d: [
          {
            kind: 'field',
            decorators: [a()],
            key: '_pageIsRTL',
            value() {
              return 'rtl' === this.ownerDocument.documentElement.dir;
            },
          },
          { kind: 'field', decorators: [d()], key: 'href', value: () => '' },
          {
            kind: 'field',
            decorators: [d({ type: Boolean, reflect: !0 })],
            key: 'highlighted',
            value: () => !1,
          },
          { kind: 'field', decorators: [d()], key: 'text', value: () => '' },
          {
            kind: 'method',
            key: '_getCurrentQuery',
            value: function () {
              const e = this.getRootNode().host,
                { searchQueryString: t } = null != e ? e : {};
              return null == t ? void 0 : t.toLowerCase();
            },
          },
          {
            kind: 'method',
            key: '_getHighlightedText',
            value: function () {
              const { text: e } = this;
              let t = this._getCurrentQuery();
              const s = e.toLowerCase();
              if (s.includes(t)) {
                const o = s.indexOf(t);
                t = e.substring(o, o + t.length);
              }
              const o = c(
                  j ||
                    (j = F`<span
      class="${0}-ce--search-with-typeahead-item__highlighted"
      part="item item-highlighted"
      >${0}</span
    >`),
                  K,
                  t
                ),
                r = e
                  .split(new RegExp(t, 'i'))
                  .reduce(
                    (e, t) => (
                      e.push(t.replace(/^\s/, ' ').replace(/\s$/, ' ')),
                      e.push(o),
                      e
                    ),
                    []
                  );
              return r.pop(), this._pageIsRTL && r.reverse(), r;
            },
          },
          {
            kind: 'method',
            key: 'connectedCallback',
            value: function () {
              this.hasAttribute('role') || this.setAttribute('role', 'option'),
                Q(o, 'connectedCallback', this, 3)([]);
            },
          },
          {
            kind: 'method',
            key: 'shouldUpdate',
            value: function (e) {
              const t = Q(o, 'shouldUpdate', this, 3)([e]);
              if (e.has('text')) {
                const { text: e } = this,
                  t = this._getCurrentQuery();
                this._content =
                  !t || this.hasAttribute('groupTitle')
                    ? e
                    : this._getHighlightedText();
              }
              return t;
            },
          },
          {
            kind: 'method',
            key: 'updated',
            value: function (e) {
              Q(o, 'updated', this, 3)([e]),
                e.has('highlighted') &&
                  this.setAttribute(
                    'aria-selected',
                    String(Boolean(this.highlighted))
                  );
            },
          },
          {
            kind: 'method',
            key: 'render',
            value: function () {
              const { highlighted: e, _content: t } = this,
                o = s({
                  [`${V}--container-class`]: !0,
                  [`${V}--container-highlight-class`]: e,
                });
              return c(
                q ||
                  (q = F`
      <div class="${0}" part="item-container" tabindex="-1">
        ${0}
      </div>
    `),
                o,
                t
              );
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => B },
        ],
      };
    },
    i
  ),
  ue = (e) => e;
function me() {
  me = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, t) {
      ['method', 'field'].forEach(function (s) {
        t.forEach(function (t) {
          t.kind === s &&
            'own' === t.placement &&
            this.defineClassElement(e, t);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, t) {
      var s = e.prototype;
      ['method', 'field'].forEach(function (o) {
        t.forEach(function (t) {
          var r = t.placement;
          if (t.kind === o && ('static' === r || 'prototype' === r)) {
            var i = 'static' === r ? e : s;
            this.defineClassElement(i, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var s = t.descriptor;
      if ('field' === t.kind) {
        var o = t.initializer;
        s = {
          enumerable: s.enumerable,
          writable: s.writable,
          configurable: s.configurable,
          value: void 0 === o ? void 0 : o.call(e),
        };
      }
      Object.defineProperty(e, t.key, s);
    },
    decorateClass: function (e, t) {
      var s = [],
        o = [],
        r = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, r);
        }, this),
        e.forEach(function (e) {
          if (!he(e)) return s.push(e);
          var t = this.decorateElement(e, r);
          s.push(t.element),
            s.push.apply(s, t.extras),
            o.push.apply(o, t.finishers);
        }, this),
        !t)
      )
        return { elements: s, finishers: o };
      var i = this.decorateConstructor(s, t);
      return o.push.apply(o, i.finishers), (i.finishers = o), i;
    },
    addElementPlacement: function (e, t, s) {
      var o = t[e.placement];
      if (!s && -1 !== o.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      o.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var s = [], o = [], r = e.decorators, i = r.length - 1;
        i >= 0;
        i--
      ) {
        var d = t[e.placement];
        d.splice(d.indexOf(e.key), 1);
        var c = this.fromElementDescriptor(e),
          n = this.toElementFinisherExtras((0, r[i])(c) || c);
        (e = n.element),
          this.addElementPlacement(e, t),
          n.finisher && o.push(n.finisher);
        var a = n.extras;
        if (a) {
          for (var l = 0; l < a.length; l++) this.addElementPlacement(a[l], t);
          s.push.apply(s, a);
        }
      }
      return { element: e, finishers: o, extras: s };
    },
    decorateConstructor: function (e, t) {
      for (var s = [], o = t.length - 1; o >= 0; o--) {
        var r = this.fromClassDescriptor(e),
          i = this.toClassDescriptor((0, t[o])(r) || r);
        if (
          (void 0 !== i.finisher && s.push(i.finisher), void 0 !== i.elements)
        ) {
          e = i.elements;
          for (var d = 0; d < e.length - 1; d++)
            for (var c = d + 1; c < e.length; c++)
              if (e[d].key === e[c].key && e[d].placement === e[c].placement)
                throw new TypeError('Duplicated element (' + e[d].key + ')');
        }
      }
      return { elements: e, finishers: s };
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
              if ('string' == typeof e) return xe(e, t);
              var s = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === s && e.constructor && (s = e.constructor.name),
                'Map' === s || 'Set' === s
                  ? Array.from(e)
                  : 'Arguments' === s ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                  ? xe(e, t)
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
      var s = _e(e.key),
        o = e.placement + '';
      if ('static' !== o && 'prototype' !== o && 'own' !== o)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            o +
            '"'
        );
      var r = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var i = {
        kind: t,
        key: s,
        placement: o,
        descriptor: Object.assign({}, r),
      };
      return (
        'field' !== t
          ? this.disallowProperty(e, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              r,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              r,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              r,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (i.initializer = e.initializer)),
        i
      );
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: fe(e, 'finisher'),
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
      var s = fe(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: s };
    },
    runClassFinishers: function (e, t) {
      for (var s = 0; s < t.length; s++) {
        var o = (0, t[s])(e);
        if (void 0 !== o) {
          if ('function' != typeof o)
            throw new TypeError('Finishers must return a constructor.');
          e = o;
        }
      }
      return e;
    },
    disallowProperty: function (e, t, s) {
      if (void 0 !== e[t])
        throw new TypeError(s + " can't have a ." + t + ' property.');
    },
  };
  return e;
}
function ge(e) {
  var t,
    s = _e(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var o = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: s,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (o.decorators = e.decorators),
    'field' === e.kind && (o.initializer = e.value),
    o
  );
}
function be(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function he(e) {
  return e.decorators && e.decorators.length;
}
function ve(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function fe(e, t) {
  var s = e[t];
  if (void 0 !== s && 'function' != typeof s)
    throw new TypeError("Expected '" + t + "' to be a function");
  return s;
}
function _e(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var s = e[Symbol.toPrimitive];
    if (void 0 !== s) {
      var o = s.call(e, t || 'default');
      if ('object' != typeof o) return o;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function xe(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var s = 0, o = Array(t); s < t; s++) o[s] = e[s];
  return o;
}
function ye() {
  return (
    (ye =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, s) {
            var o = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = ke(e)); );
              return e;
            })(e, t);
            if (o) {
              var r = Object.getOwnPropertyDescriptor(o, t);
              return r.get ? r.get.call(arguments.length < 3 ? e : s) : r.value;
            }
          }),
    ye.apply(null, arguments)
  );
}
function ke(e) {
  return (
    (ke = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    ke(e)
  );
}
const { prefix: we, stablePrefix: ze } = n,
  Se = parseFloat(v.lg.width) * f;
!(function (e, t, s, o) {
  var r = me();
  if (o) for (var i = 0; i < o.length; i++) r = o[i](r);
  var d = t(function (e) {
      r.initializeInstanceElements(e, c.elements);
    }, s),
    c = r.decorateClass(
      (function (e) {
        for (
          var t = [],
            s = function (e) {
              return (
                'method' === e.kind &&
                e.key === i.key &&
                e.placement === i.placement
              );
            },
            o = 0;
          o < e.length;
          o++
        ) {
          var r,
            i = e[o];
          if ('method' === i.kind && (r = t.find(s)))
            if (ve(i.descriptor) || ve(r.descriptor)) {
              if (he(i) || he(r))
                throw new ReferenceError(
                  'Duplicated methods (' + i.key + ") can't be decorated."
                );
              r.descriptor = i.descriptor;
            } else {
              if (he(i)) {
                if (he(r))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      i.key +
                      ').'
                  );
                r.decorators = i.decorators;
              }
              be(i, r);
            }
          else t.push(i);
        }
        return t;
      })(d.d.map(ge)),
      e
    );
  r.initializeClassElements(d.F, c.elements),
    r.runClassFinishers(d.F, c.finishers);
})(
  [$(`${ze}-search-with-typeahead`)],
  function (e, o) {
    class r extends o {
      constructor(...t) {
        super(...t), e(this);
      }
    }
    return {
      F: r,
      d: [
        {
          kind: 'method',
          key: 'getResults',
          value: async function (e) {
            return (await C.getResults(e, this.appId)).map((e) => e[0]);
          },
        },
        {
          kind: 'field',
          decorators: [d({ attribute: !1 })],
          key: 'placeholderFormatter',
          value:
            () =>
            ({ appId: e }) =>
              `Search in ${e}`,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'leadspace-search', type: Boolean })],
          key: 'leadspaceSearch',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'custom-typeahead-api', type: Boolean })],
          key: 'customTypeaheadAPI',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'currentSearchResults',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'searchResults',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'groupedResults',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'initial-search-term', reflect: !0 })],
          key: 'initialSearchTerm',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'scope-parameters' })],
          key: 'scopeParameters',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'should-remain-open', type: Boolean })],
          key: 'shouldRemainOpen',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'appid', reflect: !0 })],
          key: 'appId',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'scope-label', reflect: !0 })],
          key: 'scopeLabel',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'scope-value', reflect: !0 })],
          key: 'scopeValue',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [a()],
          key: 'userHasInputSearch',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [l(`.${we}--header__search--search`)],
          key: '_searchButtonNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [l(`.${we}--header__search--close`)],
          key: '_closeButtonNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [l(`.${we}--header__search--input`)],
          key: '_searchInputNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [l('.react-autosuggest__suggestions-list')],
          key: '_searchSuggestions',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [b('shadowRoot:focusin')],
          key: '_handleFocus',
          value() {
            return async ({ target: e }) => {
              this._searchSuggestions &&
                (e === this._searchInputNode
                  ? this._searchSuggestions.removeAttribute('hidden')
                  : e === (this._searchButtonNode || this._closeButtonNode) &&
                    this._searchSuggestions.setAttribute('hidden', ''),
                e === this._closeButtonNode
                  ? this.setAttribute('unfocused', '')
                  : this.removeAttribute('unfocused'));
            };
          },
        },
        {
          kind: 'method',
          key: '_handleClickCloseButton',
          value: async function () {
            var e;
            this.leadspaceSearch &&
              (null === (e = this._closeButtonNode) ||
                void 0 === e ||
                e.classList.add(`${we}--header__search--hide`));
            this._handleUserInitiatedToggleActiveState(!1);
          },
        },
        {
          kind: 'method',
          key: '_handleClickInner',
          value: function (e) {
            if (e.target.closest('.cds--header__search--input') === e.target) {
              var t;
              if (
                (this._handleUserInitiatedToggle(),
                this.searchQueryString && this.leadspaceSearch)
              )
                null === (t = this._closeButtonNode) ||
                  void 0 === t ||
                  t.classList.remove(`${we}--header__search--hide`);
            } else {
              const t = e.target.closest(this.constructor.selectorItem);
              this.shadowRoot.contains(t) &&
                !t.hasAttribute('groupTitle') &&
                this._handleUserInitiatedSelectItem(t);
            }
          },
        },
        {
          kind: 'method',
          key: '_handleClickSearchButton',
          value: async function () {
            const { active: e } = this;
            e
              ? this.searchQueryString && this._handleUserInitiatedRedirect()
              : this._handleUserInitiatedToggleActiveState(!0);
          },
        },
        {
          kind: 'method',
          key: '_handleUserInitiatedToggleActiveState',
          value: async function (e, t = !0) {
            if (e === this.active) return;
            const { _searchInputNode: s } = this,
              { eventInput: o, eventToggle: r } = this.constructor;
            !e &&
              s.value &&
              ((s.value = ''),
              this.dispatchEvent(
                new CustomEvent(o, {
                  bubbles: !0,
                  composed: !0,
                  cancelable: !1,
                  detail: { value: '' },
                })
              )),
              (this.active = !!this.shouldRemainOpen || !this.active),
              (this.searchResults = []),
              (this.groupedResults = []),
              this.dispatchEvent(
                new CustomEvent(r, {
                  bubbles: !0,
                  cancelable: !0,
                  composed: !0,
                  detail: { active: e },
                })
              ),
              await this.updateComplete,
              t &&
                (this.active
                  ? this._searchInputNode
                  : this._searchButtonNode
                ).focus();
          },
        },
        {
          kind: 'method',
          key: '_handleKeyInput',
          value: function (e) {
            this.constructor.getAction(e.key) === m.NONE && e.stopPropagation();
          },
        },
        {
          kind: 'method',
          key: '_buildRedirect',
          value: function (e = this.searchQueryString) {
            const [t, s] = this.language.split('-'),
              o = this.redirectUrl.split('?'),
              r = o.shift(),
              i = new URLSearchParams(o.join('?'));
            var d;
            (i.append('q', e),
            i.append('lang', t),
            i.append('cc', s),
            this.appId) &&
              (i.append('scope-domain', 'scope'),
              i.append('scope-value', this.scopeValue),
              i.append('scope-type', this.appId),
              this.scopeLabel &&
                i.append(
                  'scope-label',
                  null !== (d = this.scopeLabel) && void 0 !== d ? d : ''
                ));
            return `${r}?${i.toString()}`;
          },
        },
        {
          kind: 'method',
          key: '_handleUserInitiatedRedirect',
          value: function ({ targetQuery: e, targetHref: t } = {}) {
            const { eventBeforeRedirect: s, eventInput: o } = this.constructor;
            this.dispatchEvent(
              new CustomEvent(o, {
                bubbles: !0,
                composed: !0,
                cancelable: !1,
                detail: { value: e },
              })
            );
            const r = null != e ? e : this.searchQueryString,
              i = t || this._buildRedirect(r);
            this.dispatchEvent(
              new CustomEvent(s, {
                bubbles: !0,
                cancelable: !0,
                composed: !0,
                detail: { redirectUrl: i, searchQueryString: r },
              })
            ) && this._redirect(i);
          },
        },
        {
          kind: 'method',
          decorators: [b('focusout')],
          key: '_handleFocusOut',
          value: function (e) {
            !(function (e, t, s, o) {
              var r = ye(ke(1 & o ? e.prototype : e), t, s);
              return 2 & o && 'function' == typeof r
                ? function (e) {
                    return r.apply(s, e);
                  }
                : r;
            })(
              r,
              '_handleFocusOut',
              this,
              3
            )([e]);
          },
        },
        {
          kind: 'field',
          decorators: [b('document:eventCustomResults')],
          key: '_handleCustomResults',
          value() {
            return (e) => {
              this.customTypeaheadAPI &&
                (([this.searchResults] = e.detail),
                (this.groupedResults = e.detail.slice(1)));
            };
          },
        },
        {
          kind: 'field',
          decorators: [b('document:eventSelectScope')],
          key: '_handleScopeSelect',
          value() {
            return (e) => {
              var t, s;
              let o;
              (this.appId = e.detail.appId),
                this.scopeParameters.forEach((e) => {
                  e.appId === this.appId && (o = e);
                }),
                (this.scopeValue = Array.isArray(
                  null === (t = o) || void 0 === t ? void 0 : t.value
                )
                  ? `[${o.value
                      .toString()
                      .split(',')
                      .map((e) => `"${e.trim()}"`)
                      .join(',')}]`
                  : o.value),
                (this.scopeLabel =
                  null !== (s = o.label) && void 0 !== s ? s : '');
            };
          },
        },
        {
          kind: 'method',
          key: '_handleInput',
          value: function (e) {
            const { userHasInputSearch: t } = this,
              { target: s } = e,
              { value: o } = s;
            this.removeAttribute('unfocused');
            var r;
            (this.shadowRoot
              .querySelectorAll(this.constructor.selectorItem)
              .forEach((e) => {
                this.leadspaceSearch && e.setAttribute('alternate', ''),
                  e.hasAttribute('highlighted') &&
                    this.setAttribute('unfocused', '');
              }),
            this.dispatchEvent(
              new CustomEvent(this.constructor.eventInput, {
                bubbles: !0,
                composed: !0,
                cancelable: !1,
                detail: { value: o },
              })
            ),
            (this.value = o),
            this.customTypeaheadAPI ||
              this.getResults(o).then((e) => {
                this.searchResults = e;
              }),
            o) &&
              ((this.open = !0),
              this.leadspaceSearch &&
                (null === (r = this._closeButtonNode) ||
                  void 0 === r ||
                  r.classList.remove(`${we}--header__search--hide`)));
            if (
              (t || (this.userHasInputSearch = !0),
              Se < document.body.clientWidth &&
                this._searchSuggestions &&
                this.scopeParameters)
            ) {
              var i, d;
              const e = (
                null === (i = this.shadowRoot) || void 0 === i
                  ? void 0
                  : i.querySelector('c4d-scoped-search-dropdown')
              ).offsetWidth;
              null === (d = this._searchSuggestions) ||
                void 0 === d ||
                null === (d = d.parentElement) ||
                void 0 === d ||
                d.setAttribute(
                  'style',
                  `left: ${e}px; width: calc(100% - ${e}px);`
                );
            } else {
              var c;
              null === (c = this._searchSuggestions) ||
                void 0 === c ||
                null === (c = c.parentElement) ||
                void 0 === c ||
                c.removeAttribute('style');
            }
          },
        },
        {
          kind: 'method',
          key: '_handleSubmit',
          value: function (e) {
            const { searchQueryString: t, redirectUrl: s } = this,
              { eventBeforeRedirect: o } = this.constructor,
              { selectorItemHighlighted: r } = this.constructor;
            this.shadowRoot.querySelector(r) || !t
              ? e.preventDefault()
              : this.dispatchEvent(
                  new CustomEvent(o, {
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0,
                    detail: { redirectUrl: s, searchQueryString: t },
                  })
                ) || e.preventDefault();
          },
        },
        {
          kind: 'method',
          key: '_handleUserInitiatedSelectItem',
          value: function (e) {
            e &&
              e instanceof pe &&
              ((this._searchInputNode.value = e.text),
              this._handleUserInitiatedRedirect({
                targetQuery: e.text,
                targetHref: e.href,
              }));
          },
        },
        {
          kind: 'method',
          key: '_handleKeypressInner',
          value: function (e) {
            const { key: t } = e,
              s = this.constructor.getAction(t);
            if (this.open) {
              if (s === m.TRIGGERING) {
                const { selectorItemHighlighted: e } = this.constructor,
                  t = this.shadowRoot.querySelector(e);
                t
                  ? this._handleUserInitiatedSelectItem(t)
                  : this._handleUserInitiatedToggle(!1);
              }
            } else if (s === m.TRIGGERING) this._handleUserInitiatedToggle(!0);
          },
        },
        {
          kind: 'method',
          key: '_redirect',
          value: function (e) {
            this.ownerDocument.defaultView.location.assign(e);
          },
        },
        {
          kind: 'method',
          key: '_navigate',
          value: function (e) {
            const t = this.constructor,
              s = this.shadowRoot.querySelectorAll(t.selectorItem),
              o = this.shadowRoot.querySelector(t.selectorItemHighlighted);
            let r = S(s, o) + e;
            s[r] && s[r].hasAttribute('groupTitle') && (r += e),
              r < 0 && (r = s.length - 1),
              r >= s.length && (r = 0),
              E(s, (e, t) => {
                e.highlighted = t === r;
              }),
              this.setAttribute('unfocused', '');
            s[r].scrollIntoView({ block: 'nearest' }), this.requestUpdate();
          },
        },
        {
          kind: 'method',
          key: '_renderTriggerContent',
          value: function () {
            const {
              initialSearchTerm: e,
              searchPlaceholder: s,
              searchLabel: o,
              userHasInputSearch: r,
              _handleInput: i,
              _handleKeyInput: d,
            } = this;
            return c(
              W ||
                (W = ue`
      <input
        type="text"
        part="search-input"
        class="${0}--header__search--input"
        name="q"
        placeholder="${0}"
        value="${0}"
        autocomplete="off"
        aria-controls="result-list"
        aria-autocomplete="list"
        aria-label="${0}"
        @input="${0}"
        @keydown="${0}"
        @keypress="${0}" />
    `),
              we,
              s,
              r ? '' : e,
              t(o),
              i,
              d,
              d
            );
          },
        },
        {
          kind: 'method',
          key: '_handleClickItem',
          value: function (e) {
            const { selectorItem: t } = this.constructor,
              s = e.target.closest(t);
            this.shadowRoot.contains(s) &&
              this._handleUserInitiatedSelectItem(s);
          },
        },
        {
          kind: 'method',
          key: '_renderForm',
          value: function () {
            const {
              active: e,
              language: o,
              open: r,
              redirectUrl: i,
              searchLabel: d,
              _handleClickInner: n,
              _handleKeydownInner: a,
              _handleKeypressInner: l,
              _handleSubmit: p,
            } = this;
            if (!e) return;
            const [u, m] = o.split('-'),
              g = s({
                'react-autosuggest__container': !0,
                'react-autosuggest__suggestions-container--open': r,
              });
            return c(
              Z ||
                (Z = ue`
      <form
        role="search"
        part="search-form"
        method="get"
        action="${0}"
        @submit="${0}">
        <input type="hidden" name="lang" value="${0}" />
        <input type="hidden" name="cc" value="${0}" />
        <input type="hidden" name="lnk" value="mhsrch" />
        ${0}
        <div
          role="combobox"
          class="${0}"
          part="container"
          aria-haspopup="listbox"
          aria-owns="result-list"
          aria-expanded="${0}"
          aria-label="${0}"
          @click=${0}
          @keydown="${0}"
          @keypress="${0}">
          ${0}
          ${0}
          ${0}
        </div>
      </form>
    `),
              i,
              p,
              u,
              m,
              this.scopeParameters
                ? c(
                    J ||
                      (J = ue`
              <input type="hidden" name="scope-domain" value="scope" />
              <input type="hidden" name="scope-type" value="${0}" />
              <input
                type="hidden"
                name="scope-value"
                value="${0}" />
              <input
                type="hidden"
                name="scope-label"
                value="${0}" />
            `),
                    this.appId,
                    this.scopeValue,
                    this.scopeLabel
                  )
                : '',
              g,
              Boolean(this.active),
              t(d),
              n,
              a,
              l,
              this.scopeParameters
                ? c(
                    ee ||
                      (ee = ue`
                <c4d-scoped-search-dropdown
                  part="dropdown"
                  value="${0}">
                  ${0}
                </c4d-scoped-search-dropdown>
                <c4d-scoped-search-dropdown-mobile
                  part="dropdown-mobile"
                  value="${0}">
                  ${0}
                </c4d-scoped-search-dropdown-mobile>
              `),
                    this.appId,
                    this.scopeParameters.map((e) =>
                      c(
                        te ||
                          (te = ue`
                      <cds-dropdown-item
                        part="dropdown-item"
                        value="${0}"
                        >${0}</cds-dropdown-item
                      >
                    `),
                        e.appId,
                        e.name
                      )
                    ),
                    this.appId,
                    this.scopeParameters.map((e) =>
                      c(
                        se ||
                          (se = ue`
                      <cds-select-item
                        part="select-item"
                        label="${0}"
                        value="${0}"
                        >${0}</cds-select-item
                      >
                    `),
                        e.name,
                        e.appId,
                        e.name
                      )
                    )
                  )
                : '',
              this._renderTriggerContent(),
              this.leadspaceSearch
                ? ''
                : c(
                    oe ||
                      (oe = ue`
                <div
                  id="result-list"
                  class="react-autosuggest__suggestions-container"
                  part="suggestions-container">
                  <ul
                    role="listbox"
                    class="${0}-ce__search__list react-autosuggest__suggestions-list"
                    part="suggestions-list"
                    aria-label="suggestions-list">
                    ${0}
                    ${0}
                  </ul>
                </div>
              `),
                    ze,
                    this.searchResults &&
                      this.searchResults.map((e) =>
                        c(
                          re ||
                            (re = ue`
                          <c4d-search-with-typeahead-item
                            part="suggestion-item"
                            text="${0}"></c4d-search-with-typeahead-item>
                        `),
                          e
                        )
                      ),
                    this.groupedResults &&
                      this.groupedResults.map((e) =>
                        c(
                          ie ||
                            (ie = ue`
                          <c4d-search-with-typeahead-item
                            part="suggestion-item"
                            groupTitle
                            text="${0}"></c4d-search-with-typeahead-item>
                          ${0}
                        `),
                          e.title,
                          e.items.map((e) =>
                            c(
                              de ||
                                (de = ue`
                                <c4d-search-with-typeahead-item
                                  part="suggestion-item"
                                  text="${0}"
                                  href="${0}"></c4d-search-with-typeahead-item>
                              `),
                              e.name,
                              e.href
                            )
                          )
                        )
                      )
                  )
            );
          },
        },
        {
          kind: 'method',
          key: '_selectionShouldChange',
          value: function () {
            return !0;
          },
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, reflect: !0 })],
          key: 'active',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'close-search-button-assistive-text' })],
          key: 'closeSearchButtonAssistiveText',
          value: () => 'Clear input',
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'language',
          value: () => 'en-US',
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'open-search-button-assistive-text' })],
          key: 'openSearchButtonAssistiveText',
          value: () => 'Open IBM search field',
        },
        {
          kind: 'field',
          decorators: [
            d({ attribute: 'perform-search-button-assistive-text' }),
          ],
          key: 'performSearchButtonAssistiveText',
          value: () => 'Search all of IBM',
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'placeholder', reflect: !0 })],
          key: 'searchPlaceholder',
          value: () => 'Search all of IBM',
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'redirect-url' })],
          key: 'redirectUrl',
          value: () => 'https://www.ibm.com/search?lnk=mhsrch',
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'search-label' })],
          key: 'searchLabel',
          value: () => 'IBM search field',
        },
        {
          kind: 'field',
          decorators: [d({ reflect: !0 })],
          key: 'slot',
          value: () => 'search',
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, attribute: 'search-open-on-load' })],
          key: 'searchOpenOnload',
          value: () => !1,
        },
        {
          kind: 'get',
          key: 'searchQueryString',
          value: function () {
            var e, t;
            return null !==
              (e =
                null === (t = this._searchInputNode) || void 0 === t
                  ? void 0
                  : t.value) && void 0 !== e
              ? e
              : '';
          },
        },
        {
          kind: 'method',
          key: '_setSearchParam',
          value: function () {
            const { _searchInputNode: e } = this,
              t = new URLSearchParams(
                this.ownerDocument.defaultView.location.search
              ),
              s = this.searchOpenOnload ? t.get('q') : '';
            s && (e.value = s);
          },
        },
        {
          kind: 'method',
          key: 'firstUpdated',
          value: function () {
            this._setSearchParam(),
              this.leadspaceSearch &&
                (this.setAttribute('should-remain-open', ''),
                this.setAttribute('active', '')),
              !this.appId &&
                this.scopeParameters &&
                ((this.appId = 'all'),
                (this.redirectUrl = 'https://www.ibm.com/search/scoped'));
          },
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            if (e.has('searchResults')) {
              var t;
              const e =
                null === (t = this.shadowRoot) || void 0 === t
                  ? void 0
                  : t.querySelectorAll(
                      'c4d-search-with-typeahead-item[groupTitle]'
                    );
              null == e ||
                e.forEach((e) => {
                  var t;
                  null === (t = e.previousElementSibling) ||
                    void 0 === t ||
                    t.setAttribute('lastBeforeGroup', '');
                });
            }
            if (e.has('appId')) {
              var s;
              if (
                Se < document.body.clientWidth &&
                this._searchSuggestions &&
                this.scopeParameters
              ) {
                var o, r;
                const e = (
                  null === (o = this.shadowRoot) || void 0 === o
                    ? void 0
                    : o.querySelector('c4d-scoped-search-dropdown')
                ).offsetWidth;
                null === (r = this._searchSuggestions) ||
                  void 0 === r ||
                  null === (r = r.parentElement) ||
                  void 0 === r ||
                  r.setAttribute(
                    'style',
                    `left: ${e}px; width: calc(100% - ${e}px);`
                  );
              } else {
                var i;
                null === (i = this._searchSuggestions) ||
                  void 0 === i ||
                  null === (i = i.parentElement) ||
                  void 0 === i ||
                  i.removeAttribute('style');
              }
              this.customTypeaheadAPI ||
                this.getResults(this.value).then((e) => {
                  this.searchResults = e;
                });
              const e = this.placeholderFormatter({
                appId:
                  null ===
                    (s = this.scopeParameters.filter(
                      (e) => e.value === `${this.appId}`
                    )[0]) || void 0 === s
                    ? void 0
                    : s.name,
              });
              this.setAttribute('placeholder', e),
                (this.performSearchButtonAssistiveText = e);
            }
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const {
                active: e,
                closeSearchButtonAssistiveText: t,
                openSearchButtonAssistiveText: s,
                performSearchButtonAssistiveText: o,
                _handleClickCloseButton: r,
                _handleClickSearchButton: i,
                _handleClickItem: d,
              } = this,
              n = e ? o : s;
            return c(
              ce ||
                (ce = ue`
      ${0}
    `),
              this.leadspaceSearch
                ? c(
                    ae ||
                      (ae = ue`
            <div
              part="header-search-actions"
              class="${0}--header__search--actions">
              ${0}
              ${0}
              <button
                type="button"
                part="close-button"
                class="${0}--header__action ${0}--header__search--close ${0}"
                aria-label="${0}"
                @click="${0}">
                ${0}
              </button>
            </div>
            <div
              id="result-list"
              class="react-autosuggest__suggestions-container"
              part="suggestions-container">
              <ul
                role="listbox"
                class="${0}-ce__search__list react-autosuggest__suggestions-list"
                part="suggestions-list">
                ${0}
              </ul>
            </div>
          `),
                    we,
                    P({
                      part: 'search-icon',
                      class: `${we}--search-magnifier-icon`,
                      role: 'img',
                    }),
                    this._renderForm(),
                    we,
                    we,
                    0 === this.value.length
                      ? `${we}--header__search--hide`
                      : '',
                    t,
                    r,
                    p(),
                    ze,
                    this.searchResults &&
                      this.searchResults.map((e) =>
                        c(
                          le ||
                            (le = ue`
                      <c4d-search-with-typeahead-item
                        part="suggestion-item"
                        text="${0}"
                        @click=${0}></c4d-search-with-typeahead-item>
                    `),
                          e,
                          d
                        )
                      )
                  )
                : c(
                    ne ||
                      (ne = ue`
            ${0}
            <div
              part="header-search-actions"
              class="${0}--header__search--actions">
              <button
                type="button"
                part="open-button"
                class="${0}--header__action ${0}--header__search--search"
                aria-label="${0}"
                @click="${0}">
                ${0}
              </button>
              <button
                type="button"
                part="close-button"
                class="${0}--header__action ${0}--header__search--close"
                aria-label="${0}"
                @click="${0}">
                ${0}
              </button>
            </div>
          `),
                    this._renderForm(),
                    we,
                    we,
                    we,
                    n,
                    i,
                    P(),
                    we,
                    we,
                    t,
                    r,
                    p()
                  )
            );
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemHighlighted',
          value: function () {
            return `${ze}-search-with-typeahead-item[highlighted]`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItem',
          value: function () {
            return `${ze}-search-with-typeahead-item`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventBeforeRedirect',
          value: function () {
            return `${ze}-search-with-typeahead-beingredirected`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventInput',
          value: function () {
            return `${ze}-search-with-typeahead-input`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventSelectScope',
          value: function () {
            return `${we}-select-selected`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventCustomResults',
          value: function () {
            return `${ze}-custom-typeahead-api-results`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventToggle',
          value: function () {
            return `${ze}-search-with-typeahead-toggled`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${ze}--search-with-typeahead`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => B },
      ],
    };
  },
  h(I(g))
);
export { B as s };
