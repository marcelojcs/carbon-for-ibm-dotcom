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

import{x as e,n as t,s as r}from"./query-assigned-elements.js";import{o as i}from"./host-listener2.js";import{l as o}from"./if-defined.js";import{H as n}from"./host-listener.js";import{M as a}from"./modal-render.js";import{V as s,c as l,d}from"./video-player-container.js";import"./expressive-modal.js";import"./expressive-modal-close-button.js";import{s as c}from"./striptags.js";import{f as u,a as p}from"./formatVideoCaption.js";import{C as f,s as h}from"./lightbox-image-viewer.js";import{c as m}from"./carbon-element.js";var v=/\n|\s{2,}|&([a-zA-Z]+);/g;function y(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).removeEntities,r=void 0===t||t,i=c(e);return i=r?function(e){return e.replace(v," ")}(i):i,i}let k,b,g,w,E=e=>e;function C(){C=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var o=t.placement;if(t.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!D(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(o)||o);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this);var t},toElementDescriptor:function(e){var t=e.kind+"";if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=O(e.key),i=e.placement+"";if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:S(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=S(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function P(e){var t,r=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function A(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function D(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function S(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function O(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var i=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},T.apply(null,arguments)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}const{stablePrefix:z}=r;!function(e,t,r,i){var o=C();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=t.find(r)))if(x(n.descriptor)||x(o.descriptor)){if(D(n)||D(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(D(n)){if(D(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}A(n,o)}else t.push(n)}return t}(a.d.map(P)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([m(`${z}-lightbox-video-player`)],(function(r,i){class o extends i{constructor(...e){super(...e),r(this)}}return{F:o,d:[{kind:"method",key:"_renderDescription",value:function(){const{description:t}=this;return e(k||(k=E`
      <slot name="description">${0}</slot>
    `),y(t))}},{kind:"method",key:"_renderMedia",value:function(){return e(b||(b=E`
      <div class="${0}--video-player" part="video-player">
        <div
          class="${0}--video-player__video-container"
          part="video-container">
          <slot></slot>
        </div>
      </div>
    `),z,z)}},{kind:"method",key:"_renderCTAs",value:function(){return e(g||(g=E` <slot name="cta">${0}</slot> `),this._ctaContents)}},{kind:"method",key:"_renderTitle",value:function(){const{duration:t,formatCaption:r,name:i}=this;let o="";if(null!=t){const e=Math.floor(t),r=Math.floor(e/3600),i=Math.floor(e%3600/60),n=e%60;o=r>0?`${r}:${String(i).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${i}:${String(n).padStart(2,"0")}`}return e(w||(w=E`
      <slot name="title">
        <h2 style="all: inherit;" part="h2">
          ${0}
        </h2>
      </slot>
    `),r({duration:o,name:i}))}},{kind:"method",key:"updated",value:function(e){e.has("name")&&this.setAttribute("aria-label",this.name)}},{kind:"method",key:"connectedCallback",value:function(){var e,t,r,i,n;this.setAttribute("role","dialog"),this._ctaContents=this.querySelector('[slot="cta"]')||void 0,(e=o,t="connectedCallback",r=this,n=T(_(1&(i=3)?e.prototype:e),t,r),2&i&&"function"==typeof n?function(e){return n.apply(r,e)}:n)([])}},{kind:"field",decorators:[t()],key:"description",value:()=>""},{kind:"field",decorators:[t({type:Number})],key:"duration",value:void 0},{kind:"field",decorators:[t({attribute:!1})],key:"formatCaption",value:()=>u},{kind:"field",decorators:[t({attribute:!1})],key:"formatDuration",value:()=>p},{kind:"field",decorators:[t()],key:"name",value:()=>""}]}}),f);let $,I,M=e=>e;function R(){R=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var o=t.placement;if(t.kind===i&&("static"===o||"prototype"===o)){var n="static"===o?e:r;this.defineClassElement(n,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!q(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var n=this.decorateConstructor(r,t);return i.push.apply(i,n.finishers),n.finishers=i,n},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[n])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[i])(o)||o);if(void 0!==n.finisher&&r.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this);var t},toElementDescriptor:function(e){var t=e.kind+"";if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=H(e.key),i=e.placement+"";if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:N(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=N(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function F(e){var t,r=H(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function V(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function q(e){return e.decorators&&e.decorators.length}function B(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function N(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function H(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function U(e,t,r,i){var o=W(G(1&i?e.prototype:e),t,r);return 2&i&&"function"==typeof o?function(e){return o.apply(r,e)}:o}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var i=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},W.apply(null,arguments)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}const{stablePrefix:X}=r;let Z=function(e,t,r,i){var o=R();if(i)for(var n=0;n<i.length;n++)o=i[n](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=t.find(r)))if(B(n.descriptor)||B(o.descriptor)){if(q(n)||q(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(q(n)){if(q(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}V(n,o)}else t.push(n)}return t}(a.d.map(F)),e);return o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([m(`${X}-lightbox-video-player-composite`)],(function(r,a){class d extends a{constructor(...e){super(...e),r(this)}}return{F:d,d:[{kind:"field",key:"_hCloseModal",value:()=>null},{kind:"field",key:"_handleAriaAndHiddenState",value(){return()=>{const{_videoPlayer:e}=this,t=null==e?void 0:e.querySelector("iframe");try{var r,i;if(this.open)null==t||null===(r=t.contentWindow)||void 0===r||null===(r=r.document.querySelector(".topBarContainer"))||void 0===r||r.removeAttribute("aria-hidden");else null==t||null===(i=t.contentWindow)||void 0===i||null===(i=i.document.querySelector(".topBarContainer"))||void 0===i||i.setAttribute("aria-hidden","true")}catch(e){throw console.log("Failed to access element in iframe"),e}const{selectorEmbeddedVideoContainer:o}=this.constructor;Array.prototype.slice.call(null==e?void 0:e.querySelectorAll(o)).forEach((e=>{e.toggleAttribute("hidden",e.dataset.videoId!==this.videoId)}))}}},{kind:"field",key:"_handleCloseModal",value(){return()=>{const{embeddedVideos:e={},videoId:t}=this,{[t]:r}=e;if(r&&r.pause(),this.ctaElement){const e=document.querySelector(`c4d-video-player-container-v7[video-id="${t}"]`);e&&"function"==typeof e._returnCTA&&e._returnCTA(),this.ctaElement=null}this.open=!1,this._handleAriaAndHiddenState()}}},{kind:"method",key:"_handleContentStateChange",value:function(e){}},{kind:"field",decorators:[n("document:eventContentStateChange")],key:"_handleContentStateChangeDocument",value(){return e=>{const{contentState:t,playingMode:r,videoId:i,name:o,customVideoDescription:n,ctaElement:a}=e.detail;if(!1===this.videoCtaLightBox){this.videoId=i;const{videoId:e}=this;t===s.VIDEO&&e===i&&r===l.LIGHTBOX&&(this.customVideoName=o,this.customVideoDescription=n,this.ctaElement=a,this.open=!0)}}}},{kind:"get",key:"_videoPlayer",value:function(){var e,t;const{selectorVideoPlayer:r}=this.constructor;return null===(e=this.modalRenderRoot)||void 0===e||null===(t=e.querySelector)||void 0===t?void 0:t.call(e,r)}},{kind:"field",decorators:[t({type:Boolean,reflect:!0})],key:"open",value:()=>!1},{kind:"field",decorators:[t({attribute:"custom-video-name"})],key:"customVideoName",value:void 0},{kind:"field",decorators:[t({attribute:"custom-video-description"})],key:"customVideoDescription",value:void 0},{kind:"field",decorators:[t({type:Boolean,attribute:"video-cta-lightbox"})],key:"videoCtaLightBox",value:()=>!1},{kind:"field",decorators:[t({attribute:!1})],key:"ctaElement",value:void 0},{kind:"method",key:"connectedCallback",value:function(){U(d,"connectedCallback",this,3)([]),this.modalRenderRoot=this.createModalRenderRoot(),this._hCloseModal=i(this.modalRenderRoot,this.constructor.eventCloseModal,this._handleCloseModal)}},{kind:"method",key:"disconnectedCallback",value:function(){this._hCloseModal&&(this._hCloseModal=this._hCloseModal.release()),U(d,"disconnectedCallback",this,3)([])}},{kind:"method",key:"updated",value:function(e){if(e.has("open")||e.has("videoId")){const{open:e,videoId:i}=this;var t,r;if(this._activateEmbeddedVideo(e?i:""),i)if(null===(t=this._loadVideoData)||void 0===t||t.call(this,i),e)null===(r=this._embedMedia)||void 0===r||r.call(this,i),this._handleAriaAndHiddenState(),this.ctaElement&&requestAnimationFrame((()=>{var e;const t=null===(e=this.modalRenderRoot)||void 0===e?void 0:e.querySelector("c4d-lightbox-video-player");t&&this.ctaElement&&(this.ctaElement.setAttribute("slot","cta"),t.appendChild(this.ctaElement))}))}}},{kind:"method",key:"renderLightDOM",value:function(){return e($||($=M``))}},{kind:"method",key:"renderModal",value:function(){const{formatCaption:t,formatDuration:r,customVideoName:i,hideCaption:n,open:a,mediaData:s={},videoId:l,customVideoDescription:d}=this,{[l]:c={}}=s,{description:u,duration:p,name:f}=c,h=i||f;return e(I||(I=M`
      <c4d-expressive-modal
        ?open="${0}"
        expressive-size="full-width"
        mode="lightbox"
        part="modal">
        <c4d-expressive-modal-close-button
          part="close-button"></c4d-expressive-modal-close-button>
        <c4d-lightbox-video-player
          description="${0}"
          duration="${0}"
          name="${0}"
          ?hide-caption="${0}"
          .formatCaption="${0}"
          .formatDuration="${0}"
          part="lightbox-video-player">
        </c4d-lightbox-video-player>
      </c4d-expressive-modal>
    `),a,o(d||u),o(p),o(h),n,o(t),o(r))}},{kind:"get",static:!0,key:"selectorVideoPlayer",value:function(){return`${X}-lightbox-video-player`}},{kind:"get",static:!0,key:"eventCloseModal",value:function(){return`${X}-expressive-modal-closed`}},{kind:"get",static:!0,key:"selectorEmbeddedVideoContainer",value:function(){return"[data-video-id]"}},{kind:"field",static:!0,key:"styles",value:()=>h}]}}),a(d));export{Z as C};
