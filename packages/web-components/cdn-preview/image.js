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
  b as e,
  i as o,
  n as t,
  x as d,
  a as r,
  s,
} from './query-assigned-elements.js';
import { t as c } from './state.js';
import { o as n } from './class-map.js';
import { o as i } from './host-listener2.js';
import { l as a } from './if-defined.js';
import { F as l } from './focus.js';
import './expressive-modal.js';
import './expressive-modal-close-button.js';
import './lightbox-image-viewer.js';
import './button.js';
import { s as p } from './spread.js';
import { M as m } from './modal-render.js';
import { S as g } from './stable-selector.js';
import { c as v } from './carbon-element.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let u = (function (e) {
  return (e.LIGHT = 'light'), (e.DARK = 'dark'), e;
})({});
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = o([
  ':root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:root{--cds-grid-columns:16}}@media (min-width:99rem){:root{--cds-grid-margin:1.5rem}}.cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start:0}.cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}.cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}.cds--subgrid--narrow{--cds-grid-gutter-start:0;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}.cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}.cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}.cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--md\\:col-span-0{display:none}.cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}.cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}.cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--lg\\:col-span-0{display:none}.cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){.cds--xlg\\:col-span-0{display:none}.cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){.cds--max\\:col-span-0{display:none}.cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){.cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){.cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}.cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){.cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){.cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}.cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}:host(c4d-video-player-container-v7){display:block}.c4d--video-player,:host(c4d-video-player-v7){color:var(--c4d--video-caption--color,var(--cds-text-secondary,#525252))}.c4d--video-player .c4d--image__img,:host(c4d-video-player-v7) .c4d--image__img{block-size:100%;inline-size:100%}.c4d--video-player c4d-image,:host(c4d-video-player-v7) c4d-image{padding-block-start:0}.c4d--video-player[background-mode] .c4d--video-player__video-container,:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video-container{block-size:100%}.c4d--video-player[background-mode] .c4d--video-player__video,.c4d--video-player[background-mode] ::slotted(.c4d--video-player__video),:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video,:host(c4d-video-player-v7[background-mode]) ::slotted(.c4d--video-player__video){aspect-ratio:var(--native-file-aspect-ratio,16/9);block-size:100%;inset:50% 0 0 50%;min-block-size:100%;min-inline-size:100%;translate:-50% -50%}.c4d--video-player[background-mode] .c4d--video-player__video[dir-mode=rtl],.c4d--video-player[background-mode] ::slotted(.c4d--video-player__video[dir-mode=rtl]),:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video[dir-mode=rtl],:host(c4d-video-player-v7[background-mode]) ::slotted(.c4d--video-player__video[dir-mode=rtl]){inset:50% -50% 0 50%}@media (max-width:65.98rem){.c4d--video-player[background-mode] .c4d--video-player__video[dir-mode=rtl],.c4d--video-player[background-mode] ::slotted(.c4d--video-player__video[dir-mode=rtl]),:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video[dir-mode=rtl],:host(c4d-video-player-v7[background-mode]) ::slotted(.c4d--video-player__video[dir-mode=rtl]){inset:50% -67% 0 50%}}.c4d--video-player .c4d--video-player__image-overlay:focus:before{border:1px solid var(--cds-focus-inverse,#fff);content:" ";inset:.125rem;outline:.125rem solid var(--cds-focus,#0f62fe);position:absolute;z-index:1}.c4d--video-player .c4d--image,:host(c4d-video-player-v7) c4d-image{block-size:100%;inline-size:100%;position:relative}.c4d--video-player .c4d--image:before,:host(c4d-video-player-v7) c4d-image:before{background-color:var(--cds-border-inverse,#161616);block-size:100%;content:"";inline-size:100%;inset-block-start:0;inset-inline-start:0;opacity:0;position:absolute;transition:opacity .15s cubic-bezier(.2,0,.38,.9);z-index:1}@media screen and (prefers-reduced-motion:reduce){.c4d--video-player .c4d--image:before,:host(c4d-video-player-v7) c4d-image:before{transition:none}}.c4d--video-player .c4d--image:hover:before,:host(c4d-video-player-v7) c4d-image:hover:before{opacity:.08}.c4d--video-player__video-container{block-size:0;display:block;inline-size:100%;overflow:hidden;padding-block-start:56.25%;position:relative}.c4d--video-player__video-container:focus{outline:none}.c4d--video-player__video-container .c4d--video-player__video,.c4d--video-player__video-container ::slotted(.c4d--video-player__video){inset:0;position:absolute}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--16x9{block-size:0;overflow:hidden;overflow:visible;padding-block-start:56.25%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--9x16{block-size:0;overflow:hidden;overflow:visible;padding-block-start:177.7777777778%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--2x1{block-size:0;overflow:hidden;overflow:visible;padding-block-start:50%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--1x2{block-size:0;overflow:hidden;overflow:visible;padding-block-start:200%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--4x3{block-size:0;overflow:hidden;overflow:visible;padding-block-start:75%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--3x4{block-size:0;overflow:hidden;overflow:visible;padding-block-start:133.3333333333%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--1x1{block-size:0;overflow:hidden;overflow:visible;padding-block-start:100%;position:relative}.c4d--video-player__video-caption{font-size:var(--cds-caption-02-font-size,.875rem);font-weight:var(--cds-caption-02-font-weight,400);letter-spacing:var(--cds-caption-02-letter-spacing,.32px);line-height:var(--cds-caption-02-line-height,1.28572);max-inline-size:90%;padding-block-start:var(--c4d--video-caption--padding,.5rem)}.c4d--video-player__video-caption[dir=rtl]{direction:rtl;max-inline-size:-moz-fit-content;max-inline-size:fit-content;text-align:end;unicode-bidi:-moz-plaintext;unicode-bidi:plaintext}.c4d--video-player__image-overlay{block-size:100%;border:none;cursor:pointer;inline-size:100%;padding:0}.c4d--video-player__image-overlay:focus{outline:3px solid var(--cds-focus,#0f62fe);outline-offset:1px}.c4d--video-player__image-overlay:active svg circle,.c4d--video-player__image-overlay:hover svg circle{fill:#161616;opacity:.9}.c4d--video-player__image-overlay:active svg path,.c4d--video-player__image-overlay:hover svg path{fill:var(--cds-icon-on-color,#fff)}.c4d--video-player__image-overlay svg{inset-block-start:calc(50% - 2rem);inset-inline-end:calc(50% - 2rem);position:absolute}.c4d--video-player__image-overlay svg circle,.c4d--video-player__image-overlay svg path{transition:fill .15s cubic-bezier(.2,0,.38,.9),opacity .15s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.c4d--video-player__image-overlay svg circle,.c4d--video-player__image-overlay svg path{transition:none}}.c4d--video-player__image-overlay svg circle{opacity:.8}.c4d--video-player .c4d--video-player__image-overlay:active .c4d--image:before,.c4d--video-player .c4d--video-player__image-overlay:active c4d-image:before,:host(c4d-video-player-v7) .c4d--video-player__image-overlay:active .c4d--image:before,:host(c4d-video-player-v7) .c4d--video-player__image-overlay:active c4d-image:before{opacity:.12}.c4d--video-player__toggle-playback{background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:3rem;border:0;color:#fff;inline-size:3rem;padding:.875rem;position:absolute;z-index:100}.c4d--video-player__toggle-playback--top-left{inset-block-start:0;inset-inline-start:0}.c4d--video-player__toggle-playback--top-right{inset-block-start:0;inset-inline-end:0}.c4d--video-player__toggle-playback--bottom-right{inset-block-end:0;inset-inline-end:0}.c4d--video-player__toggle-playback--bottom-left{inset-block-end:0;inset-inline-start:0}.c4d--video-player__toggle-playback:hover{background-color:hsla(0,0%,9%,.9);cursor:pointer}.c4d--video-player__toggle-playback:focus{outline:2px solid var(--cds-focus,#0f62fe)}:host(c4d-video-player-v7[intersection-mode]) ::slotted(.c4d--video-player__video){pointer-events:none}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{--cds-popover-drop-shadow:drop-shadow(0 2px 2px rgba(0,0,0,.2))}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{filter:var(--cds-popover-drop-shadow,none);inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;background-color:var(--cds-popover-background-color,var(--cds-layer));border:0;border-radius:var(--cds-popover-border-radius,2px);box-sizing:border-box;color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;font-family:inherit;font-size:100%;inline-size:-moz-max-content;inline-size:max-content;margin:0;max-inline-size:23rem;padding:0;pointer-events:auto;position:absolute;vertical-align:baseline;z-index:6000}.cds--layout--size-sm .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--layout--size-md .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--layout--size-lg .cds--popover-content{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{background-color:var(--cds-popover-background-color,var(--cds-layer));display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:0;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:0;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:0;transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline-end:0;inset-inline-start:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block-end:0;inset-block-start:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;block-size:2rem;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;display:inline-flex;font-family:inherit;font-size:100%;inline-size:100%;inline-size:2rem;justify-content:center;margin:0;padding:0;position:relative;text-align:start;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{color:var(--cds-text-inverse,#fff);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;border-block-end:1px dotted var(--cds-border-strong);border-radius:0;box-sizing:border-box;color:var(--cds-text-primary,#161616);cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term:focus{border-block-end-color:var(--cds-border-interactive,#0f62fe);outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;border-radius:0;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-shrink:0;font-family:inherit;font-size:100%;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding:0;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline-end:calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);padding-inline-start:calc(var(--cds-layout-density-padding-inline-local) - .0625rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:baseline;vertical-align:top}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only>:first-child{margin-block-start:.0625rem;min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-on-color-disabled,#8d8d8d);outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28);padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;inline-size:9.375rem;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:ButtonText}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--modal,:host(c4d-expressive-modal){align-items:center;background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:100vh;content:"";display:flex;inline-size:100vw;inset-block-start:0;inset-inline-start:0;justify-content:center;opacity:0;position:fixed;transition:opacity .24s cubic-bezier(.4,.14,1,1),visibility 0ms linear .24s;visibility:hidden;z-index:9000}.cds--modal.is-visible{opacity:1;transition:opacity .24s cubic-bezier(0,0,.3,1),visibility 0ms linear;visibility:inherit}@media screen and (prefers-reduced-motion:reduce){.cds--modal.is-visible{transition:none}}.cds--modal .cds--date-picker--fluid .ccdsds--date-picker-input__wrapper .cds--date-picker__input,.cds--modal .cds--list-box__wrapper--fluid .cds--list-box,.cds--modal .cds--list-box__wrapper--fluid.cds--list-box__wrapper,.cds--modal .cds--number-input--fluid .cds--number__control-btn:after,.cds--modal .cds--number-input--fluid .cds--number__control-btn:before,.cds--modal .cds--number-input--fluid input[type=number],.cds--modal .cds--search--fluid .cds--search-input,.cds--modal .cds--select--fluid .cds--select-input,.cds--modal .cds--text-area--fluid .cds--text-area,.cds--modal .cds--text-area--fluid .cds--text-area__wrapper,.cds--modal .cds--text-area--fluid .cds--text-area__wrapper[data-invalid] .cds--text-area__divider+.cds--form-requirement,.cds--modal .cds--text-input--fluid .cds--text-input,:host(c4d-expressive-modal) .cds--date-picker--fluid .ccdsds--date-picker-input__wrapper .cds--date-picker__input,:host(c4d-expressive-modal) .cds--list-box__wrapper--fluid .cds--list-box,:host(c4d-expressive-modal) .cds--list-box__wrapper--fluid.cds--list-box__wrapper,:host(c4d-expressive-modal) .cds--number-input--fluid .cds--number__control-btn:after,:host(c4d-expressive-modal) .cds--number-input--fluid .cds--number__control-btn:before,:host(c4d-expressive-modal) .cds--number-input--fluid input[type=number],:host(c4d-expressive-modal) .cds--search--fluid .cds--search-input,:host(c4d-expressive-modal) .cds--select--fluid .cds--select-input,:host(c4d-expressive-modal) .cds--text-area--fluid .cds--text-area,:host(c4d-expressive-modal) .cds--text-area--fluid .cds--text-area__wrapper,:host(c4d-expressive-modal) .cds--text-area--fluid .cds--text-area__wrapper[data-invalid] .cds--text-area__divider+.cds--form-requirement,:host(c4d-expressive-modal) .cds--text-input--fluid .cds--text-input{background-color:var(--cds-field-01,#f4f4f4)}.cds--modal .cds--list-box__wrapper--fluid .cds--list-box__menu,:host(c4d-expressive-modal) .cds--list-box__wrapper--fluid .cds--list-box__menu{background-color:var(--cds-layer-01,#f4f4f4)}.cds--modal .cds--list-box__menu-item:hover,:host(c4d-expressive-modal) .cds--list-box__menu-item:hover{background-color:var(--cds-layer-hover-02,#e8e8e8)}.cds--modal .cds--list-box__menu-item--active,:host(c4d-expressive-modal) .cds--list-box__menu-item--active{background-color:var(--cds-layer-selected-02,#e0e0e0)}.cds--modal .cds--list-box__menu-item--active:hover,:host(c4d-expressive-modal) .cds--list-box__menu-item--active:hover{background-color:var(--cds-layer-selected-hover-02,#d1d1d1)}.cds--modal .cds--number-input--fluid .cds--number__control-btn:hover:after,.cds--modal .cds--number-input--fluid .cds--number__control-btn:hover:before,:host(c4d-expressive-modal) .cds--number-input--fluid .cds--number__control-btn:hover:after,:host(c4d-expressive-modal) .cds--number-input--fluid .cds--number__control-btn:hover:before{background-color:var(--cds-field-hover)}.cds--modal .cds--number-input--fluid .cds--number__control-btn:focus:after,.cds--modal .cds--number-input--fluid .cds--number__control-btn:focus:before,:host(c4d-expressive-modal) .cds--number-input--fluid .cds--number__control-btn:focus:after,:host(c4d-expressive-modal) .cds--number-input--fluid .cds--number__control-btn:focus:before{border-inline-start:2px solid var(--cds-focus,#0f62fe)}.cds--modal.is-visible .cds--modal-container{transform:translateZ(0);transition:transform .24s cubic-bezier(0,0,.3,1)}.cds--modal-container{background-color:var(--cds-layer);block-size:100%;display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr auto;inline-size:100%;inset-block-start:0;max-block-size:100%;outline:3px solid transparent;outline-offset:-3px;position:fixed;transform:translate3d(0,-24px,0);transform-origin:top center;transition:transform .24s cubic-bezier(.4,.14,1,1)}@media (min-width:42rem){.cds--modal-container{block-size:auto;inline-size:84%;max-block-size:90%;position:static}}@media (min-width:66rem){.cds--modal-container{inline-size:60%;max-block-size:84%}}@media (min-width:82rem){.cds--modal-container{inline-size:48%}}.cds--modal-container .cds--modal-container-body{display:contents}.cds--modal-content{color:var(--cds-text-primary,#161616);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);font-weight:400;grid-column:1/-1;grid-row:2/-2;letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);overflow-y:auto;padding-block-end:3rem;padding-block-start:.5rem;padding-inline-end:1rem;padding-inline-start:1rem;position:relative}.cds--modal-content:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--modal-content:focus{outline-style:dotted}}.cds--modal-content .cds--form--fluid{margin-inline-end:-1rem;margin-inline-start:-1rem}.cds--modal-content>p,.cds--modal-content__regular-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);padding-inline-end:calc(20% - 2rem)}.cds--modal-content--with-form{padding-inline-end:1rem}.cds--modal-header{grid-column:1/-1;grid-row:1/1;margin-block-end:.5rem;padding-block-start:1rem;padding-inline-end:3rem;padding-inline-start:1rem}.cds--modal-header__label{border:0;box-sizing:border-box;color:var(--cds-text-secondary,#525252);font-family:inherit;font-size:100%;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);margin:0;margin-block-end:.25rem;padding:0;vertical-align:baseline}.cds--modal-header__label *,.cds--modal-header__label :after,.cds--modal-header__label :before{box-sizing:inherit}.cds--modal-header__heading{border:0;box-sizing:border-box;color:var(--cds-text-primary,#161616);font-family:inherit;font-size:100%;font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4);margin:0;padding:0;padding-inline-end:calc(20% - 3rem);vertical-align:baseline}.cds--modal-header__heading *,.cds--modal-header__heading :after,.cds--modal-header__heading :before{box-sizing:inherit}.cds--modal-container--xs .cds--modal-content__regular-content{padding-inline-end:1rem}.cds--modal-container--xs .cds--modal-content>p{padding-inline-end:0}@media (min-width:42rem){.cds--modal-container--xs{inline-size:48%}}@media (min-width:66rem){.cds--modal-container--xs{inline-size:32%;max-block-size:48%}}@media (min-width:82rem){.cds--modal-container--xs{inline-size:24%}}.cds--modal-container--sm .cds--modal-content__regular-content{padding-inline-end:1rem}.cds--modal-container--sm .cds--modal-content>p{padding-inline-end:0}@media (min-width:42rem){.cds--modal-container--sm{inline-size:60%}}@media (min-width:66rem){.cds--modal-container--sm{inline-size:42%;max-block-size:72%}.cds--modal-container--sm .cds--modal-content>p,.cds--modal-container--sm .cds--modal-content__regular-content{padding-inline-end:20%}}@media (min-width:82rem){.cds--modal-container--sm{inline-size:36%}}@media (min-width:42rem){.cds--modal-container--lg{inline-size:96%}}@media (min-width:66rem){.cds--modal-container--lg{inline-size:84%;max-block-size:96%}}@media (min-width:82rem){.cds--modal-container--lg{inline-size:72%}}.cds--modal-scroll-content{border-block-end:2px solid transparent;-webkit-mask-image:linear-gradient(to bottom,var(--cds-layer) calc(100% - 80px),transparent calc(100% - 48px),transparent 100%),linear-gradient(to left,var(--cds-layer) 0,16px,transparent 16px),linear-gradient(to right,var(--cds-layer) 0,2px,transparent 2px),linear-gradient(to top,var(--cds-layer) 0,2px,transparent 2px);mask-image:linear-gradient(to bottom,var(--cds-layer) calc(100% - 80px),transparent calc(100% - 48px),transparent 100%),linear-gradient(to left,var(--cds-layer) 0,16px,transparent 16px),linear-gradient(to right,var(--cds-layer) 0,2px,transparent 2px),linear-gradient(to top,var(--cds-layer) 0,2px,transparent 2px)}.cds--modal-scroll-content:has(.cds--autoalign){-webkit-mask-image:none;mask-image:none}.cds--modal-scroll-content>:last-child{margin-block-end:1.5rem}.cds--modal-footer{block-size:4rem;display:flex;grid-column:1/-1;grid-row:-1/-1;justify-content:flex-end;margin-block-start:auto}.cds--modal-footer .cds--btn{align-items:baseline;block-size:4rem;flex:0 1 50%;margin:0;max-inline-size:none;padding-block-end:2rem;padding-block-start:.875rem}.cds--modal-footer--three-button .cds--btn{align-items:flex-start;flex:0 1 25%}.cds--modal-close-button,:host(c4d-expressive-modal-close-button){inset-block-start:0;inset-inline-end:0;position:absolute}.cds--modal-close{background-color:transparent;block-size:3rem;border:2px solid transparent;cursor:pointer;inline-size:3rem;padding:.75rem;transition:background-color .11s cubic-bezier(.2,0,.38,.9)}.cds--modal-close:hover{background-color:var(--cds-layer-hover)}.cds--modal-close:focus{border-color:var(--cds-focus,#0f62fe);outline:none}.cds--modal-close::-moz-focus-inner{border:0}.cds--modal-close__icon{fill:var(--cds-icon-primary,#161616);block-size:1.25rem;inline-size:1.25rem}.cds--body--with-modal-open{overflow:hidden}.cds--body--with-modal-open .cds--modal .cds--overflow-menu-options,.cds--body--with-modal-open .cds--modal .cds--tooltip,.cds--body--with-modal-open .cds--overflow-menu-options,.cds--body--with-modal-open :host(c4d-expressive-modal) .cds--tooltip{z-index:9000}.cds--modal-container--full-width .cds--modal-content{margin:0;padding:0}.cds--modal--slug.cds--modal{background-color:var(--cds-ai-overlay,rgba(0,17,65,.5))}.cds--modal--slug .cds--modal-container{background:linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)) 0,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) border-box;background-color:var(--cds-layer);border:1px solid transparent;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 24px 40px -24px var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}.cds--modal--slug .cds--modal-container:has(.cds--modal-footer){background:linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)) 64px,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 64px,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) border-box;box-shadow:inset 0 -80px 0 -16px var(--cds-layer),inset 0 -160px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 24px 40px -24px var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}.cds--modal--slug .cds--modal-content.cds--modal-scroll-content{-webkit-mask-image:linear-gradient(to bottom,var(--cds-layer) calc(100% - 80px),transparent calc(100% - 48px),transparent 100%),linear-gradient(to left,var(--cds-layer) 0,16px,transparent 16px),linear-gradient(to right,var(--cds-layer) 0,2px,transparent 2px),linear-gradient(to top,var(--cds-layer) 0,2px,transparent 2px);mask-image:linear-gradient(to bottom,var(--cds-layer) calc(100% - 80px),transparent calc(100% - 48px),transparent 100%),linear-gradient(to left,var(--cds-layer) 0,16px,transparent 16px),linear-gradient(to right,var(--cds-layer) 0,2px,transparent 2px),linear-gradient(to top,var(--cds-layer) 0,2px,transparent 2px)}.cds--modal--slug .cds--modal-container-body>.cds--slug,.cds--modal-header>.cds--modal-close-button~.cds--slug,.cds--modal-header>.cds--slug:has(+.cds--modal-close-button,+:host(c4d-expressive-modal-close-button)),.cds--modal-header>:host(c4d-expressive-modal-close-button)~.cds--slug{inset-block-start:.625rem;inset-inline-end:3rem;position:absolute}.cds--modal--slug .cds--modal-content--overflow-indicator,.cds--modal--slug .cds--modal-content--overflow-indicator:before{display:none}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--modal-close__icon{fill:ButtonText}.cds--modal-close:focus{color:Highlight;outline:1px solid Highlight}}:host(c4d-expressive-modal) .cds--modal-container{grid-template-rows:1fr;min-block-size:5.25rem;padding:1rem}@media (min-width:42rem){:host(c4d-expressive-modal) .cds--modal-container{padding:2rem}}:host(c4d-expressive-modal) .cds--modal-content{display:grid;grid-template-rows:auto 1fr auto;padding-block-end:0}:host(c4d-expressive-modal) .c4d-ce--modal__header--with-body{margin-block-end:1rem}:host(c4d-expressive-modal) .c4d-ce--modal__body{inline-size:100%}:host(c4d-expressive-modal) .c4d-ce--modal__body--with-footer{margin-block-end:3rem}:host(c4d-expressive-modal[open]){opacity:1;transition:opacity .24s cubic-bezier(0,0,.3,1),visibility 0ms linear;visibility:inherit}:host(c4d-expressive-modal[open]) .cds--modal-container{transform:translateZ(0);transition:transform .24s cubic-bezier(0,0,.3,1)}@media screen and (prefers-reduced-motion:reduce){:host(c4d-expressive-modal[open]){transition:none}}:host(c4d-expressive-modal-footer) .cds--modal-footer{block-size:3rem;justify-content:flex-start}:host(c4d-expressive-modal-close-button) .cds--modal-close{inset-block-start:0;inset-inline-end:0;position:fixed;z-index:2}.cds--modal--expressive .cds--modal-content h1,:host(c4d-expressive-modal-heading){font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}:host(c4d-expressive-modal-header){display:block;padding:0}:host(c4d-expressive-modal-body),:host(c4d-lightbox-media-viewer-body){font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}@media (min-width:42rem){.cds--modal--expressive--fullwidth .cds--modal-container,:host(c4d-expressive-modal[expressive-size=full-width]) .cds--modal-container{block-size:calc(100% - 2rem);inline-size:calc(100% - 2rem);max-block-size:none;max-inline-size:96rem}}:host(c4d-expressive-modal[expressive-size=full-width]) .cds--modal-container{padding:0}:host(c4d-expressive-modal[expressive-size=full-width]) .cds--modal-content{padding:1rem}@media (min-width:42rem){:host(c4d-expressive-modal[expressive-size=full-width]) .cds--modal-content{padding:2rem}}.cds--modal--expressive--fullwidth .cds--modal-content,:host(c4d-expressive-modal[size=full-width]) ::slotted(c4d-expressive-modal-body),:host(c4d-expressive-modal[size=full-width]) ::slotted(c4d-lightbox-media-viewer-body){block-size:auto;min-block-size:31.25rem;padding-inline-end:0}:host(c4d-card-cta-image),:host(c4d-global-banner-image),:host(c4d-image){display:block;position:relative}:host(c4d-card-cta-image) .c4d--image__img,:host(c4d-global-banner-image) .c4d--image__img,:host(c4d-image) .c4d--image__img{block-size:100%;display:block;inline-size:100%;-o-object-fit:cover;object-fit:cover}:host(c4d-card-cta-image) .c4d--image__img--border,:host(c4d-global-banner-image) .c4d--image__img--border,:host(c4d-image) .c4d--image__img--border{outline:1px solid var(--cds-border-subtle-02,#e0e0e0)}:host(c4d-card-cta-image::slotted(svg[slot=icon])),:host(c4d-image::slotted(svg[slot=icon])){inset-block-start:calc(50% - 2rem);inset-inline-end:calc(50% - 2rem);position:absolute}:host(c4d-image-item){display:none}:host(c4d-image),:host(c4d-image[card-group-item]){overflow:hidden}.c4d--image__longdescription{block-size:1px;inline-size:1px;inset-block-start:auto;inset-inline-start:-10000px;overflow:hidden;position:absolute}:host(c4d-image[heading]){display:block;margin-block:2rem}@media (min-width:42rem){:host(c4d-image[heading]){margin-block:2rem}}.c4d--image-with-caption__image{background-color:transparent;border:1px solid var(--cds-border-tile-01,#c6c6c6);display:block;inline-size:100%;padding:0;pointer-events:none;position:relative}@media (min-width:42rem){.c4d--image-with-caption__image:hover{cursor:zoom-in}.c4d--image-with-caption__image:hover .c4d--image__img{filter:brightness(80%)}.c4d--image-with-caption__image:hover .c4d--image-with-caption__zoom-button{background-color:#161616}.c4d--image-with-caption__image:focus{border:1px solid var(--cds-focus-inset,#fff);outline:.125rem solid var(--cds-focus,#0f62fe)}}.c4d--image-with-caption__zoom-button{display:none}@media (min-width:42rem){.c4d--image-with-caption__zoom-button{background-color:hsla(0,0%,9%,.85);block-size:3rem;display:flex;inline-size:3rem;inset-block-end:0;inset-inline-end:0;position:absolute}.c4d--image-with-caption__zoom-button svg{fill:#fff;margin:auto}.c4d--image-with-caption__image,.c4d--image-with-caption__zoom-button{pointer-events:auto;transition:.15s cubic-bezier(.2,0,.38,.9)}}.c4d--image__caption{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);margin-block-start:.5rem;max-inline-size:40rem}:host(c4d-image[lightbox-contrast=dark]) .c4d--image-with-caption__zoom-button{background-color:hsla(0,0%,100%,.85)}:host(c4d-image[lightbox-contrast=dark]) .c4d--image-with-caption__zoom-button svg{fill:#262626}@media (min-width:42rem){:host(c4d-image[lightbox-contrast=dark]) .c4d--image-with-caption__image:hover .c4d--image__img{filter:brightness(120%)}:host(c4d-image[lightbox-contrast=dark]) .c4d--image-with-caption__image:hover .c4d--image-with-caption__zoom-button{background-color:#fff}}:host(c4d-image-logo){background-color:var(--cds-layer-02,#fff);display:flex;margin:1rem 1rem .5rem;max-inline-size:10rem}:host(c4d-image-logo):before{block-size:0;content:"";float:inline-start;inline-size:1px;margin-inline-start:-1px;padding-block-start:50%}:host(c4d-image-logo):after{clear:both;content:"";display:table}:host(c4d-image-logo) .c4d--image__img{block-size:100%;inline-size:100%;-o-object-fit:contain;object-fit:contain}',
]);
let h,
  f,
  y,
  x,
  k,
  _,
  z,
  w = (e) => e;
function E(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(e);
    o &&
      (d = d.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      t.push.apply(t, d);
  }
  return t;
}
function j(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = null != arguments[o] ? arguments[o] : {};
    o % 2
      ? E(Object(t), !0).forEach(function (o) {
          C(e, o, t[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : E(Object(t)).forEach(function (o) {
          Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
        });
  }
  return e;
}
function C(e, o, t) {
  return (
    (o = A(o)) in e
      ? Object.defineProperty(e, o, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[o] = t),
    e
  );
}
function O() {
  O = function () {
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
      ['method', 'field'].forEach(function (d) {
        o.forEach(function (o) {
          var r = o.placement;
          if (o.kind === d && ('static' === r || 'prototype' === r)) {
            var s = 'static' === r ? e : t;
            this.defineClassElement(s, o);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, o) {
      var t = o.descriptor;
      if ('field' === o.kind) {
        var d = o.initializer;
        t = {
          enumerable: t.enumerable,
          writable: t.writable,
          configurable: t.configurable,
          value: void 0 === d ? void 0 : d.call(e),
        };
      }
      Object.defineProperty(e, o.key, t);
    },
    decorateClass: function (e, o) {
      var t = [],
        d = [],
        r = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, r);
        }, this),
        e.forEach(function (e) {
          if (!S(e)) return t.push(e);
          var o = this.decorateElement(e, r);
          t.push(o.element),
            t.push.apply(t, o.extras),
            d.push.apply(d, o.finishers);
        }, this),
        !o)
      )
        return { elements: t, finishers: d };
      var s = this.decorateConstructor(t, o);
      return d.push.apply(d, s.finishers), (s.finishers = d), s;
    },
    addElementPlacement: function (e, o, t) {
      var d = o[e.placement];
      if (!t && -1 !== d.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      d.push(e.key);
    },
    decorateElement: function (e, o) {
      for (
        var t = [], d = [], r = e.decorators, s = r.length - 1;
        s >= 0;
        s--
      ) {
        var c = o[e.placement];
        c.splice(c.indexOf(e.key), 1);
        var n = this.fromElementDescriptor(e),
          i = this.toElementFinisherExtras((0, r[s])(n) || n);
        (e = i.element),
          this.addElementPlacement(e, o),
          i.finisher && d.push(i.finisher);
        var a = i.extras;
        if (a) {
          for (var l = 0; l < a.length; l++) this.addElementPlacement(a[l], o);
          t.push.apply(t, a);
        }
      }
      return { element: e, finishers: d, extras: t };
    },
    decorateConstructor: function (e, o) {
      for (var t = [], d = o.length - 1; d >= 0; d--) {
        var r = this.fromClassDescriptor(e),
          s = this.toClassDescriptor((0, o[d])(r) || r);
        if (
          (void 0 !== s.finisher && t.push(s.finisher), void 0 !== s.elements)
        ) {
          e = s.elements;
          for (var c = 0; c < e.length - 1; c++)
            for (var n = c + 1; n < e.length; n++)
              if (e[c].key === e[n].key && e[c].placement === e[n].placement)
                throw new TypeError('Duplicated element (' + e[c].key + ')');
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
              if ('string' == typeof e) return M(e, o);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === t && e.constructor && (t = e.constructor.name),
                'Map' === t || 'Set' === t
                  ? Array.from(e)
                  : 'Arguments' === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? M(e, o)
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
      var t = A(e.key),
        d = e.placement + '';
      if ('static' !== d && 'prototype' !== d && 'own' !== d)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            d +
            '"'
        );
      var r = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var s = {
        kind: o,
        key: t,
        placement: d,
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
            (s.initializer = e.initializer)),
        s
      );
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: T(e, 'finisher'),
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
      var t = T(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: t };
    },
    runClassFinishers: function (e, o) {
      for (var t = 0; t < o.length; t++) {
        var d = (0, o[t])(e);
        if (void 0 !== d) {
          if ('function' != typeof d)
            throw new TypeError('Finishers must return a constructor.');
          e = d;
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
function P(e) {
  var o,
    t = A(e.key);
  'method' === e.kind
    ? (o = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (o = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (o = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (o = { configurable: !0, writable: !0, enumerable: !0 });
  var d = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: t,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: o,
  };
  return (
    e.decorators && (d.decorators = e.decorators),
    'field' === e.kind && (d.initializer = e.value),
    d
  );
}
function $(e, o) {
  void 0 !== e.descriptor.get
    ? (o.descriptor.get = e.descriptor.get)
    : (o.descriptor.set = e.descriptor.set);
}
function S(e) {
  return e.decorators && e.decorators.length;
}
function D(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function T(e, o) {
  var t = e[o];
  if (void 0 !== t && 'function' != typeof t)
    throw new TypeError("Expected '" + o + "' to be a function");
  return t;
}
function A(e) {
  var o = (function (e, o) {
    if ('object' != typeof e || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (void 0 !== t) {
      var d = t.call(e, o || 'default');
      if ('object' != typeof d) return d;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === o ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof o ? o : o + '';
}
function M(e, o) {
  (null == o || o > e.length) && (o = e.length);
  for (var t = 0, d = Array(o); t < o; t++) d[t] = e[t];
  return d;
}
function R(e, o, t, d) {
  var r = I(B(1 & d ? e.prototype : e), o, t);
  return 2 & d && 'function' == typeof r
    ? function (e) {
        return r.apply(t, e);
      }
    : r;
}
function I() {
  return (
    (I =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, o, t) {
            var d = (function (e, o) {
              for (; !{}.hasOwnProperty.call(e, o) && null !== (e = B(e)); );
              return e;
            })(e, o);
            if (d) {
              var r = Object.getOwnPropertyDescriptor(d, o);
              return r.get ? r.get.call(arguments.length < 3 ? e : t) : r.value;
            }
          }),
    I.apply(null, arguments)
  );
}
function B(e) {
  return (
    (B = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    B(e)
  );
}
const { stablePrefix: F } = s;
let q = (function (e, o, t, d) {
  var r = O();
  if (d) for (var s = 0; s < d.length; s++) r = d[s](r);
  var c = o(function (e) {
      r.initializeInstanceElements(e, n.elements);
    }, t),
    n = r.decorateClass(
      (function (e) {
        for (
          var o = [],
            t = function (e) {
              return (
                'method' === e.kind &&
                e.key === s.key &&
                e.placement === s.placement
              );
            },
            d = 0;
          d < e.length;
          d++
        ) {
          var r,
            s = e[d];
          if ('method' === s.kind && (r = o.find(t)))
            if (D(s.descriptor) || D(r.descriptor)) {
              if (S(s) || S(r))
                throw new ReferenceError(
                  'Duplicated methods (' + s.key + ") can't be decorated."
                );
              r.descriptor = s.descriptor;
            } else {
              if (S(s)) {
                if (S(r))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      s.key +
                      ').'
                  );
                r.decorators = s.decorators;
              }
              $(s, r);
            }
          else o.push(s);
        }
        return o;
      })(c.d.map(P)),
      e
    );
  return (
    r.initializeClassElements(c.F, n.elements),
    r.runClassFinishers(c.F, n.finishers)
  );
})(
  [v(`${F}-image`)],
  function (o, s) {
    class l extends s {
      constructor(...e) {
        super(...e), o(this);
      }
    }
    return {
      F: l,
      d: [
        { kind: 'field', decorators: [c()], key: '_images', value: () => [] },
        {
          kind: 'method',
          key: '_handleSlotChange',
          value: function ({ target: e }) {
            const { selectorItem: o } = this.constructor;
            this._images = e
              .assignedNodes()
              .reduce(
                (e, o) => (
                  'SLOT' === o.tagName
                    ? e.push(...o.assignedNodes())
                    : e.push(o),
                  e
                ),
                []
              )
              .filter((e) => e.nodeType === Node.ELEMENT_NODE && e.matches(o));
          },
        },
        {
          kind: 'method',
          key: '_handleClick',
          value: function () {
            this.open = !0;
          },
        },
        {
          kind: 'field',
          key: '_handleCloseModal',
          value() {
            return () => {
              this.open = !1;
            };
          },
        },
        { kind: 'field', key: '_hCloseModal', value: () => null },
        { kind: 'field', decorators: [t()], key: 'alt', value: () => '' },
        {
          kind: 'field',
          decorators: [t({ attribute: 'default-src' })],
          key: 'defaultSrc',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [t({ type: Boolean, reflect: !0 })],
          key: 'border',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [
            t({ type: Boolean, reflect: !0, attribute: 'card-group-item' }),
          ],
          key: 'cardGroupItem',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [t({ attribute: 'lightbox-contrast' })],
          key: 'lightboxContrast',
          value: () => u.LIGHT,
        },
        {
          kind: 'field',
          decorators: [t({ type: Boolean, reflect: !0 })],
          key: 'lightbox',
          value: () => !1,
        },
        { kind: 'field', decorators: [t()], key: 'heading', value: () => '' },
        {
          kind: 'field',
          decorators: [
            t({ attribute: 'launch-lightbox-button-assistive-text' }),
          ],
          key: 'launchLightboxButtonAssistiveText',
          value: () => 'launch light box media viewer',
        },
        { kind: 'field', decorators: [t()], key: 'copy', value: () => '' },
        {
          kind: 'field',
          decorators: [t({ type: Boolean, reflect: !0 })],
          key: 'open',
          value: () => !1,
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            R(l, 'connectedCallback', this, 3)([]),
              (this.modalRenderRoot = this.createModalRenderRoot()),
              (this._hCloseModal = i(
                this.modalRenderRoot,
                this.constructor.eventCloseModal,
                this._handleCloseModal
              ));
          },
        },
        {
          kind: 'method',
          key: 'disconnectedCallback',
          value: function () {
            this._hCloseModal &&
              (this._hCloseModal = this._hCloseModal.release()),
              R(l, 'disconnectedCallback', this, 3)([]);
          },
        },
        {
          kind: 'method',
          key: 'renderImage',
          value: function () {
            const {
                alt: e,
                border: o,
                defaultSrc: t,
                lightbox: r,
                _images: s,
                _handleSlotChange: c,
              } = this,
              i = n({
                [`${F}--image__img`]: !0,
                [`${F}--image__img--border`]: o && !r,
              });
            return d(
              h ||
                (h = w`
      <slot @slotchange="${0}"></slot>
      <picture part="picture">
        ${0}
        <img
          class="${0}"
          src="${0}"
          alt="${0}"
          aria-describedby="image-caption long-description"
          part="image"
          loading="lazy" />
      </picture>
      <div
        id="long-description"
        class="${0}--image__longdescription"
        part="long-description">
        <slot name="long-description"></slot>
      </div>
      <slot name="icon"></slot>
    `),
              c,
              s.map((e) =>
                d(
                  f || (f = w`<source media="${0}" srcset="${0}"></source>`),
                  e.getAttribute('media'),
                  e.getAttribute('srcset')
                )
              ),
              i,
              t,
              e,
              F
            );
          },
        },
        {
          kind: 'method',
          key: 'renderModal',
          value: function () {
            const {
              alt: e,
              copy: o,
              defaultSrc: t,
              heading: r,
              lightbox: s,
              open: c,
            } = this;
            return s
              ? d(
                  y ||
                    (y = w`
          <c4d-expressive-modal
            ?open="${0}"
            expressive-size="full-width"
            part="expressive-modal">
            <c4d-expressive-modal-close-button
              part="expressive-modal-close-button"></c4d-expressive-modal-close-button>
            <c4d-lightbox-image-viewer
              alt="${0}"
              default-src="${0}"
              description="${0}"
              title="${0}"
              part="lightbox-image-viewer">
            </c4d-lightbox-image-viewer>
          </c4d-expressive-modal>
        `),
                  c,
                  a(e),
                  a(t),
                  a(o),
                  a(r)
                )
              : void 0;
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const {
              heading: o,
              launchLightboxButtonAssistiveText: t,
              lightbox: r,
              _handleClick: s,
            } = this;
            return d(
              x ||
                (x = w`
      ${0}
      ${0}
    `),
              r
                ? d(
                    k ||
                      (k = w`
            <button
              class="${0}--image-with-caption__image"
              aria-label="${0}"
              @click="${0}"
              part="lightbox-button">
              ${0}
              <div
                class="${0}--image-with-caption__zoom-button"
                part="zoom-button">
                ${0}
              </div>
            </button>
          `),
                    F,
                    a(t),
                    s,
                    this.renderImage(),
                    F,
                    (({ children: o, ...t } = {}) =>
                      e`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${p(
                        t
                      )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${o}<path d="M20 2L20 4 26.586 4 18 12.582 19.414 14 28 5.414 28 12 30 12 30 2 20 2zM14 19.416L12.592 18 4 26.586 4 20 2 20 2 30 12 30 12 28 5.414 28 14 19.416z"></path></svg>`)(
                      { part: 'zoom-icon' }
                    )
                  )
                : d(_ || (_ = w` ${0} `), this.renderImage()),
              o
                ? d(
                    z ||
                      (z = w`
            <p
              id="image-caption"
              class="${0}--image__caption"
              part="caption">
              ${0}
            </p>
          `),
                    F,
                    o
                  )
                : ''
            );
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventCloseModal',
          value: function () {
            return `${F}-expressive-modal-closed`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorItem',
          value: function () {
            return `${F}-image-item`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${F}--image`;
          },
        },
        {
          kind: 'field',
          static: !0,
          key: 'shadowRootOptions',
          value: () =>
            j(j({}, r.shadowRootOptions), {}, { delegatesFocus: !0 }),
        },
        { kind: 'field', static: !0, key: 'styles', value: () => b },
      ],
    };
  },
  g(m(l(r)))
);
export { q as C, b as s };
