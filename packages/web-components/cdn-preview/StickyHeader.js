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

import{b as e,a as t}from"./index4.js";import{l as a}from"./index.js";import{s}from"./query-assigned-elements.js";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,i(s.key),s)}}function i(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,t||"default");if("object"!=n(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}var l=s.prefix,r=s.stablePrefix,c="dds",h="bx",d=parseFloat(e.lg.width)*t,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ownerDocument=a.document,this._state={cumulativeOffset:0,hasBanner:!1,leadspaceSearchThreshold:0,mastheadL0IsActive:!1,mastheadL1IsActive:!1,maxScrollaway:0,scrollPosPrevious:0,scrollPos:0,searchIsAtTop:!1,tocShouldStick:!1,tocIsAtTop:!1,tocIsAtSearch:!1},this._elements={banner:void 0,leadspaceSearch:void 0,leadspaceSearchBar:void 0,leadspaceSearchInput:void 0,localeModal:void 0,masthead:void 0,mastheadL0:void 0,mastheadL1:void 0,tableOfContents:void 0,tableOfContentsInnerBar:void 0},this._throttled=!1,this._resizeObserver=new ResizeObserver(this._handleResize.bind(this)),a.addEventListener("scroll",this._throttledHandler.bind(this))}return t=e,n=[{key:"global",get:function(){return Object.prototype.hasOwnProperty.call(a,"stickyHeader")||(a.stickyHeader=new e),a.stickyHeader}},{key:"customPropertyName",get:function(){return"--".concat(r,"-sticky-header-height")}}],(s=[{key:"height",get:function(){return this._state.cumulativeOffset}},{key:"_validateComponent",value:function(e,t){var a=e.tagName.toLowerCase();if(a!==t){if(a.split("-").splice(1).join("-")!==t.split("-").splice(1).join("-"))throw new TypeError("".concat(t," expected, ").concat(a," provided"));var s=["Mixed prefixes detected.\n","expected ".concat(t,", found ").concat(a,".")];return console.warn(s.join("")),!0}return!0}},{key:"_updateRefsV1orV2",value:function(e,t,a){var s=e.tagName.toLowerCase().split("-")[0];if(s===c)t.bind(this)();else{if(s!==r)throw new Error("\n        Could not find sub-elements for ".concat(e.tagName.toLowerCase(),".\n      "));a.bind(this)()}}},{key:"_updateLeadspaceRefsV1",value:function(){var e=this._elements.leadspaceSearch;this._elements.leadspaceSearchBar=e.shadowRoot.querySelector(".".concat(h,"--search-container")),this._elements.leadspaceSearchInput=e.querySelector("".concat(c,"-search-with-typeahead"))}},{key:"_updateLeadspaceRefsV2",value:function(){var e=this._elements.leadspaceSearch;this._elements.leadspaceSearchBar=e.shadowRoot.querySelector(".".concat(l,"--search-container")),this._elements.leadspaceSearchInput=e.querySelector("".concat(r,"-search-with-typeahead"))}},{key:"_updateMastheadRefsV1",value:function(){var e=this._elements.masthead;this._elements.mastheadL0=e.shadowRoot.querySelector(".".concat(h,"--masthead__l0")),this._elements.mastheadL1=e.querySelector("".concat(c,"-masthead-l1"))}},{key:"_updateMastheadRefsV2",value:function(){var e=this._elements.masthead;this._elements.mastheadL0=e.shadowRoot.querySelector(".".concat(l,"--masthead__l0")),this._elements.mastheadL1=e.querySelector("".concat(r,"-masthead-l1"))}},{key:"_updateTableOfContentsRefsV1",value:function(){var e=this._elements.tableOfContents,t=e.shadowRoot,a={desktop:{vertical:".".concat(c,"-ce--table-of-contents__items-container"),horizontal:".".concat(h,"--tableofcontents__navbar")},mobile:{vertical:".".concat(h,"--tableofcontents__sidebar"),horizontal:".".concat(h,"--tableofcontents__navbar")}},s=window.innerWidth>=d?"desktop":"mobile";this._elements.tableOfContentsInnerBar=t.querySelector(a[s][e.layout||"vertical"])}},{key:"_updateTableOfContentsRefsV2",value:function(){var e=this._elements.tableOfContents,t=e.shadowRoot;this._elements.tableOfContentsInnerBar=t.querySelector(window.innerWidth>=d&&"horizontal"!==(null==e?void 0:e.layout)?".".concat(r,"-ce--table-of-contents__items-container"):".".concat(l,"--tableofcontents__navbar"))}},{key:"_updateTableOfContentsRefs",value:function(){var e=this._elements.tableOfContents;this._updateRefsV1orV2(e,this._updateTableOfContentsRefsV1,this._updateTableOfContentsRefsV2)}},{key:"banner",set:function(e){this._validateComponent(e,"".concat(r,"-global-banner"))&&(this._elements.banner=e,this._state.hasBanner=!0,this._elements.masthead&&this._elements.masthead.setAttribute("with-banner",""),this._manageStickyElements())}},{key:"leadspaceSearch",set:function(e){this._validateComponent(e,"".concat(r,"-leadspace-with-search"))&&(this._elements.leadspaceSearch=e,this._updateRefsV1orV2(e,this._updateLeadspaceRefsV1,this._updateLeadspaceRefsV2),this._state.leadspaceSearchThreshold=parseInt(window.getComputedStyle(this._elements.leadspaceSearchBar).paddingBottom)-16,this._manageStickyElements())}},{key:"localeModal",set:function(e){this._validateComponent(e,"".concat(r,"-locale-modal"))&&(this._elements.localeModal=e,this._manageStickyElements())}},{key:"masthead",set:function(e){this._validateComponent(e,"".concat(r,"-masthead"))&&(this._elements.masthead=e,this._elements.banner&&this._elements.masthead.setAttribute("with-banner",""),this._updateRefsV1orV2(e,this._updateMastheadRefsV1,this._updateMastheadRefsV2),this._manageStickyElements())}},{key:"tableOfContents",set:function(e){this._validateComponent(e,"".concat(r,"-table-of-contents"))&&(this._elements.tableOfContents=e,this._updateTableOfContentsRefs(),this._resizeObserver.observe(this._elements.tableOfContents),this._manageStickyElements())}},{key:"_throttledHandler",value:function(){var e=this;this._throttled||(this._throttled=!0,this._manageStickyElements(),setTimeout((function(){e._throttled=!1}),20))}},{key:"_handleResize",value:function(){var e=this._state._hasBanner,t=this._elements,a=t.masthead,s=t.tableOfContents,n=t.leadspaceSearchBar;if(s&&a){if(this._updateTableOfContentsRefs(),window.innerWidth>=d&&"horizontal"!==s.layout&&!e)a.style.insetBlockStart="0";else{var o=this._elements.tableOfContentsInnerBar;0===a.offsetTop&&(o.style.insetBlockStart="".concat(a.offsetHeight,"px"))}this._manageStickyElements()}n&&(this._state.leadspaceSearchThreshold=parseInt(window.getComputedStyle(n).paddingBottom)-16)}},{key:"_handleBanner",value:function(){var e=this._elements.banner,t=this._state.scrollPos;this._state.cumulativeOffset+=Math.max(e.offsetHeight-t,0)}},{key:"_handleMasthead",value:function(){var e=this._elements.masthead;e.style.transition="none",e.style.insetBlockStart="".concat(this._state.cumulativeOffset,"px"),this._state.cumulativeOffset+=e.offsetHeight}},{key:"_handleToc",value:function(){var e=this._elements.tableOfContentsInnerBar,t=this._state.tocShouldStick;e.style.transition="none",e.style.insetBlockStart="".concat(this._state.cumulativeOffset,"px");var a=Math.round(e.getBoundingClientRect().top)<=this._state.cumulativeOffset+1;t&&a&&(this._state.cumulativeOffset+=e.offsetHeight)}},{key:"_handleLeadspaceSearch",value:function(){var e=this._elements,t=e.leadspaceSearch,a=e.leadspaceSearchBar,s=e.leadspaceSearchInput,n=this._state.leadspaceSearchThreshold,o=t.getBoundingClientRect().bottom<=n,i=t.hasAttribute("sticky-search");o?(i||(t.style.paddingBottom="".concat(a.offsetHeight,"px"),t.setAttribute("sticky-search",""),s.setAttribute("large",""),window.requestAnimationFrame((function(){a.style.transitionDuration="110ms",a.style.transform="translateY(0)"}))),a.style.insetBlockStart="".concat(this._state.cumulativeOffset,"px"),this._state.cumulativeOffset+=a.offsetHeight):i&&(t.style.paddingBottom="",t.removeAttribute("sticky-search"),s.removeAttribute("large"),a.style.transitionDuration="",a.style.transform="",a.style.insetBlockStart="")}},{key:"_calculateMaxScrollaway",value:function(){var e=this._elements,t=e.masthead,a=e.mastheadL0,s=e.mastheadL1,n=e.tableOfContents,o=e.tableOfContentsInnerBar,i=e.leadspaceSearchBar;this._state.maxScrollaway=0,this._state.tocShouldStick=!!n&&("horizontal"===n.layout||window.innerWidth<d),this._state.tocIsAtTop=!!o&&o.getBoundingClientRect().top<=this.height+1,this._state.searchIsAtTop=!!i&&i.getBoundingClientRect().top<=this.height+1,this._state.tocIsAtSearch=!(!i||!o)&&o.getBoundingClientRect().top<=i.getBoundingClientRect().bottom,this._state.mastheadL0IsActive=Boolean(null==t?void 0:t.querySelector("[expanded]")),this._state.mastheadL1IsActive=s&&s.hasAttribute("active");var l=this._state,r=l.tocShouldStick,c=l.tocIsAtTop,h=l.searchIsAtTop,u=l.tocIsAtSearch,m=l.mastheadL0IsActive,f=l.mastheadL1IsActive;a&&m?this._state.maxScrollaway=0:f&&a?this._state.maxScrollaway=a.offsetHeight:(h&&u&&r&&(this._state.maxScrollaway+=i.offsetHeight),h||c&&r?t&&(this._state.maxScrollaway+=t.offsetHeight):t&&a&&s&&(this._state.maxScrollaway+=a.offsetHeight))}},{key:"_positionElements",value:function(){var e=this._elements,t=e.banner,a=e.masthead,s=e.tableOfContentsInnerBar,n=e.leadspaceSearchBar,o=this._state.scrollPosPrevious;this._state.cumulativeOffset=Math.max(Math.min((a?a.offsetTop:0)+o-this._state.scrollPos,0),-1*this._state.maxScrollaway),t&&this._handleBanner(),a&&this._handleMasthead(),n&&this._handleLeadspaceSearch(),s&&this._handleToc()}},{key:"_manageStickyElements",value:function(){var e=this._elements.localeModal,t=this._state.scrollPos;e&&e.hasAttribute("open")||(this._state.scrollPosPrevious=t,this._state.scrollPos=Math.max(0,window.scrollY),this._calculateMaxScrollaway(),this._positionElements(),a.document.documentElement.style.setProperty(this.constructor.customPropertyName,"".concat(this._state.cumulativeOffset,"px")))}}])&&o(t.prototype,s),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,s,n}();export{u as S};
