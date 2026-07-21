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

import { x as e, n as t, s as r } from './query-assigned-elements.js';
import { C as i, f as o } from './formatVideoCaption.js';
import { C as n } from './card-link.js';
import './card-link-heading.js';
import { C as a } from './cta-v1.js';
import { V as s } from './video.js';
import './card-cta-footer.js';
import { s as l } from './cta2.js';
import { c } from './carbon-element.js';
let d,
  f = (e) => e;
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
          if (!h(e)) return r.push(e);
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
      var r = k(e.key),
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
        finisher: y(e, 'finisher'),
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
      var r = y(e, 'finisher');
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
function p(e) {
  var t,
    r = k(e.key);
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
function m(e, t) {
  void 0 !== e.descriptor.get
    ? (t.descriptor.get = e.descriptor.get)
    : (t.descriptor.set = e.descriptor.set);
}
function h(e) {
  return e.decorators && e.decorators.length;
}
function v(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function y(e, t) {
  var r = e[t];
  if (void 0 !== r && 'function' != typeof r)
    throw new TypeError("Expected '" + t + "' to be a function");
  return r;
}
function k(e) {
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
function b(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function g(e, t, r, i) {
  var o = w(E(1 & i ? e.prototype : e), t, r);
  return 2 & i && 'function' == typeof o
    ? function (e) {
        return o.apply(r, e);
      }
    : o;
}
function w() {
  return (
    (w =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, r) {
            var i = (function (e, t) {
              for (; !{}.hasOwnProperty.call(e, t) && null !== (e = E(e)); );
              return e;
            })(e, t);
            if (i) {
              var o = Object.getOwnPropertyDescriptor(i, t);
              return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value;
            }
          }),
    w.apply(null, arguments)
  );
}
function E(e) {
  return (
    (E = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    E(e)
  );
}
const { stablePrefix: D } = r;
let C = (function (e, t, r, i) {
  var o = u();
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
            if (v(n.descriptor) || v(o.descriptor)) {
              if (h(n) || h(o))
                throw new ReferenceError(
                  'Duplicated methods (' + n.key + ") can't be decorated."
                );
              o.descriptor = n.descriptor;
            } else {
              if (h(n)) {
                if (h(o))
                  throw new ReferenceError(
                    "Decorators can't be placed on different accessors with for the same property (" +
                      n.key +
                      ').'
                  );
                o.decorators = n.decorators;
              }
              m(n, o);
            }
          else t.push(n);
        }
        return t;
      })(a.d.map(p)),
      e
    );
  return (
    o.initializeClassElements(a.F, s.elements),
    o.runClassFinishers(a.F, s.finishers)
  );
})(
  [c(`${D}-card-link-cta`)],
  function (r, n) {
    class a extends n {
      constructor(...e) {
        super(...e), r(this);
      }
    }
    return {
      F: a,
      d: [
        {
          kind: 'method',
          key: '_renderHeading',
          value: function () {
            const { ctaType: t, videoName: r, formatVideoCaption: o } = this;
            if (t !== i.VIDEO) return g(a, '_renderHeading', this, 3)([]);
            const n = o({ name: r });
            return e(
              d ||
                (d = f`
      <slot name="heading"></slot
      ><c4d-card-link-heading part="heading">${0}</c4d-card-link-heading>
    `),
              n
            );
          },
        },
        {
          kind: 'field',
          decorators: [t({ reflect: !0, attribute: 'cta-type' })],
          key: 'ctaType',
          value: () => i.REGULAR,
        },
        {
          kind: 'field',
          decorators: [t({ attribute: !1 })],
          key: 'formatVideoCaption',
          value: () => o,
        },
        {
          kind: 'field',
          decorators: [t({ attribute: !1 })],
          key: 'formatVideoDuration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [t({ type: Number, attribute: 'video-duration' })],
          key: 'videoDuration',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [t({ attribute: 'video-name' })],
          key: 'videoName',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [t({ attribute: 'video-description' })],
          key: 'videoDescription',
          value: void 0,
        },
        {
          kind: 'field',
          decorators: [t({ attribute: 'video-thumbnail-url' })],
          key: 'videoThumbnailUrl',
          value: void 0,
        },
        {
          kind: 'method',
          key: 'updated',
          value: function (e) {
            g(a, 'updated', this, 3)([e]);
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
                  videoName: o,
                  videoDescription: n,
                  formatVideoCaption: a,
                  formatVideoDuration: s,
                } = this,
                l =
                  null === (r = this.querySelector(`${D}-card-link-heading`)) ||
                  void 0 === r
                    ? void 0
                    : r.textContent,
                c = this.textContent;
              t &&
                ((t.altAriaLabel = o || l || c),
                (t.ctaType = e),
                (t.videoDuration = i),
                (t.videoName = o),
                (t.videoDescription = n),
                a && (t.formatVideoCaption = a),
                s && (t.formatVideoDuration = s));
            }
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'stableSelector',
          value: function () {
            return `${D}--card-link-cta`;
          },
        },
        {
          kind: 'get',
          static: !0,
          key: 'selectorFooter',
          value: function () {
            return `${D}-card-cta-footer`;
          },
        },
        { kind: 'field', static: !0, key: 'styles', value: () => l },
      ],
    };
  },
  s(a(n))
);
export { C };
