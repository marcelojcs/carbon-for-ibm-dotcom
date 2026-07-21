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

import{o as e}from"./class-map.js";import{x as t,n as r,s as n,a as o}from"./query-assigned-elements.js";import{t as i}from"./state.js";import{s}from"./content-block2.js";import{S as a}from"./stable-selector.js";import{c as l}from"./carbon-element.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */let d,c,u,h,f,p,m,y,v,k=function(e){return e.SMALL="sm",e.REGULAR="md",e}({}),g=function(e){return e.REGULAR="regular",e.WITH_BORDER="with-border",e}({}),b=e=>e;function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!C(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var i=this.decorateConstructor(r,t);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[i])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this);var t},toElementDescriptor:function(e){var t=e.kind+"";if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=S(e.key),n=e.placement+"";if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function E(e){var t,r=S(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function _(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function C(e){return e.decorators&&e.decorators.length}function $(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function S(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const{prefix:P,stablePrefix:T}=n,x={complementary:"_hasComplementary",copy:"_hasCopy",heading:"_hasHeading",footer:"_hasFooter",media:"_hasMedia"};let F=function(e,t,r,n){var o=w();if(n)for(var i=0;i<n.length;i++)o=n[i](o);var s=t((function(e){o.initializeInstanceElements(e,a.elements)}),r),a=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=t.find(r)))if($(i.descriptor)||$(o.descriptor)){if(C(i)||C(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(C(i)){if(C(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}_(i,o)}else t.push(i)}return t}(s.d.map(E)),e);return o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([l(`${T}-content-block`)],(function(n,o){return{F:class extends o{constructor(...e){super(...e),n(this)}},d:[{kind:"field",decorators:[i()],key:"_hasComplementary",value:()=>!1},{kind:"field",decorators:[i()],key:"_hasContent",value:()=>!1},{kind:"field",decorators:[i()],key:"_hasHeading",value:()=>!1},{kind:"field",decorators:[i()],key:"_hasCopy",value:()=>!1},{kind:"field",decorators:[i()],key:"_hasFooter",value:()=>!1},{kind:"field",decorators:[i()],key:"_hasMedia",value:()=>!1},{kind:"method",key:"_getContainerClasses",value:function(){const{complementaryStyleScheme:t,_hasContent:r,_hasComplementary:n,_hasFooter:o}=this;return e({[`${P}--content-layout`]:!0,[`${P}--content-layout--with-children`]:r,[`${P}--content-layout--with-complementary`]:n,[`${P}--content-layout--with-footer`]:o,[`${P}--layout--border`]:t===g.WITH_BORDER})}},{kind:"method",key:"_hasBodyContent",value:function(){const{_hasContent:e,_hasCopy:t,_hasMedia:r,_hasFooter:n}=this;return e||t||r||n}},{kind:"method",key:"_handleSlotChange",value:function({target:e}){const{name:t}=e,r=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this[x[t]||"_hasContent"]=r}},{kind:"method",key:"_renderBody",value:function(){return t(d||(d=b`
      <div
        part="body"
        ?hidden="${0}"
        class="${0}--content-layout__body">
        ${0}${0}${0}
      </div>
    `),!this._hasBodyContent(),P,this._renderCopy(),this._renderInnerBody(),this._renderFooter())}},{kind:"method",key:"_renderContent",value:function(){const{_handleSlotChange:e}=this;return t(c||(c=b` <slot @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderCopy",value:function(){const{_handleSlotChange:e}=this;return t(u||(u=b` <slot name="copy" @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderFooter",value:function(){const{_hasFooter:e,_handleSlotChange:r}=this,n=this.querySelector(this.constructor.selectorCardGroup),o=null==n?void 0:n.getAttribute("style");return t(h||(h=b`
      <div
        part="footer"
        ?hidden="${0}"
        class="${0}"
        style="${0}"
        ?card-group="${0}"
        grid-mode="${0}">
        <slot name="footer" @slotchange="${0}"></slot>
      </div>
    `),!e,e&&`${T}--content-block-footer`,o,n,null==n?void 0:n.getAttribute("grid-mode"),r)}},{kind:"method",key:"_renderHeading",value:function(){const{_handleSlotChange:e}=this;return t(f||(f=b`
      <slot name="heading" @slotchange="${0}"></slot>
    `),e)}},{kind:"method",key:"_renderInnerBody",value:function(){return t(p||(p=b` ${0}${0} `),this._renderContent(),this._renderMedia())}},{kind:"method",key:"_renderMedia",value:function(){const{_handleSlotChange:e}=this;return t(m||(m=b` <slot name="media" @slotchange="${0}"></slot> `),e)}},{kind:"method",key:"_renderComplementary",value:function(){const{_handleSlotChange:e}=this;return t(y||(y=b`
      <slot name="complementary" @slotchange="${0}"></slot>
    `),e)}},{kind:"field",decorators:[r({attribute:"complementary-style-scheme"})],key:"complementaryStyleScheme",value:()=>g.REGULAR},{kind:"method",key:"render",value:function(){return t(v||(v=b`
      <div part="content-layout" class="${0}">
        ${0}${0}${0}
      </div>
    `),this._getContainerClasses(),this._renderHeading(),this._renderBody(),this._renderComplementary())}},{kind:"get",static:!0,key:"selectorCardGroup",value:function(){return`${T}-card-group`}},{kind:"field",static:!0,key:"styles",value:()=>s}]}}),a(o));export{F as C,k as a,g as b};
