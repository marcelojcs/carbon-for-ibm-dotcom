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

import{g as t}from"./_commonjsHelpers.js";var r,e={exports:{}};(r=e).exports=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")},r.exports.__esModule=!0,r.exports.default=r.exports;var o=t(e.exports),n={exports:{}},i={exports:{}},a={exports:{}};!function(t){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}(a);var u={exports:{}};!function(t){var r=a.exports.default;t.exports=function(t,e){if("object"!=r(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports}(u),function(t){var r=a.exports.default,e=u.exports;t.exports=function(t){var o=e(t,"string");return"symbol"==r(o)?o:o+""},t.exports.__esModule=!0,t.exports.default=t.exports}(i),function(t){var r=i.exports;function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,r(n.key),n)}}t.exports=function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports}(n);var c=t(n.exports),s={exports:{}};!function(t){function r(t,r,e,o,n,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(o,n)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var a=t.apply(e,o);function u(t){r(a,n,i,u,c,"next",t)}function c(t){r(a,n,i,u,c,"throw",t)}u(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports}(s);var f=t(s.exports),l={exports:{}};!function(t){var r=a.exports.default;function e(){t.exports=e=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var o,n={},i=Object.prototype,a=i.hasOwnProperty,u=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function p(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{p({},"")}catch(o){p=function(t,r,e){return t[r]=e}}function h(t,r,e,o){var n=r&&r.prototype instanceof w?r:w,i=Object.create(n.prototype),a=new G(o||[]);return u(i,"_invoke",{value:T(t,e,a)}),i}function y(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var v="suspendedStart",d="suspendedYield",x="executing",g="completed",m={};function w(){}function b(){}function _(){}var L={};p(L,s,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(F([])));j&&j!==i&&a.call(j,s)&&(L=j);var O=_.prototype=w.prototype=Object.create(L);function P(t){["next","throw","return"].forEach((function(r){p(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,e){function o(n,i,u,c){var s=y(t[n],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==r(l)&&a.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var n;u(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,n){o(t,r,e,n)}))}return n=n?n.then(i,i):i()}})}function T(t,r,e){var n=v;return function(i,a){if(n===x)throw Error("Generator is already running");if(n===g){if("throw"===i)throw a;return{value:o,done:!0}}for(e.method=i,e.arg=a;;){var u=e.delegate;if(u){var c=k(u,e);if(c){if(c===m)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===v)throw n=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=x;var s=y(t,r,e);if("normal"===s.type){if(n=e.done?g:d,s.arg===m)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=g,e.method="throw",e.arg=s.arg)}}}function k(t,r){var e=r.method,n=t.iterator[e];if(n===o)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=o,k(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),m;var i=y(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=o),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function M(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function F(t){if(t||""===t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=o,r.done=!0,r};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return b.prototype=_,u(O,"constructor",{value:_,configurable:!0}),u(_,"constructor",{value:b,configurable:!0}),b.displayName=p(_,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,p(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},P(S.prototype),p(S.prototype,f,(function(){return this})),n.AsyncIterator=S,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(O),p(O,l,"Generator"),p(O,s,(function(){return this})),p(O,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),e=[];for(var o in r)e.push(o);return e.reverse(),function t(){for(;e.length;){var o=e.pop();if(o in r)return t.value=o,t.done=!1,t}return t.done=!0,t}},n.values=F,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=o)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return u.type="throw",u.arg=t,r.next=e,n&&(r.method="next",r.arg=o),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],u=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=r,n?(this.method="next",this.next=n.finallyLoc,m):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var n=o.arg;N(e)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:F(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=o),m}},n}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(l);var p=l.exports(),h=p;try{regeneratorRuntime=p}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=p:Function("r","regeneratorRuntime = r")(p)}export{c as _,f as a,o as b,h as r,i as t};
