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

let e;import{_ as t}from"./objectSpread2.js";import{_ as o}from"./decorate.js";import{o as n}from"./class-map.js";import{n as i,x as s,a}from"./query-assigned-elements.js";import{i as l}from"./query.js";import{p as r,s as c}from"./settings.js";import{H as d}from"./host-listener.js";import{H as u}from"./host-listener2.js";import{s as h}from"./modal-close-button.js";import{c as f}from"./carbon-element.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(e){e.EXTRA_SMALL="xs",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg"}(e||(e={}));let k,m,v=e=>e;const y=Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINS,p=Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY;function C(e,t=!1){if(t)for(let t=e.length-1;t>=0;--t){const o=e[t];if(o.focus(),o.ownerDocument.activeElement===o)return!0}else for(let t=0;t<e.length;++t){const o=e[t];if(o.focus(),o.ownerDocument.activeElement===o)return!0}return!1}let _=o([f(`${r}-modal`)],(function(o,a){return{F:class extends a{constructor(...e){super(...e),o(this)}},d:[{kind:"field",key:"_launcher",value:()=>null},{kind:"field",decorators:[l("#start-sentinel")],key:"_startSentinelNode",value:void 0},{kind:"field",decorators:[l("#end-sentinel")],key:"_endSentinelNode",value:void 0},{kind:"field",decorators:[d("click")],key:"_handleClick",value(){return e=>{e.composedPath().indexOf(this.shadowRoot)<0&&!this.preventCloseOnClickOutside&&this._handleUserInitiatedClose(e.target)}}},{kind:"field",decorators:[d("shadowRoot:focusout")],key:"_handleBlur",value(){return async({target:e,relatedTarget:t})=>{var o;const{open:n,_startSentinelNode:i,_endSentinelNode:s}=this,a=e!==this&&this.contains(e),l=t!==this&&(this.contains(t)||(null===(o=this.shadowRoot)||void 0===o?void 0:o.contains(t))&&t!==s),{selectorTabbable:r}=this.constructor;if(n&&t&&a&&!l){const o=e.compareDocumentPosition(t);t===i||o&y?(await this.constructor._delay(),C(this.querySelectorAll(r),!0)||t===this||this.focus()):(t===s||o&p)&&(await this.constructor._delay(),C(this.querySelectorAll(r))||this.focus())}}}},{kind:"field",decorators:[d("document:keydown")],key:"_handleKeydown",value(){return({key:e,target:t})=>{"Esc"!==e&&"Escape"!==e||this._handleUserInitiatedClose(t)}}},{kind:"method",key:"_handleClickContainer",value:function(e){e.target.matches(this.constructor.selectorCloseButton)&&!this.preventClose&&this._handleUserInitiatedClose(e.target)}},{kind:"method",key:"_handleUserInitiatedClose",value:function(e){if(this.open){const t={bubbles:!0,cancelable:!0,composed:!0,detail:{triggeredBy:e}};this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose,t))&&(this.open=!1,this.dispatchEvent(new CustomEvent(this.constructor.eventClose,t)))}}},{kind:"method",key:"_handleSlotChange",value:function(){this.querySelector(`${r}-modal-footer`)?this.setAttribute("has-footer",""):this.removeAttribute("has-footer")}},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"alert",value:()=>!1},{kind:"field",decorators:[i({attribute:"aria-label"})],key:"ariaLabel",value:()=>""},{kind:"field",decorators:[i({attribute:"container-class"})],key:"containerClass",value:()=>""},{kind:"field",decorators:[i({type:Boolean,reflect:!0,attribute:"full-width"})],key:"fullWidth",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0,attribute:"has-scrolling-content"})],key:"hasScrollingContent",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"open",value:()=>!1},{kind:"field",decorators:[i({reflect:!0})],key:"size",value:()=>e.MEDIUM},{kind:"field",decorators:[i({type:Boolean,attribute:"prevent-close-on-click-outside"})],key:"preventCloseOnClickOutside",value:()=>!1},{kind:"field",decorators:[i({type:Boolean,attribute:"prevent-close"})],key:"preventClose",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(){if(!this.querySelector(this.constructor.selectorModalBody)){const e=document.createElement(this.constructor.selectorModalBody);this.appendChild(e)}}},{kind:"method",key:"render",value:function(){const{alert:e,ariaLabel:o,size:i,hasScrollingContent:a}=this,l=this.containerClass.split(" ").filter(Boolean).reduce(((e,o)=>t(t({},e),{},{[o]:!0})),{}),c=n(t({[`${r}--modal-container`]:!0,[`${r}--modal-container--${i}`]:i},l));return s(k||(k=v`
      <a
        id="start-sentinel"
        class="${0}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
      <div
        aria-label=${0}
        part="dialog"
        class=${0}
        role="${0}"
        tabindex="-1"
        @click=${0}>
        <slot @slotchange="${0}"></slot>
        ${0}
      </div>
      <a
        id="end-sentinel"
        class="${0}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
    `),r,o,c,e?"alert":"dialog",this._handleClickContainer,this._handleSlotChange,a?s(m||(m=v` <div class="cds--modal-content--overflow-indicator"></div> `)):"",r)}},{kind:"method",key:"updated",value:async function(e){if(e.has("open"))if(this.open){this._launcher=this.ownerDocument.activeElement;const e=this.querySelector(this.constructor.selectorPrimaryFocus);await this.constructor._delay(),e?e.focus():C(this.querySelectorAll(this.constructor.selectorTabbable),!0)||this.focus()}else this._launcher&&"function"==typeof this._launcher.focus&&(this._launcher.focus(),this._launcher=null)}},{kind:"method",static:!0,key:"_delay",value:function(e=0){return new Promise((t=>{setTimeout(t,e)}))}},{kind:"get",static:!0,key:"selectorCloseButton",value:function(){return`[data-modal-close],${r}-modal-close-button`}},{kind:"get",static:!0,key:"selectorTabbable",value:function(){return c}},{kind:"get",static:!0,key:"selectorPrimaryFocus",value:function(){return`[data-modal-primary-focus],${r}-modal-footer ${r}-button[kind="primary"]`}},{kind:"get",static:!0,key:"selectorModalBody",value:function(){return`${r}-modal-body`}},{kind:"get",static:!0,key:"eventBeforeClose",value:function(){return`${r}-modal-beingclosed`}},{kind:"get",static:!0,key:"eventClose",value:function(){return`${r}-modal-closed`}},{kind:"field",static:!0,key:"styles",value:()=>h}]}}),u(a));export{_ as C,e as M};
