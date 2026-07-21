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

import { c as e } from './_commonjsHelpers.js';
import { s as t } from './query-assigned-elements.js';
import { s as n } from './striptags.js';
var u = { exports: {} };
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */ u.exports =
  (function () {
    const {
      entries: e,
      setPrototypeOf: t,
      isFrozen: n,
      getPrototypeOf: u,
      getOwnPropertyDescriptor: r,
    } = Object;
    let { freeze: i, seal: o, create: a } = Object,
      { apply: s, construct: l } = 'undefined' != typeof Reflect && Reflect;
    i ||
      (i = function (e) {
        return e;
      }),
      o ||
        (o = function (e) {
          return e;
        }),
      s ||
        (s = function (e, t) {
          for (
            var n = arguments.length, u = new Array(n > 2 ? n - 2 : 0), r = 2;
            r < n;
            r++
          )
            u[r - 2] = arguments[r];
          return e.apply(t, u);
        }),
      l ||
        (l = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1;
            u < t;
            u++
          )
            n[u - 1] = arguments[u];
          return new e(...n);
        });
    const c = b(Array.prototype.forEach),
      D = b(Array.prototype.lastIndexOf),
      p = b(Array.prototype.pop),
      h = b(Array.prototype.push),
      f = b(Array.prototype.splice),
      g = b(String.prototype.toLowerCase),
      d = b(String.prototype.toString),
      m = b(String.prototype.match),
      A = b(String.prototype.replace),
      E = b(String.prototype.indexOf),
      F = b(String.prototype.trim),
      k = b(Object.prototype.hasOwnProperty),
      C = b(RegExp.prototype.test),
      x = y(TypeError);
    function b(e) {
      return function (t) {
        t instanceof RegExp && (t.lastIndex = 0);
        for (
          var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), r = 1;
          r < n;
          r++
        )
          u[r - 1] = arguments[r];
        return s(e, t, u);
      };
    }
    function y(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), u = 0; u < t; u++)
          n[u] = arguments[u];
        return l(e, n);
      };
    }
    function w(e, u) {
      let r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
      t && t(e, null);
      let i = u.length;
      for (; i--; ) {
        let t = u[i];
        if ('string' == typeof t) {
          const e = r(t);
          e !== t && (n(u) || (u[i] = e), (t = e));
        }
        e[t] = !0;
      }
      return e;
    }
    function v(e) {
      for (let t = 0; t < e.length; t++) k(e, t) || (e[t] = null);
      return e;
    }
    function _(t) {
      const n = a(null);
      for (const [u, r] of e(t))
        k(t, u) &&
          (Array.isArray(r)
            ? (n[u] = v(r))
            : r && 'object' == typeof r && r.constructor === Object
            ? (n[u] = _(r))
            : (n[u] = r));
      return n;
    }
    function B(e, t) {
      for (; null !== e; ) {
        const n = r(e, t);
        if (n) {
          if (n.get) return b(n.get);
          if ('function' == typeof n.value) return b(n.value);
        }
        e = u(e);
      }
      function n() {
        return null;
      }
      return n;
    }
    const T = i([
        'a',
        'abbr',
        'acronym',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'bdi',
        'bdo',
        'big',
        'blink',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'center',
        'cite',
        'code',
        'col',
        'colgroup',
        'content',
        'data',
        'datalist',
        'dd',
        'decorator',
        'del',
        'details',
        'dfn',
        'dialog',
        'dir',
        'div',
        'dl',
        'dt',
        'element',
        'em',
        'fieldset',
        'figcaption',
        'figure',
        'font',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'img',
        'input',
        'ins',
        'kbd',
        'label',
        'legend',
        'li',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meter',
        'nav',
        'nobr',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'search',
        'section',
        'select',
        'shadow',
        'slot',
        'small',
        'source',
        'spacer',
        'span',
        'strike',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'template',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'tr',
        'track',
        'tt',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
      ]),
      S = i([
        'svg',
        'a',
        'altglyph',
        'altglyphdef',
        'altglyphitem',
        'animatecolor',
        'animatemotion',
        'animatetransform',
        'circle',
        'clippath',
        'defs',
        'desc',
        'ellipse',
        'enterkeyhint',
        'exportparts',
        'filter',
        'font',
        'g',
        'glyph',
        'glyphref',
        'hkern',
        'image',
        'inputmode',
        'line',
        'lineargradient',
        'marker',
        'mask',
        'metadata',
        'mpath',
        'part',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialgradient',
        'rect',
        'stop',
        'style',
        'switch',
        'symbol',
        'text',
        'textpath',
        'title',
        'tref',
        'tspan',
        'view',
        'vkern',
      ]),
      R = i([
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feDropShadow',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
      ]),
      N = i([
        'animate',
        'color-profile',
        'cursor',
        'discard',
        'font-face',
        'font-face-format',
        'font-face-name',
        'font-face-src',
        'font-face-uri',
        'foreignobject',
        'hatch',
        'hatchpath',
        'mesh',
        'meshgradient',
        'meshpatch',
        'meshrow',
        'missing-glyph',
        'script',
        'set',
        'solidcolor',
        'unknown',
        'use',
      ]),
      z = i([
        'math',
        'menclose',
        'merror',
        'mfenced',
        'mfrac',
        'mglyph',
        'mi',
        'mlabeledtr',
        'mmultiscripts',
        'mn',
        'mo',
        'mover',
        'mpadded',
        'mphantom',
        'mroot',
        'mrow',
        'ms',
        'mspace',
        'msqrt',
        'mstyle',
        'msub',
        'msup',
        'msubsup',
        'mtable',
        'mtd',
        'mtext',
        'mtr',
        'munder',
        'munderover',
        'mprescripts',
      ]),
      I = i([
        'maction',
        'maligngroup',
        'malignmark',
        'mlongdiv',
        'mscarries',
        'mscarry',
        'msgroup',
        'mstack',
        'msline',
        'msrow',
        'semantics',
        'annotation',
        'annotation-xml',
        'mprescripts',
        'none',
      ]),
      O = i(['#text']),
      L = i([
        'accept',
        'action',
        'align',
        'alt',
        'autocapitalize',
        'autocomplete',
        'autopictureinpicture',
        'autoplay',
        'background',
        'bgcolor',
        'border',
        'capture',
        'cellpadding',
        'cellspacing',
        'checked',
        'cite',
        'class',
        'clear',
        'color',
        'cols',
        'colspan',
        'controls',
        'controlslist',
        'coords',
        'crossorigin',
        'datetime',
        'decoding',
        'default',
        'dir',
        'disabled',
        'disablepictureinpicture',
        'disableremoteplayback',
        'download',
        'draggable',
        'enctype',
        'enterkeyhint',
        'exportparts',
        'face',
        'for',
        'headers',
        'height',
        'hidden',
        'high',
        'href',
        'hreflang',
        'id',
        'inert',
        'inputmode',
        'integrity',
        'ismap',
        'kind',
        'label',
        'lang',
        'list',
        'loading',
        'loop',
        'low',
        'max',
        'maxlength',
        'media',
        'method',
        'min',
        'minlength',
        'multiple',
        'muted',
        'name',
        'nonce',
        'noshade',
        'novalidate',
        'nowrap',
        'open',
        'optimum',
        'part',
        'pattern',
        'placeholder',
        'playsinline',
        'popover',
        'popovertarget',
        'popovertargetaction',
        'poster',
        'preload',
        'pubdate',
        'radiogroup',
        'readonly',
        'rel',
        'required',
        'rev',
        'reversed',
        'role',
        'rows',
        'rowspan',
        'spellcheck',
        'scope',
        'selected',
        'shape',
        'size',
        'sizes',
        'slot',
        'span',
        'srclang',
        'start',
        'src',
        'srcset',
        'step',
        'style',
        'summary',
        'tabindex',
        'title',
        'translate',
        'type',
        'usemap',
        'valign',
        'value',
        'width',
        'wrap',
        'xmlns',
        'slot',
      ]),
      M = i([
        'accent-height',
        'accumulate',
        'additive',
        'alignment-baseline',
        'amplitude',
        'ascent',
        'attributename',
        'attributetype',
        'azimuth',
        'basefrequency',
        'baseline-shift',
        'begin',
        'bias',
        'by',
        'class',
        'clip',
        'clippathunits',
        'clip-path',
        'clip-rule',
        'color',
        'color-interpolation',
        'color-interpolation-filters',
        'color-profile',
        'color-rendering',
        'cx',
        'cy',
        'd',
        'dx',
        'dy',
        'diffuseconstant',
        'direction',
        'display',
        'divisor',
        'dur',
        'edgemode',
        'elevation',
        'end',
        'exponent',
        'fill',
        'fill-opacity',
        'fill-rule',
        'filter',
        'filterunits',
        'flood-color',
        'flood-opacity',
        'font-family',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-variant',
        'font-weight',
        'fx',
        'fy',
        'g1',
        'g2',
        'glyph-name',
        'glyphref',
        'gradientunits',
        'gradienttransform',
        'height',
        'href',
        'id',
        'image-rendering',
        'in',
        'in2',
        'intercept',
        'k',
        'k1',
        'k2',
        'k3',
        'k4',
        'kerning',
        'keypoints',
        'keysplines',
        'keytimes',
        'lang',
        'lengthadjust',
        'letter-spacing',
        'kernelmatrix',
        'kernelunitlength',
        'lighting-color',
        'local',
        'marker-end',
        'marker-mid',
        'marker-start',
        'markerheight',
        'markerunits',
        'markerwidth',
        'maskcontentunits',
        'maskunits',
        'max',
        'mask',
        'mask-type',
        'media',
        'method',
        'mode',
        'min',
        'name',
        'numoctaves',
        'offset',
        'operator',
        'opacity',
        'order',
        'orient',
        'orientation',
        'origin',
        'overflow',
        'paint-order',
        'path',
        'pathlength',
        'patterncontentunits',
        'patterntransform',
        'patternunits',
        'points',
        'preservealpha',
        'preserveaspectratio',
        'primitiveunits',
        'r',
        'rx',
        'ry',
        'radius',
        'refx',
        'refy',
        'repeatcount',
        'repeatdur',
        'restart',
        'result',
        'rotate',
        'scale',
        'seed',
        'shape-rendering',
        'slope',
        'specularconstant',
        'specularexponent',
        'spreadmethod',
        'startoffset',
        'stddeviation',
        'stitchtiles',
        'stop-color',
        'stop-opacity',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke',
        'stroke-width',
        'style',
        'surfacescale',
        'systemlanguage',
        'tabindex',
        'tablevalues',
        'targetx',
        'targety',
        'transform',
        'transform-origin',
        'text-anchor',
        'text-decoration',
        'text-rendering',
        'textlength',
        'type',
        'u1',
        'u2',
        'unicode',
        'values',
        'viewbox',
        'visibility',
        'version',
        'vert-adv-y',
        'vert-origin-x',
        'vert-origin-y',
        'width',
        'word-spacing',
        'wrap',
        'writing-mode',
        'xchannelselector',
        'ychannelselector',
        'x',
        'x1',
        'x2',
        'xmlns',
        'y',
        'y1',
        'y2',
        'z',
        'zoomandpan',
      ]),
      $ = i([
        'accent',
        'accentunder',
        'align',
        'bevelled',
        'close',
        'columnsalign',
        'columnlines',
        'columnspan',
        'denomalign',
        'depth',
        'dir',
        'display',
        'displaystyle',
        'encoding',
        'fence',
        'frame',
        'height',
        'href',
        'id',
        'largeop',
        'length',
        'linethickness',
        'lspace',
        'lquote',
        'mathbackground',
        'mathcolor',
        'mathsize',
        'mathvariant',
        'maxsize',
        'minsize',
        'movablelimits',
        'notation',
        'numalign',
        'open',
        'rowalign',
        'rowlines',
        'rowspacing',
        'rowspan',
        'rspace',
        'rquote',
        'scriptlevel',
        'scriptminsize',
        'scriptsizemultiplier',
        'selection',
        'separator',
        'separators',
        'stretchy',
        'subscriptshift',
        'supscriptshift',
        'symmetric',
        'voffset',
        'width',
        'xmlns',
      ]),
      P = i([
        'xlink:href',
        'xml:id',
        'xlink:title',
        'xml:space',
        'xmlns:xlink',
      ]),
      U = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
      H = o(/<%[\w\W]*|[\w\W]*%>/gm),
      j = o(/\$\{[\w\W]*/gm),
      q = o(/^data-[\-\w.\u00B7-\uFFFF]+$/),
      G = o(/^aria-[\-\w]+$/),
      W = o(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
      ),
      Z = o(/^(?:\w+script|data):/i),
      Y = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
      Q = o(/^html$/i),
      X = o(/^[a-z][.\w]*(-[.\w]+)+$/i);
    var K = Object.freeze({
      __proto__: null,
      ARIA_ATTR: G,
      ATTR_WHITESPACE: Y,
      CUSTOM_ELEMENT: X,
      DATA_ATTR: q,
      DOCTYPE_NAME: Q,
      ERB_EXPR: H,
      IS_ALLOWED_URI: W,
      IS_SCRIPT_OR_DATA: Z,
      MUSTACHE_EXPR: U,
      TMPLIT_EXPR: j,
    });
    const V = {
        element: 1,
        attribute: 2,
        text: 3,
        cdataSection: 4,
        entityReference: 5,
        entityNode: 6,
        progressingInstruction: 7,
        comment: 8,
        document: 9,
        documentType: 10,
        documentFragment: 11,
        notation: 12,
      },
      J = function () {
        return 'undefined' == typeof window ? null : window;
      },
      ee = function (e, t) {
        if ('object' != typeof e || 'function' != typeof e.createPolicy)
          return null;
        let n = null;
        const u = 'data-tt-policy-suffix';
        t && t.hasAttribute(u) && (n = t.getAttribute(u));
        const r = 'dompurify' + (n ? '#' + n : '');
        try {
          return e.createPolicy(r, {
            createHTML: (e) => e,
            createScriptURL: (e) => e,
          });
        } catch (e) {
          return (
            console.warn('TrustedTypes policy ' + r + ' could not be created.'),
            null
          );
        }
      },
      te = function () {
        return {
          afterSanitizeAttributes: [],
          afterSanitizeElements: [],
          afterSanitizeShadowDOM: [],
          beforeSanitizeAttributes: [],
          beforeSanitizeElements: [],
          beforeSanitizeShadowDOM: [],
          uponSanitizeAttribute: [],
          uponSanitizeElement: [],
          uponSanitizeShadowNode: [],
        };
      };
    function ne() {
      let t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J();
      const n = (e) => ne(e);
      if (
        ((n.version = '3.3.1'),
        (n.removed = []),
        !t || !t.document || t.document.nodeType !== V.document || !t.Element)
      )
        return (n.isSupported = !1), n;
      let { document: u } = t;
      const r = u,
        o = r.currentScript,
        {
          DocumentFragment: s,
          HTMLTemplateElement: l,
          Node: b,
          Element: y,
          NodeFilter: v,
          NamedNodeMap: U = t.NamedNodeMap || t.MozNamedAttrMap,
          HTMLFormElement: H,
          DOMParser: j,
          trustedTypes: q,
        } = t,
        G = y.prototype,
        Z = B(G, 'cloneNode'),
        Y = B(G, 'remove'),
        X = B(G, 'nextSibling'),
        ue = B(G, 'childNodes'),
        re = B(G, 'parentNode');
      if ('function' == typeof l) {
        const e = u.createElement('template');
        e.content && e.content.ownerDocument && (u = e.content.ownerDocument);
      }
      let ie,
        oe = '';
      const {
          implementation: ae,
          createNodeIterator: se,
          createDocumentFragment: le,
          getElementsByTagName: ce,
        } = u,
        { importNode: De } = r;
      let pe = te();
      n.isSupported =
        'function' == typeof e &&
        'function' == typeof re &&
        ae &&
        void 0 !== ae.createHTMLDocument;
      const {
        MUSTACHE_EXPR: he,
        ERB_EXPR: fe,
        TMPLIT_EXPR: ge,
        DATA_ATTR: de,
        ARIA_ATTR: me,
        IS_SCRIPT_OR_DATA: Ae,
        ATTR_WHITESPACE: Ee,
        CUSTOM_ELEMENT: Fe,
      } = K;
      let { IS_ALLOWED_URI: ke } = K,
        Ce = null;
      const xe = w({}, [...T, ...S, ...R, ...z, ...O]);
      let be = null;
      const ye = w({}, [...L, ...M, ...$, ...P]);
      let we = Object.seal(
          a(null, {
            tagNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            attributeNameCheck: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: null,
            },
            allowCustomizedBuiltInElements: {
              writable: !0,
              configurable: !1,
              enumerable: !0,
              value: !1,
            },
          })
        ),
        ve = null,
        _e = null;
      const Be = Object.seal(
        a(null, {
          tagCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          attributeCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
        })
      );
      let Te = !0,
        Se = !0,
        Re = !1,
        Ne = !0,
        ze = !1,
        Ie = !0,
        Oe = !1,
        Le = !1,
        Me = !1,
        $e = !1,
        Pe = !1,
        Ue = !1,
        He = !0,
        je = !1;
      const qe = 'user-content-';
      let Ge = !0,
        We = !1,
        Ze = {},
        Ye = null;
      const Qe = w({}, [
        'annotation-xml',
        'audio',
        'colgroup',
        'desc',
        'foreignobject',
        'head',
        'iframe',
        'math',
        'mi',
        'mn',
        'mo',
        'ms',
        'mtext',
        'noembed',
        'noframes',
        'noscript',
        'plaintext',
        'script',
        'style',
        'svg',
        'template',
        'thead',
        'title',
        'video',
        'xmp',
      ]);
      let Xe = null;
      const Ke = w({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
      let Ve = null;
      const Je = w({}, [
          'alt',
          'class',
          'for',
          'id',
          'label',
          'name',
          'pattern',
          'placeholder',
          'role',
          'summary',
          'title',
          'value',
          'style',
          'xmlns',
        ]),
        et = 'http://www.w3.org/1998/Math/MathML',
        tt = 'http://www.w3.org/2000/svg',
        nt = 'http://www.w3.org/1999/xhtml';
      let ut = nt,
        rt = !1,
        it = null;
      const ot = w({}, [et, tt, nt], d);
      let at = w({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
        st = w({}, ['annotation-xml']);
      const lt = w({}, ['title', 'style', 'font', 'a', 'script']);
      let ct = null;
      const Dt = ['application/xhtml+xml', 'text/html'],
        pt = 'text/html';
      let ht = null,
        ft = null;
      const gt = u.createElement('form'),
        dt = function (e) {
          return e instanceof RegExp || e instanceof Function;
        },
        mt = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!ft || ft !== e) {
            if (
              ((e && 'object' == typeof e) || (e = {}),
              (e = _(e)),
              (ct =
                -1 === Dt.indexOf(e.PARSER_MEDIA_TYPE)
                  ? pt
                  : e.PARSER_MEDIA_TYPE),
              (ht = 'application/xhtml+xml' === ct ? d : g),
              (Ce = k(e, 'ALLOWED_TAGS') ? w({}, e.ALLOWED_TAGS, ht) : xe),
              (be = k(e, 'ALLOWED_ATTR') ? w({}, e.ALLOWED_ATTR, ht) : ye),
              (it = k(e, 'ALLOWED_NAMESPACES')
                ? w({}, e.ALLOWED_NAMESPACES, d)
                : ot),
              (Ve = k(e, 'ADD_URI_SAFE_ATTR')
                ? w(_(Je), e.ADD_URI_SAFE_ATTR, ht)
                : Je),
              (Xe = k(e, 'ADD_DATA_URI_TAGS')
                ? w(_(Ke), e.ADD_DATA_URI_TAGS, ht)
                : Ke),
              (Ye = k(e, 'FORBID_CONTENTS')
                ? w({}, e.FORBID_CONTENTS, ht)
                : Qe),
              (ve = k(e, 'FORBID_TAGS') ? w({}, e.FORBID_TAGS, ht) : _({})),
              (_e = k(e, 'FORBID_ATTR') ? w({}, e.FORBID_ATTR, ht) : _({})),
              (Ze = !!k(e, 'USE_PROFILES') && e.USE_PROFILES),
              (Te = !1 !== e.ALLOW_ARIA_ATTR),
              (Se = !1 !== e.ALLOW_DATA_ATTR),
              (Re = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (Ne = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
              (ze = e.SAFE_FOR_TEMPLATES || !1),
              (Ie = !1 !== e.SAFE_FOR_XML),
              (Oe = e.WHOLE_DOCUMENT || !1),
              ($e = e.RETURN_DOM || !1),
              (Pe = e.RETURN_DOM_FRAGMENT || !1),
              (Ue = e.RETURN_TRUSTED_TYPE || !1),
              (Me = e.FORCE_BODY || !1),
              (He = !1 !== e.SANITIZE_DOM),
              (je = e.SANITIZE_NAMED_PROPS || !1),
              (Ge = !1 !== e.KEEP_CONTENT),
              (We = e.IN_PLACE || !1),
              (ke = e.ALLOWED_URI_REGEXP || W),
              (ut = e.NAMESPACE || nt),
              (at = e.MATHML_TEXT_INTEGRATION_POINTS || at),
              (st = e.HTML_INTEGRATION_POINTS || st),
              (we = e.CUSTOM_ELEMENT_HANDLING || {}),
              e.CUSTOM_ELEMENT_HANDLING &&
                dt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                (we.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                dt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                (we.attributeNameCheck =
                  e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
              e.CUSTOM_ELEMENT_HANDLING &&
                'boolean' ==
                  typeof e.CUSTOM_ELEMENT_HANDLING
                    .allowCustomizedBuiltInElements &&
                (we.allowCustomizedBuiltInElements =
                  e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
              ze && (Se = !1),
              Pe && ($e = !0),
              Ze &&
                ((Ce = w({}, O)),
                (be = []),
                !0 === Ze.html && (w(Ce, T), w(be, L)),
                !0 === Ze.svg && (w(Ce, S), w(be, M), w(be, P)),
                !0 === Ze.svgFilters && (w(Ce, R), w(be, M), w(be, P)),
                !0 === Ze.mathMl && (w(Ce, z), w(be, $), w(be, P))),
              e.ADD_TAGS &&
                ('function' == typeof e.ADD_TAGS
                  ? (Be.tagCheck = e.ADD_TAGS)
                  : (Ce === xe && (Ce = _(Ce)), w(Ce, e.ADD_TAGS, ht))),
              e.ADD_ATTR &&
                ('function' == typeof e.ADD_ATTR
                  ? (Be.attributeCheck = e.ADD_ATTR)
                  : (be === ye && (be = _(be)), w(be, e.ADD_ATTR, ht))),
              e.ADD_URI_SAFE_ATTR && w(Ve, e.ADD_URI_SAFE_ATTR, ht),
              e.FORBID_CONTENTS &&
                (Ye === Qe && (Ye = _(Ye)), w(Ye, e.FORBID_CONTENTS, ht)),
              e.ADD_FORBID_CONTENTS &&
                (Ye === Qe && (Ye = _(Ye)), w(Ye, e.ADD_FORBID_CONTENTS, ht)),
              Ge && (Ce['#text'] = !0),
              Oe && w(Ce, ['html', 'head', 'body']),
              Ce.table && (w(Ce, ['tbody']), delete ve.tbody),
              e.TRUSTED_TYPES_POLICY)
            ) {
              if ('function' != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                throw x(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                );
              if ('function' != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                throw x(
                  'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                );
              (ie = e.TRUSTED_TYPES_POLICY), (oe = ie.createHTML(''));
            } else
              void 0 === ie && (ie = ee(q, o)),
                null !== ie &&
                  'string' == typeof oe &&
                  (oe = ie.createHTML(''));
            i && i(e), (ft = e);
          }
        },
        At = w({}, [...S, ...R, ...N]),
        Et = w({}, [...z, ...I]),
        Ft = function (e) {
          let t = re(e);
          (t && t.tagName) || (t = { namespaceURI: ut, tagName: 'template' });
          const n = g(e.tagName),
            u = g(t.tagName);
          return (
            !!it[e.namespaceURI] &&
            (e.namespaceURI === tt
              ? t.namespaceURI === nt
                ? 'svg' === n
                : t.namespaceURI === et
                ? 'svg' === n && ('annotation-xml' === u || at[u])
                : Boolean(At[n])
              : e.namespaceURI === et
              ? t.namespaceURI === nt
                ? 'math' === n
                : t.namespaceURI === tt
                ? 'math' === n && st[u]
                : Boolean(Et[n])
              : e.namespaceURI === nt
              ? !(t.namespaceURI === tt && !st[u]) &&
                !(t.namespaceURI === et && !at[u]) &&
                !Et[n] &&
                (lt[n] || !At[n])
              : !('application/xhtml+xml' !== ct || !it[e.namespaceURI]))
          );
        },
        kt = function (e) {
          h(n.removed, { element: e });
          try {
            re(e).removeChild(e);
          } catch (t) {
            Y(e);
          }
        },
        Ct = function (e, t) {
          try {
            h(n.removed, { attribute: t.getAttributeNode(e), from: t });
          } catch (e) {
            h(n.removed, { attribute: null, from: t });
          }
          if ((t.removeAttribute(e), 'is' === e))
            if ($e || Pe)
              try {
                kt(t);
              } catch (e) {}
            else
              try {
                t.setAttribute(e, '');
              } catch (e) {}
        },
        xt = function (e) {
          let t = null,
            n = null;
          if (Me) e = '<remove></remove>' + e;
          else {
            const t = m(e, /^[\r\n\t ]+/);
            n = t && t[0];
          }
          'application/xhtml+xml' === ct &&
            ut === nt &&
            (e =
              '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
              e +
              '</body></html>');
          const r = ie ? ie.createHTML(e) : e;
          if (ut === nt)
            try {
              t = new j().parseFromString(r, ct);
            } catch (e) {}
          if (!t || !t.documentElement) {
            t = ae.createDocument(ut, 'template', null);
            try {
              t.documentElement.innerHTML = rt ? oe : r;
            } catch (e) {}
          }
          const i = t.body || t.documentElement;
          return (
            e &&
              n &&
              i.insertBefore(u.createTextNode(n), i.childNodes[0] || null),
            ut === nt
              ? ce.call(t, Oe ? 'html' : 'body')[0]
              : Oe
              ? t.documentElement
              : i
          );
        },
        bt = function (e) {
          return se.call(
            e.ownerDocument || e,
            e,
            v.SHOW_ELEMENT |
              v.SHOW_COMMENT |
              v.SHOW_TEXT |
              v.SHOW_PROCESSING_INSTRUCTION |
              v.SHOW_CDATA_SECTION,
            null
          );
        },
        yt = function (e) {
          return (
            e instanceof H &&
            ('string' != typeof e.nodeName ||
              'string' != typeof e.textContent ||
              'function' != typeof e.removeChild ||
              !(e.attributes instanceof U) ||
              'function' != typeof e.removeAttribute ||
              'function' != typeof e.setAttribute ||
              'string' != typeof e.namespaceURI ||
              'function' != typeof e.insertBefore ||
              'function' != typeof e.hasChildNodes)
          );
        },
        wt = function (e) {
          return 'function' == typeof b && e instanceof b;
        };
      function vt(e, t, u) {
        c(e, (e) => {
          e.call(n, t, u, ft);
        });
      }
      const _t = function (e) {
          let t = null;
          if ((vt(pe.beforeSanitizeElements, e, null), yt(e))) return kt(e), !0;
          const u = ht(e.nodeName);
          if (
            (vt(pe.uponSanitizeElement, e, { tagName: u, allowedTags: Ce }),
            Ie &&
              e.hasChildNodes() &&
              !wt(e.firstElementChild) &&
              C(/<[/\w!]/g, e.innerHTML) &&
              C(/<[/\w!]/g, e.textContent))
          )
            return kt(e), !0;
          if (e.nodeType === V.progressingInstruction) return kt(e), !0;
          if (Ie && e.nodeType === V.comment && C(/<[/\w]/g, e.data))
            return kt(e), !0;
          if (
            !(Be.tagCheck instanceof Function && Be.tagCheck(u)) &&
            (!Ce[u] || ve[u])
          ) {
            if (!ve[u] && Tt(u)) {
              if (we.tagNameCheck instanceof RegExp && C(we.tagNameCheck, u))
                return !1;
              if (we.tagNameCheck instanceof Function && we.tagNameCheck(u))
                return !1;
            }
            if (Ge && !Ye[u]) {
              const t = re(e) || e.parentNode,
                n = ue(e) || e.childNodes;
              if (n && t)
                for (let u = n.length - 1; u >= 0; --u) {
                  const r = Z(n[u], !0);
                  (r.__removalCount = (e.__removalCount || 0) + 1),
                    t.insertBefore(r, X(e));
                }
            }
            return kt(e), !0;
          }
          return e instanceof y && !Ft(e)
            ? (kt(e), !0)
            : ('noscript' !== u && 'noembed' !== u && 'noframes' !== u) ||
              !C(/<\/no(script|embed|frames)/i, e.innerHTML)
            ? (ze &&
                e.nodeType === V.text &&
                ((t = e.textContent),
                c([he, fe, ge], (e) => {
                  t = A(t, e, ' ');
                }),
                e.textContent !== t &&
                  (h(n.removed, { element: e.cloneNode() }),
                  (e.textContent = t))),
              vt(pe.afterSanitizeElements, e, null),
              !1)
            : (kt(e), !0);
        },
        Bt = function (e, t, n) {
          if (He && ('id' === t || 'name' === t) && (n in u || n in gt))
            return !1;
          if (Se && !_e[t] && C(de, t));
          else if (Te && C(me, t));
          else if (
            Be.attributeCheck instanceof Function &&
            Be.attributeCheck(t, e)
          );
          else if (!be[t] || _e[t]) {
            if (
              !(
                (Tt(e) &&
                  ((we.tagNameCheck instanceof RegExp &&
                    C(we.tagNameCheck, e)) ||
                    (we.tagNameCheck instanceof Function &&
                      we.tagNameCheck(e))) &&
                  ((we.attributeNameCheck instanceof RegExp &&
                    C(we.attributeNameCheck, t)) ||
                    (we.attributeNameCheck instanceof Function &&
                      we.attributeNameCheck(t, e)))) ||
                ('is' === t &&
                  we.allowCustomizedBuiltInElements &&
                  ((we.tagNameCheck instanceof RegExp &&
                    C(we.tagNameCheck, n)) ||
                    (we.tagNameCheck instanceof Function &&
                      we.tagNameCheck(n))))
              )
            )
              return !1;
          } else if (Ve[t]);
          else if (C(ke, A(n, Ee, '')));
          else if (
            ('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
            'script' === e ||
            0 !== E(n, 'data:') ||
            !Xe[e]
          )
            if (Re && !C(Ae, A(n, Ee, '')));
            else if (n) return !1;
          return !0;
        },
        Tt = function (e) {
          return 'annotation-xml' !== e && m(e, Fe);
        },
        St = function (e) {
          vt(pe.beforeSanitizeAttributes, e, null);
          const { attributes: t } = e;
          if (!t || yt(e)) return;
          const u = {
            attrName: '',
            attrValue: '',
            keepAttr: !0,
            allowedAttributes: be,
            forceKeepAttr: void 0,
          };
          let r = t.length;
          for (; r--; ) {
            const i = t[r],
              { name: o, namespaceURI: a, value: s } = i,
              l = ht(o),
              D = s;
            let h = 'value' === o ? D : F(D);
            if (
              ((u.attrName = l),
              (u.attrValue = h),
              (u.keepAttr = !0),
              (u.forceKeepAttr = void 0),
              vt(pe.uponSanitizeAttribute, e, u),
              (h = u.attrValue),
              !je || ('id' !== l && 'name' !== l) || (Ct(o, e), (h = qe + h)),
              Ie && C(/((--!?|])>)|<\/(style|title|textarea)/i, h))
            ) {
              Ct(o, e);
              continue;
            }
            if ('attributename' === l && m(h, 'href')) {
              Ct(o, e);
              continue;
            }
            if (u.forceKeepAttr) continue;
            if (!u.keepAttr) {
              Ct(o, e);
              continue;
            }
            if (!Ne && C(/\/>/i, h)) {
              Ct(o, e);
              continue;
            }
            ze &&
              c([he, fe, ge], (e) => {
                h = A(h, e, ' ');
              });
            const f = ht(e.nodeName);
            if (Bt(f, l, h)) {
              if (
                ie &&
                'object' == typeof q &&
                'function' == typeof q.getAttributeType
              )
                if (a);
                else
                  switch (q.getAttributeType(f, l)) {
                    case 'TrustedHTML':
                      h = ie.createHTML(h);
                      break;
                    case 'TrustedScriptURL':
                      h = ie.createScriptURL(h);
                  }
              if (h !== D)
                try {
                  a ? e.setAttributeNS(a, o, h) : e.setAttribute(o, h),
                    yt(e) ? kt(e) : p(n.removed);
                } catch (t) {
                  Ct(o, e);
                }
            } else Ct(o, e);
          }
          vt(pe.afterSanitizeAttributes, e, null);
        },
        Rt = function e(t) {
          let n = null;
          const u = bt(t);
          for (vt(pe.beforeSanitizeShadowDOM, t, null); (n = u.nextNode()); )
            vt(pe.uponSanitizeShadowNode, n, null),
              _t(n),
              St(n),
              n.content instanceof s && e(n.content);
          vt(pe.afterSanitizeShadowDOM, t, null);
        };
      return (
        (n.sanitize = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            u = null,
            i = null,
            o = null,
            a = null;
          if (
            ((rt = !e),
            rt && (e = '\x3c!--\x3e'),
            'string' != typeof e && !wt(e))
          ) {
            if ('function' != typeof e.toString)
              throw x('toString is not a function');
            if ('string' != typeof (e = e.toString()))
              throw x('dirty is not a string, aborting');
          }
          if (!n.isSupported) return e;
          if (
            (Le || mt(t),
            (n.removed = []),
            'string' == typeof e && (We = !1),
            We)
          ) {
            if (e.nodeName) {
              const t = ht(e.nodeName);
              if (!Ce[t] || ve[t])
                throw x(
                  'root node is forbidden and cannot be sanitized in-place'
                );
            }
          } else if (e instanceof b)
            (u = xt('\x3c!----\x3e')),
              (i = u.ownerDocument.importNode(e, !0)),
              (i.nodeType === V.element && 'BODY' === i.nodeName) ||
              'HTML' === i.nodeName
                ? (u = i)
                : u.appendChild(i);
          else {
            if (!$e && !ze && !Oe && -1 === e.indexOf('<'))
              return ie && Ue ? ie.createHTML(e) : e;
            if (((u = xt(e)), !u)) return $e ? null : Ue ? oe : '';
          }
          u && Me && kt(u.firstChild);
          const l = bt(We ? e : u);
          for (; (o = l.nextNode()); )
            _t(o), St(o), o.content instanceof s && Rt(o.content);
          if (We) return e;
          if ($e) {
            if (Pe)
              for (a = le.call(u.ownerDocument); u.firstChild; )
                a.appendChild(u.firstChild);
            else a = u;
            return (
              (be.shadowroot || be.shadowrootmode) && (a = De.call(r, a, !0)), a
            );
          }
          let D = Oe ? u.outerHTML : u.innerHTML;
          return (
            Oe &&
              Ce['!doctype'] &&
              u.ownerDocument &&
              u.ownerDocument.doctype &&
              u.ownerDocument.doctype.name &&
              C(Q, u.ownerDocument.doctype.name) &&
              (D = '<!DOCTYPE ' + u.ownerDocument.doctype.name + '>\n' + D),
            ze &&
              c([he, fe, ge], (e) => {
                D = A(D, e, ' ');
              }),
            ie && Ue ? ie.createHTML(D) : D
          );
        }),
        (n.setConfig = function () {
          mt(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ),
            (Le = !0);
        }),
        (n.clearConfig = function () {
          (ft = null), (Le = !1);
        }),
        (n.isValidAttribute = function (e, t, n) {
          ft || mt({});
          const u = ht(e),
            r = ht(t);
          return Bt(u, r, n);
        }),
        (n.addHook = function (e, t) {
          'function' == typeof t && h(pe[e], t);
        }),
        (n.removeHook = function (e, t) {
          if (void 0 !== t) {
            const n = D(pe[e], t);
            return -1 === n ? void 0 : f(pe[e], n, 1)[0];
          }
          return p(pe[e]);
        }),
        (n.removeHooks = function (e) {
          pe[e] = [];
        }),
        (n.removeAllHooks = function () {
          pe = te();
        }),
        n
      );
    }
    var ue = ne();
    return ue;
  })();
var r = self.DOMPurify || (self.DOMPurify = u.exports.default || u.exports),
  i = { exports: {} };
!(function (e) {
  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var u = t[n];
      (u.enumerable = u.enumerable || !1),
        (u.configurable = !0),
        'value' in u && (u.writable = !0),
        Object.defineProperty(e, s(u.key), u);
    }
  }
  function n(e, n, u) {
    return (
      n && t(e.prototype, n),
      u && t(e, u),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
  }
  function u() {
    return (
      (u = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var u in n)
                Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
            }
            return e;
          }),
      u.apply(this, arguments)
    );
  }
  function r(e, t) {
    if (e) {
      if ('string' == typeof e) return i(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? i(e, t)
          : void 0
      );
    }
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, u = new Array(t); n < t; n++) u[n] = e[n];
    return u;
  }
  function o(e, t) {
    var n =
      ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = r(e)) ||
      (t && e && 'number' == typeof e.length)
    ) {
      n && (e = n);
      var u = 0;
      return function () {
        return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function a(e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var u = n.call(e, t || 'default');
      if ('object' != typeof u) return u;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  }
  function s(e) {
    var t = a(e, 'string');
    return 'symbol' == typeof t ? t : String(t);
  }
  function l() {
    return {
      async: !1,
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      hooks: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  function c(t) {
    e.defaults = t;
  }
  e.defaults = l();
  var D = /[&<>"']/,
    p = new RegExp(D.source, 'g'),
    h = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    f = new RegExp(h.source, 'g'),
    g = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
    d = function (e) {
      return g[e];
    };
  function m(e, t) {
    if (t) {
      if (D.test(e)) return e.replace(p, d);
    } else if (h.test(e)) return e.replace(f, d);
    return e;
  }
  var A = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function E(e) {
    return e.replace(A, function (e, t) {
      return 'colon' === (t = t.toLowerCase())
        ? ':'
        : '#' === t.charAt(0)
        ? 'x' === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : '';
    });
  }
  var F = /(^|[^\[])\^/g;
  function k(e, t) {
    (e = 'string' == typeof e ? e : e.source), (t = t || '');
    var n = {
      replace: function (t, u) {
        return (
          (u = (u = u.source || u).replace(F, '$1')), (e = e.replace(t, u)), n
        );
      },
      getRegex: function () {
        return new RegExp(e, t);
      },
    };
    return n;
  }
  var C = /[^\w:]/g,
    x = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function b(e, t, n) {
    if (e) {
      var u;
      try {
        u = decodeURIComponent(E(n)).replace(C, '').toLowerCase();
      } catch (e) {
        return null;
      }
      if (
        0 === u.indexOf('javascript:') ||
        0 === u.indexOf('vbscript:') ||
        0 === u.indexOf('data:')
      )
        return null;
    }
    t && !x.test(n) && (n = B(t, n));
    try {
      n = encodeURI(n).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }
    return n;
  }
  var y = {},
    w = /^[^:]+:\/*[^/]*$/,
    v = /^([^:]+:)[\s\S]*$/,
    _ = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function B(e, t) {
    y[' ' + e] ||
      (w.test(e) ? (y[' ' + e] = e + '/') : (y[' ' + e] = R(e, '/', !0)));
    var n = -1 === (e = y[' ' + e]).indexOf(':');
    return '//' === t.substring(0, 2)
      ? n
        ? t
        : e.replace(v, '$1') + t
      : '/' === t.charAt(0)
      ? n
        ? t
        : e.replace(_, '$1') + t
      : e + t;
  }
  var T = { exec: function () {} };
  function S(e, t) {
    var n = e
        .replace(/\|/g, function (e, t, n) {
          for (var u = !1, r = t; --r >= 0 && '\\' === n[r]; ) u = !u;
          return u ? '|' : ' |';
        })
        .split(/ \|/),
      u = 0;
    if (
      (n[0].trim() || n.shift(),
      n.length > 0 && !n[n.length - 1].trim() && n.pop(),
      n.length > t)
    )
      n.splice(t);
    else for (; n.length < t; ) n.push('');
    for (; u < n.length; u++) n[u] = n[u].trim().replace(/\\\|/g, '|');
    return n;
  }
  function R(e, t, n) {
    var u = e.length;
    if (0 === u) return '';
    for (var r = 0; r < u; ) {
      var i = e.charAt(u - r - 1);
      if (i !== t || n) {
        if (i === t || !n) break;
        r++;
      } else r++;
    }
    return e.slice(0, u - r);
  }
  function N(e, t) {
    if (-1 === e.indexOf(t[1])) return -1;
    for (var n = e.length, u = 0, r = 0; r < n; r++)
      if ('\\' === e[r]) r++;
      else if (e[r] === t[0]) u++;
      else if (e[r] === t[1] && --u < 0) return r;
    return -1;
  }
  function z(e) {
    e &&
      e.sanitize &&
      !e.silent &&
      console.warn(
        'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
      );
  }
  function I(e, t) {
    if (t < 1) return '';
    for (var n = ''; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
    return n + e;
  }
  function O(e, t, n, u) {
    var r = t.href,
      i = t.title ? m(t.title) : null,
      o = e[1].replace(/\\([\[\]])/g, '$1');
    if ('!' !== e[0].charAt(0)) {
      u.state.inLink = !0;
      var a = {
        type: 'link',
        raw: n,
        href: r,
        title: i,
        text: o,
        tokens: u.inlineTokens(o),
      };
      return (u.state.inLink = !1), a;
    }
    return { type: 'image', raw: n, href: r, title: i, text: m(o) };
  }
  function L(e, t) {
    var n = e.match(/^(\s+)(?:```)/);
    if (null === n) return t;
    var u = n[1];
    return t
      .split('\n')
      .map(function (e) {
        var t = e.match(/^\s+/);
        return null === t ? e : t[0].length >= u.length ? e.slice(u.length) : e;
      })
      .join('\n');
  }
  var M = (function () {
      function t(t) {
        this.options = t || e.defaults;
      }
      var n = t.prototype;
      return (
        (n.space = function (e) {
          var t = this.rules.block.newline.exec(e);
          if (t && t[0].length > 0) return { type: 'space', raw: t[0] };
        }),
        (n.code = function (e) {
          var t = this.rules.block.code.exec(e);
          if (t) {
            var n = t[0].replace(/^ {1,4}/gm, '');
            return {
              type: 'code',
              raw: t[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? n : R(n, '\n'),
            };
          }
        }),
        (n.fences = function (e) {
          var t = this.rules.block.fences.exec(e);
          if (t) {
            var n = t[0],
              u = L(n, t[3] || '');
            return {
              type: 'code',
              raw: n,
              lang: t[2]
                ? t[2].trim().replace(this.rules.inline._escapes, '$1')
                : t[2],
              text: u,
            };
          }
        }),
        (n.heading = function (e) {
          var t = this.rules.block.heading.exec(e);
          if (t) {
            var n = t[2].trim();
            if (/#$/.test(n)) {
              var u = R(n, '#');
              this.options.pedantic
                ? (n = u.trim())
                : (u && !/ $/.test(u)) || (n = u.trim());
            }
            return {
              type: 'heading',
              raw: t[0],
              depth: t[1].length,
              text: n,
              tokens: this.lexer.inline(n),
            };
          }
        }),
        (n.hr = function (e) {
          var t = this.rules.block.hr.exec(e);
          if (t) return { type: 'hr', raw: t[0] };
        }),
        (n.blockquote = function (e) {
          var t = this.rules.block.blockquote.exec(e);
          if (t) {
            var n = t[0].replace(/^ *>[ \t]?/gm, ''),
              u = this.lexer.state.top;
            this.lexer.state.top = !0;
            var r = this.lexer.blockTokens(n);
            return (
              (this.lexer.state.top = u),
              { type: 'blockquote', raw: t[0], tokens: r, text: n }
            );
          }
        }),
        (n.list = function (e) {
          var t = this.rules.block.list.exec(e);
          if (t) {
            var n,
              u,
              r,
              i,
              o,
              a,
              s,
              l,
              c,
              D,
              p,
              h,
              f = t[1].trim(),
              g = f.length > 1,
              d = {
                type: 'list',
                raw: '',
                ordered: g,
                start: g ? +f.slice(0, -1) : '',
                loose: !1,
                items: [],
              };
            (f = g ? '\\d{1,9}\\' + f.slice(-1) : '\\' + f),
              this.options.pedantic && (f = g ? f : '[*+-]');
            for (
              var m = new RegExp(
                '^( {0,3}' + f + ')((?:[\t ][^\\n]*)?(?:\\n|$))'
              );
              e && ((h = !1), (t = m.exec(e))) && !this.rules.block.hr.test(e);

            ) {
              if (
                ((n = t[0]),
                (e = e.substring(n.length)),
                (l = t[2].split('\n', 1)[0].replace(/^\t+/, function (e) {
                  return ' '.repeat(3 * e.length);
                })),
                (c = e.split('\n', 1)[0]),
                this.options.pedantic
                  ? ((i = 2), (p = l.trimLeft()))
                  : ((i = (i = t[2].search(/[^ ]/)) > 4 ? 1 : i),
                    (p = l.slice(i)),
                    (i += t[1].length)),
                (a = !1),
                !l &&
                  /^ *$/.test(c) &&
                  ((n += c + '\n'), (e = e.substring(c.length + 1)), (h = !0)),
                !h)
              )
                for (
                  var A = new RegExp(
                      '^ {0,' +
                        Math.min(3, i - 1) +
                        '}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))'
                    ),
                    E = new RegExp(
                      '^ {0,' +
                        Math.min(3, i - 1) +
                        '}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)'
                    ),
                    F = new RegExp(
                      '^ {0,' + Math.min(3, i - 1) + '}(?:```|~~~)'
                    ),
                    k = new RegExp('^ {0,' + Math.min(3, i - 1) + '}#');
                  e &&
                  ((c = D = e.split('\n', 1)[0]),
                  this.options.pedantic &&
                    (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
                  !F.test(c)) &&
                  !k.test(c) &&
                  !A.test(c) &&
                  !E.test(e);

                ) {
                  if (c.search(/[^ ]/) >= i || !c.trim())
                    p += '\n' + c.slice(i);
                  else {
                    if (a) break;
                    if (l.search(/[^ ]/) >= 4) break;
                    if (F.test(l)) break;
                    if (k.test(l)) break;
                    if (E.test(l)) break;
                    p += '\n' + c;
                  }
                  a || c.trim() || (a = !0),
                    (n += D + '\n'),
                    (e = e.substring(D.length + 1)),
                    (l = c.slice(i));
                }
              d.loose || (s ? (d.loose = !0) : /\n *\n *$/.test(n) && (s = !0)),
                this.options.gfm &&
                  (u = /^\[[ xX]\] /.exec(p)) &&
                  ((r = '[ ] ' !== u[0]), (p = p.replace(/^\[[ xX]\] +/, ''))),
                d.items.push({
                  type: 'list_item',
                  raw: n,
                  task: !!u,
                  checked: r,
                  loose: !1,
                  text: p,
                }),
                (d.raw += n);
            }
            (d.items[d.items.length - 1].raw = n.trimRight()),
              (d.items[d.items.length - 1].text = p.trimRight()),
              (d.raw = d.raw.trimRight());
            var C = d.items.length;
            for (o = 0; o < C; o++)
              if (
                ((this.lexer.state.top = !1),
                (d.items[o].tokens = this.lexer.blockTokens(
                  d.items[o].text,
                  []
                )),
                !d.loose)
              ) {
                var x = d.items[o].tokens.filter(function (e) {
                    return 'space' === e.type;
                  }),
                  b =
                    x.length > 0 &&
                    x.some(function (e) {
                      return /\n.*\n/.test(e.raw);
                    });
                d.loose = b;
              }
            if (d.loose) for (o = 0; o < C; o++) d.items[o].loose = !0;
            return d;
          }
        }),
        (n.html = function (e) {
          var t = this.rules.block.html.exec(e);
          if (t) {
            var n = {
              type: 'html',
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
              text: t[0],
            };
            if (this.options.sanitize) {
              var u = this.options.sanitizer
                ? this.options.sanitizer(t[0])
                : m(t[0]);
              (n.type = 'paragraph'),
                (n.text = u),
                (n.tokens = this.lexer.inline(u));
            }
            return n;
          }
        }),
        (n.def = function (e) {
          var t = this.rules.block.def.exec(e);
          if (t) {
            var n = t[1].toLowerCase().replace(/\s+/g, ' '),
              u = t[2]
                ? t[2]
                    .replace(/^<(.*)>$/, '$1')
                    .replace(this.rules.inline._escapes, '$1')
                : '',
              r = t[3]
                ? t[3]
                    .substring(1, t[3].length - 1)
                    .replace(this.rules.inline._escapes, '$1')
                : t[3];
            return { type: 'def', tag: n, raw: t[0], href: u, title: r };
          }
        }),
        (n.table = function (e) {
          var t = this.rules.block.table.exec(e);
          if (t) {
            var n = {
              type: 'table',
              header: S(t[1]).map(function (e) {
                return { text: e };
              }),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              rows:
                t[3] && t[3].trim()
                  ? t[3].replace(/\n[ \t]*$/, '').split('\n')
                  : [],
            };
            if (n.header.length === n.align.length) {
              n.raw = t[0];
              var u,
                r,
                i,
                o,
                a = n.align.length;
              for (u = 0; u < a; u++)
                /^ *-+: *$/.test(n.align[u])
                  ? (n.align[u] = 'right')
                  : /^ *:-+: *$/.test(n.align[u])
                  ? (n.align[u] = 'center')
                  : /^ *:-+ *$/.test(n.align[u])
                  ? (n.align[u] = 'left')
                  : (n.align[u] = null);
              for (a = n.rows.length, u = 0; u < a; u++)
                n.rows[u] = S(n.rows[u], n.header.length).map(function (e) {
                  return { text: e };
                });
              for (a = n.header.length, r = 0; r < a; r++)
                n.header[r].tokens = this.lexer.inline(n.header[r].text);
              for (a = n.rows.length, r = 0; r < a; r++)
                for (o = n.rows[r], i = 0; i < o.length; i++)
                  o[i].tokens = this.lexer.inline(o[i].text);
              return n;
            }
          }
        }),
        (n.lheading = function (e) {
          var t = this.rules.block.lheading.exec(e);
          if (t)
            return {
              type: 'heading',
              raw: t[0],
              depth: '=' === t[2].charAt(0) ? 1 : 2,
              text: t[1],
              tokens: this.lexer.inline(t[1]),
            };
        }),
        (n.paragraph = function (e) {
          var t = this.rules.block.paragraph.exec(e);
          if (t) {
            var n =
              '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
              type: 'paragraph',
              raw: t[0],
              text: n,
              tokens: this.lexer.inline(n),
            };
          }
        }),
        (n.text = function (e) {
          var t = this.rules.block.text.exec(e);
          if (t)
            return {
              type: 'text',
              raw: t[0],
              text: t[0],
              tokens: this.lexer.inline(t[0]),
            };
        }),
        (n.escape = function (e) {
          var t = this.rules.inline.escape.exec(e);
          if (t) return { type: 'escape', raw: t[0], text: m(t[1]) };
        }),
        (n.tag = function (e) {
          var t = this.rules.inline.tag.exec(e);
          if (t)
            return (
              !this.lexer.state.inLink && /^<a /i.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: this.options.sanitize ? 'text' : 'html',
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : m(t[0])
                  : t[0],
              }
            );
        }),
        (n.link = function (e) {
          var t = this.rules.inline.link.exec(e);
          if (t) {
            var n = t[2].trim();
            if (!this.options.pedantic && /^</.test(n)) {
              if (!/>$/.test(n)) return;
              var u = R(n.slice(0, -1), '\\');
              if ((n.length - u.length) % 2 == 0) return;
            } else {
              var r = N(t[2], '()');
              if (r > -1) {
                var i = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + r;
                (t[2] = t[2].substring(0, r)),
                  (t[0] = t[0].substring(0, i).trim()),
                  (t[3] = '');
              }
            }
            var o = t[2],
              a = '';
            if (this.options.pedantic) {
              var s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
              s && ((o = s[1]), (a = s[3]));
            } else a = t[3] ? t[3].slice(1, -1) : '';
            return (
              (o = o.trim()),
              /^</.test(o) &&
                (o =
                  this.options.pedantic && !/>$/.test(n)
                    ? o.slice(1)
                    : o.slice(1, -1)),
              O(
                t,
                {
                  href: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                  title: a ? a.replace(this.rules.inline._escapes, '$1') : a,
                },
                t[0],
                this.lexer
              )
            );
          }
        }),
        (n.reflink = function (e, t) {
          var n;
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            var u = (n[2] || n[1]).replace(/\s+/g, ' ');
            if (!(u = t[u.toLowerCase()])) {
              var r = n[0].charAt(0);
              return { type: 'text', raw: r, text: r };
            }
            return O(n, u, n[0], this.lexer);
          }
        }),
        (n.emStrong = function (e, t, n) {
          void 0 === n && (n = '');
          var u = this.rules.inline.emStrong.lDelim.exec(e);
          if (
            u &&
            (!u[3] ||
              !n.match(
                /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
              ))
          ) {
            var r = u[1] || u[2] || '';
            if (
              !r ||
              (r && ('' === n || this.rules.inline.punctuation.exec(n)))
            ) {
              var i,
                o,
                a = u[0].length - 1,
                s = a,
                l = 0,
                c =
                  '*' === u[0][0]
                    ? this.rules.inline.emStrong.rDelimAst
                    : this.rules.inline.emStrong.rDelimUnd;
              for (
                c.lastIndex = 0, t = t.slice(-1 * e.length + a);
                null != (u = c.exec(t));

              )
                if ((i = u[1] || u[2] || u[3] || u[4] || u[5] || u[6]))
                  if (((o = i.length), u[3] || u[4])) s += o;
                  else if (!((u[5] || u[6]) && a % 3) || (a + o) % 3) {
                    if (!((s -= o) > 0)) {
                      o = Math.min(o, o + s + l);
                      var D = e.slice(
                        0,
                        a + u.index + (u[0].length - i.length) + o
                      );
                      if (Math.min(a, o) % 2) {
                        var p = D.slice(1, -1);
                        return {
                          type: 'em',
                          raw: D,
                          text: p,
                          tokens: this.lexer.inlineTokens(p),
                        };
                      }
                      var h = D.slice(2, -2);
                      return {
                        type: 'strong',
                        raw: D,
                        text: h,
                        tokens: this.lexer.inlineTokens(h),
                      };
                    }
                  } else l += o;
            }
          }
        }),
        (n.codespan = function (e) {
          var t = this.rules.inline.code.exec(e);
          if (t) {
            var n = t[2].replace(/\n/g, ' '),
              u = /[^ ]/.test(n),
              r = /^ /.test(n) && / $/.test(n);
            return (
              u && r && (n = n.substring(1, n.length - 1)),
              (n = m(n, !0)),
              { type: 'codespan', raw: t[0], text: n }
            );
          }
        }),
        (n.br = function (e) {
          var t = this.rules.inline.br.exec(e);
          if (t) return { type: 'br', raw: t[0] };
        }),
        (n.del = function (e) {
          var t = this.rules.inline.del.exec(e);
          if (t)
            return {
              type: 'del',
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2]),
            };
        }),
        (n.autolink = function (e, t) {
          var n,
            u,
            r = this.rules.inline.autolink.exec(e);
          if (r)
            return (
              (u =
                '@' === r[2]
                  ? 'mailto:' + (n = m(this.options.mangle ? t(r[1]) : r[1]))
                  : (n = m(r[1]))),
              {
                type: 'link',
                raw: r[0],
                text: n,
                href: u,
                tokens: [{ type: 'text', raw: n, text: n }],
              }
            );
        }),
        (n.url = function (e, t) {
          var n;
          if ((n = this.rules.inline.url.exec(e))) {
            var u, r;
            if ('@' === n[2])
              r = 'mailto:' + (u = m(this.options.mangle ? t(n[0]) : n[0]));
            else {
              var i;
              do {
                (i = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
              } while (i !== n[0]);
              (u = m(n[0])), (r = 'www.' === n[1] ? 'http://' + n[0] : n[0]);
            }
            return {
              type: 'link',
              raw: n[0],
              text: u,
              href: r,
              tokens: [{ type: 'text', raw: u, text: u }],
            };
          }
        }),
        (n.inlineText = function (e, t) {
          var n,
            u = this.rules.inline.text.exec(e);
          if (u)
            return (
              (n = this.lexer.state.inRawBlock
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(u[0])
                    : m(u[0])
                  : u[0]
                : m(this.options.smartypants ? t(u[0]) : u[0])),
              { type: 'text', raw: u[0], text: n }
            );
        }),
        t
      );
    })(),
    $ = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
      def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: T,
      lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
  ($.def = k($.def)
    .replace('label', $._label)
    .replace('title', $._title)
    .getRegex()),
    ($.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    ($.listItemStart = k(/^( *)(bull) */)
      .replace('bull', $.bullet)
      .getRegex()),
    ($.list = k($.list)
      .replace(/bull/g, $.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
      )
      .replace('def', '\\n+(?=' + $.def.source + ')')
      .getRegex()),
    ($._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    ($._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    ($.html = k($.html, 'i')
      .replace('comment', $._comment)
      .replace('tag', $._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    ($.paragraph = k($._paragraph)
      .replace('hr', $.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('|table', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', $._tag)
      .getRegex()),
    ($.blockquote = k($.blockquote)
      .replace('paragraph', $.paragraph)
      .getRegex()),
    ($.normal = u({}, $)),
    ($.gfm = u({}, $.normal, {
      table:
        '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    ($.gfm.table = k($.gfm.table)
      .replace('hr', $.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', $._tag)
      .getRegex()),
    ($.gfm.paragraph = k($._paragraph)
      .replace('hr', $.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('table', $.gfm.table)
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
      )
      .replace('tag', $._tag)
      .getRegex()),
    ($.pedantic = u({}, $.normal, {
      html: k(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', $._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: T,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: k($.normal._paragraph)
        .replace('hr', $.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', $.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    }));
  var P = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: T,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: T,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
  };
  function U(e) {
    return e
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…');
  }
  function H(e) {
    var t,
      n,
      u = '',
      r = e.length;
    for (t = 0; t < r; t++)
      (n = e.charCodeAt(t)),
        Math.random() > 0.5 && (n = 'x' + n.toString(16)),
        (u += '&#' + n + ';');
    return u;
  }
  (P._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'),
    (P.punctuation = k(P.punctuation)
      .replace(/punctuation/g, P._punctuation)
      .getRegex()),
    (P.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (P.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
    (P._comment = k($._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
    (P.emStrong.lDelim = k(P.emStrong.lDelim)
      .replace(/punct/g, P._punctuation)
      .getRegex()),
    (P.emStrong.rDelimAst = k(P.emStrong.rDelimAst, 'g')
      .replace(/punct/g, P._punctuation)
      .getRegex()),
    (P.emStrong.rDelimUnd = k(P.emStrong.rDelimUnd, 'g')
      .replace(/punct/g, P._punctuation)
      .getRegex()),
    (P._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (P._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (P._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (P.autolink = k(P.autolink)
      .replace('scheme', P._scheme)
      .replace('email', P._email)
      .getRegex()),
    (P._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (P.tag = k(P.tag)
      .replace('comment', P._comment)
      .replace('attribute', P._attribute)
      .getRegex()),
    (P._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (P._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (P._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (P.link = k(P.link)
      .replace('label', P._label)
      .replace('href', P._href)
      .replace('title', P._title)
      .getRegex()),
    (P.reflink = k(P.reflink)
      .replace('label', P._label)
      .replace('ref', $._label)
      .getRegex()),
    (P.nolink = k(P.nolink).replace('ref', $._label).getRegex()),
    (P.reflinkSearch = k(P.reflinkSearch, 'g')
      .replace('reflink', P.reflink)
      .replace('nolink', P.nolink)
      .getRegex()),
    (P.normal = u({}, P)),
    (P.pedantic = u({}, P.normal, {
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: k(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', P._label)
        .getRegex(),
      reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', P._label)
        .getRegex(),
    })),
    (P.gfm = u({}, P.normal, {
      escape: k(P.escape).replace('])', '~|])').getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    })),
    (P.gfm.url = k(P.gfm.url, 'i')
      .replace('email', P.gfm._extended_email)
      .getRegex()),
    (P.breaks = u({}, P.gfm, {
      br: k(P.br).replace('{2,}', '*').getRegex(),
      text: k(P.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    }));
  var j = (function () {
      function t(t) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = t || e.defaults),
          (this.options.tokenizer = this.options.tokenizer || new M()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
        var n = { block: $.normal, inline: P.normal };
        this.options.pedantic
          ? ((n.block = $.pedantic), (n.inline = P.pedantic))
          : this.options.gfm &&
            ((n.block = $.gfm),
            this.options.breaks ? (n.inline = P.breaks) : (n.inline = P.gfm)),
          (this.tokenizer.rules = n);
      }
      (t.lex = function (e, n) {
        return new t(n).lex(e);
      }),
        (t.lexInline = function (e, n) {
          return new t(n).inlineTokens(e);
        });
      var u = t.prototype;
      return (
        (u.lex = function (e) {
          var t;
          for (
            e = e.replace(/\r\n|\r/g, '\n'), this.blockTokens(e, this.tokens);
            (t = this.inlineQueue.shift());

          )
            this.inlineTokens(t.src, t.tokens);
          return this.tokens;
        }),
        (u.blockTokens = function (e, t) {
          var n,
            u,
            r,
            i,
            o = this;
          for (
            void 0 === t && (t = []),
              e = this.options.pedantic
                ? e.replace(/\t/g, '    ').replace(/^ +$/gm, '')
                : e.replace(/^( *)(\t+)/gm, function (e, t, n) {
                    return t + '    '.repeat(n.length);
                  });
            e;

          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(function (u) {
                  return (
                    !!(n = u.call({ lexer: o }, e, t)) &&
                    ((e = e.substring(n.raw.length)), t.push(n), !0)
                  );
                })
              )
            )
              if ((n = this.tokenizer.space(e)))
                (e = e.substring(n.raw.length)),
                  1 === n.raw.length && t.length > 0
                    ? (t[t.length - 1].raw += '\n')
                    : t.push(n);
              else if ((n = this.tokenizer.code(e)))
                (e = e.substring(n.raw.length)),
                  !(u = t[t.length - 1]) ||
                  ('paragraph' !== u.type && 'text' !== u.type)
                    ? t.push(n)
                    : ((u.raw += '\n' + n.raw),
                      (u.text += '\n' + n.text),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        u.text));
              else if ((n = this.tokenizer.fences(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.heading(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.hr(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.blockquote(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.list(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.html(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.def(e)))
                (e = e.substring(n.raw.length)),
                  !(u = t[t.length - 1]) ||
                  ('paragraph' !== u.type && 'text' !== u.type)
                    ? this.tokens.links[n.tag] ||
                      (this.tokens.links[n.tag] = {
                        href: n.href,
                        title: n.title,
                      })
                    : ((u.raw += '\n' + n.raw),
                      (u.text += '\n' + n.raw),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        u.text));
              else if ((n = this.tokenizer.table(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.lheading(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if (
                ((r = e),
                this.options.extensions &&
                  this.options.extensions.startBlock &&
                  (function () {
                    var t = 1 / 0,
                      n = e.slice(1),
                      u = void 0;
                    o.options.extensions.startBlock.forEach(function (e) {
                      'number' == typeof (u = e.call({ lexer: this }, n)) &&
                        u >= 0 &&
                        (t = Math.min(t, u));
                    }),
                      t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
                  })(),
                this.state.top && (n = this.tokenizer.paragraph(r)))
              )
                (u = t[t.length - 1]),
                  i && 'paragraph' === u.type
                    ? ((u.raw += '\n' + n.raw),
                      (u.text += '\n' + n.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        u.text))
                    : t.push(n),
                  (i = r.length !== e.length),
                  (e = e.substring(n.raw.length));
              else if ((n = this.tokenizer.text(e)))
                (e = e.substring(n.raw.length)),
                  (u = t[t.length - 1]) && 'text' === u.type
                    ? ((u.raw += '\n' + n.raw),
                      (u.text += '\n' + n.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        u.text))
                    : t.push(n);
              else if (e) {
                var a = 'Infinite loop on byte: ' + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(a);
                  break;
                }
                throw new Error(a);
              }
          return (this.state.top = !0), t;
        }),
        (u.inline = function (e, t) {
          return (
            void 0 === t && (t = []),
            this.inlineQueue.push({ src: e, tokens: t }),
            t
          );
        }),
        (u.inlineTokens = function (e, t) {
          var n,
            u,
            r,
            i = this;
          void 0 === t && (t = []);
          var o,
            a,
            s,
            l = e;
          if (this.tokens.links) {
            var c = Object.keys(this.tokens.links);
            if (c.length > 0)
              for (
                ;
                null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(l));

              )
                c.includes(o[0].slice(o[0].lastIndexOf('[') + 1, -1)) &&
                  (l =
                    l.slice(0, o.index) +
                    '[' +
                    I('a', o[0].length - 2) +
                    ']' +
                    l.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(l)); )
            l =
              l.slice(0, o.index) +
              '[' +
              I('a', o[0].length - 2) +
              ']' +
              l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null != (o = this.tokenizer.rules.inline.escapedEmSt.exec(l));

          )
            (l =
              l.slice(0, o.index + o[0].length - 2) +
              '++' +
              l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
              this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
          for (; e; )
            if (
              (a || (s = ''),
              (a = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(function (u) {
                  return (
                    !!(n = u.call({ lexer: i }, e, t)) &&
                    ((e = e.substring(n.raw.length)), t.push(n), !0)
                  );
                })
              ))
            )
              if ((n = this.tokenizer.escape(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.tag(e)))
                (e = e.substring(n.raw.length)),
                  (u = t[t.length - 1]) &&
                  'text' === n.type &&
                  'text' === u.type
                    ? ((u.raw += n.raw), (u.text += n.text))
                    : t.push(n);
              else if ((n = this.tokenizer.link(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.reflink(e, this.tokens.links)))
                (e = e.substring(n.raw.length)),
                  (u = t[t.length - 1]) &&
                  'text' === n.type &&
                  'text' === u.type
                    ? ((u.raw += n.raw), (u.text += n.text))
                    : t.push(n);
              else if ((n = this.tokenizer.emStrong(e, l, s)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.codespan(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.br(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.del(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.autolink(e, H)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if (this.state.inLink || !(n = this.tokenizer.url(e, H))) {
                if (
                  ((r = e),
                  this.options.extensions &&
                    this.options.extensions.startInline &&
                    (function () {
                      var t = 1 / 0,
                        n = e.slice(1),
                        u = void 0;
                      i.options.extensions.startInline.forEach(function (e) {
                        'number' == typeof (u = e.call({ lexer: this }, n)) &&
                          u >= 0 &&
                          (t = Math.min(t, u));
                      }),
                        t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
                    })(),
                  (n = this.tokenizer.inlineText(r, U)))
                )
                  (e = e.substring(n.raw.length)),
                    '_' !== n.raw.slice(-1) && (s = n.raw.slice(-1)),
                    (a = !0),
                    (u = t[t.length - 1]) && 'text' === u.type
                      ? ((u.raw += n.raw), (u.text += n.text))
                      : t.push(n);
                else if (e) {
                  var D = 'Infinite loop on byte: ' + e.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(D);
                    break;
                  }
                  throw new Error(D);
                }
              } else (e = e.substring(n.raw.length)), t.push(n);
          return t;
        }),
        n(t, null, [
          {
            key: 'rules',
            get: function () {
              return { block: $, inline: P };
            },
          },
        ]),
        t
      );
    })(),
    q = (function () {
      function t(t) {
        this.options = t || e.defaults;
      }
      var n = t.prototype;
      return (
        (n.code = function (e, t, n) {
          var u = (t || '').match(/\S*/)[0];
          if (this.options.highlight) {
            var r = this.options.highlight(e, u);
            null != r && r !== e && ((n = !0), (e = r));
          }
          return (
            (e = e.replace(/\n$/, '') + '\n'),
            u
              ? '<pre><code class="' +
                this.options.langPrefix +
                m(u) +
                '">' +
                (n ? e : m(e, !0)) +
                '</code></pre>\n'
              : '<pre><code>' + (n ? e : m(e, !0)) + '</code></pre>\n'
          );
        }),
        (n.blockquote = function (e) {
          return '<blockquote>\n' + e + '</blockquote>\n';
        }),
        (n.html = function (e) {
          return e;
        }),
        (n.heading = function (e, t, n, u) {
          return this.options.headerIds
            ? '<h' +
                t +
                ' id="' +
                (this.options.headerPrefix + u.slug(n)) +
                '">' +
                e +
                '</h' +
                t +
                '>\n'
            : '<h' + t + '>' + e + '</h' + t + '>\n';
        }),
        (n.hr = function () {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        }),
        (n.list = function (e, t, n) {
          var u = t ? 'ol' : 'ul';
          return (
            '<' +
            u +
            (t && 1 !== n ? ' start="' + n + '"' : '') +
            '>\n' +
            e +
            '</' +
            u +
            '>\n'
          );
        }),
        (n.listitem = function (e) {
          return '<li>' + e + '</li>\n';
        }),
        (n.checkbox = function (e) {
          return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          );
        }),
        (n.paragraph = function (e) {
          return '<p>' + e + '</p>\n';
        }),
        (n.table = function (e, t) {
          return (
            t && (t = '<tbody>' + t + '</tbody>'),
            '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
          );
        }),
        (n.tablerow = function (e) {
          return '<tr>\n' + e + '</tr>\n';
        }),
        (n.tablecell = function (e, t) {
          var n = t.header ? 'th' : 'td';
          return (
            (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
            e +
            '</' +
            n +
            '>\n'
          );
        }),
        (n.strong = function (e) {
          return '<strong>' + e + '</strong>';
        }),
        (n.em = function (e) {
          return '<em>' + e + '</em>';
        }),
        (n.codespan = function (e) {
          return '<code>' + e + '</code>';
        }),
        (n.br = function () {
          return this.options.xhtml ? '<br/>' : '<br>';
        }),
        (n.del = function (e) {
          return '<del>' + e + '</del>';
        }),
        (n.link = function (e, t, n) {
          if (null === (e = b(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var u = '<a href="' + e + '"';
          return t && (u += ' title="' + t + '"'), (u += '>' + n + '</a>');
        }),
        (n.image = function (e, t, n) {
          if (null === (e = b(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var u = '<img src="' + e + '" alt="' + n + '"';
          return (
            t && (u += ' title="' + t + '"'),
            (u += this.options.xhtml ? '/>' : '>')
          );
        }),
        (n.text = function (e) {
          return e;
        }),
        t
      );
    })(),
    G = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.strong = function (e) {
          return e;
        }),
        (t.em = function (e) {
          return e;
        }),
        (t.codespan = function (e) {
          return e;
        }),
        (t.del = function (e) {
          return e;
        }),
        (t.html = function (e) {
          return e;
        }),
        (t.text = function (e) {
          return e;
        }),
        (t.link = function (e, t, n) {
          return '' + n;
        }),
        (t.image = function (e, t, n) {
          return '' + n;
        }),
        (t.br = function () {
          return '';
        }),
        e
      );
    })(),
    W = (function () {
      function e() {
        this.seen = {};
      }
      var t = e.prototype;
      return (
        (t.serialize = function (e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-');
        }),
        (t.getNextSafeSlug = function (e, t) {
          var n = e,
            u = 0;
          if (this.seen.hasOwnProperty(n)) {
            u = this.seen[e];
            do {
              n = e + '-' + ++u;
            } while (this.seen.hasOwnProperty(n));
          }
          return t || ((this.seen[e] = u), (this.seen[n] = 0)), n;
        }),
        (t.slug = function (e, t) {
          void 0 === t && (t = {});
          var n = this.serialize(e);
          return this.getNextSafeSlug(n, t.dryrun);
        }),
        e
      );
    })(),
    Z = (function () {
      function t(t) {
        (this.options = t || e.defaults),
          (this.options.renderer = this.options.renderer || new q()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new G()),
          (this.slugger = new W());
      }
      (t.parse = function (e, n) {
        return new t(n).parse(e);
      }),
        (t.parseInline = function (e, n) {
          return new t(n).parseInline(e);
        });
      var n = t.prototype;
      return (
        (n.parse = function (e, t) {
          void 0 === t && (t = !0);
          var n,
            u,
            r,
            i,
            o,
            a,
            s,
            l,
            c,
            D,
            p,
            h,
            f,
            g,
            d,
            m,
            A,
            F,
            k,
            C = '',
            x = e.length;
          for (n = 0; n < x; n++)
            if (
              ((D = e[n]),
              !(
                this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[D.type]
              ) ||
                (!1 ===
                  (k = this.options.extensions.renderers[D.type].call(
                    { parser: this },
                    D
                  )) &&
                  [
                    'space',
                    'hr',
                    'heading',
                    'code',
                    'table',
                    'blockquote',
                    'list',
                    'html',
                    'paragraph',
                    'text',
                  ].includes(D.type)))
            )
              switch (D.type) {
                case 'space':
                  continue;
                case 'hr':
                  C += this.renderer.hr();
                  continue;
                case 'heading':
                  C += this.renderer.heading(
                    this.parseInline(D.tokens),
                    D.depth,
                    E(this.parseInline(D.tokens, this.textRenderer)),
                    this.slugger
                  );
                  continue;
                case 'code':
                  C += this.renderer.code(D.text, D.lang, D.escaped);
                  continue;
                case 'table':
                  for (l = '', s = '', i = D.header.length, u = 0; u < i; u++)
                    s += this.renderer.tablecell(
                      this.parseInline(D.header[u].tokens),
                      { header: !0, align: D.align[u] }
                    );
                  for (
                    l += this.renderer.tablerow(s),
                      c = '',
                      i = D.rows.length,
                      u = 0;
                    u < i;
                    u++
                  ) {
                    for (s = '', o = (a = D.rows[u]).length, r = 0; r < o; r++)
                      s += this.renderer.tablecell(
                        this.parseInline(a[r].tokens),
                        { header: !1, align: D.align[r] }
                      );
                    c += this.renderer.tablerow(s);
                  }
                  C += this.renderer.table(l, c);
                  continue;
                case 'blockquote':
                  (c = this.parse(D.tokens)),
                    (C += this.renderer.blockquote(c));
                  continue;
                case 'list':
                  for (
                    p = D.ordered,
                      h = D.start,
                      f = D.loose,
                      i = D.items.length,
                      c = '',
                      u = 0;
                    u < i;
                    u++
                  )
                    (m = (d = D.items[u]).checked),
                      (A = d.task),
                      (g = ''),
                      d.task &&
                        ((F = this.renderer.checkbox(m)),
                        f
                          ? d.tokens.length > 0 &&
                            'paragraph' === d.tokens[0].type
                            ? ((d.tokens[0].text = F + ' ' + d.tokens[0].text),
                              d.tokens[0].tokens &&
                                d.tokens[0].tokens.length > 0 &&
                                'text' === d.tokens[0].tokens[0].type &&
                                (d.tokens[0].tokens[0].text =
                                  F + ' ' + d.tokens[0].tokens[0].text))
                            : d.tokens.unshift({ type: 'text', text: F })
                          : (g += F)),
                      (g += this.parse(d.tokens, f)),
                      (c += this.renderer.listitem(g, A, m));
                  C += this.renderer.list(c, p, h);
                  continue;
                case 'html':
                  C += this.renderer.html(D.text);
                  continue;
                case 'paragraph':
                  C += this.renderer.paragraph(this.parseInline(D.tokens));
                  continue;
                case 'text':
                  for (
                    c = D.tokens ? this.parseInline(D.tokens) : D.text;
                    n + 1 < x && 'text' === e[n + 1].type;

                  )
                    c +=
                      '\n' +
                      ((D = e[++n]).tokens
                        ? this.parseInline(D.tokens)
                        : D.text);
                  C += t ? this.renderer.paragraph(c) : c;
                  continue;
                default:
                  var b = 'Token with "' + D.type + '" type was not found.';
                  if (this.options.silent) return void console.error(b);
                  throw new Error(b);
              }
            else C += k || '';
          return C;
        }),
        (n.parseInline = function (e, t) {
          t = t || this.renderer;
          var n,
            u,
            r,
            i = '',
            o = e.length;
          for (n = 0; n < o; n++)
            if (
              ((u = e[n]),
              !(
                this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[u.type]
              ) ||
                (!1 ===
                  (r = this.options.extensions.renderers[u.type].call(
                    { parser: this },
                    u
                  )) &&
                  [
                    'escape',
                    'html',
                    'link',
                    'image',
                    'strong',
                    'em',
                    'codespan',
                    'br',
                    'del',
                    'text',
                  ].includes(u.type)))
            )
              switch (u.type) {
                case 'escape':
                case 'text':
                  i += t.text(u.text);
                  break;
                case 'html':
                  i += t.html(u.text);
                  break;
                case 'link':
                  i += t.link(u.href, u.title, this.parseInline(u.tokens, t));
                  break;
                case 'image':
                  i += t.image(u.href, u.title, u.text);
                  break;
                case 'strong':
                  i += t.strong(this.parseInline(u.tokens, t));
                  break;
                case 'em':
                  i += t.em(this.parseInline(u.tokens, t));
                  break;
                case 'codespan':
                  i += t.codespan(u.text);
                  break;
                case 'br':
                  i += t.br();
                  break;
                case 'del':
                  i += t.del(this.parseInline(u.tokens, t));
                  break;
                default:
                  var a = 'Token with "' + u.type + '" type was not found.';
                  if (this.options.silent) return void console.error(a);
                  throw new Error(a);
              }
            else i += r || '';
          return i;
        }),
        t
      );
    })(),
    Y = (function () {
      function t(t) {
        this.options = t || e.defaults;
      }
      var n = t.prototype;
      return (
        (n.preprocess = function (e) {
          return e;
        }),
        (n.postprocess = function (e) {
          return e;
        }),
        t
      );
    })();
  function Q(e, t, n) {
    return function (u) {
      if (
        ((u.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'),
        e)
      ) {
        var r =
          '<p>An error occurred:</p><pre>' + m(u.message + '', !0) + '</pre>';
        return t ? Promise.resolve(r) : n ? void n(null, r) : r;
      }
      if (t) return Promise.reject(u);
      if (!n) throw u;
      n(u);
    };
  }
  function X(e, t) {
    return function (n, r, i) {
      'function' == typeof r && ((i = r), (r = null));
      var o = u({}, r),
        a = Q((r = u({}, K.defaults, o)).silent, r.async, i);
      if (null == n)
        return a(new Error('marked(): input parameter is undefined or null'));
      if ('string' != typeof n)
        return a(
          new Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(n) +
              ', string expected'
          )
        );
      if ((z(r), r.hooks && (r.hooks.options = r), i)) {
        var s,
          l = r.highlight;
        try {
          r.hooks && (n = r.hooks.preprocess(n)), (s = e(n, r));
        } catch (e) {
          return a(e);
        }
        var c = function (e) {
          var n;
          if (!e)
            try {
              r.walkTokens && K.walkTokens(s, r.walkTokens),
                (n = t(s, r)),
                r.hooks && (n = r.hooks.postprocess(n));
            } catch (t) {
              e = t;
            }
          return (r.highlight = l), e ? a(e) : i(null, n);
        };
        if (!l || l.length < 3) return c();
        if ((delete r.highlight, !s.length)) return c();
        var D = 0;
        return (
          K.walkTokens(s, function (e) {
            'code' === e.type &&
              (D++,
              setTimeout(function () {
                l(e.text, e.lang, function (t, n) {
                  if (t) return c(t);
                  null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                    0 == --D && c();
                });
              }, 0));
          }),
          void (0 === D && c())
        );
      }
      if (r.async)
        return Promise.resolve(r.hooks ? r.hooks.preprocess(n) : n)
          .then(function (t) {
            return e(t, r);
          })
          .then(function (e) {
            return r.walkTokens
              ? Promise.all(K.walkTokens(e, r.walkTokens)).then(function () {
                  return e;
                })
              : e;
          })
          .then(function (e) {
            return t(e, r);
          })
          .then(function (e) {
            return r.hooks ? r.hooks.postprocess(e) : e;
          })
          .catch(a);
      try {
        r.hooks && (n = r.hooks.preprocess(n));
        var p = e(n, r);
        r.walkTokens && K.walkTokens(p, r.walkTokens);
        var h = t(p, r);
        return r.hooks && (h = r.hooks.postprocess(h)), h;
      } catch (e) {
        return a(e);
      }
    };
  }
  function K(e, t, n) {
    return X(j.lex, Z.parse)(e, t, n);
  }
  (Y.passThroughHooks = new Set(['preprocess', 'postprocess'])),
    (K.options = K.setOptions =
      function (e) {
        return (K.defaults = u({}, K.defaults, e)), c(K.defaults), K;
      }),
    (K.getDefaults = l),
    (K.defaults = e.defaults),
    (K.use = function () {
      for (
        var e = K.defaults.extensions || { renderers: {}, childTokens: {} },
          t = arguments.length,
          n = new Array(t),
          r = 0;
        r < t;
        r++
      )
        n[r] = arguments[r];
      n.forEach(function (t) {
        var n = u({}, t);
        if (
          ((n.async = K.defaults.async || n.async || !1),
          t.extensions &&
            (t.extensions.forEach(function (t) {
              if (!t.name) throw new Error('extension name required');
              if (t.renderer) {
                var n = e.renderers[t.name];
                e.renderers[t.name] = n
                  ? function () {
                      for (
                        var e = arguments.length, u = new Array(e), r = 0;
                        r < e;
                        r++
                      )
                        u[r] = arguments[r];
                      var i = t.renderer.apply(this, u);
                      return !1 === i && (i = n.apply(this, u)), i;
                    }
                  : t.renderer;
              }
              if (t.tokenizer) {
                if (!t.level || ('block' !== t.level && 'inline' !== t.level))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                e[t.level]
                  ? e[t.level].unshift(t.tokenizer)
                  : (e[t.level] = [t.tokenizer]),
                  t.start &&
                    ('block' === t.level
                      ? e.startBlock
                        ? e.startBlock.push(t.start)
                        : (e.startBlock = [t.start])
                      : 'inline' === t.level &&
                        (e.startInline
                          ? e.startInline.push(t.start)
                          : (e.startInline = [t.start])));
              }
              t.childTokens && (e.childTokens[t.name] = t.childTokens);
            }),
            (n.extensions = e)),
          t.renderer &&
            (function () {
              var e = K.defaults.renderer || new q(),
                u = function (n) {
                  var u = e[n];
                  e[n] = function () {
                    for (
                      var r = arguments.length, i = new Array(r), o = 0;
                      o < r;
                      o++
                    )
                      i[o] = arguments[o];
                    var a = t.renderer[n].apply(e, i);
                    return !1 === a && (a = u.apply(e, i)), a;
                  };
                };
              for (var r in t.renderer) u(r);
              n.renderer = e;
            })(),
          t.tokenizer &&
            (function () {
              var e = K.defaults.tokenizer || new M(),
                u = function (n) {
                  var u = e[n];
                  e[n] = function () {
                    for (
                      var r = arguments.length, i = new Array(r), o = 0;
                      o < r;
                      o++
                    )
                      i[o] = arguments[o];
                    var a = t.tokenizer[n].apply(e, i);
                    return !1 === a && (a = u.apply(e, i)), a;
                  };
                };
              for (var r in t.tokenizer) u(r);
              n.tokenizer = e;
            })(),
          t.hooks &&
            (function () {
              var e = K.defaults.hooks || new Y(),
                u = function (n) {
                  var u = e[n];
                  Y.passThroughHooks.has(n)
                    ? (e[n] = function (r) {
                        if (K.defaults.async)
                          return Promise.resolve(t.hooks[n].call(e, r)).then(
                            function (t) {
                              return u.call(e, t);
                            }
                          );
                        var i = t.hooks[n].call(e, r);
                        return u.call(e, i);
                      })
                    : (e[n] = function () {
                        for (
                          var r = arguments.length, i = new Array(r), o = 0;
                          o < r;
                          o++
                        )
                          i[o] = arguments[o];
                        var a = t.hooks[n].apply(e, i);
                        return !1 === a && (a = u.apply(e, i)), a;
                      });
                };
              for (var r in t.hooks) u(r);
              n.hooks = e;
            })(),
          t.walkTokens)
        ) {
          var r = K.defaults.walkTokens;
          n.walkTokens = function (e) {
            var n = [];
            return (
              n.push(t.walkTokens.call(this, e)),
              r && (n = n.concat(r.call(this, e))),
              n
            );
          };
        }
        K.setOptions(n);
      });
    }),
    (K.walkTokens = function (e, t) {
      for (
        var n,
          u = [],
          r = function () {
            var e = n.value;
            switch (((u = u.concat(t.call(K, e))), e.type)) {
              case 'table':
                for (var r, i = o(e.header); !(r = i()).done; ) {
                  var a = r.value;
                  u = u.concat(K.walkTokens(a.tokens, t));
                }
                for (var s, l = o(e.rows); !(s = l()).done; )
                  for (var c, D = o(s.value); !(c = D()).done; ) {
                    var p = c.value;
                    u = u.concat(K.walkTokens(p.tokens, t));
                  }
                break;
              case 'list':
                u = u.concat(K.walkTokens(e.items, t));
                break;
              default:
                K.defaults.extensions &&
                K.defaults.extensions.childTokens &&
                K.defaults.extensions.childTokens[e.type]
                  ? K.defaults.extensions.childTokens[e.type].forEach(function (
                      n
                    ) {
                      u = u.concat(K.walkTokens(e[n], t));
                    })
                  : e.tokens && (u = u.concat(K.walkTokens(e.tokens, t)));
            }
          },
          i = o(e);
        !(n = i()).done;

      )
        r();
      return u;
    }),
    (K.parseInline = X(j.lexInline, Z.parseInline)),
    (K.Parser = Z),
    (K.parser = Z.parse),
    (K.Renderer = q),
    (K.TextRenderer = G),
    (K.Lexer = j),
    (K.lexer = j.lex),
    (K.Tokenizer = M),
    (K.Slugger = W),
    (K.Hooks = Y),
    (K.parse = K);
  var V = K.options,
    J = K.setOptions,
    ee = K.use,
    te = K.walkTokens,
    ne = K.parseInline,
    ue = K,
    re = Z.parse,
    ie = j.lex;
  (e.Hooks = Y),
    (e.Lexer = j),
    (e.Parser = Z),
    (e.Renderer = q),
    (e.Slugger = W),
    (e.TextRenderer = G),
    (e.Tokenizer = M),
    (e.getDefaults = l),
    (e.lexer = ie),
    (e.marked = K),
    (e.options = V),
    (e.parse = ue),
    (e.parseInline = ne),
    (e.parser = re),
    (e.setOptions = J),
    (e.use = ee),
    (e.walkTokens = te);
})(i.exports);
var o = t.prefix,
  a = /\n|\s{2,}|&;/g;
function s(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    u = t.allowHtml,
    s = void 0 !== u && u,
    l = t.renderer,
    c = void 0 === l ? {} : l,
    D = t.customTags,
    p = s ? e : n(e),
    h = {
      link: function (e, t, n) {
        var u = t ? 'title="'.concat(t, '"') : null;
        return '<a class="'
          .concat(o, '--link ')
          .concat(o, '--link--lg" href="')
          .concat(e, '" ')
          .concat(u, '>')
          .concat(n, '</a>');
      },
      list: function (e, t) {
        var n = t ? 'ol' : 'ul',
          u = ''.concat(o, t ? '--list--ordered' : '--list--unordered');
        return '<'
          .concat(n, ' class="')
          .concat(u, '">')
          .concat(e, '</')
          .concat(n, '>');
      },
      listitem: function (e) {
        return '<li class="'.concat(o, '--list__item">').concat(e, '</li>');
      },
    };
  i.exports.marked.use({ smartypants: !0, renderer: Object.assign(h, c) }),
    D &&
      r.addHook('uponSanitizeElement', function (e, t) {
        var n = t.allowedTags,
          u = t.tagName;
        D.has(u) && !n[u] && (n[u] = !0);
      });
  var f = r.sanitize(i.exports.marked(p));
  return (
    D && r.removeHook('uponSanitizeElement'),
    (function (e) {
      return e.replace(a, ' ');
    })(f)
  );
}
export { s as m };
