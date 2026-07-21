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
import { g as t } from './_commonjsHelpers.js';
import { _ as n, a as r, r as o, b as s } from './index3.js';
import { s as i } from './query-assigned-elements.js';
import { l as a } from './index.js';
var c,
  u = { exports: {} },
  l = { exports: {} },
  f = { exports: {} };
((c = f).exports = function (e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}),
  (c.exports.__esModule = !0),
  (c.exports.default = c.exports),
  (function (e) {
    var t = f.exports;
    (e.exports = function (e) {
      if (Array.isArray(e)) return t(e);
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(l);
var d = { exports: {} };
!(function (e) {
  (e.exports = function (e) {
    if (
      ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
      null != e['@@iterator']
    )
      return Array.from(e);
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
})(d);
var p = { exports: {} };
!(function (e) {
  var t = f.exports;
  (e.exports = function (e, n) {
    if (e) {
      if ('string' == typeof e) return t(e, n);
      var r = {}.toString.call(e).slice(8, -1);
      return (
        'Object' === r && e.constructor && (r = e.constructor.name),
        'Map' === r || 'Set' === r
          ? Array.from(e)
          : 'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? t(e, n)
          : void 0
      );
    }
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
})(p);
var h = { exports: {} };
!(function (e) {
  (e.exports = function () {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
})(h),
  (function (e) {
    var t = l.exports,
      n = d.exports,
      r = p.exports,
      o = h.exports;
    (e.exports = function (e) {
      return t(e) || n(e) || r(e) || o();
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(u);
var m = t(u.exports);
function g(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: y } = Object.prototype,
  { getPrototypeOf: b } = Object,
  { iterator: w, toStringTag: v } = Symbol,
  E = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  O = (e, t) => {
    let n = e;
    const r = [];
    for (; null != n && n !== Object.prototype; ) {
      if (-1 !== r.indexOf(n)) return !1;
      if ((r.push(n), E(n, t))) return !0;
      n = b(n);
    }
    return !1;
  },
  R =
    ((S = Object.create(null)),
    (e) => {
      const t = y.call(e);
      return S[t] || (S[t] = t.slice(8, -1).toLowerCase());
    });
var S;
const x = (e) => ((e = e.toLowerCase()), (t) => R(t) === e),
  _ = (e) => (t) => typeof t === e,
  { isArray: A } = Array,
  C = _('undefined');
function T(e) {
  return (
    null !== e &&
    !C(e) &&
    null !== e.constructor &&
    !C(e.constructor) &&
    N(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const P = x('ArrayBuffer');
const j = _('string'),
  N = _('function'),
  L = _('number'),
  D = (e) => null !== e && 'object' == typeof e,
  U = (e) => {
    if (!D(e)) return !1;
    const t = b(e);
    return !(
      (null !== t && t !== Object.prototype && null !== b(t)) ||
      O(e, v) ||
      O(e, w)
    );
  },
  k = x('Date'),
  F = x('File'),
  B = x('Blob'),
  I = x('FileList');
const q =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  M = void 0 !== q.FormData ? q.FormData : void 0,
  z = x('URLSearchParams'),
  [H, J, W, V] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(x);
function $(e, t, { allOwnKeys: n = !1 } = {}) {
  if (null == e) return;
  let r, o;
  if (('object' != typeof e && (e = [e]), A(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    if (T(e)) return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let i;
    for (r = 0; r < s; r++) (i = o[r]), t.call(null, e[i], i, e);
  }
}
function K(e, t) {
  if (T(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r,
    o = n.length;
  for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
  return null;
}
const X =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : global,
  G = (e) => !C(e) && e !== X;
const Q =
  ((Z = 'undefined' != typeof Uint8Array && b(Uint8Array)),
  (e) => Z && e instanceof Z);
var Z;
const Y = x('HTMLFormElement'),
  { propertyIsEnumerable: ee } = Object.prototype,
  te = x('RegExp'),
  ne = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    $(n, (n, o) => {
      let s;
      !1 !== (s = t(n, o, e)) && (r[o] = s || n);
    }),
      Object.defineProperties(e, r);
  };
const re = x('AsyncFunction'),
  oe =
    ((se = 'function' == typeof setImmediate),
    (ie = N(X.postMessage)),
    se
      ? setImmediate
      : ie
      ? ((ae = `axios@${Math.random()}`),
        (ce = []),
        X.addEventListener(
          'message',
          ({ source: e, data: t }) => {
            e === X && t === ae && ce.length && ce.shift()();
          },
          !1
        ),
        (e) => {
          ce.push(e), X.postMessage(ae, '*');
        })
      : (e) => setTimeout(e));
var se, ie, ae, ce;
const ue =
    'undefined' != typeof queueMicrotask
      ? queueMicrotask.bind(X)
      : (void 0 !== e && e.nextTick) || oe,
  le = (e) => null != e && N(e[w]);
var fe = {
  isArray: A,
  isArrayBuffer: P,
  isBuffer: T,
  isFormData: (e) => {
    if (!e) return !1;
    if (M && e instanceof M) return !0;
    const t = b(e);
    if (!t || t === Object.prototype) return !1;
    if (!N(e.append)) return !1;
    const n = R(e);
    return (
      'formdata' === n ||
      ('object' === n && N(e.toString) && '[object FormData]' === e.toString())
    );
  },
  isArrayBufferView: function (e) {
    let t;
    return (
      (t =
        'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && P(e.buffer)),
      t
    );
  },
  isString: j,
  isNumber: L,
  isBoolean: (e) => !0 === e || !1 === e,
  isObject: D,
  isPlainObject: U,
  isEmptyObject: (e) => {
    if (!D(e) || T(e)) return !1;
    try {
      return (
        0 === Object.keys(e).length &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch (e) {
      return !1;
    }
  },
  isReadableStream: H,
  isRequest: J,
  isResponse: W,
  isHeaders: V,
  isUndefined: C,
  isDate: k,
  isFile: F,
  isReactNativeBlob: (e) => !(!e || void 0 === e.uri),
  isReactNative: (e) => e && void 0 !== e.getParts,
  isBlob: B,
  isRegExp: te,
  isFunction: N,
  isStream: (e) => D(e) && N(e.pipe),
  isURLSearchParams: z,
  isTypedArray: Q,
  isFileList: I,
  forEach: $,
  merge: function e(...t) {
    const { caseless: n, skipUndefined: r } = (G(this) && this) || {},
      o = {},
      s = (t, s) => {
        if ('__proto__' === s || 'constructor' === s || 'prototype' === s)
          return;
        const i = (n && 'string' == typeof s && K(o, s)) || s,
          a = E(o, i) ? o[i] : void 0;
        U(a) && U(t)
          ? (o[i] = e(a, t))
          : U(t)
          ? (o[i] = e({}, t))
          : A(t)
          ? (o[i] = t.slice())
          : (r && C(t)) || (o[i] = t);
      };
    for (let e = 0, n = t.length; e < n; e++) {
      const n = t[e];
      if (!n || T(n)) continue;
      if (($(n, s), 'object' != typeof n || A(n))) continue;
      const r = Object.getOwnPropertySymbols(n);
      for (let e = 0; e < r.length; e++) {
        const t = r[e];
        ee.call(n, t) && s(n[t], t);
      }
    }
    return o;
  },
  extend: (e, t, n, { allOwnKeys: r } = {}) => (
    $(
      t,
      (t, r) => {
        n && N(t)
          ? Object.defineProperty(e, r, {
              __proto__: null,
              value: g(t, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, r, {
              __proto__: null,
              value: t,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r }
    ),
    e
  ),
  trim: (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
  stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
  inherits: (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, 'constructor', {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, 'super', {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n);
  },
  toFlatObject: (e, t, n, r) => {
    let o, s, i;
    const a = {};
    if (((t = t || {}), null == e)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (r && !r(i, e, t)) || a[i] || ((t[i] = e[i]), (a[i] = !0));
      e = !1 !== n && b(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  kindOf: R,
  kindOfTest: x,
  endsWith: (e, t, n) => {
    (e = String(e)),
      (void 0 === n || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return -1 !== r && r === n;
  },
  toArray: (e) => {
    if (!e) return null;
    if (A(e)) return e;
    let t = e.length;
    if (!L(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  forEachEntry: (e, t) => {
    const n = (e && e[w]).call(e);
    let r;
    for (; (r = n.next()) && !r.done; ) {
      const n = r.value;
      t.call(e, n[0], n[1]);
    }
  },
  matchAll: (e, t) => {
    let n;
    const r = [];
    for (; null !== (n = e.exec(t)); ) r.push(n);
    return r;
  },
  isHTMLForm: Y,
  hasOwnProperty: E,
  hasOwnProp: E,
  hasOwnInPrototypeChain: O,
  getSafeProp: (e, t) => (null != e && O(e, t) ? e[t] : void 0),
  reduceDescriptors: ne,
  freezeMethods: (e) => {
    ne(e, (t, n) => {
      if (N(e) && ['arguments', 'caller', 'callee'].includes(n)) return !1;
      const r = e[n];
      N(r) &&
        ((t.enumerable = !1),
        'writable' in t
          ? (t.writable = !1)
          : t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'");
            }));
    });
  },
  toObjectSet: (e, t) => {
    const n = {},
      r = (e) => {
        e.forEach((e) => {
          n[e] = !0;
        });
      };
    return A(e) ? r(e) : r(String(e).split(t)), n;
  },
  toCamelCase: (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
      return t.toUpperCase() + n;
    }),
  noop: () => {},
  toFiniteNumber: (e, t) => (null != e && Number.isFinite((e = +e)) ? e : t),
  findKey: K,
  global: X,
  isContextDefined: G,
  isSpecCompliantForm: function (e) {
    return !!(e && N(e.append) && 'FormData' === e[v] && e[w]);
  },
  toJSONObject: (e) => {
    const t = new WeakSet(),
      n = (e) => {
        if (D(e)) {
          if (t.has(e)) return;
          if (T(e)) return e;
          if (!('toJSON' in e)) {
            t.add(e);
            const r = A(e) ? [] : {};
            return (
              $(e, (e, t) => {
                const o = n(e);
                !C(o) && (r[t] = o);
              }),
              t.delete(e),
              r
            );
          }
        }
        return e;
      };
    return n(e);
  },
  isAsyncFn: re,
  isThenable: (e) => e && (D(e) || N(e)) && N(e.then) && N(e.catch),
  setImmediate: oe,
  asap: ue,
  isIterable: le,
  isSafeIterable: (e) => null != e && O(e, w) && le(e),
};
const de = fe.toObjectSet([
  'age',
  'authorization',
  'content-length',
  'content-type',
  'etag',
  'expires',
  'from',
  'host',
  'if-modified-since',
  'if-unmodified-since',
  'last-modified',
  'location',
  'max-forwards',
  'proxy-authorization',
  'referer',
  'retry-after',
  'user-agent',
]);
const pe = new RegExp('[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+', 'g'),
  he = new RegExp('[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+', 'g');
function me(e, t) {
  return fe.isArray(e)
    ? e.map((e) => me(e, t))
    : (function (e) {
        let t = 0,
          n = e.length;
        for (; t < n; ) {
          const n = e.charCodeAt(t);
          if (9 !== n && 32 !== n) break;
          t += 1;
        }
        for (; n > t; ) {
          const t = e.charCodeAt(n - 1);
          if (9 !== t && 32 !== t) break;
          n -= 1;
        }
        return 0 === t && n === e.length ? e : e.slice(t, n);
      })(String(e).replace(t, ''));
}
function ge(e) {
  const t = Object.create(null);
  return (
    fe.forEach(e.toJSON(), (e, n) => {
      t[n] = ((e) => me(e, he))(e);
    }),
    t
  );
}
const ye = Symbol('internals');
function be(e) {
  return e && String(e).trim().toLowerCase();
}
function we(e) {
  return !1 === e || null == e
    ? e
    : fe.isArray(e)
    ? e.map(we)
    : ((e) => me(e, pe))(String(e));
}
function ve(e, t, n, r, o) {
  return fe.isFunction(r)
    ? r.call(this, t, n)
    : (o && (t = n),
      fe.isString(t)
        ? fe.isString(r)
          ? -1 !== t.indexOf(r)
          : fe.isRegExp(r)
          ? r.test(t)
          : void 0
        : void 0);
}
class Ee {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const r = this;
    function o(e, t, n) {
      const o = be(t);
      if (!o) return;
      const s = fe.findKey(r, o);
      (!s || void 0 === r[s] || !0 === n || (void 0 === n && !1 !== r[s])) &&
        (r[s || t] = we(e));
    }
    const s = (e, t) => fe.forEach(e, (e, n) => o(e, n, t));
    if (fe.isPlainObject(e) || e instanceof this.constructor) s(e, t);
    else if (
      fe.isString(e) &&
      (e = e.trim()) &&
      !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
    )
      s(
        ((e) => {
          const t = {};
          let n, r, o;
          return (
            e &&
              e.split('\n').forEach(function (e) {
                (o = e.indexOf(':')),
                  (n = e.substring(0, o).trim().toLowerCase()),
                  (r = e.substring(o + 1).trim()),
                  !n ||
                    (t[n] && de[n]) ||
                    ('set-cookie' === n
                      ? t[n]
                        ? t[n].push(r)
                        : (t[n] = [r])
                      : (t[n] = t[n] ? t[n] + ', ' + r : r));
              }),
            t
          );
        })(e),
        t
      );
    else if (fe.isObject(e) && fe.isSafeIterable(e)) {
      let n,
        r,
        o = Object.create(null);
      for (const t of e) {
        if (!fe.isArray(t))
          throw new TypeError('Object iterator must return a key-value pair');
        (r = t[0]),
          fe.hasOwnProp(o, r)
            ? ((n = o[r]), (o[r] = fe.isArray(n) ? [...n, t[1]] : [n, t[1]]))
            : (o[r] = t[1]);
      }
      s(o, t);
    } else null != e && o(t, e, n);
    return this;
  }
  get(e, t) {
    if ((e = be(e))) {
      const n = fe.findKey(this, e);
      if (n) {
        const e = this[n];
        if (!t) return e;
        if (!0 === t)
          return (function (e) {
            const t = Object.create(null),
              n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let r;
            for (; (r = n.exec(e)); ) t[r[1]] = r[2];
            return t;
          })(e);
        if (fe.isFunction(t)) return t.call(this, e, n);
        if (fe.isRegExp(t)) return t.exec(e);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(e, t) {
    if ((e = be(e))) {
      const n = fe.findKey(this, e);
      return !(!n || void 0 === this[n] || (t && !ve(0, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let r = !1;
    function o(e) {
      if ((e = be(e))) {
        const o = fe.findKey(n, e);
        !o || (t && !ve(0, n[o], o, t)) || (delete n[o], (r = !0));
      }
    }
    return fe.isArray(e) ? e.forEach(o) : o(e), r;
  }
  clear(e) {
    const t = Object.keys(this);
    let n = t.length,
      r = !1;
    for (; n--; ) {
      const o = t[n];
      (e && !ve(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
    }
    return r;
  }
  normalize(e) {
    const t = this,
      n = {};
    return (
      fe.forEach(this, (r, o) => {
        const s = fe.findKey(n, o);
        if (s) return (t[s] = we(r)), void delete t[o];
        const i = e
          ? (function (e) {
              return e
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
            })(o)
          : String(o).trim();
        i !== o && delete t[o], (t[i] = we(r)), (n[i] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = Object.create(null);
    return (
      fe.forEach(this, (n, r) => {
        null != n && !1 !== n && (t[r] = e && fe.isArray(n) ? n.join(', ') : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([e, t]) => e + ': ' + t)
      .join('\n');
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const n = new this(e);
    return t.forEach((e) => n.set(e)), n;
  }
  static accessor(e) {
    const t = (this[ye] = this[ye] = { accessors: {} }).accessors,
      n = this.prototype;
    function r(e) {
      const r = be(e);
      t[r] ||
        (!(function (e, t) {
          const n = fe.toCamelCase(' ' + t);
          ['get', 'set', 'has'].forEach((r) => {
            Object.defineProperty(e, r + n, {
              __proto__: null,
              value: function (e, n, o) {
                return this[r].call(this, t, e, n, o);
              },
              configurable: !0,
            });
          });
        })(n, e),
        (t[r] = !0));
    }
    return fe.isArray(e) ? e.forEach(r) : r(e), this;
  }
}
Ee.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]),
  fe.reduceDescriptors(Ee.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(e) {
        this[n] = e;
      },
    };
  }),
  fe.freezeMethods(Ee);
var Oe = Ee;
function Re(e, t) {
  const n = new Set(t.map((e) => String(e).toLowerCase())),
    r = [],
    o = (e) => {
      if (null === e || 'object' != typeof e) return e;
      if (fe.isBuffer(e)) return e;
      if (-1 !== r.indexOf(e)) return;
      let t;
      if ((e instanceof Oe && (e = e.toJSON()), r.push(e), fe.isArray(e)))
        (t = []),
          e.forEach((e, n) => {
            const r = o(e);
            fe.isUndefined(r) || (t[n] = r);
          });
      else {
        if (
          !fe.isPlainObject(e) &&
          (function (e) {
            if (fe.hasOwnProp(e, 'toJSON')) return !0;
            let t = Object.getPrototypeOf(e);
            for (; t && t !== Object.prototype; ) {
              if (fe.hasOwnProp(t, 'toJSON')) return !0;
              t = Object.getPrototypeOf(t);
            }
            return !1;
          })(e)
        )
          return r.pop(), e;
        t = Object.create(null);
        for (const [r, s] of Object.entries(e)) {
          const e = n.has(r.toLowerCase()) ? '[REDACTED ****]' : o(s);
          fe.isUndefined(e) || (t[r] = e);
        }
      }
      return r.pop(), t;
    };
  return o(e);
}
class Se extends Error {
  static from(e, t, n, r, o, s) {
    const i = new Se(e.message, t || e.code, n, r, o);
    return (
      (i.cause = e),
      (i.name = e.name),
      null != e.status && null == i.status && (i.status = e.status),
      s && Object.assign(i, s),
      i
    );
  }
  constructor(e, t, n, r, o) {
    super(e),
      Object.defineProperty(this, 'message', {
        __proto__: null,
        value: e,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = 'AxiosError'),
      (this.isAxiosError = !0),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && ((this.response = o), (this.status = o.status));
  }
  toJSON() {
    const e = this.config,
      t = e && fe.hasOwnProp(e, 'redact') ? e.redact : void 0,
      n = fe.isArray(t) && t.length > 0 ? Re(e, t) : fe.toJSONObject(e);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: n,
      code: this.code,
      status: this.status,
    };
  }
}
(Se.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE'),
  (Se.ERR_BAD_OPTION = 'ERR_BAD_OPTION'),
  (Se.ECONNABORTED = 'ECONNABORTED'),
  (Se.ETIMEDOUT = 'ETIMEDOUT'),
  (Se.ECONNREFUSED = 'ECONNREFUSED'),
  (Se.ERR_NETWORK = 'ERR_NETWORK'),
  (Se.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS'),
  (Se.ERR_DEPRECATED = 'ERR_DEPRECATED'),
  (Se.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE'),
  (Se.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST'),
  (Se.ERR_CANCELED = 'ERR_CANCELED'),
  (Se.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT'),
  (Se.ERR_INVALID_URL = 'ERR_INVALID_URL'),
  (Se.ERR_FORM_DATA_DEPTH_EXCEEDED = 'ERR_FORM_DATA_DEPTH_EXCEEDED');
var xe = Se;
const _e = 100;
function Ae(e) {
  return fe.isPlainObject(e) || fe.isArray(e);
}
function Ce(e) {
  return fe.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Te(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return (e = Ce(e)), !n && t ? '[' + e + ']' : e;
        })
        .join(n ? '.' : '')
    : t;
}
const Pe = fe.toFlatObject(fe, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function je(e, t, n) {
  if (!fe.isObject(e)) throw new TypeError('target must be an object');
  t = t || new FormData();
  const r = (n = fe.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !fe.isUndefined(t[e]);
      }
    )).metaTokens,
    o = n.visitor || p,
    s = n.dots,
    i = n.indexes,
    a = n.Blob || ('undefined' != typeof Blob && Blob),
    c = void 0 === n.maxDepth ? _e : n.maxDepth,
    u = a && fe.isSpecCompliantForm(t),
    l = [];
  if (!fe.isFunction(o)) throw new TypeError('visitor must be a function');
  function f(e) {
    if (null === e) return '';
    if (fe.isDate(e)) return e.toISOString();
    if (fe.isBoolean(e)) return e.toString();
    if (!u && fe.isBlob(e))
      throw new xe('Blob is not supported. Use a Buffer instead.');
    return fe.isArrayBuffer(e) || fe.isTypedArray(e)
      ? u && 'function' == typeof Blob
        ? new Blob([e])
        : Buffer.from(e)
      : e;
  }
  function d(e) {
    if (e > c)
      throw new xe(
        'Object is too deeply nested (' + e + ' levels). Max depth: ' + c,
        xe.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function p(e, n, o) {
    let a = e;
    if (fe.isReactNative(t) && fe.isReactNativeBlob(e))
      return t.append(Te(o, n, s), f(e)), !1;
    if (e && !o && 'object' == typeof e)
      if (fe.endsWith(n, '{}'))
        (n = r ? n : n.slice(0, -2)),
          (e = (function (e, t) {
            if (c === 1 / 0) return JSON.stringify(e);
            const n = [];
            return JSON.stringify(e, function (e, r) {
              if (!fe.isObject(r)) return r;
              for (; n.length && n[n.length - 1] !== this; ) n.pop();
              return n.push(r), d(t + n.length - 1), r;
            });
          })(e, 1));
      else if (
        (fe.isArray(e) &&
          (function (e) {
            return fe.isArray(e) && !e.some(Ae);
          })(e)) ||
        ((fe.isFileList(e) || fe.endsWith(n, '[]')) && (a = fe.toArray(e)))
      )
        return (
          (n = Ce(n)),
          a.forEach(function (e, r) {
            !fe.isUndefined(e) &&
              null !== e &&
              t.append(
                !0 === i ? Te([n], r, s) : null === i ? n : n + '[]',
                f(e)
              );
          }),
          !1
        );
    return !!Ae(e) || (t.append(Te(o, n, s), f(e)), !1);
  }
  const h = Object.assign(Pe, {
    defaultVisitor: p,
    convertValue: f,
    isVisitable: Ae,
  });
  if (!fe.isObject(e)) throw new TypeError('data must be an object');
  return (
    (function e(n, r, s = 0) {
      if (!fe.isUndefined(n)) {
        if ((d(s), -1 !== l.indexOf(n)))
          throw new Error('Circular reference detected in ' + r.join('.'));
        l.push(n),
          fe.forEach(n, function (n, i) {
            !0 ===
              (!(fe.isUndefined(n) || null === n) &&
                o.call(t, n, fe.isString(i) ? i.trim() : i, r, h)) &&
              e(n, r ? r.concat(i) : [i], s + 1);
          }),
          l.pop();
      }
    })(e),
    t
  );
}
function Ne(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
    return t[e];
  });
}
function Le(e, t) {
  (this._pairs = []), e && je(e, this, t);
}
const De = Le.prototype;
function Ue(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+');
}
function ke(e, t, n) {
  if (!t) return e;
  const r = fe.isFunction(n) ? { serialize: n } : n,
    o = fe.getSafeProp(r, 'encode') || Ue,
    s = fe.getSafeProp(r, 'serialize');
  let i;
  if (
    ((i = s
      ? s(t, r)
      : fe.isURLSearchParams(t)
      ? t.toString()
      : new Le(t, r).toString(o)),
    i)
  ) {
    const t = e.indexOf('#');
    -1 !== t && (e = e.slice(0, t)),
      (e += (-1 === e.indexOf('?') ? '?' : '&') + i);
  }
  return e;
}
(De.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (De.toString = function (e) {
    const t = e
      ? function (t) {
          return e.call(this, t, Ne);
        }
      : Ne;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + '=' + t(e[1]);
      }, '')
      .join('&');
  });
var Fe = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(e) {
      fe.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }
  },
  Be = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
    validateStatusUndefinedResolves: !0,
  },
  Ie = {
    isBrowser: !0,
    classes: {
      URLSearchParams:
        'undefined' != typeof URLSearchParams ? URLSearchParams : Le,
      FormData: 'undefined' != typeof FormData ? FormData : null,
      Blob: 'undefined' != typeof Blob ? Blob : null,
    },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
const qe = 'undefined' != typeof window && 'undefined' != typeof document,
  Me = ('object' == typeof navigator && navigator) || void 0,
  ze =
    qe &&
    (!Me || ['ReactNative', 'NativeScript', 'NS'].indexOf(Me.product) < 0),
  He =
    'undefined' != typeof WorkerGlobalScope &&
    self instanceof WorkerGlobalScope &&
    'function' == typeof self.importScripts,
  Je = (qe && window.location.href) || 'http://localhost';
var We = {
  ...Object.freeze({
    __proto__: null,
    hasBrowserEnv: qe,
    hasStandardBrowserWebWorkerEnv: He,
    hasStandardBrowserEnv: ze,
    navigator: Me,
    origin: Je,
  }),
  ...Ie,
};
const Ve = _e;
function $e(e) {
  if (e > Ve)
    throw new xe(
      'FormData field is too deeply nested (' +
        e +
        ' levels). Max depth: ' +
        Ve,
      xe.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function Ke(e) {
  function t(e, n, r, o) {
    $e(o);
    let s = e[o++];
    if ('__proto__' === s) return !0;
    const i = Number.isFinite(+s),
      a = o >= e.length;
    if (((s = !s && fe.isArray(r) ? r.length : s), a))
      return (
        fe.hasOwnProp(r, s)
          ? (r[s] = fe.isArray(r[s]) ? r[s].concat(n) : [r[s], n])
          : (r[s] = n),
        !i
      );
    (fe.hasOwnProp(r, s) && fe.isObject(r[s])) || (r[s] = []);
    return (
      t(e, n, r[s], o) &&
        fe.isArray(r[s]) &&
        (r[s] = (function (e) {
          const t = {},
            n = Object.keys(e);
          let r;
          const o = n.length;
          let s;
          for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
          return t;
        })(r[s])),
      !i
    );
  }
  if (fe.isFormData(e) && fe.isFunction(e.entries)) {
    const n = {};
    return (
      fe.forEachEntry(e, (e, r) => {
        t(
          (function (e) {
            const t = [],
              n = /\w+|\[(\w*)]/g;
            let r;
            for (; null !== (r = n.exec(e)); )
              $e(t.length), t.push('[]' === r[0] ? '' : r[1] || r[0]);
            return t;
          })(e),
          r,
          n,
          0
        );
      }),
      n
    );
  }
  return null;
}
const Xe = (e, t) => (null != e && fe.hasOwnProp(e, t) ? e[t] : void 0);
const Ge = {
  transitional: Be,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (e, t) {
      const n = t.getContentType() || '',
        r = n.indexOf('application/json') > -1,
        o = fe.isObject(e);
      o && fe.isHTMLForm(e) && (e = new FormData(e));
      if (fe.isFormData(e)) return r ? JSON.stringify(Ke(e)) : e;
      if (
        fe.isArrayBuffer(e) ||
        fe.isBuffer(e) ||
        fe.isStream(e) ||
        fe.isFile(e) ||
        fe.isBlob(e) ||
        fe.isReadableStream(e)
      )
        return e;
      if (fe.isArrayBufferView(e)) return e.buffer;
      if (fe.isURLSearchParams(e))
        return (
          t.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          e.toString()
        );
      let s;
      if (o) {
        const t = Xe(this, 'formSerializer');
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return (function (e, t) {
            return je(e, new We.classes.URLSearchParams(), {
              visitor: function (e, t, n, r) {
                return We.isNode && fe.isBuffer(e)
                  ? (this.append(t, e.toString('base64')), !1)
                  : r.defaultVisitor.apply(this, arguments);
              },
              ...t,
            });
          })(e, t).toString();
        if ((s = fe.isFileList(e)) || n.indexOf('multipart/form-data') > -1) {
          const n = Xe(this, 'env'),
            r = n && n.FormData;
          return je(s ? { 'files[]': e } : e, r && new r(), t);
        }
      }
      return o || r
        ? (t.setContentType('application/json', !1),
          (function (e, t, n) {
            if (fe.isString(e))
              try {
                return (t || JSON.parse)(e), fe.trim(e);
              } catch (e) {
                if ('SyntaxError' !== e.name) throw e;
              }
            return (n || JSON.stringify)(e);
          })(e))
        : e;
    },
  ],
  transformResponse: [
    function (e) {
      const t = Xe(this, 'transitional') || Ge.transitional,
        n = t && t.forcedJSONParsing,
        r = Xe(this, 'responseType'),
        o = 'json' === r;
      if (fe.isResponse(e) || fe.isReadableStream(e)) return e;
      if (e && fe.isString(e) && ((n && !r) || o)) {
        const n = !(t && t.silentJSONParsing) && o;
        try {
          return JSON.parse(e, Xe(this, 'parseReviver'));
        } catch (e) {
          if (n) {
            if ('SyntaxError' === e.name)
              throw xe.from(
                e,
                xe.ERR_BAD_RESPONSE,
                this,
                null,
                Xe(this, 'response')
              );
            throw e;
          }
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: We.classes.FormData, Blob: We.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
fe.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'query'], (e) => {
  Ge.headers[e] = {};
});
var Qe = Ge;
function Ze(e, t) {
  const n = this || Qe,
    r = t || n,
    o = Oe.from(r.headers);
  let s = r.data;
  return (
    fe.forEach(e, function (e) {
      s = e.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function Ye(e) {
  return !(!e || !e.__CANCEL__);
}
var et = class extends xe {
  constructor(e, t, n) {
    super(null == e ? 'canceled' : e, xe.ERR_CANCELED, t, n),
      (this.name = 'CanceledError'),
      (this.__CANCEL__ = !0);
  }
};
function tt(e, t, n) {
  const r = n.config.validateStatus;
  n.status && r && !r(n.status)
    ? t(
        new xe(
          'Request failed with status code ' + n.status,
          n.status >= 400 && n.status < 500
            ? xe.ERR_BAD_REQUEST
            : xe.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n
        )
      )
    : e(n);
}
const nt = (e, t, n = 3) => {
    let r = 0;
    const o = (function (e, t) {
      e = e || 10;
      const n = new Array(e),
        r = new Array(e);
      let o,
        s = 0,
        i = 0;
      return (
        (t = void 0 !== t ? t : 1e3),
        function (a) {
          const c = Date.now(),
            u = r[i];
          o || (o = c), (n[s] = a), (r[s] = c);
          let l = i,
            f = 0;
          for (; l !== s; ) (f += n[l++]), (l %= e);
          if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t))
            return;
          const d = u && c - u;
          return d ? Math.round((1e3 * f) / d) : void 0;
        }
      );
    })(50, 250);
    return (function (e, t) {
      let n,
        r,
        o = 0,
        s = 1e3 / t;
      const i = (t, s = Date.now()) => {
        (o = s), (n = null), r && (clearTimeout(r), (r = null)), e(...t);
      };
      return [
        (...e) => {
          const t = Date.now(),
            a = t - o;
          a >= s
            ? i(e, t)
            : ((n = e),
              r ||
                (r = setTimeout(() => {
                  (r = null), i(n);
                }, s - a)));
        },
        () => n && i(n),
      ];
    })((n) => {
      if (!n || 'number' != typeof n.loaded) return;
      const s = n.loaded,
        i = n.lengthComputable ? n.total : void 0,
        a = null != i ? Math.min(s, i) : s,
        c = Math.max(0, a - r),
        u = o(c);
      r = Math.max(r, a);
      e({
        loaded: a,
        total: i,
        progress: i ? a / i : void 0,
        bytes: c,
        rate: u || void 0,
        estimated: u && i ? (i - a) / u : void 0,
        event: n,
        lengthComputable: null != i,
        [t ? 'download' : 'upload']: !0,
      });
    }, n);
  },
  rt = (e, t) => {
    const n = null != e;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  ot =
    (e) =>
    (...t) =>
      fe.asap(() => e(...t));
var st = We.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, We.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(We.origin),
        We.navigator && /(msie|trident)/i.test(We.navigator.userAgent)
      )
    : () => !0,
  it = We.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, s, i) {
          if ('undefined' == typeof document) return;
          const a = [`${e}=${encodeURIComponent(t)}`];
          fe.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`),
            fe.isString(r) && a.push(`path=${r}`),
            fe.isString(o) && a.push(`domain=${o}`),
            !0 === s && a.push('secure'),
            fe.isString(i) && a.push(`SameSite=${i}`),
            (document.cookie = a.join('; '));
        },
        read(e) {
          if ('undefined' == typeof document) return null;
          const t = document.cookie.split(';');
          for (let n = 0; n < t.length; n++) {
            const r = t[n].replace(/^\s+/, ''),
              o = r.indexOf('=');
            if (-1 !== o && r.slice(0, o) === e)
              return decodeURIComponent(r.slice(o + 1));
          }
          return null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5, '/');
        },
      }
    : { write() {}, read: () => null, remove() {} };
const at = /^https?:(?!\/\/)/i,
  ct = /[\t\n\r]/g;
function ut(e, t) {
  if (
    'string' == typeof e &&
    at.test(
      (function (e) {
        return (function (e) {
          let t = 0;
          for (; t < e.length && e.charCodeAt(t) <= 32; ) t++;
          return e.slice(t);
        })(e).replace(ct, '');
      })(e)
    )
  )
    throw new xe(
      'Invalid URL: missing "//" after protocol',
      xe.ERR_INVALID_URL,
      t
    );
}
function lt(e, t, n, r) {
  ut(t, r);
  let o = !(
    'string' == typeof (s = t) && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)
  );
  var s;
  return e && (o || !1 === n)
    ? (ut(e, r),
      (function (e, t) {
        return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
      })(e, t))
    : t;
}
const ft = (e) => (e instanceof Oe ? { ...e } : e);
function dt(e, t) {
  t = t || {};
  const n = Object.create(null);
  function r(e, t, n, r) {
    return fe.isPlainObject(e) && fe.isPlainObject(t)
      ? fe.merge.call({ caseless: r }, e, t)
      : fe.isPlainObject(t)
      ? fe.merge({}, t)
      : fe.isArray(t)
      ? t.slice()
      : t;
  }
  function o(e, t, n, o) {
    return fe.isUndefined(t)
      ? fe.isUndefined(e)
        ? void 0
        : r(void 0, e, 0, o)
      : r(e, t, 0, o);
  }
  function s(e, t) {
    if (!fe.isUndefined(t)) return r(void 0, t);
  }
  function i(e, t) {
    return fe.isUndefined(t)
      ? fe.isUndefined(e)
        ? void 0
        : r(void 0, e)
      : r(void 0, t);
  }
  function a(n, o, s) {
    return fe.hasOwnProp(t, s)
      ? r(n, o)
      : fe.hasOwnProp(e, s)
      ? r(void 0, n)
      : void 0;
  }
  Object.defineProperty(n, 'hasOwnProperty', {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (e, t, n) => o(ft(e), ft(t), 0, !0),
  };
  return (
    fe.forEach(Object.keys({ ...e, ...t }), function (r) {
      if ('__proto__' === r || 'constructor' === r || 'prototype' === r) return;
      const s = fe.hasOwnProp(c, r) ? c[r] : o,
        i = s(
          fe.hasOwnProp(e, r) ? e[r] : void 0,
          fe.hasOwnProp(t, r) ? t[r] : void 0,
          r
        );
      (fe.isUndefined(i) && s !== a) || (n[r] = i);
    }),
    fe.hasOwnProp(t, 'validateStatus') &&
      fe.isUndefined(t.validateStatus) &&
      !1 ===
        (function (n) {
          const r = fe.hasOwnProp(t, 'transitional') ? t.transitional : void 0;
          if (!fe.isUndefined(r)) {
            if (!fe.isPlainObject(r)) return;
            if (fe.hasOwnProp(r, n)) return r[n];
          }
          const o = fe.hasOwnProp(e, 'transitional') ? e.transitional : void 0;
          if (fe.isPlainObject(o) && fe.hasOwnProp(o, n)) return o[n];
        })('validateStatusUndefinedResolves') &&
      (fe.hasOwnProp(e, 'validateStatus')
        ? (n.validateStatus = r(void 0, e.validateStatus))
        : delete n.validateStatus),
    n
  );
}
const pt = ['content-type', 'content-length'];
function ht(e) {
  const t = dt({}, e),
    n = (e) => (fe.hasOwnProp(t, e) ? t[e] : void 0),
    r = n('data');
  let o = n('withXSRFToken');
  const s = n('xsrfHeaderName'),
    i = n('xsrfCookieName');
  let a = n('headers');
  const c = n('auth'),
    u = n('baseURL'),
    l = n('allowAbsoluteUrls'),
    f = n('url');
  if (
    ((t.headers = a = Oe.from(a)),
    (t.url = ke(lt(u, f, l, t), n('params'), n('paramsSerializer'))),
    c)
  ) {
    const e = fe.getSafeProp(c, 'username') || '',
      t = fe.getSafeProp(c, 'password') || '';
    a.set(
      'Authorization',
      'Basic ' +
        btoa(
          e +
            ':' +
            (t
              ? encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi, (e, t) =>
                  String.fromCharCode(parseInt(t, 16))
                )
              : '')
        )
    );
  }
  if (
    (fe.isFormData(r) &&
      (We.hasStandardBrowserEnv ||
      We.hasStandardBrowserWebWorkerEnv ||
      fe.isReactNative(r)
        ? a.setContentType(void 0)
        : fe.isFunction(r.getHeaders) &&
          (function (e, t, n) {
            'content-only' === n
              ? Object.entries(t).forEach(([t, n]) => {
                  pt.includes(t.toLowerCase()) && e.set(t, n);
                })
              : e.set(t);
          })(a, r.getHeaders(), n('formDataHeaderPolicy'))),
    We.hasStandardBrowserEnv)
  ) {
    fe.isFunction(o) && (o = o(t));
    if (!0 === o || (null == o && st(t.url))) {
      const e = s && i && it.read(i);
      e && a.set(s, e);
    }
  }
  return t;
}
var mt =
  'undefined' != typeof XMLHttpRequest &&
  function (e) {
    return new Promise(function (t, n) {
      const r = ht(e);
      let o = r.data;
      const s = Oe.from(r.headers).normalize();
      let i,
        a,
        c,
        u,
        l,
        { responseType: f, onUploadProgress: d, onDownloadProgress: p } = r;
      function h() {
        u && u(),
          l && l(),
          r.cancelToken && r.cancelToken.unsubscribe(i),
          r.signal && r.signal.removeEventListener('abort', i);
      }
      let m = new XMLHttpRequest();
      function g() {
        if (!m) return;
        const r = Oe.from(
          'getAllResponseHeaders' in m && m.getAllResponseHeaders()
        );
        tt(
          function (e) {
            t(e), h();
          },
          function (e) {
            n(e), h();
          },
          {
            data:
              f && 'text' !== f && 'json' !== f ? m.response : m.responseText,
            status: m.status,
            statusText: m.statusText,
            headers: r,
            config: e,
            request: m,
          }
        ),
          (m = null);
      }
      m.open(r.method.toUpperCase(), r.url, !0),
        (m.timeout = r.timeout),
        'onloadend' in m
          ? (m.onloadend = g)
          : (m.onreadystatechange = function () {
              m &&
                4 === m.readyState &&
                (0 !== m.status ||
                  (m.responseURL && m.responseURL.startsWith('file:'))) &&
                setTimeout(g);
            }),
        (m.onabort = function () {
          m &&
            (n(new xe('Request aborted', xe.ECONNABORTED, e, m)),
            h(),
            (m = null));
        }),
        (m.onerror = function (t) {
          const r = t && t.message ? t.message : 'Network Error',
            o = new xe(r, xe.ERR_NETWORK, e, m);
          (o.event = t || null), n(o), h(), (m = null);
        }),
        (m.ontimeout = function () {
          let t = r.timeout
            ? 'timeout of ' + r.timeout + 'ms exceeded'
            : 'timeout exceeded';
          const o = r.transitional || Be;
          r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
            n(
              new xe(
                t,
                o.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,
                e,
                m
              )
            ),
            h(),
            (m = null);
        }),
        void 0 === o && s.setContentType(null),
        'setRequestHeader' in m &&
          fe.forEach(ge(s), function (e, t) {
            m.setRequestHeader(t, e);
          }),
        fe.isUndefined(r.withCredentials) ||
          (m.withCredentials = !!r.withCredentials),
        f && 'json' !== f && (m.responseType = r.responseType),
        p && (([c, l] = nt(p, !0)), m.addEventListener('progress', c)),
        d &&
          m.upload &&
          (([a, u] = nt(d)),
          m.upload.addEventListener('progress', a),
          m.upload.addEventListener('loadend', u)),
        (r.cancelToken || r.signal) &&
          ((i = (t) => {
            m &&
              (n(!t || t.type ? new et(null, e, m) : t),
              m.abort(),
              h(),
              (m = null));
          }),
          r.cancelToken && r.cancelToken.subscribe(i),
          r.signal &&
            (r.signal.aborted ? i() : r.signal.addEventListener('abort', i)));
      const y = (function (e) {
        const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
        return (t && t[1]) || '';
      })(r.url);
      !y || We.protocols.includes(y)
        ? m.send(o || null)
        : n(new xe('Unsupported protocol ' + y + ':', xe.ERR_BAD_REQUEST, e));
    });
  };
var gt = (e, t) => {
  if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
  const n = new AbortController();
  let r = !1;
  const o = function (e) {
    if (!r) {
      (r = !0), i();
      const t = e instanceof Error ? e : this.reason;
      n.abort(t instanceof xe ? t : new et(t instanceof Error ? t.message : t));
    }
  };
  let s =
    t &&
    setTimeout(() => {
      (s = null), o(new xe(`timeout of ${t}ms exceeded`, xe.ETIMEDOUT));
    }, t);
  const i = () => {
    e &&
      (s && clearTimeout(s),
      (s = null),
      e.forEach((e) => {
        e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener('abort', o);
      }),
      (e = null));
  };
  e.forEach((e) => e.addEventListener('abort', o));
  const { signal: a } = n;
  return (a.unsubscribe = () => fe.asap(i)), a;
};
const yt = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) return void (yield e);
    let r,
      o = 0;
    for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
  },
  bt = async function* (e) {
    if (e[Symbol.asyncIterator]) return void (yield* e);
    const t = e.getReader();
    try {
      for (;;) {
        const { done: e, value: n } = await t.read();
        if (e) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  wt = (e, t, n, r) => {
    const o = (async function* (e, t) {
      for await (const n of bt(e)) yield* yt(n, t);
    })(e, t);
    let s,
      i = 0,
      a = (e) => {
        s || ((s = !0), r && r(e));
      };
    return new ReadableStream(
      {
        async pull(e) {
          try {
            const { done: t, value: r } = await o.next();
            if (t) return a(), void e.close();
            let s = r.byteLength;
            if (n) {
              let e = (i += s);
              n(e);
            }
            e.enqueue(new Uint8Array(r));
          } catch (e) {
            throw (a(e), e);
          }
        },
        cancel: (e) => (a(e), o.return()),
      },
      { highWaterMark: 2 }
    );
  },
  vt = (e) =>
    (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
  Et = (e, t, n) =>
    t + 2 < n && vt(e.charCodeAt(t + 1)) && vt(e.charCodeAt(t + 2));
const Ot = '1.18.0',
  { isFunction: Rt } = fe,
  St = (e) => {
    if (!fe.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e;
    }
  },
  xt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch (e) {
      return !1;
    }
  },
  _t = (e) => {
    const t =
        void 0 !== fe.global && null !== fe.global ? fe.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = fe.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e
    );
    const { fetch: o, Request: s, Response: i } = e,
      a = o ? Rt(o) : 'function' == typeof fetch,
      c = Rt(s),
      u = Rt(i);
    if (!a) return !1;
    const l = a && Rt(n),
      f =
        a &&
        ('function' == typeof r
          ? ((d = new r()), (e) => d.encode(e))
          : async (e) => new Uint8Array(await new s(e).arrayBuffer()));
    var d;
    const p =
        c &&
        l &&
        xt(() => {
          let e = !1;
          const t = new s(We.origin, {
              body: new n(),
              method: 'POST',
              get duplex() {
                return (e = !0), 'half';
              },
            }),
            r = t.headers.has('Content-Type');
          return null != t.body && t.body.cancel(), e && !r;
        }),
      h = u && l && xt(() => fe.isReadableStream(new i('').body)),
      m = { stream: h && ((e) => e.body) };
    a &&
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
        !m[e] &&
          (m[e] = (t, n) => {
            let r = t && t[e];
            if (r) return r.call(t);
            throw new xe(
              `Response type '${e}' is not supported`,
              xe.ERR_NOT_SUPPORT,
              n
            );
          });
      });
    const g = async (e) => {
      if (null == e) return 0;
      if (fe.isBlob(e)) return e.size;
      if (fe.isSpecCompliantForm(e)) {
        const t = new s(We.origin, { method: 'POST', body: e });
        return (await t.arrayBuffer()).byteLength;
      }
      return fe.isArrayBufferView(e) || fe.isArrayBuffer(e)
        ? e.byteLength
        : (fe.isURLSearchParams(e) && (e += ''),
          fe.isString(e) ? (await f(e)).byteLength : void 0);
    };
    return async (e) => {
      let {
        url: t,
        method: n,
        data: a,
        signal: u,
        cancelToken: f,
        timeout: d,
        onDownloadProgress: y,
        onUploadProgress: b,
        responseType: w,
        headers: v,
        withCredentials: E = 'same-origin',
        fetchOptions: O,
        maxContentLength: R,
        maxBodyLength: S,
      } = ht(e);
      const x = fe.isNumber(R) && R > -1,
        _ = fe.isNumber(S) && S > -1;
      let A = o || fetch;
      w = w ? (w + '').toLowerCase() : 'text';
      let C = gt([u, f && f.toAbortSignal()], d),
        T = null;
      const P =
        C &&
        C.unsubscribe &&
        (() => {
          C.unsubscribe();
        });
      let j,
        N = null;
      const L = () =>
        new xe(
          'Request body larger than maxBodyLength limit',
          xe.ERR_BAD_REQUEST,
          e,
          T
        );
      try {
        let o;
        const u = ((U = 'auth'), fe.hasOwnProp(e, U) ? e[U] : void 0);
        if (u) {
          const e = fe.getSafeProp(u, 'username') || '';
          o = { username: e, password: fe.getSafeProp(u, 'password') || '' };
        }
        if (
          ((e) => {
            const t = e.indexOf('://');
            let n = e;
            return (
              -1 !== t && (n = n.slice(t + 3)),
              n.includes('@') || n.includes(':')
            );
          })(t)
        ) {
          const e = new URL(t, We.origin);
          if (!o && (e.username || e.password)) {
            const t = St(e.username);
            o = { username: t, password: St(e.password) };
          }
          (e.username || e.password) &&
            ((e.username = ''), (e.password = ''), (t = e.href));
        }
        if (
          (o &&
            (v.delete('authorization'),
            v.set(
              'Authorization',
              'Basic ' +
                btoa(
                  ((D = (o.username || '') + ':' + (o.password || '')),
                  encodeURIComponent(D).replace(/%([0-9A-F]{2})/gi, (e, t) =>
                    String.fromCharCode(parseInt(t, 16))
                  ))
                )
            )),
          x && 'string' == typeof t && t.startsWith('data:'))
        ) {
          const n = (function (e) {
            if (!e || 'string' != typeof e) return 0;
            if (!e.startsWith('data:')) return 0;
            const t = e.indexOf(',');
            if (t < 0) return 0;
            const n = e.slice(5, t),
              r = e.slice(t + 1);
            if (/;base64/i.test(n)) {
              let e = r.length;
              const t = r.length;
              for (let n = 0; n < t; n++)
                if (37 === r.charCodeAt(n) && n + 2 < t) {
                  const t = r.charCodeAt(n + 1),
                    o = r.charCodeAt(n + 2);
                  vt(t) && vt(o) && ((e -= 2), (n += 2));
                }
              let n = 0,
                o = t - 1;
              const s = (e) =>
                e >= 2 &&
                37 === r.charCodeAt(e - 2) &&
                51 === r.charCodeAt(e - 1) &&
                (68 === r.charCodeAt(e) || 100 === r.charCodeAt(e));
              o >= 0 &&
                (61 === r.charCodeAt(o) ? (n++, o--) : s(o) && (n++, (o -= 3))),
                1 === n && o >= 0 && (61 === r.charCodeAt(o) || s(o)) && n++;
              const i = 3 * Math.floor(e / 4) - (n || 0);
              return i > 0 ? i : 0;
            }
            let o = 0;
            for (let e = 0, t = r.length; e < t; e++) {
              const n = r.charCodeAt(e);
              if (37 === n && Et(r, e, t)) (o += 1), (e += 2);
              else if (n < 128) o += 1;
              else if (n < 2048) o += 2;
              else if (n >= 55296 && n <= 56319 && e + 1 < t) {
                const t = r.charCodeAt(e + 1);
                t >= 56320 && t <= 57343 ? ((o += 4), e++) : (o += 3);
              } else o += 3;
            }
            return o;
          })(t);
          if (n > R)
            throw new xe(
              'maxContentLength size of ' + R + ' exceeded',
              xe.ERR_BAD_RESPONSE,
              e,
              T
            );
        }
        if (_ && 'get' !== n && 'head' !== n) {
          const e = await g(a);
          if ('number' == typeof e && isFinite(e) && ((j = e), e > S))
            throw L();
        }
        const f = _ && (fe.isReadableStream(a) || fe.isStream(a)),
          d = (e, t, n) =>
            wt(
              e,
              65536,
              (e) => {
                if (_ && e > S) throw (N = L());
                t && t(e);
              },
              n
            );
        if (p && 'get' !== n && 'head' !== n && (b || f)) {
          if (
            ((j =
              null == j
                ? await (async (e, t) => {
                    const n = fe.toFiniteNumber(e.getContentLength());
                    return null == n ? g(t) : n;
                  })(v, a)
                : j),
            0 !== j || f)
          ) {
            let e,
              n = new s(t, { method: 'POST', body: a, duplex: 'half' });
            if (
              (fe.isFormData(a) &&
                (e = n.headers.get('content-type')) &&
                v.setContentType(e),
              n.body)
            ) {
              const [e, t] = (b && rt(j, nt(ot(b)))) || [];
              a = d(n.body, e, t);
            }
          }
        } else if (f && !c && l && 'get' !== n && 'head' !== n) a = d(a);
        else if (f && c && !p && 'get' !== n && 'head' !== n)
          throw new xe(
            'Stream request bodies are not supported by the current fetch implementation',
            xe.ERR_NOT_SUPPORT,
            e,
            T
          );
        fe.isString(E) || (E = E ? 'include' : 'omit');
        const k = c && 'credentials' in s.prototype;
        if (fe.isFormData(a)) {
          const e = v.getContentType();
          e &&
            /^multipart\/form-data/i.test(e) &&
            !/boundary=/i.test(e) &&
            v.delete('content-type');
        }
        v.set('User-Agent', 'axios/' + Ot, !1);
        const F = {
          ...O,
          signal: C,
          method: n.toUpperCase(),
          headers: ge(v.normalize()),
          body: a,
          duplex: 'half',
          credentials: k ? E : void 0,
        };
        T = c && new s(t, F);
        let B = await (c ? A(T, O) : A(t, F));
        const I = Oe.from(B.headers);
        if (x) {
          const t = fe.toFiniteNumber(I.getContentLength());
          if (null != t && t > R)
            throw new xe(
              'maxContentLength size of ' + R + ' exceeded',
              xe.ERR_BAD_RESPONSE,
              e,
              T
            );
        }
        const q = h && ('stream' === w || 'response' === w);
        if (h && B.body && (y || x || (q && P))) {
          const t = {};
          ['status', 'statusText', 'headers'].forEach((e) => {
            t[e] = B[e];
          });
          const n = fe.toFiniteNumber(I.getContentLength()),
            [r, o] = (y && rt(n, nt(ot(y), !0))) || [];
          let s = 0;
          const a = (t) => {
            if (x && ((s = t), s > R))
              throw new xe(
                'maxContentLength size of ' + R + ' exceeded',
                xe.ERR_BAD_RESPONSE,
                e,
                T
              );
            r && r(t);
          };
          B = new i(
            wt(B.body, 65536, a, () => {
              o && o(), P && P();
            }),
            t
          );
        }
        w = w || 'text';
        let M = await m[fe.findKey(m, w) || 'text'](B, e);
        if (x && !h && !q) {
          let t;
          if (
            (null != M &&
              ('number' == typeof M.byteLength
                ? (t = M.byteLength)
                : 'number' == typeof M.size
                ? (t = M.size)
                : 'string' == typeof M &&
                  (t =
                    'function' == typeof r
                      ? new r().encode(M).byteLength
                      : M.length)),
            'number' == typeof t && t > R)
          )
            throw new xe(
              'maxContentLength size of ' + R + ' exceeded',
              xe.ERR_BAD_RESPONSE,
              e,
              T
            );
        }
        return (
          !q && P && P(),
          await new Promise((t, n) => {
            tt(t, n, {
              data: M,
              headers: Oe.from(B.headers),
              status: B.status,
              statusText: B.statusText,
              config: e,
              request: T,
            });
          })
        );
      } catch (t) {
        if ((P && P(), C && C.aborted && C.reason instanceof xe)) {
          const n = C.reason;
          throw (
            ((n.config = e), T && (n.request = T), t !== n && (n.cause = t), n)
          );
        }
        if (N) throw (T && !N.request && (N.request = T), N);
        if (t instanceof xe) throw (T && !t.request && (t.request = T), t);
        if (t && 'TypeError' === t.name && /Load failed|fetch/i.test(t.message))
          throw Object.assign(
            new xe('Network Error', xe.ERR_NETWORK, e, T, t && t.response),
            { cause: t.cause || t }
          );
        throw xe.from(t, t && t.code, e, T, t && t.response);
      }
      var D, U;
    };
  },
  At = new Map(),
  Ct = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: o } = t,
      s = [r, o, n];
    let i,
      a,
      c = s.length,
      u = At;
    for (; c--; )
      (i = s[c]),
        (a = u.get(i)),
        void 0 === a && u.set(i, (a = c ? new Map() : _t(t))),
        (u = a);
    return a;
  };
Ct();
const Tt = { http: null, xhr: mt, fetch: { get: Ct } };
fe.forEach(Tt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { __proto__: null, value: t });
    } catch (e) {}
    Object.defineProperty(e, 'adapterName', { __proto__: null, value: t });
  }
});
const Pt = (e) => `- ${e}`,
  jt = (e) => fe.isFunction(e) || null === e || !1 === e;
var Nt = {
  getAdapter: function (e, t) {
    e = fe.isArray(e) ? e : [e];
    const { length: n } = e;
    let r, o;
    const s = {};
    for (let i = 0; i < n; i++) {
      let n;
      if (
        ((r = e[i]),
        (o = r),
        !jt(r) && ((o = Tt[(n = String(r)).toLowerCase()]), void 0 === o))
      )
        throw new xe(`Unknown adapter '${n}'`);
      if (o && (fe.isFunction(o) || (o = o.get(t)))) break;
      s[n || '#' + i] = o;
    }
    if (!o) {
      const e = Object.entries(s).map(
        ([e, t]) =>
          `adapter ${e} ` +
          (!1 === t
            ? 'is not supported by the environment'
            : 'is not available in the build')
      );
      let t = n
        ? e.length > 1
          ? 'since :\n' + e.map(Pt).join('\n')
          : ' ' + Pt(e[0])
        : 'as no adapter specified';
      throw new xe(
        'There is no suitable adapter to dispatch the request ' + t,
        'ERR_NOT_SUPPORT'
      );
    }
    return o;
  },
  adapters: Tt,
};
function Lt(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new et(null, e);
}
function Dt(e) {
  Lt(e),
    (e.headers = Oe.from(e.headers)),
    (e.data = Ze.call(e, e.transformRequest)),
    -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1);
  return Nt.getAdapter(
    e.adapter || Qe.adapter,
    e
  )(e).then(
    function (t) {
      Lt(e), (e.response = t);
      try {
        t.data = Ze.call(e, e.transformResponse, t);
      } finally {
        delete e.response;
      }
      return (t.headers = Oe.from(t.headers)), t;
    },
    function (t) {
      if (!Ye(t) && (Lt(e), t && t.response)) {
        e.response = t.response;
        try {
          t.response.data = Ze.call(e, e.transformResponse, t.response);
        } finally {
          delete e.response;
        }
        t.response.headers = Oe.from(t.response.headers);
      }
      return Promise.reject(t);
    }
  );
}
const Ut = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Ut[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const kt = {};
(Ut.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      '[Axios v' +
      Ot +
      "] Transitional option '" +
      e +
      "'" +
      t +
      (n ? '. ' + n : '')
    );
  }
  return (n, o, s) => {
    if (!1 === e)
      throw new xe(
        r(o, ' has been removed' + (t ? ' in ' + t : '')),
        xe.ERR_DEPRECATED
      );
    return (
      t &&
        !kt[o] &&
        ((kt[o] = !0),
        console.warn(
          r(
            o,
            ' has been deprecated since v' +
              t +
              ' and will be removed in the near future'
          )
        )),
      !e || e(n, o, s)
    );
  };
}),
  (Ut.spelling = function (e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
  });
var Ft = {
  assertOptions: function (e, t, n) {
    if ('object' != typeof e)
      throw new xe('options must be an object', xe.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
      const s = r[o],
        i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
      if (i) {
        const t = e[s],
          n = void 0 === t || i(t, s, e);
        if (!0 !== n)
          throw new xe(
            'option ' + s + ' must be ' + n,
            xe.ERR_BAD_OPTION_VALUE
          );
      } else if (!0 !== n)
        throw new xe('Unknown option ' + s, xe.ERR_BAD_OPTION);
    }
  },
  validators: Ut,
};
const Bt = Ft.validators;
class It {
  constructor(e) {
    (this.defaults = e || {}),
      (this.interceptors = { request: new Fe(), response: new Fe() });
  }
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (e) {
      if (e instanceof Error) {
        let t = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(t)
          : (t = new Error());
        const n = (() => {
          if (!t.stack) return '';
          const e = t.stack.indexOf('\n');
          return -1 === e ? '' : t.stack.slice(e + 1);
        })();
        try {
          if (e.stack) {
            if (n) {
              const t = n.indexOf('\n'),
                r = -1 === t ? -1 : n.indexOf('\n', t + 1),
                o = -1 === r ? '' : n.slice(r + 1);
              String(e.stack).endsWith(o) || (e.stack += '\n' + n);
            }
          } else e.stack = n;
        } catch (e) {}
      }
      throw e;
    }
  }
  _request(e, t) {
    'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
      (t = dt(this.defaults, t));
    const { transitional: n, paramsSerializer: r, headers: o } = t;
    void 0 !== n &&
      Ft.assertOptions(
        n,
        {
          silentJSONParsing: Bt.transitional(Bt.boolean),
          forcedJSONParsing: Bt.transitional(Bt.boolean),
          clarifyTimeoutError: Bt.transitional(Bt.boolean),
          legacyInterceptorReqResOrdering: Bt.transitional(Bt.boolean),
          advertiseZstdAcceptEncoding: Bt.transitional(Bt.boolean),
          validateStatusUndefinedResolves: Bt.transitional(Bt.boolean),
        },
        !1
      ),
      null != r &&
        (fe.isFunction(r)
          ? (t.paramsSerializer = { serialize: r })
          : Ft.assertOptions(
              r,
              { encode: Bt.function, serialize: Bt.function },
              !0
            )),
      void 0 !== t.allowAbsoluteUrls ||
        (void 0 !== this.defaults.allowAbsoluteUrls
          ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (t.allowAbsoluteUrls = !0)),
      Ft.assertOptions(
        t,
        {
          baseUrl: Bt.spelling('baseURL'),
          withXsrfToken: Bt.spelling('withXSRFToken'),
        },
        !0
      ),
      (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
    let s = o && fe.merge(o.common, o[t.method]);
    o &&
      fe.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'query', 'common'],
        (e) => {
          delete o[e];
        }
      ),
      (t.headers = Oe.concat(s, o));
    const i = [];
    let a = !0;
    this.interceptors.request.forEach(function (e) {
      if ('function' == typeof e.runWhen && !1 === e.runWhen(t)) return;
      a = a && e.synchronous;
      const n = t.transitional || Be;
      n && n.legacyInterceptorReqResOrdering
        ? i.unshift(e.fulfilled, e.rejected)
        : i.push(e.fulfilled, e.rejected);
    });
    const c = [];
    let u;
    this.interceptors.response.forEach(function (e) {
      c.push(e.fulfilled, e.rejected);
    });
    let l,
      f = 0;
    if (!a) {
      const e = [Dt.bind(this), void 0];
      for (
        e.unshift(...i), e.push(...c), l = e.length, u = Promise.resolve(t);
        f < l;

      )
        u = u.then(e[f++], e[f++]);
      return u;
    }
    l = i.length;
    let d = t;
    for (; f < l; ) {
      const e = i[f++],
        t = i[f++];
      try {
        d = e(d);
      } catch (e) {
        t.call(this, e);
        break;
      }
    }
    try {
      u = Dt.call(this, d);
    } catch (e) {
      return Promise.reject(e);
    }
    for (f = 0, l = c.length; f < l; ) u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(e) {
    return ke(
      lt((e = dt(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls, e),
      e.params,
      e.paramsSerializer
    );
  }
}
fe.forEach(['delete', 'get', 'head', 'options'], function (e) {
  It.prototype[e] = function (t, n) {
    return this.request(
      dt(n || {}, {
        method: e,
        url: t,
        data: n && fe.hasOwnProp(n, 'data') ? n.data : void 0,
      })
    );
  };
}),
  fe.forEach(['post', 'put', 'patch', 'query'], function (e) {
    function t(t) {
      return function (n, r, o) {
        return this.request(
          dt(o || {}, {
            method: e,
            headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
            url: n,
            data: r,
          })
        );
      };
    }
    (It.prototype[e] = t()),
      'query' !== e && (It.prototype[e + 'Form'] = t(!0));
  });
var qt = It;
class Mt {
  constructor(e) {
    if ('function' != typeof e)
      throw new TypeError('executor must be a function.');
    let t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    const n = this;
    this.promise.then((e) => {
      if (!n._listeners) return;
      let t = n._listeners.length;
      for (; t-- > 0; ) n._listeners[t](e);
      n._listeners = null;
    }),
      (this.promise.then = (e) => {
        let t;
        const r = new Promise((e) => {
          n.subscribe(e), (t = e);
        }).then(e);
        return (
          (r.cancel = function () {
            n.unsubscribe(t);
          }),
          r
        );
      }),
      e(function (e, r, o) {
        n.reason || ((n.reason = new et(e, r, o)), t(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    this.reason
      ? e(this.reason)
      : this._listeners
      ? this._listeners.push(e)
      : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const t = this._listeners.indexOf(e);
    -1 !== t && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(),
      t = (t) => {
        e.abort(t);
      };
    return (
      this.subscribe(t),
      (e.signal.unsubscribe = () => this.unsubscribe(t)),
      e.signal
    );
  }
  static source() {
    let e;
    return {
      token: new Mt(function (t) {
        e = t;
      }),
      cancel: e,
    };
  }
}
var zt = Mt;
const Ht = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(Ht).forEach(([e, t]) => {
  Ht[t] = e;
});
var Jt = Ht;
const Wt = (function e(t) {
  const n = new qt(t),
    r = g(qt.prototype.request, n);
  return (
    fe.extend(r, qt.prototype, n, { allOwnKeys: !0 }),
    fe.extend(r, n, null, { allOwnKeys: !0 }),
    (r.create = function (n) {
      return e(dt(t, n));
    }),
    r
  );
})(Qe);
(Wt.Axios = qt),
  (Wt.CanceledError = et),
  (Wt.CancelToken = zt),
  (Wt.isCancel = Ye),
  (Wt.VERSION = Ot),
  (Wt.toFormData = je),
  (Wt.AxiosError = xe),
  (Wt.Cancel = Wt.CanceledError),
  (Wt.all = function (e) {
    return Promise.all(e);
  }),
  (Wt.spread = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  }),
  (Wt.isAxiosError = function (e) {
    return fe.isObject(e) && !0 === e.isAxiosError;
  }),
  (Wt.mergeConfig = dt),
  (Wt.AxiosHeaders = Oe),
  (Wt.formToJSON = (e) => Ke(fe.isHTMLForm(e) ? new FormData(e) : e)),
  (Wt.getAdapter = Nt.getAdapter),
  (Wt.HttpStatusCode = Jt),
  (Wt.default = Wt);
var Vt = Wt;
var $t;
function Kt() {
  return (
    $t ||
      ($t = new Promise(function (e, t) {
        var n = 0;
        !(function r() {
          a.digitalData &&
          a.digitalData.page &&
          a.digitalData.page.isDataLayerReady
            ? e()
            : ++n < 50
            ? setTimeout(function () {
                r();
              }, 100)
            : t(new Error('Timeout polling for digital data object.'));
        })();
      })),
    $t
  );
}
var Xt = (function () {
    return n(
      function e() {
        s(this, e);
      },
      null,
      [
        {
          key: 'isReady',
          value: function () {
            return Kt();
          },
        },
        {
          key: 'getAll',
          value:
            ((u = r(
              o.mark(function e() {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 1),
                            this.isReady()
                              .then(function () {
                                return a.digitalData;
                              })
                              .catch(function () {
                                return null;
                              })
                          );
                        case 1:
                          return e.abrupt('return', e.sent);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return u.apply(this, arguments);
            }),
        },
        {
          key: 'setVersion',
          value:
            ((c = r(
              o.mark(function e() {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 1),
                            this.isReady().then(function () {
                              a.digitalData.page.pageInfo.version = i.version;
                            })
                          );
                        case 1:
                          return e.abrupt('return', e.sent);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return c.apply(this, arguments);
            }),
        },
        {
          key: 'getLanguage',
          value:
            ((t = r(
              o.mark(function e() {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 1),
                            this.isReady().then(function () {
                              return a.digitalData.page.pageInfo.language;
                            })
                          );
                        case 1:
                          return e.abrupt('return', e.sent);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
        },
        {
          key: 'getLocation',
          value:
            ((e = r(
              o.mark(function e() {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 1),
                            this.isReady().then(function () {
                              return a.digitalData.user.location.country.toLowerCase();
                            })
                          );
                        case 1:
                          return e.abrupt('return', e.sent);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            }),
        },
      ]
    );
    var e, t, c, u;
  })(),
  Gt = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!(function (e) {
  !(function (t) {
    e.exports = t();
  })(function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) t[r] = n[r];
      }
      return t;
    }
    function t(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return (function n(r) {
      function o() {}
      function s(t, n, s) {
        if ('undefined' != typeof document) {
          'number' == typeof (s = e({ path: '/' }, o.defaults, s)).expires &&
            (s.expires = new Date(1 * new Date() + 864e5 * s.expires)),
            (s.expires = s.expires ? s.expires.toUTCString() : '');
          try {
            var i = JSON.stringify(n);
            /^[\{\[]/.test(i) && (n = i);
          } catch (e) {}
          (n = r.write
            ? r.write(n, t)
            : encodeURIComponent(String(n)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              )),
            (t = encodeURIComponent(String(t))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var a = '';
          for (var c in s)
            s[c] &&
              ((a += '; ' + c), !0 !== s[c] && (a += '=' + s[c].split(';')[0]));
          return (document.cookie = t + '=' + n + a);
        }
      }
      function i(e, n) {
        if ('undefined' != typeof document) {
          for (
            var o = {},
              s = document.cookie ? document.cookie.split('; ') : [],
              i = 0;
            i < s.length;
            i++
          ) {
            var a = s[i].split('='),
              c = a.slice(1).join('=');
            n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
            try {
              var u = t(a[0]);
              if (((c = (r.read || r)(c, u) || t(c)), n))
                try {
                  c = JSON.parse(c);
                } catch (e) {}
              if (((o[u] = c), e === u)) break;
            } catch (e) {}
          }
          return e ? o[e] : o;
        }
      }
      return (
        (o.set = s),
        (o.get = function (e) {
          return i(e, !1);
        }),
        (o.getJSON = function (e) {
          return i(e, !0);
        }),
        (o.remove = function (t, n) {
          s(t, '', e(n, { expires: -1 }));
        }),
        (o.defaults = {}),
        (o.withConverter = n),
        o
      );
    })(function () {});
  });
})(Gt);
var Qt = Gt.exports;
function Zt(e) {
  return (
    (Zt =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Zt(e)
  );
}
function Yt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, en(r.key), r);
  }
}
function en(e) {
  var t = (function (e, t) {
    if ('object' != Zt(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t || 'default');
      if ('object' != Zt(r)) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == Zt(t) ? t : t + '';
}
var tn = 'ipcInfo',
  nn = (function () {
    return (
      (e = function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }),
      (n = [
        {
          key: 'get',
          value: function () {
            var e,
              t,
              n = Qt.withConverter({
                read: function (e) {
                  return decodeURIComponent(e);
                },
              }).get(tn);
            if (n)
              return (
                n.split(';').map(function (n) {
                  var r = n.split('=');
                  'cc' === r[0] && (e = r[1]), 'lc' === r[0] && (t = r[1]);
                }),
                { cc: e, lc: t }
              );
          },
        },
        {
          key: 'set',
          value: function (e) {
            var t = e.cc,
              n = e.lc,
              r = 'cc='.concat(t, ';lc=').concat(n);
            Qt.withConverter({
              write: function (e) {
                return encodeURIComponent(e);
              },
            }).set(tn, r, { expires: 365, domain: '.ibm.com' });
          },
        },
      ]),
      (t = null) && Yt(e.prototype, t),
      n && Yt(e, n),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    );
    var e, t, n;
  })(),
  rn =
    (e && (e.env.REACT_APP_TRANSLATION_HOST || e.env.TRANSLATION_HOST)) ||
    'https://1.www.s81c.com',
  on = { lc: 'en', cc: 'us' },
  sn = ''.concat(rn, '/common/js/dynamicnav/www/countrylist/jsononly'),
  an = { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  cn = 'cds-countrylist',
  un = {};
function ln() {
  var e;
  if (
    null !== (e = a.document) &&
    void 0 !== e &&
    null !== (e = e.documentElement) &&
    void 0 !== e &&
    e.lang
  ) {
    var t = a.document.documentElement.lang.toLowerCase(),
      n = {};
    if (-1 === t.indexOf('-')) n.lc = t;
    else {
      var r = t.split('-');
      (n.cc = r[1]), (n.lc = r[0]);
    }
    return n;
  }
  return !1;
}
var fn = (function () {
    var e = r(
      o.mark(function e() {
        var t;
        return o.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!((t = nn.get()) && t.cc && t.lc)) {
                  e.next = 2;
                  break;
                }
                return (e.next = 1), hn.getList(t);
              case 1:
                return e.abrupt('return', t);
              case 2:
                return e.abrupt('return', !1);
              case 3:
              case 'end':
                return e.stop();
            }
        }, e);
      })
    );
    return function () {
      return e.apply(this, arguments);
    };
  })(),
  dn = (function () {
    var e = r(
      o.mark(function e() {
        var t, n, r, s, i;
        return o.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 1), Xt.getLocation();
                case 1:
                  if (
                    ((t = e.sent),
                    (n = a.navigator.language),
                    (r = n.split('-')[0]),
                    !t || !r)
                  ) {
                    e.next = 3;
                    break;
                  }
                  return (e.next = 2), hn.getList({ cc: t, lc: r });
                case 2:
                  return (
                    (s = e.sent),
                    (i = hn.verifyLocale(t, r, s)),
                    nn.set(i),
                    e.abrupt('return', i)
                  );
                case 3:
                  e.next = 5;
                  break;
                case 4:
                  (e.prev = 4), e.catch(0);
                case 5:
                  return e.abrupt('return', !1);
                case 6:
                case 'end':
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 4]]
        );
      })
    );
    return function () {
      return e.apply(this, arguments);
    };
  })();
function pn() {
  var e,
    t = Object.assign({}, a.digitalData || {});
  if (
    null !== (e = t.page) &&
    void 0 !== e &&
    null !== (e = e.pageInfo) &&
    void 0 !== e &&
    e.language
  ) {
    var n,
      r,
      o = {};
    return (
      null !== (n = t.page) &&
      void 0 !== n &&
      null !== (n = n.pageInfo) &&
      void 0 !== n &&
      n.language.includes('-') &&
      null !== (r = t.page) &&
      void 0 !== r &&
      null !== (r = r.pageInfo) &&
      void 0 !== r &&
      null !== (r = r.ibm) &&
      void 0 !== r &&
      r.country
        ? ((o.lc = t.page.pageInfo.language.substring(0, 2).toLowerCase()),
          (o.cc = t.page.pageInfo.ibm.country.toLowerCase().trim()),
          o.cc.indexOf(',') > -1 &&
            (o.cc = o.cc.substring(0, o.cc.indexOf(',')).trim()),
          'gb' === o.cc && (o.cc = 'uk'),
          'zz' === o.cc && (o.cc = 'us'))
        : (o.lc = t.page.pageInfo.language.substring(0, 2).toLowerCase()),
      o
    );
  }
  return !1;
}
var hn = (function () {
  return n(
    function e() {
      s(this, e);
    },
    null,
    [
      {
        key: 'clearCache',
        value: function () {
          if ('undefined' != typeof sessionStorage) {
            Object.keys(un).forEach(function (e) {
              return delete un[e];
            });
            for (var e = 0; e < sessionStorage.length; ++e) {
              var t = sessionStorage.key(e);
              0 === t.indexOf(cn) && sessionStorage.removeItem(t);
            }
          }
        },
      },
      {
        key: 'getLocale',
        value:
          ((a = r(
            o.mark(function e() {
              var t, n, r, s;
              return o.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (t = 0), (n = [pn, ln, fn, dn]);
                    case 1:
                      if (!(t < n.length)) {
                        e.next = 4;
                        break;
                      }
                      return (r = n[t]), (e.next = 2), r();
                    case 2:
                      if (!(s = e.sent)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt('return', s);
                    case 3:
                      t++, (e.next = 1);
                      break;
                    case 4:
                      return e.abrupt('return', on);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )),
          function () {
            return a.apply(this, arguments);
          }),
      },
      {
        key: 'getLang',
        value:
          ((i = r(
            o.mark(function e() {
              return o.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt('return', this.getLocale());
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function () {
            return i.apply(this, arguments);
          }),
      },
      {
        key: 'getLangDisplay',
        value:
          ((t = r(
            o.mark(function e(t) {
              var n, r, s, i, a;
              return o.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t) {
                          e.next = 1;
                          break;
                        }
                        (a = t), (e.next = 3);
                        break;
                      case 1:
                        return (e.next = 2), this.getLocale();
                      case 2:
                        a = e.sent;
                      case 3:
                        return (n = a), (e.next = 4), this.getList(n);
                      case 4:
                        if (
                          ((r = e.sent),
                          (s = []),
                          r.regionList.forEach(function (e) {
                            s = s.concat(e.countryList);
                          }),
                          !(i = s.filter(function (e) {
                            if (
                              -1 !==
                              e.locale.findIndex(function (e) {
                                return (
                                  e[0] === ''.concat(n.lc, '-').concat(n.cc)
                                );
                              })
                            ) {
                              var t,
                                r = e.locale.filter(function (e) {
                                  return e.includes(
                                    ''.concat(n.lc, '-').concat(n.cc)
                                  );
                                });
                              return (
                                (t = e.locale).splice.apply(
                                  t,
                                  [0, e.locale.length].concat(m(r))
                                ),
                                e
                              );
                            }
                          })).length)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt(
                          'return',
                          ''.concat(i[0].name, ' — ').concat(i[0].locale[0][1])
                        );
                      case 5:
                        return e.abrupt('return', 'United States — English');
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function (e) {
            return t.apply(this, arguments);
          }),
      },
      {
        key: 'getList',
        value:
          ((e = r(
            o.mark(function e(t) {
              var n,
                r,
                s = this;
              return o.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.cc),
                        (r = t.lc),
                        e.abrupt(
                          'return',
                          new Promise(function (e, t) {
                            s.fetchList(n, r, e, t);
                          })
                        )
                      );
                    case 1:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (t) {
            return e.apply(this, arguments);
          }),
      },
      {
        key: 'fetchList',
        value: function (e, t, n, r) {
          var o = this,
            s = 'undefined' !== e ? ''.concat(t, '-').concat(e) : ''.concat(t),
            i = ''.concat(cn, '-').concat(s),
            a = this.getSessionCache(i);
          if (a) n(a);
          else {
            if (!un[s]) {
              var c = ''
                .concat(sn, '/')
                .concat(
                  'undefined' !== e ? ''.concat(e).concat(t) : ''.concat(t),
                  '-utf8.json'
                );
              un[s] = Vt.get(c, an).then(function (e) {
                var t = e.data;
                return (
                  (t.timestamp = Date.now()),
                  sessionStorage.setItem(
                    ''.concat(cn, '-').concat(s),
                    JSON.stringify(t)
                  ),
                  t
                );
              });
            }
            un[s].then(n, function (s) {
              e === on.cc && t === on.lc
                ? r(s)
                : o.fetchList(on.cc, on.lc, n, r);
            });
          }
        },
      },
      {
        key: 'verifyLocale',
        value: function (e, t, n) {
          var r, o;
          return (
            !(
              n &&
              n.regionList.forEach(function (n) {
                return n.countryList.forEach(function (n) {
                  var s = n.locale[0][0].split('-'),
                    i = s[0],
                    a = s[1];
                  a === e && i === t
                    ? (o = { cc: e, lc: t })
                    : a !== e || r || (r = i);
                });
              })
            ) &&
              r &&
              (o = { cc: e, lc: r }),
            o
          );
        },
      },
      {
        key: 'getSessionCache',
        value: function (e) {
          var t =
            'undefined' == typeof sessionStorage
              ? void 0
              : JSON.parse(sessionStorage.getItem(e));
          if (t && t.timestamp) {
            if (!(Date.now() - t.timestamp > 72e5)) return t;
            sessionStorage.removeItem(e);
          }
        },
      },
    ]
  );
  var e, t, i, a;
})();
export { Qt as C, Xt as D, hn as L, Vt as a, nn as i };
