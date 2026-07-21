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

import { i as s, n as d, s as n, a as c } from './query-assigned-elements.js';
import { S as t } from './stable-selector.js';
import { c as r } from './carbon-element.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let i = (function (s) {
    return (s.SOLID = 'solid'), (s.DASHED = 'dashed'), s;
  })({}),
  o = (function (s) {
    return (
      (s.FLUID = 'fluid'),
      (s.SMALL = 'small'),
      (s.MEDIUM = 'medium'),
      (s.LARGE = 'large'),
      s
    );
  })({}),
  e = (function (s) {
    return (s.SUBTLE = 'subtle'), (s.STRONG = 'strong'), s;
  })({}),
  l = (function (s) {
    return (s.THIN = 'thin'), (s.THICK = 'thick'), s;
  })({});
var a = s([
  '@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap}:root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:root{--cds-grid-columns:16}}@media (min-width:99rem){:root{--cds-grid-margin:1.5rem}}.cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start:0}.cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}.cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}.cds--subgrid--narrow{--cds-grid-gutter-start:0;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}.cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}.cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}.cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--md\\:col-span-0{display:none}.cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}.cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}.cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--lg\\:col-span-0{display:none}.cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){.cds--xlg\\:col-span-0{display:none}.cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){.cds--max\\:col-span-0{display:none}.cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){.cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){.cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}.cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){.cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){.cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}.cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}:host(c4d-hr){background:var(--cds-border-strong-01,#8d8d8d);block-size:.0625rem;border:none;display:block;margin:1rem 0}:host(c4d-hr[type=dashed]:not([size=small]):not([size=medium]):not([size=large])){background-color:transparent;background-image:linear-gradient(to right,var(--cds-border-strong-01,#8d8d8d) 50%,transparent 50%);background-repeat:repeat-x;background-size:1rem .0625rem;block-size:.0625rem}:host(c4d-hr[size=small]){max-inline-size:2rem}:host(c4d-hr[size=medium]){max-inline-size:3rem}:host(c4d-hr[size=large]){max-inline-size:4rem}:host(c4d-hr[contrast=subtle]){background:var(--cds-border-subtle-01,#c6c6c6)}:host(c4d-hr[contrast=strong]){background:var(--cds-border-strong-01,#8d8d8d)}:host(c4d-hr[weight=thick]){block-size:.125rem}',
]);
function m() {
  m = function () {
    return s;
  };
  var s = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (s, d) {
      ['method', 'field'].forEach(function (n) {
        d.forEach(function (d) {
          d.kind === n &&
            'own' === d.placement &&
            this.defineClassElement(s, d);
        }, this);
      }, this);
    },
    initializeClassElements: function (s, d) {
      var n = s.prototype;
      ['method', 'field'].forEach(function (c) {
        d.forEach(function (d) {
          var t = d.placement;
          if (d.kind === c && ('static' === t || 'prototype' === t)) {
            var r = 'static' === t ? s : n;
            this.defineClassElement(r, d);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (s, d) {
      var n = d.descriptor;
      if ('field' === d.kind) {
        var c = d.initializer;
        n = {
          enumerable: n.enumerable,
          writable: n.writable,
          configurable: n.configurable,
          value: void 0 === c ? void 0 : c.call(s),
        };
      }
      Object.defineProperty(s, d.key, n);
    },
    decorateClass: function (s, d) {
      var n = [],
        c = [],
        t = { static: [], prototype: [], own: [] };
      if (
        (s.forEach(function (s) {
          this.addElementPlacement(s, t);
        }, this),
        s.forEach(function (s) {
          if (!p(s)) return n.push(s);
          var d = this.decorateElement(s, t);
          n.push(d.element),
            n.push.apply(n, d.extras),
            c.push.apply(c, d.finishers);
        }, this),
        !d)
      )
        return { elements: n, finishers: c };
      var r = this.decorateConstructor(n, d);
      return c.push.apply(c, r.finishers), (r.finishers = c), r;
    },
    addElementPlacement: function (s, d, n) {
      var c = d[s.placement];
      if (!n && -1 !== c.indexOf(s.key))
        throw new TypeError('Duplicated element (' + s.key + ')');
      c.push(s.key);
    },
    decorateElement: function (s, d) {
      for (
        var n = [], c = [], t = s.decorators, r = t.length - 1;
        r >= 0;
        r--
      ) {
        var i = d[s.placement];
        i.splice(i.indexOf(s.key), 1);
        var o = this.fromElementDescriptor(s),
          e = this.toElementFinisherExtras((0, t[r])(o) || o);
        (s = e.element),
          this.addElementPlacement(s, d),
          e.finisher && c.push(e.finisher);
        var l = e.extras;
        if (l) {
          for (var a = 0; a < l.length; a++) this.addElementPlacement(l[a], d);
          n.push.apply(n, l);
        }
      }
      return { element: s, finishers: c, extras: n };
    },
    decorateConstructor: function (s, d) {
      for (var n = [], c = d.length - 1; c >= 0; c--) {
        var t = this.fromClassDescriptor(s),
          r = this.toClassDescriptor((0, d[c])(t) || t);
        if (
          (void 0 !== r.finisher && n.push(r.finisher), void 0 !== r.elements)
        ) {
          s = r.elements;
          for (var i = 0; i < s.length - 1; i++)
            for (var o = i + 1; o < s.length; o++)
              if (s[i].key === s[o].key && s[i].placement === s[o].placement)
                throw new TypeError('Duplicated element (' + s[i].key + ')');
        }
      }
      return { elements: s, finishers: n };
    },
    fromElementDescriptor: function (s) {
      var d = {
        kind: s.kind,
        key: s.key,
        placement: s.placement,
        descriptor: s.descriptor,
      };
      return (
        Object.defineProperty(d, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === s.kind && (d.initializer = s.initializer),
        d
      );
    },
    toElementDescriptors: function (s) {
      if (void 0 !== s)
        return ((d = s),
        (function (s) {
          if (Array.isArray(s)) return s;
        })(d) ||
          (function (s) {
            if (
              ('undefined' != typeof Symbol && null != s[Symbol.iterator]) ||
              null != s['@@iterator']
            )
              return Array.from(s);
          })(d) ||
          (function (s, d) {
            if (s) {
              if ('string' == typeof s) return x(s, d);
              var n = {}.toString.call(s).slice(8, -1);
              return (
                'Object' === n && s.constructor && (n = s.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(s)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? x(s, d)
                  : void 0
              );
            }
          })(d) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (s) {
          var d = this.toElementDescriptor(s);
          return (
            this.disallowProperty(s, 'finisher', 'An element descriptor'),
            this.disallowProperty(s, 'extras', 'An element descriptor'),
            d
          );
        }, this);
      var d;
    },
    toElementDescriptor: function (s) {
      var d = s.kind + '';
      if ('method' !== d && 'field' !== d)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            d +
            '"'
        );
      var n = f(s.key),
        c = s.placement + '';
      if ('static' !== c && 'prototype' !== c && 'own' !== c)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            c +
            '"'
        );
      var t = s.descriptor;
      this.disallowProperty(s, 'elements', 'An element descriptor');
      var r = {
        kind: d,
        key: n,
        placement: c,
        descriptor: Object.assign({}, t),
      };
      return (
        'field' !== d
          ? this.disallowProperty(s, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              t,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              t,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              t,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (r.initializer = s.initializer)),
        r
      );
    },
    toElementFinisherExtras: function (s) {
      return {
        element: this.toElementDescriptor(s),
        finisher: y(s, 'finisher'),
        extras: this.toElementDescriptors(s.extras),
      };
    },
    fromClassDescriptor: function (s) {
      var d = {
        kind: 'class',
        elements: s.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(d, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        d
      );
    },
    toClassDescriptor: function (s) {
      var d = s.kind + '';
      if ('class' !== d)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            d +
            '"'
        );
      this.disallowProperty(s, 'key', 'A class descriptor'),
        this.disallowProperty(s, 'placement', 'A class descriptor'),
        this.disallowProperty(s, 'descriptor', 'A class descriptor'),
        this.disallowProperty(s, 'initializer', 'A class descriptor'),
        this.disallowProperty(s, 'extras', 'A class descriptor');
      var n = y(s, 'finisher');
      return { elements: this.toElementDescriptors(s.elements), finisher: n };
    },
    runClassFinishers: function (s, d) {
      for (var n = 0; n < d.length; n++) {
        var c = (0, d[n])(s);
        if (void 0 !== c) {
          if ('function' != typeof c)
            throw new TypeError('Finishers must return a constructor.');
          s = c;
        }
      }
      return s;
    },
    disallowProperty: function (s, d, n) {
      if (void 0 !== s[d])
        throw new TypeError(n + " can't have a ." + d + ' property.');
    },
  };
  return s;
}
function g(s) {
  var d,
    n = f(s.key);
  'method' === s.kind
    ? (d = { value: s.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === s.kind
    ? (d = { get: s.value, configurable: !0, enumerable: !1 })
    : 'set' === s.kind
    ? (d = { set: s.value, configurable: !0, enumerable: !1 })
    : 'field' === s.kind &&
      (d = { configurable: !0, writable: !0, enumerable: !0 });
  var c = {
    kind: 'field' === s.kind ? 'field' : 'method',
    key: n,
    placement: s.static ? 'static' : 'field' === s.kind ? 'own' : 'prototype',
    descriptor: d,
  };
  return (
    s.decorators && (c.decorators = s.decorators),
    'field' === s.kind && (c.initializer = s.value),
    c
  );
}
function u(s, d) {
  void 0 !== s.descriptor.get
    ? (d.descriptor.get = s.descriptor.get)
    : (d.descriptor.set = s.descriptor.set);
}
function p(s) {
  return s.decorators && s.decorators.length;
}
function h(s) {
  return void 0 !== s && !(void 0 === s.value && void 0 === s.writable);
}
function y(s, d) {
  var n = s[d];
  if (void 0 !== n && 'function' != typeof n)
    throw new TypeError("Expected '" + d + "' to be a function");
  return n;
}
function f(s) {
  var d = (function (s, d) {
    if ('object' != typeof s || !s) return s;
    var n = s[Symbol.toPrimitive];
    if (void 0 !== n) {
      var c = n.call(s, d || 'default');
      if ('object' != typeof c) return c;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === d ? String : Number)(s);
  })(s, 'string');
  return 'symbol' == typeof d ? d : d + '';
}
function x(s, d) {
  (null == d || d > s.length) && (d = s.length);
  for (var n = 0, c = Array(d); n < d; n++) c[n] = s[n];
  return c;
}
function b() {
  return (
    (b =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (s, d, n) {
            var c = (function (s, d) {
              for (; !{}.hasOwnProperty.call(s, d) && null !== (s = v(s)); );
              return s;
            })(s, d);
            if (c) {
              var t = Object.getOwnPropertyDescriptor(c, d);
              return t.get ? t.get.call(arguments.length < 3 ? s : n) : t.value;
            }
          }),
    b.apply(null, arguments)
  );
}
function v(s) {
  return (
    (v = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (s) {
          return s.__proto__ || Object.getPrototypeOf(s);
        }),
    v(s)
  );
}
const { stablePrefix: k } = n;
!(function (s, d, n, c) {
  var t = m();
  if (c) for (var r = 0; r < c.length; r++) t = c[r](t);
  var i = d(function (s) {
      t.initializeInstanceElements(s, o.elements);
    }, n),
    o = t.decorateClass(
      (function (s) {
        for (
          var d = [],
            n = function (s) {
              return (
                'method' === s.kind &&
                s.key === r.key &&
                s.placement === r.placement
              );
            },
            c = 0;
          c < s.length;
          c++
        ) {
          var t,
            r = s[c];
          if ('method' === r.kind && (t = d.find(n)))
            if (h(r.descriptor) || h(t.descriptor)) {
              if (p(r) || p(t))
                throw new ReferenceError(
                  'Duplicated methods (' + r.key + ") can't be decorated."
                );
              t.descriptor = r.descriptor;
            } else {
              if (p(r)) {
                if (p(t))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      r.key +
                      ').'
                  );
                t.decorators = r.decorators;
              }
              u(r, t);
            }
          else d.push(r);
        }
        return d;
      })(i.d.map(g)),
      s
    );
  t.initializeClassElements(i.F, o.elements),
    t.runClassFinishers(i.F, o.finishers);
})(
  [r(`${k}-hr`)],
  function (s, n) {
    class c extends n {
      constructor(...d) {
        super(...d), s(this);
      }
    }
    return {
      F: c,
      d: [
        {
          kind: 'field',
          decorators: [d({ attribute: 'type', reflect: !0 })],
          key: 'type',
          value: () => i.SOLID,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'size', reflect: !0 })],
          key: 'size',
          value: () => o.FLUID,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'contrast', reflect: !0 })],
          key: 'contrast',
          value: () => e.STRONG,
        },
        {
          kind: 'field',
          decorators: [d({ attribute: 'weight', reflect: !0 })],
          key: 'weight',
          value: () => l.THIN,
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            var s, d, n, t, r;
            this.hasAttribute('role') || this.setAttribute('role', 'separator'),
              ((s = c),
              (d = 'connectedCallback'),
              (n = this),
              (r = b(v(1 & (t = 3) ? s.prototype : s), d, n)),
              2 & t && 'function' == typeof r
                ? function (s) {
                    return r.apply(n, s);
                  }
                : r)([]);
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${k}--hr`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => a },
      ],
    };
  },
  t(c)
);
