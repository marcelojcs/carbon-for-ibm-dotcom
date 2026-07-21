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
 * https://www.npmjs.com/package/redux-thunk
 * https://www.npmjs.com/package/redux-logger
 * https://www.npmjs.com/package/axios
 * https://www.npmjs.com/package/isomorphic-dompurify
 * https://www.npmjs.com/package/striptags
 */

let process = { env: {} };
import {
  F as FocusMixin,
  g as s,
  n,
  x,
  v as svgResultCarbonIcon,
  s as styles,
  c as carbonElement,
  a as settings,
  q as o,
} from './index-b75fad6b.js';

let _ = (t) => t,
  _t;
function _decorate(e, r, t, i) {
  var o = _getDecoratorsApi();
  if (i) for (var n = 0; n < i.length; n++) o = i[n](o);
  var s = r(function (e) {
      o.initializeInstanceElements(e, a.elements);
    }, t),
    a = o.decorateClass(
      _coalesceClassElements(s.d.map(_createElementDescriptor)),
      e
    );
  return (
    o.initializeClassElements(s.F, a.elements),
    o.runClassFinishers(s.F, a.finishers)
  );
}
function _getDecoratorsApi() {
  _getDecoratorsApi = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [['method'], ['field']],
    initializeInstanceElements: function (e, r) {
      ['method', 'field'].forEach(function (t) {
        r.forEach(function (r) {
          r.kind === t &&
            'own' === r.placement &&
            this.defineClassElement(e, r);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, r) {
      var t = e.prototype;
      ['method', 'field'].forEach(function (i) {
        r.forEach(function (r) {
          var o = r.placement;
          if (r.kind === i && ('static' === o || 'prototype' === o)) {
            var n = 'static' === o ? e : t;
            this.defineClassElement(n, r);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, r) {
      var t = r.descriptor;
      if ('field' === r.kind) {
        var i = r.initializer;
        t = {
          enumerable: t.enumerable,
          writable: t.writable,
          configurable: t.configurable,
          value: void 0 === i ? void 0 : i.call(e),
        };
      }
      Object.defineProperty(e, r.key, t);
    },
    decorateClass: function (e, r) {
      var t = [],
        i = [],
        o = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, o);
        }, this),
        e.forEach(function (e) {
          if (!_hasDecorators(e)) return t.push(e);
          var r = this.decorateElement(e, o);
          t.push(r.element),
            t.push.apply(t, r.extras),
            i.push.apply(i, r.finishers);
        }, this),
        !r)
      )
        return { elements: t, finishers: i };
      var n = this.decorateConstructor(t, r);
      return i.push.apply(i, n.finishers), (n.finishers = i), n;
    },
    addElementPlacement: function (e, r, t) {
      var i = r[e.placement];
      if (!t && -1 !== i.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      i.push(e.key);
    },
    decorateElement: function (e, r) {
      for (
        var t = [], i = [], o = e.decorators, n = o.length - 1;
        n >= 0;
        n--
      ) {
        var s = r[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var a = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, o[n])(a) || a);
        (e = l.element),
          this.addElementPlacement(e, r),
          l.finisher && i.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var p = 0; p < c.length; p++) this.addElementPlacement(c[p], r);
          t.push.apply(t, c);
        }
      }
      return { element: e, finishers: i, extras: t };
    },
    decorateConstructor: function (e, r) {
      for (var t = [], i = r.length - 1; i >= 0; i--) {
        var o = this.fromClassDescriptor(e),
          n = this.toClassDescriptor((0, r[i])(o) || o);
        if (
          (void 0 !== n.finisher && t.push(n.finisher), void 0 !== n.elements)
        ) {
          e = n.elements;
          for (var s = 0; s < e.length - 1; s++)
            for (var a = s + 1; a < e.length; a++)
              if (e[s].key === e[a].key && e[s].placement === e[a].placement)
                throw new TypeError('Duplicated element (' + e[s].key + ')');
        }
      }
      return { elements: e, finishers: t };
    },
    fromElementDescriptor: function (e) {
      var r = {
        kind: e.kind,
        key: e.key,
        placement: e.placement,
        descriptor: e.descriptor,
      };
      return (
        Object.defineProperty(r, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        'field' === e.kind && (r.initializer = e.initializer),
        r
      );
    },
    toElementDescriptors: function (e) {
      if (void 0 !== e)
        return _toArray(e).map(function (e) {
          var r = this.toElementDescriptor(e);
          return (
            this.disallowProperty(e, 'finisher', 'An element descriptor'),
            this.disallowProperty(e, 'extras', 'An element descriptor'),
            r
          );
        }, this);
    },
    toElementDescriptor: function (e) {
      var r = e.kind + '';
      if ('method' !== r && 'field' !== r)
        throw new TypeError(
          'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
            r +
            '"'
        );
      var t = _toPropertyKey(e.key),
        i = e.placement + '';
      if ('static' !== i && 'prototype' !== i && 'own' !== i)
        throw new TypeError(
          'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
            i +
            '"'
        );
      var o = e.descriptor;
      this.disallowProperty(e, 'elements', 'An element descriptor');
      var n = {
        kind: r,
        key: t,
        placement: i,
        descriptor: Object.assign({}, o),
      };
      return (
        'field' !== r
          ? this.disallowProperty(e, 'initializer', 'A method descriptor')
          : (this.disallowProperty(
              o,
              'get',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              o,
              'set',
              'The property descriptor of a field descriptor'
            ),
            this.disallowProperty(
              o,
              'value',
              'The property descriptor of a field descriptor'
            ),
            (n.initializer = e.initializer)),
        n
      );
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: _optionalCallableProperty(e, 'finisher'),
        extras: this.toElementDescriptors(e.extras),
      };
    },
    fromClassDescriptor: function (e) {
      var r = {
        kind: 'class',
        elements: e.map(this.fromElementDescriptor, this),
      };
      return (
        Object.defineProperty(r, Symbol.toStringTag, {
          value: 'Descriptor',
          configurable: !0,
        }),
        r
      );
    },
    toClassDescriptor: function (e) {
      var r = e.kind + '';
      if ('class' !== r)
        throw new TypeError(
          'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
            r +
            '"'
        );
      this.disallowProperty(e, 'key', 'A class descriptor'),
        this.disallowProperty(e, 'placement', 'A class descriptor'),
        this.disallowProperty(e, 'descriptor', 'A class descriptor'),
        this.disallowProperty(e, 'initializer', 'A class descriptor'),
        this.disallowProperty(e, 'extras', 'A class descriptor');
      var t = _optionalCallableProperty(e, 'finisher');
      return { elements: this.toElementDescriptors(e.elements), finisher: t };
    },
    runClassFinishers: function (e, r) {
      for (var t = 0; t < r.length; t++) {
        var i = (0, r[t])(e);
        if (void 0 !== i) {
          if ('function' != typeof i)
            throw new TypeError('Finishers must return a constructor.');
          e = i;
        }
      }
      return e;
    },
    disallowProperty: function (e, r, t) {
      if (void 0 !== e[r])
        throw new TypeError(t + " can't have a ." + r + ' property.');
    },
  };
  return e;
}
function _createElementDescriptor(e) {
  var r,
    t = _toPropertyKey(e.key);
  'method' === e.kind
    ? (r = { value: e.value, writable: !0, configurable: !0, enumerable: !1 })
    : 'get' === e.kind
    ? (r = { get: e.value, configurable: !0, enumerable: !1 })
    : 'set' === e.kind
    ? (r = { set: e.value, configurable: !0, enumerable: !1 })
    : 'field' === e.kind &&
      (r = { configurable: !0, writable: !0, enumerable: !0 });
  var i = {
    kind: 'field' === e.kind ? 'field' : 'method',
    key: t,
    placement: e.static ? 'static' : 'field' === e.kind ? 'own' : 'prototype',
    descriptor: r,
  };
  return (
    e.decorators && (i.decorators = e.decorators),
    'field' === e.kind && (i.initializer = e.value),
    i
  );
}
function _coalesceGetterSetter(e, r) {
  void 0 !== e.descriptor.get
    ? (r.descriptor.get = e.descriptor.get)
    : (r.descriptor.set = e.descriptor.set);
}
function _coalesceClassElements(e) {
  for (
    var r = [],
      isSameElement = function isSameElement(e) {
        return (
          'method' === e.kind && e.key === o.key && e.placement === o.placement
        );
      },
      t = 0;
    t < e.length;
    t++
  ) {
    var i,
      o = e[t];
    if ('method' === o.kind && (i = r.find(isSameElement))) {
      if (_isDataDescriptor(o.descriptor) || _isDataDescriptor(i.descriptor)) {
        if (_hasDecorators(o) || _hasDecorators(i))
          throw new ReferenceError(
            'Duplicated methods (' + o.key + ") can't be decorated."
          );
        i.descriptor = o.descriptor;
      } else {
        if (_hasDecorators(o)) {
          if (_hasDecorators(i))
            throw new ReferenceError(
              "Decorators can't be placed on different accessors with for the same property (" +
                o.key +
                ').'
            );
          i.decorators = o.decorators;
        }
        _coalesceGetterSetter(o, i);
      }
    } else r.push(o);
  }
  return r;
}
function _hasDecorators(e) {
  return e.decorators && e.decorators.length;
}
function _isDataDescriptor(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function _optionalCallableProperty(e, r) {
  var t = e[r];
  if (void 0 !== t && 'function' != typeof t)
    throw new TypeError("Expected '" + r + "' to be a function");
  return t;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == typeof i ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != typeof i) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _toArray(r) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArray(r) {
  if (
    ('undefined' != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r['@@iterator']
  )
    return Array.from(r);
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && 'function' == typeof p
    ? function (t) {
        return p.apply(e, t);
      }
    : p;
}
function _get() {
  return (
    (_get =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var p = _superPropBase(e, t);
            if (p) {
              var n = Object.getOwnPropertyDescriptor(p, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }),
    _get.apply(null, arguments)
  );
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); );
  return t;
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * Masthead left nav submenu.
 *
 * @element c4d-left-nav-menu
 * @fires c4d-left-nav-menu-beingtoggled
 *   The custom event fired before this side nav menu is being toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of toggling this side nav menu.
 * @fires c4d-left-nav-menu-toggled The custom event fired after this side nav menu is toggled upon a user gesture.
 * @csspart side-nav-item-button - The button for the side navigation item. Usage: `c4d-left-nav-menu::part(side-nav-item-button)`
 * @csspart side-nav-submenu-content - The content of the side navigation submenu. Usage: `c4d-left-nav-menu::part(side-nav-submenu-content)`
 * @csspart side-nav-submenu-title - The title of the side navigation submenu. Usage: `c4d-left-nav-menu::part(side-nav-submenu-title)`
 * @csspart side-nav-icon - The icon of the side navigation submenu. Usage: `c4d-left-nav-menu::part(side-nav-icon)`
 *  @csspart side-nav-item-container - The container for the side navigation item. Usage: `c4d-left-nav-menu::part(side-nav-item-container)`
 */
let C4DLeftNavMenu = _decorate(
  [carbonElement(`${c4dPrefix}-left-nav-menu`)],
  function (_initialize, _FocusMixin) {
    class C4DLeftNavMenu extends _FocusMixin {
      constructor(...args) {
        super(...args);
        _initialize(this);
      }
    }
    return {
      F: C4DLeftNavMenu,
      d: [
        {
          kind: 'method',
          key: '_handleUserInitiatedToggle',
          value:
            /**
             * Handles user-initiated toggle request of this side nav menu.
             *
             * @param expanded The new expanded state.
             */
            function _handleUserInitiatedToggle(
              expanded = !this.expanded,
              panelId = this.panelId
            ) {
              const { eventBeforeToggle, eventToggle } = this.constructor;
              const init = {
                bubbles: true,
                cancelable: true,
                composed: true,
                detail: {
                  expanded,
                  panelId,
                },
              };
              if (
                this.dispatchEvent(new CustomEvent(eventBeforeToggle, init))
              ) {
                this.expanded = expanded;
                this.dispatchEvent(new CustomEvent(eventToggle, init));
              }
            },

          /**
           * Handler for the `click` event on the expando button.
           */
        },
        {
          kind: 'method',
          key: '_handleClickExpando',
          value: function _handleClickExpando() {
            this._handleUserInitiatedToggle();
          },

          /**
           * `true` if the menu should be in its active state.
           */
        },
        {
          kind: 'field',
          decorators: [
            n({
              type: Boolean,
              reflect: true,
            }),
          ],
          key: 'active',
          value() {
            return false;
          },
        },
        {
          kind: 'field',
          decorators: [
            n({
              type: Boolean,
              reflect: true,
            }),
          ],
          key: 'expanded',
          value() {
            return false;
          },
        },
        {
          kind: 'field',
          decorators: [
            n({
              type: String,
              attribute: 'panel-id',
            }),
          ],
          key: 'panelId',
          value() {
            return '';
          },
        },
        {
          kind: 'field',
          decorators: [n()],
          key: 'title',
          value() {
            return '';
          },
        },
        {
          kind: 'method',
          key: 'connectedCallback',
          value:
            /**
             * `true` if the menu should be open.
             */
            /**
             * `true` if the menu should be open.
             */
            /**
             * The title text.
             */
            function connectedCallback() {
              _superPropGet(C4DLeftNavMenu, 'connectedCallback', this, 3)([]);
              if (document.dir) {
                this.dir = document.dir;
              }
            },
        },
        {
          kind: 'method',
          key: 'render',
          value: function render() {
            var _this$parentElement;
            const {
              active,
              expanded,
              title,
              _handleClickExpando: handleClickExpando,
            } = this;
            const buttonClasses = o({
              [`${prefix}--side-nav__submenu`]: true,
              [`${prefix}--masthead__side-nav--submemu--selected`]: active,
            });
            const isSubitem =
              ((_this$parentElement = this.parentElement) === null ||
              _this$parentElement === void 0
                ? void 0
                : _this$parentElement.hasAttribute('is-submenu')) || false;
            return x(
              _t ||
                (_t = _`
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
              prefix,
              expanded,
              buttonClasses,
              handleClickExpando,
              isSubitem ? 'TabHdline' : 'L0',
              title,
              prefix,
              prefix,
              title,
              prefix,
              prefix,
              prefix,
              svgResultCarbonIcon()
            );
          },

          /**
           * The name of the custom event fired before this side nav menu is being toggled upon a user gesture.
           * Cancellation of this event stops the user-initiated action of toggling this side nav menu.
           */
        },
        {
          kind: 'get',
          static: true,
          key: 'eventBeforeToggle',
          value: function () {
            return `${c4dPrefix}-left-nav-menu-beingtoggled`;
          },

          /**
           * The name of the custom event fired after this side nav menu is toggled upon a user gesture.
           */
        },
        {
          kind: 'get',
          static: true,
          key: 'eventToggle',
          value: function () {
            return `${c4dPrefix}-left-nav-menu-toggled`;
          },
        },
        {
          kind: 'field',
          static: true,
          key: 'styles',
          value() {
            return styles;
          },
        },
      ],
    };
  },
  FocusMixin(s)
);

export { C4DLeftNavMenu as default };
