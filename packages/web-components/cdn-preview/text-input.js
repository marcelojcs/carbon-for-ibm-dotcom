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

import { _ as e } from './objectSpread2.js';
import { _ as t } from './decorate.js';
import {
  b as i,
  i as s,
  n as d,
  x as a,
  a as r,
} from './query-assigned-elements.js';
import { i as n } from './query.js';
import { c as l } from './carbon-element.js';
import { o } from './class-map.js';
import { p as c } from './settings.js';
import { s as p } from './spread.js';
import { F as u, s as v, a as f } from './form.js';
import { i as m } from './if-non-empty.js';
import { V as y } from './validity.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let b, g, x, _;
!(function (e) {
  (e.SMALL = 'sm'), (e.MEDIUM = 'md'), (e.LARGE = 'lg'), (e.EXTRA_LARGE = 'xl');
})(b || (b = {})),
  (function (e) {
    (e.START = 'start'), (e.CENTER = 'center'), (e.END = 'end');
  })(g || (g = {})),
  (function (e) {
    (e.TOP = 'top'),
      (e.RIGHT = 'right'),
      (e.BOTTOM = 'bottom'),
      (e.LEFT = 'left');
  })(x || (x = {})),
  (function (e) {
    (e.EMAIL = 'email'),
      (e.PASSWORD = 'password'),
      (e.TEL = 'tel'),
      (e.TEXT = 'text'),
      (e.URL = 'url');
  })(_ || (_ = {}));
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h = s([
  "@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}100%{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}100%{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}100%{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed, 0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, 0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}:root{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02, #ffffff);--cds-layer-active:var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02, #a8a8a8);--cds-field:var(--cds-field-02, #ffffff);--cds-field-hover:var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong:var(--cds-border-strong-02, #8d8d8d);--cds-border-tile:var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03, #f4f4f4);--cds-layer-active:var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03, #a8a8a8);--cds-field:var(--cds-field-03, #f4f4f4);--cds-field-hover:var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong:var(--cds-border-strong-03, #8d8d8d);--cds-border-tile:var(--cds-border-tile-03, #c6c6c6)}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline}.cds--fieldset *,.cds--fieldset ::after,.cds--fieldset ::before{box-sizing:inherit}.cds--form-item{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);display:flex;flex:1 1 auto;flex-direction:column;align-items:flex-start}.cds--label{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333);letter-spacing:var(--cds-label-01-letter-spacing,.32px);display:inline-block;color:var(--cds-text-secondary,#525252);font-weight:400;line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label html{font-size:100%}.cds--label body{font-weight:400;font-family:'IBM Plex Sans',system-ui,-apple-system,BlinkMacSystemFont,'.SFNSText-Regular',sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:'IBM Plex Mono',system-ui,-apple-system,BlinkMacSystemFont,'.SFNSText-Regular',monospace}.cds--label strong{font-weight:600}.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{position:relative;inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label+.cds--tooltip .cds--tooltip__trigger{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;text-align:start;inline-size:100%;display:flex;align-items:center;justify-content:center;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger ::after,.cds--label+.cds--tooltip .cds--tooltip__trigger ::before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;block-size:.875rem;inline-size:4.6875rem}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:0}.cds--label.cds--skeleton::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:\"\";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton::before{animation:none}}input[type=number]{font-family:'IBM Plex Sans',system-ui,-apple-system,BlinkMacSystemFont,'.SFNSText-Regular',sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;overflow:visible;font-weight:400;max-block-size:12.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:0}.cds--form--fluid .cds--form-requirement{padding:.5rem 2.5rem .5rem 1rem;margin:0}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333);letter-spacing:var(--cds-label-01-letter-spacing,.32px);display:none;overflow:hidden;margin:.25rem 0 0;max-block-size:0}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-weight:400;font-family:'IBM Plex Sans',system-ui,-apple-system,BlinkMacSystemFont,'.SFNSText-Regular',sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:'IBM Plex Mono',system-ui,-apple-system,BlinkMacSystemFont,'.SFNSText-Regular',monospace}.cds--form-requirement strong{font-weight:600}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{font-size:var(--cds-helper-text-01-font-size,.75rem);line-height:var(--cds-helper-text-01-line-height,1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);z-index:0;color:var(--cds-text-secondary,#525252);inline-size:100%;margin-block-start:.25rem;opacity:1}.cds--form__helper-text--disabled,.cds--label--disabled{color:var(--cds-text-disabled,rgba(22,22,22,.25))}fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,rgba(22,22,22,.25))}.cds--text-input{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min), var(--cds-layout-size-height-sm)), var(--cds-layout-size-height, var(--cds-layout-size-height-md)), min(var(--cds-layout-size-height-max), var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min), var(--cds-layout-density-padding-inline, var(--cds-layout-density-padding-inline-normal)), var(--cds-layout-density-padding-inline-max));box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);outline:2px solid transparent;outline-offset:-2px;padding:0 var(--cds-layout-density-padding-inline-local);border:none;background-color:var(--cds-field);block-size:var(--cds-layout-size-height-local);border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);font-family:inherit;inline-size:100%;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input *,.cds--text-input ::after,.cds--text-input ::before{box-sizing:inherit}.cds--text-input:active,.cds--text-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input:active,.cds--text-input:focus{outline-style:dotted}}.cds--text-input-wrapper svg[hidden]{display:none}.cds--password-input{padding-inline-end:2.5rem}.cds--text-input--sm.cds--password-input{padding-inline-end:2rem}.cds--text-input--lg.cds--password-input{padding-inline-end:3rem}.cds--text-input::-moz-placeholder{color:var(--cds-text-placeholder,rgba(22,22,22,.4));opacity:1}.cds--text-input::placeholder{color:var(--cds-text-placeholder,rgba(22,22,22,.4));opacity:1}.cds--text-input--light{background-color:var(--cds-field-02,#fff)}.cds--text-input__field-wrapper{position:relative;display:flex;inline-size:100%}.cds--text-input__invalid-icon{position:absolute;fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:1rem;transform:translateY(-50%)}.cds--text-input__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--text-input__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.cds--text-input--password__visibility{position:relative;display:inline-flex;overflow:visible;align-items:center;cursor:pointer}.cds--text-input--password__visibility:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus{outline-style:dotted}}.cds--text-input--password__visibility:focus{outline:1px solid transparent}.cds--text-input--password__visibility:focus svg{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus svg{outline-style:dotted}}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after,.cds--text-input--password__visibility::before{position:absolute;z-index:6000;display:flex;align-items:center;opacity:0;pointer-events:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after,.cds--text-input--password__visibility::before{display:inline-block}}.cds--text-input--password__visibility::after,.cds--text-input--password__visibility::before{transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--text-input--password__visibility::after,.cds--text-input--password__visibility::before{transition:none}}.cds--text-input--password__visibility.cds--tooltip--a11y::after,.cds--text-input--password__visibility.cds--tooltip--a11y::before{transition:none}.cds--text-input--password__visibility::before{border-style:solid;block-size:0;content:\"\";inline-size:0}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text{box-sizing:content-box;color:inherit;opacity:1;white-space:normal;word-break:break-word}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after{box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));z-index:6000;padding:.1875rem 1rem;border-radius:.125rem;background-color:var(--cds-background-inverse,#393939);block-size:auto;color:var(--cds-text-inverse,#fff);font-weight:400;inline-size:-moz-max-content;inline-size:max-content;max-inline-size:13rem;min-inline-size:1.5rem;text-align:start;transform:translateX(-50%);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);line-height:var(--cds-body-compact-01-line-height,1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px)}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after{inline-size:auto}}@supports (-ms-accelerator:true){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after{inline-size:auto}}@supports (-ms-ime-align:auto){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after{inline-size:auto}}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after{border:1px solid transparent}}.cds--text-input--password__visibility::after{content:attr(aria-label)}.cds--text-input--password__visibility.cds--tooltip--a11y::after{content:none}.cds--text-input--password__visibility.cds--tooltip--visible::after,.cds--text-input--password__visibility.cds--tooltip--visible::before,.cds--text-input--password__visibility:focus::after,.cds--text-input--password__visibility:focus::before,.cds--text-input--password__visibility:hover::after,.cds--text-input--password__visibility:hover::before{opacity:1}@keyframes cds--tooltip-fade{from{opacity:0}to{opacity:1}}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text{overflow:visible;margin:auto;clip:auto}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible.cds--tooltip--a11y::before,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:focus.cds--tooltip--a11y::before,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text,.cds--text-input--password__visibility:hover.cds--tooltip--a11y::before{animation:cds--tooltip-fade 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input--password__visibility.cds--tooltip--hidden .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--hidden+.cds--assistive-text{overflow:hidden;margin:-1px;clip:rect(0,0,0,0)}.cds--text-input--password__visibility.cds--tooltip--hidden.cds--tooltip--a11y::before{animation:none;opacity:0}.cds--text-input--password__visibility .cds--assistive-text::after{position:absolute;display:block;content:\"\";block-size:.75rem;inline-size:100%;inset-inline-start:0;inset-block-start:-.75rem}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after,.cds--text-input--password__visibility::before{inset-block-end:0;inset-inline-start:50%}.cds--text-input--password__visibility::before{border-width:0 .25rem .3125rem .25rem;border-color:transparent transparent var(--cds-background-inverse,#393939) transparent;inset-block-end:-.5rem;transform:translate(-50%,100%)}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility::after{inset-block-end:-.8125rem;transform:translate(-50%,100%)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{outline:2px solid transparent;outline-offset:-2px;position:absolute;display:flex;align-items:center;justify-content:center;padding:0;border:0;background:0 0;block-size:100%;cursor:pointer;inline-size:2.5rem;inset-inline-end:0;min-block-size:auto;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--toggle-password-tooltip .cds--popover{inset-inline-start:-2.5rem}.cds--toggle-password-tooltip .cds--popover-content{min-inline-size:2.5rem}.cds--text-input--sm+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:2rem}.cds--text-input--lg+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:3rem}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252);transition:fill 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:ButtonText}}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline-style:dotted}}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus svg,.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:hover svg{fill:var(--cds-icon-primary,#161616)}.cds--text-input--invalid,.cds--text-input--warning{padding-inline-end:2.5rem}.cds--text-input--invalid.cds--password-input{padding-inline-end:4rem}.cds--text-input--invalid+.cds--text-input--password__visibility__toggle{inset-inline-end:1rem}.cds--password-input-wrapper .cds--text-input__invalid-icon{inset-inline-end:2.5rem}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{cursor:not-allowed}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:var(--cds-icon-disabled,rgba(22,22,22,.25))}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg:hover{fill:var(--cds-icon-disabled,rgba(22,22,22,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger{cursor:default}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger svg{fill:var(--cds-icon-disabled,rgba(22,22,22,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover{cursor:default}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover svg{fill:var(--cds-icon-disabled,rgba(22,22,22,.25))}.cds--text-input__counter-alert{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px}.cds--text-input:disabled{outline:2px solid transparent;outline-offset:-2px;background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,rgba(22,22,22,.25));cursor:not-allowed;-webkit-text-fill-color:var(--cds-text-disabled,rgba(22,22,22,.25))}.cds--text-input--light:disabled{background-color:var(--cds-field-02,#fff)}.cds--text-input:disabled::-moz-placeholder{color:var(--cds-text-disabled,rgba(22,22,22,.25));opacity:1}.cds--text-input:disabled::placeholder{color:var(--cds-text-disabled,rgba(22,22,22,.25));opacity:1}.cds--text-input--invalid{outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px;box-shadow:none}@media screen and (prefers-contrast){.cds--text-input--invalid{outline-style:dotted}}.cds--text-input--invalid .cds--text-input--password__visibility__toggle{inset-inline-end:2.5rem}.cds--skeleton.cds--text-input{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none}.cds--skeleton.cds--text-input:active,.cds--skeleton.cds--text-input:focus,.cds--skeleton.cds--text-input:hover{border:none;cursor:default;outline:0}.cds--skeleton.cds--text-input::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:\"\";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton.cds--text-input::before{animation:none}}.cds--form--fluid .cds--text-input-wrapper{position:relative;background:var(--cds-field);transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--form--fluid .cds--label{position:absolute;z-index:1;display:flex;align-items:center;margin:0;block-size:1rem;inset-block-start:.8125rem;inset-inline-start:1rem}.cds--form--fluid .cds--form__helper-text{display:none}.cds--form--fluid .cds--text-input{padding:2rem 1rem .8125rem;min-block-size:4rem}.cds--form--fluid .cds--text-input__divider,.cds--text-input__divider{display:none}.cds--form--fluid .cds--text-input--invalid,.cds--form--fluid .cds--text-input--warning{border-block-end:none}.cds--form--fluid .cds--text-input--invalid+.cds--text-input__divider,.cds--form--fluid .cds--text-input--warning+.cds--text-input__divider{display:block;border-style:solid;border-color:var(--cds-border-subtle);margin:0 1rem;border-block-end:none}.cds--form--fluid .cds--text-input__invalid-icon{inset-block-start:5rem}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid{outline:0}.cds--form--fluid .cds--text-input__field-wrapper--warning{border-block-end:1px solid var(--cds-border-strong)}.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning:focus,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:focus{outline:0}.cds--text-input-wrapper.cds--text-input-wrapper--inline{flex-flow:row wrap}.cds--text-input-wrapper .cds--label--inline{flex:1;margin:.8125rem 0 0 0;overflow-wrap:break-word;word-break:break-word}.cds--text-input-wrapper .cds--label--inline--sm{margin-block-start:.5625rem}.cds--text-input-wrapper .cds--label--inline--lg{margin-block-start:1.0625rem}.cds--text-input__label-helper-wrapper{flex:2;flex-direction:column;margin-inline-end:1.5rem;max-inline-size:8rem;overflow-wrap:break-word}.cds--text-input-wrapper .cds--form__helper-text--inline{margin-block-start:.125rem}.cds--text-input__field-outer-wrapper{display:flex;flex:1 1 auto;flex-direction:column;align-items:flex-start;inline-size:100%}.cds--text-input__field-outer-wrapper--inline{flex:8;flex-direction:column}.cds--text-input-wrapper--inline .cds--form-requirement{display:block;overflow:visible;font-weight:400;max-block-size:12.5rem}.cds--text-input-wrapper--inline--invalid .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input-wrapper--readonly,.cds--text-input-wrapper--readonly .cds--text-input{background:0 0;border-block-end-color:var(--cds-border-subtle)}.cds--text-input__field-wrapper .cds--slug{position:absolute;inset-block-start:50%;inset-inline-end:1rem;transform:translateY(-50%)}.cds--text-input__field-wrapper--slug .cds--text-input:not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,rgba(255,255,255,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff);padding-inline-end:2.5rem}.cds--text-input--invalid:has(~.cds--slug),.cds--text-input--warning:has(~.cds--slug){padding-inline-end:4rem}.cds--text-input--invalid~.cds--slug,.cds--text-input--warning~.cds--slug{inset-inline-end:2.5rem}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--btn.cds--btn--icon-only.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg,.cds--btn.cds--btn--icon-only.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:hover svg{fill:ButtonText}}.cds--text-input__label-wrapper{display:flex;justify-content:space-between;inline-size:100%}.cds--text-input__label-wrapper .cds--text-input__label-counter{align-self:end}:host(cds-text-input){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px;inline-size:100%;outline:0}:host(cds-text-input) ::slotted(cds-slug){position:absolute;inset-block-start:50%;inset-inline-end:1rem}:host(cds-text-input) ::slotted(cds-slug:not([revert-active])){transform:translateY(-50%)}:host(cds-text-input[show-password-visibility-toggle]) .cds--text-input{padding-inline-end:2.5rem}:host(cds-text-input[show-password-visibility-toggle])[size=sm] .cds--text-input__invalid-icon{inset-inline-end:2rem}:host(cds-text-input[show-password-visibility-toggle])[size=md] .cds--text-input__invalid-icon{inset-inline-end:2rem}:host(cds-text-input[show-password-visibility-toggle])[size=lg] .cds--text-input__invalid-icon{inset-inline-end:2rem}:host(cds-text-input[invalid]) .cds--text-input__field-wrapper--slug .cds--text-input,:host(cds-text-input[warn]) .cds--text-input__field-wrapper--slug .cds--text-input{padding-inline-end:4rem}:host(cds-text-input[invalid]) ::slotted(cds-slug),:host(cds-text-input[warn]) ::slotted(cds-slug){inset-inline-end:2.5rem}",
]);
let w,
  z,
  k,
  $,
  q,
  S,
  T,
  M,
  B = (e) => e;
t(
  [l(`${c}-text-input`)],
  function (t, s) {
    return {
      F: class extends s {
        constructor(...e) {
          super(...e), t(this);
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
            (this._hasSlug = Boolean(t)),
              t[0].setAttribute('size', 'mini'),
              this.requestUpdate();
          },
        },
        {
          kind: 'field',
          decorators: [n('input')],
          key: '_input',
          value: void 0,
        },
        { kind: 'field', key: '_value', value: () => '' },
        {
          kind: 'method',
          key: '_handleInput',
          value: function ({ target: e }) {
            this.value = e.value;
          },
        },
        {
          kind: 'method',
          key: '_handleFormdata',
          value: function (e) {
            const { formData: t } = e,
              { disabled: i, name: s, value: d } = this;
            i || t.append(s, d);
          },
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'autocomplete',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean })],
          key: 'autofocus',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, reflect: !0 })],
          key: 'disabled',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [
            d({ type: Boolean, attribute: 'enable-counter', reflect: !0 }),
          ],
          key: 'enableCounter',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'helper-text' })],
          key: 'helperText',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, reflect: !0 })],
          key: 'invalid',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'invalid-text' })],
          key: 'invalidText',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [
            d({ type: Number, attribute: 'max-count', reflect: !0 }),
          ],
          key: 'maxCount',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, reflect: !0 })],
          key: 'warn',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'warn-text' })],
          key: 'warnText',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [
            d({ attribute: 'hide-label', type: Boolean, reflect: !0 }),
          ],
          key: 'hideLabel',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'label' })],
          key: 'label',
          value: () => '',
        },
        { kind: 'field', decorators: [d()], key: 'name', value: () => '' },
        { kind: 'field', decorators: [d()], key: 'pattern', value: () => '' },
        {
          kind: 'field',
          decorators: [d({ reflect: !0 })],
          key: 'placeholder',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, reflect: !0 })],
          key: 'readonly',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, reflect: !0 })],
          key: 'required',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'required-validity-message' })],
          key: 'requiredValidityMessage',
          value: () => 'Please fill out this field.',
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'hidePasswordLabel',
          value: () => 'Hide password',
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'showPasswordLabel',
          value: () => 'Show password',
        },
        {
          kind: 'field',
          decorators: [
            d({
              type: Boolean,
              attribute: 'show-password-visibility-toggle',
              reflect: !0,
            }),
          ],
          key: 'showPasswordVisibilityToggle',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d({ reflect: !0 })],
          key: 'size',
          value: () => b.MEDIUM,
        },
        {
          kind: 'field',
          decorators: [d({ type: Boolean, reflect: !0 })],
          key: 'inline',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'tooltipAlignment',
          value: () => g.CENTER,
        },
        {
          kind: 'field',
          decorators: [d()],
          key: 'tooltipDirection',
          value: () => x.BOTTOM,
        },
        {
          kind: 'field',
          decorators: [d({ reflect: !0 })],
          key: 'type',
          value: () => _.TEXT,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'validity-message' })],
          key: 'validityMessage',
          value: () => '',
        },
        {
          kind: 'get',
          decorators: [d({ reflect: !0 })],
          key: 'value',
          value: function () {
            return this._input ? this._input.value : this._value;
          },
        },
        {
          kind: 'set',
          key: 'value',
          value: function (e) {
            const t = this._value;
            (this._value = e),
              this.requestUpdate('value', t),
              this._input && (this._input.value = e);
          },
        },
        {
          kind: 'method',
          key: 'handleTogglePasswordVisibility',
          value: function () {
            this.type = this.type === _.PASSWORD ? _.TEXT : _.PASSWORD;
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const {
                disabled: e,
                enableCounter: t,
                helperText: s,
                hideLabel: d,
                inline: r,
                invalid: n,
                invalidText: l,
                label: u,
                maxCount: y,
                readonly: b,
                required: g,
                size: x,
                type: h,
                warn: R,
                warnText: C,
                value: P,
                _handleInput: L,
                _hasSlug: A,
                _handleSlotChange: E,
              } = this,
              j = v({ class: `${c}--text-input__invalid-icon` }),
              F = f({
                class: `${c}--text-input__invalid-icon ${c}--text-input__invalid-icon--warning`,
              }),
              X = {
                disabled: !b && e,
                invalid: !b && n,
                warn: !b && !n && R,
                'slot-name': '',
                'slot-text': '',
                icon: null,
              };
            X.invalid
              ? ((X.icon = j),
                (X['slot-name'] = 'invalid-text'),
                (X['slot-text'] = l))
              : X.warn &&
                ((X.icon = F),
                (X['slot-name'] = 'warn-text'),
                (X['slot-text'] = C));
            const I = o({
                [`${c}--label`]: !0,
                [`${c}--text-input__label-counter`]: !0,
                [`${c}--label--disabled`]: e,
              }),
              D = o({
                [`${c}--form-item`]: !0,
                [`${c}--text-input-wrapper`]: !0,
                [`${c}--text-input-wrapper--inline`]: r,
                [`${c}--text-input-wrapper--readonly`]: b,
                [`${c}--text-input-wrapper--inline--invalid`]: r && X.invalid,
              }),
              O = o({
                [`${c}--text-input`]: !0,
                [`${c}--text-input--invalid`]: X.invalid,
                [`${c}--text-input--warning`]: X.warn,
                [`${c}--text-input--${x}`]: x,
                [`${c}--layout--size-${x}`]: x,
                [`${c}--password-input`]: h === _.PASSWORD,
              }),
              N = o({
                [`${c}--text-input__field-outer-wrapper`]: !0,
                [`${c}--text-input__field-outer-wrapper--inline`]: r,
              }),
              V = o({
                [`${c}--text-input__field-wrapper`]: !0,
                [`${c}--text-input__field-wrapper--warning`]: X.warn,
                [`${c}--text-input__field-wrapper--slug`]: A,
              }),
              W = o({
                [`${c}--label`]: !0,
                [`${c}--visually-hidden`]: d,
                [`${c}--label--disabled`]: X.disabled,
              }),
              U = o({
                [`${c}--form__helper-text`]: !0,
                [`${c}--form__helper-text--disabled`]: X.disabled,
              }),
              Y = h !== _.PASSWORD,
              G = Y
                ? (({ children: e, ...t } = {}) =>
                    i`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${p(
                      t
                    )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${e}${e}<path d="M2.6,11.3l0.7-0.7C2.6,9.8,1.9,9,1.5,8c1-2.5,3.8-4.5,6.5-4.5c0.7,0,1.4,0.1,2,0.4l0.8-0.8C9.9,2.7,9,2.5,8,2.5	C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3C1,9.3,1.7,10.4,2.6,11.3z"></path><path d="M6 7.9c.1-1 .9-1.8 1.8-1.8l.9-.9C7.2 4.7 5.5 5.6 5.1 7.2 5 7.7 5 8.3 5.1 8.8L6 7.9zM15.5 7.8c-.6-1.5-1.6-2.8-2.9-3.7L15 1.7 14.3 1 1 14.3 1.7 15l2.6-2.6c1.1.7 2.4 1 3.7 1.1 3.3-.1 6.3-2.2 7.5-5.3C15.5 8.1 15.5 7.9 15.5 7.8zM10 8c0 1.1-.9 2-2 2-.3 0-.7-.1-1-.3L9.7 7C9.9 7.3 10 7.6 10 8zM8 12.5c-1 0-2.1-.3-3-.8l1.3-1.3c1.4.9 3.2.6 4.2-.8.7-1 .7-2.4 0-3.4l1.4-1.4c1.1.8 2 1.9 2.6 3.2C13.4 10.5 10.6 12.5 8 12.5z"></path></svg>`)(
                    { class: `${c}--icon-visibility-off` }
                  )
                : (({ children: e, ...t } = {}) =>
                    i`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${p(
                      t
                    )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${e}${e}<path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path></svg>`)(
                    /**
                     * @license
                     *
                     * Copyright IBM Corp. 2019, 2020
                     *
                     * This source code is licensed under the Apache-2.0 license found in the
                     * LICENSE file in the root directory of this source tree.
                     */ { class: `${c}--icon-visibility-on` }
                  ),
              H = o({
                [`${c}--text-input--password__visibility__toggle`]: !0,
                [`${c}--btn`]: !0,
                [`${c}--btn--icon-only`]: !0,
                [`${c}--tooltip__trigger`]: !0,
                [`${c}--tooltip--a11y`]: !0,
                [`${c}--btn--disabled`]: X.disabled,
                [`${c}--tooltip--${this.tooltipDirection}`]:
                  this.tooltipDirection,
                [`${c}--tooltip--align-${this.tooltipAlignment}`]:
                  this.tooltipAlignment,
              }),
              J = a(
                w ||
                  (w = B`
      <span class="${0}--assistive-text">
        ${0}
      </span>
    `),
                c,
                Y ? this.hidePasswordLabel : this.showPasswordLabel
              ),
              K = null == P ? void 0 : P.length,
              Q =
                t && y
                  ? a(
                      k ||
                        (k = B` <label class="${0}">
            <slot name="label-text">${0}/${0}</slot>
          </label>`),
                      I,
                      K,
                      y
                    )
                  : null,
              Z =
                u && !d
                  ? a($ || ($ = B`<label class="${0}"> ${0} </label>`), W, u)
                  : null,
              ee = a(
                q ||
                  (q = B`<div class="${0}--text-input__label-wrapper">
      ${0} ${0}
    </div>`),
                c,
                Z,
                Q
              ),
              te = s
                ? a(
                    S ||
                      (S = B`<div
          class="${0}"
          id="helper-text"
          ?hidden="${0}">
          <slot name="helper-text"> ${0} </slot>
        </div>`),
                    U,
                    X.invalid || X.warn,
                    s
                  )
                : null;
            return a(
              T ||
                (T = B`
      <div class="${0}">
        ${0}
        <div class="${0}">
          <div class="${0}" ?data-invalid="${0}">
            ${0}
            <input
              autocomplete="${0}"
              ?autofocus="${0}"
              class="${0}"
              ?data-invalid="${0}"
              ?disabled="${0}"
              aria-describedby="helper-text"
              id="input"
              name="${0}"
              pattern="${0}"
              placeholder="${0}"
              ?readonly="${0}"
              ?required="${0}"
              type="${0}"
              .value="${0}"
              maxlength="${0}"
              @input="${0}" />
            <slot name="slug" @slotchange="${0}"></slot>
            ${0}
          </div>
          ${0}
          <div
            class="${0}--form-requirement"
            ?hidden="${0}">
            <slot name="${0}">
              ${0}
            </slot>
          </div>
        </div>
      </div>
    `),
              D,
              r
                ? a(
                    M ||
                      (M = B`<div class="${0}--text-input__label-helper-wrapper">
              ${0} ${0}
            </div>`),
                    c,
                    ee,
                    te
                  )
                : ee,
              N,
              V,
              n,
              X.icon,
              this.autocomplete,
              this.autofocus,
              O,
              n,
              e,
              m(this.name),
              m(this.pattern),
              m(this.placeholder),
              b,
              g,
              m(h),
              this._value,
              m(y),
              L,
              E,
              !this.showPasswordVisibilityToggle ||
                (h !== _.PASSWORD && h !== _.TEXT)
                ? null
                : (() =>
                    a(
                      z ||
                        (z = B`
      <button
        type="button"
        class="${0}"
        ?disabled="${0}"
        @click="${0}">
        ${0}
        ${0}
      </button>
    `),
                      H,
                      X.disabled,
                      this.handleTogglePasswordVisibility,
                      X.disabled ? null : J,
                      G
                    ))(),
              r ? null : te,
              c,
              !X.invalid && !X.warn,
              X['slot-name'],
              X['slot-text']
            );
          },
        },
        {
          kind: 'method',
          key: 'updated',
          value: function () {
            var e, t;
            null === (e = this.shadowRoot) ||
              void 0 === e ||
              null === (e = e.querySelector("slot[name='slug']")) ||
              void 0 === e ||
              e.classList.toggle(
                `${c}--slug--revert`,
                null === (t = this.querySelector(`${c}-slug`)) || void 0 === t
                  ? void 0
                  : t.hasAttribute('revert-active')
              );
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'slugItem',
          value: function () {
            return `${c}-slug`;
          },
        },
        {
          kind: 'field',
          static: !0,
          key: 'shadowRootOptions',
          value: () =>
            e(e({}, r.shadowRootOptions), {}, { delegatesFocus: !0 }),
        },
        { kind: 'field', static: !0, key: 'styles', value: () => h },
      ],
    };
  },
  y(u(r))
);
export { b as I };
