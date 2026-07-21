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

import { s as e, b as t, d as i, k as s, K as a } from './cta.js';
import { a as o } from './20.js';
import { s as n } from './query-assigned-elements.js';
import { C as d } from './formatVideoCaption.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const { stablePrefix: c } = n;
d.LOCAL, d.DOWNLOAD, d.EXTERNAL, d.JUMP, d.VIDEO;
const r = (e) =>
  class extends e {
    _handleClick(e) {
      this.focus();
      const {
        ctaType: t,
        disabled: i,
        href: s,
        videoName: a,
        videoDescription: o,
      } = this;
      if ((t === d.VIDEO && e.preventDefault(), !i)) {
        const { eventRunAction: e } = this.constructor;
        this.dispatchEvent(
          new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            detail: { href: s, ctaType: t, videoName: a, videoDescription: o },
          })
        );
      }
    }
    updated(e) {
      super.updated(e);
      const {
          ctaType: t,
          videoName: i,
          videoDescription: s,
          href: a,
          videoDuration: o,
        } = this,
        { eventRequestVideoData: n } = this.constructor;
      e.has('ctaType') &&
        t === d.VIDEO &&
        void 0 === o &&
        this.dispatchEvent(
          new CustomEvent(n, {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            detail: { href: a, videoName: i, videoDescription: s },
          })
        ),
        ((e.has('videoName') && (null === i || 'null' === i)) ||
          e.has('videoDescription')) &&
          this.dispatchEvent(
            new CustomEvent(n, {
              bubbles: !0,
              cancelable: !0,
              composed: !0,
              detail: { videoName: i, videoDescription: s, href: a },
            })
          ),
        t === d.VIDEO &&
          this.offsetWidth > 0 &&
          this._updateVideoThumbnailUrl();
    }
    _updateVideoThumbnailUrl() {
      this.videoThumbnailUrl = a.getThumbnailUrl({
        mediaId: this.href,
        width: String(this.offsetWidth),
      });
    }
    static get eventRequestVideoData() {
      return `${c}-cta-request-video-data`;
    }
    static get eventRunAction() {
      return `${c}-cta-run-action`;
    }
  };
export { r as V };
