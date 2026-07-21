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

import {
  i as e,
  n as o,
  x as t,
  s,
  a as r,
} from './query-assigned-elements.js';
import { t as c } from './state.js';
import { i as n } from './query.js';
import { s as d } from './index2.js';
import { o as a } from './class-map.js';
import { s as i, a as l } from './203.js';
import { H as p } from './host-listener.js';
import { H as u } from './host-listener2.js';
import { s as g } from './settings.js';
import { s as m } from './sameHeight.js';
import { S as v } from './stable-selector.js';
import { l as h } from './if-defined.js';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var b = e([
  '.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{--cds-popover-drop-shadow:drop-shadow(0 2px 2px rgba(0,0,0,.2))}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{filter:var(--cds-popover-drop-shadow,none);inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;background-color:var(--cds-popover-background-color,var(--cds-layer));border:0;border-radius:var(--cds-popover-border-radius,2px);box-sizing:border-box;color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;font-family:inherit;font-size:100%;inline-size:-moz-max-content;inline-size:max-content;margin:0;max-inline-size:23rem;padding:0;pointer-events:auto;position:absolute;vertical-align:baseline;z-index:6000}.cds--layout--size-sm .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{background-color:var(--cds-popover-background-color,var(--cds-layer));display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:0;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:0;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:2rem;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:inline-flex;font-family:inherit;font-size:100%;inline-size:100%;inline-size:2rem;justify-content:center;margin:0;padding:0;position:relative;text-align:start;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{color:var(--cds-text-inverse,#fff);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-block-end:1px dotted var(--cds-border-strong);border-radius:0;box-sizing:border-box;color:var(--cds-text-primary,#161616);cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{border-block-end-color:var(--cds-border-interactive,#0f62fe);outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;border-radius:0;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-shrink:0;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding:0;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline-end:calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);padding-inline-start:calc(var(--cds-layout-density-padding-inline-local) - .0625rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:baseline;vertical-align:top}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only>:first-child{margin-block-start:.0625rem;min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;inline-size:9.375rem;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:ButtonText}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}:root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:root{--cds-grid-columns:16}}@media (min-width:99rem){:root{--cds-grid-margin:1.5rem}}.cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start:0}.cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}.cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}.cds--subgrid--narrow{--cds-grid-gutter-start:0;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}.cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}.cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}.cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--md\\:col-span-0{display:none}.cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}.cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}.cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--lg\\:col-span-0{display:none}.cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){.cds--xlg\\:col-span-0{display:none}.cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){.cds--max\\:col-span-0{display:none}.cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){.cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){.cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}.cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){.cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){.cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}.cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}:host(c4d-carousel[dir=rtl]) .cds--btn.c4d--carousel__navigation__btn svg{transform:rotate(180deg)}:host(c4d-carousel[dir=rtl].featured-carousel) nav.cds--carousel__navigation{right:calc(50% + 32px)}:host([dir=rtl].featured-carousel.slide-reverse) nav.cds--carousel__navigation{right:0}:host-context([dir=ltr]) :host(.slide-reverse) nav.cds--carousel__navigation{left:calc(50% - 32px);transform:translateX(-90%)}@media (max-width:65.98rem){:host-context([dir=ltr]) :host(.slide-reverse) nav.cds--carousel__navigation{left:auto;transform:none}}@media print{.cds--carousel,:host(c4d-carousel){--c4d--carousel--page-size:4;flex-flow:row wrap;inline-size:100%;margin:0;max-inline-size:100%;padding:0}.cds--carousel .cds--carousel__scroll-container,:host(c4d-carousel) .cds--carousel__scroll-container{margin:0;overflow:visible}.cds--carousel .cds--carousel__scroll-contents,:host(c4d-carousel) .cds--carousel__scroll-contents{flex-wrap:wrap;gap:1rem;margin:0;position:static}.cds--carousel .cds--carousel__navigation,:host(c4d-carousel) .cds--carousel__navigation{display:none}.cds--carousel ::slotted(:not([name])),:host(c4d-carousel) ::slotted(:not([name])){margin:0}}body[data-fullwidthtemplate=true] .table-of-contents .carousel:last-of-type:not(:has(.cds--grid>[horizontal-ruler])) c4d-carousel::part(navigation){margin-block-end:1.5rem}.cds--carousel,:host(c4d-carousel){--c4d--carousel--page-size:1;display:flex;flex-direction:column;inline-size:calc(100% + var(--c4d--carousel--overflow-hint-size, 1rem));margin-inline-end:calc(var(--c4d--carousel--overflow-hint-size, 1rem)*-1);overflow:hidden;padding-inline:1rem calc(1rem + var(--c4d--carousel--overflow-hint-size, 1rem))}@media (min-width:42rem){.cds--carousel,:host(c4d-carousel){--c4d--carousel--page-size:2}}@media (min-width:66rem){.cds--carousel,:host(c4d-carousel){--c4d--carousel--page-size:4}}.cds--carousel [role=region],:host(c4d-carousel) [role=region]{display:contents}@media (min-width:42rem){.cds--carousel,:host(c4d-carousel){padding-inline-start:0}}.cds--carousel ::slotted(:not([name])),:host(c4d-carousel) ::slotted(:not([name])){block-size:auto;flex:0 0 calc((100% - (var(--c4d--carousel--page-size, 1) - 1)*1rem)/var(--c4d--carousel--page-size, 1));margin-inline-end:1rem;vertical-align:middle}@media (min-width:42rem){.cds--carousel ::slotted(c4d-callout-quote:not(:first-child)),:host(c4d-carousel) ::slotted(c4d-callout-quote:not(:first-child)){margin-inline-start:0}}.cds--carousel .cds--carousel__scroll-container,:host(c4d-carousel) .cds--carousel__scroll-container{grid-area:body;margin-inline-end:calc((1rem + var(--c4d--carousel--overflow-hint-size, 1rem))*-1);overflow:hidden;position:relative}.cds--carousel .cds--carousel__scroll-contents,:host(c4d-carousel) .cds--carousel__scroll-contents{align-items:stretch;display:flex;margin-inline-end:calc(1rem + var(--c4d--carousel--overflow-hint-size, 1rem));position:relative}.cds--carousel .cds--carousel__scroll-contents--scrolling,:host(c4d-carousel) .cds--carousel__scroll-contents--scrolling{transition:inset-inline-start .4s cubic-bezier(.2,0,.38,.9)}.cds--carousel .cds--carousel__navigation,:host(c4d-carousel) .cds--carousel__navigation{align-items:center;display:grid;font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);gap:1rem;grid-area:navigation;grid-template-columns:auto auto auto;justify-content:flex-end;letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5);margin-block-start:1rem}.cds--carousel .cds--btn.cds--carousel__navigation__btn,:host(c4d-carousel) .cds--btn.cds--carousel__navigation__btn{block-size:3rem;inline-size:3rem;min-block-size:3rem;padding:0}.cds--carousel .cds--btn.cds--carousel__navigation__btn svg,:host(c4d-carousel) .cds--btn.cds--carousel__navigation__btn svg{margin:auto}:host(c4d-carousel[in-modal]){block-size:100%;inline-size:100%;padding:0 0 1rem}@media (min-width:42rem){:host(c4d-carousel[in-modal]){padding-block-end:0}}:host(c4d-carousel[in-modal]) .cds--carousel__scroll-container{flex-grow:1}:host(c4d-carousel[in-modal]) .cds--carousel__scroll-contents{block-size:100%}.cds--carousel__navigation__status{direction:ltr}',
]);
let f,
  y,
  k = (e) => e;
function x() {
  x = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, o) {
      ['method', 'field'].forEach(function (t) {
        o.forEach(function (o) {
          o.kind === t &&
            'own' === o.placement &&
            this.defineClassElement(e, o);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, o) {
      var t = e.prototype;
      ['method', 'field'].forEach(function (s) {
        o.forEach(function (o) {
          var r = o.placement;
          if (o.kind === s && ('static' === r || 'prototype' === r)) {
            var c = 'static' === r ? e : t;
            this.defineClassElement(c, o);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, o) {
      var t = o.descriptor;
      if ('field' === o.kind) {
        var s = o.initializer;
        t = {
          enumerable: t.enumerable,
          writable: t.writable,
          configurable: t.configurable,
          value: void 0 === s ? void 0 : s.call(e),
        };
      }
      Object.defineProperty(e, o.key, t);
    },
    decorateClass: function (e, o) {
      var t = [],
        s = [],
        r = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, r);
        }, this),
        e.forEach(function (e) {
          if (!w(e)) return t.push(e);
          var o = this.decorateElement(e, r);
          t.push(o.element),
            t.push.apply(t, o.extras),
            s.push.apply(s, o.finishers);
        }, this),
        !o)
      )
        return { elements: t, finishers: s };
      var c = this.decorateConstructor(t, o);
      return s.push.apply(s, c.finishers), (c.finishers = s), c;
    },
    addElementPlacement: function (e, o, t) {
      var s = o[e.placement];
      if (!t && -1 !== s.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      s.push(e.key);
    },
    decorateElement: function (e, o) {
      for (
        var t = [], s = [], r = e.decorators, c = r.length - 1;
        c >= 0;
        c--
      ) {
        var n = o[e.placement];
        n.splice(n.indexOf(e.key), 1);
        var d = this.fromElementDescriptor(e),
          a = this.toElementFinisherExtras((0, r[c])(d) || d);
        (e = a.element),
          this.addElementPlacement(e, o),
          a.finisher && s.push(a.finisher);
        var i = a.extras;
        if (i) {
          for (var l = 0; l < i.length; l++) this.addElementPlacement(i[l], o);
          t.push.apply(t, i);
        }
      }
      return { element: e, finishers: s, extras: t };
    },
    decorateConstructor: function (e, o) {
      for (var t = [], s = o.length - 1; s >= 0; s--) {
        var r = this.fromClassDescriptor(e),
          c = this.toClassDescriptor((0, o[s])(r) || r);
        if (
          (void 0 !== c.finisher && t.push(c.finisher), void 0 !== c.elements)
        ) {
          e = c.elements;
          for (var n = 0; n < e.length - 1; n++)
            for (var d = n + 1; d < e.length; d++)
              if (e[n].key === e[d].key && e[n].placement === e[d].placement)
                throw new TypeError('Duplicated element (' + e[n].key + ')');
        }
      }
      return { elements: e, finishers: t };
    },
    fromElementDescriptor: function (e) {
      var o = {
        kind: e.kind,
        key: e.key,
        placement: e.placement,
        descriptor: e.descriptor,
      };
      return (
        Object.defineProperty(o, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === e.kind && (o.initializer = e.initializer),
        o
      );
    },
    toElementDescriptors: function (e) {
      if (void 0 !== e)
        return ((o = e),
        (function (e) {
          if (Array.isArray(e)) return e;
        })(o) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(o) ||
          (function (e, o) {
            if (e) {
              if ('string' == typeof e) return T(e, o);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === t && e.constructor && (t = e.constructor.name),
                'Map' === t || 'Set' === t
                  ? Array.from(e)
                  : 'Arguments' === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? T(e, o)
                  : void 0
              );
            }
          })(o) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (e) {
          var o = this.toElementDescriptor(e);
          return (
            this.disallowProperty(e, 'finisher', 'An element descriptor'),
            this.disallowProperty(e, 'extras', 'An element descriptor'),
            o
          );
        }, this);
      var o;
    },
    toElementDescriptor: function (e) {
      var o = e.kind + '';
      if ('method' !== o && 'field' !== o)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            o +
            '"'
        );
      var t = I(e.key),
        s = e.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var r = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var c = {
        kind: o,
        key: t,
        placement: s,
        descriptor: Object.assign({}, r),
      };
      return (
        'field' !== o
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
            (c.initializer = e.initializer)),
        c
      );
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: E(e, 'finisher'),
        extras: this.toElementDescriptors(e.extras),
      };
    },
    fromClassDescriptor: function (e) {
      var o = {
        kind: 'class',
        elements: e.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(o, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        o
      );
    },
    toClassDescriptor: function (e) {
      var o = e.kind + '';
      if ('class' !== o)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            o +
            '"'
        );
      this.disallowProperty(e, 'key', 'A class descriptor'),
        this.disallowProperty(e, 'placement', 'A class descriptor'),
        this.disallowProperty(e, 'descriptor', 'A class descriptor'),
        this.disallowProperty(e, 'initializer', 'A class descriptor'),
        this.disallowProperty(e, 'extras', 'A class descriptor');
      var t = E(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: t };
    },
    runClassFinishers: function (e, o) {
      for (var t = 0; t < o.length; t++) {
        var s = (0, o[t])(e);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          e = s;
        }
      }
      return e;
    },
    disallowProperty: function (e, o, t) {
      if (void 0 !== e[o])
        throw new TypeError(t + " can't have a ." + o + ' property.');
    },
  };
  return e;
}
function _(e) {
  var o,
    t = I(e.key);
  'method' === e.kind
    ? (o = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (o = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (o = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (o = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: t,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: o,
  };
  return (
    e.decorators && (s.decorators = e.decorators),
    'field' === e.kind && (s.initializer = e.value),
    s
  );
}
function z(e, o) {
  void 0 !== e.descriptor.get
    ? (o.descriptor.get = e.descriptor.get)
    : (o.descriptor.set = e.descriptor.set);
}
function w(e) {
  return e.decorators && e.decorators.length;
}
function S(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function E(e, o) {
  var t = e[o];
  if (void 0 !== t && 'function' != typeof t)
    throw new TypeError("Expected '" + o + "' to be a function");
  return t;
}
function I(e) {
  var o = (function (e, o) {
    if ('object' != typeof e || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (void 0 !== t) {
      var s = t.call(e, o || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === o ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof o ? o : o + '';
}
function T(e, o) {
  (null == o || o > e.length) && (o = e.length);
  for (var t = 0, s = Array(o); t < o; t++) s[t] = e[t];
  return s;
}
function C(e, o, t, s) {
  var r = P($(1 & s ? e.prototype : e), o, t);
  return 2 & s && 'function' == typeof r
    ? function (e) {
        return r.apply(t, e);
      }
    : r;
}
function P() {
  return (
    (P =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, o, t) {
            var s = (function (e, o) {
              for (; !{}.hasOwnProperty.call(e, o) && null !== (e = $(e)); );
              return e;
            })(e, o);
            if (s) {
              var r = Object.getOwnPropertyDescriptor(s, o);
              return r.get ? r.get.call(arguments.length < 3 ? e : t) : r.value;
            }
          }),
    P.apply(null, arguments)
  );
}
function $(e) {
  return (
    ($ = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    $(e)
  );
}
const { prefix: R, stablePrefix: A } = s,
  O = 0.75;
!(function (e, o, t, s) {
  var r = x();
  if (s) for (var c = 0; c < s.length; c++) r = s[c](r);
  var n = o(function (e) {
      r.initializeInstanceElements(e, d.elements);
    }, t),
    d = r.decorateClass(
      (function (e) {
        for (
          var o = [],
            t = function (e) {
              return (
                'method' === e.kind &&
                e.key === c.key &&
                e.placement === c.placement
              );
            },
            s = 0;
          s < e.length;
          s++
        ) {
          var r,
            c = e[s];
          if ('method' === c.kind && (r = o.find(t)))
            if (S(c.descriptor) || S(r.descriptor)) {
              if (w(c) || w(r))
                throw new ReferenceError(
                  'Duplicated methods (' + c.key + ") can't be decorated."
                );
              r.descriptor = c.descriptor;
            } else {
              if (w(c)) {
                if (w(r))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      c.key +
                      ').'
                  );
                r.decorators = c.decorators;
              }
              z(c, r);
            }
          else o.push(c);
        }
        return o;
      })(n.d.map(_)),
      e
    );
  r.initializeClassElements(n.F, d.elements),
    r.runClassFinishers(n.F, d.finishers);
})(
  [
    (
      (e) => (o) =>
        'function' == typeof o
          ? ((e, o) => (customElements.define(e, o), o))(e, o)
          : ((e, o) => {
              const { kind: t, elements: s } = o;
              return {
                kind: t,
                elements: s,
                finisher(o) {
                  customElements.define(e, o);
                },
              };
            })(e, o)
    )(`${A}-carousel`),
  ],
  function (e, s) {
    class r extends s {
      constructor(...o) {
        super(...o), e(this);
      }
    }
    return {
      F: r,
      d: [
        {
          kind: 'field',
          decorators: [n(`.${R}--carousel__scroll-container`)],
          key: '_containerNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n(`.${R}--carousel__scroll-contents`)],
          key: '_contentsNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n('[aria-live]')],
          key: '_announcementNode',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [c()],
          key: '_contentsBaseWidth',
          value: () => 0,
        },
        { kind: 'field', decorators: [c()], key: '_gap', value: () => 0 },
        { kind: 'field', key: '_childItems', value: () => [] },
        { kind: 'field', key: '_childItemHeadings', value: () => [] },
        { kind: 'field', key: '_childItemEyebrows', value: () => [] },
        { kind: 'field', key: '_childItemTagGroup', value: () => [] },
        { kind: 'field', key: '_childItemParagraphs', value: () => [] },
        { kind: 'field', key: '_childItemFooters', value: () => [] },
        { kind: 'field', key: '_observerResizeContainer', value: () => null },
        { kind: 'field', key: '_observerResizeRoot', value: () => null },
        {
          kind: 'field',
          key: '_intersectionThresholdDifference',
          value: () => Math.max(0.5, O) - Math.min(0.5, O),
        },
        { kind: 'field', key: '_intersectionObserver', value: () => null },
        {
          kind: 'method',
          key: '_onIntersect',
          value: function (e) {
            const {
              _announcementNode: o,
              formatAnnouncement: t,
              _getStatus: s,
              _intersectionTimeout: r,
            } = this;
            e.forEach((e) => {
              const { target: o, isIntersecting: t, intersectionRatio: s } = e;
              t && s > O
                ? ((o.inert = !1), o.setAttribute('aria-hidden', !1))
                : ((o.inert = !0), o.setAttribute('aria-hidden', !0));
            }),
              clearTimeout(r);
            const c = parseInt(d, 10);
            this._intersectionTimeout = setTimeout(() => {
              o && (o.innerText = t(s));
            }, c);
          },
        },
        { kind: 'field', decorators: [c()], key: '_pageSize', value: void 0 },
        {
          kind: 'field',
          decorators: [c()],
          key: '_pageSizeAuto',
          value: () => 1,
        },
        {
          kind: 'field',
          decorators: [n('slot:not([name])')],
          key: '_slotNode',
          value: void 0,
        },
        { kind: 'field', decorators: [c()], key: '_total', value: () => 0 },
        { kind: 'field', decorators: [c()], key: '_startPos', value: () => 0 },
        { kind: 'field', decorators: [c()], key: '_startTime', value: () => 0 },
        {
          kind: 'field',
          decorators: [c()],
          key: '_isScrolling',
          value: () => !1,
        },
        {
          kind: 'method',
          key: '_cleanAndCreateObserverResize',
          value: function ({ create: e } = {}) {
            const { _contentsNode: o } = this;
            o &&
              (this._observerResizeContainer &&
                (this._observerResizeContainer.disconnect(),
                (this._observerResizeContainer = null)),
              this._observerResizeRoot &&
                (this._observerResizeRoot.disconnect(),
                (this._observerResizeRoot = null)),
              e &&
                ((this._observerResizeRoot = new ResizeObserver(
                  this._observeResizeRoot
                )),
                this._observerResizeRoot.observe(
                  this.ownerDocument.documentElement
                ),
                (this._observerResizeContainer = new ResizeObserver(
                  this._observeResizeContainer
                )),
                this._observerResizeContainer.observe(o)));
          },
        },
        {
          kind: 'method',
          key: '_cleanAndCreateObserverIntersection',
          value: function ({ create: e } = {}) {
            const { _containerNode: o } = this;
            o &&
              (this._intersectionObserver &&
                (this._intersectionObserver.disconnect(),
                (this._intersectionObserver = null)),
              e &&
                (this._intersectionObserver = new IntersectionObserver(
                  this._onIntersect.bind(this),
                  {
                    root: o,
                    threshold: [
                      0.5 + this._intersectionThresholdDifference,
                      0.5 - this._intersectionThresholdDifference,
                    ],
                  }
                )));
          },
        },
        {
          kind: 'method',
          key: '_handleScrollFocus',
          value: function ({ target: e }) {
            e.scrollTo(0, 0);
          },
        },
        {
          kind: 'field',
          decorators: [p('shadowRoot:focusin')],
          key: '_handleFocus',
          value() {
            return async ({ target: e }) => {
              if ('rtl' === this.dir) return;
              const o = e !== this && this.contains(e);
              let t = 0;
              if (
                (Array.from(this._childItems).forEach((o, s) => {
                  o.contains(e) && (t = s);
                }),
                o && (t < this.start || t >= this.start + this.pageSize))
              ) {
                const e = Math.floor(t / this.pageSize) * this.pageSize,
                  o = this.start % this.pageSize;
                this.start = e + o;
              }
            };
          },
        },
        {
          kind: 'field',
          decorators: [p('document:eventVideoTitleUpdated')],
          key: '_handleVideoTitleUpdate',
          value() {
            return async (e) => {
              e && this._setSameHeight();
            };
          },
        },
        {
          kind: 'method',
          key: '_handleClickNextButton',
          value: function () {
            const { pageSize: e, start: o, _total: t } = this;
            (this.start = Math.min(o + e, t - 1)), this._handleIsScrolling();
          },
        },
        {
          kind: 'method',
          key: '_handleClickPrevButton',
          value: function () {
            const { pageSize: e, start: o } = this;
            (this.start = Math.max(o - e, 0)), this._handleIsScrolling();
          },
        },
        {
          kind: 'method',
          key: '_handleIsScrolling',
          value: function () {
            var e;
            (this._isScrolling = !0),
              null === (e = this._contentsNode) ||
                void 0 === e ||
                e.addEventListener('transitionend', () => {
                  this._isScrolling = !1;
                });
          },
        },
        {
          kind: 'method',
          key: '_handleTouchStartEvent',
          value: function (e) {
            (this._startPos = e.touches[0].clientX),
              (this._startTime = new Date().getTime());
          },
        },
        {
          kind: 'method',
          key: '_handleTouchEndEvent',
          value: function (e) {
            const { _startPos: o, _startTime: t } = this,
              { pageSize: s, start: r, _total: c } = this,
              n = e.changedTouches[0].clientX - o;
            new Date().getTime() - t <= 600 &&
              Math.abs(n) >= 25 &&
              ((this.start =
                n < 0 ? Math.min(r + s, c - 1) : Math.max(r - s, 0)),
              this._handleIsScrolling());
          },
        },
        {
          kind: 'method',
          key: '_handleSlotChange',
          value: function (e) {
            var o;
            const t = e.target,
              { name: s } = t;
            s ||
              (this._total = t
                .assignedNodes()
                .filter((e) => e.nodeType === Node.ELEMENT_NODE).length),
              this._updateGap(),
              (this._childItems = e.target.assignedElements()),
              null === (o = this._intersectionObserver) ||
                void 0 === o ||
                o.disconnect(),
              this._childItems.forEach((e) => {
                var o;
                null === (o = this._intersectionObserver) ||
                  void 0 === o ||
                  o.observe(e);
              }),
              this._childItems &&
                (this._childItems
                  .filter(
                    (e) =>
                      void 0 !== e.matches &&
                      (e.matches(this.constructor.selectorItem) ||
                        e.matches(
                          this.constructor.selectorItemVideoCTAContainer
                        ))
                  )
                  .forEach((e) => {
                    var o;
                    this._childItemEyebrows.push(
                      e.querySelector(this.constructor.selectorItemEyebrow)
                    ),
                      this._childItemParagraphs.push(
                        e.querySelector(this.constructor.selectorItemParagraph)
                      ),
                      this._childItemTagGroup.push(
                        e.querySelector(this.constructor.selectorItemTagGroup)
                      ),
                      this._childItemHeadings.push(
                        e.querySelector(this.constructor.selectorItemHeading)
                      ),
                      this._childItemHeadings.push(
                        null ===
                          (o = e.querySelector(
                            this.constructor.selectorItem
                          )) ||
                          void 0 === o ||
                          null === (o = o.shadowRoot) ||
                          void 0 === o
                          ? void 0
                          : o.querySelector(
                              this.constructor.selectorItemHeading
                            )
                      ),
                      (this._childItemHeadings = this._childItemHeadings.filter(
                        (e) => e
                      )),
                      this._childItemFooters.push(
                        e.querySelector(this.constructor.selectorItemFooter)
                      );
                  }),
                this._observeResizeRoot());
          },
        },
        {
          kind: 'field',
          key: '_observeResizeContainer',
          value() {
            return (e) => {
              const { contentRect: o } = e[e.length - 1],
                { width: t } = o;
              (this._contentsBaseWidth = t), this._updateGap();
            };
          },
        },
        {
          kind: 'field',
          key: '_observeResizeRoot',
          value() {
            return () => {
              const { customPropertyPageSize: e } = this.constructor,
                { _contentsNode: o } = this,
                { defaultView: t } = this.ownerDocument;
              (this._pageSizeAuto = Number(
                t.getComputedStyle(o).getPropertyValue(e)
              )),
                this._setSameHeight();
            };
          },
        },
        {
          kind: 'get',
          key: '_getStatus',
          value: function () {
            const { start: e, pageSize: o, _total: t } = this,
              s = Math.ceil(e / o),
              r = Math.ceil((t - e) / o);
            return { currentPage: Math.ceil(e / o) + 1, pages: s + r };
          },
        },
        {
          kind: 'field',
          key: '_setSameHeight',
          value() {
            return () => {
              m(
                this._childItemEyebrows.filter((e) => null !== e),
                'sm'
              ),
                m(
                  this._childItemHeadings.filter((e) => null !== e),
                  'sm'
                ),
                m(
                  this._childItemParagraphs.filter((e) => null !== e),
                  'sm'
                ),
                m(
                  this._childItemFooters.filter((e) => null !== e),
                  'sm'
                );
              let e = 0;
              this._childItemTagGroup.forEach((o) => {
                if (o) {
                  const t = o.offsetHeight;
                  t > e && (e = t);
                }
              }),
                this._childItemHeadings.forEach((o) => {
                  var t;
                  !o ||
                    (null !== (t = o.nextElementSibling) &&
                      void 0 !== t &&
                      t.matches(this.constructor.selectorItemTagGroup)) ||
                    (o.style.marginBottom = `${e + 64}px`);
                });
            };
          },
        },
        {
          kind: 'method',
          key: '_updateGap',
          value: function () {
            if ('rtl' === this.dir) return;
            const { _slotNode: e } = this,
              o = e.assignedElements();
            this._gap =
              o.length < 2
                ? 0
                : o[1].getBoundingClientRect().left -
                  o[0].getBoundingClientRect().right;
          },
        },
        {
          kind: 'method',
          key: '_updateContentsPosition',
          value: function (e) {
            if (
              !(
                e.has('start') ||
                e.has('_contentsBaseWidth') ||
                e.has('_gap') ||
                e.has('pageSize')
              )
            )
              return;
            if (!this._contentsNode) return;
            const o =
              (-this.start * (this._contentsBaseWidth + this._gap)) /
              this.pageSize;
            this._contentsNode.style.insetInlineStart = `${o}px`;
          },
        },
        {
          kind: 'get',
          key: 'focusableElements',
          value: function () {
            var e;
            const { selectorTabbable: o } = this.constructor;
            return [
              ...Array.from(
                (null === (e = this.shadowRoot) || void 0 === e
                  ? void 0
                  : e.querySelectorAll(o)) || []
              ),
              ...Array.from(this.querySelectorAll(o)),
            ];
          },
        },
        {
          kind: 'field',
          decorators: [o({ attribute: !1 })],
          key: 'formatStatus',
          value:
            () =>
            ({ currentPage: e, pages: o }) =>
              `${e} / ${o}`,
        },
        {
          kind: 'field',
          decorators: [o({ attribute: !1 })],
          key: 'formatAnnouncement',
          value() {
            return ({ currentPage: e, pages: o }) =>
              `Slide ${e} of ${o}. Showing ${
                this._childItems.filter((e) => !e.matches('[inert]')).length
              } items.`;
          },
        },
        {
          kind: 'get',
          decorators: [o({ type: Number, attribute: 'page-size' })],
          key: 'pageSize',
          value: function () {
            const { _pageSize: e, _pageSizeAuto: o } = this;
            return null != e ? e : o;
          },
        },
        {
          kind: 'set',
          key: 'pageSize',
          value: function (e) {
            this._pageSize = e;
          },
        },
        {
          kind: 'field',
          decorators: [o({ attribute: 'next-button-text' })],
          key: 'nextButtonText',
          value: void 0,
        },
        { kind: 'field', key: '_defaultNextButtonText', value: () => 'next' },
        {
          kind: 'field',
          key: '_defaultPrevButtonText',
          value: () => 'previous',
        },
        {
          kind: 'field',
          decorators: [o({ attribute: 'prev-button-text' })],
          key: 'prevButtonText',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [o({ type: Number })],
          key: 'start',
          value: () => 0,
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            C(r, 'connectedCallback', this, 3)([]),
              this._cleanAndCreateObserverResize({ create: !0 }),
              this._cleanAndCreateObserverIntersection({ create: !0 });
            const e = this.closest(`${A}-expressive-modal`);
            e &&
              (e.hasFocusableElements.push(this),
              this.setAttribute('in-modal', ''),
              setTimeout(() => {
                (e.modalBody.style.overflow = 'hidden'),
                  (e.modalBody.style.width = 'var(--modal-vw)');
              }, 0));
          },
        },
        {
          kind: 'method',
          key: 'disconnectedCallback',
          value: function () {
            this._cleanAndCreateObserverResize(),
              this._cleanAndCreateObserverIntersection(),
              C(r, 'disconnectedCallback', this, 3)([]);
          },
        },
        {
          kind: 'method',
          key: 'firstUpdated',
          value: function () {
            this._cleanAndCreateObserverResize({ create: !0 }),
              this._cleanAndCreateObserverIntersection({ create: !0 }),
              this.setAttribute(
                'dir',
                window.getComputedStyle(this).getPropertyValue('direction')
              );
          },
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            this._updateContentsPosition(e);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const { customPropertyPageSize: e } = this.constructor,
              {
                nextButtonText: o,
                _defaultNextButtonText: s,
                pageSize: r,
                prevButtonText: c,
                _defaultPrevButtonText: n,
                start: d,
                _pageSize: p,
                _total: u,
                _getStatus: g,
                formatStatus: m,
                _handleClickNextButton: v,
                _handleClickPrevButton: b,
                _handleScrollFocus: x,
                _handleSlotChange: _,
                _handleTouchStartEvent: z,
                _handleTouchEndEvent: w,
                _isScrolling: S,
              } = this,
              E = Math.ceil(d / r),
              I = Math.ceil((u - d) / r),
              T = a({
                [`${R}--carousel__scroll-contents`]: !0,
                [`${R}--carousel__scroll-contents--scrolling`]: S,
              }),
              C = '1 / 1' === this.formatStatus(g);
            return t(
              f ||
                (f = k`
      <div part="region" role="region" aria-labelledby="carousel-title">
        <div part="title" id="carousel-title">
          <slot name="title">
            <span class="cds--visually-hidden" part="visually-hidden"
              >Carousel</span
            >
          </slot>
        </div>
        <div
          part="scroll-container"
          class="${0}--carousel__scroll-container"
          @scroll="${0}"
          @touchstart="${0}"
          @touchend="${0}"
          style="${0}">
          <div part="contents" class="${0}">
            <slot @slotchange="${0}"></slot>
          </div>
        </div>

        ${0}

        <span
          class="${0}--visually-hidden"
          aria-live="polite"
          part="visually-hidden">
        </span>
      </div>
    `),
              R,
              x,
              z,
              w,
              h(null == p ? null : `${e}: ${p}`),
              T,
              _,
              C
                ? null
                : t(
                    y ||
                      (y = k`
              <nav
                part="navigation"
                aria-label="Carousel Navigation"
                class="${0}--carousel__navigation">
                <button
                  part="prev-button"
                  class="${0}--btn ${0}--btn--tertiary ${0}--btn--icon-only ${0}--carousel__navigation__btn"
                  ?disabled="${0}"
                  @click="${0}"
                  aria-label="${0}"
                  title="${0}">
                  ${0}
                </button>

                <span
                  part="status"
                  class="${0}--carousel__navigation__status"
                  aria-hidden="true">
                  ${0}
                </span>

                <button
                  part="next-button"
                  class="${0}--btn ${0}--btn--tertiary ${0}--btn--icon-only ${0}--carousel__navigation__btn"
                  ?disabled="${0}"
                  @click="${0}"
                  aria-label="${0}"
                  title="${0}">
                  ${0}
                </button>
              </nav>
            `),
                    R,
                    R,
                    R,
                    R,
                    R,
                    0 === E,
                    b,
                    c || n,
                    c || n,
                    i(),
                    R,
                    m(g),
                    R,
                    R,
                    R,
                    R,
                    I <= 1,
                    v,
                    o || s,
                    o || s,
                    l()
                  ),
              R
            );
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'customPropertyPageSize',
          value: function () {
            return `--${A}--carousel--page-size`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventVideoTitleUpdated',
          value: function () {
            return `${A}-card-video-title-updated`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItem',
          value: function () {
            return `${A}-card`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemVideoCTAContainer',
          value: function () {
            return `${A}-video-cta-container`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemEyebrow',
          value: function () {
            return `${A}-card-eyebrow`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemTagGroup',
          value: function () {
            return 'div';
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemParagraph',
          value: function () {
            return 'p';
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemHeading',
          value: function () {
            return `${A}-card-heading`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItemFooter',
          value: function () {
            return `${A}-card-footer`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${A}--carousel`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorTabbable',
          value: function () {
            return `\n      ${g}\n    `;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => b },
      ],
    };
  },
  u(v(r))
);
