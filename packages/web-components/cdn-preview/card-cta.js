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

import {
  b as e,
  i as t,
  s as r,
  x as i,
  n,
} from './query-assigned-elements.js';
import { l as o } from './if-defined.js';
import { s as a } from './spread.js';
import { C as s, f as l } from './formatVideoCaption.js';
import { K as c } from './cta.js';
import { C as d } from './card.js';
import './card-heading.js';
import { C as f } from './image.js';
import { s as p } from './cta2.js';
import { c as u } from './carbon-element.js';
import { C as m } from './cta-v1.js';
import { V as h } from './video.js';
import './card-cta-footer.js';
let v,
  y = (e) => e;
function b() {
  b = function () {
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
          if (!w(e)) return r.push(e);
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
        var a = t[e.placement];
        a.splice(a.indexOf(e.key), 1);
        var s = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, n[o])(s) || s);
        (e = l.element),
          this.addElementPlacement(e, t),
          l.finisher && i.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var d = 0; d < c.length; d++) this.addElementPlacement(c[d], t);
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
              if ('string' == typeof e) return C(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? C(e, t)
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
      var r = D(e.key),
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
        finisher: P(e, 'finisher'),
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
      var r = P(e, 'finisher');
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
function g(e) {
  var t,
    r = D(e.key);
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
function k(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function w(e) {
  return e.decorators && e.decorators.length;
}
function E(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function P(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function D(e) {
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
function C(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function A() {
  return (
    (A =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var i = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = T(e)); );
              return e;
            })(e, t);
            if (i) {
              var n = Object.getOwnPropertyDescriptor(i, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }),
    A.apply(null, arguments)
  );
}
function T(e) {
  return (
    (T = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    T(e)
  );
}
const { stablePrefix: x } = r;
!(function (e, t, r, i) {
  var n = b();
  if (i) for (var o = 0; o < i.length; o++) n = i[o](n);
  var a = t(function (e) {
      n.initializeInstanceElements(e, s.elements);
    }, r),
    s = n.decorateClass(
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
            if (E(o.descriptor) || E(n.descriptor)) {
              if (w(o) || w(n))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              n.descriptor = o.descriptor;
            } else {
              if (w(o)) {
                if (w(n))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                n.decorators = o.decorators;
              }
              k(o, n);
            }
          else t.push(o);
        }
        return t;
      })(a.d.map(g)),
      e
    );
  n.initializeClassElements(a.F, s.elements),
    n.runClassFinishers(a.F, s.finishers);
})(
  [u(`${x}-card-cta-image`)],
  function (e, r) {
    class i extends r {
      constructor(...t) {
        super(...t), e(this);
      }
    }
    return {
      F: i,
      d: [
        {
          kind: 'get',
          static: !0,
          key: 'styles',
          value: function () {
            return t(
              v ||
                (v = y`
      ${0}${0}
    `),
              ((e = i),
              (r = 'styles'),
              (n = this),
              (a = A(T(1 & o ? e.prototype : e), r, n)),
              2 & o && 'function' == typeof a
                ? function (e) {
                    return a.apply(n, e);
                  }
                : a),
              p
            );
            var e, r, n, o, a;
          },
        },
      ],
    };
  },
  f
);
let O,
  j,
  S,
  z = (e) => e;
function F() {
  F = function () {
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
          if (!_(e)) return r.push(e);
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
        var a = t[e.placement];
        a.splice(a.indexOf(e.key), 1);
        var s = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, n[o])(s) || s);
        (e = l.element),
          this.addElementPlacement(e, t),
          l.finisher && i.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var d = 0; d < c.length; d++) this.addElementPlacement(c[d], t);
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
              if ('string' == typeof e) return U(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? U(e, t)
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
      var r = N(e.key),
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
        finisher: V(e, 'finisher'),
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
      var r = V(e, 'finisher');
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
function $(e) {
  var t,
    r = N(e.key);
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
function I(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function _(e) {
  return e.decorators && e.decorators.length;
}
function R(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function V(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function N(e) {
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
function U(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function M(e, t, r, i) {
  var n = L(q(1 & i ? e.prototype : e), t, r);
  return 2 & i && 'function' == typeof n
    ? function (e) {
        return n.apply(r, e);
      }
    : n;
}
function L() {
  return (
    (L =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var i = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = q(e)); );
              return e;
            })(e, t);
            if (i) {
              var n = Object.getOwnPropertyDescriptor(i, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }),
    L.apply(null, arguments)
  );
}
function q(e) {
  return (
    (q = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    q(e)
  );
}
const { prefix: G, stablePrefix: B } = r;
!(function (e, t, r, i) {
  var n = F();
  if (i) for (var o = 0; o < i.length; o++) n = i[o](n);
  var a = t(function (e) {
      n.initializeInstanceElements(e, s.elements);
    }, r),
    s = n.decorateClass(
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
            if (R(o.descriptor) || R(n.descriptor)) {
              if (_(o) || _(n))
                throw new ReferenceError(
                  'Duplicated methods (' + o.key + ") can't be decorated."
                );
              n.descriptor = o.descriptor;
            } else {
              if (_(o)) {
                if (_(n))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      o.key +
                      ').'
                  );
                n.decorators = o.decorators;
              }
              I(o, n);
            }
          else t.push(o);
        }
        return t;
      })(a.d.map($)),
      e
    );
  n.initializeClassElements(a.F, s.elements),
    n.runClassFinishers(a.F, s.finishers);
})(
  [u(`${B}-card-cta`)],
  function (t, r) {
    class d extends r {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: d,
      d: [
        {
          kind: 'method',
          key: '_renderHeading',
          value: function () {
            const { ctaType: e, videoName: t, formatVideoCaption: r } = this;
            if (e !== s.VIDEO) return M(d, '_renderHeading', this, 3)([]);
            const n = r({ name: t });
            return (
              this.dispatchEvent(
                new CustomEvent(this.constructor.eventVideoTitleUpdated, {
                  bubbles: !0,
                  composed: !0,
                })
              ),
              i(
                O ||
                  (O = z`
      <slot name="heading"></slot
      ><c4d-card-heading part="heading">${0}</c4d-card-heading>
    `),
                n
              )
            );
          },
        },
        {
          kind: 'method',
          key: '_renderImage',
          value: function () {
            const {
                ctaType: t,
                videoName: r,
                videoThumbnailUrl: n,
                thumbnail: l,
                _hasImage: c,
                noPoster: d,
              } = this,
              f =
                c || t !== s.VIDEO || d
                  ? void 0
                  : i(
                      j ||
                        (j = z`
            <c4d-card-cta-image
              class="${0}--card__video-thumbnail"
              part="video-thumbnail"
              alt="${0}"
              default-src="${0}">
              ${0}
            </c4d-card-cta-image>
          `),
                      G,
                      o(r),
                      o(l || n),
                      (({ children: t, ...r } = {}) =>
                        e`<svg focusable="false" preserveAspectRatio="xMidYMid meet" slot="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ...="${a(
                          r
                        )}" aria-hidden="true" width="64px" height="64px" viewBox="0 0 64 64">${t}<g id="visual-spec" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Card-group-video" transform="translate(-736.000000, -1746.000000)"><g id="Group-2-Copy-2" transform="translate(608.000000, 1658.000000)"><g id="Group-3" transform="translate(128.000000, 88.000000)"><circle id="Oval-Copy-3" fill-opacity="0.9" fill="#525252" cx="32" cy="32" r="32"></circle><path d="M26.5555476,43.111135 C26.0032708,43.111135 25.5555476,42.6633959 25.5555476,42.1111111 L25.5555476,20.1111111 C25.5541311,19.7531358 25.7441673,19.4217049 26.0538295,19.2421008 C26.3634918,19.0624967 26.745539,19.0621192 27.0555476,19.2411111 L46.0555476,30.2411111 C46.368866,30.4186723 46.5625038,30.7509842 46.5625038,31.1111111 C46.5625038,31.4712381 46.368866,31.8035499 46.0555476,31.9811111 L27.0555476,42.9811111 C26.9031526,43.0674916 26.7307319,43.1123209 26.5555476,43.111135 Z" id="Path-Copy" fill="#F3F3F3" fill-rule="nonzero"></path></g></g></g></g></svg>`)(
                        { slot: 'icon' }
                      )
                    );
            return i(
              S ||
                (S = z`
      <slot name="image" @slotchange="${0}"></slot>${0}
    `),
              this._handleSlotChange,
              f
            );
          },
        },
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'cta-type' })],
          key: 'ctaType',
          value: () => s.REGULAR,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'formatVideoCaption',
          value: () => l,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: !1 })],
          key: 'formatVideoDuration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ type: Number, attribute: 'video-duration' })],
          key: 'videoDuration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'video-name' })],
          key: 'videoName',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'video-description' })],
          key: 'videoDescription',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ attribute: 'video-thumbnail-url' })],
          key: 'videoThumbnailUrl',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [n({ reflect: !0, attribute: 'thumbnail' })],
          key: 'thumbnail',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [
            n({ type: Boolean, reflect: !0, attribute: 'no-poster' }),
          ],
          key: 'noPoster',
          value: () => !1,
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            M(d, 'updated', this, 3)([e]);
            const t = this.querySelector(this.constructor.selectorFooter);
            if (
              e.has('ctaType') ||
              e.has('formatCaption') ||
              e.has('formatDuration') ||
              e.has('videoDuration') ||
              e.has('videoName')
            ) {
              var r;
              const {
                  ctaType: e,
                  videoDuration: i,
                  videoName: n,
                  videoDescription: o,
                  formatVideoCaption: a,
                  formatVideoDuration: s,
                } = this,
                l =
                  null === (r = this.querySelector(`${B}-card-heading`)) ||
                  void 0 === r
                    ? void 0
                    : r.textContent,
                d = this.textContent;
              if (t) {
                const r = n || l || d;
                let f = '';
                void 0 !== i &&
                  (f = `, DURATION ${c.getMediaDurationFormatted(i, !1)}`),
                  (t.altAriaLabel = `${r}${f}`),
                  (t.ctaType = e),
                  (t.videoDuration = i),
                  (t.videoName = n),
                  (t.videoDescription = o),
                  a && (t.formatVideoCaption = a),
                  s && (t.formatVideoDuration = s);
              }
            }
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${B}--card-cta`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'eventVideoTitleUpdated',
          value: function () {
            return `${B}-card-cta-video-title-updated`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorFooter',
          value: function () {
            return `${B}-card-cta-footer`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => p },
      ],
    };
  },
  h(m(d))
),
  console.warn(
    'The c4d-card-cta component has been deprecated. All its features have been absorbed into\n  the base c4d-card component. See migration guide for more information.'
  );
