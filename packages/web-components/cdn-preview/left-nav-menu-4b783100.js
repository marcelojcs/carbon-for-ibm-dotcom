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
 * @babel/runtime:
 * 
 regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE
 * 
 * js-cookie:
 * 
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 * 
 * marked:
 * 
 * marked v4.3.0 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
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
 * https://www.npmjs.com/package/axios
 * https://www.npmjs.com/package/isomorphic-dompurify
 * https://www.npmjs.com/package/striptags
 */

import {
  F as e,
  g as t,
  n as r,
  x as n,
  v as i,
  s as o,
  c as a,
  a as s,
  q as l,
} from './index-f5115fc7.js';
let c,
  d = (e) => e;
function u() {
  u = function () {
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
      ['method', 'field'].forEach(function (n) {
        t.forEach(function (t) {
          var i = t.placement;
          if (t.kind === n && ('static' === i || 'prototype' === i)) {
            var o = 'static' === i ? e : r;
            this.defineClassElement(o, t);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, t) {
      var r = t.descriptor;
      if ('field' === t.kind) {
        var n = t.initializer;
        r = {
          enumerable: r.enumerable,
          writable: r.writable,
          configurable: r.configurable,
          value: void 0 === n ? void 0 : n.call(e),
        };
      }
      Object.defineProperty(e, t.key, r);
    },
    decorateClass: function (e, t) {
      var r = [],
        n = [],
        i = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, i);
        }, this),
        e.forEach(function (e) {
          if (!h(e)) return r.push(e);
          var t = this.decorateElement(e, i);
          r.push(t.element),
            r.push.apply(r, t.extras),
            n.push.apply(n, t.finishers);
        }, this),
        !t)
      )
        return { elements: r, finishers: n };
      var o = this.decorateConstructor(r, t);
      return n.push.apply(n, o.finishers), (o.finishers = n), o;
    },
    addElementPlacement: function (e, t, r) {
      var n = t[e.placement];
      if (!r && -1 !== n.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      n.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var r = [], n = [], i = e.decorators, o = i.length - 1;
        o >= 0;
        o--
      ) {
        var a = t[e.placement];
        a.splice(a.indexOf(e.key), 1);
        var s = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, i[o])(s) || s);
        (e = l.element),
          this.addElementPlacement(e, t),
          l.finisher && n.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var d = 0; d < c.length; d++) this.addElementPlacement(c[d], t);
          r.push.apply(r, c);
        }
      }
      return { element: e, finishers: n, extras: r };
    },
    decorateConstructor: function (e, t) {
      for (var r = [], n = t.length - 1; n >= 0; n--) {
        var i = this.fromClassDescriptor(e),
          o = this.toClassDescriptor((0, t[n])(i) || i);
        if (
          (void 0 !== o.finisher && r.push(o.finisher), void 0 !== o.elements)
        ) {
          e = o.elements;
          for (var a = 0; a < e.length - 1; a++)
            for (var s = a + 1; s < e.length; s++)
              if (e[a].key === e[s].key && e[a].placement === e[s].placement)
                throw new TypeError('Duplicated element (' + e[a].key + ')');
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
              if ('string' == typeof e) return b(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? b(e, t)
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
      var r = y(e.key),
        n = e.placement + '';
      if ('static' !== n && 'prototype' !== n && 'own' !== n)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            n +
            '"'
        );
      var i = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var o = {
        kind: t,
        key: r,
        placement: n,
        descriptor: Object.assign({}, i),
      };
      return (
        'field' !== t
          ? this.disallowProperty(e, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              i,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              i,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              i,
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
        finisher: v(e, 'finisher'),
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
      var r = v(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: r };
    },
    runClassFinishers: function (e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = (0, t[r])(e);
        if (void 0 !== n) {
          if ('function' != typeof n)
            throw new TypeError('Finishers must return a constructor.');
          e = n;
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
function p(e) {
  var t,
    r = y(e.key);
  'method' === e.kind
    ? (t = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (t = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (t = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (t = { configurable: !0, writable: !0, enumerable: !0 });
  var n = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: r,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: t,
  };
  return (
    e.decorators && (n.decorators = e.decorators),
    'field' === e.kind && (n.initializer = e.value),
    n
  );
}
function f(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function h(e) {
  return e.decorators && e.decorators.length;
}
function m(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function v(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function y(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(e, t || 'default');
      if ('object' != typeof n) return n;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : t + '';
}
function b(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function k() {
  return (
    (k =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var n = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = g(e)); );
              return e;
            })(e, t);
            if (n) {
              var i = Object.getOwnPropertyDescriptor(n, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
            }
          }),
    k.apply(null, arguments)
  );
}
function g(e) {
  return (
    (g = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    g(e)
  );
}
const { prefix: w, stablePrefix: E } = s;
let P = (function (e, t, r, n) {
  var i = u();
  if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
  var a = t(function (e) {
      i.initializeInstanceElements(e, s.elements);
    }, r),
    s = i.decorateClass(
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
            n = 0;
          n < e.length;
          n++
        ) {
          var i,
            o = e[n];
          if ('method' === o.kind && (i = t.find(r)))
            if (m(o.descriptor) || m(i.descriptor)) {
              if (h(o) || h(i))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              i.descriptor = o.descriptor;
            } else {
              if (h(o)) {
                if (h(i))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                i.decorators = o.decorators;
              }
              f(o, i);
            }
          else t.push(o);
        }
        return t;
      })(a.d.map(p)),
      e
    );
  return (
    i.initializeClassElements(a.F, s.elements),
    i.runClassFinishers(a.F, s.finishers)
  );
})(
  [a(`${E}-left-nav-menu`)],
  function (e, t) {
    class a extends t {
      constructor(...t) {
        super(...t), e(this);
      }
    }
    return {
      F: a,
      d: [
        {
          kind: 'method',
          key: '_handleUserInitiatedToggle',
          value: function (e = !this.expanded, t = this.panelId) {
            const { eventBeforeToggle: r, eventToggle: n } = this.constructor,
              i = {
                bubbles: !0,
                cancelable: !0,
                composed: !0,
                detail: { expanded: e, panelId: t },
              };
            this.dispatchEvent(new CustomEvent(r, i)) &&
              ((this.expanded = e), this.dispatchEvent(new CustomEvent(n, i)));
          },
        },
        {
          kind: 'method',
          key: '_handleClickExpando',
          value: function () {
            this._handleUserInitiatedToggle();
          },
        },
        {
          kind: 'field',
          decorators: [r({ type: Boolean, reflect: !0 })],
          key: 'active',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [r({ type: Boolean, reflect: !0 })],
          key: 'expanded',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [r({ type: String, attribute: 'panel-id' })],
          key: 'panelId',
          value: () => '',
        },
        { kind: 'field', decorators: [r()], key: 'title', value: () => '' },
        {
          kind: 'method',
          key: 'connectedCallback',
          value: function () {
            !(function (e, t, r, n) {
              var i = k(g(1 & n ? e.prototype : e), t, r);
              return 2 & n && 'function' == typeof i
                ? function (e) {
                    return i.apply(r, e);
                  }
                : i;
            })(
              a,
              'connectedCallback',
              this,
              3
            )([]),
              document.dir && (this.dir = document.dir);
          },
        },
        {
          kind: 'method',
          key: 'render',
          value: function () {
            var e;
            const {
                active: t,
                expanded: r,
                title: o,
                _handleClickExpando: a,
              } = this,
              s = l({
                [`${w}--side-nav__submenu`]: !0,
                [`${w}--masthead__side-nav--submemu--selected`]: t,
              }),
              u =
                (null === (e = this.parentElement) || void 0 === e
                  ? void 0
                  : e.hasAttribute('is-submenu')) || !1;
            return n(
              c ||
                (c = d`
      <div class="${0}--side-nav__item" part="side-nav-item-container">
        <button
          part="side-nav-item-button"
          type="button"
          aria-haspopup="true"
          aria-expanded="${0}"
          class="${0}"
          @click=${0}
          data-attribute1="headerNav"
          data-attribute2="${0}"
          data-attribute3="${0}">
          <div
            part="side-nav-submenu-content"
            class="${0}--side-nav__submenu-content">
            <span
              part="side-nav-submenu-title"
              class="${0}--side-nav__submenu-title"
              >${0}</span
            >
            <div
              part="side-nav-icon"
              class="${0}--side-nav__icon ${0}--side-nav__icon--small ${0}--side-nav__submenu-chevron">
              ${0}
            </div>
          </div>
        </button>
      </div>
    `),
              w,
              r,
              s,
              a,
              u ? 'TabHdline' : 'L0',
              o,
              w,
              w,
              o,
              w,
              w,
              w,
              i()
            );
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventBeforeToggle',
          value: function () {
            return `${E}-left-nav-menu-beingtoggled`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventToggle',
          value: function () {
            return `${E}-left-nav-menu-toggled`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => o },
      ],
    };
  },
  e(t)
);
export { P as default };
