import { Fragment as he, reactive as Qt, computed as f, watchEffect as en, toRefs as tn, capitalize as nl, warn as Zl, ref as j, unref as N, provide as Ke, inject as fe, shallowRef as le, defineComponent as wt, camelize as ll, h as _t, getCurrentInstance as Jl, watch as J, onScopeDispose as Ql, effectScope as ea, toRaw as ta, isRef as Ze, createVNode as s, mergeProps as Z, toRef as G, Text as na, openBlock as ne, createBlock as ve, withCtx as oe, normalizeClass as la, normalizeStyle as aa, Transition as xt, onBeforeMount as al, nextTick as tt, withDirectives as ye, resolveDirective as at, vShow as Vt, onBeforeUnmount as rt, resolveDynamicComponent as ra, readonly as rl, onMounted as It, TransitionGroup as oa, onUnmounted as ia, cloneVNode as sa, useAttrs as ua, useSlots as ca, createElementBlock as jt, createElementVNode as ol, withKeys as da, createSlots as pa, renderList as va, renderSlot as je, normalizeProps as Qe, createCommentVNode as Ne, guardReactiveProps as ct, createTextVNode as fa, toDisplayString as ma, Teleport as ga, pushScopeId as ha, popScopeId as ya } from "vue";
import { onClickOutside as ba } from "@vueuse/core";
/**
 * @name @wdns/vuetify-color-field
 * @version 1.0.1
 * @description Vuetify Color Field is a Vuetify VTextField Color Picker Component
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, __USERNAME__
 * @homepage https://webdevnerdstuff.github.io/vuetify-color-field/
 * @repository https://github.com/webdevnerdstuff/vuetify-color-field
 * @license MIT License
 */
const Ee = (e) => {
  const { unit: t = "px", value: n } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, Oe = "v-color-field", ka = { fa: { default: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { default: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, il = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  let a = (n == null ? void 0 : n.defaultSet).toLowerCase();
  a = a === "fa" || a === "fasvg" ? "fa" : a;
  const o = ka[a];
  if (!o)
    throw new Error(`VColorField: No VColorField default ${n == null ? void 0 : n.defaultSet} icon set found.`);
  const i = o[l];
  if (!i)
    throw new Error(`VColorField: No ${l} icon found.`);
  return i;
}, Bt = typeof window < "u", nn = Bt && "IntersectionObserver" in window, Sn = Bt && "EyeDropper" in window;
function ln(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => ln(e[l], t[l]));
}
function T(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Gt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Cn(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const wn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 }), Sa = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Le(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function sl(e, t) {
  const n = {}, l = new Set(Object.keys(e));
  for (const r of t)
    l.has(r) && (n[r] = e[r]);
  return n;
}
function _n(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    t.some((o) => o instanceof RegExp ? o.test(a) : o === a) && !(n != null && n.some((o) => o === a)) ? l[a] = e[a] : r[a] = e[a];
  return [l, r];
}
function ul(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const cl = /^on[^a-z]/, Ca = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function et(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function He(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function xn(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Vn(e, t) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function We() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const r in e)
    l[r] = e[r];
  for (const r in t) {
    const a = e[r], o = t[r];
    Gt(a) && Gt(o) ? l[r] = We(a, o, n) : Array.isArray(a) && Array.isArray(o) && n ? l[r] = n(a, o) : l[r] = o;
  }
  return l;
}
function dl(e) {
  return e.map((t) => t.type === he ? dl(t.children) : t).flat();
}
function Me() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Me.cache.has(e))
    return Me.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Me.cache.set(e, t), t;
}
function ht(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => ht(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => ht(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return ht(e, t.component.subTree).flat(1);
  }
  return [];
}
function pl(e) {
  const t = Qt({}), n = f(e);
  return en(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), tn(t);
}
function Yt(e, t) {
  return e.includes(t);
}
Me.cache = /* @__PURE__ */ new Map();
const qe = () => [Function, Array];
function In(e, t) {
  return !!(e[t = "on" + nl(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
const wa = ["top", "bottom"], _a = ["start", "end", "left", "right"];
function Bn(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
class Dt {
  constructor(t) {
    let { x: n, y: l, width: r, height: a } = t;
    this.x = n, this.y = l, this.width = r, this.height = a;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
const De = 2.4, $n = 0.2126729, An = 0.7151522, zn = 0.072175, xa = 0.55, Va = 0.58, Ia = 0.57, Ba = 0.62, dt = 0.03, Pn = 1.45, $a = 5e-4, Aa = 1.25, za = 1.25, Nn = 0.078, En = 12.82051282051282, pt = 0.06, On = 1e-3;
function Ln(e, t) {
  const n = (e.r / 255) ** De, l = (e.g / 255) ** De, r = (e.b / 255) ** De, a = (t.r / 255) ** De, o = (t.g / 255) ** De, i = (t.b / 255) ** De;
  let u, d = n * $n + l * An + r * zn, c = a * $n + o * An + i * zn;
  if (d <= dt && (d += (dt - d) ** Pn), c <= dt && (c += (dt - c) ** Pn), Math.abs(c - d) < $a)
    return 0;
  if (c > d) {
    const p = (c ** xa - d ** Va) * Aa;
    u = p < On ? 0 : p < Nn ? p - p * En * pt : p - pt;
  } else {
    const p = (c ** Ba - d ** Ia) * za;
    u = p > -On ? 0 : p > -Nn ? p - p * En * pt : p + pt;
  }
  return 100 * u;
}
function Ge(e) {
  Zl(`Vuetify: ${e}`);
}
const Pa = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Na = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Ht(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Rn = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ea = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => Mn({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => Mn({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => be({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => be({ h: e, s: t, v: n, a: l }) };
function Ve(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ge(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Rn.test(e)) {
    const { groups: t } = e.match(Rn), { fn: n, values: l } = t, r = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return Ea[n](...r);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Ge(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Ge(`'${e}' is not a valid hex(a) color`), gl(t);
  }
  if (typeof e == "object") {
    if (Le(e, ["r", "g", "b"]))
      return e;
    if (Le(e, ["h", "s", "l"]))
      return be(an(e));
    if (Le(e, ["h", "s", "v"]))
      return be(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function be(e) {
  const { h: t, s: n, v: l, a: r } = e, a = (i) => {
    const u = (i + t / 60) % 6;
    return l - l * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, o = [a(5), a(3), a(1)].map((i) => Math.round(255 * i));
  return { r: o[0], g: o[1], b: o[2], a: r };
}
function Mn(e) {
  return be(an(e));
}
function $t(e) {
  if (!e)
    return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.max(t, n, l), a = Math.min(t, n, l);
  let o = 0;
  r !== a && (r === t ? o = 60 * (0 + (n - l) / (r - a)) : r === n ? o = 60 * (2 + (l - t) / (r - a)) : r === l && (o = 60 * (4 + (t - n) / (r - a)))), o < 0 && (o += 360);
  const i = [o, r === 0 ? 0 : (r - a) / r, r];
  return { h: i[0], s: i[1], v: i[2], a: e.a };
}
function vl(e) {
  const { h: t, s: n, v: l, a: r } = e, a = l - l * n / 2;
  return { h: t, s: a === 1 || a === 0 ? 0 : (l - a) / Math.min(a, 1 - a), l: a, a: r };
}
function an(e) {
  const { h: t, s: n, l, a: r } = e, a = l + n * Math.min(l, 1 - l);
  return { h: t, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: r };
}
function fl(e) {
  let { r: t, g: n, b: l, a: r } = e;
  return r === void 0 ? `rgb(${t}, ${n}, ${l})` : `rgba(${t}, ${n}, ${l}, ${r})`;
}
function ml(e) {
  return fl(be(e));
}
function vt(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function gl(e) {
  e = function(a) {
    return a.startsWith("#") && (a = a.slice(1)), a = a.replace(/([^0-9a-f])/gi, "F"), (a.length === 3 || a.length === 4) && (a = a.split("").map((o) => o + o).join("")), a.length !== 6 && (a = Vn(Vn(a, 6), 8, "F")), a;
  }(e);
  let [t, n, l, r] = function(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const i = [];
    let u = 0;
    for (; u < a.length; )
      i.push(a.substr(u, o)), u += o;
    return i;
  }(e, 2).map((a) => parseInt(a, 16));
  return r = r === void 0 ? r : r / 255, { r: t, g: n, b: l, a: r };
}
function hl(e) {
  return $t(gl(e));
}
function yl(e) {
  return function(t) {
    let { r: n, g: l, b: r, a } = t;
    return `#${[vt(n), vt(l), vt(r), a !== void 0 ? vt(Math.round(255 * a)) : ""].join("")}`;
  }(be(e));
}
function Tn(e) {
  return function(t) {
    let { r: n, g: l, b: r } = t;
    const a = [0, 0, 0], o = Na, i = Pa;
    n = o(n / 255), l = o(l / 255), r = o(r / 255);
    for (let u = 0; u < 3; ++u)
      a[u] = i[u][0] * n + i[u][1] * l + i[u][2] * r;
    return a;
  }(Ve(e))[1];
}
function Oa(e, t) {
  const n = Tn(e), l = Tn(t);
  return (Math.max(n, l) + 0.05) / (Math.min(n, l) + 0.05);
}
function E(e, t) {
  return (n) => Object.keys(e).reduce((l, r) => {
    const a = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : { type: e[r] };
    return l[r] = n && r in n ? { ...a, default: n[r] } : a, t && !l[r].source && (l[r].source = t), l;
  }, {});
}
const q = E({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), bt = Symbol.for("vuetify:defaults");
function rn() {
  const e = fe(bt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function At(e, t) {
  const n = rn(), l = j(e), r = f(() => {
    if (N(t == null ? void 0 : t.disabled))
      return n.value;
    const a = N(t == null ? void 0 : t.scoped), o = N(t == null ? void 0 : t.reset), i = N(t == null ? void 0 : t.root);
    if (l.value == null && !(a || o || i))
      return n.value;
    let u = We(l.value, { prev: n.value });
    if (a)
      return u;
    if (o || i) {
      const d = Number(o || 1 / 0);
      for (let c = 0; c <= d && u && "prev" in u; c++)
        u = u.prev;
      return u && typeof i == "string" && i in u && (u = We(We(u, { prev: u }), u[i])), u;
    }
    return u.prev ? We(u.prev, u) : u;
  });
  return Ke(bt, r), r;
}
function La() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rn();
  const l = Se("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = f(() => {
    var i;
    return (i = n.value) == null ? void 0 : i[e._as ?? t];
  }), a = new Proxy(e, { get(i, u) {
    var c, p, m, g;
    const d = Reflect.get(i, u);
    return u === "class" || u === "style" ? [(c = r.value) == null ? void 0 : c[u], d].filter((A) => A != null) : typeof u != "string" || function(A, S) {
      var C, x;
      return ((C = A.props) == null ? void 0 : C[S]) !== void 0 || ((x = A.props) == null ? void 0 : x[Me(S)]) !== void 0;
    }(l.vnode, u) ? d : ((p = r.value) == null ? void 0 : p[u]) ?? ((g = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : g[u]) ?? d;
  } }), o = le();
  return en(() => {
    if (r.value) {
      const i = Object.entries(r.value).filter((u) => {
        let [d] = u;
        return d.startsWith(d[0].toUpperCase());
      });
      o.value = i.length ? Object.fromEntries(i) : void 0;
    } else
      o.value = void 0;
  }), { props: a, provideSubDefaults: function() {
    const i = function(u) {
      let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se("injectSelf");
      const { provides: c } = d;
      if (c && u in c)
        return c[u];
    }(bt, l);
    Ke(bt, f(() => o.value ? We((i == null ? void 0 : i.value) ?? {}, o.value) : i == null ? void 0 : i.value));
  } };
}
function ke(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ge("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return sl(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const r = rn();
      if (!r.value)
        return e._setup(n, l);
      const { props: a, provideSubDefaults: o } = La(n, n._as ?? e.name, r), i = e._setup(a, l);
      return o(), i;
    };
  }
  return e;
}
function H() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? ke : wt)(t);
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return H()({ name: n ?? nl(ll(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...q() }, setup(l, r) {
    let { slots: a } = r;
    return () => {
      var o;
      return _t(l.tag, { class: [e, l.class], style: l.style }, (o = a.default) == null ? void 0 : o.call(a));
    };
  } });
}
function Se(e, t) {
  const n = Jl();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function we() {
  const e = Se(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Me((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let bl = 0, yt = /* @__PURE__ */ new WeakMap();
function ot() {
  const e = Se("getUid");
  if (yt.has(e))
    return yt.get(e);
  {
    const t = bl++;
    return yt.set(e, t), t;
  }
}
function W(e) {
  Se("useRender").render = e;
}
ot.reset = () => {
  bl = 0, yt = /* @__PURE__ */ new WeakMap();
};
const Ra = E({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Kt(e, t) {
  let n;
  function l() {
    n = ea(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  J(e, (r) => {
    r && !n ? l() : r || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), Ql(() => {
    n == null || n.stop();
  });
}
function Ce(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const a = Se("useProxiedModel"), o = j(e[t] !== void 0 ? e[t] : n), i = Me(t), u = f(i !== t ? () => {
    var c, p, m, g;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) && !((p = a.vnode.props) != null && p.hasOwnProperty(i)) || !((m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)) && !((g = a.vnode.props) != null && g.hasOwnProperty(`onUpdate:${i}`)));
  } : () => {
    var c, p;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) || !((p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${t}`)));
  });
  Kt(() => !u.value, () => {
    J(() => e[t], (c) => {
      o.value = c;
    });
  });
  const d = f({ get() {
    const c = e[t];
    return l(u.value ? c : o.value);
  }, set(c) {
    const p = r(c), m = ta(u.value ? e[t] : o.value);
    m !== p && l(m) !== c && (o.value = p, a == null || a.emit(`update:${t}`, p));
  } });
  return Object.defineProperty(d, "externalValue", { get: () => u.value ? e[t] : o.value }), d;
}
const Ma = E({ disabled: Boolean, modelValue: { type: Boolean, default: void 0 }, ...Ra() }, "VHover"), Ta = H()({ name: "VHover", props: Ma(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = Ce(e, "modelValue"), { runOpenDelay: r, runCloseDelay: a } = function(o, i) {
    const u = {}, d = (c) => () => {
      if (!Bt)
        return Promise.resolve(!0);
      const p = c === "openDelay";
      return u.closeDelay && window.clearTimeout(u.closeDelay), delete u.closeDelay, u.openDelay && window.clearTimeout(u.openDelay), delete u.openDelay, new Promise((m) => {
        const g = parseInt(o[c] ?? 0, 10);
        u[c] = window.setTimeout(() => {
          i == null || i(p), m(p);
        }, g);
      });
    };
    return { runCloseDelay: d("closeDelay"), runOpenDelay: d("openDelay") };
  }(e, (o) => !e.disabled && (l.value = o));
  return () => {
    var o;
    return (o = n.default) == null ? void 0 : o.call(n, { isHovering: l.value, props: { onMouseenter: r, onMouseleave: a } });
  };
} });
function sn(e) {
  return pl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (Ht(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Ht(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const r = Ve(e.value.background);
          if (r.a == null || r.a === 1) {
            const a = function(o) {
              const i = Math.abs(Ln(Ve(0), Ve(o)));
              return Math.abs(Ln(Ve(16777215), Ve(o))) > Math.min(i, 50) ? "#fff" : "#000";
            }(r);
            n.color = a, n.caretColor = a;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (Ht(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function Fe(e, t) {
  const n = f(() => ({ text: Ze(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: r } = sn(n);
  return { textColorClasses: l, textColorStyles: r };
}
function Ye(e, t) {
  const n = f(() => ({ background: Ze(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: r } = sn(n);
  return { backgroundColorClasses: l, backgroundColorStyles: r };
}
const ae = [String, Function, Object, Array], Fa = Symbol.for("vuetify:icons"), kt = E({ icon: { type: ae }, tag: { type: String, required: !0 } }, "icon"), Fn = H()({ name: "VComponentIcon", props: kt(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return s(e.tag, null, { default: () => {
      var r;
      return [e.icon ? s(l, null, null) : (r = n.default) == null ? void 0 : r.call(n)];
    } });
  };
} }), ja = ke({ name: "VSvgIcon", inheritAttrs: !1, props: kt(), setup(e, t) {
  let { attrs: n } = t;
  return () => s(e.tag, Z(n, { style: null }), { default: () => [s("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? s("path", { d: l[0], "fill-opacity": l[1] }, null) : s("path", { d: l }, null)) : s("path", { d: e.icon }, null)])] });
} });
ke({ name: "VLigatureIcon", props: kt(), setup: (e) => () => s(e.tag, null, { default: () => [e.icon] }) }), ke({ name: "VClassIcon", props: kt(), setup: (e) => () => s(e.tag, { class: e.icon }, null) });
const Da = ["x-small", "small", "default", "large", "x-large"], zt = E({ size: { type: [String, Number], default: "default" } }, "size");
function Pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return pl(() => {
    let n, l;
    return Yt(Da, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: T(e.size), height: T(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const Be = E({ tag: { type: String, default: "div" } }, "tag"), jn = Symbol.for("vuetify:theme"), me = E({ theme: String }, "theme");
function _e(e) {
  Se("provideTheme");
  const t = fe(jn, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), l = f(() => t.themes.value[n.value]), r = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = { ...t, name: n, current: l, themeClasses: r };
  return Ke(jn, a), a;
}
const Ha = E({ color: String, start: Boolean, end: Boolean, icon: ae, ...q(), ...zt(), ...Be({ tag: "i" }), ...me() }, "VIcon"), Ie = H()({ name: "VIcon", props: Ha(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const r = j(), { themeClasses: a } = _e(e), { iconData: o } = ((c) => {
    const p = fe(Fa);
    if (!p)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: f(() => {
      var C;
      const m = N(c);
      if (!m)
        return { component: Fn };
      let g = m;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (C = p.aliases) == null ? void 0 : C[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${m}"`);
      if (Array.isArray(g))
        return { component: ja, icon: g };
      if (typeof g != "string")
        return { component: Fn, icon: g };
      const A = Object.keys(p.sets).find((x) => typeof g == "string" && g.startsWith(`${x}:`)), S = A ? g.slice(A.length + 1) : g;
      return { component: p.sets[A ?? p.defaultSet].component, icon: S };
    }) };
  })(f(() => r.value || e.icon)), { sizeClasses: i } = Pt(e), { textColorClasses: u, textColorStyles: d } = Fe(G(e, "color"));
  return W(() => {
    var p, m;
    const c = (p = l.default) == null ? void 0 : p.call(l);
    return c && (r.value = (m = dl(c).filter((g) => g.type === na && g.children && typeof g.children == "string")[0]) == null ? void 0 : m.children), s(o.value.component, { tag: e.tag, icon: o.value.icon, class: ["v-icon", "notranslate", a.value, i.value, u.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [i.value ? void 0 : { fontSize: T(e.size), height: T(e.size), width: T(e.size) }, d.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [c] });
  }), {};
} }), ft = wt({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, r = fe(Symbol.for("vuetify:icons")), a = f(() => il({ icon: l.icon !== "default" ? l.icon : "", iconOptions: r, name: "default" }));
  function o() {
    n("click");
  }
  return (i, u) => (ne(), ve(Ta, null, { default: oe(({ isHovering: d, props: c }) => [s(Ie, Z(c, { color: d ? i.color : void 0, icon: N(a), size: i.iconSize, onClick: o }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), mt = wt({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, { modelValue: r } = tn(l), a = f(() => ({ [`${Oe}--pip`]: !0 })), o = f(() => ((c) => {
    const { pipBorder: p, pipBorderRadius: m } = c, g = { backgroundColor: p && p !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return p && p !== "none" && (g.border = p, g.borderRadius = m), g;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), i = fe(Symbol.for("vuetify:icons")), u = f(() => il({ icon: l.pipIcon !== "pip" ? l.pipIcon : "", iconOptions: i, name: "pip" }));
  function d() {
    n("click");
  }
  return (c, p) => (ne(), ve(Ie, { class: la(N(a)), color: N(r) || "--v-theme-on-surface", icon: N(u), size: c.pipSize, style: aa(N(o)), tag: "div", onClick: d }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), Wa = H()({ name: "VCardActions", props: q(), setup(e, t) {
  let { slots: n } = t;
  return At({ VBtn: { slim: !0, variant: "text" } }), W(() => {
    var l;
    return s("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Ua = on("v-card-subtitle"), Xa = on("v-card-title"), Nt = E({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Et(e) {
  return { dimensionStyles: f(() => ({ height: T(e.height), maxHeight: T(e.maxHeight), maxWidth: T(e.maxWidth), minHeight: T(e.minHeight), minWidth: T(e.minWidth), width: T(e.width) })) };
}
const kl = E({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...q(), ...Nt() }, "VResponsive"), Dn = H()({ name: "VResponsive", props: kl(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: f(() => {
      const o = Number(a.aspectRatio);
      return o ? { paddingBottom: String(1 / o * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: r } = Et(e);
  return W(() => {
    var a;
    return s("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [r.value, e.style] }, [s("div", { class: "v-responsive__sizer", style: l.value }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && s("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), un = E({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ue = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: r, ...a } = e, { component: o = xt, ...i } = typeof l == "object" ? l : {};
  return _t(o, Z(typeof l == "string" ? { name: r ? "" : l } : i, a, { disabled: r }), n);
};
function Hn(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Sl = { mounted: function(e, t) {
  if (!nn)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: r, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, o = new IntersectionObserver(function() {
    var p;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const d = (p = e._observe) == null ? void 0 : p[t.instance.$.uid];
    if (!d)
      return;
    const c = i.some((m) => m.isIntersecting);
    !r || n.quiet && !d.init || n.once && !c && !d.init || r(c, i, u), c && n.once ? Hn(e, t) : d.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: o }, o.observe(e);
}, unmounted: Hn }, qa = E({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...kl(), ...q(), ...un() }, "VImg"), Cl = H()({ name: "VImg", directives: { intersect: Sl }, props: qa(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const r = le(""), a = j(), o = le(e.eager ? "loading" : "idle"), i = le(), u = le(), d = f(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), c = f(() => d.value.aspect || i.value / u.value || 0);
  function p(h) {
    if ((!e.eager || !h) && (!nn || h || e.eager)) {
      if (o.value = "loading", d.value.lazySrc) {
        const y = new Image();
        y.src = d.value.lazySrc, C(y, null);
      }
      d.value.src && tt(() => {
        var y;
        n("loadstart", ((y = a.value) == null ? void 0 : y.currentSrc) || d.value.src), setTimeout(() => {
          var $;
          if (($ = a.value) != null && $.complete) {
            if (a.value.naturalWidth || g(), o.value === "error")
              return;
            c.value || C(a.value, null), o.value === "loading" && m();
          } else
            c.value || C(a.value), A();
        });
      });
    }
  }
  function m() {
    var h;
    A(), C(a.value), o.value = "loaded", n("load", ((h = a.value) == null ? void 0 : h.currentSrc) || d.value.src);
  }
  function g() {
    var h;
    o.value = "error", n("error", ((h = a.value) == null ? void 0 : h.currentSrc) || d.value.src);
  }
  function A() {
    const h = a.value;
    h && (r.value = h.currentSrc || h.src);
  }
  J(() => e.src, () => {
    p(o.value !== "idle");
  }), J(c, (h, y) => {
    !h && y && a.value && C(a.value);
  }), al(() => p());
  let S = -1;
  function C(h) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const $ = () => {
      clearTimeout(S);
      const { naturalHeight: k, naturalWidth: v } = h;
      k || v ? (i.value = v, u.value = k) : h.complete || o.value !== "loading" || y == null ? (h.currentSrc.endsWith(".svg") || h.currentSrc.startsWith("data:image/svg+xml")) && (i.value = 1, u.value = 1) : S = window.setTimeout($, y);
    };
    $();
  }
  const x = f(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), _ = () => {
    var $;
    if (!d.value.src || o.value === "idle")
      return null;
    const h = s("img", { class: ["v-img__img", x.value], style: { objectPosition: e.position }, src: d.value.src, srcset: d.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: a, onLoad: m, onError: g }, null), y = ($ = l.sources) == null ? void 0 : $.call(l);
    return s(Ue, { transition: e.transition, appear: !0 }, { default: () => [ye(y ? s("picture", { class: "v-img__picture" }, [y, h]) : h, [[Vt, o.value === "loaded"]])] });
  }, V = () => s(Ue, { transition: e.transition }, { default: () => [d.value.lazySrc && o.value !== "loaded" && s("img", { class: ["v-img__img", "v-img__img--preload", x.value], style: { objectPosition: e.position }, src: d.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), z = () => l.placeholder ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [(o.value === "loading" || o.value === "error" && !l.error) && s("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, P = () => l.error ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [o.value === "error" && s("div", { class: "v-img__error" }, [l.error()])] }) : null, I = () => e.gradient ? s("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, B = le(!1);
  {
    const h = J(c, (y) => {
      y && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          B.value = !0;
        });
      }), h());
    });
  }
  return W(() => {
    const h = Dn.filterProps(e);
    return ye(s(Dn, Z({ class: ["v-img", { "v-img--booting": !B.value }, e.class], style: [{ width: T(e.width === "auto" ? i.value : e.width) }, e.style] }, h, { aspectRatio: c.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => s(he, null, [s(_, null, null), s(V, null, null), s(I, null, null), s(z, null, null), s(P, null, null)]), default: l.default }), [[at("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: r, image: a, state: o, naturalWidth: i, naturalHeight: u };
} }), Ga = [null, "default", "comfortable", "compact"], Je = E({ density: { type: String, default: "default", validator: (e) => Ga.includes(e) } }, "density");
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { densityClasses: f(() => `${t}--density-${e.density}`) };
}
const $e = E({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { roundedClasses: f(() => {
    const n = Ze(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const r of String(n).split(" "))
        l.push(`rounded-${r}`);
    return l;
  }) };
}
const Ya = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function cn(e, t) {
  return s(he, null, [e && s("span", { key: "overlay", class: `${t}__overlay` }, null), s("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const Ot = E({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ya.includes(e) } }, "variant");
function dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  const n = f(() => {
    const { variant: a } = N(e);
    return `${t}--variant-${a}`;
  }), { colorClasses: l, colorStyles: r } = sn(f(() => {
    const { variant: a, color: o } = N(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: o };
  }));
  return { colorClasses: l, colorStyles: r, variantClasses: n };
}
const Ka = E({ start: Boolean, end: Boolean, icon: ae, image: String, text: String, ...q(), ...Je(), ...$e(), ...zt(), ...Be(), ...me(), ...Ot({ variant: "flat" }) }, "VAvatar"), Wn = H()({ name: "VAvatar", props: Ka(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { colorClasses: r, colorStyles: a, variantClasses: o } = dn(e), { densityClasses: i } = it(e), { roundedClasses: u } = Ae(e), { sizeClasses: d, sizeStyles: c } = Pt(e);
  return W(() => s(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, r.value, i.value, u.value, d.value, o.value, e.class], style: [a.value, c.value, e.style] }, { default: () => {
    var p;
    return [e.image ? s(Cl, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? s(Ie, { key: "icon", icon: e.icon }, null) : ((p = n.default) == null ? void 0 : p.call(n)) ?? e.text, cn(!1, "v-avatar")];
  } })), {};
} }), Za = E({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Te = H(!1)({ name: "VDefaultsProvider", props: Za(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: r, reset: a, root: o, scoped: i } = tn(e);
  return At(l, { reset: a, root: o, scoped: i, disabled: r }), () => {
    var u;
    return (u = n.default) == null ? void 0 : u.call(n);
  };
} }), Ja = E({ appendAvatar: String, appendIcon: ae, prependAvatar: String, prependIcon: ae, subtitle: String, title: String, ...q(), ...Je() }, "VCardItem"), Qa = H()({ name: "VCardItem", props: Ja(), setup(e, t) {
  let { slots: n } = t;
  return W(() => {
    var d;
    const l = !(!e.prependAvatar && !e.prependIcon), r = !(!l && !n.prepend), a = !(!e.appendAvatar && !e.appendIcon), o = !(!a && !n.append), i = !(!e.title && !n.title), u = !(!e.subtitle && !n.subtitle);
    return s("div", { class: ["v-card-item", e.class], style: e.style }, [r && s("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? s(Te, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && s(Wn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), s("div", { class: "v-card-item__content" }, [i && s(Xa, { key: "title" }, { default: () => {
      var c;
      return [((c = n.title) == null ? void 0 : c.call(n)) ?? e.title];
    } }), u && s(Ua, { key: "subtitle" }, { default: () => {
      var c;
      return [((c = n.subtitle) == null ? void 0 : c.call(n)) ?? e.subtitle];
    } }), (d = n.default) == null ? void 0 : d.call(n)]), o && s("div", { key: "append", class: "v-card-item__append" }, [n.append ? s(Te, { key: "append-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : a && s(Wn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), er = on("v-card-text"), Lt = E({ border: [Boolean, Number, String] }, "border");
function Rt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { borderClasses: f(() => {
    const n = Ze(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const r of String(n).split(" "))
        l.push(`border-${r}`);
    return l;
  }) };
}
const st = E({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function ut(e) {
  return { elevationClasses: f(() => {
    const t = Ze(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
function wl(e, t) {
  const n = j(), l = le(!1);
  if (nn) {
    const r = new IntersectionObserver((a) => {
      e == null || e(a, r), l.value = !!a.find((o) => o.isIntersecting);
    }, t);
    rt(() => {
      r.disconnect();
    }), J(n, (a, o) => {
      o && (r.unobserve(o), l.value = !1), a && r.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const _l = Symbol.for("vuetify:locale");
function ze() {
  const e = fe(_l);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Un = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Mt = E({ location: String }, "location");
function Tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = ze();
  return { locationStyles: f(() => {
    if (!e.location)
      return {};
    const { side: a, align: o } = function(d, c) {
      let [p, m] = d.split(" ");
      return m || (m = Yt(wa, p) ? "start" : Yt(_a, p) ? "top" : "center"), { side: Bn(p, c), align: Bn(m, c) };
    }(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function i(d) {
      return n ? n(d) : 0;
    }
    const u = {};
    return a !== "center" && (t ? u[Un[a]] = `calc(100% - ${i(a)}px)` : u[a] = 0), o !== "center" ? t ? u[Un[o]] = `calc(100% - ${i(o)}px)` : u[o] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), u;
  }) };
}
const tr = E({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...q(), ...Mt({ location: "top" }), ...$e(), ...Be(), ...me() }, "VProgressLinear"), nr = H()({ name: "VProgressLinear", props: tr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = Ce(e, "modelValue"), { isRtl: r, rtlClasses: a } = ze(), { themeClasses: o } = _e(e), { locationStyles: i } = Tt(e), { textColorClasses: u, textColorStyles: d } = Fe(e, "color"), { backgroundColorClasses: c, backgroundColorStyles: p } = Ye(f(() => e.bgColor || e.color)), { backgroundColorClasses: m, backgroundColorStyles: g } = Ye(e, "color"), { roundedClasses: A } = Ae(e), { intersectionRef: S, isIntersecting: C } = wl(), x = f(() => parseInt(e.max, 10)), _ = f(() => parseInt(e.height, 10)), V = f(() => parseFloat(e.bufferValue) / x.value * 100), z = f(() => parseFloat(l.value) / x.value * 100), P = f(() => r.value !== e.reverse), I = f(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), B = f(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function h(y) {
    if (!S.value)
      return;
    const { left: $, right: k, width: v } = S.value.getBoundingClientRect(), b = P.value ? v - y.clientX + (k - v) : y.clientX - $;
    l.value = Math.round(b / v * x.value);
  }
  return W(() => s(e.tag, { ref: S, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && C.value, "v-progress-linear--reverse": P.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, A.value, o.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? T(_.value) : 0, "--v-progress-linear-height": T(_.value), ...i.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : z.value, onClick: e.clickable && h }, { default: () => [e.stream && s("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...d.value, [P.value ? "left" : "right"]: T(-_.value), borderTop: `${T(_.value / 2)} dotted`, opacity: B.value, top: `calc(50% - ${T(_.value / 4)})`, width: T(100 - V.value, "%"), "--v-progress-linear-stream-to": T(_.value * (P.value ? 1 : -1)) } }, null), s("div", { class: ["v-progress-linear__background", c.value], style: [p.value, { opacity: B.value, width: T(e.stream ? V.value : 100, "%") }] }, null), s(xt, { name: I.value }, { default: () => [e.indeterminate ? s("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((y) => s("div", { key: y, class: ["v-progress-linear__indeterminate", y, m.value], style: g.value }, null))]) : s("div", { class: ["v-progress-linear__determinate", m.value], style: [g.value, { width: T(z.value, "%") }] }, null)] }), n.default && s("div", { class: "v-progress-linear__content" }, [n.default({ value: z.value, buffer: V.value })])] })), {};
} }), pn = E({ loading: [Boolean, String] }, "loader");
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { loaderClasses: f(() => ({ [`${t}--loading`]: e.loading })) };
}
function xl(e, t) {
  var l;
  let { slots: n } = t;
  return s("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || s(nr, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const lr = ["static", "relative", "fixed", "absolute", "sticky"], fn = E({ position: { type: String, validator: (e) => lr.includes(e) } }, "position");
function mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { positionClasses: f(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Vl(e, t) {
  const n = ra("RouterLink"), l = f(() => !(!e.href && !e.to)), r = f(() => (l == null ? void 0 : l.value) || In(t, "click") || In(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: r, href: G(e, "href") };
  const a = e.to ? n.useLink(e) : void 0;
  return { isLink: l, isClickable: r, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && f(() => {
    var o, i;
    return e.exact ? (o = a.isExactActive) == null ? void 0 : o.value : (i = a.isActive) == null ? void 0 : i.value;
  }), href: f(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const Il = E({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router"), Zt = Symbol("rippleStop"), ar = 80;
function Xn(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Jt(e) {
  return e.constructor.name === "TouchEvent";
}
function Bl(e) {
  return e.constructor.name === "KeyboardEvent";
}
const St = { show(e, t) {
  var g;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
    return;
  const l = document.createElement("span"), r = document.createElement("span");
  l.appendChild(r), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: a, scale: o, x: i, y: u, centerX: d, centerY: c } = function(A, S) {
    var B;
    let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = 0, _ = 0;
    if (!Bl(A)) {
      const h = S.getBoundingClientRect(), y = Jt(A) ? A.touches[A.touches.length - 1] : A;
      x = y.clientX - h.left, _ = y.clientY - h.top;
    }
    let V = 0, z = 0.3;
    (B = S._ripple) != null && B.circle ? (z = 0.15, V = S.clientWidth / 2, V = C.center ? V : V + Math.sqrt((x - V) ** 2 + (_ - V) ** 2) / 4) : V = Math.sqrt(S.clientWidth ** 2 + S.clientHeight ** 2) / 2;
    const P = (S.clientWidth - 2 * V) / 2 + "px", I = (S.clientHeight - 2 * V) / 2 + "px";
    return { radius: V, scale: z, x: C.center ? P : x - V + "px", y: C.center ? I : _ - V + "px", centerX: P, centerY: I };
  }(e, t, n), p = 2 * a + "px";
  r.className = "v-ripple__animation", r.style.width = p, r.style.height = p, t.appendChild(l);
  const m = window.getComputedStyle(t);
  m && m.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), Xn(r, `translate(${i}, ${u}) scale3d(${o},${o},${o})`), r.dataset.activated = String(performance.now()), setTimeout(() => {
    r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), Xn(r, `translate(${d}, ${c}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var a;
  if (!((a = e == null ? void 0 : e._ripple) != null && a.enabled))
    return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0)
    return;
  const n = t[t.length - 1];
  if (n.dataset.isHiding)
    return;
  n.dataset.isHiding = "true";
  const l = performance.now() - Number(n.dataset.activated), r = Math.max(250 - l, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var o;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((o = n.parentNode) == null ? void 0 : o.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, r);
} };
function $l(e) {
  return e === void 0 || !!e;
}
function nt(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[Zt]) {
    if (e[Zt] = !0, Jt(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Bl(e), n._ripple.class && (t.class = n._ripple.class), Jt(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        St.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, ar);
    } else
      St.show(e, n, t);
  }
}
function qn(e) {
  e[Zt] = !0;
}
function se(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        se(e);
      }));
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), St.hide(t);
  }
}
function Al(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let lt = !1;
function zl(e) {
  lt || e.keyCode !== wn.enter && e.keyCode !== wn.space || (lt = !0, nt(e));
}
function Pl(e) {
  lt = !1, se(e);
}
function Nl(e) {
  lt && (lt = !1, se(e));
}
function Gn(e, t, n) {
  const { value: l, modifiers: r } = t, a = $l(l);
  if (a || St.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = r.center, e._ripple.circle = r.circle, Gt(l) && l.class && (e._ripple.class = l.class), a && !n) {
    if (r.stop)
      return e.addEventListener("touchstart", qn, { passive: !0 }), void e.addEventListener("mousedown", qn);
    e.addEventListener("touchstart", nt, { passive: !0 }), e.addEventListener("touchend", se, { passive: !0 }), e.addEventListener("touchmove", Al, { passive: !0 }), e.addEventListener("touchcancel", se), e.addEventListener("mousedown", nt), e.addEventListener("mouseup", se), e.addEventListener("mouseleave", se), e.addEventListener("keydown", zl), e.addEventListener("keyup", Pl), e.addEventListener("blur", Nl), e.addEventListener("dragstart", se, { passive: !0 });
  } else
    !a && n && El(e);
}
function El(e) {
  e.removeEventListener("mousedown", nt), e.removeEventListener("touchstart", nt), e.removeEventListener("touchend", se), e.removeEventListener("touchmove", Al), e.removeEventListener("touchcancel", se), e.removeEventListener("mouseup", se), e.removeEventListener("mouseleave", se), e.removeEventListener("keydown", zl), e.removeEventListener("keyup", Pl), e.removeEventListener("dragstart", se), e.removeEventListener("blur", Nl);
}
const gn = { mounted: function(e, t) {
  Gn(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, El(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Gn(e, t, $l(t.oldValue));
} }, rr = E({ appendAvatar: String, appendIcon: ae, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ae, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Lt(), ...q(), ...Je(), ...Nt(), ...st(), ...pn(), ...Mt(), ...fn(), ...$e(), ...Il(), ...Be(), ...me(), ...Ot({ variant: "elevated" }) }, "VCard"), or = H()({ name: "VCard", directives: { Ripple: gn }, props: rr(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = _e(e), { borderClasses: a } = Rt(e), { colorClasses: o, colorStyles: i, variantClasses: u } = dn(e), { densityClasses: d } = it(e), { dimensionStyles: c } = Et(e), { elevationClasses: p } = ut(e), { loaderClasses: m } = vn(e), { locationStyles: g } = Tt(e), { positionClasses: A } = mn(e), { roundedClasses: S } = Ae(e), C = Vl(e, n), x = f(() => e.link !== !1 && C.isLink.value), _ = f(() => !e.disabled && e.link !== !1 && (e.link || C.isClickable.value));
  return W(() => {
    const V = x.value ? "a" : e.tag, z = !(!l.title && !e.title), P = !(!l.subtitle && !e.subtitle), I = z || P, B = !!(l.append || e.appendAvatar || e.appendIcon), h = !!(l.prepend || e.prependAvatar || e.prependIcon), y = !(!l.image && !e.image), $ = I || h || B, k = !(!l.text && !e.text);
    return ye(s(V, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": _.value }, r.value, a.value, o.value, d.value, p.value, m.value, A.value, S.value, u.value, e.class], style: [i.value, c.value, g.value, e.style], href: C.href.value, onClick: _.value && C.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var v;
      return [y && s("div", { key: "image", class: "v-card__image" }, [l.image ? s(Te, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : s(Cl, { key: "image-img", cover: !0, src: e.image }, null)]), s(xl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), $ && s(Qa, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), k && s(er, { key: "text" }, { default: () => {
        var b;
        return [((b = l.text) == null ? void 0 : b.call(l)) ?? e.text];
      } }), (v = l.default) == null ? void 0 : v.call(l), l.actions && s(Wa, null, { default: l.actions }), cn(_.value, "v-card")];
    } }), [[at("ripple"), _.value && e.ripple]]);
  }), {};
} });
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = j(), l = j();
  if (Bt) {
    const r = new ResizeObserver((a) => {
      e == null || e(a, r), a.length && (l.value = t === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    rt(() => {
      r.disconnect();
    }), J(n, (a, o) => {
      o && (r.unobserve(Cn(o)), l.value = void 0), a && r.observe(Cn(a));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: rl(l) };
}
const ir = ke({ name: "VColorPickerCanvas", props: E({ color: { type: Object }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...q() }, "VColorPickerCanvas")(), emits: { "update:color": (e) => !0, "update:position": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = le(!1), r = j(), a = le(parseFloat(e.width)), o = le(parseFloat(e.height)), i = j({ x: 0, y: 0 }), u = f({ get: () => i.value, set(S) {
    var _, V;
    if (!r.value)
      return;
    const { x: C, y: x } = S;
    i.value = S, n("update:color", { h: ((_ = e.color) == null ? void 0 : _.h) ?? 0, s: He(C, 0, a.value) / a.value, v: 1 - He(x, 0, o.value) / o.value, a: ((V = e.color) == null ? void 0 : V.a) ?? 1 });
  } }), d = f(() => {
    const { x: S, y: C } = u.value, x = parseInt(e.dotSize, 10) / 2;
    return { width: T(e.dotSize), height: T(e.dotSize), transform: `translate(${T(S - x)}, ${T(C - x)})` };
  }), { resizeRef: c } = Ol((S) => {
    var _;
    if (!((_ = c.value) != null && _.offsetParent))
      return;
    const { width: C, height: x } = S[0].contentRect;
    a.value = C, o.value = x;
  });
  function p(S) {
    S.type === "mousedown" && S.preventDefault(), e.disabled || (m(S), window.addEventListener("mousemove", m), window.addEventListener("mouseup", g), window.addEventListener("touchmove", m), window.addEventListener("touchend", g));
  }
  function m(S) {
    if (e.disabled || !r.value)
      return;
    l.value = !0;
    const C = function(x) {
      return "touches" in x ? { clientX: x.touches[0].clientX, clientY: x.touches[0].clientY } : { clientX: x.clientX, clientY: x.clientY };
    }(S);
    (function(x, _, V) {
      const { left: z, top: P, width: I, height: B } = V;
      u.value = { x: He(x - z, 0, I), y: He(_ - P, 0, B) };
    })(C.clientX, C.clientY, r.value.getBoundingClientRect());
  }
  function g() {
    window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", m), window.removeEventListener("touchend", g);
  }
  function A() {
    var V;
    if (!r.value)
      return;
    const S = r.value, C = S.getContext("2d");
    if (!C)
      return;
    const x = C.createLinearGradient(0, 0, S.width, 0);
    x.addColorStop(0, "hsla(0, 0%, 100%, 1)"), x.addColorStop(1, `hsla(${((V = e.color) == null ? void 0 : V.h) ?? 0}, 100%, 50%, 1)`), C.fillStyle = x, C.fillRect(0, 0, S.width, S.height);
    const _ = C.createLinearGradient(0, 0, 0, S.height);
    _.addColorStop(0, "hsla(0, 0%, 100%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), C.fillStyle = _, C.fillRect(0, 0, S.width, S.height);
  }
  return J(() => {
    var S;
    return (S = e.color) == null ? void 0 : S.h;
  }, A, { immediate: !0 }), J(() => [a.value, o.value], (S, C) => {
    A(), i.value = { x: u.value.x * S[0] / C[0], y: u.value.y * S[1] / C[1] };
  }, { flush: "post" }), J(() => e.color, () => {
    l.value ? l.value = !1 : i.value = e.color ? { x: e.color.s * a.value, y: (1 - e.color.v) * o.value } : { x: 0, y: 0 };
  }, { deep: !0, immediate: !0 }), It(() => A()), W(() => s("div", { ref: c, class: ["v-color-picker-canvas", e.class], style: e.style, onMousedown: p, onTouchstartPassive: p }, [s("canvas", { ref: r, width: a.value, height: o.value }, null), e.color && s("div", { class: ["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }], style: d.value }, null)])), {};
} }), Ll = E({ divided: Boolean, ...Lt(), ...q(), ...Je(), ...st(), ...$e(), ...Be(), ...me(), ...Ot() }, "VBtnGroup"), Yn = H()({ name: "VBtnGroup", props: Ll(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { densityClasses: r } = it(e), { borderClasses: a } = Rt(e), { elevationClasses: o } = ut(e), { roundedClasses: i } = Ae(e);
  At({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), W(() => s(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, r.value, o.value, i.value, e.class], style: e.style }, n));
} }), sr = E({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ur = E({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function cr(e, t) {
  let n = !1;
  const l = Qt([]), r = Ce(e, "modelValue", [], (d) => d == null ? [] : Kn(l, et(d)), (d) => {
    const c = function(p, m) {
      const g = [];
      return m.forEach((A) => {
        const S = p.findIndex((C) => C.id === A);
        if (~S) {
          const C = p[S];
          g.push(C.value != null ? C.value : S);
        }
      }), g;
    }(l, d);
    return e.multiple ? c : c[0];
  }), a = Se("useGroup");
  function o() {
    const d = l.find((c) => !c.disabled);
    d && e.mandatory === "force" && !r.value.length && (r.value = [d.id]);
  }
  function i(d) {
    if (e.multiple && Ge('This method is not supported when using "multiple" prop'), r.value.length) {
      const c = r.value[0], p = l.findIndex((A) => A.id === c);
      let m = (p + d) % l.length, g = l[m];
      for (; g.disabled && m !== p; )
        m = (m + d) % l.length, g = l[m];
      if (g.disabled)
        return;
      r.value = [l[m].id];
    } else {
      const c = l.find((p) => !p.disabled);
      c && (r.value = [c.id]);
    }
  }
  It(() => {
    o();
  }), rt(() => {
    n = !0;
  });
  const u = { register: function(d, c) {
    const p = d, m = ht(Symbol.for(`${t.description}:id`), a == null ? void 0 : a.vnode).indexOf(c);
    m > -1 ? l.splice(m, 0, p) : l.push(p);
  }, unregister: function(d) {
    if (n)
      return;
    o();
    const c = l.findIndex((p) => p.id === d);
    l.splice(c, 1);
  }, selected: r, select: function(d, c) {
    const p = l.find((m) => m.id === d);
    if (!c || !(p != null && p.disabled))
      if (e.multiple) {
        const m = r.value.slice(), g = m.findIndex((S) => S === d), A = ~g;
        if (c = c ?? !A, A && e.mandatory && m.length <= 1 || !A && e.max != null && m.length + 1 > e.max)
          return;
        g < 0 && c ? m.push(d) : g >= 0 && !c && m.splice(g, 1), r.value = m;
      } else {
        const m = r.value.includes(d);
        if (e.mandatory && m)
          return;
        r.value = c ?? !m ? [d] : [];
      }
  }, disabled: G(e, "disabled"), prev: () => i(l.length - 1), next: () => i(1), isSelected: (d) => r.value.includes(d), selectedClass: f(() => e.selectedClass), items: f(() => l), getItemIndex: (d) => function(c, p) {
    const m = Kn(c, [p]);
    return m.length ? c.findIndex((g) => g.id === m[0]) : -1;
  }(l, d) };
  return Ke(t, u), u;
}
function Kn(e, t) {
  const n = [];
  return t.forEach((l) => {
    const r = e.find((o) => ln(l, o.value)), a = e[l];
    (r == null ? void 0 : r.value) != null ? n.push(r.id) : a != null && n.push(a.id);
  }), n;
}
const Rl = Symbol.for("vuetify:v-btn-toggle"), dr = E({ ...Ll(), ...sr() }, "VBtnToggle");
H()({ name: "VBtnToggle", props: dr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: r, prev: a, select: o, selected: i } = cr(e, Rl);
  return W(() => {
    const u = Yn.filterProps(e);
    return s(Yn, Z({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var d;
      return [(d = n.default) == null ? void 0 : d.call(n, { isSelected: l, next: r, prev: a, select: o, selected: i })];
    } });
  }), { next: r, prev: a, select: o };
} });
const pr = E({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...q(), ...zt(), ...Be({ tag: "div" }), ...me() }, "VProgressCircular"), vr = H()({ name: "VProgressCircular", props: pr(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, r = j(), { themeClasses: a } = _e(e), { sizeClasses: o, sizeStyles: i } = Pt(e), { textColorClasses: u, textColorStyles: d } = Fe(G(e, "color")), { textColorClasses: c, textColorStyles: p } = Fe(G(e, "bgColor")), { intersectionRef: m, isIntersecting: g } = wl(), { resizeRef: A, contentRect: S } = Ol(), C = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = f(() => Number(e.width)), _ = f(() => i.value ? Number(e.size) : S.value ? S.value.width : Math.max(x.value, 32)), V = f(() => 20 / (1 - x.value / _.value) * 2), z = f(() => x.value / _.value * V.value), P = f(() => T((100 - C.value) / 100 * l));
  return en(() => {
    m.value = r.value, A.value = r.value;
  }), W(() => s(e.tag, { ref: r, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, o.value, u.value, e.class], style: [i.value, d.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : C.value }, { default: () => [s("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${V.value} ${V.value}` }, [s("circle", { class: ["v-progress-circular__underlay", c.value], style: p.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": z.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), s("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": z.value, "stroke-dasharray": l, "stroke-dashoffset": P.value }, null)]), n.default && s("div", { class: "v-progress-circular__content" }, [n.default({ value: C.value })])] })), {};
} }), fr = E({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Rl }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ae, appendIcon: ae, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Lt(), ...q(), ...Je(), ...Nt(), ...st(), ...ur(), ...pn(), ...Mt(), ...fn(), ...$e(), ...Il(), ...zt(), ...Be({ tag: "button" }), ...me(), ...Ot({ variant: "elevated" }) }, "VBtn"), Ml = H()({ name: "VBtn", directives: { Ripple: gn }, props: fr(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = _e(e), { borderClasses: a } = Rt(e), { colorClasses: o, colorStyles: i, variantClasses: u } = dn(e), { densityClasses: d } = it(e), { dimensionStyles: c } = Et(e), { elevationClasses: p } = ut(e), { loaderClasses: m } = vn(e), { locationStyles: g } = Tt(e), { positionClasses: A } = mn(e), { roundedClasses: S } = Ae(e), { sizeClasses: C, sizeStyles: x } = Pt(e), _ = function(y, $) {
    let k = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    const v = Se("useGroupItem");
    if (!v)
      throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const b = ot();
    Ke(Symbol.for(`${$.description}:id`), b);
    const w = fe($, null);
    if (!w) {
      if (!k)
        return w;
      throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${$.description}`);
    }
    const O = G(y, "value"), M = f(() => !(!w.disabled.value && !y.disabled));
    w.register({ id: b, value: O, disabled: M }, v), rt(() => {
      w.unregister(b);
    });
    const R = f(() => w.isSelected(b)), X = f(() => R.value && [w.selectedClass.value, y.selectedClass]);
    return J(R, (F) => {
      v.emit("group:selected", { value: F });
    }), { id: b, isSelected: R, toggle: () => w.select(b, !R.value), select: (F) => w.select(b, F), selectedClass: X, value: O, disabled: M, group: w };
  }(e, e.symbol, !1), V = Vl(e, n), z = f(() => {
    var y;
    return e.active !== void 0 ? e.active : V.isLink.value ? (y = V.isActive) == null ? void 0 : y.value : _ == null ? void 0 : _.isSelected.value;
  }), P = f(() => (_ == null ? void 0 : _.disabled.value) || e.disabled), I = f(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), B = f(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function h(y) {
    var $;
    P.value || V.isLink.value && (y.metaKey || y.ctrlKey || y.shiftKey || y.button !== 0 || n.target === "_blank") || (($ = V.navigate) == null || $.call(V, y), _ == null || _.toggle());
  }
  return function(y, $) {
    J(() => {
      var k;
      return (k = y.isActive) == null ? void 0 : k.value;
    }, (k) => {
      y.isLink.value && k && $ && tt(() => {
        $(!0);
      });
    }, { immediate: !0 });
  }(V, _ == null ? void 0 : _.select), W(() => {
    var w, O;
    const y = V.isLink.value ? "a" : e.tag, $ = !(!e.prependIcon && !l.prepend), k = !(!e.appendIcon && !l.append), v = !(!e.icon || e.icon === !0), b = (_ == null ? void 0 : _.isSelected.value) && (!V.isLink.value || ((w = V.isActive) == null ? void 0 : w.value)) || !_ || ((O = V.isActive) == null ? void 0 : O.value);
    return ye(s(y, { type: y === "a" ? void 0 : "button", class: ["v-btn", _ == null ? void 0 : _.selectedClass.value, { "v-btn--active": z.value, "v-btn--block": e.block, "v-btn--disabled": P.value, "v-btn--elevated": I.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, r.value, a.value, b ? o.value : void 0, d.value, p.value, m.value, A.value, S.value, C.value, u.value, e.class], style: [b ? i.value : void 0, c.value, g.value, x.value, e.style], disabled: P.value || void 0, href: V.href.value, onClick: h, value: B.value }, { default: () => {
      var M;
      return [cn(!0, "v-btn"), !e.icon && $ && s("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? s(Te, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : s(Ie, { key: "prepend-icon", icon: e.prependIcon }, null)]), s("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && v ? s(Ie, { key: "content-icon", icon: e.icon }, null) : s(Te, { key: "content-defaults", disabled: !v, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var R;
        return [((R = l.default) == null ? void 0 : R.call(l)) ?? e.text];
      } })]), !e.icon && k && s("span", { key: "append", class: "v-btn__append" }, [l.append ? s(Te, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : s(Ie, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && s("span", { key: "loader", class: "v-btn__loader" }, [((M = l.loader) == null ? void 0 : M.call(l)) ?? s(vr, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[at("ripple"), !P.value && e.ripple, null]]);
  }), {};
} }), Xe = { h: 0, s: 0, v: 1, a: 1 }, Wt = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }) }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }) }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: be, from: $t }, Ut = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }) }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.s) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }) }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.l) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: vl, from: an }, Zn = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t }], to: yl, from: hl };
var tl;
const Re = { rgb: { ...Wt, inputs: (tl = Wt.inputs) == null ? void 0 : tl.slice(0, 3) }, rgba: Wt, hsl: { ...Ut, inputs: Ut.inputs.slice(0, 3) }, hsla: Ut, hex: { ...Zn, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t }] }, hexa: Zn }, mr = (e) => {
  let { label: t, ...n } = e;
  return s("div", { class: "v-color-picker-edit__input" }, [s("input", n, null), s("span", null, [t])]);
}, gr = ke({ name: "VColorPickerEdit", props: E({ color: Object, disabled: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Re).includes(e) }, modes: { type: Array, default: () => Object.keys(Re), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Re).includes(t)) }, ...q() }, "VColorPickerEdit")(), emits: { "update:color": (e) => !0, "update:mode": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = f(() => e.modes.map((a) => ({ ...Re[a], name: a }))), r = f(() => {
    var i;
    const a = l.value.find((u) => u.name === e.mode);
    if (!a)
      return [];
    const o = e.color ? a.to(e.color) : null;
    return (i = a.inputs) == null ? void 0 : i.map((u) => {
      let { getValue: d, getColor: c, ...p } = u;
      return { ...a.inputProps, ...p, disabled: e.disabled, value: o && d(o), onChange: (m) => {
        const g = m.target;
        g && n("update:color", a.from(c(o ?? Xe, g.value)));
      } };
    });
  });
  return W(() => {
    var a;
    return s("div", { class: ["v-color-picker-edit", e.class], style: e.style }, [(a = r.value) == null ? void 0 : a.map((o) => s(mr, o, null)), l.value.length > 1 && s(Ml, { icon: "$unfold", size: "x-small", variant: "plain", onClick: () => {
      const o = l.value.findIndex((i) => i.name === e.mode);
      n("update:mode", l.value[(o + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), hn = Symbol.for("vuetify:v-slider"), hr = E({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: !1, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, ...$e(), ...st({ elevation: 2 }), ripple: { type: Boolean, default: !0 } }, "Slider"), yr = (e) => {
  let { props: t, steps: n, onSliderStart: l, onSliderMove: r, onSliderEnd: a, getActiveThumb: o } = e;
  const { isRtl: i } = ze(), u = G(t, "reverse"), d = f(() => t.direction === "vertical"), c = f(() => d.value !== u.value), { min: p, max: m, step: g, decimals: A, roundValue: S } = n, C = f(() => parseInt(t.thumbSize, 10)), x = f(() => parseInt(t.tickSize, 10)), _ = f(() => parseInt(t.trackSize, 10)), V = f(() => (m.value - p.value) / g.value), z = G(t, "disabled"), P = f(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), I = f(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), B = f(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), h = le(!1), y = le(0), $ = j(), k = j();
  function v(L) {
    var xe;
    const D = t.direction === "vertical", ge = D ? "top" : "left", ee = D ? "height" : "width", te = D ? "clientY" : "clientX", { [ge]: re, [ee]: Y } = (xe = $.value) == null ? void 0 : xe.$el.getBoundingClientRect(), K = function(pe, Pe) {
      return "touches" in pe && pe.touches.length ? pe.touches[0][Pe] : "changedTouches" in pe && pe.changedTouches.length ? pe.changedTouches[0][Pe] : pe[Pe];
    }(L, te);
    let de = Math.min(Math.max((K - re - y.value) / Y, 0), 1) || 0;
    return (D ? c.value : c.value !== i.value) && (de = 1 - de), S(p.value + de * (m.value - p.value));
  }
  const b = (L) => {
    a({ value: v(L) }), h.value = !1, y.value = 0;
  }, w = (L) => {
    k.value = o(L), k.value && (k.value.focus(), h.value = !0, k.value.contains(L.target) ? y.value = function(D, ge, ee) {
      const te = ee === "vertical", re = ge.getBoundingClientRect(), Y = "touches" in D ? D.touches[0] : D;
      return te ? Y.clientY - (re.top + re.height / 2) : Y.clientX - (re.left + re.width / 2);
    }(L, k.value, t.direction) : (y.value = 0, r({ value: v(L) })), l({ value: v(L) }));
  }, O = { passive: !0, capture: !0 };
  function M(L) {
    r({ value: v(L) });
  }
  function R(L) {
    L.stopPropagation(), L.preventDefault(), b(L), window.removeEventListener("mousemove", M, O), window.removeEventListener("mouseup", R);
  }
  function X(L) {
    var D;
    b(L), window.removeEventListener("touchmove", M, O), (D = L.target) == null || D.removeEventListener("touchend", X);
  }
  const F = (L) => {
    const D = (L - p.value) / (m.value - p.value) * 100;
    return He(isNaN(D) ? 0 : D, 0, 100);
  }, U = G(t, "showTicks"), Q = f(() => U.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((L) => ({ value: L, position: F(L), label: L.toString() })) : Object.keys(t.ticks).map((L) => ({ value: parseFloat(L), position: F(parseFloat(L)), label: t.ticks[L] })) : V.value !== 1 / 0 ? function(L) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({ length: L }, (ge, ee) => D + ee);
  }(V.value + 1).map((L) => {
    const D = p.value + L * g.value;
    return { value: D, position: F(D) };
  }) : [] : []), ue = f(() => Q.value.some((L) => {
    let { label: D } = L;
    return !!D;
  })), ce = { activeThumbRef: k, color: G(t, "color"), decimals: A, disabled: z, direction: G(t, "direction"), elevation: G(t, "elevation"), hasLabels: ue, isReversed: u, indexFromEnd: c, min: p, max: m, mousePressed: h, numTicks: V, onSliderMousedown: function(L) {
    L.preventDefault(), w(L), window.addEventListener("mousemove", M, O), window.addEventListener("mouseup", R, { passive: !1 });
  }, onSliderTouchstart: function(L) {
    var D;
    w(L), window.addEventListener("touchmove", M, O), (D = L.target) == null || D.addEventListener("touchend", X, { passive: !1 });
  }, parsedTicks: Q, parseMouseMove: v, position: F, readonly: G(t, "readonly"), rounded: G(t, "rounded"), roundValue: S, showTicks: U, startOffset: y, step: g, thumbSize: C, thumbColor: P, thumbLabel: G(t, "thumbLabel"), ticks: G(t, "ticks"), tickSize: x, trackColor: I, trackContainerRef: $, trackFillColor: B, trackSize: _, vertical: d };
  return Ke(hn, ce), ce;
}, br = E({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function ie(e, t, n) {
  return H()({ name: e, props: br({ mode: n, origin: t }), setup(l, r) {
    let { slots: a } = r;
    const o = { onBeforeEnter(i) {
      l.origin && (i.style.transformOrigin = l.origin);
    }, onLeave(i) {
      if (l.leaveAbsolute) {
        const { offsetTop: u, offsetLeft: d, offsetWidth: c, offsetHeight: p } = i;
        i._transitionInitialStyles = { position: i.style.position, top: i.style.top, left: i.style.left, width: i.style.width, height: i.style.height }, i.style.position = "absolute", i.style.top = `${u}px`, i.style.left = `${d}px`, i.style.width = `${c}px`, i.style.height = `${p}px`;
      }
      l.hideOnLeave && i.style.setProperty("display", "none", "important");
    }, onAfterLeave(i) {
      if (l.leaveAbsolute && (i != null && i._transitionInitialStyles)) {
        const { position: u, top: d, left: c, width: p, height: m } = i._transitionInitialStyles;
        delete i._transitionInitialStyles, i.style.position = u || "", i.style.top = d || "", i.style.left = c || "", i.style.width = p || "", i.style.height = m || "";
      }
    } };
    return () => {
      const i = l.group ? oa : xt;
      return _t(i, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : o }, a.default);
    };
  } });
}
function Tl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return H()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, r) {
    let { slots: a } = r;
    return () => _t(xt, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, a.default);
  } });
}
function Fl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = ll(`offset-${t}`);
  return { onBeforeEnter(a) {
    a._parent = a.parentNode, a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, [t]: a.style[t] };
  }, onEnter(a) {
    const o = a._initialStyle;
    a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
    const i = `${a[n]}px`;
    a.style[t] = "0", a.offsetHeight, a.style.transition = o.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      a.style[t] = i;
    });
  }, onAfterEnter: r, onEnterCancelled: r, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, [t]: a.style[t] }, a.style.overflow = "hidden", a.style[t] = `${a[n]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(a) {
    e && a._parent && a._parent.classList.remove(e), r(a);
  }
  function r(a) {
    const o = a._initialStyle[t];
    a.style.overflow = a._initialStyle.overflow, o != null && (a.style[t] = o), delete a._initialStyle;
  }
}
ie("fab-transition", "center center", "out-in"), ie("dialog-bottom-transition"), ie("dialog-top-transition"), ie("fade-transition");
const kr = ie("scale-transition");
ie("scroll-x-transition"), ie("scroll-x-reverse-transition"), ie("scroll-y-transition"), ie("scroll-y-reverse-transition"), ie("slide-x-transition"), ie("slide-x-reverse-transition");
const jl = ie("slide-y-transition");
ie("slide-y-reverse-transition"), Tl("expand-transition", Fl());
const Sr = Tl("expand-x-transition", Fl("", !0)), Cr = E({ focused: Boolean, max: { type: Number, required: !0 }, min: { type: Number, required: !0 }, modelValue: { type: Number, required: !0 }, position: { type: Number, required: !0 }, ripple: { type: [Boolean, Object], default: !0 }, ...q() }, "VSliderThumb"), wr = H()({ name: "VSliderThumb", directives: { Ripple: gn }, props: Cr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = fe(hn), { isRtl: a, rtlClasses: o } = ze();
  if (!r)
    throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { thumbColor: i, step: u, disabled: d, thumbSize: c, thumbLabel: p, direction: m, isReversed: g, vertical: A, readonly: S, elevation: C, mousePressed: x, decimals: _, indexFromEnd: V } = r, { textColorClasses: z, textColorStyles: P } = Fe(i), { pageup: I, pagedown: B, end: h, home: y, left: $, right: k, down: v, up: b } = Sa, w = [I, B, h, y, $, k, v, b], O = f(() => u.value ? [1, 2, 3] : [1, 5, 10]);
  function M(R) {
    const X = function(F, U) {
      if (!w.includes(F.key))
        return;
      F.preventDefault();
      const Q = u.value || 0.1, ue = (e.max - e.min) / Q;
      if ([$, k, v, b].includes(F.key)) {
        const ce = (A.value ? [a.value ? $ : k, g.value ? v : b] : V.value !== a.value ? [$, b] : [k, b]).includes(F.key) ? 1 : -1, L = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
        U += ce * Q * O.value[L];
      } else
        F.key === y ? U = e.min : F.key === h ? U = e.max : U -= (F.key === B ? 1 : -1) * Q * (ue > 100 ? ue / 10 : 10);
      return Math.max(e.min, Math.min(e.max, U));
    }(R, e.modelValue);
    X != null && l("update:modelValue", X);
  }
  return W(() => {
    const R = T(V.value ? 100 - e.position : e.position, "%"), { elevationClasses: X } = ut(f(() => d.value ? void 0 : C.value));
    return s("div", { class: ["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && x.value }, e.class, o.value], style: [{ "--v-slider-thumb-position": R, "--v-slider-thumb-size": T(c.value) }, e.style], role: "slider", tabindex: d.value ? -1 : 0, "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.modelValue, "aria-readonly": !!S.value, "aria-orientation": m.value, onKeydown: S.value ? void 0 : M }, [s("div", { class: ["v-slider-thumb__surface", z.value, X.value], style: { ...P.value } }, null), ye(s("div", { class: ["v-slider-thumb__ripple", z.value], style: P.value }, null), [[at("ripple"), e.ripple, null, { circle: !0, center: !0 }]]), s(kr, { origin: "bottom center" }, { default: () => {
      var F;
      return [ye(s("div", { class: "v-slider-thumb__label-container" }, [s("div", { class: ["v-slider-thumb__label"] }, [s("div", null, [((F = n["thumb-label"]) == null ? void 0 : F.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(u.value ? _.value : 1)])])]), [[Vt, p.value && e.focused || p.value === "always"]])];
    } })]);
  }), {};
} }), _r = E({ start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...q() }, "VSliderTrack"), xr = H()({ name: "VSliderTrack", props: _r(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const l = fe(hn);
  if (!l)
    throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: r, parsedTicks: a, rounded: o, showTicks: i, tickSize: u, trackColor: d, trackFillColor: c, trackSize: p, vertical: m, min: g, max: A, indexFromEnd: S } = l, { roundedClasses: C } = Ae(o), { backgroundColorClasses: x, backgroundColorStyles: _ } = Ye(c), { backgroundColorClasses: V, backgroundColorStyles: z } = Ye(d), P = f(() => `inset-${m.value ? "block" : "inline"}-${S.value ? "end" : "start"}`), I = f(() => m.value ? "height" : "width"), B = f(() => ({ [P.value]: "0%", [I.value]: "100%" })), h = f(() => e.stop - e.start), y = f(() => ({ [P.value]: T(e.start, "%"), [I.value]: T(h.value, "%") })), $ = f(() => i.value ? (m.value ? a.value.slice().reverse() : a.value).map((k, v) => {
    var w;
    const b = k.value !== g.value && k.value !== A.value ? T(k.position, "%") : void 0;
    return s("div", { key: k.value, class: ["v-slider-track__tick", { "v-slider-track__tick--filled": k.position >= e.start && k.position <= e.stop, "v-slider-track__tick--first": k.value === g.value, "v-slider-track__tick--last": k.value === A.value }], style: { [P.value]: b } }, [(k.label || n["tick-label"]) && s("div", { class: "v-slider-track__tick-label" }, [((w = n["tick-label"]) == null ? void 0 : w.call(n, { tick: k, index: v })) ?? k.label])]);
  }) : []);
  return W(() => s("div", { class: ["v-slider-track", C.value, e.class], style: [{ "--v-slider-track-size": T(p.value), "--v-slider-tick-size": T(u.value) }, e.style] }, [s("div", { class: ["v-slider-track__background", V.value, { "v-slider-track__background--opacity": !!r.value || !c.value }], style: { ...B.value, ...z.value } }, null), s("div", { class: ["v-slider-track__fill", x.value], style: { ...y.value, ..._.value } }, null), i.value && s("div", { class: ["v-slider-track__ticks", { "v-slider-track__ticks--always-show": i.value === "always" }] }, [$.value])])), {};
} });
function Dl(e) {
  const { t } = function() {
    const n = fe(_l);
    if (!n)
      throw new Error("[Vuetify] Could not find injected locale instance");
    return n;
  }();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], a = e[`onClick:${l}`], o = a && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return s(Ie, { icon: e[`${l}Icon`], "aria-label": o, onClick: a }, null);
  } };
}
const Vr = E({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...q(), ...un({ transition: { component: jl, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Ir = H()({ name: "VMessages", props: Vr(), setup(e, t) {
  let { slots: n } = t;
  const l = f(() => et(e.messages)), { textColorClasses: r, textColorStyles: a } = Fe(f(() => e.color));
  return W(() => s(Ue, { transition: e.transition, tag: "div", class: ["v-messages", r.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((o, i) => s("div", { class: "v-messages__message", key: `${i}-${l.value}` }, [n.message ? n.message({ message: o }) : o]))] })), {};
} }), yn = E({ focused: Boolean, "onUpdate:focused": qe() }, "focus");
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  const n = Ce(e, "focused");
  return { focusClasses: f(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const Br = Symbol.for("vuetify:form"), $r = E({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...yn() }, "validation");
function Ar(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ot();
  const l = Ce(e, "modelValue"), r = f(() => e.validationValue === void 0 ? l.value : e.validationValue), a = fe(Br, null), o = j([]), i = le(!0), u = f(() => !(!et(l.value === "" ? null : l.value).length && !et(r.value === "" ? null : r.value).length)), d = f(() => !!(e.disabled ?? (a == null ? void 0 : a.isDisabled.value))), c = f(() => !!(e.readonly ?? (a == null ? void 0 : a.isReadonly.value))), p = f(() => {
    var z;
    return (z = e.errorMessages) != null && z.length ? et(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), m = f(() => {
    let z = (e.validateOn ?? (a == null ? void 0 : a.validateOn.value)) || "input";
    z === "lazy" && (z = "input lazy");
    const P = new Set((z == null ? void 0 : z.split(" ")) ?? []);
    return { blur: P.has("blur") || P.has("input"), input: P.has("input"), submit: P.has("submit"), lazy: P.has("lazy") };
  }), g = f(() => {
    var z;
    return !e.error && !((z = e.errorMessages) != null && z.length) && (!e.rules.length || (i.value ? !o.value.length && !m.value.lazy || null : !o.value.length));
  }), A = le(!1), S = f(() => ({ [`${t}--error`]: g.value === !1, [`${t}--dirty`]: u.value, [`${t}--disabled`]: d.value, [`${t}--readonly`]: c.value })), C = f(() => e.name ?? N(n));
  function x() {
    l.value = null, tt(_);
  }
  function _() {
    i.value = !0, m.value.lazy ? o.value = [] : V(!0);
  }
  async function V() {
    let z = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const P = [];
    A.value = !0;
    for (const I of e.rules) {
      if (P.length >= +(e.maxErrors ?? 1))
        break;
      const B = typeof I == "function" ? I : () => I, h = await B(r.value);
      h !== !0 && (h === !1 || typeof h == "string" ? P.push(h || "") : console.warn(`${h} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    return o.value = P, A.value = !1, i.value = z, o.value;
  }
  return al(() => {
    a == null || a.register({ id: C.value, validate: V, reset: x, resetValidation: _ });
  }), rt(() => {
    a == null || a.unregister(C.value);
  }), It(async () => {
    m.value.lazy || await V(!0), a == null || a.update(C.value, g.value, p.value);
  }), Kt(() => m.value.input, () => {
    J(r, () => {
      if (r.value != null)
        V();
      else if (e.focused) {
        const z = J(() => e.focused, (P) => {
          P || V(), z();
        });
      }
    });
  }), Kt(() => m.value.blur, () => {
    J(() => e.focused, (z) => {
      z || V();
    });
  }), J(g, () => {
    a == null || a.update(C.value, g.value, p.value);
  }), { errorMessages: p, isDirty: u, isDisabled: d, isReadonly: c, isPristine: i, isValid: g, isValidating: A, reset: x, resetValidation: _, validate: V, validationClasses: S };
}
const kn = E({ id: String, appendIcon: ae, centerAffix: { type: Boolean, default: !0 }, prependIcon: ae, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": qe(), "onClick:append": qe(), ...q(), ...Je(), ...$r() }, "VInput"), Ct = H()({ name: "VInput", props: { ...kn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: r } = t;
  const { densityClasses: a } = it(e), { rtlClasses: o } = ze(), { InputIcon: i } = Dl(e), u = ot(), d = f(() => e.id || `input-${u}`), c = f(() => `${d.value}-messages`), { errorMessages: p, isDirty: m, isDisabled: g, isReadonly: A, isPristine: S, isValid: C, isValidating: x, reset: _, resetValidation: V, validate: z, validationClasses: P } = Ar(e, "v-input", d), I = f(() => ({ id: d, messagesId: c, isDirty: m, isDisabled: g, isReadonly: A, isPristine: S, isValid: C, isValidating: x, reset: _, resetValidation: V, validate: z })), B = f(() => {
    var h;
    return (h = e.errorMessages) != null && h.length || !S.value && p.value.length ? p.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return W(() => {
    var v, b, w, O;
    const h = !(!l.prepend && !e.prependIcon), y = !(!l.append && !e.appendIcon), $ = B.value.length > 0, k = !e.hideDetails || e.hideDetails === "auto" && ($ || !!l.details);
    return s("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, a.value, o.value, P.value, e.class], style: e.style }, [h && s("div", { key: "prepend", class: "v-input__prepend" }, [(v = l.prepend) == null ? void 0 : v.call(l, I.value), e.prependIcon && s(i, { key: "prepend-icon", name: "prepend" }, null)]), l.default && s("div", { class: "v-input__control" }, [(b = l.default) == null ? void 0 : b.call(l, I.value)]), y && s("div", { key: "append", class: "v-input__append" }, [e.appendIcon && s(i, { key: "append-icon", name: "append" }, null), (w = l.append) == null ? void 0 : w.call(l, I.value)]), k && s("div", { class: "v-input__details" }, [s(Ir, { id: c.value, active: $, messages: B.value }, { message: l.message }), (O = l.details) == null ? void 0 : O.call(l, I.value)])]);
  }), { reset: _, resetValidation: V, validate: z, isValid: C, errorMessages: p };
} }), zr = E({ text: String, clickable: Boolean, ...q(), ...me() }, "VLabel"), Hl = H()({ name: "VLabel", props: zr(), setup(e, t) {
  let { slots: n } = t;
  return W(() => {
    var l;
    return s("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Pr = E({ ...yn(), ...hr(), ...kn(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Jn = H()({ name: "VSlider", props: Pr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, start: (e) => !0, end: (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = j(), { rtlClasses: a } = ze(), o = ((I) => {
    const B = f(() => parseFloat(I.min)), h = f(() => parseFloat(I.max)), y = f(() => +I.step > 0 ? parseFloat(I.step) : 0), $ = f(() => Math.max(xn(y.value), xn(B.value)));
    return { min: B, max: h, step: y, decimals: $, roundValue: function(k) {
      if (k = parseFloat(k), y.value <= 0)
        return k;
      const v = He(k, B.value, h.value), b = B.value % y.value, w = Math.round((v - b) / y.value) * y.value + b;
      return parseFloat(Math.min(w, h.value).toFixed($.value));
    } };
  })(e), i = Ce(e, "modelValue", void 0, (I) => o.roundValue(I ?? o.min.value)), { min: u, max: d, mousePressed: c, roundValue: p, onSliderMousedown: m, onSliderTouchstart: g, trackContainerRef: A, position: S, hasLabels: C, readonly: x } = yr({ props: e, steps: o, onSliderStart: () => {
    l("start", i.value);
  }, onSliderEnd: (I) => {
    let { value: B } = I;
    const h = p(B);
    i.value = h, l("end", h);
  }, onSliderMove: (I) => {
    let { value: B } = I;
    return i.value = p(B);
  }, getActiveThumb: () => {
    var I;
    return (I = r.value) == null ? void 0 : I.$el;
  } }), { isFocused: _, focus: V, blur: z } = bn(e), P = f(() => S(i.value));
  return W(() => {
    const I = Ct.filterProps(e), B = !!(e.label || n.label || n.prepend);
    return s(Ct, Z({ class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || C.value, "v-slider--focused": _.value, "v-slider--pressed": c.value, "v-slider--disabled": e.disabled }, a.value, e.class], style: e.style }, I, { focused: _.value }), { ...n, prepend: B ? (h) => {
      var y, $;
      return s(he, null, [((y = n.label) == null ? void 0 : y.call(n, h)) ?? (e.label ? s(Hl, { id: h.id.value, class: "v-slider__label", text: e.label }, null) : void 0), ($ = n.prepend) == null ? void 0 : $.call(n, h)]);
    } : void 0, default: (h) => {
      let { id: y, messagesId: $ } = h;
      return s("div", { class: "v-slider__container", onMousedown: x.value ? void 0 : m, onTouchstartPassive: x.value ? void 0 : g }, [s("input", { id: y.value, name: e.name || y.value, disabled: !!e.disabled, readonly: !!e.readonly, tabindex: "-1", value: i.value }, null), s(xr, { ref: A, start: 0, stop: P.value }, { "tick-label": n["tick-label"] }), s(wr, { ref: r, "aria-describedby": $.value, focused: _.value, min: u.value, max: d.value, modelValue: i.value, "onUpdate:modelValue": (k) => i.value = k, position: P.value, elevation: e.elevation, onFocus: V, onBlur: z, ripple: e.ripple }, { "thumb-label": n["thumb-label"] })]);
    } });
  }), {};
} }), Nr = ke({ name: "VColorPickerPreview", props: E({ color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...q() }, "VColorPickerPreview")(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = new AbortController();
  async function r() {
    if (!Sn)
      return;
    const a = new window.EyeDropper();
    try {
      const o = hl((await a.open({ signal: l.signal })).sRGBHex);
      n("update:color", { ...e.color ?? Xe, ...o });
    } catch {
    }
  }
  return ia(() => l.abort()), W(() => {
    var a, o;
    return s("div", { class: ["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class], style: e.style }, [Sn && s("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [s(Ml, { onClick: r, icon: "$eyeDropper", variant: "plain", density: "comfortable" }, null)]), s("div", { class: "v-color-picker-preview__dot" }, [s("div", { style: { background: ml(e.color ?? Xe) } }, null)]), s("div", { class: "v-color-picker-preview__sliders" }, [s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__hue", modelValue: (a = e.color) == null ? void 0 : a.h, "onUpdate:modelValue": (i) => n("update:color", { ...e.color ?? Xe, h: i }), step: 0, min: 0, max: 360, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null), !e.hideAlpha && s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1, "onUpdate:modelValue": (i) => n("update:color", { ...e.color ?? Xe, a: i }), step: 1 / 256, min: 0, max: 1, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null)])]);
  }), {};
} }), Er = { red: { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, pink: { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, purple: { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, deepPurple: { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, indigo: { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, blue: { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, lightBlue: { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, cyan: { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, teal: { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, green: { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, lightGreen: { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, lime: { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, yellow: { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, amber: { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, orange: { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, deepOrange: { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, brown: { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, blueGrey: { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, grey: { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, shades: { black: "#000000", white: "#ffffff", transparent: "#ffffff00" } }, Or = E({ swatches: { type: Array, default: () => function(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}(Er) }, disabled: Boolean, color: Object, maxHeight: [Number, String], ...q() }, "VColorPickerSwatches"), Lr = ke({ name: "VColorPickerSwatches", props: Or(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  return W(() => s("div", { class: ["v-color-picker-swatches", e.class], style: [{ maxHeight: T(e.maxHeight) }, e.style] }, [s("div", null, [e.swatches.map((l) => s("div", { class: "v-color-picker-swatches__swatch" }, [l.map((r) => {
    const a = Ve(r), o = $t(a), i = fl(a);
    return s("div", { class: "v-color-picker-swatches__color", onClick: () => o && n("update:color", o) }, [s("div", { style: { background: i } }, [e.color && ln(e.color, o) ? s(Ie, { size: "x-small", icon: "$success", color: Oa(r, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), Wl = E({ color: String, ...Lt(), ...q(), ...Nt(), ...st(), ...Mt(), ...fn(), ...$e(), ...Be(), ...me() }, "VSheet"), Qn = H()({ name: "VSheet", props: Wl(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { backgroundColorClasses: r, backgroundColorStyles: a } = Ye(G(e, "color")), { borderClasses: o } = Rt(e), { dimensionStyles: i } = Et(e), { elevationClasses: u } = ut(e), { locationStyles: d } = Tt(e), { positionClasses: c } = mn(e), { roundedClasses: p } = Ae(e);
  return W(() => s(e.tag, { class: ["v-sheet", l.value, r.value, o.value, u.value, c.value, p.value, e.class], style: [a.value, i.value, d.value, e.style] }, n)), {};
} }), Rr = ke({ name: "VColorPicker", props: E({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Re).includes(e) }, modes: { type: Array, default: () => Object.keys(Re), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Re).includes(t)) }, showSwatches: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...ul(Wl({ width: 300 }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"]) }, "VColorPicker")(), emits: { "update:modelValue": (e) => !0, "update:mode": (e) => !0 }, setup(e) {
  const t = Ce(e, "mode"), n = j(null), l = Ce(e, "modelValue", void 0, (o) => {
    if (o == null || o === "")
      return null;
    let i;
    try {
      i = $t(Ve(o));
    } catch (u) {
      return Ge(u), null;
    }
    return n.value && (i = { ...i, h: n.value.h }, n.value = null), i;
  }, (o) => o ? function(i, u) {
    if (u == null || typeof u == "string") {
      const d = yl(i);
      return i.a === 1 ? d.slice(0, 7) : d;
    }
    if (typeof u == "object") {
      let d;
      return Le(u, ["r", "g", "b"]) ? d = be(i) : Le(u, ["h", "s", "l"]) ? d = vl(i) : Le(u, ["h", "s", "v"]) && (d = i), function(c, p) {
        if (p) {
          const { a: m, ...g } = c;
          return g;
        }
        return c;
      }(d, !Le(u, ["a"]) && i.a === 1);
    }
    return i;
  }(o, e.modelValue) : null), { rtlClasses: r } = ze(), a = (o) => {
    l.value = o, n.value = o;
  };
  return It(() => {
    e.modes.includes(t.value) || (t.value = e.modes[0]);
  }), At({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), W(() => {
    const o = Qn.filterProps(e);
    return s(Qn, Z({ rounded: e.rounded, elevation: e.elevation, theme: e.theme, class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": ml({ ...l.value ?? Xe, a: 1 }) }, e.style] }, o, { maxWidth: e.width }), { default: () => [!e.hideCanvas && s(ir, { key: "canvas", color: l.value, "onUpdate:color": a, disabled: e.disabled, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && s("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && s(Nr, { key: "preview", color: l.value, "onUpdate:color": a, hideAlpha: !t.value.endsWith("a"), disabled: e.disabled }, null), !e.hideInputs && s(gr, { key: "edit", modes: e.modes, mode: t.value, "onUpdate:mode": (i) => t.value = i, color: l.value, "onUpdate:color": a, disabled: e.disabled }, null)]), e.showSwatches && s(Lr, { key: "swatches", color: l.value, "onUpdate:color": a, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled }, null)] });
  }), {};
} }), Mr = E({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...q(), ...un({ transition: { component: jl } }) }, "VCounter"), Tr = H()({ name: "VCounter", functional: !0, props: Mr(), setup(e, t) {
  let { slots: n } = t;
  const l = f(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return W(() => s(Ue, { transition: e.transition }, { default: () => [ye(s("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Vt, e.active]])] })), {};
} }), Fr = E({ floating: Boolean, ...q() }, "VFieldLabel"), gt = H()({ name: "VFieldLabel", props: Fr(), setup(e, t) {
  let { slots: n } = t;
  return W(() => s(Hl, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), jr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ul = E({ appendInnerIcon: ae, bgColor: String, clearable: Boolean, clearIcon: { type: ae, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ae, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => jr.includes(e) }, "onClick:clear": qe(), "onClick:appendInner": qe(), "onClick:prependInner": qe(), ...q(), ...pn(), ...$e(), ...me() }, "VField"), Xl = H()({ name: "VField", inheritAttrs: !1, props: { id: String, ...yn(), ...Ul() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const { themeClasses: a } = _e(e), { loaderClasses: o } = vn(e), { focusClasses: i, isFocused: u, focus: d, blur: c } = bn(e), { InputIcon: p } = Dl(e), { roundedClasses: m } = Ae(e), { rtlClasses: g } = ze(), A = f(() => e.dirty || e.active), S = f(() => !(e.singleLine || !e.label && !r.label)), C = ot(), x = f(() => e.id || `input-${C}`), _ = f(() => `${x.value}-messages`), V = j(), z = j(), P = j(), I = f(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: B, backgroundColorStyles: h } = Ye(G(e, "bgColor")), { textColorClasses: y, textColorStyles: $ } = Fe(f(() => e.error || e.disabled ? void 0 : A.value && u.value ? e.color : e.baseColor));
  J(A, (b) => {
    if (S.value) {
      const w = V.value.$el, O = z.value.$el;
      requestAnimationFrame(() => {
        const M = function(ee) {
          const te = ee.getBoundingClientRect(), re = getComputedStyle(ee), Y = re.transform;
          if (Y) {
            let K, de, xe, pe, Pe;
            if (Y.startsWith("matrix3d("))
              K = Y.slice(9, -1).split(/, /), de = +K[0], xe = +K[5], pe = +K[12], Pe = +K[13];
            else {
              if (!Y.startsWith("matrix("))
                return new Dt(te);
              K = Y.slice(7, -1).split(/, /), de = +K[0], xe = +K[3], pe = +K[4], Pe = +K[5];
            }
            const Ft = re.transformOrigin, ql = te.x - pe - (1 - de) * parseFloat(Ft), Gl = te.y - Pe - (1 - xe) * parseFloat(Ft.slice(Ft.indexOf(" ") + 1)), Yl = de ? te.width / de : ee.offsetWidth + 1, Kl = xe ? te.height / xe : ee.offsetHeight + 1;
            return new Dt({ x: ql, y: Gl, width: Yl, height: Kl });
          }
          return new Dt(te);
        }(w), R = O.getBoundingClientRect(), X = R.x - M.x, F = R.y - M.y - (M.height / 2 - R.height / 2), U = R.width / 0.75, Q = Math.abs(U - M.width) > 1 ? { maxWidth: T(U) } : void 0, ue = getComputedStyle(w), ce = getComputedStyle(O), L = 1e3 * parseFloat(ue.transitionDuration) || 150, D = parseFloat(ce.getPropertyValue("--v-field-label-scale")), ge = ce.getPropertyValue("color");
        w.style.visibility = "visible", O.style.visibility = "hidden", function(ee, te, re) {
          if (ee.animate === void 0)
            return { finished: Promise.resolve() };
          let Y;
          try {
            Y = ee.animate(te, re);
          } catch {
            return { finished: Promise.resolve() };
          }
          return Y.finished === void 0 && (Y.finished = new Promise((K) => {
            Y.onfinish = () => {
              K(Y);
            };
          })), Y;
        }(w, { transform: `translate(${X}px, ${F}px) scale(${D})`, color: ge, ...Q }, { duration: L, easing: "cubic-bezier(0.4, 0, 0.2, 1)", direction: b ? "normal" : "reverse" }).finished.then(() => {
          w.style.removeProperty("visibility"), O.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const k = f(() => ({ isActive: A, isFocused: u, controlRef: P, blur: c, focus: d }));
  function v(b) {
    b.target !== document.activeElement && b.preventDefault();
  }
  return W(() => {
    var X, F, U;
    const b = e.variant === "outlined", w = r["prepend-inner"] || e.prependInnerIcon, O = !(!e.clearable && !r.clear), M = !!(r["append-inner"] || e.appendInnerIcon || O), R = r.label ? r.label({ ...k.value, label: e.label, props: { for: x.value } }) : e.label;
    return s("div", Z({ class: ["v-field", { "v-field--active": A.value, "v-field--appended": M, "v-field--center-affix": e.centerAffix ?? !I.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": w, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !R, [`v-field--variant-${e.variant}`]: !0 }, a.value, B.value, i.value, o.value, m.value, g.value, e.class], style: [h.value, e.style], onClick: v }, n), [s("div", { class: "v-field__overlay" }, null), s(xl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: r.loader }), w && s("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && s(p, { key: "prepend-icon", name: "prependInner" }, null), (X = r["prepend-inner"]) == null ? void 0 : X.call(r, k.value)]), s("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && S.value && s(gt, { key: "floating-label", ref: z, class: [y.value], floating: !0, for: x.value, style: $.value }, { default: () => [R] }), s(gt, { ref: V, for: x.value }, { default: () => [R] }), (F = r.default) == null ? void 0 : F.call(r, { ...k.value, props: { id: x.value, class: "v-field__input", "aria-describedby": _.value }, focus: d, blur: c })]), O && s(Sr, { key: "clear" }, { default: () => [ye(s("div", { class: "v-field__clearable", onMousedown: (Q) => {
      Q.preventDefault(), Q.stopPropagation();
    } }, [r.clear ? r.clear() : s(p, { name: "clear" }, null)]), [[Vt, e.dirty]])] }), M && s("div", { key: "append", class: "v-field__append-inner" }, [(U = r["append-inner"]) == null ? void 0 : U.call(r, k.value), e.appendInnerIcon && s(p, { key: "append-icon", name: "appendInner" }, null)]), s("div", { class: ["v-field__outline", y.value], style: $.value }, [b && s(he, null, [s("div", { class: "v-field__outline__start" }, null), S.value && s("div", { class: "v-field__outline__notch" }, [s(gt, { ref: z, floating: !0, for: x.value }, { default: () => [R] })]), s("div", { class: "v-field__outline__end" }, null)]), I.value && S.value && s(gt, { ref: z, floating: !0, for: x.value }, { default: () => [R] })])]);
  }), { controlRef: P };
} });
function Dr(e) {
  return sl(e, Object.keys(Xl.props).filter((t) => {
    return n = t, !cl.test(n) && t !== "class" && t !== "style";
    var n;
  }));
}
const Xt = Symbol("Forwarded refs");
function qt(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
const Hr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Wr = E({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...kn(), ...Ul() }, "VTextField"), Ur = H()({ name: "VTextField", directives: { Intersect: Sl }, inheritAttrs: !1, props: Wr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const a = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: u } = bn(e), d = f(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), c = f(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), p = f(() => ["plain", "underlined"].includes(e.variant));
  function m(I, B) {
    var h, y;
    e.autofocus && I && ((y = (h = B[0].target) == null ? void 0 : h.focus) == null || y.call(h));
  }
  const g = j(), A = j(), S = j(), C = f(() => Hr.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
  function x() {
    var I;
    S.value !== document.activeElement && ((I = S.value) == null || I.focus()), o.value || i();
  }
  function _(I) {
    l("mousedown:control", I), I.target !== S.value && (x(), I.preventDefault());
  }
  function V(I) {
    x(), l("click:control", I);
  }
  function z(I) {
    I.stopPropagation(), x(), tt(() => {
      a.value = null, function(B) {
        for (var h = arguments.length, y = new Array(h > 1 ? h - 1 : 0), $ = 1; $ < h; $++)
          y[$ - 1] = arguments[$];
        if (Array.isArray(B))
          for (const k of B)
            k(...y);
        else
          typeof B == "function" && B(...y);
      }(e["onClick:clear"], I);
    });
  }
  function P(I) {
    var h;
    const B = I.target;
    if (a.value = B.value, ((h = e.modelModifiers) == null ? void 0 : h.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const y = [B.selectionStart, B.selectionEnd];
      tt(() => {
        B.selectionStart = y[0], B.selectionEnd = y[1];
      });
    }
  }
  return W(() => {
    const I = !!(r.counter || e.counter !== !1 && e.counter != null), B = !(!I && !r.details), [h, y] = function(b) {
      const [w, O] = _n(b, [cl]), M = ul(w, Ca), [R, X] = _n(O, ["class", "style", "id", /^data-/]);
      return Object.assign(R, w), Object.assign(X, M), [R, X];
    }(n), { modelValue: $, ...k } = Ct.filterProps(e), v = Dr(e);
    return s(Ct, Z({ ref: g, modelValue: a.value, "onUpdate:modelValue": (b) => a.value = b, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": p.value }, e.class], style: e.style }, h, k, { centerAffix: !p.value, focused: o.value }), { ...r, default: (b) => {
      let { id: w, isDisabled: O, isDirty: M, isReadonly: R, isValid: X } = b;
      return s(Xl, Z({ ref: A, onMousedown: _, onClick: V, "onClick:clear": z, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, v, { id: w.value, active: C.value || M.value, dirty: M.value || e.dirty, disabled: O.value, focused: o.value, error: X.value === !1 }), { ...r, default: (F) => {
        let { props: { class: U, ...Q } } = F;
        const ue = ye(s("input", Z({ ref: S, value: a.value, onInput: P, autofocus: e.autofocus, readonly: R.value, disabled: O.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: x, onBlur: u }, Q, y), null), [[at("intersect"), { handler: m }, null, { once: !0 }]]);
        return s(he, null, [e.prefix && s("span", { class: "v-text-field__prefix" }, [s("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), r.default ? s("div", { class: U, "data-no-activator": "" }, [r.default(), ue]) : sa(ue, { class: U }), e.suffix && s("span", { class: "v-text-field__suffix" }, [s("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: B ? (b) => {
      var w;
      return s(he, null, [(w = r.details) == null ? void 0 : w.call(r, b), I && s(he, null, [s("span", null, null), s(Tr, { active: e.persistentCounter || o.value, value: d.value, max: c.value }, r.counter)])]);
    } : void 0 });
  }), function(I) {
    for (var B = arguments.length, h = new Array(B > 1 ? B - 1 : 0), y = 1; y < B; y++)
      h[y - 1] = arguments[y];
    return I[Xt] = h, new Proxy(I, { get($, k) {
      if (Reflect.has($, k))
        return Reflect.get($, k);
      if (typeof k != "symbol" && !k.startsWith("$") && !k.startsWith("__")) {
        for (const v of h)
          if (v.value && Reflect.has(v.value, k)) {
            const b = Reflect.get(v.value, k);
            return typeof b == "function" ? b.bind(v.value) : b;
          }
      }
    }, has($, k) {
      if (Reflect.has($, k))
        return !0;
      if (typeof k == "symbol" || k.startsWith("$") || k.startsWith("__"))
        return !1;
      for (const v of h)
        if (v.value && Reflect.has(v.value, k))
          return !0;
      return !1;
    }, set($, k, v) {
      if (Reflect.has($, k))
        return Reflect.set($, k, v);
      if (typeof k == "symbol" || k.startsWith("$") || k.startsWith("__"))
        return !1;
      for (const b of h)
        if (b.value && Reflect.has(b.value, k))
          return Reflect.set(b.value, k, v);
      return !1;
    }, getOwnPropertyDescriptor($, k) {
      var b;
      const v = Reflect.getOwnPropertyDescriptor($, k);
      if (v)
        return v;
      if (typeof k != "symbol" && !k.startsWith("$") && !k.startsWith("__")) {
        for (const w of h) {
          if (!w.value)
            continue;
          const O = qt(w.value, k) ?? ("_" in w.value ? qt((b = w.value._) == null ? void 0 : b.setupState, k) : void 0);
          if (O)
            return O;
        }
        for (const w of h) {
          const O = w.value && w.value[Xt];
          if (!O)
            continue;
          const M = O.slice();
          for (; M.length; ) {
            const R = M.shift(), X = qt(R.value, k);
            if (X)
              return X;
            const F = R.value && R.value[Xt];
            F && M.push(...F);
          }
        }
      }
    } });
  }({}, g, A, S);
} }), Xr = { key: 1 }, qr = { key: 0, class: "text-error ms-1" }, Gr = ((e) => (ha("data-v-c810e76d"), e = e(), ya(), e))(() => ol("div", { class: "position-elm-helper" }, null, -1)), el = ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
})(wt({ inheritAttrs: !1, __name: "VColorField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, canvasHeight: {}, dotSize: {}, hideCanvas: {}, hideInputs: {}, hideSliders: {}, mode: {}, modes: {}, showSwatches: {}, swatches: {}, swatchesMaxHeight: {}, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { type: [String, null, Boolean], default: "pip" }, pipBorderRadius: { default: "50%" }, pipSize: {}, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(e, { emit: t }) {
  var k;
  const n = ua(), l = ca(), r = t, a = e, o = { elevation: 5, hover: !1, loading: !1, verticalOffset: 28 }, i = j({ VCard: { ...o, ...a.cardProps }, VColorPicker: { elevation: 0, canvasHeight: a.canvasHeight, dotSize: a.dotSize, hideCanvas: a.hideCanvas, hideInputs: a.hideInputs, hideSliders: a.hideSliders, mode: a.mode, modes: a.modes, showSwatches: a.showSwatches, swatches: a.swatches, swatchesMaxHeight: a.swatchesMaxHeight, ...a.colorPickerProps } }), u = j(null), d = j({}), c = j(!1), p = j(null), m = j(n.modelValue), g = j(n.modelValue), A = j((k = i.value.VColorPicker) == null ? void 0 : k.mode), S = j(a.theme ?? void 0);
  let C = Qt({ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 });
  const x = j({ density: a.density, modelValue: g, pip: a.pip, pipBorder: a.pipBorder, pipBorderRadius: a.pipBorderRadius, pipIcon: a.pipIcon, pipSize: a.iconSize });
  J(() => n.modelValue, (v) => {
    h(v);
  });
  const _ = f(() => ((v) => {
    const { name: b, readonly: w, readonlyInput: O } = v;
    return { [`${Oe}--text-field-${b}`]: !0, [`${Oe}--text-field-readonly`]: w ?? !1, [`${Oe}--text-field-readonly-input`]: !(!O || w), [`${Oe}--text-field`]: !0 };
  })({ name: a.name, readonly: a.readonly, readonlyInput: a.readonlyInput })), V = f(() => a.readonly || a.readonlyInput), z = f(() => {
    if (a.iconHoverColor !== !1)
      return typeof a.iconHoverColor == "string" ? a.iconHoverColor : a.color ?? void 0;
  }), P = f(() => ((v) => {
    const { fullWidth: b } = v;
    return { [`${Oe}--card`]: !0, [`${Oe}--card-full-width`]: b };
  })({ fullWidth: a.cardFieldWidth }));
  function I(v) {
    (v !== "textField" || a.readonlyInput || a.readonly) && (v === "textFieldIcon" && (a.readonlyInput || a.readonly) || B());
  }
  function B(v) {
    var ue;
    const b = { left: 0, right: 0, top: 0, width: 0 }, w = p.value;
    if (!c.value && (v === "keyup" || v === "clear"))
      return void (v === "clear" && y(""));
    if (c.value = !c.value, !c.value)
      return void (d.value.display = "none");
    const O = (w == null ? void 0 : w.getBoundingClientRect()) ?? b;
    let M = (w == null ? void 0 : w.offsetHeight) ?? 0, R = 300, X = (O == null ? void 0 : O.left) ?? 0, F = (O == null ? void 0 : O.right) ?? 0;
    const U = (ue = p == null ? void 0 : p.value) == null ? void 0 : ue.querySelector(".v-field__input"), Q = (U == null ? void 0 : U.getBoundingClientRect()) ?? b;
    M = U == null ? void 0 : U.offsetHeight, R = (U == null ? void 0 : U.offsetWidth) ?? 0, X = Q.left, F = Q.right - Q.width, C = { bottom: "initial", height: M, left: X, right: F, top: window.scrollY + (O == null ? void 0 : O.top), width: a.cardFieldWidth ? R : "auto" }, function() {
      var Y, K, de;
      let ce = Number(C.top) + Number(C.height), L = "initial", D = Number(a.cardOffsetY) ?? 0;
      const ge = Number(a.cardOffsetX) ?? 0;
      (a.hint || a.messages) && (D += ((Y = i.value.VCard) == null ? void 0 : Y.verticalOffset) ?? 0), ce += D, (K = a.open) != null && K.includes("top") && (L = window.innerHeight - ce + Number(C.height) + 2 * D, ce = "initial");
      let ee = Number(C.left) + ge, te = C.right ?? 0;
      a.cardFieldWidth ? (ee = C.left, te = "initial") : (te = "initial", (de = a.open) != null && de.includes("right") && (ee = "initial", te = Number(C.right) + ge));
      const re = { bottom: Ee({ value: L }), display: "block", left: Ee({ value: ee }), minWidth: Ee({ value: C.width }), padding: Ee({ value: a.cardPadding }), right: Ee({ value: te }), top: Ee({ value: ce }), width: Ee({ value: C.width }) };
      d.value = re;
    }();
  }
  function h(v) {
    let b = v ?? "";
    if (b.length < 7)
      return g.value = b, void y(b);
    A.value === "hex" && (v.length > 7 && (b = v.substr(0, 7)), b.toString().match(/#[a-zA-Z0-9]{7}/) && (b = v.substr(0, 7))), y(b);
  }
  function y(v, b = !0) {
    b && (m.value = v), g.value = v, r("update:modelValue", v), r("update", v);
  }
  function $(v) {
    A.value = v, g.value = m.value, r("update:mode", v);
  }
  return ba(p, (v) => {
    var w;
    const b = N(u);
    v.target !== b && !((w = b == null ? void 0 : b.$el) != null && w.contains(v.target)) && c.value && B("outside");
  }, { ignore: [u] }), (v, b) => (ne(), jt(he, null, [ol("div", { ref_key: "fieldContainerRef", ref: p, class: "v-color-field" }, [s(Ur, Z({ ref: "textFieldRef" }, v.$attrs, { class: N(_), color: v.color, density: v.density, hint: v.hint, messages: v.messages, "model-value": N(g), "persistent-hint": v.persistentHint, "persistent-placeholder": v.persistentPlaceholder, placeholder: v.placeholder, readonly: N(V), theme: N(S), "onClick:clear": b[2] || (b[2] = (w) => B("clear")), "onClick:control": b[3] || (b[3] = (w) => I("textField")), onKeyup: b[4] || (b[4] = da((w) => B("keyup"), ["enter"])), "onUpdate:modelValue": h }), pa({ _: 2 }, [va(N(l), (w, O) => ({ name: O, fn: oe((M) => [N(l).prepend || N(l)["prepend-inner"] || N(l)["append-inner"] || N(l).append ? Ne("", !0) : je(v.$slots, O, Qe(Z({ key: 0 }, { ...M })), void 0, !0)]) })), N(l).prepend ? { name: "prepend", fn: oe((w) => [je(v.$slots, "prepend", Qe(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "0" } : void 0, (v.prependIcon || v.pipSlot === "prepend" && v.pip) && !N(l).prepend ? { name: "prepend", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(x), { onClick: B }), null, 16)) : v.prependIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.prependIcon, iconSize: v.iconSize, onClick: B }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "1" } : void 0, N(l)["prepend-inner"] ? { name: "prepend-inner", fn: oe((w) => [je(v.$slots, "prepend-inner", Qe(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "2" } : void 0, (v.prependInnerIcon || v.pipSlot === "prepend-inner" && v.pip) && !N(l)["prepend-inner"] ? { name: "prepend-inner", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(x), { onClick: B }), null, 16)) : v.prependInnerIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.prependInnerIcon, iconSize: v.iconSize, onClick: b[0] || (b[0] = (w) => I("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "3" } : void 0, N(l)["append-inner"] ? { name: "append-inner", fn: oe((w) => [je(v.$slots, "append-inner", Qe(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "4" } : void 0, (v.appendInnerIcon || v.pipSlot === "append-inner" && v.pip) && !N(l)["append-inner"] ? { name: "append-inner", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(x), { onClick: B }), null, 16)) : v.appendInnerIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.appendInnerIcon, iconSize: v.iconSize, onClick: b[1] || (b[1] = (w) => I("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "5" } : void 0, N(l).append ? { name: "append", fn: oe((w) => [je(v.$slots, "append", Qe(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "6" } : void 0, (v.appendIcon || v.pipSlot === "append" && v.pip) && !N(l).append ? { name: "append", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(x), { onClick: B }), null, 16)) : v.appendIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.appendIcon, iconSize: v.iconSize, onClick: B }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "7" } : void 0, N(l).label || v.label ? { name: "label", fn: oe(() => [N(l).label ? je(v.$slots, "label", { key: 0 }, void 0, !0) : v.label ? (ne(), jt("div", Xr, [fa(ma(v.label) + " ", 1), v.required ? (ne(), jt("span", qr, "*")) : Ne("", !0)])) : Ne("", !0)]), key: "8" } : void 0]), 1040, ["class", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme"])], 512), (ne(), ve(ga, { to: "body" }, [Gr, s(Te, { defaults: N(i) }, { default: oe(() => {
    var w;
    return [s(or, Z(o, { ref_key: "cardRef", ref: u, class: N(P), style: N(d), theme: ((w = N(i).VCard) == null ? void 0 : w.theme) ?? N(S), width: N(C).width }), { default: oe(() => {
      var O, M;
      return [s(Rr, { modelValue: N(m), "onUpdate:modelValue": [b[5] || (b[5] = (R) => Ze(m) ? m.value = R : null), h], class: "v-color-selection", disabled: ("readonly" in v ? v.readonly : N(rl)) || ((O = N(i).VColorPicker) == null ? void 0 : O.disabled), mode: N(A), theme: ((M = N(i).VColorPicker) == null ? void 0 : M.theme) ?? N(S), "onUpdate:mode": $ }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 16, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), [["__scopeId", "data-v-c810e76d"]]);
el.install = (e) => {
  e.component("VColorField", el);
};
export {
  el as VColorField,
  el as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".position-elm-helper[data-v-c810e76d]{background-color:red;border-radius:50%;display:none;height:10px;left:0;position:absolute;top:0;width:10px;z-index:99999999999}.v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
