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

import{x as t,s as a}from"./query-assigned-elements.js";import{s,b as e,c as i,d as n,e as o,f as l,g as r,h as d,j as c}from"./cta.js";import{a as p,s as h,b as A}from"./20.js";import{s as u}from"./206.js";import{C as L}from"./formatVideoCaption.js";let f,b=t=>t;const{prefix:m,stablePrefix:T}=a,E={[L.LOCAL]:p,[`${L.LOCAL}-rtl`]:h,[L.DOWNLOAD]:s,[L.EXTERNAL]:e,[L.NEW_TAB]:i,[L.JUMP]:n,[L.VIDEO]:u,[L.PDF]:o,[L.BLOG]:l,[L.EMAIL]:r,[L.SCHEDULE]:d,[L.CHAT]:A,[L.CALL]:c},C={[L.LOCAL]:"",[L.DOWNLOAD]:" - This link downloads a file",[L.EXTERNAL]:" - This link opens in a new tab",[L.NEW_TAB]:" - This link opens in a new tab",[L.JUMP]:"",[L.VIDEO]:" - This link plays a video",[L.PDF]:" - This link downloads a pdf",[L.BLOG]:""},D=a=>class extends a{_handleClick(t){const{disabled:a}=this;a&&(t.preventDefault(),t.stopPropagation())}_renderIcon(){var a;const{ctaType:s}=this,e=null!==(a=E[`${s}-${document.dir}`])&&void 0!==a?a:E[s];return t(f||(f=b`
        <slot name="icon">
          <span class="${0}--visually-hidden">${0}</span>
          ${0}
        </slot>
      `),m,C[s],null==e?void 0:e({class:`${T}--card__cta ${T}-ce--cta__icon`}))}updated(t){super.updated(t);const{ctaType:a,_linkNode:s}=this;if(t.has("ctaType")||t.has("download")){const{download:t}=this;![L.DOWNLOAD,L.PDF].includes(a)&&t&&console.warn(`\`download\` property used with a CTA data item besides \`type: download|pdf\` (\`type: ${a}\`).`);const e={[L.EMAIL]:"email-link",[L.SCHEDULE]:"scheduler-link",[L.CHAT]:"chat-link",[L.CALL]:"phone-link"};Object.keys(e).includes(a)&&(s.dataset.ibmContact=e[a])}if(s&&"A"===s.nodeName){if(t.has("ctaType")||t.has("href")){const{href:t}=this,e=a!==L.VIDEO?t:"#";null==e?s.removeAttribute("href"):s.setAttribute("href",e)}if(t.has("ctaType")||t.has("target")){const{target:t}=this,e=[L.EXTERNAL,L.NEW_TAB].includes(a)&&!t?"_blank":t;e?s.setAttribute("target",e):s.removeAttribute("target")}s.hasAttribute("aria-label")&&s.setAttribute("aria-label",s.getAttribute("aria-label")+(a?C[a]:""))}}};export{D as C};
