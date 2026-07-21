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

var t = {
  version: 'Carbon for IBM.com v2.36.0',
  stablePrefix: 'c4d',
  prefix: 'cds',
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = window,
  i =
    e.ShadowRoot &&
    (void 0 === e.ShadyCSS || e.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  s = Symbol(),
  n = new WeakMap();
class o {
  constructor(t, e, i) {
    if (((this._$cssResult$ = !0), i !== s))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (i && void 0 === t) {
      const i = void 0 !== e && 1 === e.length;
      i && (t = n.get(e)),
        void 0 === t &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && n.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const r = (t, ...e) => {
    const i =
      1 === t.length
        ? t[0]
        : e.reduce(
            (e, i, s) =>
              e +
              ((t) => {
                if (!0 === t._$cssResult$) return t.cssText;
                if ('number' == typeof t) return t;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    t +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              t[s + 1],
            t[0]
          );
    return new o(i, t, s);
  },
  l = i
    ? (t) => t
    : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
              let e = '';
              for (const i of t.cssRules) e += i.cssText;
              return ((t) =>
                new o('string' == typeof t ? t : t + '', void 0, s))(e);
            })(t)
          : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var h;
const a = window,
  d = a.trustedTypes,
  c = d ? d.emptyScript : '',
  u = a.reactiveElementPolyfillSupport,
  p = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? c : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      let i = t;
      switch (e) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    },
  },
  v = (t, e) => e !== t && (e == e || t == t),
  $ = { attribute: !0, type: String, converter: p, reflect: !1, hasChanged: v },
  _ = 'finalized';
class f extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this._$Eu();
  }
  static addInitializer(t) {
    var e;
    this.finalize(),
      (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((e, i) => {
        const s = this._$Ep(i, e);
        void 0 !== s && (this._$Ev.set(s, i), t.push(s));
      }),
      t
    );
  }
  static createProperty(t, e = $) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = 'symbol' == typeof t ? Symbol() : '__' + t,
        s = this.getPropertyDescriptor(t, i, e);
      void 0 !== s && Object.defineProperty(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(s) {
        const n = this[t];
        (this[e] = s), this.requestUpdate(t, n, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || $;
  }
  static finalize() {
    if (this.hasOwnProperty(_)) return !1;
    this[_] = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      void 0 !== t.h && (this.h = [...t.h]),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty('properties'))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...Object.getOwnPropertySymbols(t),
        ];
      for (const i of e) this.createProperty(i, t[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const t of i) e.unshift(l(t));
    } else void 0 !== t && e.push(l(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return !1 === i
      ? void 0
      : 'string' == typeof i
      ? i
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  _$Eu() {
    var t;
    (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      null === (t = this.constructor.h) ||
        void 0 === t ||
        t.forEach((t) => t(this));
  }
  addController(t) {
    var e, i;
    (null !== (e = this._$ES) && void 0 !== e ? e : (this._$ES = [])).push(t),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (i = t.hostConnected) || void 0 === i || i.call(t));
  }
  removeController(t) {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const s =
      null !== (t = this.shadowRoot) && void 0 !== t
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((t, s) => {
        i
          ? (t.adoptedStyleSheets = s.map((t) =>
              t instanceof CSSStyleSheet ? t : t.styleSheet
            ))
          : s.forEach((i) => {
              const s = document.createElement('style'),
                n = e.litNonce;
              void 0 !== n && s.setAttribute('nonce', n),
                (s.textContent = i.cssText),
                t.appendChild(s);
            });
      })(s, this.constructor.elementStyles),
      s
    );
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((t) => {
          var e;
          return null === (e = t.hostConnected) || void 0 === e
            ? void 0
            : e.call(t);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.forEach((t) => {
        var e;
        return null === (e = t.hostDisconnected) || void 0 === e
          ? void 0
          : e.call(t);
      });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = $) {
    var s;
    const n = this.constructor._$Ep(t, i);
    if (void 0 !== n && !0 === i.reflect) {
      const o = (
        void 0 !==
        (null === (s = i.converter) || void 0 === s ? void 0 : s.toAttribute)
          ? i.converter
          : p
      ).toAttribute(e, i.type);
      (this._$El = t),
        null == o ? this.removeAttribute(n) : this.setAttribute(n, o),
        (this._$El = null);
    }
  }
  _$AK(t, e) {
    var i;
    const s = this.constructor,
      n = s._$Ev.get(t);
    if (void 0 !== n && this._$El !== n) {
      const t = s.getPropertyOptions(n),
        o =
          'function' == typeof t.converter
            ? { fromAttribute: t.converter }
            : void 0 !==
              (null === (i = t.converter) || void 0 === i
                ? void 0
                : i.fromAttribute)
            ? t.converter
            : p;
      (this._$El = n),
        (this[n] = o.fromAttribute(e, t.type)),
        (this._$El = null);
    }
  }
  requestUpdate(t, e, i) {
    let s = !0;
    void 0 !== t &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || v)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          !0 === i.reflect &&
            this._$El !== t &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(t, i)))
        : (s = !1)),
      !this.isUpdatePending && s && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((t, e) => (this[e] = t)), (this._$Ei = void 0));
    let e = !1;
    const i = this._$AL;
    try {
      (e = this.shouldUpdate(i)),
        e
          ? (this.willUpdate(i),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostUpdate) || void 0 === e
                  ? void 0
                  : e.call(t);
              }),
            this.update(i))
          : this._$Ek();
    } catch (t) {
      throw ((e = !1), this._$Ek(), t);
    }
    e && this._$AE(i);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    null === (e = this._$ES) ||
      void 0 === e ||
      e.forEach((t) => {
        var e;
        return null === (e = t.hostUpdated) || void 0 === e
          ? void 0
          : e.call(t);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var A;
(f[_] = !0),
  (f.elementProperties = new Map()),
  (f.elementStyles = []),
  (f.shadowRootOptions = { mode: 'open' }),
  null == u || u({ ReactiveElement: f }),
  (null !== (h = a.reactiveElementVersions) && void 0 !== h
    ? h
    : (a.reactiveElementVersions = [])
  ).push('1.6.3');
const y = window,
  m = y.trustedTypes,
  g = m ? m.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
  E = '$lit$',
  S = `lit$${(Math.random() + '').slice(9)}$`,
  b = '?' + S,
  C = `<${b}>`,
  w = document,
  x = () => w.createComment(''),
  P = (t) => null === t || ('object' != typeof t && 'function' != typeof t),
  U = Array.isArray,
  H = '[ \t\n\f\r]',
  N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  k = /-->/g,
  T = />/g,
  O = RegExp(
    `>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    'g'
  ),
  R = /'/g,
  M = /"/g,
  L = /^(?:script|style|textarea|title)$/i,
  j =
    (t) =>
    (e, ...i) => ({ _$litType$: t, strings: e, values: i }),
  z = j(1),
  B = j(2),
  D = Symbol.for('lit-noChange'),
  I = Symbol.for('lit-nothing'),
  V = new WeakMap(),
  W = w.createTreeWalker(w, 129, null, !1);
function q(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty('raw'))
    throw Error('invalid template strings array');
  return void 0 !== g ? g.createHTML(e) : e;
}
const K = (t, e) => {
  const i = t.length - 1,
    s = [];
  let n,
    o = 2 === e ? '<svg>' : '',
    r = N;
  for (let e = 0; e < i; e++) {
    const i = t[e];
    let l,
      h,
      a = -1,
      d = 0;
    for (; d < i.length && ((r.lastIndex = d), (h = r.exec(i)), null !== h); )
      (d = r.lastIndex),
        r === N
          ? '!--' === h[1]
            ? (r = k)
            : void 0 !== h[1]
            ? (r = T)
            : void 0 !== h[2]
            ? (L.test(h[2]) && (n = RegExp('</' + h[2], 'g')), (r = O))
            : void 0 !== h[3] && (r = O)
          : r === O
          ? '>' === h[0]
            ? ((r = null != n ? n : N), (a = -1))
            : void 0 === h[1]
            ? (a = -2)
            : ((a = r.lastIndex - h[2].length),
              (l = h[1]),
              (r = void 0 === h[3] ? O : '"' === h[3] ? M : R))
          : r === M || r === R
          ? (r = O)
          : r === k || r === T
          ? (r = N)
          : ((r = O), (n = void 0));
    const c = r === O && t[e + 1].startsWith('/>') ? ' ' : '';
    o +=
      r === N
        ? i + C
        : a >= 0
        ? (s.push(l), i.slice(0, a) + E + i.slice(a) + S + c)
        : i + S + (-2 === a ? (s.push(void 0), e) : c);
  }
  return [q(t, o + (t[i] || '<?>') + (2 === e ? '</svg>' : '')), s];
};
class J {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let n = 0,
      o = 0;
    const r = t.length - 1,
      l = this.parts,
      [h, a] = K(t, e);
    if (
      ((this.el = J.createElement(h, i)),
      (W.currentNode = this.el.content),
      2 === e)
    ) {
      const t = this.el.content,
        e = t.firstChild;
      e.remove(), t.append(...e.childNodes);
    }
    for (; null !== (s = W.nextNode()) && l.length < r; ) {
      if (1 === s.nodeType) {
        if (s.hasAttributes()) {
          const t = [];
          for (const e of s.getAttributeNames())
            if (e.endsWith(E) || e.startsWith(S)) {
              const i = a[o++];
              if ((t.push(e), void 0 !== i)) {
                const t = s.getAttribute(i.toLowerCase() + E).split(S),
                  e = /([.?@])?(.*)/.exec(i);
                l.push({
                  type: 1,
                  index: n,
                  name: e[2],
                  strings: t,
                  ctor:
                    '.' === e[1]
                      ? X
                      : '?' === e[1]
                      ? tt
                      : '@' === e[1]
                      ? et
                      : Q,
                });
              } else l.push({ type: 6, index: n });
            }
          for (const e of t) s.removeAttribute(e);
        }
        if (L.test(s.tagName)) {
          const t = s.textContent.split(S),
            e = t.length - 1;
          if (e > 0) {
            s.textContent = m ? m.emptyScript : '';
            for (let i = 0; i < e; i++)
              s.append(t[i], x()),
                W.nextNode(),
                l.push({ type: 2, index: ++n });
            s.append(t[e], x());
          }
        }
      } else if (8 === s.nodeType)
        if (s.data === b) l.push({ type: 2, index: n });
        else {
          let t = -1;
          for (; -1 !== (t = s.data.indexOf(S, t + 1)); )
            l.push({ type: 7, index: n }), (t += S.length - 1);
        }
      n++;
    }
  }
  static createElement(t, e) {
    const i = w.createElement('template');
    return (i.innerHTML = t), i;
  }
}
function Z(t, e, i = t, s) {
  var n, o, r, l;
  if (e === D) return e;
  let h =
    void 0 !== s
      ? null === (n = i._$Co) || void 0 === n
        ? void 0
        : n[s]
      : i._$Cl;
  const a = P(e) ? void 0 : e._$litDirective$;
  return (
    (null == h ? void 0 : h.constructor) !== a &&
      (null === (o = null == h ? void 0 : h._$AO) ||
        void 0 === o ||
        o.call(h, !1),
      void 0 === a ? (h = void 0) : ((h = new a(t)), h._$AT(t, i, s)),
      void 0 !== s
        ? ((null !== (r = (l = i)._$Co) && void 0 !== r ? r : (l._$Co = []))[
            s
          ] = h)
        : (i._$Cl = h)),
    void 0 !== h && (e = Z(t, h._$AS(t, e.values), h, s)),
    e
  );
}
class F {
  constructor(t, e) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const {
        el: { content: i },
        parts: s,
      } = this._$AD,
      n = (
        null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e
          ? e
          : w
      ).importNode(i, !0);
    W.currentNode = n;
    let o = W.nextNode(),
      r = 0,
      l = 0,
      h = s[0];
    for (; void 0 !== h; ) {
      if (r === h.index) {
        let e;
        2 === h.type
          ? (e = new G(o, o.nextSibling, this, t))
          : 1 === h.type
          ? (e = new h.ctor(o, h.name, h.strings, this, t))
          : 6 === h.type && (e = new it(o, this, t)),
          this._$AV.push(e),
          (h = s[++l]);
      }
      r !== (null == h ? void 0 : h.index) && ((o = W.nextNode()), r++);
    }
    return (W.currentNode = w), n;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV)
      void 0 !== i &&
        (void 0 !== i.strings
          ? (i._$AI(t, i, e), (e += i.strings.length - 2))
          : i._$AI(t[e])),
        e++;
  }
}
class G {
  constructor(t, e, i, s) {
    var n;
    (this.type = 2),
      (this._$AH = I),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = s),
      (this._$Cp =
        null === (n = null == s ? void 0 : s.isConnected) || void 0 === n || n);
  }
  get _$AU() {
    var t, e;
    return null !==
      (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
      void 0 !== e
      ? e
      : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return (
      void 0 !== e &&
        11 === (null == t ? void 0 : t.nodeType) &&
        (t = e.parentNode),
      t
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = Z(this, t, e)),
      P(t)
        ? t === I || null == t || '' === t
          ? (this._$AH !== I && this._$AR(), (this._$AH = I))
          : t !== this._$AH && t !== D && this._(t)
        : void 0 !== t._$litType$
        ? this.g(t)
        : void 0 !== t.nodeType
        ? this.$(t)
        : ((t) =>
            U(t) ||
            'function' == typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
        ? this.T(t)
        : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
  }
  _(t) {
    this._$AH !== I && P(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.$(w.createTextNode(t)),
      (this._$AH = t);
  }
  g(t) {
    var e;
    const { values: i, _$litType$: s } = t,
      n =
        'number' == typeof s
          ? this._$AC(t)
          : (void 0 === s.el &&
              (s.el = J.createElement(q(s.h, s.h[0]), this.options)),
            s);
    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === n)
      this._$AH.v(i);
    else {
      const t = new F(n, this),
        e = t.u(this.options);
      t.v(i), this.$(e), (this._$AH = t);
    }
  }
  _$AC(t) {
    let e = V.get(t.strings);
    return void 0 === e && V.set(t.strings, (e = new J(t))), e;
  }
  T(t) {
    U(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      s = 0;
    for (const n of t)
      s === e.length
        ? e.push((i = new G(this.k(x()), this.k(x()), this, this.options)))
        : (i = e[s]),
        i._$AI(n),
        s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), (e.length = s));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for (
      null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const e = t.nextSibling;
      t.remove(), (t = e);
    }
  }
  setConnected(t) {
    var e;
    void 0 === this._$AM &&
      ((this._$Cp = t),
      null === (e = this._$AP) || void 0 === e || e.call(this, t));
  }
}
class Q {
  constructor(t, e, i, s, n) {
    (this.type = 1),
      (this._$AH = I),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = s),
      (this.options = n),
      i.length > 2 || '' !== i[0] || '' !== i[1]
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = I);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const n = this.strings;
    let o = !1;
    if (void 0 === n)
      (t = Z(this, t, e, 0)),
        (o = !P(t) || (t !== this._$AH && t !== D)),
        o && (this._$AH = t);
    else {
      const s = t;
      let r, l;
      for (t = n[0], r = 0; r < n.length - 1; r++)
        (l = Z(this, s[i + r], e, r)),
          l === D && (l = this._$AH[r]),
          o || (o = !P(l) || l !== this._$AH[r]),
          l === I ? (t = I) : t !== I && (t += (null != l ? l : '') + n[r + 1]),
          (this._$AH[r] = l);
    }
    o && !s && this.j(t);
  }
  j(t) {
    t === I
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : '');
  }
}
class X extends Q {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === I ? void 0 : t;
  }
}
const Y = m ? m.emptyScript : '';
class tt extends Q {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== I
      ? this.element.setAttribute(this.name, Y)
      : this.element.removeAttribute(this.name);
  }
}
class et extends Q {
  constructor(t, e, i, s, n) {
    super(t, e, i, s, n), (this.type = 5);
  }
  _$AI(t, e = this) {
    var i;
    if ((t = null !== (i = Z(this, t, e, 0)) && void 0 !== i ? i : I) === D)
      return;
    const s = this._$AH,
      n =
        (t === I && s !== I) ||
        t.capture !== s.capture ||
        t.once !== s.once ||
        t.passive !== s.passive,
      o = t !== I && (s === I || n);
    n && this.element.removeEventListener(this.name, this, s),
      o && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, i;
    'function' == typeof this._$AH
      ? this._$AH.call(
          null !==
            (i =
              null === (e = this.options) || void 0 === e ? void 0 : e.host) &&
            void 0 !== i
            ? i
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class it {
  constructor(t, e, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Z(this, t);
  }
}
const st = y.litHtmlPolyfillSupport;
null == st || st(J, G),
  (null !== (A = y.litHtmlVersions) && void 0 !== A
    ? A
    : (y.litHtmlVersions = [])
  ).push('2.8.0');
const nt = (t, e, i) => {
  var s, n;
  const o =
    null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s ? s : e;
  let r = o._$litPart$;
  if (void 0 === r) {
    const t =
      null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n
        ? n
        : null;
    o._$litPart$ = r = new G(
      e.insertBefore(x(), t),
      t,
      void 0,
      null != i ? i : {}
    );
  }
  return r._$AI(t), r;
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
};
var ot, rt;
class lt extends f {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (
      (null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t) ||
        (e.renderBefore = i.firstChild),
      i
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = nt(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return D;
  }
}
(lt.finalized = !0),
  (lt._$litElement$ = !0),
  null === (ot = globalThis.litElementHydrateSupport) ||
    void 0 === ot ||
    ot.call(globalThis, { LitElement: lt });
const ht = globalThis.litElementPolyfillSupport;
null == ht || ht({ LitElement: lt }),
  (null !== (rt = globalThis.litElementVersions) && void 0 !== rt
    ? rt
    : (globalThis.litElementVersions = [])
  ).push('3.3.3');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = (t, e) =>
  'method' === e.kind && e.descriptor && !('value' in e.descriptor)
    ? {
        ...e,
        finisher(i) {
          i.createProperty(e.key, t);
        },
      }
    : {
        kind: 'field',
        key: Symbol(),
        placement: 'own',
        descriptor: {},
        originalKey: e.key,
        initializer() {
          'function' == typeof e.initializer &&
            (this[e.key] = e.initializer.call(this));
        },
        finisher(i) {
          i.createProperty(e.key, t);
        },
      };
function dt(t) {
  return (e, i) =>
    void 0 !== i
      ? ((t, e, i) => {
          e.constructor.createProperty(i, t);
        })(t, e, i)
      : at(t, e);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
const ct =
  ({ finisher: t, descriptor: e }) =>
  (i, s) => {
    var n;
    if (void 0 === s) {
      const s = null !== (n = i.originalKey) && void 0 !== n ? n : i.key,
        o =
          null != e
            ? {
                kind: 'method',
                placement: 'prototype',
                key: s,
                descriptor: e(i.key),
              }
            : { ...i, key: s };
      return (
        null != t &&
          (o.finisher = function (e) {
            t(e, s);
          }),
        o
      );
    }
    {
      const n = i.constructor;
      void 0 !== e && Object.defineProperty(i, s, e(s)), null == t || t(n, s);
    }
  };
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var ut;
const pt =
  null !=
  (null === (ut = window.HTMLSlotElement) || void 0 === ut
    ? void 0
    : ut.prototype.assignedElements)
    ? (t, e) => t.assignedElements(e)
    : (t, e) =>
        t.assignedNodes(e).filter((t) => t.nodeType === Node.ELEMENT_NODE);
function vt(t) {
  const { slot: e, selector: i } = null != t ? t : {};
  return ct({
    descriptor: (s) => ({
      get() {
        var s;
        const n = 'slot' + (e ? `[name=${e}]` : ':not([name])'),
          o =
            null === (s = this.renderRoot) || void 0 === s
              ? void 0
              : s.querySelector(n),
          r = null != o ? pt(o, t) : [];
        return i ? r.filter((t) => t.matches(i)) : r;
      },
      enumerable: !0,
      configurable: !0,
    }),
  });
}
export {
  I as A,
  nt as D,
  D as T,
  lt as a,
  B as b,
  r as i,
  vt as l,
  dt as n,
  ct as o,
  t as s,
  z as x,
};
