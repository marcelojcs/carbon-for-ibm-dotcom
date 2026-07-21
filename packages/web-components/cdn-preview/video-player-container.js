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

import { C as e, s as t, b as i } from './store.js';
import {
  i as r,
  n,
  x as o,
  a as s,
  s as d,
  A as a,
} from './query-assigned-elements.js';
import { K as c } from './cta.js';
import { S as l } from './stable-selector.js';
import { t as u } from './state.js';
import { H as m } from './host-listener.js';
import { H as p } from './host-listener2.js';
import { H as g } from './hybrid-render.js';
import { o as h } from './class-map.js';
import { F as y } from './focus.js';
import { s as f, a as v } from './205.js';
import { s as b } from './206.js';
import { f as k, a as _ } from './formatVideoCaption.js';
import './image.js';
import { c as x } from './carbon-element.js';
import { i as w } from './if-non-empty.js';
import { L as E } from './Locale.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let z = (function (e) {
  return (
    (e.SET_REQUEST_MEDIA_DATA_IN_PROGRESS =
      'SET_REQUEST_MEDIA_DATA_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_MEDIA_DATA = 'SET_ERROR_REQUEST_MEDIA_DATA'),
    (e.SET_MEDIA_DATA = 'SET_MEDIA_DATA'),
    e
  );
})({});
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ function P(e) {
  return async (t, i) => {
    var r;
    const { requestsMediaData: n = {} } =
        null !== (r = i().mediaPlayerAPI) && void 0 !== r ? r : {},
      { [e]: o } = n;
    if (o) return o;
    const s = c.api(e);
    t(
      (function (e, t) {
        return {
          type: z.SET_REQUEST_MEDIA_DATA_IN_PROGRESS,
          mediaId: e,
          request: t,
        };
      })(e, s)
    );
    try {
      t(
        (function (e, t) {
          return { type: z.SET_MEDIA_DATA, mediaId: e, mediaData: t };
        })(e, await s)
      );
    } catch (i) {
      t(
        (function (e, t) {
          return { type: z.SET_ERROR_REQUEST_MEDIA_DATA, mediaId: e, error: t };
        })(e, i)
      );
    }
    return s;
  };
}
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ let O = (function (e) {
    return (e.THUMBNAIL = 'thumbnail'), (e.VIDEO = 'video'), e;
  })({}),
  T = (function (e) {
    return (e.INLINE = 'inline'), (e.LIGHTBOX = 'lightbox'), e;
  })({}),
  A = (function (e) {
    return (
      (e.TOP_LEFT = 'top-left'),
      (e.TOP_RIGHT = 'top-right'),
      (e.BOTTOM_RIGHT = 'bottom-right'),
      (e.BOTTOM_LEFT = 'bottom-left'),
      e
    );
  })({});
var D = r([
  ':root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:root{--cds-grid-columns:16}}@media (min-width:99rem){:root{--cds-grid-margin:1.5rem}}.cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start:0}.cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}.cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}.cds--subgrid--narrow{--cds-grid-gutter-start:0;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}.cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}.cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}.cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--md\\:col-span-0{display:none}.cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}.cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}.cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--lg\\:col-span-0{display:none}.cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){.cds--xlg\\:col-span-0{display:none}.cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){.cds--max\\:col-span-0{display:none}.cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){.cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){.cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}.cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){.cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){.cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}.cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{clip:rect(0,0,0,0);block-size:1px;border:0;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;visibility:inherit;white-space:nowrap}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}:host(c4d-video-player-container-v7){display:block}.c4d--video-player,:host(c4d-video-player-v7){color:var(--c4d--video-caption--color,var(--cds-text-secondary,#525252))}.c4d--video-player .c4d--image__img,:host(c4d-video-player-v7) .c4d--image__img{block-size:100%;inline-size:100%}.c4d--video-player c4d-image,:host(c4d-video-player-v7) c4d-image{padding-block-start:0}.c4d--video-player[background-mode] .c4d--video-player__video-container,:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video-container{block-size:100%}.c4d--video-player[background-mode] .c4d--video-player__video,.c4d--video-player[background-mode] ::slotted(.c4d--video-player__video),:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video,:host(c4d-video-player-v7[background-mode]) ::slotted(.c4d--video-player__video){aspect-ratio:var(--native-file-aspect-ratio,16/9);block-size:100%;inset:50% 0 0 50%;min-block-size:100%;min-inline-size:100%;translate:-50% -50%}.c4d--video-player[background-mode] .c4d--video-player__video[dir-mode=rtl],.c4d--video-player[background-mode] ::slotted(.c4d--video-player__video[dir-mode=rtl]),:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video[dir-mode=rtl],:host(c4d-video-player-v7[background-mode]) ::slotted(.c4d--video-player__video[dir-mode=rtl]){inset:50% -50% 0 50%}@media (max-width:65.98rem){.c4d--video-player[background-mode] .c4d--video-player__video[dir-mode=rtl],.c4d--video-player[background-mode] ::slotted(.c4d--video-player__video[dir-mode=rtl]),:host(c4d-video-player-v7[background-mode]) .c4d--video-player__video[dir-mode=rtl],:host(c4d-video-player-v7[background-mode]) ::slotted(.c4d--video-player__video[dir-mode=rtl]){inset:50% -67% 0 50%}}.c4d--video-player .c4d--video-player__image-overlay:focus:before{border:1px solid var(--cds-focus-inverse,#fff);content:" ";inset:.125rem;outline:.125rem solid var(--cds-focus,#0f62fe);position:absolute;z-index:1}.c4d--video-player .c4d--image,:host(c4d-video-player-v7) c4d-image{block-size:100%;inline-size:100%;position:relative}.c4d--video-player .c4d--image:before,:host(c4d-video-player-v7) c4d-image:before{background-color:var(--cds-border-inverse,#161616);block-size:100%;content:"";inline-size:100%;inset-block-start:0;inset-inline-start:0;opacity:0;position:absolute;transition:opacity .15s cubic-bezier(.2,0,.38,.9);z-index:1}@media screen and (prefers-reduced-motion:reduce){.c4d--video-player .c4d--image:before,:host(c4d-video-player-v7) c4d-image:before{transition:none}}.c4d--video-player .c4d--image:hover:before,:host(c4d-video-player-v7) c4d-image:hover:before{opacity:.08}.c4d--video-player__video-container{block-size:0;display:block;inline-size:100%;overflow:hidden;padding-block-start:56.25%;position:relative}.c4d--video-player__video-container:focus{outline:none}.c4d--video-player__video-container .c4d--video-player__video,.c4d--video-player__video-container ::slotted(.c4d--video-player__video){inset:0;position:absolute}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--16x9{block-size:0;overflow:hidden;overflow:visible;padding-block-start:56.25%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--9x16{block-size:0;overflow:hidden;overflow:visible;padding-block-start:177.7777777778%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--2x1{block-size:0;overflow:hidden;overflow:visible;padding-block-start:50%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--1x2{block-size:0;overflow:hidden;overflow:visible;padding-block-start:200%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--4x3{block-size:0;overflow:hidden;overflow:visible;padding-block-start:75%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--3x4{block-size:0;overflow:hidden;overflow:visible;padding-block-start:133.3333333333%;position:relative}.c4d--video-player__video-container.c4d--video-player__aspect-ratio--1x1{block-size:0;overflow:hidden;overflow:visible;padding-block-start:100%;position:relative}.c4d--video-player__video-caption{font-size:var(--cds-caption-02-font-size,.875rem);font-weight:var(--cds-caption-02-font-weight,400);letter-spacing:var(--cds-caption-02-letter-spacing,.32px);line-height:var(--cds-caption-02-line-height,1.28572);max-inline-size:90%;padding-block-start:var(--c4d--video-caption--padding,.5rem)}.c4d--video-player__video-caption[dir=rtl]{direction:rtl;max-inline-size:-moz-fit-content;max-inline-size:fit-content;text-align:end;unicode-bidi:-moz-plaintext;unicode-bidi:plaintext}.c4d--video-player__image-overlay{block-size:100%;border:none;cursor:pointer;inline-size:100%;padding:0}.c4d--video-player__image-overlay:focus{outline:3px solid var(--cds-focus,#0f62fe);outline-offset:1px}.c4d--video-player__image-overlay:active svg circle,.c4d--video-player__image-overlay:hover svg circle{fill:#161616;opacity:.9}.c4d--video-player__image-overlay:active svg path,.c4d--video-player__image-overlay:hover svg path{fill:var(--cds-icon-on-color,#fff)}.c4d--video-player__image-overlay svg{inset-block-start:calc(50% - 2rem);inset-inline-end:calc(50% - 2rem);position:absolute}.c4d--video-player__image-overlay svg circle,.c4d--video-player__image-overlay svg path{transition:fill .15s cubic-bezier(.2,0,.38,.9),opacity .15s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.c4d--video-player__image-overlay svg circle,.c4d--video-player__image-overlay svg path{transition:none}}.c4d--video-player__image-overlay svg circle{opacity:.8}.c4d--video-player .c4d--video-player__image-overlay:active .c4d--image:before,.c4d--video-player .c4d--video-player__image-overlay:active c4d-image:before,:host(c4d-video-player-v7) .c4d--video-player__image-overlay:active .c4d--image:before,:host(c4d-video-player-v7) .c4d--video-player__image-overlay:active c4d-image:before{opacity:.12}.c4d--video-player__toggle-playback{background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:3rem;border:0;color:#fff;inline-size:3rem;padding:.875rem;position:absolute;z-index:100}.c4d--video-player__toggle-playback--top-left{inset-block-start:0;inset-inline-start:0}.c4d--video-player__toggle-playback--top-right{inset-block-start:0;inset-inline-end:0}.c4d--video-player__toggle-playback--bottom-right{inset-block-end:0;inset-inline-end:0}.c4d--video-player__toggle-playback--bottom-left{inset-block-end:0;inset-inline-start:0}.c4d--video-player__toggle-playback:hover{background-color:hsla(0,0%,9%,.9);cursor:pointer}.c4d--video-player__toggle-playback:focus{outline:2px solid var(--cds-focus,#0f62fe)}:host(c4d-video-player-v7[intersection-mode]) ::slotted(.c4d--video-player__video){pointer-events:none}',
]);
let I,
  C,
  S,
  j,
  M,
  $,
  V,
  R,
  F,
  B = (e) => e;
function L(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      i.push.apply(i, r);
  }
  return i;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? L(Object(i), !0).forEach(function (t) {
          q(e, t, i[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
      : L(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
  }
  return e;
}
function q(e, t, i) {
  return (
    (t = K(t)) in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
function U() {
  U = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, t) {
      ['method', 'field'].forEach(function (i) {
        t.forEach(function (t) {
          t.kind === i &&
            'own' === t.placement &&
            this.defineClassElement(e, t);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, t) {
      var i = e.prototype;
      ['method', 'field'].forEach(function (r) {
        t.forEach(function (t) {
          var n = t.placement;
          if (t.kind === r && ('static' === n || 'prototype' === n)) {
            var o = 'static' === n ? e : i;
            this.defineClassElement(o, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var i = t.descriptor;
      if ('field' === t.kind) {
        var r = t.initializer;
        i = {
          enumerable: i.enumerable,
          writable: i.writable,
          configurable: i.configurable,
          value: void 0 === r ? void 0 : r.call(e),
        };
      }
      Object.defineProperty(e, t.key, i);
    },
    decorateClass: function (e, t) {
      var i = [],
        r = [],
        n = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, n);
        }, this),
        e.forEach(function (e) {
          if (!G(e)) return i.push(e);
          var t = this.decorateElement(e, n);
          i.push(t.element),
            i.push.apply(i, t.extras),
            r.push.apply(r, t.finishers);
        }, this),
        !t)
      )
        return { elements: i, finishers: r };
      var o = this.decorateConstructor(i, t);
      return r.push.apply(r, o.finishers), (o.finishers = r), o;
    },
    addElementPlacement: function (e, t, i) {
      var r = t[e.placement];
      if (!i && -1 !== r.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      r.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var i = [], r = [], n = e.decorators, o = n.length - 1;
        o >= 0;
        o--
      ) {
        var s = t[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var d = this.fromElementDescriptor(e),
          a = this.toElementFinisherExtras((0, n[o])(d) || d);
        (e = a.element),
          this.addElementPlacement(e, t),
          a.finisher && r.push(a.finisher);
        var c = a.extras;
        if (c) {
          for (var l = 0; l < c.length; l++) this.addElementPlacement(c[l], t);
          i.push.apply(i, c);
        }
      }
      return { element: e, finishers: r, extras: i };
    },
    decorateConstructor: function (e, t) {
      for (var i = [], r = t.length - 1; r >= 0; r--) {
        var n = this.fromClassDescriptor(e),
          o = this.toClassDescriptor((0, t[r])(n) || n);
        if (
          (void 0 !== o.finisher && i.push(o.finisher), void 0 !== o.elements)
        ) {
          e = o.elements;
          for (var s = 0; s < e.length - 1; s++)
            for (var d = s + 1; d < e.length; d++)
              if (e[s].key === e[d].key && e[s].placement === e[d].placement)
                throw new TypeError('Duplicated element (' + e[s].key + ')');
        }
      }
      return { elements: e, finishers: i };
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
              if ('string' == typeof e) return J(e, t);
              var i = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === i && e.constructor && (i = e.constructor.name),
                'Map' === i || 'Set' === i
                  ? Array.from(e)
                  : 'Arguments' === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? J(e, t)
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
      var i = K(e.key),
        r = e.placement + '';
      if ('static' !== r && 'prototype' !== r && 'own' !== r)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            r +
            '"'
        );
      var n = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var o = {
        kind: t,
        key: i,
        placement: r,
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
        finisher: W(e, 'finisher'),
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
      var i = W(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: i };
    },
    runClassFinishers: function (e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = (0, t[i])(e);
        if (void 0 !== r) {
          if ('function' != typeof r)
            throw new TypeError('Finishers must return a constructor.');
          e = r;
        }
      }
      return e;
    },
    disallowProperty: function (e, t, i) {
      if (void 0 !== e[t])
        throw new TypeError(i + " can't have a ." + t + ' property.');
    },
  };
  return e;
}
function H(e) {
  var t,
    i = K(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var r = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: i,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (r.decorators = e.decorators),
    'field' === e.kind && (r.initializer = e.value),
    r
  );
}
function X(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function G(e) {
  return e.decorators && e.decorators.length;
}
function Q(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function W(e, t) {
  var i = e[t];
  if (void 0 !== i && 'function' != typeof i)
    throw new TypeError("Expected '" + t + "' to be a function");
  return i;
}
function K(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var i = e[Symbol.toPrimitive];
    if (void 0 !== i) {
      var r = i.call(e, t || 'default');
      if ('object' != typeof r) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function J(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
  return r;
}
const { stablePrefix: Y } = d;
!(function (e, t, i, r) {
  var n = U();
  if (r) for (var o = 0; o < r.length; o++) n = r[o](n);
  var s = t(function (e) {
      n.initializeInstanceElements(e, d.elements);
    }, i),
    d = n.decorateClass(
      (function (e) {
        for (
          var t = [],
            i = function (e) {
              return (
                'method' === e.kind &&
                e.key === o.key &&
                e.placement === o.placement
              );
            },
            r = 0;
          r < e.length;
          r++
        ) {
          var n,
            o = e[r];
          if ('method' === o.kind && (n = t.find(i)))
            if (Q(o.descriptor) || Q(n.descriptor)) {
              if (G(o) || G(n))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              n.descriptor = o.descriptor;
            } else {
              if (G(o)) {
                if (G(n))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                n.decorators = o.decorators;
              }
              X(o, n);
            }
          else t.push(o);
        }
        return t;
      })(s.d.map(H)),
      e
    );
  n.initializeClassElements(s.F, d.elements),
    n.runClassFinishers(s.F, d.finishers);
})(
  [x(`${Y}-video-player-v7`)],
  function (e, t) {
    return {
      F: class extends t {
        constructor(...t) {
          super(...t), e(this);
        }
      },
      d: [
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'playing-mode' })],
          key: 'playingMode',
          value: () => T.INLINE,
        },
        {
          kind: 'field',
          decorators: [
            n({ attribute: 'intersection-mode', reflect: !0, type: Boolean }),
          ],
          key: 'intersectionMode',
          value: () => !1,
        },
        { kind: 'field', decorators: [n()], key: 'isPlaying', value: () => !1 },
        {
          kind: 'field',
          decorators: [n({ attribute: 'button-position', reflect: !0 })],
          key: 'buttonPosition',
          value: () => A.BOTTOM_RIGHT,
        },
        {
          kind: 'field',
          key: '_handleClickOverlay',
          value() {
            return () => {
              this.playingMode === T.INLINE && (this.contentState = O.VIDEO);
              const { videoId: e, name: t, customVideoDescription: i } = this;
              let r = null;
              if (this.playingMode === T.LIGHTBOX) {
                const e = this.closest('c4d-video-player-container-v7');
                e &&
                  'function' == typeof e._captureCTA &&
                  (r = e._captureCTA());
              }
              const { eventContentStateChange: n } = this.constructor;
              this.dispatchEvent(
                new CustomEvent(n, {
                  bubbles: !0,
                  composed: !0,
                  detail: {
                    videoId: e,
                    contentState: O.VIDEO,
                    playingMode: this.playingMode,
                    name: t,
                    customVideoDescription: i,
                    ctaElement: r,
                  },
                })
              );
            };
          },
        },
        {
          kind: 'field',
          key: '_handleTogglePlayback',
          value() {
            return () => {
              const { videoId: e } = this,
                { eventTogglePlayback: t } = this.constructor;
              this.dispatchEvent(
                new CustomEvent(t, {
                  bubbles: !0,
                  composed: !0,
                  detail: { videoId: e },
                })
              );
            };
          },
        },
        {
          kind: 'field',
          key: '_renderContent',
          value() {
            return () => {
              const {
                contentState: e,
                name: t,
                thumbnailUrl: i,
                backgroundMode: r,
                _handleClickOverlay: n,
                intersectionMode: s,
              } = this;
              if (s) {
                const r =
                  '' === i
                    ? a
                    : o(
                        I ||
                          (I = B` <c4d-image
              default-src="${0}"
              alt="${0}"
              part="image">
            </c4d-image>`),
                        i,
                        w(t)
                      );
                return o(
                  C ||
                    (C = B`
        <div class="${0}--video-player__video">
          ${0}
        </div>
      `),
                  Y,
                  e === O.THUMBNAIL ? r : o(S || (S = B` <slot></slot> `))
                );
              }
              {
                const s =
                  '' === i
                    ? a
                    : o(
                        j ||
                          (j = B` <c4d-image
              default-src="${0}"
              alt="${0}"
              part="image">
              ${0}
            </c4d-image>`),
                        i,
                        w(t),
                        v({ slot: 'icon', part: 'play-video' })
                      );
                return e !== O.THUMBNAIL || r || this.autoplay
                  ? o($ || ($ = B` <slot></slot> `))
                  : o(
                      M ||
                        (M = B`
            <div class="${0}--video-player__video" part="video">
              <button
                class="${0}--video-player__image-overlay"
                part="button"
                @click="${0}">
                ${0}
              </button>
            </div>
          `),
                      Y,
                      Y,
                      n,
                      s
                    );
              }
            };
          },
        },
        {
          kind: 'method',
          key: '_updateThumbnailUrl',
          value: function () {
            let e = !1;
            try {
              e = new URL(this.thumbnailUrl);
            } catch (e) {}
            e &&
              e.host.toLowerCase().includes('kaltura') &&
              e.pathname.includes(this.videoId) &&
              (this.thumbnailUrl = c.getThumbnailUrl({
                mediaId: this.videoId,
                width: this.offsetWidth,
              }));
          },
        },
        {
          kind: 'method',
          key: 'userInitiatedTogglePlaybackState',
          value: function () {
            const { videoId: e } = this,
              { eventPlaybackStateChange: t } = this.constructor;
            this.dispatchEvent(
              new CustomEvent(t, {
                bubbles: !0,
                composed: !0,
                detail: { videoId: e, playingMode: this.playingMode },
              })
            );
          },
        },
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'content-state' })],
          key: 'contentState',
          value: () => O.THUMBNAIL,
        },
        {
          kind: 'field',
          decorators: [n({ type: Number })],
          key: 'duration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'formatCaption',
          value: () => k,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'formatDuration',
          value: () => _,
        },
        {
          kind: 'field',
          decorators: [n({ type: Boolean, attribute: 'hide-caption' })],
          key: 'hideCaption',
          value: () => !1,
        },
        { kind: 'field', decorators: [n()], key: 'name', value: () => '' },
        {
          kind: 'field',
          decorators: [
            n({ attribute: 'background-mode', reflect: !0, type: Boolean }),
          ],
          key: 'backgroundMode',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [
            n({ attribute: 'auto-play', reflect: !0, type: Boolean }),
          ],
          key: 'autoplay',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'video-description' })],
          key: 'customVideoDescription',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'thumbnail-url' })],
          key: 'thumbnailUrl',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'video-id' })],
          key: 'videoId',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'aspect-ratio' })],
          key: 'aspectRatio',
          value: void 0,
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            const e =
                'rtl' === this.dir ||
                'rtl' === getComputedStyle(this).direction,
              {
                aspectRatio: t,
                duration: i,
                formatCaption: r,
                formatDuration: n,
                hideCaption: s,
                name: d,
                buttonPosition: a,
                intersectionMode: c,
                _handleTogglePlayback: l,
                _renderContent: u,
              } = this,
              m = h({
                [`${Y}--video-player__video-container`]: !0,
                [`${Y}--video-player__aspect-ratio--${t}`]: !!t,
              }),
              p = h({
                [`${Y}--video-player__toggle-playback`]: !0,
                [`${Y}--video-player__toggle-playback--${a}`]: !0,
              });
            return o(
              V ||
                (V = B`
      <div class="${0}" part="video-container">
        ${0}
        ${0}
      </div>
      ${0}
    `),
              m,
              c
                ? o(
                    R ||
                      (R = B`
              <button
                class="${0}"
                @click="${0}"
                tabindex="0"
                part="button">
                ${0}
              </button>
            `),
                    p,
                    l,
                    this.isPlaying
                      ? f({ 'aria-label': 'Pause' })
                      : b({ 'aria-label': 'Play' })
                  )
                : null,
              u(),
              s
                ? void 0
                : o(
                    F ||
                      (F = B`
            <div
              class="${0}--video-player__video-caption"
              part="caption"
              dir="${0}">
              ${0}
            </div>
          `),
                    Y,
                    e ? 'rtl' : 'ltr',
                    r({ duration: n({ duration: i ? 1e3 * i : i }), name: d })
                  )
            );
          },
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            if (
              e.has('duration') ||
              e.has('formatCaption') ||
              e.has('name') ||
              e.has('backgroundMode')
            ) {
              const {
                  duration: e,
                  formatCaption: t,
                  formatDuration: i,
                  name: r,
                } = this,
                n = t({ duration: i({ duration: e ? 1e3 * e : e }), name: r });
              n && this.setAttribute('aria-label', n);
            }
            setTimeout(async () => {
              await this.updateComplete,
                this.thumbnailUrl.endsWith(`${this.offsetWidth}`) ||
                  this._updateThumbnailUrl();
            }, 0);
          },
        },
        {
          kind: 'method',
          key: 'firstUpdated',
          value: function () {
            var e, t, i;
            (this.tabIndex = 0),
              (this.backgroundMode = Boolean(
                null === (e = this.parentElement) || void 0 === e
                  ? void 0
                  : e.backgroundMode
              )),
              (this.intersectionMode = Boolean(
                null === (t = this.parentElement) || void 0 === t
                  ? void 0
                  : t.intersectionMode
              )),
              (this.autoplay = Boolean(
                null === (i = this.parentElement) || void 0 === i
                  ? void 0
                  : i.autoPlay
              ));
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventContentStateChange',
          value: function () {
            return `${Y}-video-player-content-state-changed`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventPlaybackStateChange',
          value: function () {
            return `${Y}-video-player-playback-state-changed`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${Y}--video-player`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventTogglePlayback',
          value: function () {
            return `${Y}-video-player-toggle-playback`;
          },
        },
        {
          kind: 'field',
          static: !0,
          key: 'shadowRootOptions',
          value: () =>
            N(N({}, s.shadowRootOptions), {}, { delegatesFocus: !0 }),
        },
        { kind: 'field', static: !0, key: 'styles', value: () => D },
      ],
    };
  },
  y(l(s))
);
let Z,
  ee,
  te = (e) => e;
function ie() {
  ie = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, t) {
      ['method', 'field'].forEach(function (i) {
        t.forEach(function (t) {
          t.kind === i &&
            'own' === t.placement &&
            this.defineClassElement(e, t);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, t) {
      var i = e.prototype;
      ['method', 'field'].forEach(function (r) {
        t.forEach(function (t) {
          var n = t.placement;
          if (t.kind === r && ('static' === n || 'prototype' === n)) {
            var o = 'static' === n ? e : i;
            this.defineClassElement(o, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var i = t.descriptor;
      if ('field' === t.kind) {
        var r = t.initializer;
        i = {
          enumerable: i.enumerable,
          writable: i.writable,
          configurable: i.configurable,
          value: void 0 === r ? void 0 : r.call(e),
        };
      }
      Object.defineProperty(e, t.key, i);
    },
    decorateClass: function (e, t) {
      var i = [],
        r = [],
        n = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, n);
        }, this),
        e.forEach(function (e) {
          if (!oe(e)) return i.push(e);
          var t = this.decorateElement(e, n);
          i.push(t.element),
            i.push.apply(i, t.extras),
            r.push.apply(r, t.finishers);
        }, this),
        !t)
      )
        return { elements: i, finishers: r };
      var o = this.decorateConstructor(i, t);
      return r.push.apply(r, o.finishers), (o.finishers = r), o;
    },
    addElementPlacement: function (e, t, i) {
      var r = t[e.placement];
      if (!i && -1 !== r.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      r.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var i = [], r = [], n = e.decorators, o = n.length - 1;
        o >= 0;
        o--
      ) {
        var s = t[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var d = this.fromElementDescriptor(e),
          a = this.toElementFinisherExtras((0, n[o])(d) || d);
        (e = a.element),
          this.addElementPlacement(e, t),
          a.finisher && r.push(a.finisher);
        var c = a.extras;
        if (c) {
          for (var l = 0; l < c.length; l++) this.addElementPlacement(c[l], t);
          i.push.apply(i, c);
        }
      }
      return { element: e, finishers: r, extras: i };
    },
    decorateConstructor: function (e, t) {
      for (var i = [], r = t.length - 1; r >= 0; r--) {
        var n = this.fromClassDescriptor(e),
          o = this.toClassDescriptor((0, t[r])(n) || n);
        if (
          (void 0 !== o.finisher && i.push(o.finisher), void 0 !== o.elements)
        ) {
          e = o.elements;
          for (var s = 0; s < e.length - 1; s++)
            for (var d = s + 1; d < e.length; d++)
              if (e[s].key === e[d].key && e[s].placement === e[d].placement)
                throw new TypeError('Duplicated element (' + e[s].key + ')');
        }
      }
      return { elements: e, finishers: i };
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
              if ('string' == typeof e) return ce(e, t);
              var i = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === i && e.constructor && (i = e.constructor.name),
                'Map' === i || 'Set' === i
                  ? Array.from(e)
                  : 'Arguments' === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? ce(e, t)
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
      var i = ae(e.key),
        r = e.placement + '';
      if ('static' !== r && 'prototype' !== r && 'own' !== r)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            r +
            '"'
        );
      var n = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var o = {
        kind: t,
        key: i,
        placement: r,
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
        finisher: de(e, 'finisher'),
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
      var i = de(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: i };
    },
    runClassFinishers: function (e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = (0, t[i])(e);
        if (void 0 !== r) {
          if ('function' != typeof r)
            throw new TypeError('Finishers must return a constructor.');
          e = r;
        }
      }
      return e;
    },
    disallowProperty: function (e, t, i) {
      if (void 0 !== e[t])
        throw new TypeError(i + " can't have a ." + t + ' property.');
    },
  };
  return e;
}
function re(e) {
  var t,
    i = ae(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var r = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: i,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (r.decorators = e.decorators),
    'field' === e.kind && (r.initializer = e.value),
    r
  );
}
function ne(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function oe(e) {
  return e.decorators && e.decorators.length;
}
function se(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function de(e, t) {
  var i = e[t];
  if (void 0 !== i && 'function' != typeof i)
    throw new TypeError("Expected '" + t + "' to be a function");
  return i;
}
function ae(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var i = e[Symbol.toPrimitive];
    if (void 0 !== i) {
      var r = i.call(e, t || 'default');
      if ('object' != typeof r) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function ce(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
  return r;
}
function le(e, t, i, r) {
  var n = ue(me(1 & r ? e.prototype : e), t, i);
  return 2 & r && 'function' == typeof n
    ? function (e) {
        return n.apply(i, e);
      }
    : n;
}
function ue() {
  return (
    (ue =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, i) {
            var r = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = me(e)); );
              return e;
            })(e, t);
            if (r) {
              var n = Object.getOwnPropertyDescriptor(r, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : i) : n.value;
            }
          }),
    ue.apply(null, arguments)
  );
}
function me(e) {
  return (
    (me = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    me(e)
  );
}
const { stablePrefix: pe } = d;
let ge = (function (e, t, i, r) {
  var n = ie();
  if (r) for (var o = 0; o < r.length; o++) n = r[o](n);
  var s = t(function (e) {
      n.initializeInstanceElements(e, d.elements);
    }, i),
    d = n.decorateClass(
      (function (e) {
        for (
          var t = [],
            i = function (e) {
              return (
                'method' === e.kind &&
                e.key === o.key &&
                e.placement === o.placement
              );
            },
            r = 0;
          r < e.length;
          r++
        ) {
          var n,
            o = e[r];
          if ('method' === o.kind && (n = t.find(i)))
            if (se(o.descriptor) || se(n.descriptor)) {
              if (oe(o) || oe(n))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              n.descriptor = o.descriptor;
            } else {
              if (oe(o)) {
                if (oe(n))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                n.decorators = o.decorators;
              }
              ne(o, n);
            }
          else t.push(o);
        }
        return t;
      })(s.d.map(re)),
      e
    );
  return (
    n.initializeClassElements(s.F, d.elements),
    n.runClassFinishers(s.F, d.finishers)
  );
})(
  [x(`${pe}-video-player-composite-v7`)],
  function (e, t) {
    class i extends t {
      constructor(...t) {
        super(...t), e(this);
      }
    }
    return {
      F: i,
      d: [
        {
          kind: 'method',
          key: '_activateEmbeddedVideo',
          value: function (e) {
            const { embeddedVideos: t = {} } = this;
            Object.keys(t).forEach((i) => {
              const r = t[i];
              i === e ? r.play() : r.pause();
            });
          },
        },
        {
          kind: 'get',
          key: '_videoPlayer',
          value: function () {
            const { selectorVideoPlayer: e } = this.constructor;
            return this.querySelector(e);
          },
        },
        {
          kind: 'method',
          key: '_cleanAndCreateObserverIntersection',
          value: function ({ create: e } = {}) {
            this._observerIntersectionIntoView &&
              this._observerIntersectionIntoView.unobserve(this),
              this._observerIntersectionOutOfView &&
                this._observerIntersectionOutOfView.unobserve(this),
              e &&
                ((this._observerIntersectionIntoView = new IntersectionObserver(
                  this._intersectionIntoViewHandler.bind(this),
                  {
                    root: this.closest('c4d-carousel'),
                    rootMargin: '0px',
                    threshold: 0.9,
                  }
                )),
                (this._observerIntersectionOutOfView = new IntersectionObserver(
                  this._intersectionOutOfViewHandler.bind(this),
                  {
                    root: this.closest('c4d-carousel'),
                    rootMargin: '0px',
                    threshold: 0.5,
                  }
                )),
                this._observerIntersectionIntoView.observe(this),
                this._observerIntersectionOutOfView.observe(this));
          },
        },
        {
          kind: 'method',
          key: '_intersectionIntoViewHandler',
          value: function (e) {
            const { videoId: t } = this;
            e.forEach(async (e) => {
              var i, r, n;
              e.isIntersecting &&
                !1 !== this._getAutoplayPreference() &&
                (await this.updateComplete,
                null === (i = this._embedMedia) ||
                  void 0 === i ||
                  null === (i = i.call(this, t)) ||
                  void 0 === i ||
                  null === (r = i.then) ||
                  void 0 === r ||
                  null ===
                    (r = r.call(i, (e) => {
                      e && this.playAllVideos();
                    })) ||
                  void 0 === r ||
                  null === (n = r.catch) ||
                  void 0 === n ||
                  n.call(r, (e) => {}));
            });
          },
        },
        {
          kind: 'method',
          key: '_intersectionOutOfViewHandler',
          value: function (e) {
            e.forEach((e) => {
              e.isIntersecting || this.pauseAllVideos(!1);
            });
          },
        },
        {
          kind: 'method',
          decorators: [m('eventContentStateChange')],
          key: '_handleContentStateChange',
          value: function (e) {
            const {
              contentState: t,
              playingMode: i,
              videoId: r,
              ctaElement: n,
            } = e.detail;
            var o;
            (n && (this.ctaElement = n),
            t === O.VIDEO && i === T.INLINE && r) &&
              (null === (o = this._embedMedia) ||
                void 0 === o ||
                o.call(this, r));
          },
        },
        {
          kind: 'method',
          decorators: [m('eventPlaybackStateChange')],
          key: '_handlePlaybackStateChange',
          value: function (e) {
            const { videoId: t } = e.detail,
              { embeddedVideos: i = {} } = this;
            this.isPlaying
              ? (i[t].pause(), (this.isPlaying = !1))
              : (i[t].play(), (this.isPlaying = !0)),
              this._setAutoplayPreference(this.isPlaying),
              (this.playbackTriggered = !0);
          },
        },
        {
          kind: 'method',
          decorators: [m('eventTogglePlayback')],
          key: '_handleEventTogglePlayback',
          value: function (e) {
            const { videoId: t } = e.detail;
            var i;
            t &&
              (this._setAutoplayPreference(!this.isPlaying),
              null === (i = this._embedMedia) ||
                void 0 === i ||
                i.call(this, t),
              this.isPlaying ? this.pauseAllVideos() : this.playAllVideos());
          },
        },
        {
          kind: 'method',
          key: 'pauseAllVideos',
          value: function (e = !0) {
            const { embeddedVideos: t = {} } = this;
            Object.keys(t).forEach((e) => {
              var i;
              null === (i = t[e]) || void 0 === i || i.pause();
            }),
              (this.isPlaying = !1),
              e && this._setAutoplayPreference(!1);
          },
        },
        {
          kind: 'method',
          key: 'playAllVideos',
          value: function (e = !0) {
            const { embeddedVideos: t = {} } = this;
            Object.keys(t).forEach((e) => {
              var i;
              null === (i = t[e]) || void 0 === i || i.play();
            }),
              (this.isPlaying = !0),
              (this.playbackTriggered = !0),
              e && this._setAutoplayPreference(!0);
          },
        },
        {
          kind: 'method',
          key: 'getIsVideoPlaying',
          value: function () {
            var e;
            const t = this.querySelector('iframe');
            return !(
              null ==
              (null == t || null === (e = t.contentWindow) || void 0 === e
                ? void 0
                : e.document.querySelector('div.play-state'))
            );
          },
        },
        {
          kind: 'field',
          decorators: [n({ type: Boolean, attribute: 'auto-play' })],
          key: 'autoPlay',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [n({ type: Boolean, attribute: 'muted' })],
          key: 'muted',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'embeddedVideos',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'caption' })],
          key: 'caption',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'video-description' })],
          key: 'customVideoDescription',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'formatCaption',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'formatDuration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ type: Boolean, attribute: 'hide-caption' })],
          key: 'hideCaption',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [
            n({ type: Boolean, attribute: 'background-mode', reflect: !0 }),
          ],
          key: 'backgroundMode',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [
            n({ attribute: 'intersection-mode', reflect: !0, type: Boolean }),
          ],
          key: 'intersectionMode',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'button-position', reflect: !0 })],
          key: 'buttonPosition',
          value: () => A.BOTTOM_RIGHT,
        },
        {
          kind: 'field',
          decorators: [u()],
          key: 'playbackTriggered',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'mediaData',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'video-id' })],
          key: 'videoId',
          value: () => '',
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'aspect-ratio' })],
          key: 'aspectRatio',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ type: Boolean })],
          key: 'isPlaying',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'playing-mode' })],
          key: 'playingMode',
          value: () => T.INLINE,
        },
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'thumbnail' })],
          key: 'thumbnail',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ type: Number, attribute: 'video-thumbnail-width' })],
          key: 'videoThumbnailWidth',
          value: () => 3,
        },
        {
          kind: 'field',
          decorators: [n({ type: Boolean })],
          key: 'isRTL',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'ctaElement',
          value: void 0,
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            if (
              (le(i, 'connectedCallback', this, 3)([]),
              this.backgroundMode && (this.hideCaption = !0),
              this.autoPlay || this.backgroundMode)
            ) {
              const e = this._getAutoplayPreference();
              this.isPlaying =
                null === e
                  ? !window.matchMedia('(prefers-reduced-motion: reduce)')
                      .matches
                  : e;
            }
            if (this.intersectionMode) {
              var e;
              const t = document.getElementById('alloy-prehiding'),
                i =
                  null === (e = window.adobe) || void 0 === e
                    ? void 0
                    : e.target,
                r =
                  !!i &&
                  ('function' == typeof i.getOffers ||
                    'function' == typeof i.getOffer ||
                    'function' == typeof i.applyOffers);
              if (t || r) {
                c.checkScript().catch(() => {});
                let e = !1;
                const i = () =>
                    this._cleanAndCreateObserverIntersection({ create: !0 }),
                  r = () => {
                    e ||
                      ((e = !0),
                      document.removeEventListener(
                        'at-content-rendering-succeeded',
                        r
                      ),
                      document.removeEventListener(
                        'at-content-rendering-failed',
                        r
                      ),
                      this._atPrehidingObserver &&
                        (this._atPrehidingObserver.disconnect(),
                        (this._atPrehidingObserver = void 0)),
                      this._atFallback &&
                        (clearTimeout(this._atFallback),
                        (this._atFallback = void 0)),
                      (this._atSettleHandler = void 0),
                      i());
                  };
                (this._atSettleHandler = r),
                  document.addEventListener(
                    'at-content-rendering-succeeded',
                    r,
                    { once: !0 }
                  ),
                  document.addEventListener('at-content-rendering-failed', r, {
                    once: !0,
                  }),
                  t &&
                    ((this._atPrehidingObserver = new MutationObserver(() => {
                      document.getElementById('alloy-prehiding') || r();
                    })),
                    this._atPrehidingObserver.observe(
                      t.parentNode || document.documentElement,
                      { childList: !0 }
                    ),
                    document.getElementById('alloy-prehiding') || r()),
                  e || (this._atFallback = setTimeout(r, 4e3));
              } else this._cleanAndCreateObserverIntersection({ create: !0 });
            }
            (this.observer = new MutationObserver(() => {
              this.isRTL =
                'rtl' === this.dir ||
                'rtl' === getComputedStyle(this).direction;
            })),
              this.observer.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ['dir'],
              }),
              (this.isRTL =
                'rtl' === this.dir ||
                'rtl' === getComputedStyle(this).direction);
          },
        },
        {
          kind: 'method',
          key: 'disconnectedCallback',
          value: function () {
            le(i, 'disconnectedCallback', this, 3)([]),
              this._atSettleHandler &&
                (document.removeEventListener(
                  'at-content-rendering-succeeded',
                  this._atSettleHandler
                ),
                document.removeEventListener(
                  'at-content-rendering-failed',
                  this._atSettleHandler
                ),
                (this._atSettleHandler = void 0)),
              this._atPrehidingObserver &&
                (this._atPrehidingObserver.disconnect(),
                (this._atPrehidingObserver = void 0)),
              this._atFallback &&
                (clearTimeout(this._atFallback), (this._atFallback = void 0)),
              this._ibmPendingEmbedDivs &&
                (this._ibmPendingEmbedDivs.forEach((e) => e.remove()),
                this._ibmPendingEmbedDivs.clear()),
              this._cleanAndCreateObserverIntersection();
            const { embeddedVideos: e = {} } = this;
            Object.values(e).forEach((e) => {
              try {
                var t;
                null == e ||
                  null === (t = e.destroy) ||
                  void 0 === t ||
                  t.call(e);
              } catch (e) {}
            });
          },
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            if (e.has('videoId')) {
              const { autoPlay: e, videoId: r, backgroundMode: n } = this;
              var t, i;
              if ((this._activateEmbeddedVideo(r), r))
                if (
                  (null === (t = this._loadVideoData) ||
                    void 0 === t ||
                    t.call(this, r),
                  e || n)
                )
                  null === (i = this._embedMedia) ||
                    void 0 === i ||
                    i.call(this, r);
            }
          },
        },
        {
          kind: 'method',
          key: 'renderLightDOM',
          value: function () {
            var e;
            null === (e = this.querySelector('.c4d--video-player__video')) ||
              void 0 === e ||
              e.setAttribute('dir-mode', '' + (this.isRTL ? 'rtl' : 'ltr'));
            const {
                aspectRatio: t,
                formatCaption: i,
                formatDuration: r,
                hideCaption: n,
                caption: s,
                customVideoDescription: d,
                mediaData: a = {},
                videoId: l,
                videoThumbnailWidth: u,
                thumbnail: m,
                playingMode: p,
                buttonPosition: g,
              } = this,
              { [l]: h = {} } = a,
              { duration: y, name: f } = h,
              v = m || c.getThumbnailUrl({ mediaId: l, width: u });
            return o(
              Z ||
                (Z = te`
      <c4d-video-player-v7
        part="video-player"
        duration="${0}"
        ?hide-caption=${0}
        name="${0}"
        video-description="${0}"
        thumbnail-url="${0}"
        video-id="${0}"
        aspect-ratio="${0}"
        playing-mode="${0}"
        content-state="${0}"
        button-position="${0}"
        .formatCaption="${0}"
        .formatDuration="${0}"
        .isPlaying=${0}>
      </c4d-video-player-v7>
    `),
              w(y),
              n,
              w(s || f),
              w(d),
              w(v),
              w(l),
              w(t),
              w(p),
              this.playbackTriggered ? O.VIDEO : O.THUMBNAIL,
              g,
              w(i),
              w(r),
              this.isPlaying
            );
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return o(ee || (ee = te` <slot></slot> `));
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorVideoPlayer',
          value: function () {
            return `${pe}-video-player-v7`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventContentStateChange',
          value: function () {
            return `${pe}-video-player-content-state-changed`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventPlaybackStateChange',
          value: function () {
            return `${pe}-video-player-playback-state-changed`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventTogglePlayback',
          value: function () {
            return `${pe}-video-player-toggle-playback`;
          },
        },
      ],
    };
  },
  g(p(s))
);
function he(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      i.push.apply(i, r);
  }
  return i;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? he(Object(i), !0).forEach(function (t) {
          fe(e, t, i[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
      : he(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
  }
  return e;
}
function fe(e, t, i) {
  return (
    (t = ze(t)) in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
function ve(e, t, i, r) {
  var n = be();
  if (r) for (var o = 0; o < r.length; o++) n = r[o](n);
  var s = t(function (e) {
      n.initializeInstanceElements(e, d.elements);
    }, i),
    d = n.decorateClass(
      (function (e) {
        for (
          var t = [],
            i = function (e) {
              return (
                'method' === e.kind &&
                e.key === o.key &&
                e.placement === o.placement
              );
            },
            r = 0;
          r < e.length;
          r++
        ) {
          var n,
            o = e[r];
          if ('method' === o.kind && (n = t.find(i)))
            if (we(o.descriptor) || we(n.descriptor)) {
              if (xe(o) || xe(n))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              n.descriptor = o.descriptor;
            } else {
              if (xe(o)) {
                if (xe(n))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                n.decorators = o.decorators;
              }
              _e(o, n);
            }
          else t.push(o);
        }
        return t;
      })(s.d.map(ke)),
      e
    );
  return (
    n.initializeClassElements(s.F, d.elements),
    n.runClassFinishers(s.F, d.finishers)
  );
}
function be() {
  be = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, t) {
      ['method', 'field'].forEach(function (i) {
        t.forEach(function (t) {
          t.kind === i &&
            'own' === t.placement &&
            this.defineClassElement(e, t);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, t) {
      var i = e.prototype;
      ['method', 'field'].forEach(function (r) {
        t.forEach(function (t) {
          var n = t.placement;
          if (t.kind === r && ('static' === n || 'prototype' === n)) {
            var o = 'static' === n ? e : i;
            this.defineClassElement(o, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var i = t.descriptor;
      if ('field' === t.kind) {
        var r = t.initializer;
        i = {
          enumerable: i.enumerable,
          writable: i.writable,
          configurable: i.configurable,
          value: void 0 === r ? void 0 : r.call(e),
        };
      }
      Object.defineProperty(e, t.key, i);
    },
    decorateClass: function (e, t) {
      var i = [],
        r = [],
        n = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, n);
        }, this),
        e.forEach(function (e) {
          if (!xe(e)) return i.push(e);
          var t = this.decorateElement(e, n);
          i.push(t.element),
            i.push.apply(i, t.extras),
            r.push.apply(r, t.finishers);
        }, this),
        !t)
      )
        return { elements: i, finishers: r };
      var o = this.decorateConstructor(i, t);
      return r.push.apply(r, o.finishers), (o.finishers = r), o;
    },
    addElementPlacement: function (e, t, i) {
      var r = t[e.placement];
      if (!i && -1 !== r.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      r.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var i = [], r = [], n = e.decorators, o = n.length - 1;
        o >= 0;
        o--
      ) {
        var s = t[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var d = this.fromElementDescriptor(e),
          a = this.toElementFinisherExtras((0, n[o])(d) || d);
        (e = a.element),
          this.addElementPlacement(e, t),
          a.finisher && r.push(a.finisher);
        var c = a.extras;
        if (c) {
          for (var l = 0; l < c.length; l++) this.addElementPlacement(c[l], t);
          i.push.apply(i, c);
        }
      }
      return { element: e, finishers: r, extras: i };
    },
    decorateConstructor: function (e, t) {
      for (var i = [], r = t.length - 1; r >= 0; r--) {
        var n = this.fromClassDescriptor(e),
          o = this.toClassDescriptor((0, t[r])(n) || n);
        if (
          (void 0 !== o.finisher && i.push(o.finisher), void 0 !== o.elements)
        ) {
          e = o.elements;
          for (var s = 0; s < e.length - 1; s++)
            for (var d = s + 1; d < e.length; d++)
              if (e[s].key === e[d].key && e[s].placement === e[d].placement)
                throw new TypeError('Duplicated element (' + e[s].key + ')');
        }
      }
      return { elements: e, finishers: i };
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
              if ('string' == typeof e) return Pe(e, t);
              var i = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === i && e.constructor && (i = e.constructor.name),
                'Map' === i || 'Set' === i
                  ? Array.from(e)
                  : 'Arguments' === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? Pe(e, t)
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
      var i = ze(e.key),
        r = e.placement + '';
      if ('static' !== r && 'prototype' !== r && 'own' !== r)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            r +
            '"'
        );
      var n = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var o = {
        kind: t,
        key: i,
        placement: r,
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
        finisher: Ee(e, 'finisher'),
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
      var i = Ee(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: i };
    },
    runClassFinishers: function (e, t) {
      for (var i = 0; i < t.length; i++) {
        var r = (0, t[i])(e);
        if (void 0 !== r) {
          if ('function' != typeof r)
            throw new TypeError('Finishers must return a constructor.');
          e = r;
        }
      }
      return e;
    },
    disallowProperty: function (e, t, i) {
      if (void 0 !== e[t])
        throw new TypeError(i + " can't have a ." + t + ' property.');
    },
  };
  return e;
}
function ke(e) {
  var t,
    i = ze(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var r = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: i,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (r.decorators = e.decorators),
    'field' === e.kind && (r.initializer = e.value),
    r
  );
}
function _e(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function xe(e) {
  return e.decorators && e.decorators.length;
}
function we(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function Ee(e, t) {
  var i = e[t];
  if (void 0 !== i && 'function' != typeof i)
    throw new TypeError("Expected '" + t + "' to be a function");
  return i;
}
function ze(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var i = e[Symbol.toPrimitive];
    if (void 0 !== i) {
      var r = i.call(e, t || 'default');
      if ('object' != typeof r) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function Pe(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
  return r;
}
const { stablePrefix: Oe } = d;
function Te(e) {
  const { kalturaPlayerAPI: t } = e,
    { mediaData: i } = null != t ? t : {};
  return i ? { mediaData: i } : {};
}
function Ae(e) {
  return i({ _loadVideoData: P }, e);
}
const De = (e) =>
  ve(
    null,
    function (e, t) {
      return {
        F: class extends t {
          constructor(...t) {
            super(...t), e(this);
          }
        },
        d: [
          { kind: 'field', key: '_requestsEmbedVideo', value: () => ({}) },
          {
            kind: 'field',
            decorators: [n({ type: String, attribute: 'customvideoname' })],
            key: 'customVideoName',
            value: () => '',
          },
          { kind: 'field', decorators: [n()], key: 'lc', value: () => '' },
          {
            kind: 'field',
            decorators: [n({ attribute: !1 })],
            key: 'ctaElement',
            value: void 0,
          },
          {
            kind: 'method',
            key: '_captureCTA',
            value: function () {
              const e = this.querySelector('[slot="cta"]');
              return e && e.parentNode
                ? ((this.ctaElement = e.parentNode.removeChild(e)),
                  this.ctaElement)
                : null;
            },
          },
          {
            kind: 'method',
            key: '_returnCTA',
            value: function () {
              this.ctaElement && this.appendChild(this.ctaElement);
            },
          },
          {
            kind: 'method',
            key: '_setRequestEmbedVideoInProgress',
            value: function (e, t) {
              const { _requestsEmbedVideo: i } = this;
              this._requestsEmbedVideo = ye(ye({}, i), {}, { [e]: t });
            },
          },
          {
            kind: 'method',
            key: '_setErrorRequestEmbedVideo',
            value: function (e, t) {
              this._setRequestEmbedVideoInProgress(e, Promise.reject(t));
            },
          },
          {
            kind: 'method',
            key: '_setEmbeddedVideo',
            value: function (e, t) {
              this._setRequestEmbedVideoInProgress(e, Promise.resolve(t));
              const { embeddedVideos: i } = this;
              this.embeddedVideos = ye(ye({}, i), {}, { [e]: t });
            },
          },
          {
            kind: 'method',
            key: '_setAutoplayPreference',
            value: function (e) {
              const t = e ? '1' : '0';
              localStorage.setItem(`${this.prefersAutoplayStorageKey}`, t);
            },
          },
          {
            kind: 'method',
            key: '_getAutoplayPreference',
            value: function () {
              const e = localStorage.getItem(
                `${this.prefersAutoplayStorageKey}`
              );
              return null === e
                ? !window.matchMedia('(prefers-reduced-motion: reduce)').matches
                : Boolean(parseInt(e, 10));
            },
          },
          {
            kind: 'method',
            key: '_getPlayerOptions',
            value: function () {
              const {
                backgroundMode: e,
                intersectionMode: t,
                autoPlay: i,
                muted: r,
              } = this;
              let n;
              n =
                'en' === this.lc.toLowerCase()
                  ? (null == this ? void 0 : this.customVideoName) ||
                    (null == this ? void 0 : this.caption)
                  : ' ';
              let o = {};
              const s = this._getAutoplayPreference();
              switch (!0) {
                case i:
                  o = { muted: r, autoPlay: s };
                  break;
                case e || t:
                  o = {
                    playerMode: 'background',
                    loop: !0,
                    muted: !0,
                    autoPlay: s,
                  };
                  break;
                default:
                  o = { muted: r };
              }
              return (
                n && (o = ye(ye({}, o), {}, { mediaTitle: n })),
                (o.playerType = 'VIDEO'),
                o
              );
            },
          },
          {
            kind: 'method',
            key: '_embedVideoImpl',
            value: async function (e) {
              var t;
              const i = Object.prototype.hasOwnProperty.call(
                  this,
                  'getRootNode'
                )
                  ? this.getRootNode()
                  : this.ownerDocument,
                r = Math.random().toString(36).slice(2),
                n = document.createElement('div');
              (n.id = r), (n.className = `${Oe}--video-player__video`);
              const { _videoPlayer: o } = this;
              if (!o)
                throw new TypeError(
                  'Cannot find the video player component to put the video content into.'
                );
              let s;
              (n.style.cssText =
                'position:fixed;left:-9999px;visibility:hidden'),
                document.body.appendChild(n),
                this._ibmPendingEmbedDivs ||
                  (this._ibmPendingEmbedDivs = new Set()),
                this._ibmPendingEmbedDivs.add(n);
              try {
                var d, a;
                const [t, { width: i, height: u }] = await Promise.all([
                  c.embedMedia(e, r, this._getPlayerOptions()),
                  c.api(e),
                ]);
                var l;
                if (((s = t), !this.isConnected))
                  return (
                    n.remove(),
                    null === (l = this._ibmPendingEmbedDivs) ||
                      void 0 === l ||
                      l.delete(n),
                    null
                  );
                const m =
                  null !== (d = this._videoPlayer) && void 0 !== d ? d : o;
                (n.style.cssText = ''),
                  m.appendChild(n),
                  null === (a = this._ibmPendingEmbedDivs) ||
                    void 0 === a ||
                    a.delete(n),
                  m.style.setProperty('--native-file-width', `${i}px`),
                  m.style.setProperty('--native-file-height', `${u}px`),
                  m.style.setProperty(
                    '--native-file-aspect-ratio',
                    `${i} / ${u}`
                  );
              } catch (e) {
                var u;
                throw (
                  (n.parentElement && n.remove(),
                  null === (u = this._ibmPendingEmbedDivs) ||
                    void 0 === u ||
                    u.delete(n),
                  e)
                );
              }
              const m = i.getElementById(r);
              m && (m.dataset.videoId = e);
              const p =
                null === (t = i.getElementById(r)) || void 0 === t
                  ? void 0
                  : t.firstElementChild;
              return p && p.focus({ preventScroll: !0 }), s;
            },
          },
          {
            kind: 'field',
            key: '_embedMedia',
            value() {
              return async (e) => {
                const { _requestsEmbedVideo: t } = this,
                  i = t[e];
                if (i) return i;
                const r = this._embedVideoImpl(e);
                this._setRequestEmbedVideoInProgress(e, r);
                try {
                  this._setEmbeddedVideo(e, await r);
                } catch (t) {
                  this._setErrorRequestEmbedVideo(e, t);
                }
                return r;
              };
            },
          },
          {
            kind: 'method',
            key: 'firstUpdated',
            value: async function () {
              window.requestAnimationFrame(() => {
                var e;
                const t =
                  null === (e = this.querySelector('c4d-video-player-v7')) ||
                  void 0 === e ||
                  null === (e = e.shadowRoot) ||
                  void 0 === e
                    ? void 0
                    : e.querySelector('button');
                !this.getAttribute('href') &&
                  this.getAttribute('video-id') &&
                  this.setAttribute(
                    'href',
                    `https://mediacenter.ibm.com/id/${this.getAttribute(
                      'video-id'
                    )}`
                  ),
                  this.transposeAttributes(t, ['href']);
              });
              const { lc: e } = await E.getLocale();
              this.lc = e;
            },
          },
          {
            kind: 'field',
            key: 'prefersAutoplayStorageKey',
            value: () => `${Oe}-background-video-prefers-autoplay`,
          },
        ],
      };
    },
    l(e)
  );
let Ie = ve(
  [x(`${Oe}-video-player-container-v7`)],
  function (e, t) {
    return {
      F: class extends t {
        constructor(...t) {
          super(...t), e(this);
        }
      },
      d: [],
    };
  },
  e(t, Te, Ae)(De(ge))
);
export { Ie as C, O as V, De as a, Te as b, T as c, ge as d, Ae as m };
