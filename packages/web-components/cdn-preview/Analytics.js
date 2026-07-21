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

let e = { env: {} };
import { _ as t, b as r } from './index3.js';
import { l as i } from './index.js';
var a = (e && 'true' === e.env.SCROLL_TRACKING) || !1,
  n = e ? 'production' : 'development',
  o = (function () {
    return t(
      function e() {
        r(this, e);
      },
      null,
      [
        {
          key: 'registerEvent',
          value: function (e) {
            i.ibmStats && i.ibmStats.event(e);
          },
        },
        {
          key: 'initAll',
          value: function () {
            this.initScrollTracker(), this.initDynamicTabs(), this.initModals();
          },
        },
        {
          key: 'initScrollTracker',
          value: function () {
            a &&
              console.warn(
                'Scroll tracker service has been deprecated. Please refer to documentation for IBM DBDM gestures 2.0.'
              );
          },
        },
        {
          key: 'initDynamicTabs',
          value: function () {
            var e = this.triggerTabSelected.bind(this);
            i.document.addEventListener('tab-selected', function (t) {
              e(t.target.id, t.detail.item.innerText);
            });
          },
        },
        {
          key: 'triggerTabSelected',
          value: function (e, t) {
            try {
              this.registerEvent({
                type: 'element',
                primaryCategory: 'WIDGET',
                eventName: 'CLICK',
                eventCategoryGroup: 'TABS DYNAMIC',
                executionPath: e,
                targetTitle: t,
              });
            } catch (e) {
              'production' !== n &&
                console.error('Error triggering tab event:', e);
            }
          },
        },
        {
          key: 'initModals',
          value: function () {
            var e = this.triggerModalHide.bind(this);
            i.document.addEventListener('modal-hidden', function (t) {
              e(t.target.id, t.detail.launchingElement.innerText);
            });
            var t = this.triggerModalShow.bind(this);
            i.document.addEventListener('modal-shown', function (e) {
              t(e.target.id, e.detail.launchingElement.innerText);
            });
          },
        },
        {
          key: 'triggerModalHide',
          value: function (e, t) {
            try {
              this.registerEvent({
                type: 'element',
                primaryCategory: 'WIDGET',
                eventName: 'HIDE',
                eventCategoryGroup: 'SHOWHIDE',
                executionPath: e,
                targetTitle: t,
              });
            } catch (e) {
              'production' !== n &&
                console.error('Error triggering modal hide event:', e);
            }
          },
        },
        {
          key: 'triggerModalShow',
          value: function (e, t) {
            try {
              this.registerEvent({
                type: 'element',
                primaryCategory: 'WIDGET',
                eventName: 'SHOW',
                eventCategoryGroup: 'SHOWHIDE',
                executionPath: e,
                targetTitle: t,
              });
            } catch (e) {
              'production' !== n &&
                console.error('Error triggering modal show event:', e);
            }
          },
        },
        {
          key: 'videoPlayerStats',
          value: function (e) {
            var t = (null == e ? void 0 : e.playerState) || '',
              r = Math.floor(e.currentTime),
              i = Math.floor(e.duration),
              a = Math.floor((r / i) * 100);
            switch (e.playerState) {
              case 0:
                t = 'launched';
                break;
              case 1:
                t = 'paused';
                break;
              case 2:
                t = 'played';
                break;
              case 3:
                t = 'ended';
                break;
              case 99:
                t = 'error';
                break;
              default:
                'number' == typeof t && (t = '');
            }
            if (
              (0 === r && ((r = 'start'), (a = '0')),
              (r >= i || 3 === e.playerState) && ((r = 'end'), (a = '100')),
              'end' !== r || 1 !== e.playerState)
            ) {
              var o = {
                type: 'video',
                primaryCategory: 'VIDEO',
                eventName: e.title,
                eventCategoryGroup: e.playerType,
                executionPath: e.videoId || e.mediaId,
                execPathReturnCode: t,
                eventVidStatus: e.playerState,
                eventVidTimeStamp: r,
                eventVidLength: i,
                eventVidPlayed: a + '%',
              };
              null != e &&
                e.customMetricsData &&
                Object.keys(e.customMetricsData).forEach(function (t) {
                  o[t] = e.customMetricsData[t];
                });
              try {
                this.registerEvent(o);
              } catch (e) {
                'production' !== n &&
                  console.error('Error firing video metrics:', e);
              }
            }
          },
        },
      ]
    );
  })();
export { o as A };
