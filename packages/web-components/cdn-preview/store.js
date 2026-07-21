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

import { l as e } from './index.js';
import { _ as r } from './objectSpread2.js';
import { c as t } from './_commonjsHelpers.js';
function n(e, r, t) {
  return (
    (r = (function (e) {
      var r = (function (e, r) {
        if ('object' != typeof e || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, r || 'default');
          if ('object' != typeof n) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === r ? String : Number)(e);
      })(
        /**
         * @license
         *
         * Copyright IBM Corp. 2020, 2024
         *
         * This source code is licensed under the Apache-2.0 license found in the
         * LICENSE file in the root directory of this source tree.
         */ e,
        'string'
      );
      return 'symbol' == typeof r ? r : r + '';
    })(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
const o =
  (e, r, t = () => ({})) =>
  (o) =>
    class extends o {
      _handleChangeStoreState(e) {
        const t = r(e, this);
        Object.keys(t).forEach((e) => {
          const r = this[e],
            n = t[e];
          Object.is(r, n) || ((this[e] = n), this.requestUpdate(e, r));
        });
      }
      constructor(...r) {
        super(...r),
          n(this, '_hStore', null),
          Object.assign(this, t(e.dispatch));
      }
      connectedCallback() {
        super.connectedCallback(), this._handleChangeStoreState(e.getState());
        const r = e.subscribe(() => this._handleChangeStoreState(e.getState()));
        this._hStore = { release: () => (r(), null) };
      }
      disconnectedCallback() {
        this._hStore && (this._hStore = this._hStore.release()),
          super.disconnectedCallback();
      }
    };
function a(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var s = ('function' == typeof Symbol && Symbol.observable) || '@@observable',
  i = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  u = {
    INIT: '@@redux/INIT' + i(),
    REPLACE: '@@redux/REPLACE' + i(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + i();
    },
  };
function c(e, r, t) {
  var n;
  if (
    ('function' == typeof r && 'function' == typeof t) ||
    ('function' == typeof t && 'function' == typeof arguments[3])
  )
    throw new Error(a(0));
  if (
    ('function' == typeof r && void 0 === t && ((t = r), (r = void 0)),
    void 0 !== t)
  ) {
    if ('function' != typeof t) throw new Error(a(1));
    return t(c)(e, r);
  }
  if ('function' != typeof e) throw new Error(a(2));
  var o = e,
    i = r,
    l = [],
    f = l,
    S = !1;
  function E() {
    f === l && (f = l.slice());
  }
  function _() {
    if (S) throw new Error(a(3));
    return i;
  }
  function d(e) {
    if ('function' != typeof e) throw new Error(a(4));
    if (S) throw new Error(a(5));
    var r = !0;
    return (
      E(),
      f.push(e),
      function () {
        if (r) {
          if (S) throw new Error(a(6));
          (r = !1), E();
          var t = f.indexOf(e);
          f.splice(t, 1), (l = null);
        }
      }
    );
  }
  function R(e) {
    if (
      !(function (e) {
        if ('object' != typeof e || null === e) return !1;
        for (var r = e; null !== Object.getPrototypeOf(r); )
          r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(e) === r;
      })(e)
    )
      throw new Error(a(7));
    if (void 0 === e.type) throw new Error(a(8));
    if (S) throw new Error(a(9));
    try {
      (S = !0), (i = o(i, e));
    } finally {
      S = !1;
    }
    for (var r = (l = f), t = 0; t < r.length; t++) {
      (0, r[t])();
    }
    return e;
  }
  return (
    R({ type: u.INIT }),
    ((n = {
      dispatch: R,
      subscribe: d,
      getState: _,
      replaceReducer: function (e) {
        if ('function' != typeof e) throw new Error(a(10));
        (o = e), R({ type: u.REPLACE });
      },
    })[s] = function () {
      var e,
        r = d;
      return (
        ((e = {
          subscribe: function (e) {
            if ('object' != typeof e || null === e) throw new Error(a(11));
            function t() {
              e.next && e.next(_());
            }
            return t(), { unsubscribe: r(t) };
          },
        })[s] = function () {
          return this;
        }),
        e
      );
    }),
    n
  );
}
function l(e, r) {
  return function () {
    return r(e.apply(this, arguments));
  };
}
function f(e, r) {
  if ('function' == typeof e) return l(e, r);
  if ('object' != typeof e || null === e) throw new Error(a(16));
  var t = {};
  for (var n in e) {
    var o = e[n];
    'function' == typeof o && (t[n] = l(o, r));
  }
  return t;
}
function S() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return 0 === r.length
    ? function (e) {
        return e;
      }
    : 1 === r.length
    ? r[0]
    : r.reduce(function (e, r) {
        return function () {
          return e(r.apply(void 0, arguments));
        };
      });
}
function E() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (e) {
    return function () {
      var n = e.apply(void 0, arguments),
        o = function () {
          throw new Error(a(15));
        },
        s = {
          getState: n.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        i = t.map(function (e) {
          return e(s);
        });
      return (
        (o = S.apply(void 0, i)(n.dispatch)), r(r({}, n), {}, { dispatch: o })
      );
    };
  };
}
function _(e) {
  return function (r) {
    var t = r.dispatch,
      n = r.getState;
    return function (r) {
      return function (o) {
        return 'function' == typeof o ? o(t, n, e) : r(o);
      };
    };
  };
}
var d = _();
d.withExtraArgument = _;
var R = d,
  h = { exports: {} };
!(function (e) {
  function r(e, r) {
    (e.super_ = r),
      (e.prototype = Object.create(r.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }));
  }
  function n(e, r) {
    Object.defineProperty(this, 'kind', { value: e, enumerable: !0 }),
      r &&
        r.length &&
        Object.defineProperty(this, 'path', { value: r, enumerable: !0 });
  }
  function o(e, r, t) {
    o.super_.call(this, 'E', e),
      Object.defineProperty(this, 'lhs', { value: r, enumerable: !0 }),
      Object.defineProperty(this, 'rhs', { value: t, enumerable: !0 });
  }
  function a(e, r) {
    a.super_.call(this, 'N', e),
      Object.defineProperty(this, 'rhs', { value: r, enumerable: !0 });
  }
  function s(e, r) {
    s.super_.call(this, 'D', e),
      Object.defineProperty(this, 'lhs', { value: r, enumerable: !0 });
  }
  function i(e, r, t) {
    i.super_.call(this, 'A', e),
      Object.defineProperty(this, 'index', { value: r, enumerable: !0 }),
      Object.defineProperty(this, 'item', { value: t, enumerable: !0 });
  }
  function u(e, r, t) {
    var n = e.slice((t || r) + 1 || e.length);
    return (e.length = r < 0 ? e.length + r : r), e.push.apply(e, n), e;
  }
  function c(e) {
    var r = void 0 === e ? 'undefined' : P(e);
    return 'object' !== r
      ? r
      : e === Math
      ? 'math'
      : null === e
      ? 'null'
      : Array.isArray(e)
      ? 'array'
      : '[object Date]' === Object.prototype.toString.call(e)
      ? 'date'
      : 'function' == typeof e.toString && /^\/.*\//.test(e.toString())
      ? 'regexp'
      : 'object';
  }
  function l(e, r, t, n, f, S, E) {
    E = E || [];
    var _ = (f = f || []).slice(0);
    if (void 0 !== S) {
      if (n) {
        if ('function' == typeof n && n(_, S)) return;
        if ('object' === (void 0 === n ? 'undefined' : P(n))) {
          if (n.prefilter && n.prefilter(_, S)) return;
          if (n.normalize) {
            var d = n.normalize(_, S, e, r);
            d && ((e = d[0]), (r = d[1]));
          }
        }
      }
      _.push(S);
    }
    'regexp' === c(e) &&
      'regexp' === c(r) &&
      ((e = e.toString()), (r = r.toString()));
    var R = void 0 === e ? 'undefined' : P(e),
      h = void 0 === r ? 'undefined' : P(r),
      g =
        'undefined' !== R ||
        (E && E[E.length - 1].lhs && E[E.length - 1].lhs.hasOwnProperty(S)),
      p =
        'undefined' !== h ||
        (E && E[E.length - 1].rhs && E[E.length - 1].rhs.hasOwnProperty(S));
    if (!g && p) t(new a(_, r));
    else if (!p && g) t(new s(_, e));
    else if (c(e) !== c(r)) t(new o(_, e, r));
    else if ('date' === c(e) && e - r != 0) t(new o(_, e, r));
    else if ('object' === R && null !== e && null !== r)
      if (
        E.filter(function (r) {
          return r.lhs === e;
        }).length
      )
        e !== r && t(new o(_, e, r));
      else {
        if ((E.push({ lhs: e, rhs: r }), Array.isArray(e))) {
          var T;
          for (e.length, T = 0; T < e.length; T++)
            T >= r.length
              ? t(new i(_, T, new s(void 0, e[T])))
              : l(e[T], r[T], t, n, _, T, E);
          for (; T < r.length; ) t(new i(_, T, new a(void 0, r[T++])));
        } else {
          var v = Object.keys(e),
            A = Object.keys(r);
          v.forEach(function (o, a) {
            var s = A.indexOf(o);
            s >= 0
              ? (l(e[o], r[o], t, n, _, o, E), (A = u(A, s)))
              : l(e[o], void 0, t, n, _, o, E);
          }),
            A.forEach(function (e) {
              l(void 0, r[e], t, n, _, e, E);
            });
        }
        E.length = E.length - 1;
      }
    else
      e !== r &&
        (('number' === R && isNaN(e) && isNaN(r)) || t(new o(_, e, r)));
  }
  function f(e, r, t, n) {
    return (
      (n = n || []),
      l(
        e,
        r,
        function (e) {
          e && n.push(e);
        },
        t
      ),
      n.length ? n : void 0
    );
  }
  function S(e, r, t) {
    if (t.path && t.path.length) {
      var n,
        o = e[r],
        a = t.path.length - 1;
      for (n = 0; n < a; n++) o = o[t.path[n]];
      switch (t.kind) {
        case 'A':
          S(o[t.path[n]], t.index, t.item);
          break;
        case 'D':
          delete o[t.path[n]];
          break;
        case 'E':
        case 'N':
          o[t.path[n]] = t.rhs;
      }
    } else
      switch (t.kind) {
        case 'A':
          S(e[r], t.index, t.item);
          break;
        case 'D':
          e = u(e, r);
          break;
        case 'E':
        case 'N':
          e[r] = t.rhs;
      }
    return e;
  }
  function E(e, r, t) {
    if (e && r && t && t.kind) {
      for (var n = e, o = -1, a = t.path ? t.path.length - 1 : 0; ++o < a; )
        void 0 === n[t.path[o]] &&
          (n[t.path[o]] = 'number' == typeof t.path[o] ? [] : {}),
          (n = n[t.path[o]]);
      switch (t.kind) {
        case 'A':
          S(t.path ? n[t.path[o]] : n, t.index, t.item);
          break;
        case 'D':
          delete n[t.path[o]];
          break;
        case 'E':
        case 'N':
          n[t.path[o]] = t.rhs;
      }
    }
  }
  function _(e, r, t) {
    if (t.path && t.path.length) {
      var n,
        o = e[r],
        a = t.path.length - 1;
      for (n = 0; n < a; n++) o = o[t.path[n]];
      switch (t.kind) {
        case 'A':
          _(o[t.path[n]], t.index, t.item);
          break;
        case 'D':
        case 'E':
          o[t.path[n]] = t.lhs;
          break;
        case 'N':
          delete o[t.path[n]];
      }
    } else
      switch (t.kind) {
        case 'A':
          _(e[r], t.index, t.item);
          break;
        case 'D':
        case 'E':
          e[r] = t.lhs;
          break;
        case 'N':
          e = u(e, r);
      }
    return e;
  }
  function d(e, r, t) {
    if (e && r && t && t.kind) {
      var n,
        o,
        a = e;
      for (o = t.path.length - 1, n = 0; n < o; n++)
        void 0 === a[t.path[n]] && (a[t.path[n]] = {}), (a = a[t.path[n]]);
      switch (t.kind) {
        case 'A':
          _(a[t.path[n]], t.index, t.item);
          break;
        case 'D':
        case 'E':
          a[t.path[n]] = t.lhs;
          break;
        case 'N':
          delete a[t.path[n]];
      }
    }
  }
  function R(e, r, t) {
    e &&
      r &&
      l(e, r, function (n) {
        (t && !t(e, r, n)) || E(e, r, n);
      });
  }
  function h(e) {
    return 'color: ' + D[e].color + '; font-weight: bold';
  }
  function g(e) {
    var r = e.kind,
      t = e.path,
      n = e.lhs,
      o = e.rhs,
      a = e.index,
      s = e.item;
    switch (r) {
      case 'E':
        return [t.join('.'), n, '→', o];
      case 'N':
        return [t.join('.'), o];
      case 'D':
        return [t.join('.')];
      case 'A':
        return [t.join('.') + '[' + a + ']', s];
      default:
        return [];
    }
  }
  function p(e, r, t, n) {
    var o = f(e, r);
    try {
      n ? t.groupCollapsed('diff') : t.group('diff');
    } catch (e) {
      t.log('diff');
    }
    o
      ? o.forEach(function (e) {
          var r = e.kind,
            n = g(e);
          t.log.apply(t, ['%c ' + D[r].text, h(r)].concat(w(n)));
        })
      : t.log('—— no diff ——');
    try {
      t.groupEnd();
    } catch (e) {
      t.log('—— diff end —— ');
    }
  }
  function T(e, r, t, n) {
    switch (void 0 === e ? 'undefined' : P(e)) {
      case 'object':
        return 'function' == typeof e[n] ? e[n].apply(e, w(t)) : e[n];
      case 'function':
        return e(r);
      default:
        return e;
    }
  }
  function v(e) {
    var r = e.timestamp,
      t = e.duration;
    return function (e, n, o) {
      var a = ['action'];
      return (
        a.push('%c' + String(e.type)),
        r && a.push('%c@ ' + n),
        t && a.push('%c(in ' + o.toFixed(2) + ' ms)'),
        a.join(' ')
      );
    };
  }
  function A(e, r) {
    var t = r.logger,
      n = r.actionTransformer,
      o = r.titleFormatter,
      a = void 0 === o ? v(r) : o,
      s = r.collapsed,
      i = r.colors,
      u = r.level,
      c = r.diff,
      l = void 0 === r.titleFormatter;
    e.forEach(function (o, f) {
      var S = o.started,
        E = o.startedTime,
        _ = o.action,
        d = o.prevState,
        R = o.error,
        h = o.took,
        g = o.nextState,
        v = e[f + 1];
      v && ((g = v.prevState), (h = v.started - S));
      var A = n(_),
        y =
          'function' == typeof s
            ? s(
                function () {
                  return g;
                },
                _,
                o
              )
            : s,
        b = I(E),
        L = i.title ? 'color: ' + i.title(A) + ';' : '',
        O = ['color: gray; font-weight: lighter;'];
      O.push(L),
        r.timestamp && O.push('color: gray; font-weight: lighter;'),
        r.duration && O.push('color: gray; font-weight: lighter;');
      var U = a(A, b, h);
      try {
        y
          ? i.title && l
            ? t.groupCollapsed.apply(t, ['%c ' + U].concat(O))
            : t.groupCollapsed(U)
          : i.title && l
          ? t.group.apply(t, ['%c ' + U].concat(O))
          : t.group(U);
      } catch (e) {
        t.log(U);
      }
      var m = T(u, A, [d], 'prevState'),
        P = T(u, A, [A], 'action'),
        w = T(u, A, [R, d], 'error'),
        N = T(u, A, [g], 'nextState');
      if (m)
        if (i.prevState) {
          var D = 'color: ' + i.prevState(d) + '; font-weight: bold';
          t[m]('%c prev state', D, d);
        } else t[m]('prev state', d);
      if (P)
        if (i.action) {
          var q = 'color: ' + i.action(A) + '; font-weight: bold';
          t[P]('%c action    ', q, A);
        } else t[P]('action    ', A);
      if (R && w)
        if (i.error) {
          var x = 'color: ' + i.error(R, d) + '; font-weight: bold;';
          t[w]('%c error     ', x, R);
        } else t[w]('error     ', R);
      if (N)
        if (i.nextState) {
          var G = 'color: ' + i.nextState(g) + '; font-weight: bold';
          t[N]('%c next state', G, g);
        } else t[N]('next state', g);
      c && p(d, g, t, y);
      try {
        t.groupEnd();
      } catch (e) {
        t.log('—— log end ——');
      }
    });
  }
  function y() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = Object.assign({}, q, e),
      t = r.logger,
      n = r.stateTransformer,
      o = r.errorTransformer,
      a = r.predicate,
      s = r.logErrors,
      i = r.diffPredicate;
    if (void 0 === t)
      return function () {
        return function (e) {
          return function (r) {
            return e(r);
          };
        };
      };
    if (e.getState && e.dispatch)
      return (
        console.error(
          "[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"
        ),
        function () {
          return function (e) {
            return function (r) {
              return e(r);
            };
          };
        }
      );
    var u = [];
    return function (e) {
      var t = e.getState;
      return function (e) {
        return function (c) {
          if ('function' == typeof a && !a(t, c)) return e(c);
          var l = {};
          u.push(l),
            (l.started = m.now()),
            (l.startedTime = new Date()),
            (l.prevState = n(t())),
            (l.action = c);
          var f = void 0;
          if (s)
            try {
              f = e(c);
            } catch (e) {
              l.error = o(e);
            }
          else f = e(c);
          (l.took = m.now() - l.started), (l.nextState = n(t()));
          var S = r.diff && 'function' == typeof i ? i(t, c) : r.diff;
          if (
            (A(u, Object.assign({}, r, { diff: S })), (u.length = 0), l.error)
          )
            throw l.error;
          return f;
        };
      };
    };
  }
  var b,
    L,
    O = function (e, r) {
      return new Array(r + 1).join(e);
    },
    U = function (e, r) {
      return O('0', r - e.toString().length) + e;
    },
    I = function (e) {
      return (
        U(e.getHours(), 2) +
        ':' +
        U(e.getMinutes(), 2) +
        ':' +
        U(e.getSeconds(), 2) +
        '.' +
        U(e.getMilliseconds(), 3)
      );
    },
    m =
      'undefined' != typeof performance &&
      null !== performance &&
      'function' == typeof performance.now
        ? performance
        : Date,
    P =
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
          },
    w = function (e) {
      if (Array.isArray(e)) {
        for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
      }
      return Array.from(e);
    },
    N = [];
  (b =
    'object' === (void 0 === t ? 'undefined' : P(t)) && t
      ? t
      : 'undefined' != typeof window
      ? window
      : {}),
    (L = b.DeepDiff) &&
      N.push(function () {
        void 0 !== L && b.DeepDiff === f && ((b.DeepDiff = L), (L = void 0));
      }),
    r(o, n),
    r(a, n),
    r(s, n),
    r(i, n),
    Object.defineProperties(f, {
      diff: { value: f, enumerable: !0 },
      observableDiff: { value: l, enumerable: !0 },
      applyDiff: { value: R, enumerable: !0 },
      applyChange: { value: E, enumerable: !0 },
      revertChange: { value: d, enumerable: !0 },
      isConflict: {
        value: function () {
          return void 0 !== L;
        },
        enumerable: !0,
      },
      noConflict: {
        value: function () {
          return (
            N &&
              (N.forEach(function (e) {
                e();
              }),
              (N = null)),
            f
          );
        },
        enumerable: !0,
      },
    });
  var D = {
      E: { color: '#2196F3', text: 'CHANGED:' },
      N: { color: '#4CAF50', text: 'ADDED:' },
      D: { color: '#F44336', text: 'DELETED:' },
      A: { color: '#2196F3', text: 'ARRAY:' },
    },
    q = {
      level: 'log',
      logger: console,
      logErrors: !0,
      collapsed: void 0,
      predicate: void 0,
      duration: !1,
      timestamp: !0,
      stateTransformer: function (e) {
        return e;
      },
      actionTransformer: function (e) {
        return e;
      },
      errorTransformer: function (e) {
        return e;
      },
      colors: {
        title: function () {
          return 'inherit';
        },
        prevState: function () {
          return '#9E9E9E';
        },
        action: function () {
          return '#03A9F4';
        },
        nextState: function () {
          return '#4CAF50';
        },
        error: function () {
          return '#F20404';
        },
      },
      diff: !1,
      diffPredicate: void 0,
      transformer: void 0,
    },
    x = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.dispatch,
        t = e.getState;
      return 'function' == typeof r || 'function' == typeof t
        ? y()({ dispatch: r, getState: t })
        : void console.error(
            "\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"
          );
    };
  (e.defaults = q),
    (e.createLogger = y),
    (e.logger = x),
    (e.default = x),
    Object.defineProperty(e, '__esModule', { value: !0 });
})(h.exports);
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let g = (function (e) {
  return (
    (e.SET_REQUEST_LANGUAGE_IN_PROGRESS = 'SET_REQUEST_LANGUAGE_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_LANGUAGE = 'SET_ERROR_REQUEST_LANGUAGE'),
    (e.SET_LANGUAGE = 'SET_LANGUAGE'),
    (e.SET_REQUEST_LANG_DISPLAY_IN_PROGRESS =
      'SET_REQUEST_LANG_DISPLAY_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_LANG_DISPLAY = 'SET_ERROR_REQUEST_LANG_DISPLAY'),
    (e.SET_LANG_DISPLAY = 'SET_LANG_DISPLAY'),
    (e.SET_REQUEST_LOCALE_LIST_IN_PROGRESS =
      'SET_REQUEST_LOCALE_LIST_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_LOCALE_LIST = 'SET_ERROR_REQUEST_LOCALE_LIST'),
    (e.SET_LOCALE_LIST = 'SET_LOCALE_LIST'),
    e
  );
})({});
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let p = (function (e) {
  return (
    (e.SET_REQUEST_TRANSLATION_IN_PROGRESS =
      'SET_REQUEST_TRANSLATION_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_TRANSLATION = 'SET_ERROR_REQUEST_TRANSLATION'),
    (e.SET_TRANSLATION = 'SET_TRANSLATION'),
    e
  );
})({});
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
const T = 'Unauthenticated',
  v = 'anonymous';
let A = (function (e) {
    return (
      (e.SET_REQUEST_USER_STATUS_IN_PROGRESS =
        'SET_REQUEST_USER_STATUS_IN_PROGRESS'),
      (e.SET_ERROR_REQUEST_USER_STATUS = 'SET_ERROR_REQUEST_USER_STATUS'),
      (e.SET_USER_STATUS = 'SET_USER_STATUS'),
      e
    );
  })({}),
  y = (function (e) {
    return (
      (e.DEFAULT = 'profile-api'),
      (e.COOKIE = 'cookie'),
      (e.DOCS_API = 'docs-api'),
      e
    );
  })({});
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let b = (function (e) {
  return (
    (e.SET_CURRENT_SEARCH_QUERY_STRING = 'SET_CURRENT_SEARCH_QUERY_STRING'),
    (e.SET_REQUEST_SEARCH_RESULTS_IN_PROGRESS =
      'SET_REQUEST_SEARCH_RESULTS_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_SEARCH_RESULTS = 'SET_ERROR_REQUEST_SEARCH_RESULTS'),
    (e.SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'),
    e
  );
})({});
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let L = (function (e) {
  return (
    (e.SET_REQUEST_MEDIA_DATA_IN_PROGRESS =
      'SET_REQUEST_MEDIA_DATA_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_MEDIA_DATA = 'SET_ERROR_REQUEST_MEDIA_DATA'),
    (e.SET_MEDIA_DATA = 'SET_MEDIA_DATA'),
    e
  );
})({});
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
let O = (function (e) {
  return (
    (e.SET_REQUEST_USER_STATUS_IN_PROGRESS =
      'SET_REQUEST_USER_STATUS_IN_PROGRESS'),
    (e.SET_ERROR_REQUEST_USER_STATUS = 'SET_ERROR_REQUEST_USER_STATUS'),
    (e.SET_USER_STATUS = 'SET_USER_STATUS'),
    e
  );
})({});
/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
const U = (function (e) {
    for (var r = Object.keys(e), t = {}, n = 0; n < r.length; n++) {
      var o = r[n];
      'function' == typeof e[o] && (t[o] = e[o]);
    }
    var s,
      i = Object.keys(t);
    try {
      !(function (e) {
        Object.keys(e).forEach(function (r) {
          var t = e[r];
          if (void 0 === t(void 0, { type: u.INIT })) throw new Error(a(12));
          if (void 0 === t(void 0, { type: u.PROBE_UNKNOWN_ACTION() }))
            throw new Error(a(13));
        });
      })(t);
    } catch (e) {
      s = e;
    }
    return function (e, r) {
      if ((void 0 === e && (e = {}), s)) throw s;
      for (var n = !1, o = {}, u = 0; u < i.length; u++) {
        var c = i[u],
          l = t[c],
          f = e[c],
          S = l(f, r);
        if (void 0 === S) throw (r && r.type, new Error(a(14)));
        (o[c] = S), (n = n || S !== f);
      }
      return (n = n || i.length !== Object.keys(e).length) ? o : e;
    };
  })({
    localeAPI: function (e = {}, r) {
      switch (r.type) {
        case g.SET_REQUEST_LANGUAGE_IN_PROGRESS: {
          const { request: t } = r;
          return { ...e, requestLanguageInProgress: !0, requestLanguage: t };
        }
        case g.SET_ERROR_REQUEST_LANGUAGE: {
          const { error: t } = r;
          return {
            ...e,
            requestLanguageInProgress: !1,
            errorRequestLanguage: t,
          };
        }
        case g.SET_LANGUAGE: {
          const { language: t } = r;
          return {
            ...e,
            requestLanguage: Promise.resolve(t),
            requestLanguageInProgress: !1,
            language: t,
          };
        }
        case g.SET_REQUEST_LOCALE_LIST_IN_PROGRESS: {
          const { language: t, request: n } = r;
          return {
            ...e,
            requestsLocaleListInProgress: {
              ...(e.requestsLocaleListInProgress || {}),
              [t]: !0,
            },
            requestsLocaleList: { ...(e.requestsLocaleList || {}), [t]: n },
          };
        }
        case g.SET_ERROR_REQUEST_LOCALE_LIST: {
          const { language: t, error: n } = r;
          return {
            ...e,
            requestsLocaleListInProgress: {
              ...(e.requestsLocaleListInProgress || {}),
              [t]: !1,
            },
            errorsRequestLocaleList: {
              ...(e.errorsRequestLocaleList || {}),
              [t]: n,
            },
          };
        }
        case g.SET_LOCALE_LIST: {
          const { language: t, localeList: n } = r;
          return {
            ...e,
            requestsLocaleListInProgress: {
              ...(e.requestsLocaleListInProgress || {}),
              [t]: !1,
            },
            requestsLocaleList: {
              ...(e.requestsLocaleList || {}),
              [t]: Promise.resolve(n),
            },
            localeLists: { ...(e.localeLists || {}), [t]: n },
          };
        }
        default:
          return e;
      }
    },
    translateAPI: function (e = {}, r) {
      switch (r.type) {
        case p.SET_REQUEST_TRANSLATION_IN_PROGRESS: {
          const { language: t, request: n, endpoint: o } = r;
          return {
            ...e,
            requestsTranslationInProgress: {
              ...(e.requestsTranslationInProgress || {}),
              [t]: !0,
            },
            requestsTranslation: {
              ...(e.requestsTranslation || {}),
              [t]: n,
              endpoint: o,
            },
          };
        }
        case p.SET_ERROR_REQUEST_TRANSLATION: {
          const { language: t, error: n } = r;
          return {
            ...e,
            requestsTranslationInProgress: {
              ...(e.requestsTranslationInProgress || {}),
              [t]: !1,
            },
            errorsRequestTranslation: {
              ...(e.errorsRequestTranslation || {}),
              [t]: n,
            },
          };
        }
        case p.SET_TRANSLATION: {
          const { language: t, translation: n, endpoint: o } = r;
          return {
            ...e,
            requestsTranslationInProgress: {
              ...(e.requestsTranslationInProgress || {}),
              [t]: !1,
            },
            requestsTranslation: {
              ...(e.requestsTranslation || {}),
              [t]: Promise.resolve(n),
              endpoint: o,
            },
            translations: { ...(e.translations || {}), [t]: n },
          };
        }
        default:
          return e;
      }
    },
    profileAPI:
      /**
       * @license
       *
       * Copyright IBM Corp. 2020, 2022
       *
       * This source code is licensed under the Apache-2.0 license found in the
       * LICENSE file in the root directory of this source tree.
       */
      /**
       * @license
       *
       * Copyright IBM Corp. 2020, 2022
       *
       * This source code is licensed under the Apache-2.0 license found in the
       * LICENSE file in the root directory of this source tree.
       */
      function (e = {}, r) {
        switch (r.type) {
          case A.SET_ERROR_REQUEST_USER_STATUS: {
            const { error: t } = r;
            return { ...e, errorGetUserStatus: t };
          }
          case A.SET_USER_STATUS: {
            const { request: t } = r;
            return { ...e, request: t };
          }
          default:
            return e;
        }
      },
    searchAPI: function (e = {}, r) {
      switch (r.type) {
        case b.SET_CURRENT_SEARCH_QUERY_STRING: {
          const { searchQueryString: t } = r;
          return { ...e, currentSearchQueryString: t };
        }
        case b.SET_REQUEST_SEARCH_RESULTS_IN_PROGRESS: {
          var t, n;
          const { language: o, searchQueryString: a, request: s } = r,
            {
              requestsSearchResultsInProgress: i = {},
              requestsSearchResults: u = {},
            } = e;
          return {
            ...e,
            requestsSearchResultsInProgress: {
              ...i,
              [a]: {
                ...(null !== (t = i[a]) && void 0 !== t ? t : {}),
                [o]: !0,
              },
            },
            requestsSearchResults: {
              ...u,
              [a]: {
                ...(null !== (n = u[a]) && void 0 !== n ? n : {}),
                [o]: s,
              },
            },
          };
        }
        case b.SET_ERROR_REQUEST_SEARCH_RESULTS: {
          var o, a;
          const { language: t, searchQueryString: n, error: s } = r,
            {
              requestsSearchResultsInProgress: i = {},
              errorsRequestSearchResults: u = {},
            } = e;
          return {
            ...e,
            requestsSearchResultsInProgress: {
              ...i,
              [n]: {
                ...(null !== (o = i[n]) && void 0 !== o ? o : {}),
                [t]: !1,
              },
            },
            errorsRequestSearchResults: {
              ...u,
              [n]: {
                ...(null !== (a = u[n]) && void 0 !== a ? a : {}),
                [t]: s,
              },
            },
          };
        }
        case b.SET_SEARCH_RESULTS: {
          var s, i, u;
          const { language: t, searchQueryString: n, results: o } = r,
            {
              requestsSearchResultsInProgress: a = {},
              requestsSearchResults: c = {},
              searchResults: l = {},
            } = e;
          return {
            ...e,
            requestsSearchResultsInProgress: {
              ...a,
              [n]: {
                ...(null !== (s = a[n]) && void 0 !== s ? s : {}),
                [t]: !1,
              },
            },
            requestsSearchResults: {
              ...c,
              [n]: {
                ...(null !== (i = c[n]) && void 0 !== i ? i : {}),
                [t]: Promise.resolve(o),
              },
            },
            searchResults: {
              ...l,
              [n]: {
                ...(null !== (u = l[n]) && void 0 !== u ? u : {}),
                [t]: o,
              },
            },
          };
        }
        default:
          return e;
      }
    },
    kalturaPlayerAPI: function (e = {}, r) {
      switch (r.type) {
        case L.SET_REQUEST_MEDIA_DATA_IN_PROGRESS: {
          const { mediaId: t, request: n } = r;
          return {
            ...e,
            requestsMediaDataInProgress: {
              ...(e.requestsMediaDataInProgress || {}),
              [t]: !0,
            },
            requestsMediaData: { ...(e.requestsMediaData || {}), [t]: n },
          };
        }
        case L.SET_ERROR_REQUEST_MEDIA_DATA: {
          const { mediaId: t, error: n } = r;
          return {
            ...e,
            requestsMediaDataInProgress: {
              ...(e.requestsMediaDataInProgress || {}),
              [t]: !1,
            },
            errorsRequestMediaData: {
              ...(e.errorsRequestMediaData || {}),
              [t]: n,
            },
          };
        }
        case L.SET_MEDIA_DATA: {
          const { mediaId: t, mediaData: n } = r;
          return {
            ...e,
            requestsMediaDataInProgress: {
              ...(e.requestsMediaDataInProgress || {}),
              [t]: !1,
            },
            requestsMediaData: {
              ...(e.requestsMediaData || {}),
              [t]: Promise.resolve(n),
            },
            mediaData: { ...(e.mediaData || {}), [t]: n },
          };
        }
        default:
          return e;
      }
    },
    cloudAccountAuthAPI: function (e = {}, r) {
      switch (r.type) {
        case O.SET_ERROR_REQUEST_USER_STATUS: {
          const { error: t } = r;
          return { ...e, errorGetUserStatus: t };
        }
        case O.SET_USER_STATUS: {
          const { request: t } = r;
          return { ...e, request: t };
        }
        default:
          return e;
      }
    },
  }),
  I = [R];
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ const m = (function (r = e.__PRELOADED_STATE__) {
  return c(U, null != r ? r : {}, E(...I));
})();
export {
  o as C,
  g as L,
  y as M,
  A as P,
  p as T,
  T as U,
  v as a,
  f as b,
  L as c,
  m as s,
};
