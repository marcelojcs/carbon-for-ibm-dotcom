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
import {
  b as s,
  i as c,
  a as n,
  n as d,
  x as r,
} from './query-assigned-elements.js';
import { t as a } from './state.js';
import { i } from './query.js';
import { o as l } from './class-map.js';
import { p } from './settings.js';
import { H as b } from './host-listener2.js';
import { H as v } from './host-listener.js';
import { i as h, f as u } from './collection-helpers2.js';
import { s as f } from './162.js';
import { s as g } from './spread.js';
import { _ as m } from './objectSpread2.js';
import { c as y } from './carbon-element.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const _ = ({ children: e, ...t } = {}) =>
    s`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${g(
      t
    )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${e}${e}<path d="M5 8L10 3 10.7 3.7 6.4 8 10.7 12.3 10 13z"></path></svg>`,
  /**
   * @license
   *
   * Copyright IBM Corp. 2020, 2022, 2023
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */ k = { Left: -1, ArrowLeft: -1, Right: 1, ArrowRight: 1 };
let x;
!(function (e) {
  (e.REGULAR = ''), (e.SMALL = 'sm'), (e.LARGE = 'lg'), (e.EXTRA_LARGE = 'xl');
})(x || (x = {}));
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z = c([
  '.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm,:host(cds-content-switcher[size=sm]){--cds-layout-size-height-context:var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg,:host(cds-content-switcher[size=lg]){--cds-layout-size-height-context:var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed, 0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, 0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:root{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02, #ffffff);--cds-layer-active:var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02, #a8a8a8);--cds-field:var(--cds-field-02, #ffffff);--cds-field-hover:var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong:var(--cds-border-strong-02, #8d8d8d);--cds-border-tile:var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03, #f4f4f4);--cds-layer-active:var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03, #a8a8a8);--cds-field:var(--cds-field-03, #f4f4f4);--cds-field-hover:var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong:var(--cds-border-strong-03, #8d8d8d);--cds-border-tile:var(--cds-border-tile-03, #c6c6c6)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}100%{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}100%{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}100%{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse, #393939);--cds-popover-text-color:var(--cds-text-inverse, #ffffff)}.cds--popover--drop-shadow .cds--popover{--cds-popover-drop-shadow:drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{position:absolute;z-index:6000;filter:var(--cds-popover-drop-shadow, none);inset:0;pointer-events:none}.cds--popover-content{--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;position:absolute;z-index:6000;display:none;border-radius:var(--cds-popover-border-radius,2px);background-color:var(--cds-popover-background-color,var(--cds-layer));color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));inline-size:-moz-max-content;inline-size:max-content;max-inline-size:23rem;pointer-events:auto}.cds--layout--size-sm .cds--popover-content,:host(cds-content-switcher[size=sm]) .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--popover-content,:host(cds-content-switcher[size=lg]) .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content ::after,.cds--popover-content ::before{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover-content::before{position:absolute;display:none;content:""}.cds--popover--open>.cds--popover>.cds--popover-content::before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{position:absolute;z-index:6000;display:none;background-color:var(--cds-popover-background-color,var(--cds-layer));will-change:transform}.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset,0)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(100% + var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--bottom-end>.cds--popover>.cds--popover-content::before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content::before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content::before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content::before,.cds--popover--bottom>.cds--popover>.cds--popover-content::before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset,0)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(-100% - var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--top-end>.cds--popover>.cds--popover-content::before,.cds--popover--top-left>.cds--popover>.cds--popover-content::before,.cds--popover--top-right>.cds--popover>.cds--popover-content::before,.cds--popover--top-start>.cds--popover>.cds--popover-content::before,.cds--popover--top>.cds--popover>.cds--popover-content::before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-1 * var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(-1 * var(--cds-popover-offset,0)))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(.5 * var(--cds-popover-offset,0) * -1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(.5 * var(--cds-popover-offset,0) + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right-bottom>.cds--popover>.cds--popover-content::before,.cds--popover--right-end>.cds--popover>.cds--popover-content::before,.cds--popover--right-start>.cds--popover>.cds--popover-content::before,.cds--popover--right-top>.cds--popover>.cds--popover-content::before,.cds--popover--right>.cds--popover>.cds--popover-content::before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset,0) - 100%),-50%)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0) + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(-.5 * var(--cds-popover-offset,0) - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(.5 * var(--cds-popover-offset,0) + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content::before,.cds--popover--left-end>.cds--popover>.cds--popover-content::before,.cds--popover--left-start>.cds--popover>.cds--popover-content::before,.cds--popover--left-top>.cds--popover>.cds--popover-content::before,.cds--popover--left>.cds--popover>.cds--popover-content::before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0) + 100%),-50%)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;inline-size:100%;position:relative;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;inline-size:2rem}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button ::after,.cds--popover--tab-tip__button ::before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus)::after{position:absolute;z-index:6001;background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);line-height:var(--cds-body-01-line-height,1.42857);letter-spacing:var(--cds-body-01-letter-spacing,.16px);padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem);color:var(--cds-text-inverse,#fff);max-inline-size:18rem}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px)}.cds--definition-term{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;inline-size:100%;border-radius:0;border-block-end:1px dotted var(--cds-border-strong);color:var(--cds-text-primary,#161616)}.cds--definition-term *,.cds--definition-term ::after,.cds--definition-term ::before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{outline:1px solid var(--cds-focus,#0f62fe);border-block-end-color:var(--cds-border-interactive,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);line-height:var(--cds-body-01-line-height,1.42857);letter-spacing:var(--cds-body-01-letter-spacing,.16px);padding:.5rem 1rem;max-inline-size:11rem}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-lg)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max));--temp-1lh:(\n    var(--cds-body-compact-01-line-height, 1.28572) * 1em\n  );--temp-expressive-1lh:(\n    var(--cds-body-compact-02-line-height, 1.375) * 1em\n  );--temp-padding-block-max:calc(\n    (var(--cds-layout-size-height-lg) - var(--temp-1lh)) / 2 -\n      0.0625rem\n  );box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);position:relative;display:inline-flex;flex-shrink:0;justify-content:space-between;border-radius:0;margin:0;cursor:pointer;inline-size:-moz-max-content;inline-size:max-content;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:0;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh)) / 2 - .0625rem,var(--temp-padding-block-max));padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) * 3 + 1rem - .0625rem);padding-inline-start:calc(var(--cds-layout-density-padding-inline-local) - .0625rem);text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn *,.cds--btn ::after,.cds--btn ::before{box-sizing:inherit}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{border-color:var(--cds-button-disabled,#c6c6c6);background:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{position:absolute;flex-shrink:0;block-size:1rem;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem}.cds--btn::-moz-focus-inner{padding:0;border:0}.cds--btn--primary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-primary,#0f62fe);color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-secondary,#393939);color:var(--cds-text-on-color,#fff)}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-tertiary,#0f62fe);background-color:transparent;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe);color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:active{border-color:transparent;background-color:var(--cds-button-tertiary-active,#002d9c);color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:0 0;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:0}.cds--btn--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-link-primary,#0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,rgba(141,141,141,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost:active{background-color:var(--cds-background-active,rgba(141,141,141,.5))}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,rgba(141,141,141,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{border-color:transparent;background:0 0;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:0}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{justify-content:center;padding:0;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);padding-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only>:first-child{margin-block-start:.0625rem;min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,rgba(141,141,141,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled]{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-danger-secondary,#da1e28);background-color:transparent;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{border-color:var(--cds-button-danger-active,#750e13);background-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:0 0;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:0}.cds--btn--danger--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-button-danger-secondary,#da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{border-color:transparent;background:0 0;color:var(--cds-text-disabled,rgba(22,22,22,.25));outline:0}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);line-height:var(--cds-body-compact-02-line-height,1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh)) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;inline-size:9.375rem}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:0}.cds--btn.cds--skeleton::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton::before{animation:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{border-color:transparent;background-color:transparent;box-shadow:none}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:ButtonText}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--content-switcher,:host(cds-content-switcher){--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-md)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max));display:flex;justify-content:space-evenly;block-size:var(--cds-layout-size-height-local);inline-size:100%}.cds--content-switcher-btn{font-family:\'IBM Plex Sans\',system-ui,-apple-system,BlinkMacSystemFont,\'.SFNSText-Regular\',sans-serif;outline:2px solid transparent;outline-offset:-2px;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);position:relative;display:inline-flex;overflow:hidden;border:none;margin:0;background-color:transparent;border-block-end:.0625rem solid var(--cds-border-inverse,#161616);border-block-start:.0625rem solid var(--cds-border-inverse,#161616);color:var(--cds-text-secondary,#525252);text-align:start;text-decoration:none;transition:all 150ms cubic-bezier(.2,0,.38,.9);white-space:nowrap}.cds--content-switcher-btn html{font-size:100%}.cds--content-switcher-btn body{font-weight:400;font-family:\'IBM Plex Sans\',system-ui,-apple-system,BlinkMacSystemFont,\'.SFNSText-Regular\',sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--content-switcher-btn code{font-family:\'IBM Plex Mono\',system-ui,-apple-system,BlinkMacSystemFont,\'.SFNSText-Regular\',monospace}.cds--content-switcher-btn strong{font-weight:600}.cds--content-switcher-btn::after{position:absolute;display:block;background-color:var(--cds-layer-selected-inverse,#161616);block-size:100%;content:"";inline-size:100%;inset-block-start:0;inset-inline-start:0;transform:scaleY(0);transform-origin:bottom;transition:all 150ms cubic-bezier(.2,0,.38,.9)}@media (prefers-reduced-motion:reduce){.cds--content-switcher-btn::after{transition:none}}.cds--content-switcher-btn:disabled::after{display:none}.cds--content-switcher-btn:focus{z-index:3;border-color:var(--cds-focus,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus,#0f62fe),inset 0 0 0 3px var(--cds-focus-inset,#fff)}.cds--content-switcher-btn:focus::after{clip-path:inset(3px 3px 3px 3px)}.cds--content-switcher-btn:hover{color:var(--cds-text-primary,#161616);cursor:pointer}.cds--content-switcher-btn:active,.cds--content-switcher-btn:hover{z-index:3;background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--content-switcher-btn:disabled{border-color:var(--cds-border-disabled,#c6c6c6);background-color:transparent;color:var(--cds-text-disabled,rgba(22,22,22,.25))}.cds--content-switcher-btn:disabled:hover{cursor:not-allowed}.cds--content-switcher-btn:disabled:first-child,.cds--content-switcher-btn:disabled:last-child{border-color:var(--cds-border-disabled,#c6c6c6)}.cds--content-switcher:not(.cds--content-switcher--icon-only) .cds--content-switcher-btn,:not(.cds--content-switcher--icon-only):host(cds-content-switcher) .cds--content-switcher-btn{align-items:center;padding:.5rem var(--cds-layout-density-padding-inline-local);inline-size:100%}.cds--content-switcher:not(.cds--content-switcher--icon-only) .cds--content-switcher-btn:first-child,:not(.cds--content-switcher--icon-only):host(cds-content-switcher) .cds--content-switcher-btn:first-child{border-end-start-radius:.25rem;border-inline-start:.0625rem solid var(--cds-border-inverse,#161616);border-start-start-radius:.25rem}.cds--content-switcher:not(.cds--content-switcher--icon-only) .cds--content-switcher-btn:first-child:disabled,:not(.cds--content-switcher--icon-only):host(cds-content-switcher) .cds--content-switcher-btn:first-child:disabled{border-color:var(--cds-border-disabled,#c6c6c6);color:var(--cds-text-disabled,rgba(22,22,22,.25))}.cds--content-switcher:not(.cds--content-switcher--icon-only) .cds--content-switcher-btn:last-child,:not(.cds--content-switcher--icon-only):host(cds-content-switcher) .cds--content-switcher-btn:last-child{border-end-end-radius:.25rem;border-inline-end:.0625rem solid var(--cds-border-inverse,#161616);border-start-end-radius:.25rem}.cds--content-switcher:not(.cds--content-switcher--icon-only) .cds--content-switcher-btn:last-child:disabled,:not(.cds--content-switcher--icon-only):host(cds-content-switcher) .cds--content-switcher-btn:last-child:disabled{border-color:var(--cds-border-disabled,#c6c6c6);color:var(--cds-text-disabled,rgba(22,22,22,.25))}.cds--content-switcher .cds--content-switcher-btn.cds--content-switcher--selected,.cds--content-switcher .cds--content-switcher-btn.cds--content-switcher--selected:first-child,.cds--content-switcher .cds--content-switcher-btn.cds--content-switcher--selected:last-child,:host(cds-content-switcher) .cds--content-switcher-btn.cds--content-switcher--selected{border:0}.cds--content-switcher-btn::before{position:absolute;z-index:2;display:block;background-color:var(--cds-border-subtle);block-size:1rem;content:"";inline-size:.0625rem;inset-inline-start:0}.cds--content-switcher:not(.cds--content-switcher--icon-only) .cds--content-switcher-btn:first-of-type::before,:not(.cds--content-switcher--icon-only):host(cds-content-switcher) .cds--content-switcher-btn:first-of-type::before{display:none}.cds--content-switcher--selected+.cds--content-switcher-btn::before,.cds--content-switcher--selected::before,.cds--content-switcher-btn:focus+.cds--content-switcher-btn::before,.cds--content-switcher-btn:focus::before,.cds--content-switcher-btn:hover+.cds--content-switcher-btn::before,.cds--content-switcher-btn:hover::before{background-color:transparent}.cds--content-switcher-btn:disabled::before,.cds--content-switcher-btn:disabled:hover+.cds--content-switcher-btn:disabled::before{background-color:var(--cds-border-disabled,#c6c6c6)}.cds--content-switcher-btn.cds--content-switcher--selected:disabled+.cds--content-switcher-btn::before,.cds--content-switcher-btn.cds--content-switcher--selected:disabled:hover+.cds--content-switcher-btn::before{background-color:transparent}.cds--content-switcher__icon{fill:var(--cds-icon-secondary,#525252);transition:fill 70ms cubic-bezier(.2,0,.38,.9)}.cds--content-switcher__icon+span{margin-inline-start:.5rem}.cds--content-switcher__label{z-index:1;overflow:hidden;max-inline-size:100%;text-overflow:ellipsis;white-space:nowrap}.cds--content-switcher-btn:focus .cds--content-switcher__icon,.cds--content-switcher-btn:hover .cds--content-switcher__icon{fill:var(--cds-icon-primary,#161616)}.cds--content-switcher-btn.cds--content-switcher--selected{z-index:3;background-color:var(--cds-layer-selected-inverse,#161616);color:var(--cds-text-inverse,#fff)}.cds--content-switcher-btn.cds--content-switcher--selected:disabled{background-color:var(--cds-layer-selected-disabled,#8d8d8d);color:var(--cds-text-disabled,rgba(22,22,22,.25))}.cds--content-switcher-btn.cds--content-switcher--selected::after{transform:scaleY(1)}.cds--content-switcher-btn.cds--content-switcher--selected .cds--content-switcher__icon{fill:var(--cds-icon-inverse,#fff)}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--content-switcher-btn:focus{color:Highlight;outline:1px solid Highlight}}.cds--content-switcher--icon-only,:host(cds-content-switcher[icon]){justify-content:flex-start}.cds--content-switcher--icon-only .cds--content-switcher-popover__wrapper:first-child .cds--content-switcher-btn,:host(cds-content-switcher[icon]) .cds--content-switcher-popover__wrapper:first-child .cds--content-switcher-btn{border-end-start-radius:.25rem;border-inline-start:.0625rem solid var(--cds-border-inverse,#161616);border-start-start-radius:.25rem}.cds--content-switcher--icon-only .cds--content-switcher-popover__wrapper:first-child .cds--content-switcher--selected[disabled],.cds--content-switcher--icon-only .cds--content-switcher-popover__wrapper:last-child .cds--content-switcher--selected[disabled],:host(cds-content-switcher[icon]) .cds--content-switcher-popover__wrapper:first-child .cds--content-switcher--selected[disabled],:host(cds-content-switcher[icon]) .cds--content-switcher-popover__wrapper:last-child .cds--content-switcher--selected[disabled]{border-color:var(--cds-layer-selected-disabled,#8d8d8d)}.cds--content-switcher--icon-only .cds--content-switcher-popover__wrapper:last-child .cds--content-switcher-btn,:host(cds-content-switcher[icon]) .cds--content-switcher-popover__wrapper:last-child .cds--content-switcher-btn{border-end-end-radius:.25rem;border-inline-end:.0625rem solid var(--cds-border-inverse,#161616);border-start-end-radius:.25rem}.cds--content-switcher--icon-only .cds--content-switcher-popover__wrapper:first-child .cds--content-switcher-btn.cds--content-switcher--selected,.cds--content-switcher--icon-only .cds--content-switcher-popover__wrapper:last-child .cds--content-switcher-btn.cds--content-switcher--selected,:host(cds-content-switcher[icon]) .cds--content-switcher-popover__wrapper:first-child .cds--content-switcher-btn.cds--content-switcher--selected,:host(cds-content-switcher[icon]) .cds--content-switcher-popover__wrapper:last-child .cds--content-switcher-btn.cds--content-switcher--selected{border-color:var(--cds-background,#fff)}.cds--content-switcher--lg .cds--content-switcher-btn{padding-inline-end:.875rem;padding-inline-start:.875rem}.cds--content-switcher--lg .cds--content-switcher-btn svg{block-size:20px;inline-size:20px}.cds--content-switcher--icon-only .cds--content-switcher-btn svg,:host(cds-content-switcher[icon]) .cds--content-switcher-btn svg{fill:var(--cds-icon-primary,#161616)}.cds--content-switcher--icon-only .cds--content-switcher-btn.cds--content-switcher--selected svg,:host(cds-content-switcher[icon]) .cds--content-switcher-btn.cds--content-switcher--selected svg{z-index:1;fill:var(--cds-icon-inverse,#fff)}.cds--content-switcher--icon-only.cds--content-switcher--sm .cds--btn--sm{block-size:2rem}.cds--content-switcher--icon-only .cds--content-switcher-popover__wrapper:first-of-type .cds--content-switcher-btn::before,:host(cds-content-switcher[icon]) .cds--content-switcher-popover__wrapper:first-of-type .cds--content-switcher-btn::before{display:none}.cds--content-switcher--selected::before,.cds--content-switcher-btn:focus::before,.cds--content-switcher-btn:hover::before,.cds--content-switcher-popover--selected+.cds--content-switcher-popover__wrapper .cds--content-switcher-btn::before,.cds--content-switcher-popover__wrapper:focus-within+.cds--content-switcher-popover__wrapper .cds--content-switcher-btn::before,.cds--content-switcher-popover__wrapper:not(.cds--content-switcher-popover--disabled):hover+.cds--content-switcher-popover__wrapper .cds--content-switcher-btn::before{background-color:transparent}.cds--content-switcher--icon-only .cds--content-switcher-btn[disabled],:host(cds-content-switcher[icon]) .cds--content-switcher-btn[disabled]{border-color:var(--cds-border-inverse,#161616)}.cds--content-switcher--icon-only .cds--content-switcher-btn[disabled] svg,:host(cds-content-switcher[icon]) .cds--content-switcher-btn[disabled] svg{fill:var(--cds-icon-disabled,rgba(22,22,22,.25))}.cds--content-switcher--icon-only .cds--content-switcher-btn[disabled]:not(.cds--content-switcher--selected):hover,.cds--content-switcher--icon-only .cds--content-switcher-popover--selected+.cds--content-switcher-popover--disabled .cds--content-switcher-btn[disabled]:hover::before,:host(cds-content-switcher[icon]) .cds--content-switcher-btn[disabled]:not(.cds--content-switcher--selected):hover,:host(cds-content-switcher[icon]) .cds--content-switcher-popover--selected+.cds--content-switcher-popover--disabled .cds--content-switcher-btn[disabled]:hover::before{background-color:transparent}.cds--content-switcher--icon-only .cds--content-switcher-btn[disabled]:hover::before,:host(cds-content-switcher[icon]) .cds--content-switcher-btn[disabled]:hover::before{background-color:var(--cds-border-subtle)}:host(cds-content-switcher){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:host(cds-content-switcher-item){inline-size:100%;outline:0}:host(cds-content-switcher-item) .cds--content-switcher-btn{align-items:center;padding:.5rem var(--cds-layout-density-padding-inline-local);block-size:100%;inline-size:100%}:host(cds-content-switcher-item) .cds--content-switcher-btn:first-child,:host(cds-content-switcher-item) .cds--content-switcher-btn:last-child{border-radius:0;border-inline-end:none;border-inline-start:none}:host(cds-content-switcher-item) .cds--content-switcher-btn::before{position:absolute;z-index:2;display:block;background-color:var(--cds-border-subtle);block-size:1rem;content:"";inline-size:.0625rem;inset-inline-start:0}:host(cds-content-switcher-item) .cds--content-switcher-btn.cds--content-switcher--selected::before,:host(cds-content-switcher-item) .cds--content-switcher-btn:focus::before,:host(cds-content-switcher-item) .cds--content-switcher-btn:hover::before{background-color:transparent}:host(cds-content-switcher-item) .cds--content-switcher-btn:disabled{border-block-end-color:var(--cds-border-inverse,#161616);border-block-start-color:var(--cds-border-inverse,#161616)}:host(cds-content-switcher-item)[icon]{inline-size:initial}:host(cds-content-switcher-item)[icon] .cds--content-switcher-btn{block-size:2.5rem;padding-inline:.6875rem}:host(cds-content-switcher-item)[icon] .cds--content-switcher__label{display:flex;align-items:center}:host(cds-content-switcher-item[hide-divider]) .cds--content-switcher-btn::before{background-color:transparent}:host(cds-content-switcher-item:first-of-type) .cds--content-switcher-btn{border-end-start-radius:.25rem;border-inline-start:.0625rem solid var(--cds-border-inverse,#161616);border-start-start-radius:.25rem}:host(cds-content-switcher-item:first-of-type) .cds--content-switcher-btn::before{content:none}:host(cds-content-switcher-item:last-of-type) .cds--content-switcher-btn{border-end-end-radius:.25rem;border-inline-end:.0625rem solid var(--cds-border-inverse,#161616);border-start-end-radius:.25rem}',
]);
let w,
  I = (e) => e;
let S,
  C,
  $ = e(
    [y(`${p}-content-switcher`)],
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
            key: '_handleHover',
            value: function ({ target: e, type: t }) {
              const { selectorItem: o } = this.constructor,
                s = this.querySelectorAll(o),
                c = 'mouseover' !== t ? -1 : h(s, e.closest(o)),
                n = c < 0 ? c : c + 1;
              u(this.querySelectorAll(o), (e, t) => {
                e.hideDivider = t === n;
              });
              const { selectorItemSelected: d } = this.constructor,
                r = this.querySelector(d);
              this._getNextItem(r, 1).hideDivider = !0;
            },
          },
          {
            kind: 'method',
            key: '_getCurrentItem',
            value: function (e) {
              var t;
              const o = this.querySelectorAll(
                  this.constructor.selectorItemEnabled
                ),
                { selectorItem: s } = this.constructor,
                c = e.closest(s);
              return null !== (t = o[h(o, c)]) && void 0 !== t ? t : null;
            },
          },
          {
            kind: 'method',
            key: '_getNextItem',
            value: function (e, t) {
              const o = this.querySelectorAll(
                  this.constructor.selectorItemEnabled
                ),
                s = h(o, e),
                c =
                  ((n = s + t), (d = o.length), n < 0 ? d - 1 : n >= d ? 0 : n);
              var n, d;
              return c === s ? null : o[c];
            },
          },
          {
            kind: 'method',
            key: '_handleClick',
            value: function ({ target: e }) {
              const t = this._getCurrentItem(e);
              this._handleUserInitiatedSelectItem(t);
            },
          },
          {
            kind: 'method',
            key: '_handleKeydown',
            value: function ({ key: e }) {
              e in k && this._navigate(k[e]);
            },
          },
          {
            kind: 'method',
            key: '_handleUserInitiatedSelectItem',
            value: function (e) {
              if (!e.disabled && e.value !== this.value) {
                const t = { bubbles: !0, composed: !0, detail: { item: e } },
                  o = this.constructor,
                  s = new CustomEvent(
                    o.eventBeforeSelect,
                    m(m({}, t), {}, { cancelable: !0 })
                  );
                if (this.dispatchEvent(s)) {
                  this._selectionDidChange(e);
                  const s = new CustomEvent(o.eventSelect, t);
                  this.dispatchEvent(s);
                }
              }
            },
          },
          {
            kind: 'method',
            key: '_navigate',
            value: function (e) {
              const { selectorItemSelected: t } = this.constructor,
                o = this._getNextItem(this.querySelector(t), e);
              o &&
                (this._handleUserInitiatedSelectItem(o), this.requestUpdate());
            },
          },
          {
            kind: 'method',
            key: '_selectionDidChange',
            value: function (e) {
              (this.value = e.value),
                u(
                  this.querySelectorAll(this.constructor.selectorItemSelected),
                  (e) => {
                    e.selected = !1;
                  }
                ),
                (e.selected = !0),
                Promise.resolve().then(() => {
                  e.focus();
                  const { selectorItem: t } = this.constructor,
                    o = this.querySelectorAll(t),
                    s = h(o, e.closest(t)),
                    c = s < 0 ? s : s + 1;
                  u(this.querySelectorAll(t), (e, t) => {
                    e.hideDivider = t === c;
                  });
                });
            },
          },
          {
            kind: 'field',
            decorators: [d({ reflect: !0 })],
            key: 'value',
            value: () => '',
          },
          {
            kind: 'field',
            decorators: [d({ reflect: !0 })],
            key: 'size',
            value: () => x.REGULAR,
          },
          {
            kind: 'field',
            decorators: [d({ type: Boolean, reflect: !0, attribute: 'icon' })],
            key: 'iconOnly',
            value: () => !1,
          },
          {
            kind: 'method',
            key: 'shouldUpdate',
            value: function (e) {
              if (e.has('value')) {
                const { selectorItem: e } = this.constructor;
                u(this.querySelectorAll(e), (e) => {
                  e.selected = e.value === this.value;
                });
              }
              const { selectorIconItem: t } = this.constructor;
              return this.querySelector(t) && (this.iconOnly = !0), !0;
            },
          },
          {
            kind: 'method',
            key: '_handleSlotchange',
            value: function () {
              const { selectorItemSelected: e } = this.constructor,
                t = this.querySelector(e);
              this._getNextItem(t, 1).hideDivider = !0;
            },
          },
          {
            kind: 'get',
            static: !0,
            key: 'selectorItem',
            value: function () {
              return `${p}-content-switcher-item`;
            },
          },
          {
            kind: 'get',
            static: !0,
            key: 'selectorIconItem',
            value: function () {
              return `${p}-content-switcher-item[icon]`;
            },
          },
          {
            kind: 'get',
            static: !0,
            key: 'selectorItemEnabled',
            value: function () {
              return `${p}-content-switcher-item:not([disabled])`;
            },
          },
          {
            kind: 'get',
            static: !0,
            key: 'selectorItemSelected',
            value: function () {
              return `${p}-content-switcher-item[selected]`;
            },
          },
          {
            kind: 'get',
            static: !0,
            key: 'eventBeforeSelect',
            value: function () {
              return `${p}-content-switcher-beingselected`;
            },
          },
          {
            kind: 'get',
            static: !0,
            key: 'eventSelect',
            value: function () {
              return `${p}-content-switcher-selected`;
            },
          },
          {
            kind: 'method',
            key: 'render',
            value: function () {
              const {
                _handleHover: e,
                _handleKeydown: t,
                _handleSlotchange: o,
              } = this;
              return r(
                w ||
                  (w = I`
      <slot
        @click="${0}"
        @keydown="${0}"
        @mouseover="${0}"
        @mouseout="${0}"
        @slotchange=${0}></slot>
    `),
                this._handleClick,
                t,
                e,
                e,
                o
              );
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => z },
        ],
      };
    },
    n
  );
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ !(function (e) {
  (e.NONE = 'none'),
    (e.NAVIGATING = 'navigating'),
    (e.HOME = 'home'),
    (e.END = 'end');
})(S || (S = {})),
  (function (e) {
    (e.REGULAR = ''), (e.CONTAINER = 'container'), (e.CONTAINED = 'contained');
  })(C || (C = {}));
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T = c([
  '@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}100%{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}100%{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}100%{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed, 0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, 0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}:root{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02, #ffffff);--cds-layer-active:var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02, #a8a8a8);--cds-field:var(--cds-field-02, #ffffff);--cds-field-hover:var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong:var(--cds-border-strong-02, #8d8d8d);--cds-border-tile:var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03, #f4f4f4);--cds-layer-active:var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03, #a8a8a8);--cds-field:var(--cds-field-03, #f4f4f4);--cds-field-hover:var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong:var(--cds-border-strong-03, #8d8d8d);--cds-border-tile:var(--cds-border-tile-03, #c6c6c6)}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse, #393939);--cds-popover-text-color:var(--cds-text-inverse, #ffffff)}.cds--popover--drop-shadow .cds--popover{--cds-popover-drop-shadow:drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{position:absolute;z-index:6000;filter:var(--cds-popover-drop-shadow, none);inset:0;pointer-events:none}.cds--popover-content{--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;position:absolute;z-index:6000;display:none;border-radius:var(--cds-popover-border-radius,2px);background-color:var(--cds-popover-background-color,var(--cds-layer));color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));inline-size:-moz-max-content;inline-size:max-content;max-inline-size:23rem;pointer-events:auto}.cds--layout--size-sm .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content ::after,.cds--popover-content ::before{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover-content::before{position:absolute;display:none;content:""}.cds--popover--open>.cds--popover>.cds--popover-content::before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{position:absolute;z-index:6000;display:none;background-color:var(--cds-popover-background-color,var(--cds-layer));will-change:transform}.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset,0)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(100% + var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--bottom-end>.cds--popover>.cds--popover-content::before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content::before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content::before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content::before,.cds--popover--bottom>.cds--popover>.cds--popover-content::before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset,0)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:0;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(-100% - var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:initial}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--top-end>.cds--popover>.cds--popover-content::before,.cds--popover--top-left>.cds--popover>.cds--popover-content::before,.cds--popover--top-right>.cds--popover>.cds--popover-content::before,.cds--popover--top-start>.cds--popover>.cds--popover-content::before,.cds--popover--top>.cds--popover>.cds--popover-content::before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-1 * var(--cds-popover-offset,0)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(-1 * var(--cds-popover-offset,0)))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(.5 * var(--cds-popover-offset,0) * -1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(.5 * var(--cds-popover-offset,0) + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right-bottom>.cds--popover>.cds--popover-content::before,.cds--popover--right-end>.cds--popover>.cds--popover-content::before,.cds--popover--right-start>.cds--popover>.cds--popover-content::before,.cds--popover--right-top>.cds--popover>.cds--popover-content::before,.cds--popover--right>.cds--popover>.cds--popover-content::before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset,0) - 100%),-50%)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:initial}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0) + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(-.5 * var(--cds-popover-offset,0) - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0)),calc(.5 * var(--cds-popover-offset,0) + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content::before,.cds--popover--left-end>.cds--popover>.cds--popover-content::before,.cds--popover--left-start>.cds--popover>.cds--popover-content::before,.cds--popover--left-top>.cds--popover>.cds--popover-content::before,.cds--popover--left>.cds--popover>.cds--popover-content::before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(-1 * var(--cds-popover-offset,0) + 100%),-50%)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:initial;inset-inline-start:100%}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;inline-size:100%;position:relative;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;inline-size:2rem}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button ::after,.cds--popover--tab-tip__button ::before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus)::after{position:absolute;z-index:6001;background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);line-height:var(--cds-body-01-line-height,1.42857);letter-spacing:var(--cds-body-01-letter-spacing,.16px);padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem);color:var(--cds-text-inverse,#fff);max-inline-size:18rem}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px)}.cds--definition-term{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;inline-size:100%;border-radius:0;border-block-end:1px dotted var(--cds-border-strong);color:var(--cds-text-primary,#161616)}.cds--definition-term *,.cds--definition-term ::after,.cds--definition-term ::before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{outline:1px solid var(--cds-focus,#0f62fe);border-block-end-color:var(--cds-border-interactive,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);line-height:var(--cds-body-01-line-height,1.42857);letter-spacing:var(--cds-body-01-letter-spacing,.16px);padding:.5rem 1rem;max-inline-size:11rem}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-lg)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max));--temp-1lh:(\n    var(--cds-body-compact-01-line-height, 1.28572) * 1em\n  );--temp-expressive-1lh:(\n    var(--cds-body-compact-02-line-height, 1.375) * 1em\n  );--temp-padding-block-max:calc(\n    (var(--cds-layout-size-height-lg) - var(--temp-1lh)) / 2 -\n      0.0625rem\n  );box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);position:relative;display:inline-flex;flex-shrink:0;justify-content:space-between;border-radius:0;margin:0;cursor:pointer;inline-size:-moz-max-content;inline-size:max-content;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:0;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh)) / 2 - .0625rem,var(--temp-padding-block-max));padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) * 3 + 1rem - .0625rem);padding-inline-start:calc(var(--cds-layout-density-padding-inline-local) - .0625rem);text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn *,.cds--btn ::after,.cds--btn ::before{box-sizing:inherit}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{border-color:var(--cds-button-disabled,#c6c6c6);background:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{position:absolute;flex-shrink:0;block-size:1rem;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem}.cds--btn::-moz-focus-inner{padding:0;border:0}.cds--btn--primary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-primary,#0f62fe);color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-secondary,#393939);color:var(--cds-text-on-color,#fff)}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-tertiary,#0f62fe);background-color:transparent;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe);color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:active{border-color:transparent;background-color:var(--cds-button-tertiary-active,#002d9c);color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:0 0;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:0}.cds--btn--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-link-primary,#0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,rgba(141,141,141,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost:active{background-color:var(--cds-background-active,rgba(141,141,141,.5))}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,rgba(141,141,141,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{border-color:transparent;background:0 0;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:0}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{justify-content:center;padding:0;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);padding-block-start:min((var(--cds-layout-size-height-local) - 1rem) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only>:first-child{margin-block-start:.0625rem;min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,rgba(141,141,141,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled]{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{border-width:1px;border-style:solid;border-color:transparent;background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{border-width:1px;border-style:solid;border-color:var(--cds-button-danger-secondary,#da1e28);background-color:transparent;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{border-color:var(--cds-button-danger-active,#750e13);background-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:0 0;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:0}.cds--btn--danger--ghost{border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;color:var(--cds-button-danger-secondary,#da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{position:static;margin-inline-start:.5rem}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{border-color:transparent;background:0 0;color:var(--cds-text-disabled,rgba(22,22,22,.25));outline:0}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);line-height:var(--cds-body-compact-02-line-height,1.375);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh)) / 2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;inline-size:9.375rem}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:0}.cds--btn.cds--skeleton::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton::before{animation:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{border-color:transparent;background-color:transparent;box-shadow:none}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:ButtonText}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--tabs.cds--tabs--contained.cds--tabs--full-width .cds--tab--list{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));inline-size:100%}.cds--tabs.cds--tabs--contained.cds--tabs--full-width .cds--tab--list .cds--tabs__nav-link .cds--tabs__nav-item-label,.cds--tabs.cds--tabs--contained.cds--tabs--full-width .cds--tab--list .cds--tabs__nav-link .cds--tabs__nav-item-secondary-label{overflow:hidden;text-overflow:ellipsis}.cds--tabs.cds--tabs--contained.cds--tabs--full-width .cds--tab--list .cds--tabs__nav-link .cds--tabs__nav-item--icon{margin-inline-start:auto}.cds--tabs.cds--tabs--vertical .cds--tabs__nav-link .cds--tabs__nav-item-label{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis;white-space:normal}.cds--tab-content,.cds--tabs,:host(cds-tabs),:host(cds-tabs-skeleton){--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max))}.cds--tabs.cds--tabs--contained.cds--tabs--tall,.cds--tabs.cds--tabs--tall{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-lg)), var(--cds-layout-size-height, var(--cds-layout-size-height-xl)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-xl)))}.cds--tabs,:host(cds-tabs),:host(cds-tabs-skeleton){font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-md)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-lg)));position:relative;display:flex;block-size:auto;color:var(--cds-text-primary,#161616);inline-size:100%;max-block-size:var(--cds-layout-size-height-xl);min-block-size:var(--cds-layout-size-height-local);overflow-x:hidden}.cds--tabs html,:host(cds-tabs) html,:host(cds-tabs-skeleton) html{font-size:100%}.cds--tabs body,:host(cds-tabs) body,:host(cds-tabs-skeleton) body{font-weight:400;font-family:\'IBM Plex Sans\',system-ui,-apple-system,BlinkMacSystemFont,\'.SFNSText-Regular\',sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--tabs code,:host(cds-tabs) code,:host(cds-tabs-skeleton) code{font-family:\'IBM Plex Mono\',system-ui,-apple-system,BlinkMacSystemFont,\'.SFNSText-Regular\',monospace}.cds--tabs strong,:host(cds-tabs) strong,:host(cds-tabs-skeleton) strong{font-weight:600}.cds--tabs.cds--tabs--contained{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-lg)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-xl)))}.cds--tabs .cds--tab--list,:host(cds-tabs) .cds--tab--list,:host(cds-tabs-skeleton) .cds--tab--list{display:flex;inline-size:auto;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none;will-change:scroll-position}.cds--tabs .cds--tab--list::-webkit-scrollbar,:host(cds-tabs) .cds--tab--list::-webkit-scrollbar,:host(cds-tabs-skeleton) .cds--tab--list::-webkit-scrollbar{display:none}.cds--tabs.cds--tabs--vertical{background:var(--cds-layer);box-shadow:inset -1px 0 var(--cds-border-subtle);grid-column:span 2;max-block-size:none}@media (min-width:66rem){.cds--tabs.cds--tabs--vertical{grid-column:span 4}}.cds--tabs.cds--tabs--vertical .cds--tab--list{flex-direction:column;inline-size:100%;overflow-x:visible;overflow-y:auto}.cds--tabs.cds--tabs--vertical .cds--tab--list-gradient_bottom{position:absolute;background:linear-gradient(to bottom,transparent,var(--cds-layer));block-size:4rem;inset-block-end:0;inset-inline:0;pointer-events:none}.cds--tabs.cds--tabs--vertical .cds--tab--list-gradient_top{position:absolute;background:linear-gradient(to top,transparent,var(--cds-layer));block-size:4rem;inset-block-start:0;inset-inline:0;pointer-events:none}.cds--tabs .cds--tabs__nav,:host(cds-tabs) .cds--tabs__nav,:host(cds-tabs-skeleton) .cds--tabs__nav{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:flex}.cds--tabs .cds--tabs__nav *,.cds--tabs .cds--tabs__nav ::after,.cds--tabs .cds--tabs__nav ::before,:host(cds-tabs) .cds--tabs__nav *,:host(cds-tabs) .cds--tabs__nav ::after,:host(cds-tabs) .cds--tabs__nav ::before,:host(cds-tabs-skeleton) .cds--tabs__nav *,:host(cds-tabs-skeleton) .cds--tabs__nav ::after,:host(cds-tabs-skeleton) .cds--tabs__nav ::before{box-sizing:inherit}.cds--tabs .cds--tab--overflow-nav-button,:host(cds-tabs) .cds--tab--overflow-nav-button,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;inline-size:100%;display:flex;flex-shrink:0;align-items:center;justify-content:center;background-color:var(--cds-background,#fff);inline-size:2.5rem}.cds--tabs .cds--tab--overflow-nav-button *,.cds--tabs .cds--tab--overflow-nav-button ::after,.cds--tabs .cds--tab--overflow-nav-button ::before,:host(cds-tabs) .cds--tab--overflow-nav-button *,:host(cds-tabs) .cds--tab--overflow-nav-button ::after,:host(cds-tabs) .cds--tab--overflow-nav-button ::before,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button *,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button ::after,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button ::before{box-sizing:inherit}.cds--tabs .cds--tab--overflow-nav-button::-moz-focus-inner,:host(cds-tabs) .cds--tab--overflow-nav-button::-moz-focus-inner,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button::-moz-focus-inner{border:0}.cds--tabs .cds--tab--overflow-nav-button:focus,:host(cds-tabs) .cds--tab--overflow-nav-button:focus,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tabs .cds--tab--overflow-nav-button:focus,:host(cds-tabs) .cds--tab--overflow-nav-button:focus,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button:focus{outline-style:dotted}}.cds--tabs .cds--tab--overflow-nav-button--hidden,:host(cds-tabs) .cds--tab--overflow-nav-button--hidden,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button--hidden{display:none}.cds--tabs.cds--tabs--contained .cds--tab--overflow-nav-button{margin:0;background-color:var(--cds-layer-accent);inline-size:3rem}.cds--tabs .cds--tab--overflow-nav-button svg,:host(cds-tabs) .cds--tab--overflow-nav-button svg,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button svg{z-index:2;fill:var(--cds-icon-primary,#161616)}.cds--tabs .cds--tab--overflow-nav-button--next,:host(cds-tabs) .cds--tab--overflow-nav-button--next,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button--next{position:absolute;inset-block-end:0;inset-block-start:0;inset-inline-end:0}.cds--tabs .cds--tab--overflow-nav-button--next::before,:host(cds-tabs) .cds--tab--overflow-nav-button--next::before,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button--next::before{position:absolute;z-index:1;background:linear-gradient(to right,rgba(255,255,255,0),var(--cds-background,#fff));block-size:100%;content:"";inline-size:.5rem;inset-inline-start:-.5rem}.cds--tabs.cds--tabs--contained .cds--tab--overflow-nav-button--next::before{background-image:linear-gradient(to right,rgba(255,255,255,0),var(--cds-layer-accent))}.cds--tabs .cds--tab--overflow-nav-button--previous,:host(cds-tabs) .cds--tab--overflow-nav-button--previous,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button--previous{position:absolute;inset-block-end:0;inset-block-start:0;inset-inline-start:0}.cds--tabs .cds--tab--overflow-nav-button--previous::before,:host(cds-tabs) .cds--tab--overflow-nav-button--previous::before,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button--previous::before{position:absolute;z-index:1;background:var(--cds-background,#fff);block-size:100%;content:"";inline-size:2.5rem;inset-inline-end:0}.cds--tabs.cds--tabs--contained .cds--tab--overflow-nav-button--previous::before{background:linear-gradient(to left,rgba(255,255,255,0),var(--cds-layer-accent))}.cds--tabs .cds--tabs--light .cds--tabs__overflow-indicator--left,:host(cds-tabs) .cds--tabs--light .cds--tabs__overflow-indicator--left,:host(cds-tabs-skeleton) .cds--tabs--light .cds--tabs__overflow-indicator--left{background-image:linear-gradient(to left,rgba(255,255,255,0),var(--cds-layer))}.cds--tabs .cds--tabs--light .cds--tabs__overflow-indicator--right,:host(cds-tabs) .cds--tabs--light .cds--tabs__overflow-indicator--right,:host(cds-tabs-skeleton) .cds--tabs--light .cds--tabs__overflow-indicator--right{background-image:linear-gradient(to right,rgba(255,255,255,0),var(--cds-layer))}.cds--tabs.cds--tabs--contained .cds--tabs__overflow-indicator--left{background-image:linear-gradient(to left,rgba(255,255,255,0),var(--cds-layer-accent))}.cds--tabs.cds--tabs--contained .cds--tabs__overflow-indicator--right{background-image:linear-gradient(to right,rgba(255,255,255,0),var(--cds-layer-accent))}@media not all and (resolution >= 0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){.cds--tabs .cds--tabs__overflow-indicator--left,:host(cds-tabs) .cds--tabs__overflow-indicator--left,:host(cds-tabs-skeleton) .cds--tabs__overflow-indicator--left{background-image:linear-gradient(to left,rgba(var(--cds-background,#fff),0),var(--cds-background,#fff))}.cds--tabs .cds--tabs__overflow-indicator--right,:host(cds-tabs) .cds--tabs__overflow-indicator--right,:host(cds-tabs-skeleton) .cds--tabs__overflow-indicator--right{background-image:linear-gradient(to right,rgba(var(--cds-background,#fff),0),var(--cds-background,#fff))}.cds--tabs.cds--tabs--contained .cds--tabs__overflow-indicator--left{background-image:linear-gradient(to left,rgba(var(--cds-layer-accent),0),var(--cds-layer-accent))}.cds--tabs.cds--tabs--contained .cds--tabs__overflow-indicator--right{background-image:linear-gradient(to right,rgba(var(--cds-layer-accent),0),var(--cds-layer-accent))}}}.cds--tabs .cds--tabs__nav-item-label-wrapper,:host(cds-tabs) .cds--tabs__nav-item-label-wrapper,:host(cds-tabs-skeleton) .cds--tabs__nav-item-label-wrapper{display:flex}.cds--tabs:not(.cds--tabs--contained) .cds--tabs__nav-item-label-wrapper,:not(.cds--tabs--contained):host(cds-tabs) .cds--tabs__nav-item-label-wrapper,:not(.cds--tabs--contained):host(cds-tabs-skeleton) .cds--tabs__nav-item-label-wrapper{position:relative;inset-block-start:.0625rem}.cds--tabs .cds--tabs__nav-item,:host(cds-tabs) .cds--tabs__nav-item,:host(cds-tabs-skeleton) .cds--tabs__nav-item{display:flex;flex:1 0 auto;padding:0;cursor:pointer;transition:background-color 70ms cubic-bezier(.2,0,.38,.9)}.cds--tabs .cds--tabs__nav-item html,:host(cds-tabs) .cds--tabs__nav-item html,:host(cds-tabs-skeleton) .cds--tabs__nav-item html{font-size:100%}.cds--tabs .cds--tabs__nav-item body,:host(cds-tabs) .cds--tabs__nav-item body,:host(cds-tabs-skeleton) .cds--tabs__nav-item body{font-weight:400;font-family:\'IBM Plex Sans\',system-ui,-apple-system,BlinkMacSystemFont,\'.SFNSText-Regular\',sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--tabs .cds--tabs__nav-item code,:host(cds-tabs) .cds--tabs__nav-item code,:host(cds-tabs-skeleton) .cds--tabs__nav-item code{font-family:\'IBM Plex Mono\',system-ui,-apple-system,BlinkMacSystemFont,\'.SFNSText-Regular\',monospace}.cds--tabs .cds--tabs__nav-item strong,:host(cds-tabs) .cds--tabs__nav-item strong,:host(cds-tabs-skeleton) .cds--tabs__nav-item strong{font-weight:600}.cds--tabs .cds--tabs__nav-item+.cds--tabs__nav-item,:host(cds-tabs) .cds--tabs__nav-item+.cds--tabs__nav-item,:host(cds-tabs-skeleton) .cds--tabs__nav-item+.cds--tabs__nav-item{margin-inline-start:.0625rem}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item{background-color:var(--cds-layer-accent);box-shadow:-.0625rem 0 0 0 var(--cds-border-strong);margin-inline-start:0}.cds--tabs.cds--tabs--vertical .cds--tabs__nav-item{flex:none;background-color:var(--cds-layer-01,#f4f4f4);block-size:4rem;border-block-end:1px solid var(--cds-border-subtle);border-inline-end:1px solid var(--cds-border-subtle);box-shadow:inset 3px 0 0 0 var(--cds-border-subtle);inline-size:100%;margin-inline-start:0}.cds--tabs.cds--tabs--contained:not(.cds--tabs--vertical) .cds--tabs__nav-item--selected+div+.cds--tabs__nav-item{box-shadow:-.0625rem 0 0 0 transparent}.cds--tabs .cds--tabs__nav-item .cds--tabs__nav-link,:host(cds-tabs) .cds--tabs__nav-item .cds--tabs__nav-link,:host(cds-tabs-skeleton) .cds--tabs__nav-item .cds--tabs__nav-link{transition:color 70ms cubic-bezier(.2,0,.38,.9),border-bottom-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--tabs.cds--tabs--dismissable .cds--tabs__nav-link{padding-inline-end:2.5rem}.cds--tabs.cds--tabs--dismissable.cds--tabs--contained .cds--tabs__nav-link{padding-inline-end:calc(3rem - 1px)}.cds--tabs .cds--tabs__nav-item--close,:host(cds-tabs) .cds--tabs__nav-item--close,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close{position:relative;display:flex;align-items:center;inset-inline-start:calc(-.75rem - 1px);margin-inline-start:calc(-1.5rem + 1px)}.cds--tabs:not(.cds--tabs--contained) .cds--tabs__nav-item--close--hidden,:not(.cds--tabs--contained):host(cds-tabs) .cds--tabs__nav-item--close--hidden,:not(.cds--tabs--contained):host(cds-tabs-skeleton) .cds--tabs__nav-item--close--hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap;position:static;inline-size:.1875rem}.cds--tabs.cds--tabs--contained.cds--tabs--full-width .cds--tabs__nav-item--close--hidden{display:none}.cds--tabs .cds--tabs__nav-item--close-icon,:host(cds-tabs) .cds--tabs__nav-item--close-icon,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;inline-size:100%;block-size:1.5rem;inline-size:1.5rem;padding-block:.25rem;padding-inline:.25rem;pointer-events:auto}.cds--tabs .cds--tabs__nav-item--close-icon *,.cds--tabs .cds--tabs__nav-item--close-icon ::after,.cds--tabs .cds--tabs__nav-item--close-icon ::before,:host(cds-tabs) .cds--tabs__nav-item--close-icon *,:host(cds-tabs) .cds--tabs__nav-item--close-icon ::after,:host(cds-tabs) .cds--tabs__nav-item--close-icon ::before,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon *,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon ::after,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon ::before{box-sizing:inherit}.cds--tabs .cds--tabs__nav-item--close-icon::-moz-focus-inner,:host(cds-tabs) .cds--tabs__nav-item--close-icon::-moz-focus-inner,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon::-moz-focus-inner{border:0}.cds--tabs .cds--tabs__nav-item--close-icon svg,:host(cds-tabs) .cds--tabs__nav-item--close-icon svg,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon svg{block-size:1rem;fill:var(--cds-text-secondary,#525252);inline-size:1rem}.cds--tabs .cds--tabs__nav-item--close-icon svg:hover,:host(cds-tabs) .cds--tabs__nav-item--close-icon svg:hover,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon svg:hover{fill:var(--cds-text-primary,#161616)}.cds--tabs .cds--tabs__nav-item--close-icon:hover,:host(cds-tabs) .cds--tabs__nav-item--close-icon:hover,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon:hover{background-color:var(--cds-layer-hover)}.cds--tabs .cds--tabs__nav-item--close-icon:active,.cds--tabs .cds--tabs__nav-item--close-icon:focus,:host(cds-tabs) .cds--tabs__nav-item--close-icon:active,:host(cds-tabs) .cds--tabs__nav-item--close-icon:focus,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon:active,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tabs .cds--tabs__nav-item--close-icon:active,.cds--tabs .cds--tabs__nav-item--close-icon:focus,:host(cds-tabs) .cds--tabs__nav-item--close-icon:active,:host(cds-tabs) .cds--tabs__nav-item--close-icon:focus,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon:active,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon:focus{outline-style:dotted}}.cds--tabs .cds--tabs__nav-item:hover+.cds--tabs__nav-item--close .cds--tabs__nav-item--close-icon svg,:host(cds-tabs) .cds--tabs__nav-item:hover+.cds--tabs__nav-item--close .cds--tabs__nav-item--close-icon svg,:host(cds-tabs-skeleton) .cds--tabs__nav-item:hover+.cds--tabs__nav-item--close .cds--tabs__nav-item--close-icon svg{fill:var(--cds-text-primary,#161616)}.cds--tabs .cds--tabs__nav-item--close-icon--selected svg,:host(cds-tabs) .cds--tabs__nav-item--close-icon--selected svg,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon--selected svg{fill:var(--cds-text-primary,#161616)}.cds--tabs .cds--tabs__nav-item--close-icon--disabled,.cds--tabs .cds--tabs__nav-item--close-icon--disabled:hover,.cds--tabs .cds--tabs__nav-item:hover+.cds--tabs__nav-item--close .cds--tabs__nav-item--close-icon--disabled,:host(cds-tabs) .cds--tabs__nav-item--close-icon--disabled,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon--disabled{background-color:inherit;cursor:not-allowed}.cds--tabs .cds--tabs__nav-item--close-icon--disabled svg,.cds--tabs .cds--tabs__nav-item--close-icon--disabled:hover svg,.cds--tabs .cds--tabs__nav-item:hover+.cds--tabs__nav-item--close .cds--tabs__nav-item--close-icon--disabled svg,:host(cds-tabs) .cds--tabs__nav-item--close-icon--disabled svg,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon--disabled svg{fill:var(--cds-text-disabled,rgba(22,22,22,.25))}.cds--tabs .cds--tabs__nav-item--close-icon--disabled:active,.cds--tabs .cds--tabs__nav-item--close-icon--disabled:focus,.cds--tabs .cds--tabs__nav-item--close-icon--disabled:hover:active,.cds--tabs .cds--tabs__nav-item--close-icon--disabled:hover:focus,.cds--tabs .cds--tabs__nav-item:hover+.cds--tabs__nav-item--close .cds--tabs__nav-item--close-icon--disabled:active,.cds--tabs .cds--tabs__nav-item:hover+.cds--tabs__nav-item--close .cds--tabs__nav-item--close-icon--disabled:focus,:host(cds-tabs) .cds--tabs__nav-item--close-icon--disabled:active,:host(cds-tabs) .cds--tabs__nav-item--close-icon--disabled:focus,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon--disabled:active,:host(cds-tabs-skeleton) .cds--tabs__nav-item--close-icon--disabled:focus{outline:2px solid transparent;outline-offset:-2px}.cds--tabs .cds--tabs__nav-item--icon,:host(cds-tabs) .cds--tabs__nav-item--icon,:host(cds-tabs-skeleton) .cds--tabs__nav-item--icon{display:flex;align-items:center;padding-inline-start:.5rem}.cds--tabs .cds--tabs__nav-item--icon-left,:host(cds-tabs) .cds--tabs__nav-item--icon-left,:host(cds-tabs-skeleton) .cds--tabs__nav-item--icon-left{display:flex;align-items:center;margin-block-start:-2px;padding-inline-end:.5rem}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--icon{padding-inline-start:var(--cds-layout-density-padding-inline-local)}.cds--tabs .cds--tabs__nav-link,:host(cds-tabs) .cds--tabs__nav-link,:host(cds-tabs-skeleton) .cds--tabs__nav-link{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;outline:2px solid transparent;outline-offset:-2px;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);overflow:hidden;border-block-end:2px solid var(--cds-border-subtle);color:var(--cds-text-secondary,#525252);padding-inline:var(--cds-layout-density-padding-inline-local);text-align:start;text-decoration:none;text-overflow:ellipsis;transition:border 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);white-space:nowrap}.cds--tabs .cds--tabs__nav-link *,.cds--tabs .cds--tabs__nav-link ::after,.cds--tabs .cds--tabs__nav-link ::before,:host(cds-tabs) .cds--tabs__nav-link *,:host(cds-tabs) .cds--tabs__nav-link ::after,:host(cds-tabs) .cds--tabs__nav-link ::before,:host(cds-tabs-skeleton) .cds--tabs__nav-link *,:host(cds-tabs-skeleton) .cds--tabs__nav-link ::after,:host(cds-tabs-skeleton) .cds--tabs__nav-link ::before{box-sizing:inherit}.cds--tabs .cds--tabs__nav-link::-moz-focus-inner,:host(cds-tabs) .cds--tabs__nav-link::-moz-focus-inner,:host(cds-tabs-skeleton) .cds--tabs__nav-link::-moz-focus-inner{border:0}.cds--tabs .cds--tabs__nav-link:active,.cds--tabs .cds--tabs__nav-link:focus,:host(cds-tabs) .cds--tabs__nav-link:active,:host(cds-tabs) .cds--tabs__nav-link:focus,:host(cds-tabs-skeleton) .cds--tabs__nav-link:active,:host(cds-tabs-skeleton) .cds--tabs__nav-link:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tabs .cds--tabs__nav-link:active,.cds--tabs .cds--tabs__nav-link:focus,:host(cds-tabs) .cds--tabs__nav-link:active,:host(cds-tabs) .cds--tabs__nav-link:focus,:host(cds-tabs-skeleton) .cds--tabs__nav-link:active,:host(cds-tabs-skeleton) .cds--tabs__nav-link:focus{outline-style:dotted}}.cds--tabs.cds--tabs--contained:not(.cds--tabs--vertical) .cds--tabs__nav-link{border-block-end:0;padding-inline:var(--cds-layout-density-padding-inline-local)}.cds--tabs.cds--tabs--contained:not(.cds--tabs--tall) .cds--tabs__nav-item-label{line-height:calc(3rem - .5rem * 2)}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item-secondary-label{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333);letter-spacing:var(--cds-label-01-letter-spacing,.32px);min-block-size:1rem}.cds--tabs.cds--tabs--vertical:not(.cds--tabs--tall) .cds--tabs__nav-item-label{line-height:var(--cds-body-compact-01-line-height)}.cds--tabs.cds--tabs__icon--default .cds--tab--list,.cds--tabs.cds--tabs__icon--lg .cds--tab--list{overflow-x:visible}.cds--tabs .cds--tabs__nav-item--icon-only,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--icon-only,:host(cds-tabs) .cds--tabs__nav-item--icon-only,:host(cds-tabs-skeleton) .cds--tabs__nav-item--icon-only{display:flex;align-items:center;justify-content:center;padding:0;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local)}.cds--tabs .cds--tabs__nav-item--icon-only .cds--tabs__nav-item-label,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--icon-only .cds--tabs__nav-item-label,:host(cds-tabs) .cds--tabs__nav-item--icon-only .cds--tabs__nav-item-label,:host(cds-tabs-skeleton) .cds--tabs__nav-item--icon-only .cds--tabs__nav-item-label{line-height:0}.cds--tabs:not(.cds--tabs--contained) .cds--tabs__nav-item:not(.cds--tabs__nav-item--selected):not(.cds--tabs__nav-item--disabled):hover,:not(.cds--tabs--contained):host(cds-tabs) .cds--tabs__nav-item:not(.cds--tabs__nav-item--selected):not(.cds--tabs__nav-item--disabled):hover,:not(.cds--tabs--contained):host(cds-tabs-skeleton) .cds--tabs__nav-item:not(.cds--tabs__nav-item--selected):not(.cds--tabs__nav-item--disabled):hover{border-block-end:2px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616)}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item:not(.cds--tabs__nav-item--selected):not(.cds--tabs__nav-item--disabled):not(.cds--tabs__nav-item--hover-off):hover{background-color:var(--cds-layer-accent-hover);color:var(--cds-text-primary,#161616)}.cds--tabs.cds--tabs--vertical .cds--tabs__nav-item:not(.cds--tabs__nav-item--selected):not(.cds--tabs__nav-item--disabled):not(.cds--tabs__nav-item--hover-off):hover{background-color:var(--cds-layer-hover);box-shadow:inset 3px 0 0 0 var(--cds-border-strong)}.cds--tabs .cds--tabs__nav-item--selected,:host(cds-tabs) .cds--tabs__nav-item--selected,:host(cds-tabs-skeleton) .cds--tabs__nav-item--selected{border-block-end:2px solid var(--cds-border-interactive,#0f62fe);transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected+.cds--tabs__nav-item{box-shadow:none}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item.cds--tabs__nav-item--selected{box-shadow:inset 0 2px 0 0 var(--cds-border-interactive,#0f62fe)}.cds--tabs.cds--tabs--vertical .cds--tabs__nav-item.cds--tabs__nav-item--selected{border-inline:none;box-shadow:inset 3px 0 0 0 var(--cds-border-interactive,#0f62fe)}.cds--tabs .cds--tabs__nav-item--selected,.cds--tabs .cds--tabs__nav-item--selected:active .cds--tabs__nav-link:active,.cds--tabs .cds--tabs__nav-item--selected:focus .cds--tabs__nav-link:focus,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected,:host(cds-tabs) .cds--tabs__nav-item--selected,:host(cds-tabs) .cds--tabs__nav-item--selected:active .cds--tabs__nav-link:active,:host(cds-tabs) .cds--tabs__nav-item--selected:focus .cds--tabs__nav-link:focus,:host(cds-tabs-skeleton) .cds--tabs__nav-item--selected,:host(cds-tabs-skeleton) .cds--tabs__nav-item--selected:active .cds--tabs__nav-link:active,:host(cds-tabs-skeleton) .cds--tabs__nav-item--selected:focus .cds--tabs__nav-link:focus{font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);line-height:var(--cds-heading-compact-01-line-height,1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);color:var(--cds-text-primary,#161616)}.cds--tabs.cds--tabs--contained:not(.cds--tabs--tall) .cds--tabs__nav-item--selected,.cds--tabs.cds--tabs--contained:not(.cds--tabs--tall) .cds--tabs__nav-item--selected:hover{line-height:calc(3rem - .5rem * 2)}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected:hover{background-color:var(--cds-layer)}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected .cds--tabs__nav-link:active,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected .cds--tabs__nav-link:focus,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected:hover .cds--tabs__nav-link:active,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item--selected:hover .cds--tabs__nav-link:focus{box-shadow:none}.cds--tabs.cds--tabs--light.cds--tabs--contained .cds--tabs__nav-item--selected,.cds--tabs.cds--tabs--light.cds--tabs--contained .cds--tabs__nav-item--selected:hover{background-color:var(--cds-background,#fff)}.cds--tabs .cds--tabs__nav-item--disabled,:host(cds-tabs) .cds--tabs__nav-item--disabled,:host(cds-tabs-skeleton) .cds--tabs__nav-item--disabled{background-color:transparent;border-block-end:2px solid var(--cds-border-disabled,#c6c6c6);color:var(--cds-text-disabled,rgba(22,22,22,.25));outline:0}.cds--tabs .cds--tabs__nav-item--disabled:hover,:host(cds-tabs) .cds--tabs__nav-item--disabled:hover,:host(cds-tabs-skeleton) .cds--tabs__nav-item--disabled:hover{border-block-end:2px solid var(--cds-border-disabled,#c6c6c6);color:var(--cds-text-disabled,rgba(22,22,22,.25));cursor:not-allowed}.cds--tabs.cds--tabs--contained .cds--tabs__nav-item.cds--tabs__nav-item--disabled,.cds--tabs.cds--tabs--contained .cds--tabs__nav-item.cds--tabs__nav-item--disabled:hover{background-color:var(--cds-button-disabled,#c6c6c6)}.cds--tabs.cds--tabs--vertical .cds--tabs__nav-item.cds--tabs__nav-item--disabled,.cds--tabs.cds--tabs--vertical .cds--tabs__nav-item.cds--tabs__nav-item--disabled:hover{background-color:var(--cds-layer);border-block-end:1px solid var(--cds-border-subtle)}.cds--tabs .cds--tabs__nav-item--disabled:active,.cds--tabs .cds--tabs__nav-item--disabled:focus,:host(cds-tabs) .cds--tabs__nav-item--disabled:active,:host(cds-tabs) .cds--tabs__nav-item--disabled:focus,:host(cds-tabs-skeleton) .cds--tabs__nav-item--disabled:active,:host(cds-tabs-skeleton) .cds--tabs__nav-item--disabled:focus{border-block-end:2px solid var(--cds-border-disabled,#c6c6c6);outline:0;pointer-events:none}.cds--tabs .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link,:host(cds-tabs) .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link,:host(cds-tabs-skeleton) .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link{border-block-end-color:var(--cds-border-subtle)}.cds--tabs .cds--tabs--light .cds--tabs__nav-item--disabled:hover .cds--tabs__nav-link,:host(cds-tabs) .cds--tabs--light .cds--tabs__nav-item--disabled:hover .cds--tabs__nav-link,:host(cds-tabs-skeleton) .cds--tabs--light .cds--tabs__nav-item--disabled:hover .cds--tabs__nav-link{border-block-end-color:var(--cds-border-subtle)}.cds--tabs .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link:active,.cds--tabs .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link:focus,:host(cds-tabs) .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link:active,:host(cds-tabs) .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link:focus,:host(cds-tabs-skeleton) .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link:active,:host(cds-tabs-skeleton) .cds--tabs--light .cds--tabs__nav-item--disabled .cds--tabs__nav-link:focus{border-block-end-color:var(--cds-border-subtle)}.cds--tabs.cds--tabs--contained:not(.cds--tabs--vertical) .cds--tabs__nav-item--disabled{border-block-end:none;color:var(--cds-text-on-color-disabled,#8d8d8d)}.cds--tab-content{padding:var(--cds-layout-density-padding-inline-local)}.cds--tab-content:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tab-content:focus{outline-style:dotted}}.cds--tabs--contained~.cds--tab-content{background:var(--cds-layer)}.cds--tabs--vertical~.cds--tab-content{grid-column:3/-1;overflow-y:auto}.cds--tabs--vertical~.cds--tab-content .cds--date-picker--fluid .ccdsds--date-picker-input__wrapper .cds--date-picker__input,.cds--tabs--vertical~.cds--tab-content .cds--list-box__wrapper--fluid .cds--list-box,.cds--tabs--vertical~.cds--tab-content .cds--list-box__wrapper--fluid.cds--list-box__wrapper,.cds--tabs--vertical~.cds--tab-content .cds--number-input--fluid .cds--number__control-btn::after,.cds--tabs--vertical~.cds--tab-content .cds--number-input--fluid .cds--number__control-btn::before,.cds--tabs--vertical~.cds--tab-content .cds--number-input--fluid input[type=number],.cds--tabs--vertical~.cds--tab-content .cds--search--fluid .cds--search-input,.cds--tabs--vertical~.cds--tab-content .cds--select--fluid .cds--select-input,.cds--tabs--vertical~.cds--tab-content .cds--text-area--fluid .cds--text-area,.cds--tabs--vertical~.cds--tab-content .cds--text-area--fluid .cds--text-area__wrapper,.cds--tabs--vertical~.cds--tab-content .cds--text-area--fluid .cds--text-area__wrapper[data-invalid] .cds--text-area__divider+.cds--form-requirement,.cds--tabs--vertical~.cds--tab-content .cds--text-input--fluid .cds--text-input{background-color:var(--cds-field-01,#f4f4f4)}.cds--tabs--vertical~.cds--tab-content .cds--list-box__wrapper--fluid .cds--list-box__menu{background-color:var(--cds-layer-01,#f4f4f4)}.cds--tabs--vertical~.cds--tab-content .cds--list-box__menu-item:hover{background-color:var(--cds-layer-hover-02,#e8e8e8)}.cds--tabs--vertical~.cds--tab-content .cds--list-box__menu-item--active{background-color:var(--cds-layer-selected-02,#e0e0e0)}.cds--tabs--vertical~.cds--tab-content .cds--list-box__menu-item--active:hover{background-color:var(--cds-layer-selected-hover-02,#d1d1d1)}.cds--tabs--vertical~.cds--tab-content .cds--number-input--fluid .cds--number__control-btn:hover::after,.cds--tabs--vertical~.cds--tab-content .cds--number-input--fluid .cds--number__control-btn:hover::before{background-color:var(--cds-field-hover)}.cds--tabs--vertical~.cds--tab-content .cds--number-input--fluid .cds--number__control-btn:focus::after,.cds--tabs--vertical~.cds--tab-content .cds--number-input--fluid .cds--number__control-btn:focus::before{border-inline-start:2px solid var(--cds-focus,#0f62fe)}@media (min-width:66rem){.cds--tabs--vertical~.cds--tab-content{grid-column:5/-1}}.cds--tab-content--interactive:focus{outline:0}.cds--tabs.cds--skeleton{cursor:default;pointer-events:none}.cds--skeleton.cds--tabs:not(.cds--tabs--contained) .cds--tabs__nav-link{border-block-end:2px solid var(--cds-skeleton-element,#c6c6c6)}.cds--tabs.cds--skeleton .cds--tabs__nav-link{display:flex;align-items:center;padding:0 var(--cds-layout-density-padding-inline-local);block-size:100%;inline-size:10rem}.cds--tabs.cds--skeleton .cds--tabs__nav-link span{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;display:block;block-size:.875rem;inline-size:100%}.cds--tabs.cds--skeleton .cds--tabs__nav-link span:active,.cds--tabs.cds--skeleton .cds--tabs__nav-link span:focus,.cds--tabs.cds--skeleton .cds--tabs__nav-link span:hover{border:none;cursor:default;outline:0}.cds--tabs.cds--skeleton .cds--tabs__nav-link span::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--tabs.cds--skeleton .cds--tabs__nav-link span::before{animation:none}}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--tabs__nav-item .cds--tabs__nav-item--selected .cds--tabs__nav-item--selected{color:Highlight;outline:1px solid Highlight}}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--tabs .cds--tabs__nav-item--disabled .cds--tabs__nav-link,:host(cds-tabs) .cds--tabs__nav-item--disabled .cds--tabs__nav-link,:host(cds-tabs-skeleton) .cds--tabs__nav-item--disabled .cds--tabs__nav-link{color:GrayText;fill:GrayText}}:host(cds-tabs) .cds--tabs-nav-content-container,:host(cds-tabs-skeleton) .cds--tabs-nav-content-container{position:relative;overflow:scroll;flex:1 1 0%;block-size:2.5rem;scrollbar-width:none}:host(cds-tabs) .cds--tabs-nav-content-container::-webkit-scrollbar,:host(cds-tabs-skeleton) .cds--tabs-nav-content-container::-webkit-scrollbar{display:none}:host(cds-tabs) :where(.cds--tabs-nav-content),:host(cds-tabs-skeleton) :where(.cds--tabs-nav-content){position:absolute;block-size:100%;inset-inline-start:0;transition:inset 110ms cubic-bezier(.2,0,.38,.9)}:host(cds-tabs) .cds--tabs-nav,:host(cds-tabs-skeleton) .cds--tabs-nav{position:absolute;display:block}:host(cds-tabs) .cds--tab--overflow-nav-button,:host(cds-tabs-skeleton) .cds--tab--overflow-nav-button{z-index:1}:host(cds-tabs){outline:2px solid transparent;outline-offset:-2px}:host(cds-tabs) .cds--tabs-trigger svg{block-size:auto;inline-size:auto}:host(cds-tabs:focus) .cds--tabs-trigger{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(cds-tabs:focus) .cds--tabs-trigger{outline-style:dotted}}:host(cds-tab){display:flex;background:0 0;inline-size:100%;outline:0}:host(cds-tab) .cds--tabs__nav-link{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;outline:2px solid transparent;outline-offset:-2px;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);overflow:hidden;align-items:center;padding:.75rem 1rem .5rem;border-block-end:2px solid var(--cds-border-subtle);color:var(--cds-text-secondary,#525252);inline-size:100%;text-align:start;text-decoration:none;text-overflow:ellipsis;transition:border 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);white-space:nowrap}:host(cds-tab) .cds--tabs__nav-link *,:host(cds-tab) .cds--tabs__nav-link ::after,:host(cds-tab) .cds--tabs__nav-link ::before{box-sizing:inherit}:host(cds-tab) .cds--tabs__nav-link::-moz-focus-inner{border:0}:host(cds-tab) .cds--tabs__nav-link:active,:host(cds-tab) .cds--tabs__nav-link:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(cds-tab) .cds--tabs__nav-link:active,:host(cds-tab) .cds--tabs__nav-link:focus{outline-style:dotted}}:host(cds-tab[selected]){display:flex;background-color:transparent;transition:color 70ms cubic-bezier(.2,0,.38,.9)}:host(cds-tab[selected]) .cds--tabs__nav-link{font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);line-height:var(--cds-heading-compact-01-line-height,1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);border-block-end:.125rem solid var(--cds-border-interactive,#0f62fe)}:host(cds-tab[selected]) .cds--tabs__nav-link,:host(cds-tab[selected]) .cds--tabs__nav-link:active,:host(cds-tab[selected]) .cds--tabs__nav-link:focus{color:var(--cds-text-primary,#161616)}:host(cds-tab[selected]):hover{background-color:transparent}:host(cds-tab:hover){background-color:transparent;box-shadow:0 -1px 0 var(--cds-background-hover,rgba(141,141,141,.12))}:host(cds-tab:hover) a.cds--tabs__nav-link{border-block-end:2px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616)}:host(cds-tabs[type=contained]) .cds--tabs-nav-content-container{block-size:3rem}:host(cds-tab[type=contained]){background-color:var(--cds-layer-accent-01,#e0e0e0)}:host(cds-tab[type=contained]) a.cds--tabs__nav-link{padding:.5rem 1rem;block-size:3rem;line-height:calc(3rem - .5rem * 2)}:host(cds-tab[type=contained]) a.cds--tabs__nav-link,:host(cds-tab[type=contained]:hover) a.cds--tabs__nav-link{border-block-end:none;box-shadow:-.0625rem 0 0 0 var(--cds-border-strong)}:host(cds-tab[type=contained][hide-divider]) a.cds--tabs__nav-link{box-shadow:-.0625rem 0 0 0 transparent}:host(cds-tab[disabled][role]),:host(cds-tab[disabled][role]:hover){background-color:transparent;box-shadow:none;cursor:not-allowed;outline:0}:host(cds-tab[disabled][role]) .cds--tabs__nav-link,:host(cds-tab[disabled][role]:hover) .cds--tabs__nav-link{border-block-end:2px solid var(--cds-border-disabled,#c6c6c6);color:var(--cds-text-disabled,rgba(22,22,22,.25));outline:0;pointer-events:none}:host(cds-tab[type=contained][disabled][role]) .cds--tabs__nav-link{background-color:var(--cds-button-disabled,#c6c6c6);border-block-end:none;color:var(--cds-text-on-color-disabled,#8d8d8d)}:host(cds-tab[type=contained][selected]),:host(cds-tab[type=contained][selected]:hover){background-color:var(--cds-layer-01,#f4f4f4)}:host(cds-tab[type=contained][selected]) .cds--tabs__nav-link,:host(cds-tab[type=contained][selected]:hover) .cds--tabs__nav-link{border-block-end:none;box-shadow:inset 0 .125rem 0 0 var(--cds-interactive,#0f62fe);line-height:calc(3rem - .5rem * 2)}:host(cds-tab[type=contained][selected]) .cds--tabs__nav-link:active,:host(cds-tab[type=contained][selected]) .cds--tabs__nav-link:focus,:host(cds-tab[type=contained][selected]:hover) .cds--tabs__nav-link:active,:host(cds-tab[type=contained][selected]:hover) .cds--tabs__nav-link:focus{box-shadow:none}:host(cds-tab[type=contained]:hover){background-color:var(--cds-layer-accent-hover)}:host(cds-tab[disabled][in-focus][selected]),:host(cds-tab[disabled][in-focus][selected]:hover),:host(cds-tab[disabled][selected]),:host(cds-tab[disabled][selected]:hover){display:flex;background-color:transparent;box-shadow:none;outline:2px solid transparent;outline-offset:-2px}:host(cds-tab[disabled][in-focus][selected]) .cds--tabs__nav-link,:host(cds-tab[disabled][in-focus][selected]:hover) .cds--tabs__nav-link,:host(cds-tab[disabled][selected]) .cds--tabs__nav-link,:host(cds-tab[disabled][selected]:hover) .cds--tabs__nav-link{font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);border-block-end:2px solid var(--cds-border-disabled,#c6c6c6);color:var(--cds-text-disabled,rgba(22,22,22,.25))}:host(cds-tab[disabled][in-focus][selected]) .cds--tabs__nav-link:active,:host(cds-tab[disabled][in-focus][selected]) .cds--tabs__nav-link:focus,:host(cds-tab[disabled][in-focus][selected]:hover) .cds--tabs__nav-link:active,:host(cds-tab[disabled][in-focus][selected]:hover) .cds--tabs__nav-link:focus,:host(cds-tab[disabled][selected]) .cds--tabs__nav-link:active,:host(cds-tab[disabled][selected]) .cds--tabs__nav-link:focus,:host(cds-tab[disabled][selected]:hover) .cds--tabs__nav-link:active,:host(cds-tab[disabled][selected]:hover) .cds--tabs__nav-link:focus{border-block-end-width:3px}:host(cds-tabs-skeleton) .cds--tabs-trigger{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;inline-size:6.25rem}:host(cds-tabs-skeleton) .cds--tabs-trigger:active,:host(cds-tabs-skeleton) .cds--tabs-trigger:focus,:host(cds-tabs-skeleton) .cds--tabs-trigger:hover{border:none;cursor:default;outline:0}:host(cds-tabs-skeleton) .cds--tabs-trigger::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){:host(cds-tabs-skeleton) .cds--tabs-trigger::before{animation:none}}:host(cds-tab-skeleton){margin-inline-start:.125rem}:host(cds-tab-skeleton) .cds--tabs__nav-link{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;block-size:.75rem;inline-size:4.6875rem}:host(cds-tab-skeleton) .cds--tabs__nav-link:active,:host(cds-tab-skeleton) .cds--tabs__nav-link:focus,:host(cds-tab-skeleton) .cds--tabs__nav-link:hover{border:none;cursor:default;outline:0}:host(cds-tab-skeleton) .cds--tabs__nav-link::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){:host(cds-tab-skeleton) .cds--tabs__nav-link::before{animation:none}}:host(cds-tab-skeleton:first-of-type){margin-inline-start:0}',
]);
let N,
  A,
  B,
  R = (e) => e;
function E(e, s, c, n) {
  var d = t(o(1 & n ? e.prototype : e), s, c);
  return 2 & n
    ? function (e) {
        return d.apply(c, e);
      }
    : d;
}
let L = e(
  [y(`${p}-tabs`)],
  function (e, t) {
    class o extends t {
      constructor(...t) {
        super(...t), e(this);
      }
    }
    return {
      F: o,
      d: [
        { kind: 'field', key: '_currentIndex', value: () => 0 },
        { kind: 'field', key: '_totalTabs', value: () => 0 },
        { kind: 'field', key: '_isScrollable', value: () => !1 },
        { kind: 'field', key: 'tablist', value: () => null },
        { kind: 'field', key: 'BUTTON_WIDTH', value: () => 44 },
        {
          kind: 'method',
          key: '_navigate',
          value: function (e, { immediate: t = !0 } = {}) {
            const {
                selectorItem: o,
                selectorItemHighlighted: s,
                selectorItemSelected: c,
              } = this.constructor,
              n = this._getNextItem(this.querySelector(t ? c : s), e);
            if (!n) return;
            t
              ? this._handleUserInitiatedSelectItem(n)
              : u(this.querySelectorAll(o), (e) => {
                  e[t ? 'selected' : 'highlighted'] = n === e;
                }),
              n.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            const d = n.textContent;
            d && (this._assistiveStatusText = d),
              (this._currentIndex += e),
              this.requestUpdate();
          },
        },
        {
          kind: 'method',
          decorators: [v('click')],
          key: '_handleClick',
          value: function (e) {
            E(o, '_handleClick', this, 3)([e]);
          },
        },
        {
          kind: 'method',
          decorators: [v('keydown')],
          key: '_handleKeydown',
          value: function (e) {
            const { key: t } = e,
              o = this.constructor.getAction(t),
              s = this.querySelectorAll(`${p}-tab:not([disabled])`);
            switch (o) {
              case S.HOME:
                {
                  const [e] = s;
                  e.scrollIntoView({ block: 'nearest', inline: 'nearest' }),
                    this._handleUserInitiatedSelectItem(e),
                    this.requestUpdate();
                }
                break;
              case S.END:
                {
                  const e = s[s.length - 1];
                  e.scrollIntoView({ block: 'nearest', inline: 'nearest' }),
                    this._handleUserInitiatedSelectItem(e),
                    this.requestUpdate();
                }
                break;
              case S.NAVIGATING: {
                const e = k[t];
                e && this._navigate(e);
              }
            }
          },
        },
        {
          kind: 'method',
          key: '_handleScrollButtonClick',
          value: function (e, { direction: t }) {
            if (!this.tablist) return;
            const {
              scrollLeft: o,
              clientWidth: s,
              scrollWidth: c,
            } = this._contentContainerNode;
            switch (t) {
              case -1:
                this._contentContainerNode.scrollLeft = Math.max(
                  o - (c / this._totalTabs) * 1.5,
                  0
                );
                break;
              case 1:
                this._contentContainerNode.scrollLeft =
                  Math.min(o + (c / this._totalTabs) * 1.5, c - s) + 1;
            }
          },
        },
        {
          kind: 'method',
          key: '_handleSlotchange',
          value: function () {
            const { selectorItemSelected: e } = this.constructor,
              t = this.querySelector(e);
            this._getNextItem(t, 1).hideDivider = !0;
          },
        },
        {
          kind: 'method',
          key: '_selectionDidChange',
          value: function (e) {
            E(o, '_selectionDidChange', this, 3)([e]),
              (this._assistiveStatusText = this.selectedItemAssistiveText);
          },
        },
        {
          kind: 'field',
          decorators: [i(`.${p}--tabs-nav-content-container`)],
          key: '_contentContainerNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [i(`.${p}--tabs-nav-content`)],
          key: '_contentNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [a()],
          key: '_currentScrollPosition',
          value: () => 0,
        },
        {
          kind: 'field',
          decorators: [i(`.${p}--sub-content-left`)],
          key: '_intersectionLeftSentinelNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [i(`.${p}--sub-content-right`)],
          key: '_intersectionRightSentinelNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'selecting-items-assistive-text' })],
          key: 'selectingItemsAssistiveText',
          value: () =>
            'Selecting items. Use up and down arrow keys to navigate.',
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'selected-item-assistive-text' })],
          key: 'selectedItemAssistiveText',
          value: () => 'Selected an item.',
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'trigger-content' })],
          key: 'triggerContent',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [d({ reflect: !0 })],
          key: 'type',
          value: () => C.REGULAR,
        },
        {
          kind: 'field',
          decorators: [a()],
          key: '_isIntersectionLeftTrackerInContent',
          value: () => !0,
        },
        {
          kind: 'field',
          decorators: [a()],
          key: '_isIntersectionRightTrackerInContent',
          value: () => !0,
        },
        { kind: 'field', key: '_observerIntersection', value: () => null },
        {
          kind: 'field',
          key: '_observeIntersectionContainer',
          value() {
            return (e) => {
              const {
                _intersectionLeftSentinelNode: t,
                _intersectionRightSentinelNode: o,
              } = this;
              e.forEach(({ isIntersecting: e, target: s }) => {
                s === t && (this._isIntersectionLeftTrackerInContent = e),
                  s === o && (this._isIntersectionRightTrackerInContent = e);
              });
            };
          },
        },
        {
          kind: 'method',
          key: '_cleanAndCreateIntersectionObserverContainer',
          value: function ({ create: e } = {}) {
            const {
              _intersectionLeftSentinelNode: t,
              _intersectionRightSentinelNode: o,
            } = this;
            this._observerIntersection &&
              (this._observerIntersection.disconnect(),
              (this._observerIntersection = null)),
              e &&
                ((this._observerIntersection = new IntersectionObserver(
                  this._observeIntersectionContainer,
                  { root: this, threshold: 0 }
                )),
                t && this._observerIntersection.observe(t),
                o && this._observerIntersection.observe(o));
          },
        },
        {
          kind: 'method',
          key: 'disconnectedCallback',
          value: function () {
            this._cleanAndCreateIntersectionObserverContainer(),
              E(o, 'disconnectedCallback', this, 3)([]);
          },
        },
        {
          kind: 'method',
          key: 'shouldUpdate',
          value: function (e) {
            if ((E(o, 'shouldUpdate', this, 3)([e]), this.tablist)) {
              const { clientWidth: e, scrollWidth: t } = this.tablist;
              this._isScrollable = t > e;
            }
            const { selectorItem: t } = this.constructor;
            return (
              e.has('type') &&
                u(this.querySelectorAll(t), (e) => {
                  this._totalTabs++, (e.type = this.type);
                }),
              !0
            );
          },
        },
        {
          kind: 'method',
          key: 'firstUpdated',
          value: function () {
            const { selectorTablist: e } = this.constructor,
              t = this.shadowRoot.querySelector(e);
            (this.tablist = t),
              this._cleanAndCreateIntersectionObserverContainer({ create: !0 });
          },
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            if (e.has('value')) {
              const e = this.querySelector(`${p}-tab[value="${this.value}"]`);
              if (e) {
                var t, o;
                const { width: s } =
                    null !==
                      (t = null == e ? void 0 : e.getBoundingClientRect()) &&
                    void 0 !== t
                      ? t
                      : {},
                  c = null !== (o = e.offsetLeft) && void 0 !== o ? o : 0,
                  n = e.offsetLeft + s,
                  d = this.tablist.scrollLeft + this.BUTTON_WIDTH,
                  r =
                    this.tablist.scrollLeft +
                    this.tablist.clientWidth -
                    this.BUTTON_WIDTH;
                c < d && (this.tablist.scrollLeft = c - this.BUTTON_WIDTH),
                  n > r &&
                    (this.tablist.scrollLeft =
                      n + this.BUTTON_WIDTH - this.tablist.clientWidth);
              }
            }
            e.has('_currentScrollPosition') &&
              this._contentNode &&
              (this._contentNode.style.insetInlineStart = `-${this._currentScrollPosition}px`);
          },
        },
        {
          kind: 'method',
          key: 'renderPreviousButton',
          value: function () {
            const { _isIntersectionLeftTrackerInContent: e } = this,
              t = l({
                [`${p}--tab--overflow-nav-button`]: !0,
                [`${p}--tabs__nav-caret-left`]: !0,
                [`${p}--tab--overflow-nav-button--previous`]: !0,
                [`${p}--tab--overflow-nav-button--hidden`]: e,
              });
            return r(
              N ||
                (N = R`
      <button
        part="prev-button"
        tabindex="-1"
        aria-hidden="true"
        class="${0}"
        @click=${0}>
        ${0}
      </button>
    `),
              t,
              (e) => this._handleScrollButtonClick(e, { direction: k.Left }),
              _()
            );
          },
        },
        {
          kind: 'method',
          key: 'renderNextButton',
          value: function () {
            const { _isIntersectionRightTrackerInContent: e } = this,
              t = l({
                [`${p}--tab--overflow-nav-button`]: !0,
                [`${p}--tabs__nav-caret-right`]: !0,
                [`${p}--tab--overflow-nav-button--next`]: !0,
                [`${p}--tab--overflow-nav-button--hidden`]: e,
              });
            return r(
              A ||
                (A = R`
      <button
        part="next-button"
        tabindex="-1"
        aria-hidden="true"
        class="${0}"
        @click=${0}>
        ${0}
      </button>
    `),
              t,
              (e) => this._handleScrollButtonClick(e, { direction: k.Right }),
              f()
            );
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const { _assistiveStatusText: e, _handleSlotchange: t } = this;
            return r(
              B ||
                (B = R`
      ${0}
      <div class="${0}--tabs-nav-content-container">
        <div class="${0}--tabs-nav-content">
          <div class="${0}--tabs-nav">
            <div id="tablist" role="tablist" class="${0}--tab--list">
              <div class="${0}--sub-content-left"></div>
              <slot @slotchange=${0}></slot>
              <div class="${0}--sub-content-right"></div>
            </div>
          </div>
        </div>
      </div>
      ${0}
      <div
        class="${0}--assistive-text"
        role="status"
        aria-live="assertive"
        aria-relevant="additions text">
        ${0}
      </div>
    `),
              this.renderPreviousButton(),
              p,
              p,
              p,
              p,
              p,
              t,
              p,
              this.renderNextButton(),
              p,
              e
            );
          },
        },
        {
          kind: 'field',
          static: !0,
          key: 'TRIGGER_KEYS',
          value: () => new Set([' ', 'Enter']),
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItem',
          value: function () {
            return `${p}-tab`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemEnabled',
          value: function () {
            return `${p}-tab:not([disabled])`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemHighlighted',
          value: function () {
            return `${p}-tab[highlighted]`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemSelected',
          value: function () {
            return `${p}-tab[selected]`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorTablist',
          value: function () {
            return `.${p}--tab--list`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventBeforeSelect',
          value: function () {
            return `${p}-tabs-beingselected`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventSelect',
          value: function () {
            return `${p}-tabs-selected`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => T },
        {
          kind: 'method',
          static: !0,
          key: 'getAction',
          value: function (e) {
            return 'Home' === e
              ? S.HOME
              : 'End' === e
              ? S.END
              : e in k
              ? S.NAVIGATING
              : S.NONE;
          },
        },
      ],
    };
  },
  b($)
);
export { L as C, C as T, T as a, _ as b, z as s };
