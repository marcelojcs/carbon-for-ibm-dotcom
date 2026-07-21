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

import { b as e, n as t, x as r, s as i } from './query-assigned-elements.js';
import { i as n } from './if-non-empty.js';
import { C as o } from './link.js';
import { s } from './spread.js';
import { b as a, s as l } from './masthead-container.js';
import { c } from './carbon-element.js';
import './if-defined.js';
import './objectSpread2.js';
import './decorate.js';
import './class-map.js';
import './directive.js';
import './query.js';
import './settings.js';
import './focus.js';
import './pickBy.js';
import './toNumber.js';
import './store.js';
import './index.js';
import './_commonjsHelpers.js';
import './localeAPI.js';
import './Locale.js';
import './index3.js';
import './translateAPI.js';
import './state.js';
import './unsafe-html.js';
import './host-listener.js';
import './host-listener2.js';
import './global.js';
import './Analytics.js';
import './stable-selector.js';
import './feature-flags.js';
import './tabs.js';
import './get.js';
import './collection-helpers2.js';
import './162.js';
import './163.js';
import './query-all.js';
import './20.js';
import './203.js';
import './StickyHeader.js';
import './index4.js';
import './204.js';
import './collection-helpers.js';
import './search-with-typeahead.js';
import './dropdown.js';
import './form.js';
import './validity.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const p = ({ children: t, ...r } = {}) =>
  e`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${s(
    r
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${t}<path d="M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"></path><path d="M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"></path></svg>`;
let d,
  f,
  u,
  m = (e) => e;
function h() {
  h = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, t) {
      ['method', 'field'].forEach(function (r) {
        t.forEach(function (t) {
          t.kind === r &&
            'own' === t.placement &&
            this.defineClassElement(e, t);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, t) {
      var r = e.prototype;
      ['method', 'field'].forEach(function (i) {
        t.forEach(function (t) {
          var n = t.placement;
          if (t.kind === i && ('static' === n || 'prototype' === n)) {
            var o = 'static' === n ? e : r;
            this.defineClassElement(o, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var r = t.descriptor;
      if ('field' === t.kind) {
        var i = t.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === i ? void 0 : i.call(e),
        };
      }
      Object.defineProperty(e, t.key, r);
    },
    decorateClass: function (e, t) {
      var r = [],
        i = [],
        n = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, n);
        }, this),
        e.forEach(function (e) {
          if (!k(e)) return r.push(e);
          var t = this.decorateElement(e, n);
          r.push(t.element),
            r.push.apply(r, t.extras),
            i.push.apply(i, t.finishers);
        }, this),
        !t)
      )
        return { elements: r, finishers: i };
      var o = this.decorateConstructor(r, t);
      return i.push.apply(i, o.finishers), (o.finishers = i), o;
    },
    addElementPlacement: function (e, t, r) {
      var i = t[e.placement];
      if (!r && -1 !== i.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      i.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var r = [], i = [], n = e.decorators, o = n.length - 1;
        o >= 0;
        o--
      ) {
        var s = t[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var a = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, n[o])(a) || a);
        (e = l.element),
          this.addElementPlacement(e, t),
          l.finisher && i.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var p = 0; p < c.length; p++) this.addElementPlacement(c[p], t);
          r.push.apply(r, c);
        }
      }
      return { element: e, finishers: i, extras: r };
    },
    decorateConstructor: function (e, t) {
      for (var r = [], i = t.length - 1; i >= 0; i--) {
        var n = this.fromClassDescriptor(e),
          o = this.toClassDescriptor((0, t[i])(n) || n);
        if (
          (void 0 !== o.finisher && r.push(o.finisher), void 0 !== o.elements)
        ) {
          e = o.elements;
          for (var s = 0; s < e.length - 1; s++)
            for (var a = s + 1; a < e.length; a++)
              if (e[s].key === e[a].key && e[s].placement === e[a].placement)
                throw new TypeError('Duplicated element (' + e[s].key + ')');
        }
      }
      return { elements: e, finishers: r };
    },
    fromElementDescriptor: function (e) {
      var t = {
        kind: e.kind,
        key: e.key,
        placement: e.placement,
        descriptor: e.descriptor,
      };
      return (
        Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === e.kind && (t.initializer = e.initializer),
        t
      );
    },
    toElementDescriptors: function (e) {
      if (void 0 !== e)
        return ((t = e),
        (function (e) {
          if (Array.isArray(e)) return e;
        })(t) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return j(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? j(e, t)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()).map(function (e) {
          var t = this.toElementDescriptor(e);
          return (
            this.disallowProperty(e, 'finisher', 'An element descriptor'),
            this.disallowProperty(e, 'extras', 'An element descriptor'),
            t
          );
        }, this);
      var t;
    },
    toElementDescriptor: function (e) {
      var t = e.kind + '';
      if ('method' !== t && 'field' !== t)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            t +
            '"'
        );
      var r = w(e.key),
        i = e.placement + '';
      if ('static' !== i && 'prototype' !== i && 'own' !== i)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            i +
            '"'
        );
      var n = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var o = {
        kind: t,
        key: r,
        placement: i,
        descriptor: Object.assign({}, n),
      };
      return (
        'field' !== t
          ? this.disallowProperty(e, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              n,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              n,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              n,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (o.initializer = e.initializer)),
        o
      );
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: b(e, 'finisher'),
        extras: this.toElementDescriptors(e.extras),
      };
    },
    fromClassDescriptor: function (e) {
      var t = {
        kind: 'class',
        elements: e.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        t
      );
    },
    toClassDescriptor: function (e) {
      var t = e.kind + '';
      if ('class' !== t)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            t +
            '"'
        );
      this.disallowProperty(e, 'key', 'A class descriptor'),
        this.disallowProperty(e, 'placement', 'A class descriptor'),
        this.disallowProperty(e, 'descriptor', 'A class descriptor'),
        this.disallowProperty(e, 'initializer', 'A class descriptor'),
        this.disallowProperty(e, 'extras', 'A class descriptor');
      var r = b(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: r };
    },
    runClassFinishers: function (e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = (0, t[r])(e);
        if (void 0 !== i) {
          if ('function' != typeof i)
            throw new TypeError('Finishers must return a constructor.');
          e = i;
        }
      }
      return e;
    },
    disallowProperty: function (e, t, r) {
      if (void 0 !== e[t])
        throw new TypeError(r + " can't have a ." + t + ' property.');
    },
  };
  return e;
}
function y(e) {
  var t,
    r = w(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var i = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: r,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (i.decorators = e.decorators),
    'field' === e.kind && (i.initializer = e.value),
    i
  );
}
function v(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function k(e) {
  return e.decorators && e.decorators.length;
}
function g(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function b(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function w(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var i = r.call(e, t || 'default');
      if ('object' != typeof i) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function j(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function E() {
  return (
    (E =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var i = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = P(e)); );
              return e;
            })(e, t);
            if (i) {
              var n = Object.getOwnPropertyDescriptor(i, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }),
    E.apply(null, arguments)
  );
}
function P(e) {
  return (
    (P = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    P(e)
  );
}
const { stablePrefix: A } = i;
let C = (function (e, t, r, i) {
  var n = h();
  if (i) for (var o = 0; o < i.length; o++) n = i[o](n);
  var s = t(function (e) {
      n.initializeInstanceElements(e, a.elements);
    }, r),
    a = n.decorateClass(
      (function (e) {
        for (
          var t = [],
            r = function (e) {
              return (
                'method' === e.kind &&
                e.key === o.key &&
                e.placement === o.placement
              );
            },
            i = 0;
          i < e.length;
          i++
        ) {
          var n,
            o = e[i];
          if ('method' === o.kind && (n = t.find(r)))
            if (g(o.descriptor) || g(n.descriptor)) {
              if (k(o) || k(n))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              n.descriptor = o.descriptor;
            } else {
              if (k(o)) {
                if (k(n))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                n.decorators = o.decorators;
              }
              v(o, n);
            }
          else t.push(o);
        }
        return t;
      })(s.d.map(y)),
      e
    );
  return (
    n.initializeClassElements(s.F, a.elements),
    n.runClassFinishers(s.F, a.finishers)
  );
})(
  [c(`${A}-megamenu-category-link`)],
  function (e, i) {
    class o extends i {
      constructor(...t) {
        super(...t), e(this);
      }
    }
    return {
      F: o,
      d: [
        {
          kind: 'field',
          decorators: [t({ reflect: !0 })],
          key: 'layout',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [t({ reflect: !0 })],
          key: 'title',
          value: () => '',
        },
        {
          kind: 'field',
          key: '_targetMap',
          value: () => new Map([['external', p()]]),
        },
        {
          kind: 'method',
          key: '_renderIcon',
          value: function () {
            const { target: e, _targetMap: t } = this;
            return t.has(e) ? t.get(e) : void 0;
          },
        },
        {
          kind: 'method',
          key: '_renderInner',
          value: function () {
            const { title: e } = this;
            return r(
              d ||
                (d = m`
      ${0}
      <span part="link-description">
        <slot></slot>
      </span>
    `),
              e
                ? r(
                    f ||
                      (f = m`
            <div part="link-heading">
              <span part="span">${0}${0}</span>
              <slot name="icon" @slotchange="${0}"></slot>
            </div>
          `),
                    e,
                    this._renderIcon(),
                    this._handleSlotChange
                  )
                : ''
            );
          },
        },
        {
          kind: 'method',
          key: '_renderLink',
          value: function () {
            const {
              download: e,
              href: t,
              hreflang: i,
              linkRole: o,
              ping: s,
              rel: a,
              target: l,
              title: c,
              type: p,
              _classes: d,
              _handleClick: f,
            } = this;
            return r(
              u ||
                (u = m`
      <a
        id="link"
        class="${0}"
        part="link"
        role="${0}"
        download="${0}"
        href="${0}"
        hreflang="${0}"
        ping="${0}"
        rel="${0}"
        target="${0}"
        type="${0}"
        @click="${0}"
        data-attribute1="headerNav"
        data-attribute2="FlatItem"
        data-attribute3="${0}">
        ${0}
      </a>
    `),
              d,
              n(o),
              n(e),
              n(t),
              n(i),
              n(s),
              n(a),
              n(l),
              n(p),
              n(f),
              c,
              this._renderInner()
            );
          },
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            const e = this.closest(`[data-autoid="${a.stableSelector}"`);
            var t, r, i, n, s;
            (this.layout = null == e ? void 0 : e.getAttribute('layout')),
              ((t = o),
              (r = 'connectedCallback'),
              (i = this),
              (s = E(P(1 & (n = 3) ? t.prototype : t), r, i)),
              2 & n && 'function' == typeof s
                ? function (e) {
                    return s.apply(i, e);
                  }
                : s)([]);
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => l },
      ],
    };
  },
  o
);
export { C as default };
