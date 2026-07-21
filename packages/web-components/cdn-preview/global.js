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

import { A as e } from './Analytics.js';
import { D as t, L as n } from './Locale.js';
var a = 'https://1.www.s81c.com/common/carbon/plex',
  r = {
    ar: { entry: 'sans-arabic', family: 'IBM Plex Sans Arabic' },
    ja: { entry: 'sans-jp', family: 'IBM Plex Sans JP' },
    ko: { entry: 'sans-kr', family: 'IBM Plex Sans KR' },
  },
  c = {
    100: 'thin',
    200: 'extralight',
    300: 'light',
    400: 'regular',
    450: 'text',
    500: 'medium',
    600: 'semibold',
    700: 'bold',
  };
function s(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  r[e] &&
    ((function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      if (0 === t.length) {
        var n = document.createElement('link');
        (n.href = ''.concat(a, '/').concat(r[e].entry, '.css')),
          (n.type = 'text/css'),
          (n.rel = 'stylesheet'),
          (n.media = 'screen,print'),
          document.getElementsByTagName('head')[0].appendChild(n);
      } else
        t.forEach(function (t) {
          var n = document.createElement('link');
          (n.href = ''
            .concat(a, '/')
            .concat(r[e].entry, '-')
            .concat(c[t], '.css')),
            (n.type = 'text/css'),
            (n.rel = 'stylesheet'),
            (n.media = 'screen,print'),
            document.getElementsByTagName('head')[0].appendChild(n);
        });
    })(e, t),
    (function (e) {
      document.body.style.fontFamily = ''.concat(
        r[e].family,
        ',IBM Plex Sans,Helvetica Neue,Arial,sans-serif'
      );
    })(e));
}
var i = !1;
function o() {
  i ||
    ((i = !0),
    t.setVersion().catch(function (e) {
      console.error('Error setting the version of the library in the DDO:', e);
    }),
    n.getLang().then(function (e) {
      s(e.lc);
    }),
    e.initAll());
}
export { o as g };
