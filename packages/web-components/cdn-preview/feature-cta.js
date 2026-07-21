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

import { n as e, s as t, x as r } from './query-assigned-elements.js';
import { l as i } from './if-defined.js';
import { s as o } from './32.js';
import { f as n, a, C as s } from './formatVideoCaption.js';
import { C as l } from './feature-card.js';
import { C as c } from './cta-v1.js';
import { V as d } from './video.js';
import { C as f } from './feature-card-footer.js';
import { s as p } from './cta2.js';
import { c as u } from './carbon-element.js';
import './card-eyebrow.js';
import './card-heading.js';
import './image.js';
function m() {
  m = function () {
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
          if (!v(e)) return r.push(e);
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
        var a = t[e.placement];
        a.splice(a.indexOf(e.key), 1);
        var s = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, o[n])(s) || s);
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
        var o = this.fromClassDescriptor(e),
          n = this.toClassDescriptor((0, t[i])(o) || o);
        if (
          (void 0 !== n.finisher && r.push(n.finisher), void 0 !== n.elements)
        ) {
          e = n.elements;
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
              if ('string' == typeof e) return w(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? w(e, t)
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
      var r = g(e.key),
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
        finisher: k(e, 'finisher'),
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
      var r = k(e, 'finisher');
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
function h(e) {
  var t,
    r = g(e.key);
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
function y(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function v(e) {
  return e.decorators && e.decorators.length;
}
function b(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function k(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function g(e) {
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
function w(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
const { stablePrefix: E } = t;
!(function (e, t, r, i) {
  var o = m();
  if (i) for (var n = 0; n < i.length; n++) o = i[n](o);
  var a = t(function (e) {
      o.initializeInstanceElements(e, s.elements);
    }, r),
    s = o.decorateClass(
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
            if (b(n.descriptor) || b(o.descriptor)) {
              if (v(n) || v(o))
                throw new ReferenceError(
                  'Duplicated methods (' + n.key + ") can't be decorated."
                );
              o.descriptor = n.descriptor;
            } else {
              if (v(n)) {
                if (v(o))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      n.key +
                      ').'
                  );
                o.decorators = n.decorators;
              }
              y(n, o);
            }
          else t.push(n);
        }
        return t;
      })(a.d.map(h)),
      e
    );
  o.initializeClassElements(a.F, s.elements),
    o.runClassFinishers(a.F, s.finishers);
})(
  [u(`${E}-feature-cta-footer`)],
  function (t, r) {
    return {
      F: class extends r {
        constructor(...e) {
          super(...e), t(this);
        }
      },
      d: [
        {
          kind: 'field',
          decorators: [e({ attribute: !1 })],
          key: 'formatVideoCaption',
          value: () => n,
        },
        {
          kind: 'field',
          decorators: [e({ attribute: !1 })],
          key: 'formatVideoDuration',
          value: () => a,
        },
        {
          kind: 'field',
          decorators: [e({ type: Number, attribute: 'video-duration' })],
          key: 'videoDuration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [e({ attribute: 'video-description' })],
          key: 'videoDescription',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [e({ reflect: !0, attribute: 'cta-type' })],
          key: 'ctaType',
          value: () => s.REGULAR,
        },
        { kind: 'field', static: !0, key: 'styles', value: () => p },
      ],
    };
  },
  d(c(f))
);
let D,
  P,
  C,
  A = (e) => e;
function T() {
  T = function () {
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
          if (!S(e)) return r.push(e);
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
        var a = t[e.placement];
        a.splice(a.indexOf(e.key), 1);
        var s = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, o[n])(s) || s);
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
        var o = this.fromClassDescriptor(e),
          n = this.toClassDescriptor((0, t[i])(o) || o);
        if (
          (void 0 !== n.finisher && r.push(n.finisher), void 0 !== n.elements)
        ) {
          e = n.elements;
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
              if ('string' == typeof e) return $(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? $(e, t)
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
      var r = F(e.key),
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
        finisher: z(e, 'finisher'),
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
      var r = z(e, 'finisher');
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
function j(e) {
  var t,
    r = F(e.key);
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
function x(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function S(e) {
  return e.decorators && e.decorators.length;
}
function O(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function z(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function F(e) {
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
function $(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function _(e, t, r, i) {
  var o = I(N(1 & i ? e.prototype : e), t, r);
  return 2 & i && 'function' == typeof o
    ? function (e) {
        return o.apply(r, e);
      }
    : o;
}
function I() {
  return (
    (I =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var i = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = N(e)); );
              return e;
            })(e, t);
            if (i) {
              var o = Object.getOwnPropertyDescriptor(i, t);
              return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
            }
          }),
    I.apply(null, arguments)
  );
}
function N(e) {
  return (
    (N = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    N(e)
  );
}
const { prefix: R, stablePrefix: V } = t;
!(function (e, t, r, i) {
  var o = T();
  if (i) for (var n = 0; n < i.length; n++) o = i[n](o);
  var a = t(function (e) {
      o.initializeInstanceElements(e, s.elements);
    }, r),
    s = o.decorateClass(
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
            if (O(n.descriptor) || O(o.descriptor)) {
              if (S(n) || S(o))
                throw new ReferenceError(
                  'Duplicated methods (' + n.key + ") can't be decorated."
                );
              o.descriptor = n.descriptor;
            } else {
              if (S(n)) {
                if (S(o))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      n.key +
                      ').'
                  );
                o.decorators = n.decorators;
              }
              x(n, o);
            }
          else t.push(n);
        }
        return t;
      })(a.d.map(j)),
      e
    );
  o.initializeClassElements(a.F, s.elements),
    o.runClassFinishers(a.F, s.finishers);
})(
  [u(`${V}-feature-cta`)],
  function (t, l) {
    class c extends l {
      constructor(...e) {
        super(...e), t(this);
      }
    }
    return {
      F: c,
      d: [
        {
          kind: 'method',
          key: '_renderCopy',
          value: function () {
            const {
              ctaType: e,
              videoDuration: t,
              videoName: i,
              formatVideoCaption: o,
              formatVideoDuration: n,
              _hasCopy: a,
            } = this;
            if (e !== s.VIDEO) return _(c, '_renderCopy', this, 3)([]);
            const l = o({
              duration: n({ duration: t ? 1e3 * t : t }),
              name: i,
            });
            return (
              (this.captionHeading = l),
              r(
                D ||
                  (D = A`
      <div ?hidden="${0}" class="${0}--card__copy" part="copy">
        <slot @slotchange="${0}"></slot>
      </div>
    `),
                !a,
                R,
                this._handleCopySlotChange
              )
            );
          },
        },
        {
          kind: 'method',
          key: '_renderImage',
          value: function () {
            const {
                ctaType: e,
                noPoster: t,
                thumbnail: n,
                videoName: a,
                videoThumbnailUrl: l,
              } = this,
              c =
                e !== s.VIDEO || t
                  ? void 0
                  : r(
                      P ||
                        (P = A`
            <c4d-image
              alt="${0}"
              default-src="${0}"
              slot="image">
              ${0}
            </c4d-image>
          `),
                      i(a),
                      i(n || l),
                      o({ slot: 'icon' })
                    );
            return t
              ? void 0
              : r(
                  C ||
                    (C = A`
          <div part="image-wrapper" class="${0}--card__image-wrapper">
            <slot name="image" @slotchange="${0}">
              ${0}
            </slot>
          </div>
        `),
                  R,
                  this._handleSlotChange,
                  c
                );
          },
        },
        {
          kind: 'field',
          decorators: [e({ attribute: !1 })],
          key: 'captionHeading',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [e({ reflect: !0, attribute: 'cta-type' })],
          key: 'ctaType',
          value: () => s.REGULAR,
        },
        {
          kind: 'field',
          decorators: [e({ attribute: !1 })],
          key: 'formatVideoCaption',
          value: () => n,
        },
        {
          kind: 'field',
          decorators: [e({ attribute: !1 })],
          key: 'formatVideoDuration',
          value: () => a,
        },
        {
          kind: 'field',
          decorators: [
            e({ type: Boolean, reflect: !0, attribute: 'no-poster' }),
          ],
          key: 'noPoster',
          value: () => !1,
        },
        {
          kind: 'field',
          decorators: [e({ reflect: !0, attribute: 'thumbnail' })],
          key: 'thumbnail',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [e({ type: Number, attribute: 'video-duration' })],
          key: 'videoDuration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [e({ attribute: 'video-name' })],
          key: 'videoName',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [e({ attribute: 'video-description' })],
          key: 'videoDescription',
          value: void 0,
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            _(c, 'updated', this, 3)([e]);
            const { selectorFooter: t } = this.constructor;
            if (
              e.has('ctaType') ||
              e.has('videoName') ||
              e.has('captionHeading')
            ) {
              const { ctaType: e, videoName: r, videoDescription: i } = this,
                o = this.querySelector(t);
              o &&
                ((o.ctaType = e),
                (o.altAriaLabel = this.videoName || this.captionHeading),
                (o.videoName = r),
                (o.videoDescription = i));
            }
            if (e.has('captionHeading')) {
              const e = this.querySelector(this.constructor.selectorHeading);
              e && (e.innerText = this.captionHeading);
            }
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorHeading',
          value: function () {
            return `${V}-card-heading`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorFooter',
          value: function () {
            return `${V}-feature-cta-footer`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${V}--feature-cta`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => p },
      ],
    };
  },
  d(c(l))
),
  console.warn(
    'The c4d-feature-cta component has been deprecated. All its features have been absorbed into\n  the base c4d-feature-card component. See migration guide for more information.'
  );
