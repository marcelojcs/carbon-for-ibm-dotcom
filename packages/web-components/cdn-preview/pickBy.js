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
  i as t,
  b as r,
  r as e,
  S as n,
  a as o,
  f as u,
  c as a,
} from './toNumber.js';
function i(t, r) {
  for (var e = -1, n = null == t ? 0 : t.length, o = Array(n); ++e < n; )
    o[e] = r(t[e], e, t);
  return o;
}
function c(t, r) {
  return t === r || (t != t && r != r);
}
function f(t, r) {
  for (var e = t.length; e--; ) if (c(t[e][0], r)) return e;
  return -1;
}
var s = Array.prototype.splice;
function l(t) {
  var r = -1,
    e = null == t ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
(l.prototype.clear = function () {
  (this.__data__ = []), (this.size = 0);
}),
  (l.prototype.delete = function (t) {
    var r = this.__data__,
      e = f(r, t);
    return (
      !(e < 0) &&
      (e == r.length - 1 ? r.pop() : s.call(r, e, 1), --this.size, !0)
    );
  }),
  (l.prototype.get = function (t) {
    var r = this.__data__,
      e = f(r, t);
    return e < 0 ? void 0 : r[e][1];
  }),
  (l.prototype.has = function (t) {
    return f(this.__data__, t) > -1;
  }),
  (l.prototype.set = function (t, r) {
    var e = this.__data__,
      n = f(e, t);
    return n < 0 ? (++this.size, e.push([t, r])) : (e[n][1] = r), this;
  });
var p = '[object AsyncFunction]',
  v = '[object Function]',
  h = '[object GeneratorFunction]',
  _ = '[object Proxy]';
function y(e) {
  if (!t(e)) return !1;
  var n = r(e);
  return n == v || n == h || n == p || n == _;
}
var b,
  d = e['__core-js_shared__'],
  j = (b = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ''))
    ? 'Symbol(src)_1.' + b
    : '';
var g = Function.prototype.toString;
function O(t) {
  if (null != t) {
    try {
      return g.call(t);
    } catch (t) {}
    try {
      return t + '';
    } catch (t) {}
  }
  return '';
}
var w = /^\[object .+?Constructor\]$/,
  m = Function.prototype,
  A = Object.prototype,
  z = m.toString,
  P = A.hasOwnProperty,
  x = RegExp(
    '^' +
      z
        .call(P)
        .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function S(r) {
  return !(!t(r) || ((e = r), j && j in e)) && (y(r) ? x : w).test(O(r));
  var e;
}
function k(t, r) {
  var e = (function (t, r) {
    return null == t ? void 0 : t[r];
  })(t, r);
  return S(e) ? e : void 0;
}
var E = k(e, 'Map'),
  $ = k(Object, 'create');
var F = Object.prototype.hasOwnProperty;
var B = Object.prototype.hasOwnProperty;
function M(t) {
  var r = -1,
    e = null == t ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
function T(t, r) {
  var e,
    n,
    o = t.__data__;
  return (
    'string' == (n = typeof (e = r)) ||
    'number' == n ||
    'symbol' == n ||
    'boolean' == n
      ? '__proto__' !== e
      : null === e
  )
    ? o['string' == typeof r ? 'string' : 'hash']
    : o.map;
}
function D(t) {
  var r = -1,
    e = null == t ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
(M.prototype.clear = function () {
  (this.__data__ = $ ? $(null) : {}), (this.size = 0);
}),
  (M.prototype.delete = function (t) {
    var r = this.has(t) && delete this.__data__[t];
    return (this.size -= r ? 1 : 0), r;
  }),
  (M.prototype.get = function (t) {
    var r = this.__data__;
    if ($) {
      var e = r[t];
      return '__lodash_hash_undefined__' === e ? void 0 : e;
    }
    return F.call(r, t) ? r[t] : void 0;
  }),
  (M.prototype.has = function (t) {
    var r = this.__data__;
    return $ ? void 0 !== r[t] : B.call(r, t);
  }),
  (M.prototype.set = function (t, r) {
    var e = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (e[t] = $ && void 0 === r ? '__lodash_hash_undefined__' : r),
      this
    );
  }),
  (D.prototype.clear = function () {
    (this.size = 0),
      (this.__data__ = { hash: new M(), map: new (E || l)(), string: new M() });
  }),
  (D.prototype.delete = function (t) {
    var r = T(this, t).delete(t);
    return (this.size -= r ? 1 : 0), r;
  }),
  (D.prototype.get = function (t) {
    return T(this, t).get(t);
  }),
  (D.prototype.has = function (t) {
    return T(this, t).has(t);
  }),
  (D.prototype.set = function (t, r) {
    var e = T(this, t),
      n = e.size;
    return e.set(t, r), (this.size += e.size == n ? 0 : 1), this;
  });
function I(t) {
  var r = (this.__data__ = new l(t));
  this.size = r.size;
}
(I.prototype.clear = function () {
  (this.__data__ = new l()), (this.size = 0);
}),
  (I.prototype.delete = function (t) {
    var r = this.__data__,
      e = r.delete(t);
    return (this.size = r.size), e;
  }),
  (I.prototype.get = function (t) {
    return this.__data__.get(t);
  }),
  (I.prototype.has = function (t) {
    return this.__data__.has(t);
  }),
  (I.prototype.set = function (t, r) {
    var e = this.__data__;
    if (e instanceof l) {
      var n = e.__data__;
      if (!E || n.length < 199)
        return n.push([t, r]), (this.size = ++e.size), this;
      e = this.__data__ = new D(n);
    }
    return e.set(t, r), (this.size = e.size), this;
  });
function C(t) {
  var r = -1,
    e = null == t ? 0 : t.length;
  for (this.__data__ = new D(); ++r < e; ) this.add(t[r]);
}
function L(t, r) {
  for (var e = -1, n = null == t ? 0 : t.length; ++e < n; )
    if (r(t[e], e, t)) return !0;
  return !1;
}
(C.prototype.add = C.prototype.push =
  function (t) {
    return this.__data__.set(t, '__lodash_hash_undefined__'), this;
  }),
  (C.prototype.has = function (t) {
    return this.__data__.has(t);
  });
var U = 1,
  R = 2;
function V(t, r, e, n, o, u) {
  var a = e & U,
    i = t.length,
    c = r.length;
  if (i != c && !(a && c > i)) return !1;
  var f = u.get(t),
    s = u.get(r);
  if (f && s) return f == r && s == t;
  var l = -1,
    p = !0,
    v = e & R ? new C() : void 0;
  for (u.set(t, r), u.set(r, t); ++l < i; ) {
    var h = t[l],
      _ = r[l];
    if (n) var y = a ? n(_, h, l, r, t, u) : n(h, _, l, t, r, u);
    if (void 0 !== y) {
      if (y) continue;
      p = !1;
      break;
    }
    if (v) {
      if (
        !L(r, function (t, r) {
          if (((a = r), !v.has(a) && (h === t || o(h, t, e, n, u))))
            return v.push(r);
          var a;
        })
      ) {
        p = !1;
        break;
      }
    } else if (h !== _ && !o(h, _, e, n, u)) {
      p = !1;
      break;
    }
  }
  return u.delete(t), u.delete(r), p;
}
var N = e.Uint8Array;
function W(t) {
  var r = -1,
    e = Array(t.size);
  return (
    t.forEach(function (t, n) {
      e[++r] = [n, t];
    }),
    e
  );
}
function q(t) {
  var r = -1,
    e = Array(t.size);
  return (
    t.forEach(function (t) {
      e[++r] = t;
    }),
    e
  );
}
var G = 1,
  H = 2,
  J = '[object Boolean]',
  K = '[object Date]',
  Q = '[object Error]',
  X = '[object Map]',
  Y = '[object Number]',
  Z = '[object RegExp]',
  tt = '[object Set]',
  rt = '[object String]',
  et = '[object Symbol]',
  nt = '[object ArrayBuffer]',
  ot = '[object DataView]',
  ut = n ? n.prototype : void 0,
  at = ut ? ut.valueOf : void 0;
function it(t, r) {
  for (var e = -1, n = r.length, o = t.length; ++e < n; ) t[o + e] = r[e];
  return t;
}
var ct = Array.isArray;
function ft(t, r, e) {
  var n = r(t);
  return ct(t) ? n : it(n, e(t));
}
function st() {
  return [];
}
var lt = Object.prototype.propertyIsEnumerable,
  pt = Object.getOwnPropertySymbols,
  vt = pt
    ? function (t) {
        return null == t
          ? []
          : ((t = Object(t)),
            (function (t, r) {
              for (
                var e = -1, n = null == t ? 0 : t.length, o = 0, u = [];
                ++e < n;

              ) {
                var a = t[e];
                r(a, e, t) && (u[o++] = a);
              }
              return u;
            })(pt(t), function (r) {
              return lt.call(t, r);
            }));
      }
    : st;
function ht(t) {
  return o(t) && '[object Arguments]' == r(t);
}
var _t = Object.prototype,
  yt = _t.hasOwnProperty,
  bt = _t.propertyIsEnumerable,
  dt = ht(
    (function () {
      return arguments;
    })()
  )
    ? ht
    : function (t) {
        return o(t) && yt.call(t, 'callee') && !bt.call(t, 'callee');
      };
var jt = 'object' == typeof exports && exports && !exports.nodeType && exports,
  gt = jt && 'object' == typeof module && module && !module.nodeType && module,
  Ot = gt && gt.exports === jt ? e.Buffer : void 0,
  wt =
    (Ot ? Ot.isBuffer : void 0) ||
    function () {
      return !1;
    },
  mt = 9007199254740991,
  At = /^(?:0|[1-9]\d*)$/;
function zt(t, r) {
  var e = typeof t;
  return (
    !!(r = null == r ? mt : r) &&
    ('number' == e || ('symbol' != e && At.test(t))) &&
    t > -1 &&
    t % 1 == 0 &&
    t < r
  );
}
var Pt = 9007199254740991;
function xt(t) {
  return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= Pt;
}
var St = {};
(St['[object Float32Array]'] =
  St['[object Float64Array]'] =
  St['[object Int8Array]'] =
  St['[object Int16Array]'] =
  St['[object Int32Array]'] =
  St['[object Uint8Array]'] =
  St['[object Uint8ClampedArray]'] =
  St['[object Uint16Array]'] =
  St['[object Uint32Array]'] =
    !0),
  (St['[object Arguments]'] =
    St['[object Array]'] =
    St['[object ArrayBuffer]'] =
    St['[object Boolean]'] =
    St['[object DataView]'] =
    St['[object Date]'] =
    St['[object Error]'] =
    St['[object Function]'] =
    St['[object Map]'] =
    St['[object Number]'] =
    St['[object Object]'] =
    St['[object RegExp]'] =
    St['[object Set]'] =
    St['[object String]'] =
    St['[object WeakMap]'] =
      !1);
var kt,
  Et = 'object' == typeof exports && exports && !exports.nodeType && exports,
  $t = Et && 'object' == typeof module && module && !module.nodeType && module,
  Ft = $t && $t.exports === Et && u.process,
  Bt = (function () {
    try {
      var t = $t && $t.require && $t.require('util').types;
      return t || (Ft && Ft.binding && Ft.binding('util'));
    } catch (t) {}
  })(),
  Mt = Bt && Bt.isTypedArray,
  Tt = Mt
    ? ((kt = Mt),
      function (t) {
        return kt(t);
      })
    : function (t) {
        return o(t) && xt(t.length) && !!St[r(t)];
      },
  Dt = Object.prototype.hasOwnProperty;
function It(t, r) {
  var e = ct(t),
    n = !e && dt(t),
    o = !e && !n && wt(t),
    u = !e && !n && !o && Tt(t),
    a = e || n || o || u,
    i = a
      ? (function (t, r) {
          for (var e = -1, n = Array(t); ++e < t; ) n[e] = r(e);
          return n;
        })(t.length, String)
      : [],
    c = i.length;
  for (var f in t)
    (!r && !Dt.call(t, f)) ||
      (a &&
        ('length' == f ||
          (o && ('offset' == f || 'parent' == f)) ||
          (u && ('buffer' == f || 'byteLength' == f || 'byteOffset' == f)) ||
          zt(f, c))) ||
      i.push(f);
  return i;
}
var Ct = Object.prototype;
function Lt(t) {
  var r = t && t.constructor;
  return t === (('function' == typeof r && r.prototype) || Ct);
}
function Ut(t, r) {
  return function (e) {
    return t(r(e));
  };
}
var Rt = Ut(Object.keys, Object),
  Vt = Object.prototype.hasOwnProperty;
function Nt(t) {
  return null != t && xt(t.length) && !y(t);
}
function Wt(t) {
  return Nt(t)
    ? It(t)
    : (function (t) {
        if (!Lt(t)) return Rt(t);
        var r = [];
        for (var e in Object(t))
          Vt.call(t, e) && 'constructor' != e && r.push(e);
        return r;
      })(t);
}
function qt(t) {
  return ft(t, Wt, vt);
}
var Gt = 1,
  Ht = Object.prototype.hasOwnProperty;
var Jt = k(e, 'DataView'),
  Kt = k(e, 'Promise'),
  Qt = k(e, 'Set'),
  Xt = k(e, 'WeakMap'),
  Yt = '[object Map]',
  Zt = '[object Promise]',
  tr = '[object Set]',
  rr = '[object WeakMap]',
  er = '[object DataView]',
  nr = O(Jt),
  or = O(E),
  ur = O(Kt),
  ar = O(Qt),
  ir = O(Xt),
  cr = r;
((Jt && cr(new Jt(new ArrayBuffer(1))) != er) ||
  (E && cr(new E()) != Yt) ||
  (Kt && cr(Kt.resolve()) != Zt) ||
  (Qt && cr(new Qt()) != tr) ||
  (Xt && cr(new Xt()) != rr)) &&
  (cr = function (t) {
    var e = r(t),
      n = '[object Object]' == e ? t.constructor : void 0,
      o = n ? O(n) : '';
    if (o)
      switch (o) {
        case nr:
          return er;
        case or:
          return Yt;
        case ur:
          return Zt;
        case ar:
          return tr;
        case ir:
          return rr;
      }
    return e;
  });
var fr = cr,
  sr = 1,
  lr = '[object Arguments]',
  pr = '[object Array]',
  vr = '[object Object]',
  hr = Object.prototype.hasOwnProperty;
function _r(t, r, e, n, o, u) {
  var a = ct(t),
    i = ct(r),
    f = a ? pr : fr(t),
    s = i ? pr : fr(r),
    l = (f = f == lr ? vr : f) == vr,
    p = (s = s == lr ? vr : s) == vr,
    v = f == s;
  if (v && wt(t)) {
    if (!wt(r)) return !1;
    (a = !0), (l = !1);
  }
  if (v && !l)
    return (
      u || (u = new I()),
      a || Tt(t)
        ? V(t, r, e, n, o, u)
        : (function (t, r, e, n, o, u, a) {
            switch (e) {
              case ot:
                if (
                  t.byteLength != r.byteLength ||
                  t.byteOffset != r.byteOffset
                )
                  return !1;
                (t = t.buffer), (r = r.buffer);
              case nt:
                return !(
                  t.byteLength != r.byteLength || !u(new N(t), new N(r))
                );
              case J:
              case K:
              case Y:
                return c(+t, +r);
              case Q:
                return t.name == r.name && t.message == r.message;
              case Z:
              case rt:
                return t == r + '';
              case X:
                var i = W;
              case tt:
                var f = n & G;
                if ((i || (i = q), t.size != r.size && !f)) return !1;
                var s = a.get(t);
                if (s) return s == r;
                (n |= H), a.set(t, r);
                var l = V(i(t), i(r), n, o, u, a);
                return a.delete(t), l;
              case et:
                if (at) return at.call(t) == at.call(r);
            }
            return !1;
          })(t, r, f, e, n, o, u)
    );
  if (!(e & sr)) {
    var h = l && hr.call(t, '__wrapped__'),
      _ = p && hr.call(r, '__wrapped__');
    if (h || _) {
      var y = h ? t.value() : t,
        b = _ ? r.value() : r;
      return u || (u = new I()), o(y, b, e, n, u);
    }
  }
  return (
    !!v &&
    (u || (u = new I()),
    (function (t, r, e, n, o, u) {
      var a = e & Gt,
        i = qt(t),
        c = i.length;
      if (c != qt(r).length && !a) return !1;
      for (var f = c; f--; ) {
        var s = i[f];
        if (!(a ? s in r : Ht.call(r, s))) return !1;
      }
      var l = u.get(t),
        p = u.get(r);
      if (l && p) return l == r && p == t;
      var v = !0;
      u.set(t, r), u.set(r, t);
      for (var h = a; ++f < c; ) {
        var _ = t[(s = i[f])],
          y = r[s];
        if (n) var b = a ? n(y, _, s, r, t, u) : n(_, y, s, t, r, u);
        if (!(void 0 === b ? _ === y || o(_, y, e, n, u) : b)) {
          v = !1;
          break;
        }
        h || (h = 'constructor' == s);
      }
      if (v && !h) {
        var d = t.constructor,
          j = r.constructor;
        d == j ||
          !('constructor' in t) ||
          !('constructor' in r) ||
          ('function' == typeof d &&
            d instanceof d &&
            'function' == typeof j &&
            j instanceof j) ||
          (v = !1);
      }
      return u.delete(t), u.delete(r), v;
    })(t, r, e, n, o, u))
  );
}
function yr(t, r, e, n, u) {
  return (
    t === r ||
    (null == t || null == r || (!o(t) && !o(r))
      ? t != t && r != r
      : _r(t, r, e, n, yr, u))
  );
}
var br = 1,
  dr = 2;
function jr(r) {
  return r == r && !t(r);
}
function gr(t, r) {
  return function (e) {
    return null != e && e[t] === r && (void 0 !== r || t in Object(e));
  };
}
function Or(t) {
  var r = (function (t) {
    for (var r = Wt(t), e = r.length; e--; ) {
      var n = r[e],
        o = t[n];
      r[e] = [n, o, jr(o)];
    }
    return r;
  })(t);
  return 1 == r.length && r[0][2]
    ? gr(r[0][0], r[0][1])
    : function (e) {
        return (
          e === t ||
          (function (t, r, e, n) {
            var o = e.length,
              u = o,
              a = !n;
            if (null == t) return !u;
            for (t = Object(t); o--; ) {
              var i = e[o];
              if (a && i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
            }
            for (; ++o < u; ) {
              var c = (i = e[o])[0],
                f = t[c],
                s = i[1];
              if (a && i[2]) {
                if (void 0 === f && !(c in t)) return !1;
              } else {
                var l = new I();
                if (n) var p = n(f, s, c, t, r, l);
                if (!(void 0 === p ? yr(s, f, br | dr, n, l) : p)) return !1;
              }
            }
            return !0;
          })(e, t, r)
        );
      };
}
var wr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  mr = /^\w*$/;
function Ar(t, r) {
  if (ct(t)) return !1;
  var e = typeof t;
  return (
    !('number' != e && 'symbol' != e && 'boolean' != e && null != t && !a(t)) ||
    mr.test(t) ||
    !wr.test(t) ||
    (null != r && t in Object(r))
  );
}
var zr = 'Expected a function';
function Pr(t, r) {
  if ('function' != typeof t || (null != r && 'function' != typeof r))
    throw new TypeError(zr);
  var e = function () {
    var n = arguments,
      o = r ? r.apply(this, n) : n[0],
      u = e.cache;
    if (u.has(o)) return u.get(o);
    var a = t.apply(this, n);
    return (e.cache = u.set(o, a) || u), a;
  };
  return (e.cache = new (Pr.Cache || D)()), e;
}
Pr.Cache = D;
var xr =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Sr = /\\(\\)?/g,
  kr = (function (t) {
    var r = Pr(t, function (t) {
        return 500 === e.size && e.clear(), t;
      }),
      e = r.cache;
    return r;
  })(function (t) {
    var r = [];
    return (
      46 === t.charCodeAt(0) && r.push(''),
      t.replace(xr, function (t, e, n, o) {
        r.push(n ? o.replace(Sr, '$1') : e || t);
      }),
      r
    );
  }),
  Er = kr,
  $r = 1 / 0,
  Fr = n ? n.prototype : void 0,
  Br = Fr ? Fr.toString : void 0;
function Mr(t) {
  if ('string' == typeof t) return t;
  if (ct(t)) return i(t, Mr) + '';
  if (a(t)) return Br ? Br.call(t) : '';
  var r = t + '';
  return '0' == r && 1 / t == -$r ? '-0' : r;
}
function Tr(t, r) {
  return ct(t)
    ? t
    : Ar(t, r)
    ? [t]
    : Er(
        (function (t) {
          return null == t ? '' : Mr(t);
        })(t)
      );
}
var Dr = 1 / 0;
function Ir(t) {
  if ('string' == typeof t || a(t)) return t;
  var r = t + '';
  return '0' == r && 1 / t == -Dr ? '-0' : r;
}
function Cr(t, r) {
  for (var e = 0, n = (r = Tr(r, t)).length; null != t && e < n; )
    t = t[Ir(r[e++])];
  return e && e == n ? t : void 0;
}
function Lr(t, r) {
  return null != t && r in Object(t);
}
function Ur(t, r) {
  return (
    null != t &&
    (function (t, r, e) {
      for (var n = -1, o = (r = Tr(r, t)).length, u = !1; ++n < o; ) {
        var a = Ir(r[n]);
        if (!(u = null != t && e(t, a))) break;
        t = t[a];
      }
      return u || ++n != o
        ? u
        : !!(o = null == t ? 0 : t.length) &&
            xt(o) &&
            zt(a, o) &&
            (ct(t) || dt(t));
    })(t, r, Lr)
  );
}
var Rr = 1,
  Vr = 2;
function Nr(t, r) {
  return Ar(t) && jr(r)
    ? gr(Ir(t), r)
    : function (e) {
        var n = (function (t, r, e) {
          var n = null == t ? void 0 : Cr(t, r);
          return void 0 === n ? e : n;
        })(e, t);
        return void 0 === n && n === r ? Ur(e, t) : yr(r, n, Rr | Vr);
      };
}
function Wr(t) {
  return t;
}
function qr(t) {
  return Ar(t)
    ? ((r = Ir(t)),
      function (t) {
        return null == t ? void 0 : t[r];
      })
    : (function (t) {
        return function (r) {
          return Cr(r, t);
        };
      })(t);
  var r;
}
function Gr(t) {
  return 'function' == typeof t
    ? t
    : null == t
    ? Wr
    : 'object' == typeof t
    ? ct(t)
      ? Nr(t[0], t[1])
      : Or(t)
    : qr(t);
}
var Hr = (function () {
    try {
      var t = k(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch (t) {}
  })(),
  Jr = Hr;
var Kr = Object.prototype.hasOwnProperty;
function Qr(t, r, e) {
  var n = t[r];
  (Kr.call(t, r) && c(n, e) && (void 0 !== e || r in t)) ||
    (function (t, r, e) {
      '__proto__' == r && Jr
        ? Jr(t, r, { configurable: !0, enumerable: !0, value: e, writable: !0 })
        : (t[r] = e);
    })(t, r, e);
}
function Xr(r, e, n, o) {
  if (!t(r)) return r;
  for (
    var u = -1, a = (e = Tr(e, r)).length, i = a - 1, c = r;
    null != c && ++u < a;

  ) {
    var f = Ir(e[u]),
      s = n;
    if ('__proto__' === f || 'constructor' === f || 'prototype' === f) return r;
    if (u != i) {
      var l = c[f];
      void 0 === (s = o ? o(l, f, c) : void 0) &&
        (s = t(l) ? l : zt(e[u + 1]) ? [] : {});
    }
    Qr(c, f, s), (c = c[f]);
  }
  return r;
}
var Yr = Ut(Object.getPrototypeOf, Object),
  Zr = Object.getOwnPropertySymbols
    ? function (t) {
        for (var r = []; t; ) it(r, vt(t)), (t = Yr(t));
        return r;
      }
    : st;
var te = Object.prototype.hasOwnProperty;
function re(r) {
  if (!t(r))
    return (function (t) {
      var r = [];
      if (null != t) for (var e in Object(t)) r.push(e);
      return r;
    })(r);
  var e = Lt(r),
    n = [];
  for (var o in r) ('constructor' != o || (!e && te.call(r, o))) && n.push(o);
  return n;
}
function ee(t) {
  return Nt(t) ? It(t, !0) : re(t);
}
function ne(t, r) {
  if (null == t) return {};
  var e = i(
    (function (t) {
      return ft(t, ee, Zr);
    })(t),
    function (t) {
      return [t];
    }
  );
  return (
    (r = Gr(r)),
    (function (t, r, e) {
      for (var n = -1, o = r.length, u = {}; ++n < o; ) {
        var a = r[n],
          i = Cr(t, a);
        e(i, a) && Xr(u, Tr(a, t), i);
      }
      return u;
    })(t, e, function (t, e) {
      return r(t, e[0]);
    })
  );
}
export { Gr as b, Nt as i, Wt as k, ne as p };
