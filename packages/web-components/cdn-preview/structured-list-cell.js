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
  i as t,
  x as e,
  s as r,
  a as s,
  n as c,
  b as d,
} from './query-assigned-elements.js';
import { S as i } from './stable-selector.js';
import { c as l } from './carbon-element.js';
import { _ as o } from './decorate.js';
import { _ as n, a as u } from './get.js';
import { p as a } from './settings.js';
import { i as h } from './query.js';
import { l as p } from './if-defined.js';
import { s as m } from './spread.js';
import { H as f } from './host-listener.js';
import { H as g } from './host-listener2.js';
import { a as y } from './objectSpread2.js';
import { s as v } from './202.js';
var w = t([
  '.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--structured-list--selection .cds--structured-list-cell,.cds--structured-list--selection .cds--structured-list-group th,.cds--structured-list--selection .cds--structured-list-header-cell,.cds--structured-list--selection .cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-th,.cds--structured-list--selection :host(c4d-structured-list-cell),.cds--structured-list--selection :host(c4d-structured-list-header-cell),.cds--structured-list-group .cds--structured-list--selection th,:host(c4d-structured-list-group) .cds--structured-list--selection th{padding-inline-end:1rem;padding-inline-start:1rem}.cds--structured-list--selection .cds--structured-list-cell:first-child,.cds--structured-list--selection .cds--structured-list-group th:first-child,.cds--structured-list--selection .cds--structured-list-header-cell:first-child,.cds--structured-list--selection .cds--structured-list-td:first-child,.cds--structured-list--selection .cds--structured-list-th:first-child,.cds--structured-list-group .cds--structured-list--selection th:first-child,:host(c4d-structured-list-group) .cds--structured-list--selection th:first-child{padding-inline-end:1rem;padding-inline-start:1rem}.cds--structured-list-row--focused-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--structured-list-row--focused-within{outline-style:dotted}}.cds--structured-list{background-color:var(--cds-layer) transparent;border:0;border-collapse:collapse;border-spacing:0;box-sizing:border-box;display:table;font-family:inherit;font-size:100%;inline-size:100%;margin:0;overflow-x:auto;padding:0;vertical-align:baseline}.cds--structured-list *,.cds--structured-list :after,.cds--structured-list :before{box-sizing:inherit}.cds--structured-list-group .cds--structured-list.cds--structured-list--condensed th,.cds--structured-list.cds--structured-list--condensed .cds--structured-list-cell,.cds--structured-list.cds--structured-list--condensed .cds--structured-list-group th,.cds--structured-list.cds--structured-list--condensed .cds--structured-list-header-cell,.cds--structured-list.cds--structured-list--condensed .cds--structured-list-td,.cds--structured-list.cds--structured-list--condensed .cds--structured-list-th,.cds--structured-list.cds--structured-list--condensed :host(c4d-structured-list-cell),.cds--structured-list.cds--structured-list--condensed :host(c4d-structured-list-header-cell),:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--condensed th{padding:.5rem}.cds--structured-list .cds--structured-list-group tr .cds--structured-list-cell:first-of-type,.cds--structured-list .cds--structured-list-group tr .cds--structured-list-header-cell:first-of-type,.cds--structured-list .cds--structured-list-group tr .cds--structured-list-td:first-of-type,.cds--structured-list .cds--structured-list-group tr .cds--structured-list-th:first-of-type,.cds--structured-list .cds--structured-list-group tr th:first-of-type,.cds--structured-list .cds--structured-list-row .cds--structured-list-cell:first-of-type,.cds--structured-list .cds--structured-list-row .cds--structured-list-group th:first-of-type,.cds--structured-list .cds--structured-list-row .cds--structured-list-header-cell:first-of-type,.cds--structured-list .cds--structured-list-row .cds--structured-list-td:first-of-type,.cds--structured-list .cds--structured-list-row .cds--structured-list-th:first-of-type,.cds--structured-list-group .cds--structured-list .cds--structured-list-row th:first-of-type,.cds--structured-list-group .cds--structured-list tr .cds--structured-list-cell:first-of-type,.cds--structured-list-group .cds--structured-list tr .cds--structured-list-header-cell:first-of-type,.cds--structured-list-group .cds--structured-list tr .cds--structured-list-td:first-of-type,.cds--structured-list-group .cds--structured-list tr .cds--structured-list-th:first-of-type,.cds--structured-list-group .cds--structured-list tr th:first-of-type,:host(c4d-structured-list-group) .cds--structured-list .cds--structured-list-row th:first-of-type,:host(c4d-structured-list-group) .cds--structured-list tr .cds--structured-list-cell:first-of-type,:host(c4d-structured-list-group) .cds--structured-list tr .cds--structured-list-header-cell:first-of-type,:host(c4d-structured-list-group) .cds--structured-list tr .cds--structured-list-td:first-of-type,:host(c4d-structured-list-group) .cds--structured-list tr .cds--structured-list-th:first-of-type,:host(c4d-structured-list-group) .cds--structured-list tr th:first-of-type{padding-inline-start:1rem}.cds--structured-list-group .cds--structured-list.cds--structured-list--flush .cds--structured-list-row th,.cds--structured-list-group .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-cell,.cds--structured-list-group .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-header-cell,.cds--structured-list-group .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-td,.cds--structured-list-group .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-th,.cds--structured-list-group .cds--structured-list.cds--structured-list--flush tr :host(c4d-structured-list-cell),.cds--structured-list-group .cds--structured-list.cds--structured-list--flush tr :host(c4d-structured-list-header-cell),.cds--structured-list-group .cds--structured-list.cds--structured-list--flush tr th,.cds--structured-list.cds--structured-list--flush .cds--structured-list-group tr .cds--structured-list-cell,.cds--structured-list.cds--structured-list--flush .cds--structured-list-group tr .cds--structured-list-header-cell,.cds--structured-list.cds--structured-list--flush .cds--structured-list-group tr .cds--structured-list-td,.cds--structured-list.cds--structured-list--flush .cds--structured-list-group tr .cds--structured-list-th,.cds--structured-list.cds--structured-list--flush .cds--structured-list-group tr :host(c4d-structured-list-cell),.cds--structured-list.cds--structured-list--flush .cds--structured-list-group tr :host(c4d-structured-list-header-cell),.cds--structured-list.cds--structured-list--flush .cds--structured-list-group tr th,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-cell,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-group th,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-header-cell,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-td,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-td:first-of-type,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-th,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-th:first-of-type,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row :host(c4d-structured-list-cell),.cds--structured-list.cds--structured-list--flush .cds--structured-list-row :host(c4d-structured-list-header-cell),:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush .cds--structured-list-row th,:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-cell,:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-header-cell,:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-td,:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush tr .cds--structured-list-th,:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush tr :host(c4d-structured-list-cell),:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush tr :host(c4d-structured-list-header-cell),:host(c4d-structured-list-group) .cds--structured-list.cds--structured-list--flush tr th{padding-inline-end:1rem;padding-inline-start:0}.cds--structured-list-group tr,.cds--structured-list-row,:host(c4d-structured-list-group) tr{border-block-start:1px solid var(--cds-border-subtle);display:table-row;transition:background-color .11s cubic-bezier(.2,0,.38,.9)}.cds--structured-list-group .cds--structured-list-tbody tr:last-child,.cds--structured-list-tbody .cds--structured-list-group tr:last-child,.cds--structured-list-tbody .cds--structured-list-row:last-child,:host(c4d-structured-list-group) .cds--structured-list-tbody tr:last-child{border-block-end:1px solid var(--cds-border-subtle)}.cds--structured-list-row--header-row{border:none}.cds--structured-list--selection .cds--structured-list-group tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected),.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected),.cds--structured-list-group .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected),:host(c4d-structured-list-group) .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected){background-color:var(--cds-layer-hover);border-color:var(--cds-layer-hover);cursor:pointer}.cds--structured-list--selection .cds--structured-list-group .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+tr,.cds--structured-list--selection .cds--structured-list-group tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+.cds--structured-list-row,.cds--structured-list--selection .cds--structured-list-group tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+tr,.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+.cds--structured-list-row,.cds--structured-list-group .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+tr,.cds--structured-list-group .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+.cds--structured-list-row,.cds--structured-list-group .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+tr,:host(c4d-structured-list-group) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+tr,:host(c4d-structured-list-group) .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+.cds--structured-list-row,:host(c4d-structured-list-group) .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+tr{border-color:var(--cds-layer-hover)}.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected,.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected,:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected{background-color:var(--cds-layer-selected);border-color:var(--cds-layer-selected)}.cds--structured-list--selection .cds--structured-list-group .cds--structured-list-row--selected+tr,.cds--structured-list--selection .cds--structured-list-row--selected+.cds--structured-list-row,.cds--structured-list-group .cds--structured-list--selection .cds--structured-list-row--selected+tr,:host(c4d-structured-list-group) .cds--structured-list--selection .cds--structured-list-row--selected+tr{border-color:var(--cds-layer-selected)}.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected .cds--structured-list-cell,.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected .cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected :host(c4d-structured-list-cell),.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected th,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected .cds--structured-list-cell,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected .cds--structured-list-group th,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected .cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected :host(c4d-structured-list-cell),.cds--structured-list-group .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected th,.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected .cds--structured-list-cell,.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected .cds--structured-list-td,.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected :host(c4d-structured-list-cell),.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected th,:host(c4d-structured-list-group) .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected th,:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected .cds--structured-list-cell,:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected .cds--structured-list-td,:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected :host(c4d-structured-list-cell),:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected th{color:var(--cds-text-primary,#161616)}.cds--structured-list-group tr.cds--structured-list-row--header-row,.cds--structured-list-row.cds--structured-list-row--header-row,:host(c4d-structured-list-group) tr.cds--structured-list-row--header-row{cursor:inherit}.cds--structured-list--selection .cds--structured-list-group .cds--structured-list-row.cds--structured-list-row--selected>th,.cds--structured-list--selection .cds--structured-list-group .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>th,.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected>.cds--structured-list-cell,.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected>.cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected>:host(c4d-structured-list-cell),.cds--structured-list--selection .cds--structured-list-group tr.cds--structured-list-row--selected>th,.cds--structured-list--selection .cds--structured-list-group tr:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-cell,.cds--structured-list--selection .cds--structured-list-group tr:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-group tr:hover:not(.cds--structured-list-row--header-row)>:host(c4d-structured-list-cell),.cds--structured-list--selection .cds--structured-list-group tr:hover:not(.cds--structured-list-row--header-row)>th,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>.cds--structured-list-cell,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>.cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>:host(c4d-structured-list-cell),.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-cell,.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>:host(c4d-structured-list-cell),.cds--structured-list-group .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>th,.cds--structured-list-group .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>th,.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected>.cds--structured-list-cell,.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected>.cds--structured-list-td,.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected>:host(c4d-structured-list-cell),.cds--structured-list-group .cds--structured-list--selection tr.cds--structured-list-row--selected>th,.cds--structured-list-group .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-cell,.cds--structured-list-group .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-td,.cds--structured-list-group .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>:host(c4d-structured-list-cell),.cds--structured-list-group .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>th,:host(c4d-structured-list-group) .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>th,:host(c4d-structured-list-group) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>th,:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected>.cds--structured-list-cell,:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected>.cds--structured-list-td,:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected>:host(c4d-structured-list-cell),:host(c4d-structured-list-group) .cds--structured-list--selection tr.cds--structured-list-row--selected>th,:host(c4d-structured-list-group) .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-cell,:host(c4d-structured-list-group) .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-td,:host(c4d-structured-list-group) .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>:host(c4d-structured-list-cell),:host(c4d-structured-list-group) .cds--structured-list--selection tr:hover:not(.cds--structured-list-row--header-row)>th{color:var(--cds-text-primary,#161616)}.cds--structured-list-thead{display:table-header-group;vertical-align:middle}.cds--structured-list-header-cell,.cds--structured-list-th,:host(c4d-structured-list-header-cell){block-size:2.5rem;border:0;box-sizing:border-box;color:var(--cds-text-primary,#161616);display:table-cell;font-family:inherit;font-size:100%;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);font-weight:600;letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);margin:0;padding:1rem .5rem .5rem;text-align:start;text-transform:none;vertical-align:baseline;vertical-align:top}.cds--structured-list-header-cell *,.cds--structured-list-header-cell :after,.cds--structured-list-header-cell :before,.cds--structured-list-th *,.cds--structured-list-th :after,.cds--structured-list-th :before,:host(c4d-structured-list-header-cell) *,:host(c4d-structured-list-header-cell) :after,:host(c4d-structured-list-header-cell) :before{box-sizing:inherit}.cds--structured-list-tbody{display:table-row-group;vertical-align:middle}.cds--structured-list-cell,.cds--structured-list-group th,.cds--structured-list-td,:host(c4d-structured-list-cell),:host(c4d-structured-list-group) th{border:0;box-sizing:border-box;color:var(--cds-text-secondary,#525252);display:table-cell;font-family:inherit;font-size:100%;font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);margin:0;max-inline-size:36rem;padding:1rem .5rem 1.5rem;position:relative;transition:color .11s cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.cds--structured-list-cell *,.cds--structured-list-cell :after,.cds--structured-list-cell :before,.cds--structured-list-group th *,.cds--structured-list-group th :after,.cds--structured-list-group th :before,.cds--structured-list-td *,.cds--structured-list-td :after,.cds--structured-list-td :before,:host(c4d-structured-list-cell) *,:host(c4d-structured-list-cell) :after,:host(c4d-structured-list-cell) :before,:host(c4d-structured-list-group) th *,:host(c4d-structured-list-group) th :after,:host(c4d-structured-list-group) th :before{box-sizing:inherit}.cds--structured-list-content--nowrap{white-space:nowrap}.cds--structured-list-group .cds--structured-list-input+th,.cds--structured-list-input+.cds--structured-list-cell,.cds--structured-list-input+.cds--structured-list-td,.cds--structured-list-input+:host(c4d-structured-list-cell),:host(c4d-structured-list-group) .cds--structured-list-input+th{text-align:end}.cds--structured-list-svg{display:inline-block;margin-block-start:.125rem;transition:all .11s cubic-bezier(.2,0,.38,.9);vertical-align:top}.cds--structured-list-group .cds--structured-list-input:checked+th .cds--structured-list-svg,.cds--structured-list-group .cds--structured-list-input:checked+tr .cds--structured-list-svg,.cds--structured-list-input:checked+.cds--structured-list-cell .cds--structured-list-svg,.cds--structured-list-input:checked+.cds--structured-list-row .cds--structured-list-svg,.cds--structured-list-input:checked+.cds--structured-list-td .cds--structured-list-svg,.cds--structured-list-input:checked+:host(c4d-structured-list-cell) .cds--structured-list-svg,:host(c4d-structured-list-group) .cds--structured-list-input:checked+th .cds--structured-list-svg,:host(c4d-structured-list-group) .cds--structured-list-input:checked+tr .cds--structured-list-svg{fill:var(--cds-icon-primary,#161616)}.cds--structured-list-svg{fill:transparent}.cds--structured-list--selection .cds--structured-list-cell:last-child,.cds--structured-list--selection .cds--structured-list-group th:last-child,.cds--structured-list--selection .cds--structured-list-td:last-child,.cds--structured-list-group .cds--structured-list--selection th:last-child,:host(c4d-structured-list-group) .cds--structured-list--selection th:last-child{inline-size:2rem;padding-inline-start:0}.cds--structured-list.cds--skeleton .cds--structured-list-header-cell:first-child,.cds--structured-list.cds--skeleton .cds--structured-list-th:first-child{inline-size:8%}.cds--structured-list.cds--skeleton .cds--structured-list-header-cell:nth-child(3n+2),.cds--structured-list.cds--skeleton .cds--structured-list-th:nth-child(3n+2){inline-size:30%}.cds--structured-list.cds--skeleton .cds--structured-list-header-cell:nth-child(3n+3),.cds--structured-list.cds--skeleton .cds--structured-list-th:nth-child(3n+3){inline-size:15%}.cds--structured-list.cds--skeleton span{background:var(--cds-skeleton-background,#e8e8e8);block-size:1rem;border:none;box-shadow:none;display:block;inline-size:75%;padding:0;pointer-events:none;position:relative}.cds--structured-list.cds--skeleton span:active,.cds--structured-list.cds--skeleton span:focus,.cds--structured-list.cds--skeleton span:hover{border:none;cursor:default;outline:none}.cds--structured-list.cds--skeleton span:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--structured-list.cds--skeleton span:before{animation:none}}.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-header-cell:first-child,.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-th:first-child{inline-size:5%}.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-header-cell:first-child span,.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-th:first-child span{display:none}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--structured-list-group .cds--structured-list-input:checked+th .cds--structured-list-svg,.cds--structured-list-input:checked+.cds--structured-list-cell .cds--structured-list-svg,.cds--structured-list-input:checked+.cds--structured-list-td .cds--structured-list-svg,.cds--structured-list-input:checked+:host(c4d-structured-list-cell) .cds--structured-list-svg,:host(c4d-structured-list-group) .cds--structured-list-input:checked+th .cds--structured-list-svg{fill:ButtonText}}.cds--structured-list__icon{margin-block-start:.125rem;vertical-align:top}.cds--structured-list--selection .cds--structured-list-cell:first-child:has(.cds--structured-list__icon),.cds--structured-list--selection .cds--structured-list-group th:first-child:has(.cds--structured-list__icon),.cds--structured-list--selection .cds--structured-list-td:first-child:has(.cds--structured-list__icon),.cds--structured-list-group .cds--structured-list--selection th:first-child:has(.cds--structured-list__icon),:host(c4d-structured-list-group) .cds--structured-list--selection th:first-child:has(.cds--structured-list__icon){inline-size:2rem;padding-inline-end:0}:root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:root{--cds-grid-columns:16}}@media (min-width:99rem){:root{--cds-grid-margin:1.5rem}}.cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start:0}.cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}.cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}.cds--subgrid--narrow{--cds-grid-gutter-start:0;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}.cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}.cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}.cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--md\\:col-span-0{display:none}.cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}.cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}.cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--lg\\:col-span-0{display:none}.cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){.cds--xlg\\:col-span-0{display:none}.cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){.cds--max\\:col-span-0{display:none}.cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){.cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){.cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}.cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){.cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){.cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}.cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}.cds--structured-list-header-row,:host(c4d-structured-list-header-row){border-block-end:none}.cds--structured-list-header-cell,:host(c4d-structured-list-header-cell){border-block-end:1px solid var(--cds-layer-accent-01,#e0e0e0);padding-block-end:1rem;padding-inline:1rem}.cds--structured-list-group,:host(c4d-structured-list-group){display:contents}.cds--structured-list-group tr,:host(c4d-structured-list-group) tr{background-color:var(--cds-layer-accent-01,#e0e0e0);border-block-end:1px solid var(--cds-layer-accent-01,#e0e0e0);color:var(--cds-text-primary,#161616)}@media (max-width:65.98rem){.cds--structured-list-group tr,:host(c4d-structured-list-group) tr{box-shadow:50vw 0 var(--cds-layer-accent-01,#e0e0e0),100vw 0 var(--cds-layer-accent-01,#e0e0e0),150vw 0 var(--cds-layer-accent-01,#e0e0e0),200vw 0 var(--cds-layer-accent-01,#e0e0e0),250vw 0 var(--cds-layer-accent-01,#e0e0e0),300vw 0 var(--cds-layer-accent-01,#e0e0e0),350vw 0 var(--cds-layer-accent-01,#e0e0e0),400vw 0 var(--cds-layer-accent-01,#e0e0e0),450vw 0 var(--cds-layer-accent-01,#e0e0e0),500vw 0 var(--cds-layer-accent-01,#e0e0e0),550vw 0 var(--cds-layer-accent-01,#e0e0e0),600vw 0 var(--cds-layer-accent-01,#e0e0e0),650vw 0 var(--cds-layer-accent-01,#e0e0e0),700vw 0 var(--cds-layer-accent-01,#e0e0e0),750vw 0 var(--cds-layer-accent-01,#e0e0e0),800vw 0 var(--cds-layer-accent-01,#e0e0e0),850vw 0 var(--cds-layer-accent-01,#e0e0e0),900vw 0 var(--cds-layer-accent-01,#e0e0e0),950vw 0 var(--cds-layer-accent-01,#e0e0e0),1000vw 0 var(--cds-layer-accent-01,#e0e0e0)}}.cds--structured-list-group th,:host(c4d-structured-list-group) th{color:var(--cds-text-primary,#161616);font-weight:700;max-inline-size:100%;padding-inline:1rem;text-align:start}.cds--structured-list-cell,:host(c4d-structured-list-cell){border-block-end:1px solid var(--cds-layer-accent-01,#e0e0e0);padding-inline:1rem}.cds--structured-list-all-rows,:host(c4d-structured-list-group) tr,:host(c4d-structured-list-header-row),:host(c4d-structured-list-row){--max-cols:4;--max-cols:5;display:flex;flex-wrap:wrap;flex-wrap:nowrap;margin-inline:-1rem}@media (min-width:42rem){.cds--structured-list-all-rows,:host(c4d-structured-list-group) tr,:host(c4d-structured-list-header-row),:host(c4d-structured-list-row){--max-cols:8}}@media (min-width:66rem){.cds--structured-list-all-rows,:host(c4d-structured-list-group) tr,:host(c4d-structured-list-header-row),:host(c4d-structured-list-row){--max-cols:16}}.cds--structured-list-all-rows ::slotted(:first-child),:host(c4d-structured-list-group) tr ::slotted(:first-child),:host(c4d-structured-list-header-row) ::slotted(:first-child),:host(c4d-structured-list-row) ::slotted(:first-child){--cols:var(--col-span-1,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:first-child),:host(c4d-structured-list-group) tr ::slotted(:first-child),:host(c4d-structured-list-header-row) ::slotted(:first-child),:host(c4d-structured-list-row) ::slotted(:first-child){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:first-child),:host(c4d-structured-list-group) tr ::slotted(:first-child),:host(c4d-structured-list-header-row) ::slotted(:first-child),:host(c4d-structured-list-row) ::slotted(:first-child){--cols:var(\n      --col-span-md-1,var(--col-span-1,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:first-child),:host(c4d-structured-list-group) tr ::slotted(:first-child),:host(c4d-structured-list-header-row) ::slotted(:first-child),:host(c4d-structured-list-row) ::slotted(:first-child){--cols:var(\n      --col-span-lg-1,var(\n        --col-span-md-1,var(--col-span-1,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:nth-child(2)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(2)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(2)),:host(c4d-structured-list-row) ::slotted(:nth-child(2)){--cols:var(--col-span-2,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:nth-child(2)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(2)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(2)),:host(c4d-structured-list-row) ::slotted(:nth-child(2)){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:nth-child(2)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(2)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(2)),:host(c4d-structured-list-row) ::slotted(:nth-child(2)){--cols:var(\n      --col-span-md-2,var(--col-span-2,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:nth-child(2)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(2)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(2)),:host(c4d-structured-list-row) ::slotted(:nth-child(2)){--cols:var(\n      --col-span-lg-2,var(\n        --col-span-md-2,var(--col-span-2,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:nth-child(3)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(3)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(3)),:host(c4d-structured-list-row) ::slotted(:nth-child(3)){--cols:var(--col-span-3,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:nth-child(3)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(3)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(3)),:host(c4d-structured-list-row) ::slotted(:nth-child(3)){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:nth-child(3)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(3)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(3)),:host(c4d-structured-list-row) ::slotted(:nth-child(3)){--cols:var(\n      --col-span-md-3,var(--col-span-3,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:nth-child(3)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(3)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(3)),:host(c4d-structured-list-row) ::slotted(:nth-child(3)){--cols:var(\n      --col-span-lg-3,var(\n        --col-span-md-3,var(--col-span-3,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:nth-child(4)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(4)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(4)),:host(c4d-structured-list-row) ::slotted(:nth-child(4)){--cols:var(--col-span-4,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:nth-child(4)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(4)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(4)),:host(c4d-structured-list-row) ::slotted(:nth-child(4)){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:nth-child(4)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(4)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(4)),:host(c4d-structured-list-row) ::slotted(:nth-child(4)){--cols:var(\n      --col-span-md-4,var(--col-span-4,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:nth-child(4)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(4)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(4)),:host(c4d-structured-list-row) ::slotted(:nth-child(4)){--cols:var(\n      --col-span-lg-4,var(\n        --col-span-md-4,var(--col-span-4,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:nth-child(5)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(5)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(5)),:host(c4d-structured-list-row) ::slotted(:nth-child(5)){--cols:var(--col-span-5,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:nth-child(5)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(5)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(5)),:host(c4d-structured-list-row) ::slotted(:nth-child(5)){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:nth-child(5)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(5)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(5)),:host(c4d-structured-list-row) ::slotted(:nth-child(5)){--cols:var(\n      --col-span-md-5,var(--col-span-5,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:nth-child(5)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(5)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(5)),:host(c4d-structured-list-row) ::slotted(:nth-child(5)){--cols:var(\n      --col-span-lg-5,var(\n        --col-span-md-5,var(--col-span-5,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:nth-child(6)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(6)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(6)),:host(c4d-structured-list-row) ::slotted(:nth-child(6)){--cols:var(--col-span-6,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:nth-child(6)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(6)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(6)),:host(c4d-structured-list-row) ::slotted(:nth-child(6)){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:nth-child(6)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(6)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(6)),:host(c4d-structured-list-row) ::slotted(:nth-child(6)){--cols:var(\n      --col-span-md-6,var(--col-span-6,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:nth-child(6)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(6)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(6)),:host(c4d-structured-list-row) ::slotted(:nth-child(6)){--cols:var(\n      --col-span-lg-6,var(\n        --col-span-md-6,var(--col-span-6,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:nth-child(7)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(7)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(7)),:host(c4d-structured-list-row) ::slotted(:nth-child(7)){--cols:var(--col-span-7,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:nth-child(7)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(7)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(7)),:host(c4d-structured-list-row) ::slotted(:nth-child(7)){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:nth-child(7)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(7)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(7)),:host(c4d-structured-list-row) ::slotted(:nth-child(7)){--cols:var(\n      --col-span-md-7,var(--col-span-7,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:nth-child(7)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(7)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(7)),:host(c4d-structured-list-row) ::slotted(:nth-child(7)){--cols:var(\n      --col-span-lg-7,var(\n        --col-span-md-7,var(--col-span-7,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:nth-child(8)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(8)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(8)),:host(c4d-structured-list-row) ::slotted(:nth-child(8)){--cols:var(--col-span-8,2);--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}@media (max-width:41.98rem){.cds--structured-list-all-rows ::slotted(:nth-child(8)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(8)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(8)),:host(c4d-structured-list-row) ::slotted(:nth-child(8)){--width:calc((var(--cols)/var(--max-cols))*100% - var(--mobile-peek, 5%))}}@media (min-width:42rem){.cds--structured-list-all-rows ::slotted(:nth-child(8)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(8)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(8)),:host(c4d-structured-list-row) ::slotted(:nth-child(8)){--cols:var(\n      --col-span-md-8,var(--col-span-8,3)\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}@media (min-width:66rem){.cds--structured-list-all-rows ::slotted(:nth-child(8)),:host(c4d-structured-list-group) tr ::slotted(:nth-child(8)),:host(c4d-structured-list-header-row) ::slotted(:nth-child(8)),:host(c4d-structured-list-row) ::slotted(:nth-child(8)){--cols:var(\n      --col-span-lg-8,var(\n        --col-span-md-8,var(--col-span-8,var(--default-cols,2))\n      )\n    );--width:calc((var(--cols)/var(--max-cols))*100%);flex:0 0 var(--width);max-inline-size:var(--width)}}.cds--structured-list-all-rows ::slotted(:last-child),:host(c4d-structured-list-group) tr ::slotted(:last-child),:host(c4d-structured-list-header-row) ::slotted(:last-child),:host(c4d-structured-list-row) ::slotted(:last-child){flex-grow:1;max-inline-size:none}.cds--structured-list-all-cells,:host(c4d-structured-list-cell),:host(c4d-structured-list-group) td,:host(c4d-structured-list-header-cell){block-size:auto;display:block;flex:0 0 50%;max-inline-size:50%;scroll-snap-align:start}@media (min-width:42rem){.cds--structured-list-all-cells,:host(c4d-structured-list-cell),:host(c4d-structured-list-group) td,:host(c4d-structured-list-header-cell){display:block;flex:0 0 25%;max-inline-size:25%}}@media (min-width:66rem){.cds--structured-list-all-cells,:host(c4d-structured-list-cell),:host(c4d-structured-list-group) td,:host(c4d-structured-list-header-cell){display:block;flex:0 0 12.5%;max-inline-size:12.5%}}.c4d--structured-list,:host(c4d-structured-list){display:flex;flex-wrap:nowrap;margin-inline:-1rem;overflow-x:auto;padding-inline:1rem;position:relative;scroll-snap-type:x}.c4d--structured-list .cds--structured-list,:host(c4d-structured-list) .cds--structured-list{flex:0 0 1;margin:0}@media screen and (prefers-reduced-motion:reduce){.c4d--structured-list .overflow-indicator,:host(c4d-structured-list) .overflow-indicator{flex:0 0 1;inline-size:0;opacity:0;position:sticky;transition:none;z-index:2}.c4d--structured-list .overflow-indicator:before,:host(c4d-structured-list) .overflow-indicator:before{block-size:100%;content:"";inline-size:1.5rem;inset-block-start:0;position:absolute}.c4d--structured-list .overflow-indicator.left,:host(c4d-structured-list) .overflow-indicator.left{inset-inline-start:0;transform:translateX(-1rem)}.c4d--structured-list .overflow-indicator.left:before,:host(c4d-structured-list) .overflow-indicator.left:before{background-image:linear-gradient(90deg,var(--cds-layer-01,#f4f4f4),transparent);inset-inline-start:0}.c4d--structured-list .overflow-indicator.right,:host(c4d-structured-list) .overflow-indicator.right{inset-inline-start:100%;transform:translateX(1rem)}.c4d--structured-list .overflow-indicator.right:before,:host(c4d-structured-list) .overflow-indicator.right:before{background-image:linear-gradient(90deg,transparent,var(--cds-layer-01,#f4f4f4));inset-inline-end:0}}.c4d--structured-list .overflow-indicator,:host(c4d-structured-list) .overflow-indicator{flex:0 0 1;inline-size:0;opacity:0;position:sticky;transition:opacity .25s ease-in-out;z-index:2}.c4d--structured-list .overflow-indicator:before,:host(c4d-structured-list) .overflow-indicator:before{block-size:100%;content:"";inline-size:1.5rem;inset-block-start:0;position:absolute}.c4d--structured-list .overflow-indicator.left,:host(c4d-structured-list) .overflow-indicator.left{inset-inline-start:0;transform:translateX(-1rem)}.c4d--structured-list .overflow-indicator.left:before,:host(c4d-structured-list) .overflow-indicator.left:before{background-image:linear-gradient(90deg,var(--cds-layer-01,#f4f4f4),transparent);inset-inline-start:0}.c4d--structured-list .overflow-indicator.right,:host(c4d-structured-list) .overflow-indicator.right{inset-inline-start:100%;transform:translateX(1rem)}.c4d--structured-list .overflow-indicator.right:before,:host(c4d-structured-list) .overflow-indicator.right:before{background-image:linear-gradient(90deg,transparent,var(--cds-layer-01,#f4f4f4));inset-inline-end:0}.c4d--structured-list.overflowing-left .overflow-indicator.left,:host(c4d-structured-list.overflowing-left) .overflow-indicator.left{opacity:1}.c4d--structured-list.overflowing-right .overflow-indicator.right,:host(c4d-structured-list.overflowing-right) .overflow-indicator.right{opacity:1}.cds--structured-list-cell-tooltip-icon,:host(c4d-structured-list-cell) cds-tooltip-icon{display:inline-flex;vertical-align:sub}.cds--structured-list-cell-tooltip-icon svg,:host(c4d-structured-list-cell) cds-tooltip-icon svg{fill:var(--cds-icon-secondary,#525252);flex-shrink:0}.cds--structured-list-cell[icon][icon=checkmark] svg,:host(c4d-structured-list-cell[icon][icon=checkmark]) svg{color:var(--cds-support-success,#24a148)}.cds--structured-list-cell[icon] svg,:host(c4d-structured-list-cell[icon]) svg{margin-inline-end:.5rem}.cds--structured-list-cell-icon-text-container{display:flex}',
]);
let b,
  k,
  x = (t) => t;
function z() {
  z = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!_(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return O(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? O(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = C(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: A(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = A(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function E(t) {
  var e,
    r = C(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function P(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function _(t) {
  return t.decorators && t.decorators.length;
}
function D(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function A(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function C(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function O(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function T() {
  return (
    (T =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = S(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    T.apply(null, arguments)
  );
}
function S(t) {
  return (
    (S = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    S(t)
  );
}
const { prefix: j, stablePrefix: F } = r;
let I = (function (t, e, r, s) {
  var c = z();
  if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
  var i = e(function (t) {
      c.initializeInstanceElements(t, l.elements);
    }, r),
    l = c.decorateClass(
      (function (t) {
        for (
          var e = [],
            r = function (t) {
              return (
                'method' === t.kind &&
                t.key === d.key &&
                t.placement === d.placement
              );
            },
            s = 0;
          s < t.length;
          s++
        ) {
          var c,
            d = t[s];
          if ('method' === d.kind && (c = e.find(r)))
            if (D(d.descriptor) || D(c.descriptor)) {
              if (_(d) || _(c))
                throw new ReferenceError(
                  'Duplicated methods (' + d.key + ") can't be decorated."
                );
              c.descriptor = d.descriptor;
            } else {
              if (_(d)) {
                if (_(c))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      d.key +
                      ').'
                  );
                c.decorators = d.decorators;
              }
              P(d, c);
            }
          else e.push(d);
        }
        return e;
      })(i.d.map(E)),
      t
    );
  return (
    c.initializeClassElements(i.F, l.elements),
    c.runClassFinishers(i.F, l.finishers)
  );
})(
  [l(`${F}-structured-list`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'field',
          key: '_listMutationObserver',
          value() {
            return new MutationObserver(this._setColumnSpans.bind(this));
          },
        },
        {
          kind: 'field',
          key: '_newChildObserver',
          value() {
            return new MutationObserver(
              this._resetIntersectionObserver.bind(this)
            );
          },
        },
        {
          kind: 'field',
          key: '_scrollObserver',
          value() {
            return new IntersectionObserver(this._handleScroll.bind(this), {
              root: this,
              rootMargin: '0px',
              threshold: [0, 0.01, 0.02, 0.98, 0.99, 1],
            });
          },
        },
        {
          kind: 'method',
          key: '_resetIntersectionObserver',
          value: function () {
            this._scrollObserver.disconnect();
            const { cellSelector: t } = this.constructor;
            this.querySelectorAll(t).forEach((t) => {
              this._scrollObserver.observe(t);
            });
          },
        },
        {
          kind: 'method',
          key: '_handleScroll',
          value: function () {
            const t = this.scrollWidth - this.offsetWidth,
              e = this.scrollLeft,
              r = t - e;
            this.classList.toggle('overflowing-left', e > 10),
              this.classList.toggle('overflowing-right', r > 10);
          },
        },
        {
          kind: 'method',
          key: '_setColumnSpans',
          value: function (t) {
            t.forEach((t) => {
              const e = t.attributeName;
              null != e &&
                e.startsWith('col-span') &&
                (this.hasAttribute(e) && parseInt(this.getAttribute(e), 10)
                  ? this.style.setProperty(
                      `--${e}`,
                      parseInt(this.getAttribute(e), 10).toString()
                    )
                  : this.style.removeProperty(`--${e}`));
            });
          },
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t, e, r, c, d;
            this._newChildObserver.observe(this, {
              childList: !0,
              subtree: !0,
              attributes: !1,
            }),
              this._resetIntersectionObserver(),
              this.hasAttribute('role') || this.setAttribute('role', 'table'),
              ((t = s),
              (e = 'connectedCallback'),
              (r = this),
              (d = T(S(1 & (c = 3) ? t.prototype : t), e, r)),
              2 & c && 'function' == typeof d
                ? function (t) {
                    return d.apply(r, t);
                  }
                : d)([]),
              this._listMutationObserver.observe(this, {
                attributes: !0,
                attributeOldValue: !0,
              });
            Object.values(this.attributes)
              .filter((t) => t.name.startsWith('col-span'))
              .forEach((t) => {
                this.style.setProperty(`--${t.name}`, t.value);
              });
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return e(
              b ||
                (b = x`
      <div
        class="overflow-indicator left"
        part="overflow-indicator overflow-indicator--left"></div>
      ${0}
      <div
        class="overflow-indicator right"
        part="overflow-indicator overflow-indicator--right"></div>
    `),
              this.renderInner()
            );
          },
        },
        {
          kind: 'method',
          key: 'renderInner',
          value: function () {
            const { wrapperId: t } = this.constructor;
            return e(
              k ||
                (k = x`
      <section
        id="${0}"
        class="${0}--structured-list"
        part="section">
        <slot></slot>
      </section>
    `),
              t,
              j
            );
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'wrapperId',
          value: function () {
            return 'section';
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'cellSelector',
          value: function () {
            return `${F}-structured-list-cell, ${F}-structured-list-header-cell`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => w },
      ],
    };
  },
  i(s)
);
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $ = t([
  '@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}100%{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}100%{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}100%{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs, 1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xs, 1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs, 1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm, 2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-sm, 2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm, 2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm, 2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md, 2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-md, 2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md, 2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg, 3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-lg, 3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg, 3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg, 3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl, 4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-xl, 4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl, 4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl, 4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl, 5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context, var(--cds-layout-size-height-2xl, 5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl, 5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed, 0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-condensed, 0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed, 0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal, 1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context, var(--cds-layout-density-padding-inline-normal, 1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal, 1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal, 1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{position:absolute;overflow:hidden;padding:0;border:0;margin:-1px;block-size:1px;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}:root{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-one{--cds-layer:var(--cds-layer-01, #f4f4f4);--cds-layer-active:var(--cds-layer-active-01, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01, #a8a8a8);--cds-field:var(--cds-field-01, #f4f4f4);--cds-field-hover:var(--cds-field-hover-01, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01, #c6c6c6);--cds-border-strong:var(--cds-border-strong-01, #8d8d8d);--cds-border-tile:var(--cds-border-tile-01, #c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02, #ffffff);--cds-layer-active:var(--cds-layer-active-02, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02, #a8a8a8);--cds-field:var(--cds-field-02, #ffffff);--cds-field-hover:var(--cds-field-hover-02, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01, #c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02, #c6c6c6);--cds-border-strong:var(--cds-border-strong-02, #8d8d8d);--cds-border-tile:var(--cds-border-tile-02, #a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03, #f4f4f4);--cds-layer-active:var(--cds-layer-active-03, #c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03, #e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03, #e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03, #d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03, #e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03, #d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03, #a8a8a8);--cds-field:var(--cds-field-03, #f4f4f4);--cds-field-hover:var(--cds-field-hover-03, #e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02, #e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03, #c6c6c6);--cds-border-strong:var(--cds-border-strong-03, #8d8d8d);--cds-border-tile:var(--cds-border-tile-03, #c6c6c6)}.cds--structured-list--selection .cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-th,:host(cds-structured-list-header-row) .cds--structured-list--selection ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list--selection ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list--selection ::slotted(cds-structured-list-cell){padding-inline-end:1rem;padding-inline-start:1rem}.cds--structured-list--selection .cds--structured-list-td:first-child,.cds--structured-list--selection .cds--structured-list-th:first-child,:host(cds-structured-list-header-row) .cds--structured-list--selection :first-child::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list--selection :first-child::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list--selection :first-child::slotted(cds-structured-list-cell){padding-inline-end:1rem;padding-inline-start:1rem}.cds--structured-list-row--focused-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--structured-list-row--focused-within{outline-style:dotted}}.cds--structured-list{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:table;background-color:var(--cds-layer) transparent;border-collapse:collapse;border-spacing:0;inline-size:100%;overflow-x:auto}.cds--structured-list *,.cds--structured-list ::after,.cds--structured-list ::before{box-sizing:inherit}.cds--structured-list.cds--structured-list--condensed .cds--structured-list-td,.cds--structured-list.cds--structured-list--condensed .cds--structured-list-th,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--condensed ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--condensed ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list.cds--structured-list--condensed ::slotted(cds-structured-list-cell){padding:.5rem}.cds--structured-list .cds--structured-list-row .cds--structured-list-td:first-of-type,.cds--structured-list .cds--structured-list-row .cds--structured-list-th:first-of-type,:host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-row) .cds--structured-list-td:first-of-type,:host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-row) .cds--structured-list-th:first-of-type,:host(cds-structured-list-body):host(cds-structured-list-header-row) .cds--structured-list ::slotted(cds-structured-list-row) :first-of-type::slotted(cds-structured-list-header-cell),:host(cds-structured-list-body):host(cds-structured-list-header-row) .cds--structured-list ::slotted(cds-structured-list-row) :first-of-type::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-header-row) .cds--structured-list-td:first-of-type,:host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-header-row) .cds--structured-list-th:first-of-type,:host(cds-structured-list-header-row) .cds--structured-list .cds--structured-list-row :first-of-type::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list .cds--structured-list-row :first-of-type::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-header-row):host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-header-row) :first-of-type::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row):host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-header-row) :first-of-type::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list .cds--structured-list-row :first-of-type::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-row) :first-of-type::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-header-row) :first-of-type::slotted(cds-structured-list-cell){padding-inline-start:1rem}.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-td,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-td:first-of-type,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-th,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-th:first-of-type,:host(cds-structured-list-body) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) .cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) .cds--structured-list-th,:host(cds-structured-list-body):host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-body):host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-head) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) .cds--structured-list-td,:host(cds-structured-list-head) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) .cds--structured-list-th,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush .cds--structured-list-row ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush .cds--structured-list-row ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-header-row):host(cds-structured-list-head) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row):host(cds-structured-list-head) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list.cds--structured-list--flush .cds--structured-list-row ::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-body) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) ::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-head) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-cell){padding-inline-end:1rem;padding-inline-start:0}.cds--structured-list-row,:host(cds-structured-list-body) ::slotted(cds-structured-list-row),:host(cds-structured-list-head) ::slotted(cds-structured-list-header-row){display:table-row;border-block-start:1px solid var(--cds-border-subtle);transition:background-color 110ms cubic-bezier(.2,0,.38,.9)}.cds--structured-list ::slotted(cds-structured-list-body) .cds--structured-list-row:last-child,.cds--structured-list-tbody .cds--structured-list-row:last-child,:host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-body) :last-child::slotted(cds-structured-list-row),:host(cds-structured-list-body) .cds--structured-list-tbody :last-child::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-body) :last-child::slotted(cds-structured-list-header-row),:host(cds-structured-list-head) .cds--structured-list-tbody :last-child::slotted(cds-structured-list-header-row){border-block-end:1px solid var(--cds-border-subtle)}.cds--structured-list-row--header-row,:host(cds-structured-list-head) ::slotted(cds-structured-list-header-row){border:none}.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected),:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row){border-color:var(--cds-layer-hover);background-color:var(--cds-layer-hover);cursor:pointer}.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+.cds--structured-list-row,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+::slotted(cds-structured-list-row),:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row)+.cds--structured-list-row,:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row)+::slotted(cds-structured-list-row),:host(cds-structured-list-body):host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row)+::slotted(cds-structured-list-row),:host(cds-structured-list-body):host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row)+::slotted(cds-structured-list-header-row),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+::slotted(cds-structured-list-header-row),:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row)+.cds--structured-list-row,:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row)+::slotted(cds-structured-list-header-row){border-color:var(--cds-layer-hover)}.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row){border-color:var(--cds-layer-selected);background-color:var(--cds-layer-selected)}.cds--structured-list--selection .cds--structured-list-row--selected+.cds--structured-list-row,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected+::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected+::slotted(cds-structured-list-header-row){border-color:var(--cds-layer-selected)}.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected .cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row) .cds--structured-list-td,:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row) .cds--structured-list-td,:host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected ::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row) ::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}.cds--structured-list-row.cds--structured-list-row--header-row,:host(cds-structured-list-body) .cds--structured-list-row--header-row::slotted(cds-structured-list-row),:host(cds-structured-list-head) ::slotted(cds-structured-list-header-row){cursor:inherit}.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>.cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row)>.cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-row)>.cds--structured-list-td,:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row)>.cds--structured-list-td,:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-header-row)>.cds--structured-list-td,:host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>::slotted(cds-structured-list-cell),:host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-row):host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-header-row)>::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}.cds--structured-list ::slotted(cds-structured-list-head),.cds--structured-list-thead{display:table-header-group;vertical-align:middle}.cds--structured-list-th,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;padding:1rem .5rem .5rem .5rem;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);line-height:var(--cds-heading-compact-01-line-height,1.28572);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);display:table-cell;block-size:2.5rem;color:var(--cds-text-primary,#161616);font-weight:600;text-align:start;text-transform:none;vertical-align:top}.cds--structured-list-th *,.cds--structured-list-th ::after,.cds--structured-list-th ::before,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell) *,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell) ::after,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell) ::before,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton) *,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton) ::after,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton) ::before{box-sizing:inherit}.cds--structured-list ::slotted(cds-structured-list-body),.cds--structured-list-tbody{display:table-row-group;vertical-align:middle}.cds--structured-list-td,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell){box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);line-height:var(--cds-body-01-line-height,1.42857);letter-spacing:var(--cds-body-01-letter-spacing,.16px);padding:1rem .5rem 1.5rem .5rem;position:relative;display:table-cell;color:var(--cds-text-secondary,#525252);max-inline-size:36rem;transition:color 110ms cubic-bezier(.2,0,.38,.9)}.cds--structured-list-td *,.cds--structured-list-td ::after,.cds--structured-list-td ::before,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell) *,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell) ::after,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell) ::before{box-sizing:inherit}.cds--structured-list ::slotted(cds-structured-list-header-cell[nowrap]),.cds--structured-list-content--nowrap,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell[nowrap]){white-space:nowrap}.cds--structured-list-input+.cds--structured-list-td,:host(cds-structured-list-row) .cds--structured-list-input+::slotted(cds-structured-list-cell){text-align:end}.cds--structured-list-svg{display:inline-block;margin-block-start:.125rem;transition:all 110ms cubic-bezier(.2,0,.38,.9);vertical-align:top}.cds--structured-list-input:checked+.cds--structured-list-row .cds--structured-list-svg,.cds--structured-list-input:checked+.cds--structured-list-td .cds--structured-list-svg,:host(cds-structured-list-body) .cds--structured-list-input:checked+::slotted(cds-structured-list-row) .cds--structured-list-svg,:host(cds-structured-list-head) .cds--structured-list-input:checked+::slotted(cds-structured-list-header-row) .cds--structured-list-svg,:host(cds-structured-list-row) .cds--structured-list-input:checked+::slotted(cds-structured-list-cell) .cds--structured-list-svg{fill:var(--cds-icon-primary,#161616)}.cds--structured-list-svg{fill:transparent}.cds--structured-list--selection .cds--structured-list-td:last-child,:host(cds-structured-list-row) .cds--structured-list--selection :last-child::slotted(cds-structured-list-cell){inline-size:2rem;padding-inline-start:0}.cds--structured-list.cds--skeleton .cds--structured-list-th:first-child,:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :first-child::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :first-child::slotted(cds-structured-list-header-cell-skeleton){inline-size:8%}.cds--structured-list.cds--skeleton .cds--structured-list-th:nth-child(3n+2),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+2)::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+2)::slotted(cds-structured-list-header-cell-skeleton){inline-size:30%}.cds--structured-list.cds--skeleton .cds--structured-list-th:nth-child(3n+3),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+3)::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+3)::slotted(cds-structured-list-header-cell-skeleton){inline-size:15%}.cds--structured-list.cds--skeleton span{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;display:block;block-size:1rem;inline-size:75%}.cds--structured-list.cds--skeleton span:active,.cds--structured-list.cds--skeleton span:focus,.cds--structured-list.cds--skeleton span:hover{border:none;cursor:default;outline:0}.cds--structured-list.cds--skeleton span::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--structured-list.cds--skeleton span::before{animation:none}}.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-th:first-child,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell-skeleton){inline-size:5%}.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-th:first-child span,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell) span,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell-skeleton) span{display:none}@media screen and (-ms-high-contrast:active),(forced-colors:active){.cds--structured-list-input:checked+.cds--structured-list-td .cds--structured-list-svg,:host(cds-structured-list-row) .cds--structured-list-input:checked+::slotted(cds-structured-list-cell) .cds--structured-list-svg{fill:ButtonText}}.cds--structured-list__icon{margin-block-start:.125rem;vertical-align:top}.cds--structured-list--selection .cds--structured-list-td:first-child:has(.cds--structured-list__icon),:host(cds-structured-list-row) .cds--structured-list--selection :first-child:has(.cds--structured-list__icon)::slotted(cds-structured-list-cell){inline-size:2rem;padding-inline-end:0}:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell:first-of-type){padding-inline-start:1rem}:host(cds-structured-list-body) ::slotted(cds-structured-list-row:last-child){border-block-end:1px solid var(--cds-border-subtle)}:host(cds-structured-list-row) ::slotted(cds-structured-list-cell:first-of-type){padding-inline-start:1rem}:host(cds-structured-list-row[selection-value]:hover){background-color:var(--cds-layer-hover);border-block-end:1px solid var(--cds-layer-hover);cursor:pointer}:host(cds-structured-list-row[selection-value]:hover) ::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}:host(cds-structured-list-row[selected]){background-color:var(--cds-layer-selected)}:host(cds-structured-list-row[selected]) .cds--structured-list-input:checked+.cds--structured-list-cell .cds--structured-list-svg{fill:var(--cds-text-primary,#161616)}:host(cds-structured-list-row[selected]) ::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}:host(cds-structured-list-header-cell-skeleton):first-of-type{inline-size:8%}:host(cds-structured-list-header-cell-skeleton):nth-of-type(3n+2){inline-size:30%}:host(cds-structured-list-header-cell-skeleton):nth-of-type(3n+3){inline-size:15%}:host(cds-structured-list-header-cell-skeleton) span{position:relative;padding:0;border:none;background:var(--cds-skeleton-background,#e8e8e8);box-shadow:none;pointer-events:none;display:block;block-size:1rem;inline-size:75%}:host(cds-structured-list-header-cell-skeleton) span:active,:host(cds-structured-list-header-cell-skeleton) span:focus,:host(cds-structured-list-header-cell-skeleton) span:hover{border:none;cursor:default;outline:0}:host(cds-structured-list-header-cell-skeleton) span::before{position:absolute;animation:3s ease-in-out cds--skeleton infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){:host(cds-structured-list-header-cell-skeleton) span::before{animation:none}}:host(cds-structured-list-header-row[condensed]) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-row[condensed]) ::slotted(cds-structured-list-cell){padding:.5rem}:host(cds-structured-list-header-row[condensed]) ::slotted(cds-structured-list-header-cell:first-of-type),:host(cds-structured-list-row[condensed]) ::slotted(cds-structured-list-cell:first-of-type){padding-inline-start:1rem}:host(cds-structured-list-header-row[condensed][flush]) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row[flush]) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-row[condensed][flush]) ::slotted(cds-structured-list-cell),:host(cds-structured-list-row[flush]) ::slotted(cds-structured-list-cell){padding-inline:0 1rem}',
]);
let R,
  N = (t) => t;
let M = o(
  [l(`${a}-structured-list-header-cell`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t, e, r, c, d;
            this.hasAttribute('role') ||
              this.setAttribute('role', 'columnheader'),
              ((t = s),
              (e = 'connectedCallback'),
              (r = this),
              (d = n(u(1 & (c = 3) ? t.prototype : t), e, r)),
              2 & c
                ? function (t) {
                    return d.apply(r, t);
                  }
                : d)([]);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return e(R || (R = N` <slot></slot> `));
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => $ },
      ],
    };
  },
  s
);
function B() {
  B = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!U(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return K(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? K(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = G(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: q(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = q(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function X(t) {
  var e,
    r = G(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function L(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function U(t) {
  return t.decorators && t.decorators.length;
}
function W(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function q(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function G(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function K(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function Y() {
  return (
    (Y =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = V(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    Y.apply(null, arguments)
  );
}
function V(t) {
  return (
    (V = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    V(t)
  );
}
const { stablePrefix: H } = r;
let J,
  Q = (function (t, e, r, s) {
    var c = B();
    if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
    var i = e(function (t) {
        c.initializeInstanceElements(t, l.elements);
      }, r),
      l = c.decorateClass(
        (function (t) {
          for (
            var e = [],
              r = function (t) {
                return (
                  'method' === t.kind &&
                  t.key === d.key &&
                  t.placement === d.placement
                );
              },
              s = 0;
            s < t.length;
            s++
          ) {
            var c,
              d = t[s];
            if ('method' === d.kind && (c = e.find(r)))
              if (W(d.descriptor) || W(c.descriptor)) {
                if (U(d) || U(c))
                  throw new ReferenceError(
                    'Duplicated methods (' + d.key + ") can't be decorated."
                  );
                c.descriptor = d.descriptor;
              } else {
                if (U(d)) {
                  if (U(c))
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for the same property (" +
                        d.key +
                        ').'
                    );
                  c.decorators = d.decorators;
                }
                L(d, c);
              }
            else e.push(d);
          }
          return e;
        })(i.d.map(X)),
        t
      );
    return (
      c.initializeClassElements(i.F, l.elements),
      c.runClassFinishers(i.F, l.finishers)
    );
  })(
    [l(`${H}-structured-list-header-cell`)],
    function (t, e) {
      class r extends e {
        constructor(...e) {
          super(...e), t(this);
        }
      }
      return {
        F: r,
        d: [
          {
            kind: 'method',
            key: 'connectedCallback',
            value: function () {
              var t, e, s, c, d;
              ((t = r),
              (e = 'connectedCallback'),
              (s = this),
              (d = Y(V(1 & (c = 3) ? t.prototype : t), e, s)),
              2 & c && 'function' == typeof d
                ? function (t) {
                    return d.apply(s, t);
                  }
                : d)([]);
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => w },
        ],
      };
    },
    M
  ),
  Z = (t) => t;
let tt = o(
  [l(`${a}-structured-list-head`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t, e, r, c, d;
            this.hasAttribute('role') || this.setAttribute('role', 'rowgroup'),
              ((t = s),
              (e = 'connectedCallback'),
              (r = this),
              (d = n(u(1 & (c = 3) ? t.prototype : t), e, r)),
              2 & c
                ? function (t) {
                    return d.apply(r, t);
                  }
                : d)([]);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return e(J || (J = Z` <slot></slot> `));
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => $ },
      ],
    };
  },
  s
);
function et() {
  et = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!ct(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return ot(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? ot(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = lt(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: it(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = it(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function rt(t) {
  var e,
    r = lt(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function st(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function ct(t) {
  return t.decorators && t.decorators.length;
}
function dt(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function it(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function lt(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function ot(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function nt() {
  return (
    (nt =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ut(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    nt.apply(null, arguments)
  );
}
function ut(t) {
  return (
    (ut = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ut(t)
  );
}
const { stablePrefix: at } = r;
let ht,
  pt,
  mt = (function (t, e, r, s) {
    var c = et();
    if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
    var i = e(function (t) {
        c.initializeInstanceElements(t, l.elements);
      }, r),
      l = c.decorateClass(
        (function (t) {
          for (
            var e = [],
              r = function (t) {
                return (
                  'method' === t.kind &&
                  t.key === d.key &&
                  t.placement === d.placement
                );
              },
              s = 0;
            s < t.length;
            s++
          ) {
            var c,
              d = t[s];
            if ('method' === d.kind && (c = e.find(r)))
              if (dt(d.descriptor) || dt(c.descriptor)) {
                if (ct(d) || ct(c))
                  throw new ReferenceError(
                    'Duplicated methods (' + d.key + ") can't be decorated."
                  );
                c.descriptor = d.descriptor;
              } else {
                if (ct(d)) {
                  if (ct(c))
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for the same property (" +
                        d.key +
                        ').'
                    );
                  c.decorators = d.decorators;
                }
                st(d, c);
              }
            else e.push(d);
          }
          return e;
        })(i.d.map(rt)),
        t
      );
    return (
      c.initializeClassElements(i.F, l.elements),
      c.runClassFinishers(i.F, l.finishers)
    );
  })(
    [l(`${at}-structured-list-head`)],
    function (t, e) {
      class r extends e {
        constructor(...e) {
          super(...e), t(this);
        }
      }
      return {
        F: r,
        d: [
          {
            kind: 'method',
            key: 'connectedCallback',
            value: function () {
              var t, e, s, c, d;
              ((t = r),
              (e = 'connectedCallback'),
              (s = this),
              (d = nt(ut(1 & (c = 3) ? t.prototype : t), e, s)),
              2 & c && 'function' == typeof d
                ? function (t) {
                    return d.apply(s, t);
                  }
                : d)([]);
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => w },
        ],
      };
    },
    tt
  ),
  ft = (t) => t;
let gt = o(
  [l(`${a}-structured-list-header-row`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'field',
          decorators: [c({ attribute: 'selection-name' })],
          key: 'selectionName',
          value: () => '',
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t, e, r, c, d;
            this.hasAttribute('role') || this.setAttribute('role', 'row'),
              ((t = s),
              (e = 'connectedCallback'),
              (r = this),
              (d = n(u(1 & (c = 3) ? t.prototype : t), e, r)),
              2 & c
                ? function (t) {
                    return d.apply(r, t);
                  }
                : d)([]);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return this.selectionName
              ? e(
                  ht ||
                    (ht = ft`
        <slot></slot>
        <div class="${0}--structured-list-th"></div>
      `),
                  a
                )
              : e(pt || (pt = ft` <slot></slot> `));
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => $ },
      ],
    };
  },
  s
);
function yt() {
  yt = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!bt(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return Et(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? Et(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = zt(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: xt(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = xt(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function vt(t) {
  var e,
    r = zt(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function wt(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function bt(t) {
  return t.decorators && t.decorators.length;
}
function kt(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function xt(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function zt(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function Et(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function Pt() {
  return (
    (Pt =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = _t(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    Pt.apply(null, arguments)
  );
}
function _t(t) {
  return (
    (_t = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _t(t)
  );
}
const { stablePrefix: Dt } = r;
let At,
  Ct = (function (t, e, r, s) {
    var c = yt();
    if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
    var i = e(function (t) {
        c.initializeInstanceElements(t, l.elements);
      }, r),
      l = c.decorateClass(
        (function (t) {
          for (
            var e = [],
              r = function (t) {
                return (
                  'method' === t.kind &&
                  t.key === d.key &&
                  t.placement === d.placement
                );
              },
              s = 0;
            s < t.length;
            s++
          ) {
            var c,
              d = t[s];
            if ('method' === d.kind && (c = e.find(r)))
              if (kt(d.descriptor) || kt(c.descriptor)) {
                if (bt(d) || bt(c))
                  throw new ReferenceError(
                    'Duplicated methods (' + d.key + ") can't be decorated."
                  );
                c.descriptor = d.descriptor;
              } else {
                if (bt(d)) {
                  if (bt(c))
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for the same property (" +
                        d.key +
                        ').'
                    );
                  c.decorators = d.decorators;
                }
                wt(d, c);
              }
            else e.push(d);
          }
          return e;
        })(i.d.map(vt)),
        t
      );
    return (
      c.initializeClassElements(i.F, l.elements),
      c.runClassFinishers(i.F, l.finishers)
    );
  })(
    [l(`${Dt}-structured-list-header-row`)],
    function (t, e) {
      class r extends e {
        constructor(...e) {
          super(...e), t(this);
        }
      }
      return {
        F: r,
        d: [
          {
            kind: 'method',
            key: 'connectedCallback',
            value: function () {
              var t, e, s, c, d;
              ((t = r),
              (e = 'connectedCallback'),
              (s = this),
              (d = Pt(_t(1 & (c = 3) ? t.prototype : t), e, s)),
              2 & c && 'function' == typeof d
                ? function (t) {
                    return d.apply(s, t);
                  }
                : d)([]);
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => w },
        ],
      };
    },
    gt
  ),
  Ot = (t) => t;
let Tt = o(
  [l(`${a}-structured-list-body`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t, e, r, c, d;
            this.hasAttribute('role') || this.setAttribute('role', 'rowgroup'),
              ((t = s),
              (e = 'connectedCallback'),
              (r = this),
              (d = n(u(1 & (c = 3) ? t.prototype : t), e, r)),
              2 & c
                ? function (t) {
                    return d.apply(r, t);
                  }
                : d)([]);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return e(At || (At = Ot` <slot></slot> `));
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => $ },
      ],
    };
  },
  s
);
function St() {
  St = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!It(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return Mt(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? Mt(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = Nt(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: Rt(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = Rt(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function jt(t) {
  var e,
    r = Nt(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function Ft(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function It(t) {
  return t.decorators && t.decorators.length;
}
function $t(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function Rt(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function Nt(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function Mt(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function Bt() {
  return (
    (Bt =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Xt(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    Bt.apply(null, arguments)
  );
}
function Xt(t) {
  return (
    (Xt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Xt(t)
  );
}
const { stablePrefix: Lt } = r;
let Ut,
  Wt,
  qt = (function (t, e, r, s) {
    var c = St();
    if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
    var i = e(function (t) {
        c.initializeInstanceElements(t, l.elements);
      }, r),
      l = c.decorateClass(
        (function (t) {
          for (
            var e = [],
              r = function (t) {
                return (
                  'method' === t.kind &&
                  t.key === d.key &&
                  t.placement === d.placement
                );
              },
              s = 0;
            s < t.length;
            s++
          ) {
            var c,
              d = t[s];
            if ('method' === d.kind && (c = e.find(r)))
              if ($t(d.descriptor) || $t(c.descriptor)) {
                if (It(d) || It(c))
                  throw new ReferenceError(
                    'Duplicated methods (' + d.key + ") can't be decorated."
                  );
                c.descriptor = d.descriptor;
              } else {
                if (It(d)) {
                  if (It(c))
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for the same property (" +
                        d.key +
                        ').'
                    );
                  c.decorators = d.decorators;
                }
                Ft(d, c);
              }
            else e.push(d);
          }
          return e;
        })(i.d.map(jt)),
        t
      );
    return (
      c.initializeClassElements(i.F, l.elements),
      c.runClassFinishers(i.F, l.finishers)
    );
  })(
    [l(`${Lt}-structured-list-body`)],
    function (t, e) {
      class r extends e {
        constructor(...e) {
          super(...e), t(this);
        }
      }
      return {
        F: r,
        d: [
          {
            kind: 'method',
            key: 'connectedCallback',
            value: function () {
              var t, e, s, c, d;
              ((t = r),
              (e = 'connectedCallback'),
              (s = this),
              (d = Bt(Xt(1 & (c = 3) ? t.prototype : t), e, s)),
              2 & c && 'function' == typeof d
                ? function (t) {
                    return d.apply(s, t);
                  }
                : d)([]);
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => w },
        ],
      };
    },
    Tt
  ),
  Gt = (t) => t;
function Kt() {
  Kt = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!Ht(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return te(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? te(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = Zt(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: Qt(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = Qt(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function Yt(t) {
  var e,
    r = Zt(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function Vt(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function Ht(t) {
  return t.decorators && t.decorators.length;
}
function Jt(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function Qt(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function Zt(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function te(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function ee() {
  return (
    (ee =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = re(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    ee.apply(null, arguments)
  );
}
function re(t) {
  return (
    (re = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    re(t)
  );
}
const { stablePrefix: se } = r;
let ce = (function (t, e, r, s) {
  var c = Kt();
  if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
  var i = e(function (t) {
      c.initializeInstanceElements(t, l.elements);
    }, r),
    l = c.decorateClass(
      (function (t) {
        for (
          var e = [],
            r = function (t) {
              return (
                'method' === t.kind &&
                t.key === d.key &&
                t.placement === d.placement
              );
            },
            s = 0;
          s < t.length;
          s++
        ) {
          var c,
            d = t[s];
          if ('method' === d.kind && (c = e.find(r)))
            if (Jt(d.descriptor) || Jt(c.descriptor)) {
              if (Ht(d) || Ht(c))
                throw new ReferenceError(
                  'Duplicated methods (' + d.key + ") can't be decorated."
                );
              c.descriptor = d.descriptor;
            } else {
              if (Ht(d)) {
                if (Ht(c))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      d.key +
                      ').'
                  );
                c.decorators = d.decorators;
              }
              Vt(d, c);
            }
          else e.push(d);
        }
        return e;
      })(i.d.map(Yt)),
      t
    );
  return (
    c.initializeClassElements(i.F, l.elements),
    c.runClassFinishers(i.F, l.finishers)
  );
})(
  [l(`${se}-structured-list-group`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'field',
          key: '_parentTable',
          value() {
            return this.closest(`${se}-structured-list`);
          },
        },
        {
          kind: 'field',
          decorators: [c({ attribute: 'title' })],
          key: 'groupTitle',
          value: void 0,
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t, e, r, c, d;
            ((t = s),
            (e = 'connectedCallback'),
            (r = this),
            (d = ee(re(1 & (c = 3) ? t.prototype : t), e, r)),
            2 & c && 'function' == typeof d
              ? function (t) {
                  return d.apply(r, t);
                }
              : d)([]);
          },
        },
        {
          kind: 'method',
          key: '_renderTitle',
          value: function () {
            return e(
              Ut ||
                (Ut = Gt`
      <tr part="row row--group-title">
        <th part="group-title" colspan="999">${0}</th>
      </tr>
    `),
              this.groupTitle
            );
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return e(
              Wt ||
                (Wt = Gt`
      ${0}
      <slot></slot>
    `),
              this.groupTitle ? this._renderTitle() : ''
            );
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => w },
      ],
    };
  },
  i(s)
);
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
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let de;
!(function (t) {
  (t[(t.BACKWARD = -1)] = 'BACKWARD'), (t[(t.FORWARD = 1)] = 'FORWARD');
})(de || (de = {}));
class ie {
  constructor(t) {
    y(this, '_groups', {}), this.constructor._instances.set(t, this);
  }
  shouldBeFocusable(t) {
    if (t.checked) return !0;
    const { name: e } = t,
      r = this._groups[e];
    if (r && Array.from(r).some((t) => t.checked)) return !1;
    return !r || 1 === r.size || this.getSortedGroup(t)[0] === t;
  }
  getSortedGroup(t) {
    const e = this._groups[t.name];
    return (
      e &&
      Array.from(e).sort((t, e) => {
        const r = t.compareDocumentPosition(e);
        return r & Node.DOCUMENT_POSITION_FOLLOWING ||
          r & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : r & Node.DOCUMENT_POSITION_PRECEDING ||
            r & Node.DOCUMENT_POSITION_CONTAINS
          ? 1
          : 0;
      })
    );
  }
  add(t) {
    const { name: e } = t;
    if (e) {
      const r = this._groups;
      r[e] || (r[e] = new Set()), r[e].add(t);
    }
    return this;
  }
  delete(t, e = t.name) {
    const r = this._groups[e];
    return !!r && r.delete(t);
  }
  select(t, e) {
    const r = this._groups[t.name];
    r &&
      ((t.checked = !e || !0),
      (t.tabIndex = 0),
      t.focus(),
      r.forEach((r) => {
        t !== r && ((r.checked = e || !1), (r.tabIndex = -1));
      }));
  }
  navigate(t, e) {
    const r = this.getSortedGroup(t);
    let s = r.indexOf(t) + e;
    return s < 0 ? (s = r.length - 1) : s >= r.length && (s = 0), r[s];
  }
  static get(t) {
    return this._instances.get(t) || new ie(t);
  }
}
y(ie, '_instances', new WeakMap());
let le,
  oe,
  ne = (t) => t;
function ue(t, e, r, s) {
  var c = n(u(1 & s ? t.prototype : t), e, r);
  return 2 & s
    ? function (t) {
        return c.apply(r, t);
      }
    : c;
}
const ae = {
  ArrowUp: de.BACKWARD,
  Up: de.BACKWARD,
  ArrowDown: de.FORWARD,
  Down: de.FORWARD,
};
class he {
  constructor(t) {
    this._row = t;
  }
  get checked() {
    return this._row.selected;
  }
  set checked(t) {
    (this._row.selected = t), (this._row.tabIndex = t ? 0 : -1);
  }
  get tabIndex() {
    return this._row.tabIndex;
  }
  set tabIndex(t) {
    this._row.tabIndex = t;
  }
  get name() {
    return this._row.selectionName;
  }
  compareDocumentPosition(t) {
    return this._row.compareDocumentPosition(t._row);
  }
  focus() {
    this._row.focus();
  }
}
let pe,
  me = o(
    [l(`${a}-structured-list-row`)],
    function (t, r) {
      class s extends r {
        constructor(...e) {
          super(...e), t(this);
        }
      }
      return {
        F: s,
        d: [
          { kind: 'field', key: '_manager', value: () => null },
          {
            kind: 'field',
            key: '_radioButtonDelegate',
            value() {
              return new he(this);
            },
          },
          {
            kind: 'field',
            decorators: [h('#input')],
            key: '_inputNode',
            value: void 0,
          },
          {
            kind: 'field',
            decorators: [f('click')],
            key: '_handleClick',
            value() {
              return () => {
                const { _inputNode: t } = this;
                t &&
                  ((this.selected = !0),
                  this._manager &&
                    this._manager.select(this._radioButtonDelegate));
              };
            },
          },
          {
            kind: 'field',
            decorators: [f('keydown')],
            key: '_handleKeydown',
            value() {
              return (t) => {
                const { _inputNode: e } = this,
                  r = this._manager;
                if (e && r) {
                  const e = ae[t.key];
                  e && r.select(r.navigate(this._radioButtonDelegate, e)),
                    (' ' !== t.key && 'Enter' !== t.key) ||
                      r.select(this._radioButtonDelegate);
                }
              };
            },
          },
          {
            kind: 'field',
            decorators: [c({ type: Boolean, reflect: !0 })],
            key: 'selected',
            value: () => !1,
          },
          {
            kind: 'field',
            decorators: [c({ attribute: 'selection-name' })],
            key: 'selectionName',
            value: () => '',
          },
          {
            kind: 'field',
            decorators: [c({ attribute: 'selection-value' })],
            key: 'selectionValue',
            value: () => '',
          },
          {
            kind: 'field',
            decorators: [c({ attribute: 'selection-icon-title' })],
            key: 'selectionIconTitle',
            value: () => '',
          },
          {
            kind: 'method',
            key: 'connectedCallback',
            value: function () {
              if (
                (this.hasAttribute('role') || this.setAttribute('role', 'row'),
                ue(s, 'connectedCallback', this, 3)([]),
                !this._manager)
              ) {
                this._manager = ie.get(this.getRootNode({ composed: !0 }));
                const { selectionName: e } = this;
                var t;
                if (e)
                  null === (t = this._manager) ||
                    void 0 === t ||
                    t.add(this._radioButtonDelegate);
              }
            },
          },
          {
            kind: 'method',
            key: 'disconnectedCallback',
            value: function () {
              this._manager && this._manager.delete(this._radioButtonDelegate),
                ue(s, 'disconnectedCallback', this, 3)([]);
            },
          },
          {
            kind: 'method',
            key: 'updated',
            value: function (t) {
              const { _manager: e, selectionName: r } = this;
              t.has('selectionName') &&
                (e &&
                  (e.delete(this._radioButtonDelegate, t.get('selectionName')),
                  r && e.add(this._radioButtonDelegate)),
                this.setAttribute(
                  'tabindex',
                  r && e && e.shouldBeFocusable(this._radioButtonDelegate)
                    ? '0'
                    : '-1'
                ));
            },
          },
          {
            kind: 'method',
            key: 'render',
            value: function () {
              const {
                selected: t,
                selectionName: r,
                selectionValue: s,
                selectionIconTitle: c,
              } = this;
              return r
                ? e(
                    le ||
                      (le = ne`
        <slot></slot>
        <input
          id="input"
          type="radio"
          class="${0}--structured-list-input ${0}--visually-hidden"
          .checked=${0}
          name=${0}
          value=${0} />
        <div
          class="${0}--structured-list-td ${0}--structured-list-cell">
          ${0}
        </div>
      `),
                    a,
                    a,
                    t,
                    r,
                    p(s),
                    a,
                    a,
                    (({ children: t, ...e } = {}) =>
                      d`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${m(
                        e
                      )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${t}${t}<path d="M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z"></path><path d="M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z" data-icon-path="inner-path" opacity="0"></path></svg>`)(
                      { class: `${a}--structured-list-svg`, title: c }
                    )
                  )
                : e(oe || (oe = ne` <slot></slot> `));
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => $ },
        ],
      };
    },
    g(s)
  ),
  fe = (t) => t;
function ge() {
  ge = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!we(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return ze(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? ze(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = xe(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: ke(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = ke(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function ye(t) {
  var e,
    r = xe(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function ve(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function we(t) {
  return t.decorators && t.decorators.length;
}
function be(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function ke(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function xe(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function ze(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function Ee() {
  return (
    (Ee =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Pe(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    Ee.apply(null, arguments)
  );
}
function Pe(t) {
  return (
    (Pe = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Pe(t)
  );
}
const { stablePrefix: _e } = r;
let De,
  Ae = (function (t, e, r, s) {
    var c = ge();
    if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
    var i = e(function (t) {
        c.initializeInstanceElements(t, l.elements);
      }, r),
      l = c.decorateClass(
        (function (t) {
          for (
            var e = [],
              r = function (t) {
                return (
                  'method' === t.kind &&
                  t.key === d.key &&
                  t.placement === d.placement
                );
              },
              s = 0;
            s < t.length;
            s++
          ) {
            var c,
              d = t[s];
            if ('method' === d.kind && (c = e.find(r)))
              if (be(d.descriptor) || be(c.descriptor)) {
                if (we(d) || we(c))
                  throw new ReferenceError(
                    'Duplicated methods (' + d.key + ") can't be decorated."
                  );
                c.descriptor = d.descriptor;
              } else {
                if (we(d)) {
                  if (we(c))
                    throw new ReferenceError(
                      "Decorators can't be placed on different accessors with for the same property (" +
                        d.key +
                        ').'
                    );
                  c.decorators = d.decorators;
                }
                ve(d, c);
              }
            else e.push(d);
          }
          return e;
        })(i.d.map(ye)),
        t
      );
    return (
      c.initializeClassElements(i.F, l.elements),
      c.runClassFinishers(i.F, l.finishers)
    );
  })(
    [l(`${_e}-structured-list-row`)],
    function (t, r) {
      class s extends r {
        constructor(...e) {
          super(...e), t(this);
        }
      }
      return {
        F: s,
        d: [
          {
            kind: 'method',
            key: 'connectedCallback',
            value: function () {
              var t, e, r, c, d;
              ((t = s),
              (e = 'connectedCallback'),
              (r = this),
              (d = Ee(Pe(1 & (c = 3) ? t.prototype : t), e, r)),
              2 & c && 'function' == typeof d
                ? function (t) {
                    return d.apply(r, t);
                  }
                : d)([]);
            },
          },
          { kind: 'method', key: 'updated', value: function (t) {} },
          {
            kind: 'method',
            key: 'render',
            value: function () {
              return e(pe || (pe = fe` <slot></slot> `));
            },
          },
          { kind: 'field', static: !0, key: 'styles', value: () => w },
        ],
      };
    },
    me
  ),
  Ce = (t) => t;
let Oe = o(
  [l(`${a}-structured-list-cell`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t, e, r, c, d;
            this.hasAttribute('role') || this.setAttribute('role', 'cell'),
              ((t = s),
              (e = 'connectedCallback'),
              (r = this),
              (d = n(u(1 & (c = 3) ? t.prototype : t), e, r)),
              2 & c
                ? function (t) {
                    return d.apply(r, t);
                  }
                : d)([]);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return e(De || (De = Ce` <slot></slot> `));
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => $ },
      ],
    };
  },
  s
);
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const Te = ({ children: t, ...e } = {}) =>
  d`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${m(
    e
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${t}<path d="M8 13.2L3.6 8.8 2.7 9.7 7.1 14.1 8 15 16.5 6.5 15.6 5.6z"></path><path d="M15.6 5.6L8 13.2 3.6 8.8 2.7 9.7 7.1 14.1 8 15 16.5 6.5 15.6 5.6z"></path></svg>`;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let Se,
  je,
  Fe,
  Ie,
  $e,
  Re,
  Ne = (t) => t;
function Me() {
  Me = function () {
    return t;
  };
  var t = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (t, e) {
      ['method', 'field'].forEach(function (r) {
        e.forEach(function (e) {
          e.kind === r &&
            'own' === e.placement &&
            this.defineClassElement(t, e);
        }, this);
      }, this);
    },
    initializeClassElements: function (t, e) {
      var r = t.prototype;
      ['method', 'field'].forEach(function (s) {
        e.forEach(function (e) {
          var c = e.placement;
          if (e.kind === s && ('static' === c || 'prototype' === c)) {
            var d = 'static' === c ? t : r;
            this.defineClassElement(d, e);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (t, e) {
      var r = e.descriptor;
      if ('field' === e.kind) {
        var s = e.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === s ? void 0 : s.call(t),
        };
      }
      Object.defineProperty(t, e.key, r);
    },
    decorateClass: function (t, e) {
      var r = [],
        s = [],
        c = { static: [], prototype: [], own: [] };
      if (
        (t.forEach(function (t) {
          this.addElementPlacement(t, c);
        }, this),
        t.forEach(function (t) {
          if (!Le(t)) return r.push(t);
          var e = this.decorateElement(t, c);
          r.push(e.element),
            r.push.apply(r, e.extras),
            s.push.apply(s, e.finishers);
        }, this),
        !e)
      )
        return { elements: r, finishers: s };
      var d = this.decorateConstructor(r, e);
      return s.push.apply(s, d.finishers), (d.finishers = s), d;
    },
    addElementPlacement: function (t, e, r) {
      var s = e[t.placement];
      if (!r && -1 !== s.indexOf(t.key))
        throw new TypeError('Duplicated element (' + t.key + ')');
      s.push(t.key);
    },
    decorateElement: function (t, e) {
      for (
        var r = [], s = [], c = t.decorators, d = c.length - 1;
        d >= 0;
        d--
      ) {
        var i = e[t.placement];
        i.splice(i.indexOf(t.key), 1);
        var l = this.fromElementDescriptor(t),
          o = this.toElementFinisherExtras((0, c[d])(l) || l);
        (t = o.element),
          this.addElementPlacement(t, e),
          o.finisher && s.push(o.finisher);
        var n = o.extras;
        if (n) {
          for (var u = 0; u < n.length; u++) this.addElementPlacement(n[u], e);
          r.push.apply(r, n);
        }
      }
      return { element: t, finishers: s, extras: r };
    },
    decorateConstructor: function (t, e) {
      for (var r = [], s = e.length - 1; s >= 0; s--) {
        var c = this.fromClassDescriptor(t),
          d = this.toClassDescriptor((0, e[s])(c) || c);
        if (
          (void 0 !== d.finisher && r.push(d.finisher), void 0 !== d.elements)
        ) {
          t = d.elements;
          for (var i = 0; i < t.length - 1; i++)
            for (var l = i + 1; l < t.length; l++)
              if (t[i].key === t[l].key && t[i].placement === t[l].placement)
                throw new TypeError('Duplicated element (' + t[i].key + ')');
        }
      }
      return { elements: t, finishers: r };
    },
    fromElementDescriptor: function (t) {
      var e = {
        kind: t.kind,
        key: t.key,
        placement: t.placement,
        descriptor: t.descriptor,
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === t.kind && (e.initializer = t.initializer),
        e
      );
    },
    toElementDescriptors: function (t) {
      if (void 0 !== t)
        return ((e = t),
        (function (t) {
          if (Array.isArray(t)) return t;
        })(e) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(e) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return Ge(t, e);
              var r = {}.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? Ge(t, e)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (t) {
          var e = this.toElementDescriptor(t);
          return (
            this.disallowProperty(t, 'finisher', 'An element descriptor'),
            this.disallowProperty(t, 'extras', 'An element descriptor'),
            e
          );
        }, this);
      var e;
    },
    toElementDescriptor: function (t) {
      var e = t.kind + '';
      if ('method' !== e && 'field' !== e)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            e +
            '"'
        );
      var r = qe(t.key),
        s = t.placement + '';
      if ('static' !== s && 'prototype' !== s && 'own' !== s)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            s +
            '"'
        );
      var c = t.descriptor;
      this.disallowProperty(t, 'elements', 'An element descriptor');
      var d = {
        kind: e,
        key: r,
        placement: s,
        descriptor: Object.assign({}, c),
      };
      return (
        'field' !== e
          ? this.disallowProperty(t, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              c,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              c,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (d.initializer = t.initializer)),
        d
      );
    },
    toElementFinisherExtras: function (t) {
      return {
        element: this.toElementDescriptor(t),
        finisher: We(t, 'finisher'),
        extras: this.toElementDescriptors(t.extras),
      };
    },
    fromClassDescriptor: function (t) {
      var e = {
        kind: 'class',
        elements: t.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        e
      );
    },
    toClassDescriptor: function (t) {
      var e = t.kind + '';
      if ('class' !== e)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            e +
            '"'
        );
      this.disallowProperty(t, 'key', 'A class descriptor'),
        this.disallowProperty(t, 'placement', 'A class descriptor'),
        this.disallowProperty(t, 'descriptor', 'A class descriptor'),
        this.disallowProperty(t, 'initializer', 'A class descriptor'),
        this.disallowProperty(t, 'extras', 'A class descriptor');
      var r = We(t, 'finisher');
      return { elements: this.toElementDescriptors(t.elements), finisher: r };
    },
    runClassFinishers: function (t, e) {
      for (var r = 0; r < e.length; r++) {
        var s = (0, e[r])(t);
        if (void 0 !== s) {
          if ('function' != typeof s)
            throw new TypeError('Finishers must return a constructor.');
          t = s;
        }
      }
      return t;
    },
    disallowProperty: function (t, e, r) {
      if (void 0 !== t[e])
        throw new TypeError(r + " can't have a ." + e + ' property.');
    },
  };
  return t;
}
function Be(t) {
  var e,
    r = qe(t.key);
  'method' === t.kind
    ? (e = { value: t.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === t.kind
    ? (e = { get: t.value, configurable: !0, enumerable: !1 })
    : 'set' === t.kind
    ? (e = { set: t.value, configurable: !0, enumerable: !1 })
    : 'field' === t.kind &&
      (e = { configurable: !0, writable: !0, enumerable: !0 });
  var s = {
    kind: 'field' === t.kind ? 'field' : 'method',
    key: r,
    placement: t.static ? 'static' : 'field' === t.kind ? 'own' : 'prototype',
    descriptor: e,
  };
  return (
    t.decorators && (s.decorators = t.decorators),
    'field' === t.kind && (s.initializer = t.value),
    s
  );
}
function Xe(t, e) {
  void 0 !== t.descriptor.get
    ? (e.descriptor.get = t.descriptor.get)
    : (e.descriptor.set = t.descriptor.set);
}
function Le(t) {
  return t.decorators && t.decorators.length;
}
function Ue(t) {
  return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function We(t, e) {
  var r = t[e];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + e + "' to be a function");
  return r;
}
function qe(t) {
  var e = (function (t, e) {
    if ('object' != typeof t || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
      var s = r.call(t, e || 'default');
      if ('object' != typeof s) return s;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === e ? String : Number)(t);
  })(t, 'string');
  return 'symbol' == typeof e ? e : e + '';
}
function Ge(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, s = Array(e); r < e; r++) s[r] = t[r];
  return s;
}
function Ke(t, e, r, s) {
  var c = Ye(Ve(1 & s ? t.prototype : t), e, r);
  return 2 & s && 'function' == typeof c
    ? function (t) {
        return c.apply(r, t);
      }
    : c;
}
function Ye() {
  return (
    (Ye =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (t, e, r) {
            var s = (function (t, e) {
              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ve(t)); );
              return t;
            })(t, e);
            if (s) {
              var c = Object.getOwnPropertyDescriptor(s, e);
              return c.get ? c.get.call(arguments.length < 3 ? t : r) : c.value;
            }
          }),
    Ye.apply(null, arguments)
  );
}
function Ve(t) {
  return (
    (Ve = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Ve(t)
  );
}
const { prefix: He, stablePrefix: Je } = r;
let Qe = (function (t, e, r, s) {
  var c = Me();
  if (s) for (var d = 0; d < s.length; d++) c = s[d](c);
  var i = e(function (t) {
      c.initializeInstanceElements(t, l.elements);
    }, r),
    l = c.decorateClass(
      (function (t) {
        for (
          var e = [],
            r = function (t) {
              return (
                'method' === t.kind &&
                t.key === d.key &&
                t.placement === d.placement
              );
            },
            s = 0;
          s < t.length;
          s++
        ) {
          var c,
            d = t[s];
          if ('method' === d.kind && (c = e.find(r)))
            if (Ue(d.descriptor) || Ue(c.descriptor)) {
              if (Le(d) || Le(c))
                throw new ReferenceError(
                  'Duplicated methods (' + d.key + ") can't be decorated."
                );
              c.descriptor = d.descriptor;
            } else {
              if (Le(d)) {
                if (Le(c))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      d.key +
                      ').'
                  );
                c.decorators = d.decorators;
              }
              Xe(d, c);
            }
          else e.push(d);
        }
        return e;
      })(i.d.map(Be)),
      t
    );
  return (
    c.initializeClassElements(i.F, l.elements),
    c.runClassFinishers(i.F, l.finishers)
  );
})(
  [l(`${Je}-structured-list-cell`)],
  function (t, r) {
    class s extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: s,
      d: [
        {
          kind: 'field',
          key: 'parentGroup',
          value() {
            return this.closest(`${Je}-structured-list-group`);
          },
        },
        {
          kind: 'field',
          decorators: [c({ attribute: 'aria-label', reflect: !0 })],
          key: 'groupLabel',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [c({ attribute: 'tooltip', reflect: !0 })],
          key: 'tooltipText',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [c({ attribute: 'icon', reflect: !0 })],
          key: 'icon',
          value: void 0,
        },
        {
          kind: 'field',
          key: '_iconsAllowed',
          value: () => ({ checkmark: Te, error: v }),
        },
        {
          kind: 'field',
          decorators: [c({ attribute: 'tags', reflect: !0 })],
          key: 'tags',
          value: void 0,
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var t;
            Ke(s, 'connectedCallback', this, 3)([]),
              (this.groupLabel =
                null === (t = this.parentGroup) || void 0 === t
                  ? void 0
                  : t.groupTitle);
          },
        },
        {
          kind: 'method',
          key: '_renderIcon',
          value: function () {
            const { icon: t, _iconsAllowed: r } = this;
            return e(
              Se ||
                (Se = Ne` <div
      class="${0}--structured-list-cell-icon-text-container"
      part="icon-text-container">
      ${0}
      <span class="${0}--structured-list-cell-icon-text" part="icon-text">
        <slot></slot>
      </span>
    </div>`),
              He,
              r[t.toLowerCase()].call(null, { part: 'icon' }),
              He
            );
          },
        },
        {
          kind: 'method',
          key: '_renderTags',
          value: function () {
            const { tags: t } = this;
            return e(
              je ||
                (je = Ne`
      ${0}
    `),
              t.split(',').map((t) =>
                e(
                  Fe ||
                    (Fe = Ne`
              <cds-tag part="tag" size="sm" type="green">${0}</cds-tag>
            `),
                  t.trim()
                )
              )
            );
          },
        },
        {
          kind: 'method',
          key: '_renderTooltip',
          value: function () {
            const { tooltipText: t } = this;
            return e(
              Ie ||
                (Ie = Ne`
      <cds-tooltip-icon
        part="tooltip"
        alignment="start"
        body-text="${0}"
        direction="right">
        ${0}
      </cds-tooltip-icon>
    `),
              p(t),
              (({ children: t, ...e } = {}) =>
                d`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${m(
                  e
                )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${t}${t}<path d="M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"></path><path d="M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"></path></svg>`)()
            );
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const { tooltipText: t, icon: r, _iconsAllowed: c, tags: d } = this;
            return r && Object.keys(c).includes(r.toLowerCase())
              ? e($e || ($e = Ne` ${0} `), this._renderIcon())
              : e(
                  Re ||
                    (Re = Ne`
      ${0} ${0}
      ${0}
    `),
                  Ke(s, 'render', this, 3)([]),
                  d ? this._renderTags() : '',
                  t ? this._renderTooltip() : ''
                );
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => w },
      ],
    };
  },
  Oe
);
export { Q as C, mt as a, Ct as b, I as c, qt as d, ce as e, Ae as f, Qe as g };
