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
 * @lit/reactive-element:
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
 * https://www.npmjs.com/package/redux-thunk
 * https://www.npmjs.com/package/redux-logger
 * https://www.npmjs.com/package/isomorphic-dompurify
 * https://www.npmjs.com/package/axios
 * https://www.npmjs.com/package/striptags
 * https://www.npmjs.com/package/color
 * https://www.npmjs.com/package/color-string
 * https://www.npmjs.com/package/color-convert
 * https://www.npmjs.com/package/color-name
 * https://www.npmjs.com/package/simple-swizzle
 * https://www.npmjs.com/package/@floating-ui/dom
 * https://www.npmjs.com/package/is-arrayish
 * https://www.npmjs.com/package/@floating-ui/utils
 * https://www.npmjs.com/package/@floating-ui/core
 */

var t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,r=t||e||Function("return this")(),n=r.Symbol,o=Object.prototype,a=o.hasOwnProperty,c=o.toString,l=n?n.toStringTag:void 0;var i=Object.prototype.toString;var f="[object Null]",u="[object Undefined]",s=n?n.toStringTag:void 0;function b(t){return null==t?void 0===t?u:f:s&&s in Object(t)?function(t){var e=a.call(t,l),r=t[l];try{t[l]=void 0;var n=!0}catch(t){}var o=c.call(t);return n&&(e?t[l]=r:delete t[l]),o}(t):function(t){return i.call(t)}(t)}function v(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function p(t){return null!=t&&"object"==typeof t}var y="[object Symbol]";function j(t){return"symbol"==typeof t||p(t)&&b(t)==y}var g=/\s/;var O=/^\s+/;function d(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&g.test(t.charAt(e)););return e}(t)+1).replace(O,""):t}var S=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,N=/^0o[0-7]+$/i,m=parseInt;function $(t){if("number"==typeof t)return t;if(j(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=d(t);var r=h.test(t);return r||N.test(t)?m(t.slice(2),r?2:8):S.test(t)?NaN:+t}export{n as S,p as a,b,j as c,t as f,v as i,r,$ as t};
