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

import { a as e, x as t, s as r } from './query-assigned-elements.js';
import { s as i } from './masthead-container.js';
import { c as o } from './carbon-element.js';
import './pickBy.js';
import './toNumber.js';
import './store.js';
import './index.js';
import './_commonjsHelpers.js';
import './objectSpread2.js';
import './localeAPI.js';
import './Locale.js';
import './index3.js';
import './translateAPI.js';
import './state.js';
import './query.js';
import './if-defined.js';
import './spread.js';
import './directive.js';
import './if-non-empty.js';
import './unsafe-html.js';
import './host-listener.js';
import './host-listener2.js';
import './global.js';
import './Analytics.js';
import './class-map.js';
import './stable-selector.js';
import './link.js';
import './decorate.js';
import './settings.js';
import './focus.js';
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
let n,
  s = (e) => e;
function a() {
  a = function () {
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
          var o = t.placement;
          if (t.kind === i && ('static' === o || 'prototype' === o)) {
            var n = 'static' === o ? e : r;
            this.defineClassElement(n, t);
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
        o = { static: [], prototype: [], own: [] };
      if (
        (e.forEach(function (e) {
          this.addElementPlacement(e, o);
        }, this),
        e.forEach(function (e) {
          if (!p(e)) return r.push(e);
          var t = this.decorateElement(e, o);
          r.push(t.element),
            r.push.apply(r, t.extras),
            i.push.apply(i, t.finishers);
        }, this),
        !t)
      )
        return { elements: r, finishers: i };
      var n = this.decorateConstructor(r, t);
      return i.push.apply(i, n.finishers), (n.finishers = i), n;
    },
    addElementPlacement: function (e, t, r) {
      var i = t[e.placement];
      if (!r && -1 !== i.indexOf(e.key))
        throw new TypeError('Duplicated element (' + e.key + ')');
      i.push(e.key);
    },
    decorateElement: function (e, t) {
      for (
        var r = [], i = [], o = e.decorators, n = o.length - 1;
        n >= 0;
        n--
      ) {
        var s = t[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var a = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, o[n])(a) || a);
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
        var o = this.fromClassDescriptor(e),
          n = this.toClassDescriptor((0, t[i])(o) || o);
        if (
          (void 0 !== n.finisher && r.push(n.finisher), void 0 !== n.elements)
        ) {
          e = n.elements;
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
              if ('string' == typeof e) return u(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? u(e, t)
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
      var r = f(e.key),
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
        kind: t,
        key: r,
        placement: i,
        descriptor: Object.assign({}, o),
      };
      return (
        'field' !== t
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
        finisher: m(e, 'finisher'),
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
      var r = m(e, 'finisher');
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
function l(e) {
  var t,
    r = f(e.key);
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
function c(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function p(e) {
  return e.decorators && e.decorators.length;
}
function d(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function m(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function f(e) {
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
function u(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
const { stablePrefix: h } = r;
let y = (function (e, t, r, i) {
  var o = a();
  if (i) for (var n = 0; n < i.length; n++) o = i[n](o);
  var s = t(function (e) {
      o.initializeInstanceElements(e, m.elements);
    }, r),
    m = o.decorateClass(
      (function (e) {
        for (
          var t = [],
            r = function (e) {
              return (
                'method' === e.kind &&
                e.key === n.key &&
                e.placement === n.placement
              );
            },
            i = 0;
          i < e.length;
          i++
        ) {
          var o,
            n = e[i];
          if ('method' === n.kind && (o = t.find(r)))
            if (d(n.descriptor) || d(o.descriptor)) {
              if (p(n) || p(o))
                throw new ReferenceError(
                  'Duplicated methods (' + n.key + ") can't be decorated."
                );
              o.descriptor = n.descriptor;
            } else {
              if (p(n)) {
                if (p(o))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      n.key +
                      ').'
                  );
                o.decorators = n.decorators;
              }
              c(n, o);
            }
          else t.push(n);
        }
        return t;
      })(s.d.map(l)),
      e
    );
  return (
    o.initializeClassElements(s.F, m.elements),
    o.runClassFinishers(s.F, m.finishers)
  );
})(
  [o(`${h}-megamenu-category-link-group`)],
  function (e, r) {
    return {
      F: class extends r {
        constructor(...t) {
          super(...t), e(this);
        }
      },
      d: [
        {
          kind: 'method',
          key: 'render',
          value: function () {
            return t(n || (n = s` <slot></slot> `));
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => i },
      ],
    };
  },
  e
);
export { y as default };
