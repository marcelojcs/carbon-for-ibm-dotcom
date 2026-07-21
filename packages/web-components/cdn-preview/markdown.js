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

import{o as e}from"./unsafe-html.js";import{i as t,a as r,n as i,x as s,D as n,s as o}from"./query-assigned-elements.js";import"./link.js";import{_ as l}from"./decorate.js";import{o as d}from"./class-map.js";import{p as c}from"./settings.js";import{_ as a,a as u}from"./get.js";import{c as f}from"./carbon-element.js";import{m as p}from"./markdownToHtml.js";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=t(['@charset "UTF-8";.cds--list--nested,.cds--list--ordered,.cds--list--ordered--native,.cds--list--unordered{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);line-height:var(--cds-body-01-line-height,1.42857);letter-spacing:var(--cds-body-01-letter-spacing,.16px);list-style:none}.cds--list--nested *,.cds--list--nested ::after,.cds--list--nested ::before,.cds--list--ordered *,.cds--list--ordered ::after,.cds--list--ordered ::before,.cds--list--ordered--native *,.cds--list--ordered--native ::after,.cds--list--ordered--native ::before,.cds--list--unordered *,.cds--list--unordered ::after,.cds--list--unordered ::before{box-sizing:inherit}.cds--list--unordered:not(.cds--list--nested){margin-inline-start:1rem}.cds--list--expressive,.cds--list--expressive .cds--list--nested{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);line-height:var(--cds-body-02-line-height,1.5);letter-spacing:var(--cds-body-02-letter-spacing,0)}.cds--list--ordered--native{list-style:decimal}.cds--list__item{color:var(--cds-text-primary,#161616)}.cds--list--nested{margin-inline-start:2rem}.cds--list--nested .cds--list__item{padding-inline-start:.25rem}.cds--list--ordered:not(.cds--list--nested){counter-reset:item}.cds--list--ordered:not(.cds--list--nested)>.cds--list__item{position:relative}.cds--list--ordered:not(.cds--list--nested)>.cds--list__item::before{position:absolute;content:counter(item) ".";counter-increment:item;inset-inline-start:-1.5rem}.cds--list--ordered--native.cds--list--nested,.cds--list--ordered.cds--list--nested{list-style-type:lower-latin}.cds--list--unordered>.cds--list__item{position:relative}.cds--list--unordered>.cds--list__item::before{position:absolute;content:"–";inset-inline-start:calc(-1 * 1rem)}.cds--list--unordered.cds--list--nested>.cds--list__item::before{content:"▪";inset-inline-start:calc(-1 * .75rem)}:host(cds-ordered-list) .cds--list--nested,:host(cds-unordered-list) .cds--list--nested{margin-inline-start:2rem}:host(cds-ordered-list) .cds--list--nested ::slotted(cds-list-item),:host(cds-unordered-list) .cds--list--nested ::slotted(cds-list-item){padding-inline-start:.25rem}:host(cds-ordered-list) .cds--list--ordered.cds--list--nested{list-style-type:lower-latin}:host(cds-ordered-list):not(.cds--list--nested){counter-reset:item}:host(cds-ordered-list):not(.cds--list--nested) ::slotted(cds-list-item){position:relative}:host(cds-ordered-list) .cds--list--ordered:not(.cds--list--nested) ::slotted(cds-list-item)::before{position:absolute;content:counter(item) ".";counter-increment:item;inset-inline-start:-1.5rem}:host(cds-unordered-list){--cds-ce--list-marker:"–"}:host(cds-unordered-list)[slot=nested]{--cds-ce--list-marker:"▪"}:host(cds-unordered-list) ::slotted(cds-list-item){position:relative}:host(cds-unordered-list) ::slotted(cds-list-item)::before{position:absolute;content:"–";inset-inline-start:calc(-1 * 1rem)}:host(cds-unordered-list[slot=nested]) ::slotted(cds-list-item)::before{content:"▪";inset-inline-start:calc(-1 * .75rem)}:host(cds-list-item){display:list-item;color:var(--cds-text-primary,#161616)}:host(cds-list-item)::before{position:absolute;content:var(--cds-ce--list-marker,none);inset-inline-start:-1rem}:host(cds-list-item[nested]){margin-block:0}:host(cds-list-item[nested]) .cds-ce--list__item__nested-child{padding-block-start:0}']);let h,y=e=>e;let v,k=l([f(`${c}-unordered-list`)],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"isExpressive",value:()=>!1},{kind:"method",key:"connectedCallback",value:function(){this.closest(this.constructor.selectorListItem)?this.setAttribute("slot","nested"):this.removeAttribute("slot"),function(e,t,r,i){var s=a(u(1&i?e.prototype:e),t,r);return 2&i?function(e){return s.apply(r,e)}:s}(r,"connectedCallback",this,3)([])}},{kind:"method",key:"render",value:function(){const e=d({[`${c}--list--unordered`]:!0,[`${c}--list--nested`]:"nested"===this.getAttribute("slot"),[`${c}--list--expressive`]:this.isExpressive});return s(h||(h=y`
      <ul class="${0}">
        <slot></slot>
      </ul>
    `),e)}},{kind:"get",static:!0,key:"selectorListItem",value:function(){return`${c}-list-item`}},{kind:"field",static:!0,key:"styles",value:()=>m}]}}),r),b=e=>e;l([f(`${c}-ordered-list`)],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"native",value:()=>!1},{kind:"method",key:"render",value:function(){const e=d({[`${c}--list--ordered`]:!this.native,[`${c}--list--ordered--native`]:this.native,[`${c}--list--nested`]:"nested"===this.getAttribute("slot"),[`${c}--list--expressive`]:this.isExpressive});return s(v||(v=b`
      <ol class="${0}">
        <slot></slot>
      </ol>
    `),e)}}]}}),k);let g,w=e=>e;l([f(`${c}-list-item`)],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",key:"_hasNestedChild",value:()=>!1},{kind:"method",key:"_handleSlotChangeNested",value:function({target:e}){this._hasNestedChild=e.assignedNodes().length>0,this.requestUpdate()}},{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"nested",value:()=>!1},{kind:"method",key:"connectedCallback",value:function(){this.toggleAttribute("nested",Boolean(this.closest(this.constructor.selectorNestedList))),this.hasAttribute("role")||this.setAttribute("role","listitem"),function(e,t,r,i){var s=a(u(1&i?e.prototype:e),t,r);return 2&i?function(e){return s.apply(r,e)}:s}(r,"connectedCallback",this,3)([])}},{kind:"method",key:"render",value:function(){const{_hasNestedChild:e,_handleSlotChangeNested:t}=this;return s(g||(g=w`
      <slot></slot>
      <div
        ?hidden="${0}"
        class="${0}-ce--list__item__nested-child">
        <slot name="nested" @slotchange="${0}"></slot>
      </div>
    `),!e,c,t)}},{kind:"get",static:!0,key:"selectorNestedList",value:function(){return`${c}-ordered-list[slot="nested"],${c}-unordered-list[slot="nested"]`}},{kind:"field",static:!0,key:"styles",value:()=>m}]}}),r);var E=t([""]);let $,_,x=e=>e;function A(){A=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var s=t.placement;if(t.kind===i&&("static"===s||"prototype"===s)){var n="static"===s?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],s={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,s)}),this),e.forEach((function(e){if(!j(e))return r.push(e);var t=this.decorateElement(e,s);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],s=e.decorators,n=s.length-1;n>=0;n--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var l=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,s[n])(l)||l);e=d.element,this.addElementPlacement(e,t),d.finisher&&i.push(d.finisher);var c=d.extras;if(c){for(var a=0;a<c.length;a++)this.addElementPlacement(c[a],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var s=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(s)||s);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var o=0;o<e.length-1;o++)for(var l=o+1;l<e.length;l++)if(e[o].key===e[l].key&&e[o].placement===e[l].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this);var t},toElementDescriptor:function(e){var t=e.kind+"";if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=z(e.key),i=e.placement+"";if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:T(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=T(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function C(e){var t,r=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function P(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function j(e){return e.decorators&&e.decorators.length}function D(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function T(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function z(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var i=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(i){var s=Object.getOwnPropertyDescriptor(i,t);return s.get?s.get.call(arguments.length<3?e:r):s.value}},S.apply(null,arguments)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}const{prefix:N,stablePrefix:R}=o;let I=function(e,t,r,i){var s=A();if(i)for(var n=0;n<i.length;n++)s=i[n](s);var o=t((function(e){s.initializeInstanceElements(e,l.elements)}),r),l=s.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var s,n=e[i];if("method"===n.kind&&(s=t.find(r)))if(D(n.descriptor)||D(s.descriptor)){if(j(n)||j(s))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");s.descriptor=n.descriptor}else{if(j(n)){if(j(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");s.decorators=n.decorators}P(n,s)}else t.push(n)}return t}(o.d.map(C)),e);return s.initializeClassElements(o.F,l.elements),s.runClassFinishers(o.F,l.finishers)}([f(`${R}-markdown`)],(function(t,r){class o extends r{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"field",key:"_hasRendered",value:()=>!1},{kind:"get",key:"_customTags",value:function(){return new Set([`${N}-link`,`${N}-ordered-list`,`${N}-unordered-list`,`${N}-list-item`])}},{kind:"get",key:"_renderer",value:function(){return{link:(e,t,r)=>`<${N}-link href="${e}" size="lg" ${t?`title="${t}"`:""} part="link">${r}</${N}-link>`,list(e,t){const r=`${N}-${t?"ordered":"unordered"}-list`;return`<${r} part="${t?"list ordered-list":"list unordered-list"}">${e}</${r}>`},listitem:e=>`<${N}-list-item part="list-item">${e}</${N}-list-item>`}}},{kind:"field",decorators:[i({attribute:!1})],key:"content",value:void 0},{kind:"method",key:"update",value:function(t){!function(e,t,r,i){var s=S(F(1&i?e.prototype:e),t,r);return 2&i&&"function"==typeof s?function(e){return s.apply(r,e)}:s}(o,"update",this,3)([t]);const{content:r,_customTags:i,textContent:l,_hasRendered:d,_renderer:c}=this;if(!d&&!this.firstElementChild){const t=s($||($=x`
        ${0}
      `),e(p(null!=r?r:d?"":l,{customTags:i,renderer:c})));this._hasRendered=!0,this.innerText="",n(t,this)}this.querySelectorAll("cds-ordered-list, cds-unordered-list").forEach((e=>{e.setAttribute("isExpressive","")}))}},{kind:"method",key:"render",value:function(){return s(_||(_=x` <slot></slot> `))}},{kind:"field",static:!0,key:"styles",value:()=>E}]}}),r);export{I as C};
