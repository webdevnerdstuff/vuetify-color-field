import { Fragment as be, reactive as bt, computed as v, watchEffect as _t, toRefs as nn, capitalize as tl, warn as Jl, ref as D, unref as b, provide as Ke, inject as pe, shallowRef as oe, defineComponent as xt, camelize as nl, h as Vt, getCurrentInstance as Ql, watch as Z, onScopeDispose as ea, effectScope as ta, toRaw as na, isRef as Ze, createVNode as s, mergeProps as ee, toRef as G, Text as la, openBlock as re, createBlock as me, withCtx as se, normalizeClass as ll, normalizeStyle as al, Transition as It, onBeforeMount as rl, nextTick as nt, onBeforeUnmount as Je, withDirectives as ke, resolveDirective as rt, vShow as Bt, resolveDynamicComponent as aa, readonly as ra, onMounted as $t, TransitionGroup as oa, onUnmounted as ia, cloneVNode as sa, useAttrs as ua, useSlots as ca, createElementBlock as Wt, createElementVNode as ol, withKeys as da, createSlots as pa, renderList as va, renderSlot as je, normalizeProps as et, createCommentVNode as Ne, guardReactiveProps as ct, createTextVNode as fa, toDisplayString as ma, Teleport as ga, pushScopeId as ha, popScopeId as ya } from "vue";
import { onClickOutside as ba } from "@vueuse/core";
/**
 * @name @wdns/vuetify-color-field
 * @version 1.1.0
 * @description Vuetify Color Field is a Vuetify VTextField Color Picker Component
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
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
  let o = ((n == null ? void 0 : n.defaultSet) ?? "").toLowerCase();
  o = o === "fa" || o === "fasvg" ? "fa" : o;
  const a = ka[o];
  if (!a)
    throw new Error(`[VColorField]: No VColorField default ${n == null ? void 0 : n.defaultSet} icon set found.`);
  const i = a[l];
  if (!i)
    throw new Error(`[VColorField]: No ${l} icon found.`);
  return i;
}, At = typeof window < "u", ln = At && "IntersectionObserver" in window, Sn = At && "EyeDropper" in window;
function zt(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => zt(e[l], t[l]));
}
function T(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Zt(e) {
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
  for (const o of t)
    l.has(o) && (n[o] = e[o]);
  return n;
}
function _n(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    t.some((i) => i instanceof RegExp ? i.test(a) : i === a) && !(n != null && n.some((i) => i === a)) ? l[a] = e[a] : o[a] = e[a];
  return [l, o];
}
function ul(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const cl = /^on[^a-z]/, Ca = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function tt(e) {
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
  for (const o in e)
    l[o] = e[o];
  for (const o in t) {
    const a = e[o], i = t[o];
    Zt(a) && Zt(i) ? l[o] = We(a, i, n) : Array.isArray(a) && Array.isArray(i) && n ? l[o] = n(a, i) : l[o] = i;
  }
  return l;
}
function dl(e) {
  return e.map((t) => t.type === be ? dl(t.children) : t).flat();
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
  const t = bt({}), n = v(e);
  return _t(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), nn(t);
}
function Jt(e, t) {
  return e.includes(t);
}
Me.cache = /* @__PURE__ */ new Map();
const Xe = () => [Function, Array];
function In(e, t) {
  return !!(e[t = "on" + tl(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
const wa = ["top", "bottom"], _a = ["start", "end", "left", "right"];
function Bn(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
class Ut {
  constructor(t) {
    let { x: n, y: l, width: o, height: a } = t;
    this.x = n, this.y = l, this.width = o, this.height = a;
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
  const n = (e.r / 255) ** De, l = (e.g / 255) ** De, o = (e.b / 255) ** De, a = (t.r / 255) ** De, i = (t.g / 255) ** De, r = (t.b / 255) ** De;
  let u, p = n * $n + l * An + o * zn, c = a * $n + i * An + r * zn;
  if (p <= dt && (p += (dt - p) ** Pn), c <= dt && (c += (dt - c) ** Pn), Math.abs(c - p) < $a)
    return 0;
  if (c > p) {
    const d = (c ** xa - p ** Va) * Aa;
    u = d < On ? 0 : d < Nn ? d - d * En * pt : d - pt;
  } else {
    const d = (c ** Ba - p ** Ia) * za;
    u = d > -On ? 0 : d > -Nn ? d - d * En * pt : d + pt;
  }
  return 100 * u;
}
function Ge(e) {
  Jl(`Vuetify: ${e}`);
}
const Pa = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Na = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function qt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Rn = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ea = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => Mn({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => Mn({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => Se({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => Se({ h: e, s: t, v: n, a: l }) };
function Ve(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ge(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Rn.test(e)) {
    const { groups: t } = e.match(Rn), { fn: n, values: l } = t, o = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return Ea[n](...o);
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
      return Se(an(e));
    if (Le(e, ["h", "s", "v"]))
      return Se(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Se(e) {
  const { h: t, s: n, v: l, a: o } = e, a = (r) => {
    const u = (r + t / 60) % 6;
    return l - l * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, i = [a(5), a(3), a(1)].map((r) => Math.round(255 * r));
  return { r: i[0], g: i[1], b: i[2], a: o };
}
function Mn(e) {
  return Se(an(e));
}
function Pt(e) {
  if (!e)
    return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, l = e.b / 255, o = Math.max(t, n, l), a = Math.min(t, n, l);
  let i = 0;
  o !== a && (o === t ? i = 60 * (0 + (n - l) / (o - a)) : o === n ? i = 60 * (2 + (l - t) / (o - a)) : o === l && (i = 60 * (4 + (t - n) / (o - a)))), i < 0 && (i += 360);
  const r = [i, o === 0 ? 0 : (o - a) / o, o];
  return { h: r[0], s: r[1], v: r[2], a: e.a };
}
function vl(e) {
  const { h: t, s: n, v: l, a: o } = e, a = l - l * n / 2;
  return { h: t, s: a === 1 || a === 0 ? 0 : (l - a) / Math.min(a, 1 - a), l: a, a: o };
}
function an(e) {
  const { h: t, s: n, l, a: o } = e, a = l + n * Math.min(l, 1 - l);
  return { h: t, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: o };
}
function fl(e) {
  let { r: t, g: n, b: l, a: o } = e;
  return o === void 0 ? `rgb(${t}, ${n}, ${l})` : `rgba(${t}, ${n}, ${l}, ${o})`;
}
function ml(e) {
  return fl(Se(e));
}
function vt(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function gl(e) {
  e = function(a) {
    return a.startsWith("#") && (a = a.slice(1)), a = a.replace(/([^0-9a-f])/gi, "F"), (a.length === 3 || a.length === 4) && (a = a.split("").map((i) => i + i).join("")), a.length !== 6 && (a = Vn(Vn(a, 6), 8, "F")), a;
  }(e);
  let [t, n, l, o] = function(a) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const r = [];
    let u = 0;
    for (; u < a.length; )
      r.push(a.substr(u, i)), u += i;
    return r;
  }(e, 2).map((a) => parseInt(a, 16));
  return o = o === void 0 ? o : o / 255, { r: t, g: n, b: l, a: o };
}
function hl(e) {
  return Pt(gl(e));
}
function yl(e) {
  return function(t) {
    let { r: n, g: l, b: o, a } = t;
    return `#${[vt(n), vt(l), vt(o), a !== void 0 ? vt(Math.round(255 * a)) : ""].join("")}`;
  }(Se(e));
}
function Tn(e) {
  return function(t) {
    let { r: n, g: l, b: o } = t;
    const a = [0, 0, 0], i = Na, r = Pa;
    n = i(n / 255), l = i(l / 255), o = i(o / 255);
    for (let u = 0; u < 3; ++u)
      a[u] = r[u][0] * n + r[u][1] * l + r[u][2] * o;
    return a;
  }(Ve(e))[1];
}
function Oa(e, t) {
  const n = Tn(e), l = Tn(t);
  return (Math.max(n, l) + 0.05) / (Math.min(n, l) + 0.05);
}
function O(e, t) {
  return (n) => Object.keys(e).reduce((l, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = n && o in n ? { ...a, default: n[o] } : a, t && !l[o].source && (l[o].source = t), l;
  }, {});
}
const q = O({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), kt = Symbol.for("vuetify:defaults");
function rn() {
  const e = pe(kt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Nt(e, t) {
  const n = rn(), l = D(e), o = v(() => {
    if (b(t == null ? void 0 : t.disabled))
      return n.value;
    const a = b(t == null ? void 0 : t.scoped), i = b(t == null ? void 0 : t.reset), r = b(t == null ? void 0 : t.root);
    if (l.value == null && !(a || i || r))
      return n.value;
    let u = We(l.value, { prev: n.value });
    if (a)
      return u;
    if (i || r) {
      const p = Number(i || 1 / 0);
      for (let c = 0; c <= p && u && "prev" in u; c++)
        u = u.prev;
      return u && typeof r == "string" && r in u && (u = We(We(u, { prev: u }), u[r])), u;
    }
    return u.prev ? We(u.prev, u) : u;
  });
  return Ke(kt, o), o;
}
function La() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rn();
  const l = ge("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = v(() => {
    var r;
    return (r = n.value) == null ? void 0 : r[e._as ?? t];
  }), a = new Proxy(e, { get(r, u) {
    var c, d, f, g;
    const p = Reflect.get(r, u);
    return u === "class" || u === "style" ? [(c = o.value) == null ? void 0 : c[u], p].filter(($) => $ != null) : typeof u != "string" || function($, k) {
      var x, C;
      return ((x = $.props) == null ? void 0 : x[k]) !== void 0 || ((C = $.props) == null ? void 0 : C[Me(k)]) !== void 0;
    }(l.vnode, u) ? p : ((d = o.value) == null ? void 0 : d[u]) ?? ((g = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : g[u]) ?? p;
  } }), i = oe();
  return _t(() => {
    if (o.value) {
      const r = Object.entries(o.value).filter((u) => {
        let [p] = u;
        return p.startsWith(p[0].toUpperCase());
      });
      i.value = r.length ? Object.fromEntries(r) : void 0;
    } else
      i.value = void 0;
  }), { props: a, provideSubDefaults: function() {
    const r = function(u) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge("injectSelf");
      const { provides: c } = p;
      if (c && u in c)
        return c[u];
    }(kt, l);
    Ke(kt, v(() => i.value ? We((r == null ? void 0 : r.value) ?? {}, i.value) : r == null ? void 0 : r.value));
  } };
}
function Ce(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ge("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = O(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return sl(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const o = rn();
      if (!o.value)
        return e._setup(n, l);
      const { props: a, provideSubDefaults: i } = La(n, n._as ?? e.name, o), r = e._setup(a, l);
      return i(), r;
    };
  }
  return e;
}
function H() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? Ce : xt)(t);
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return H()({ name: n ?? tl(nl(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...q() }, setup(l, o) {
    let { slots: a } = o;
    return () => {
      var i;
      return Vt(l.tag, { class: [e, l.class], style: l.style }, (i = a.default) == null ? void 0 : i.call(a));
    };
  } });
}
function ge(e, t) {
  const n = Ql();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function _e() {
  const e = ge(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Me((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let bl = 0, yt = /* @__PURE__ */ new WeakMap();
function ot() {
  const e = ge("getUid");
  if (yt.has(e))
    return yt.get(e);
  {
    const t = bl++;
    return yt.set(e, t), t;
  }
}
function W(e) {
  ge("useRender").render = e;
}
ot.reset = () => {
  bl = 0, yt = /* @__PURE__ */ new WeakMap();
};
const Ra = O({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Qt(e, t) {
  let n;
  function l() {
    n = ta(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  Z(e, (o) => {
    o && !n ? l() : o || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), ea(() => {
    n == null || n.stop();
  });
}
function we(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const a = ge("useProxiedModel"), i = D(e[t] !== void 0 ? e[t] : n), r = Me(t), u = v(r !== t ? () => {
    var c, d, f, g;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) && !((d = a.vnode.props) != null && d.hasOwnProperty(r)) || !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((g = a.vnode.props) != null && g.hasOwnProperty(`onUpdate:${r}`)));
  } : () => {
    var c, d;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) || !((d = a.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`)));
  });
  Qt(() => !u.value, () => {
    Z(() => e[t], (c) => {
      i.value = c;
    });
  });
  const p = v({ get() {
    const c = e[t];
    return l(u.value ? c : i.value);
  }, set(c) {
    const d = o(c), f = na(u.value ? e[t] : i.value);
    f !== d && l(f) !== c && (i.value = d, a == null || a.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(p, "externalValue", { get: () => u.value ? e[t] : i.value }), p;
}
const Ma = O({ disabled: Boolean, modelValue: { type: Boolean, default: void 0 }, ...Ra() }, "VHover"), Ta = H()({ name: "VHover", props: Ma(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = we(e, "modelValue"), { runOpenDelay: o, runCloseDelay: a } = function(i, r) {
    const u = {}, p = (c) => () => {
      if (!At)
        return Promise.resolve(!0);
      const d = c === "openDelay";
      return u.closeDelay && window.clearTimeout(u.closeDelay), delete u.closeDelay, u.openDelay && window.clearTimeout(u.openDelay), delete u.openDelay, new Promise((f) => {
        const g = parseInt(i[c] ?? 0, 10);
        u[c] = window.setTimeout(() => {
          r == null || r(d), f(d);
        }, g);
      });
    };
    return { runCloseDelay: p("closeDelay"), runOpenDelay: p("openDelay") };
  }(e, (i) => !e.disabled && (l.value = i));
  return () => {
    var i;
    return (i = n.default) == null ? void 0 : i.call(n, { isHovering: l.value, props: { onMouseenter: o, onMouseleave: a } });
  };
} });
function sn(e) {
  return pl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (qt(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && qt(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const o = Ve(e.value.background);
          if (o.a == null || o.a === 1) {
            const a = function(i) {
              const r = Math.abs(Ln(Ve(0), Ve(i)));
              return Math.abs(Ln(Ve(16777215), Ve(i))) > Math.min(r, 50) ? "#fff" : "#000";
            }(o);
            n.color = a, n.caretColor = a;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (qt(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function Fe(e, t) {
  const n = v(() => ({ text: Ze(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = sn(n);
  return { textColorClasses: l, textColorStyles: o };
}
function Ye(e, t) {
  const n = v(() => ({ background: Ze(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = sn(n);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const ie = [String, Function, Object, Array], Fa = Symbol.for("vuetify:icons"), St = O({ icon: { type: ie }, tag: { type: String, required: !0 } }, "icon"), Fn = H()({ name: "VComponentIcon", props: St(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return s(e.tag, null, { default: () => {
      var o;
      return [e.icon ? s(l, null, null) : (o = n.default) == null ? void 0 : o.call(n)];
    } });
  };
} }), ja = Ce({ name: "VSvgIcon", inheritAttrs: !1, props: St(), setup(e, t) {
  let { attrs: n } = t;
  return () => s(e.tag, ee(n, { style: null }), { default: () => [s("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? s("path", { d: l[0], "fill-opacity": l[1] }, null) : s("path", { d: l }, null)) : s("path", { d: e.icon }, null)])] });
} });
Ce({ name: "VLigatureIcon", props: St(), setup: (e) => () => s(e.tag, null, { default: () => [e.icon] }) }), Ce({ name: "VClassIcon", props: St(), setup: (e) => () => s(e.tag, { class: e.icon }, null) });
const Da = ["x-small", "small", "default", "large", "x-large"], Et = O({ size: { type: [String, Number], default: "default" } }, "size");
function Ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  return pl(() => {
    let n, l;
    return Jt(Da, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: T(e.size), height: T(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const Be = O({ tag: { type: String, default: "div" } }, "tag"), jn = Symbol.for("vuetify:theme"), he = O({ theme: String }, "theme");
function xe(e) {
  ge("provideTheme");
  const t = pe(jn, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), l = v(() => t.themes.value[n.value]), o = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = { ...t, name: n, current: l, themeClasses: o };
  return Ke(jn, a), a;
}
const Ha = O({ color: String, start: Boolean, end: Boolean, icon: ie, ...q(), ...Et(), ...Be({ tag: "i" }), ...he() }, "VIcon"), Ie = H()({ name: "VIcon", props: Ha(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = D(), { themeClasses: a } = xe(e), { iconData: i } = ((c) => {
    const d = pe(Fa);
    if (!d)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var x;
      const f = b(c);
      if (!f)
        return { component: Fn };
      let g = f;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (x = d.aliases) == null ? void 0 : x[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(g))
        return { component: ja, icon: g };
      if (typeof g != "string")
        return { component: Fn, icon: g };
      const $ = Object.keys(d.sets).find((C) => typeof g == "string" && g.startsWith(`${C}:`)), k = $ ? g.slice($.length + 1) : g;
      return { component: d.sets[$ ?? d.defaultSet].component, icon: k };
    }) };
  })(v(() => o.value || e.icon)), { sizeClasses: r } = Ot(e), { textColorClasses: u, textColorStyles: p } = Fe(G(e, "color"));
  return W(() => {
    var d, f;
    const c = (d = l.default) == null ? void 0 : d.call(l);
    return c && (o.value = (f = dl(c).filter((g) => g.type === la && g.children && typeof g.children == "string")[0]) == null ? void 0 : f.children), s(i.value.component, { tag: e.tag, icon: i.value.icon, class: ["v-icon", "notranslate", a.value, r.value, u.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [r.value ? void 0 : { fontSize: T(e.size), height: T(e.size), width: T(e.size) }, p.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [c] });
  }), {};
} }), ft = xt({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, o = pe(Symbol.for("vuetify:icons")), a = v(() => il({ icon: l.icon !== "default" ? l.icon : "", iconOptions: o, name: "default" }));
  function i() {
    n("click");
  }
  return (r, u) => (re(), me(Ta, null, { default: se(({ isHovering: p, props: c }) => [s(Ie, ee(c, { color: p ? r.color : void 0, icon: b(a), size: r.iconSize, onClick: i }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), mt = xt({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, { modelValue: o } = nn(l), a = v(() => ({ [`${Oe}--pip`]: !0 })), i = v(() => ((c) => {
    const { pipBorder: d, pipBorderRadius: f } = c, g = { backgroundColor: d && d !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return d && d !== "none" && (g.border = d, g.borderRadius = f), g;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), r = pe(Symbol.for("vuetify:icons")), u = v(() => il({ icon: l.pipIcon !== "pip" ? l.pipIcon : "", iconOptions: r, name: "pip" }));
  function p() {
    n("click");
  }
  return (c, d) => (re(), me(Ie, { class: ll(b(a)), color: b(o) || "--v-theme-on-surface", icon: b(u), size: c.pipSize, style: al(b(i)), tag: "div", onClick: p }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), Wa = H()({ name: "VCardActions", props: q(), setup(e, t) {
  let { slots: n } = t;
  return Nt({ VBtn: { slim: !0, variant: "text" } }), W(() => {
    var l;
    return s("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Ua = on("v-card-subtitle"), qa = on("v-card-title"), Lt = O({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Rt(e) {
  return { dimensionStyles: v(() => ({ height: T(e.height), maxHeight: T(e.maxHeight), maxWidth: T(e.maxWidth), minHeight: T(e.minHeight), minWidth: T(e.minWidth), width: T(e.width) })) };
}
const kl = O({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...q(), ...Lt() }, "VResponsive"), Dn = H()({ name: "VResponsive", props: kl(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: v(() => {
      const i = Number(a.aspectRatio);
      return i ? { paddingBottom: String(1 / i * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Rt(e);
  return W(() => {
    var a;
    return s("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [s("div", { class: "v-responsive__sizer", style: l.value }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && s("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), un = O({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ue = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: o, ...a } = e, { component: i = It, ...r } = typeof l == "object" ? l : {};
  return Vt(i, ee(typeof l == "string" ? { name: o ? "" : l } : r, a, { disabled: o }), n);
};
function Hn(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Sl = { mounted: function(e, t) {
  if (!ln)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: o, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, i = new IntersectionObserver(function() {
    var d;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const p = (d = e._observe) == null ? void 0 : d[t.instance.$.uid];
    if (!p)
      return;
    const c = r.some((f) => f.isIntersecting);
    !o || n.quiet && !p.init || n.once && !c && !p.init || o(c, r, u), c && n.once ? Hn(e, t) : p.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: i }, i.observe(e);
}, unmounted: Hn }, Xa = O({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...kl(), ...q(), ...un() }, "VImg"), Cl = H()({ name: "VImg", directives: { intersect: Sl }, props: Xa(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const o = ge("VImg"), a = oe(""), i = D(), r = oe(e.eager ? "loading" : "idle"), u = oe(), p = oe(), c = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), d = v(() => c.value.aspect || u.value / p.value || 0);
  function f(m) {
    if ((!e.eager || !m) && (!ln || m || e.eager)) {
      if (r.value = "loading", c.value.lazySrc) {
        const V = new Image();
        V.src = c.value.lazySrc, C(V, null);
      }
      c.value.src && nt(() => {
        var V;
        n("loadstart", ((V = i.value) == null ? void 0 : V.currentSrc) || c.value.src), setTimeout(() => {
          var y;
          if (!o.isUnmounted)
            if ((y = i.value) != null && y.complete) {
              if (i.value.naturalWidth || $(), r.value === "error")
                return;
              d.value || C(i.value, null), r.value === "loading" && g();
            } else
              d.value || C(i.value), k();
        });
      });
    }
  }
  function g() {
    var m;
    o.isUnmounted || (k(), C(i.value), r.value = "loaded", n("load", ((m = i.value) == null ? void 0 : m.currentSrc) || c.value.src));
  }
  function $() {
    var m;
    o.isUnmounted || (r.value = "error", n("error", ((m = i.value) == null ? void 0 : m.currentSrc) || c.value.src));
  }
  function k() {
    const m = i.value;
    m && (a.value = m.currentSrc || m.src);
  }
  Z(() => e.src, () => {
    f(r.value !== "idle");
  }), Z(d, (m, V) => {
    !m && V && i.value && C(i.value);
  }), rl(() => f());
  let x = -1;
  function C(m) {
    let V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const y = () => {
      if (clearTimeout(x), o.isUnmounted)
        return;
      const { naturalHeight: E, naturalWidth: h } = m;
      E || h ? (u.value = h, p.value = E) : m.complete || r.value !== "loading" || V == null ? (m.currentSrc.endsWith(".svg") || m.currentSrc.startsWith("data:image/svg+xml")) && (u.value = 1, p.value = 1) : x = window.setTimeout(y, V);
    };
    y();
  }
  Je(() => {
    clearTimeout(x);
  });
  const _ = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), I = () => {
    var y;
    if (!c.value.src || r.value === "idle")
      return null;
    const m = s("img", { class: ["v-img__img", _.value], style: { objectPosition: e.position }, src: c.value.src, srcset: c.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: i, onLoad: g, onError: $ }, null), V = (y = l.sources) == null ? void 0 : y.call(l);
    return s(Ue, { transition: e.transition, appear: !0 }, { default: () => [ke(V ? s("picture", { class: "v-img__picture" }, [V, m]) : m, [[Bt, r.value === "loaded"]])] });
  }, P = () => s(Ue, { transition: e.transition }, { default: () => [c.value.lazySrc && r.value !== "loaded" && s("img", { class: ["v-img__img", "v-img__img--preload", _.value], style: { objectPosition: e.position }, src: c.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), N = () => l.placeholder ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !l.error) && s("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, B = () => l.error ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && s("div", { class: "v-img__error" }, [l.error()])] }) : null, z = () => e.gradient ? s("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, w = oe(!1);
  {
    const m = Z(d, (V) => {
      V && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          w.value = !0;
        });
      }), m());
    });
  }
  return W(() => {
    const m = Dn.filterProps(e);
    return ke(s(Dn, ee({ class: ["v-img", { "v-img--booting": !w.value }, e.class], style: [{ width: T(e.width === "auto" ? u.value : e.width) }, e.style] }, m, { aspectRatio: d.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => s(be, null, [s(I, null, null), s(P, null, null), s(z, null, null), s(N, null, null), s(B, null, null)]), default: l.default }), [[rt("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: i, state: r, naturalWidth: u, naturalHeight: p };
} }), Ga = [null, "default", "comfortable", "compact"], Qe = O({ density: { type: String, default: "default", validator: (e) => Ga.includes(e) } }, "density");
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const $e = O({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  return { roundedClasses: v(() => {
    const n = Ze(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const o of String(n).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const Ya = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function cn(e, t) {
  return s(be, null, [e && s("span", { key: "overlay", class: `${t}__overlay` }, null), s("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const Mt = O({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ya.includes(e) } }, "variant");
function dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  const n = v(() => {
    const { variant: a } = b(e);
    return `${t}--variant-${a}`;
  }), { colorClasses: l, colorStyles: o } = sn(v(() => {
    const { variant: a, color: i } = b(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: i };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: n };
}
const Ka = O({ start: Boolean, end: Boolean, icon: ie, image: String, text: String, ...q(), ...Qe(), ...$e(), ...Et(), ...Be(), ...he(), ...Mt({ variant: "flat" }) }, "VAvatar"), Wn = H()({ name: "VAvatar", props: Ka(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = xe(e), { colorClasses: o, colorStyles: a, variantClasses: i } = dn(e), { densityClasses: r } = it(e), { roundedClasses: u } = Ae(e), { sizeClasses: p, sizeStyles: c } = Ot(e);
  return W(() => s(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, r.value, u.value, p.value, i.value, e.class], style: [a.value, c.value, e.style] }, { default: () => {
    var d;
    return [e.image ? s(Cl, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? s(Ie, { key: "icon", icon: e.icon }, null) : ((d = n.default) == null ? void 0 : d.call(n)) ?? e.text, cn(!1, "v-avatar")];
  } })), {};
} }), Za = O({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Te = H(!1)({ name: "VDefaultsProvider", props: Za(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: o, reset: a, root: i, scoped: r } = nn(e);
  return Nt(l, { reset: a, root: i, scoped: r, disabled: o }), () => {
    var u;
    return (u = n.default) == null ? void 0 : u.call(n);
  };
} }), Ja = O({ appendAvatar: String, appendIcon: ie, prependAvatar: String, prependIcon: ie, subtitle: [String, Number], title: [String, Number], ...q(), ...Qe() }, "VCardItem"), Qa = H()({ name: "VCardItem", props: Ja(), setup(e, t) {
  let { slots: n } = t;
  return W(() => {
    var p;
    const l = !(!e.prependAvatar && !e.prependIcon), o = !(!l && !n.prepend), a = !(!e.appendAvatar && !e.appendIcon), i = !(!a && !n.append), r = !(e.title == null && !n.title), u = !(e.subtitle == null && !n.subtitle);
    return s("div", { class: ["v-card-item", e.class], style: e.style }, [o && s("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? s(Te, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && s(Wn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), s("div", { class: "v-card-item__content" }, [r && s(qa, { key: "title" }, { default: () => {
      var c;
      return [((c = n.title) == null ? void 0 : c.call(n)) ?? e.title];
    } }), u && s(Ua, { key: "subtitle" }, { default: () => {
      var c;
      return [((c = n.subtitle) == null ? void 0 : c.call(n)) ?? e.subtitle];
    } }), (p = n.default) == null ? void 0 : p.call(n)]), i && s("div", { key: "append", class: "v-card-item__append" }, [n.append ? s(Te, { key: "append-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : a && s(Wn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), er = on("v-card-text"), Tt = O({ border: [Boolean, Number, String] }, "border");
function Ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  return { borderClasses: v(() => {
    const n = Ze(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const o of String(n).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
const st = O({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function ut(e) {
  return { elevationClasses: v(() => {
    const t = Ze(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
function wl(e, t) {
  const n = D(), l = oe(!1);
  if (ln) {
    const o = new IntersectionObserver((a) => {
      e == null || e(a, o), l.value = !!a.find((i) => i.isIntersecting);
    }, t);
    Je(() => {
      o.disconnect();
    }), Z(n, (a, i) => {
      i && (o.unobserve(i), l.value = !1), a && o.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const _l = Symbol.for("vuetify:locale");
function ze() {
  const e = pe(_l);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Un = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, jt = O({ location: String }, "location");
function Dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = ze();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: a, align: i } = function(p, c) {
      let [d, f] = p.split(" ");
      return f || (f = Jt(wa, d) ? "start" : Jt(_a, d) ? "top" : "center"), { side: Bn(d, c), align: Bn(f, c) };
    }(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function r(p) {
      return n ? n(p) : 0;
    }
    const u = {};
    return a !== "center" && (t ? u[Un[a]] = `calc(100% - ${r(a)}px)` : u[a] = 0), i !== "center" ? t ? u[Un[i]] = `calc(100% - ${r(i)}px)` : u[i] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), u;
  }) };
}
const tr = O({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...q(), ...jt({ location: "top" }), ...$e(), ...Be(), ...he() }, "VProgressLinear"), nr = H()({ name: "VProgressLinear", props: tr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = we(e, "modelValue"), { isRtl: o, rtlClasses: a } = ze(), { themeClasses: i } = xe(e), { locationStyles: r } = Dt(e), { textColorClasses: u, textColorStyles: p } = Fe(e, "color"), { backgroundColorClasses: c, backgroundColorStyles: d } = Ye(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: g } = Ye(e, "color"), { roundedClasses: $ } = Ae(e), { intersectionRef: k, isIntersecting: x } = wl(), C = v(() => parseInt(e.max, 10)), _ = v(() => parseInt(e.height, 10)), I = v(() => parseFloat(e.bufferValue) / C.value * 100), P = v(() => parseFloat(l.value) / C.value * 100), N = v(() => o.value !== e.reverse), B = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), z = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function w(m) {
    if (!k.value)
      return;
    const { left: V, right: y, width: E } = k.value.getBoundingClientRect(), h = N.value ? E - m.clientX + (y - E) : m.clientX - V;
    l.value = Math.round(h / E * C.value);
  }
  return W(() => s(e.tag, { ref: k, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && x.value, "v-progress-linear--reverse": N.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, $.value, i.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? T(_.value) : 0, "--v-progress-linear-height": T(_.value), ...r.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : P.value, onClick: e.clickable && w }, { default: () => [e.stream && s("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...p.value, [N.value ? "left" : "right"]: T(-_.value), borderTop: `${T(_.value / 2)} dotted`, opacity: z.value, top: `calc(50% - ${T(_.value / 4)})`, width: T(100 - I.value, "%"), "--v-progress-linear-stream-to": T(_.value * (N.value ? 1 : -1)) } }, null), s("div", { class: ["v-progress-linear__background", c.value], style: [d.value, { opacity: z.value, width: T(e.stream ? I.value : 100, "%") }] }, null), s(It, { name: B.value }, { default: () => [e.indeterminate ? s("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((m) => s("div", { key: m, class: ["v-progress-linear__indeterminate", m, f.value], style: g.value }, null))]) : s("div", { class: ["v-progress-linear__determinate", f.value], style: [g.value, { width: T(P.value, "%") }] }, null)] }), n.default && s("div", { class: "v-progress-linear__content" }, [n.default({ value: P.value, buffer: I.value })])] })), {};
} }), pn = O({ loading: [Boolean, String] }, "loader");
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function xl(e, t) {
  var l;
  let { slots: n } = t;
  return s("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || s(nr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const lr = ["static", "relative", "fixed", "absolute", "sticky"], fn = O({ position: { type: String, validator: (e) => lr.includes(e) } }, "position");
function mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  return { positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Vl(e, t) {
  const n = aa("RouterLink"), l = v(() => !(!e.href && !e.to)), o = v(() => (l == null ? void 0 : l.value) || In(t, "click") || In(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: o, href: G(e, "href") };
  const a = e.to ? n.useLink(e) : void 0, i = function() {
    const r = ge("useRoute");
    return v(() => {
      var u;
      return (u = r == null ? void 0 : r.proxy) == null ? void 0 : u.$route;
    });
  }();
  return { isLink: l, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && v(() => {
    var r, u, p;
    return e.exact ? i.value ? ((r = a.isExactActive) == null ? void 0 : r.value) && zt(a.route.value.query, i.value.query) : (u = a.isExactActive) == null ? void 0 : u.value : (p = a.isActive) == null ? void 0 : p.value;
  }), href: v(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const Il = O({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router"), en = Symbol("rippleStop"), ar = 80;
function qn(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function tn(e) {
  return e.constructor.name === "TouchEvent";
}
function Bl(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ct = { show(e, t) {
  var g;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: a, scale: i, x: r, y: u, centerX: p, centerY: c } = function($, k) {
    var z;
    let x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, C = 0, _ = 0;
    if (!Bl($)) {
      const w = k.getBoundingClientRect(), m = tn($) ? $.touches[$.touches.length - 1] : $;
      C = m.clientX - w.left, _ = m.clientY - w.top;
    }
    let I = 0, P = 0.3;
    (z = k._ripple) != null && z.circle ? (P = 0.15, I = k.clientWidth / 2, I = x.center ? I : I + Math.sqrt((C - I) ** 2 + (_ - I) ** 2) / 4) : I = Math.sqrt(k.clientWidth ** 2 + k.clientHeight ** 2) / 2;
    const N = (k.clientWidth - 2 * I) / 2 + "px", B = (k.clientHeight - 2 * I) / 2 + "px";
    return { radius: I, scale: P, x: x.center ? N : C - I + "px", y: x.center ? B : _ - I + "px", centerX: N, centerY: B };
  }(e, t, n), d = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = d, o.style.height = d, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), qn(o, `translate(${r}, ${u}) scale3d(${i},${i},${i})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), qn(o, `translate(${p}, ${c}) scale3d(1,1,1)`);
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
  const l = performance.now() - Number(n.dataset.activated), o = Math.max(250 - l, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var i;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((i = n.parentNode) == null ? void 0 : i.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, o);
} };
function $l(e) {
  return e === void 0 || !!e;
}
function lt(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[en]) {
    if (e[en] = !0, tn(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Bl(e), n._ripple.class && (t.class = n._ripple.class), tn(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Ct.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, ar);
    } else
      Ct.show(e, n, t);
  }
}
function Xn(e) {
  e[en] = !0;
}
function ce(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        ce(e);
      }));
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Ct.hide(t);
  }
}
function Al(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let at = !1;
function zl(e) {
  at || e.keyCode !== wn.enter && e.keyCode !== wn.space || (at = !0, lt(e));
}
function Pl(e) {
  at = !1, ce(e);
}
function Nl(e) {
  at && (at = !1, ce(e));
}
function Gn(e, t, n) {
  const { value: l, modifiers: o } = t, a = $l(l);
  if (a || Ct.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Zt(l) && l.class && (e._ripple.class = l.class), a && !n) {
    if (o.stop)
      return e.addEventListener("touchstart", Xn, { passive: !0 }), void e.addEventListener("mousedown", Xn);
    e.addEventListener("touchstart", lt, { passive: !0 }), e.addEventListener("touchend", ce, { passive: !0 }), e.addEventListener("touchmove", Al, { passive: !0 }), e.addEventListener("touchcancel", ce), e.addEventListener("mousedown", lt), e.addEventListener("mouseup", ce), e.addEventListener("mouseleave", ce), e.addEventListener("keydown", zl), e.addEventListener("keyup", Pl), e.addEventListener("blur", Nl), e.addEventListener("dragstart", ce, { passive: !0 });
  } else
    !a && n && El(e);
}
function El(e) {
  e.removeEventListener("mousedown", lt), e.removeEventListener("touchstart", lt), e.removeEventListener("touchend", ce), e.removeEventListener("touchmove", Al), e.removeEventListener("touchcancel", ce), e.removeEventListener("mouseup", ce), e.removeEventListener("mouseleave", ce), e.removeEventListener("keydown", zl), e.removeEventListener("keyup", Pl), e.removeEventListener("dragstart", ce), e.removeEventListener("blur", Nl);
}
const gn = { mounted: function(e, t) {
  Gn(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, El(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Gn(e, t, $l(t.oldValue));
} }, rr = O({ appendAvatar: String, appendIcon: ie, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ie, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...Tt(), ...q(), ...Qe(), ...Lt(), ...st(), ...pn(), ...jt(), ...fn(), ...$e(), ...Il(), ...Be(), ...he(), ...Mt({ variant: "elevated" }) }, "VCard"), or = H()({ name: "VCard", directives: { Ripple: gn }, props: rr(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: o } = xe(e), { borderClasses: a } = Ft(e), { colorClasses: i, colorStyles: r, variantClasses: u } = dn(e), { densityClasses: p } = it(e), { dimensionStyles: c } = Rt(e), { elevationClasses: d } = ut(e), { loaderClasses: f } = vn(e), { locationStyles: g } = Dt(e), { positionClasses: $ } = mn(e), { roundedClasses: k } = Ae(e), x = Vl(e, n), C = v(() => e.link !== !1 && x.isLink.value), _ = v(() => !e.disabled && e.link !== !1 && (e.link || x.isClickable.value));
  return W(() => {
    const I = C.value ? "a" : e.tag, P = !(!l.title && e.title == null), N = !(!l.subtitle && e.subtitle == null), B = P || N, z = !!(l.append || e.appendAvatar || e.appendIcon), w = !!(l.prepend || e.prependAvatar || e.prependIcon), m = !(!l.image && !e.image), V = B || w || z, y = !(!l.text && e.text == null);
    return ke(s(I, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": _.value }, o.value, a.value, i.value, p.value, d.value, f.value, $.value, k.value, u.value, e.class], style: [r.value, c.value, g.value, e.style], href: x.href.value, onClick: _.value && x.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var E;
      return [m && s("div", { key: "image", class: "v-card__image" }, [l.image ? s(Te, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : s(Cl, { key: "image-img", cover: !0, src: e.image }, null)]), s(xl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), V && s(Qa, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), y && s(er, { key: "text" }, { default: () => {
        var h;
        return [((h = l.text) == null ? void 0 : h.call(l)) ?? e.text];
      } }), (E = l.default) == null ? void 0 : E.call(l), l.actions && s(Wa, null, { default: l.actions }), cn(_.value, "v-card")];
    } }), [[rt("ripple"), _.value && e.ripple]]);
  }), {};
} });
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = D(), l = D();
  if (At) {
    const o = new ResizeObserver((a) => {
      e == null || e(a, o), a.length && (l.value = t === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    Je(() => {
      o.disconnect();
    }), Z(n, (a, i) => {
      i && (o.unobserve(Cn(i)), l.value = void 0), a && o.observe(Cn(a));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: ra(l) };
}
const ir = Ce({ name: "VColorPickerCanvas", props: O({ color: { type: Object }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...q() }, "VColorPickerCanvas")(), emits: { "update:color": (e) => !0, "update:position": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = oe(!1), o = D(), a = oe(parseFloat(e.width)), i = oe(parseFloat(e.height)), r = D({ x: 0, y: 0 }), u = v({ get: () => r.value, set(k) {
    var _, I;
    if (!o.value)
      return;
    const { x, y: C } = k;
    r.value = k, n("update:color", { h: ((_ = e.color) == null ? void 0 : _.h) ?? 0, s: He(x, 0, a.value) / a.value, v: 1 - He(C, 0, i.value) / i.value, a: ((I = e.color) == null ? void 0 : I.a) ?? 1 });
  } }), p = v(() => {
    const { x: k, y: x } = u.value, C = parseInt(e.dotSize, 10) / 2;
    return { width: T(e.dotSize), height: T(e.dotSize), transform: `translate(${T(k - C)}, ${T(x - C)})` };
  }), { resizeRef: c } = Ol((k) => {
    var _;
    if (!((_ = c.value) != null && _.offsetParent))
      return;
    const { width: x, height: C } = k[0].contentRect;
    a.value = x, i.value = C;
  });
  function d(k) {
    k.type === "mousedown" && k.preventDefault(), e.disabled || (f(k), window.addEventListener("mousemove", f), window.addEventListener("mouseup", g), window.addEventListener("touchmove", f), window.addEventListener("touchend", g));
  }
  function f(k) {
    if (e.disabled || !o.value)
      return;
    l.value = !0;
    const x = function(C) {
      return "touches" in C ? { clientX: C.touches[0].clientX, clientY: C.touches[0].clientY } : { clientX: C.clientX, clientY: C.clientY };
    }(k);
    (function(C, _, I) {
      const { left: P, top: N, width: B, height: z } = I;
      u.value = { x: He(C - P, 0, B), y: He(_ - N, 0, z) };
    })(x.clientX, x.clientY, o.value.getBoundingClientRect());
  }
  function g() {
    window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", f), window.removeEventListener("touchend", g);
  }
  function $() {
    var I;
    if (!o.value)
      return;
    const k = o.value, x = k.getContext("2d");
    if (!x)
      return;
    const C = x.createLinearGradient(0, 0, k.width, 0);
    C.addColorStop(0, "hsla(0, 0%, 100%, 1)"), C.addColorStop(1, `hsla(${((I = e.color) == null ? void 0 : I.h) ?? 0}, 100%, 50%, 1)`), x.fillStyle = C, x.fillRect(0, 0, k.width, k.height);
    const _ = x.createLinearGradient(0, 0, 0, k.height);
    _.addColorStop(0, "hsla(0, 0%, 100%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), x.fillStyle = _, x.fillRect(0, 0, k.width, k.height);
  }
  return Z(() => {
    var k;
    return (k = e.color) == null ? void 0 : k.h;
  }, $, { immediate: !0 }), Z(() => [a.value, i.value], (k, x) => {
    $(), r.value = { x: u.value.x * k[0] / x[0], y: u.value.y * k[1] / x[1] };
  }, { flush: "post" }), Z(() => e.color, () => {
    l.value ? l.value = !1 : r.value = e.color ? { x: e.color.s * a.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: !0, immediate: !0 }), $t(() => $()), W(() => s("div", { ref: c, class: ["v-color-picker-canvas", e.class], style: e.style, onMousedown: d, onTouchstartPassive: d }, [s("canvas", { ref: o, width: a.value, height: i.value }, null), e.color && s("div", { class: ["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }], style: p.value }, null)])), {};
} }), Ll = O({ divided: Boolean, ...Tt(), ...q(), ...Qe(), ...st(), ...$e(), ...Be(), ...he(), ...Mt() }, "VBtnGroup"), Yn = H()({ name: "VBtnGroup", props: Ll(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = xe(e), { densityClasses: o } = it(e), { borderClasses: a } = Ft(e), { elevationClasses: i } = ut(e), { roundedClasses: r } = Ae(e);
  Nt({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), W(() => s(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, o.value, i.value, r.value, e.class], style: e.style }, n));
} }), sr = O({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ur = O({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function cr(e, t) {
  let n = !1;
  const l = bt([]), o = we(e, "modelValue", [], (p) => p == null ? [] : Kn(l, tt(p)), (p) => {
    const c = function(d, f) {
      const g = [];
      return f.forEach(($) => {
        const k = d.findIndex((x) => x.id === $);
        if (~k) {
          const x = d[k];
          g.push(x.value != null ? x.value : k);
        }
      }), g;
    }(l, p);
    return e.multiple ? c : c[0];
  }), a = ge("useGroup");
  function i() {
    const p = l.find((c) => !c.disabled);
    p && e.mandatory === "force" && !o.value.length && (o.value = [p.id]);
  }
  function r(p) {
    if (e.multiple && Ge('This method is not supported when using "multiple" prop'), o.value.length) {
      const c = o.value[0], d = l.findIndex(($) => $.id === c);
      let f = (d + p) % l.length, g = l[f];
      for (; g.disabled && f !== d; )
        f = (f + p) % l.length, g = l[f];
      if (g.disabled)
        return;
      o.value = [l[f].id];
    } else {
      const c = l.find((d) => !d.disabled);
      c && (o.value = [c.id]);
    }
  }
  $t(() => {
    i();
  }), Je(() => {
    n = !0;
  });
  const u = { register: function(p, c) {
    const d = p, f = ht(Symbol.for(`${t.description}:id`), a == null ? void 0 : a.vnode).indexOf(c);
    f > -1 ? l.splice(f, 0, d) : l.push(d);
  }, unregister: function(p) {
    if (n)
      return;
    i();
    const c = l.findIndex((d) => d.id === p);
    l.splice(c, 1);
  }, selected: o, select: function(p, c) {
    const d = l.find((f) => f.id === p);
    if (!c || !(d != null && d.disabled))
      if (e.multiple) {
        const f = o.value.slice(), g = f.findIndex((k) => k === p), $ = ~g;
        if (c = c ?? !$, $ && e.mandatory && f.length <= 1 || !$ && e.max != null && f.length + 1 > e.max)
          return;
        g < 0 && c ? f.push(p) : g >= 0 && !c && f.splice(g, 1), o.value = f;
      } else {
        const f = o.value.includes(p);
        if (e.mandatory && f)
          return;
        o.value = c ?? !f ? [p] : [];
      }
  }, disabled: G(e, "disabled"), prev: () => r(l.length - 1), next: () => r(1), isSelected: (p) => o.value.includes(p), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (p) => function(c, d) {
    const f = Kn(c, [d]);
    return f.length ? c.findIndex((g) => g.id === f[0]) : -1;
  }(l, p) };
  return Ke(t, u), u;
}
function Kn(e, t) {
  const n = [];
  return t.forEach((l) => {
    const o = e.find((i) => zt(l, i.value)), a = e[l];
    (o == null ? void 0 : o.value) != null ? n.push(o.id) : a != null && n.push(a.id);
  }), n;
}
const Rl = Symbol.for("vuetify:v-btn-toggle"), dr = O({ ...Ll(), ...sr() }, "VBtnToggle");
H()({ name: "VBtnToggle", props: dr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: o, prev: a, select: i, selected: r } = cr(e, Rl);
  return W(() => {
    const u = Yn.filterProps(e);
    return s(Yn, ee({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var p;
      return [(p = n.default) == null ? void 0 : p.call(n, { isSelected: l, next: o, prev: a, select: i, selected: r })];
    } });
  }), { next: o, prev: a, select: i };
} });
const pr = O({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...q(), ...Et(), ...Be({ tag: "div" }), ...he() }, "VProgressCircular"), vr = H()({ name: "VProgressCircular", props: pr(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, o = D(), { themeClasses: a } = xe(e), { sizeClasses: i, sizeStyles: r } = Ot(e), { textColorClasses: u, textColorStyles: p } = Fe(G(e, "color")), { textColorClasses: c, textColorStyles: d } = Fe(G(e, "bgColor")), { intersectionRef: f, isIntersecting: g } = wl(), { resizeRef: $, contentRect: k } = Ol(), x = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), C = v(() => Number(e.width)), _ = v(() => r.value ? Number(e.size) : k.value ? k.value.width : Math.max(C.value, 32)), I = v(() => 20 / (1 - C.value / _.value) * 2), P = v(() => C.value / _.value * I.value), N = v(() => T((100 - x.value) / 100 * l));
  return _t(() => {
    f.value = o.value, $.value = o.value;
  }), W(() => s(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, i.value, u.value, e.class], style: [r.value, p.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : x.value }, { default: () => [s("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${I.value} ${I.value}` }, [s("circle", { class: ["v-progress-circular__underlay", c.value], style: d.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), s("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": l, "stroke-dashoffset": N.value }, null)]), n.default && s("div", { class: "v-progress-circular__content" }, [n.default({ value: x.value })])] })), {};
} }), fr = O({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Rl }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ie, appendIcon: ie, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Tt(), ...q(), ...Qe(), ...Lt(), ...st(), ...ur(), ...pn(), ...jt(), ...fn(), ...$e(), ...Il(), ...Et(), ...Be({ tag: "button" }), ...he(), ...Mt({ variant: "elevated" }) }, "VBtn"), Ml = H()({ name: "VBtn", directives: { Ripple: gn }, props: fr(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: o } = xe(e), { borderClasses: a } = Ft(e), { colorClasses: i, colorStyles: r, variantClasses: u } = dn(e), { densityClasses: p } = it(e), { dimensionStyles: c } = Rt(e), { elevationClasses: d } = ut(e), { loaderClasses: f } = vn(e), { locationStyles: g } = Dt(e), { positionClasses: $ } = mn(e), { roundedClasses: k } = Ae(e), { sizeClasses: x, sizeStyles: C } = Ot(e), _ = function(m, V) {
    let y = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    const E = ge("useGroupItem");
    if (!E)
      throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const h = ot();
    Ke(Symbol.for(`${V.description}:id`), h);
    const S = pe(V, null);
    if (!S) {
      if (!y)
        return S;
      throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${V.description}`);
    }
    const A = G(m, "value"), L = v(() => !(!S.disabled.value && !m.disabled));
    S.register({ id: h, value: A, disabled: L }, E), Je(() => {
      S.unregister(h);
    });
    const M = v(() => S.isSelected(h)), U = v(() => M.value && [S.selectedClass.value, m.selectedClass]);
    return Z(M, (F) => {
      E.emit("group:selected", { value: F });
    }), { id: h, isSelected: M, toggle: () => S.select(h, !M.value), select: (F) => S.select(h, F), selectedClass: U, value: A, disabled: L, group: S };
  }(e, e.symbol, !1), I = Vl(e, n), P = v(() => {
    var m;
    return e.active !== void 0 ? e.active : I.isLink.value ? (m = I.isActive) == null ? void 0 : m.value : _ == null ? void 0 : _.isSelected.value;
  }), N = v(() => (_ == null ? void 0 : _.disabled.value) || e.disabled), B = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), z = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function w(m) {
    var V;
    N.value || I.isLink.value && (m.metaKey || m.ctrlKey || m.shiftKey || m.button !== 0 || n.target === "_blank") || ((V = I.navigate) == null || V.call(I, m), _ == null || _.toggle());
  }
  return function(m, V) {
    Z(() => {
      var y;
      return (y = m.isActive) == null ? void 0 : y.value;
    }, (y) => {
      m.isLink.value && y && V && nt(() => {
        V(!0);
      });
    }, { immediate: !0 });
  }(I, _ == null ? void 0 : _.select), W(() => {
    var S, A;
    const m = I.isLink.value ? "a" : e.tag, V = !(!e.prependIcon && !l.prepend), y = !(!e.appendIcon && !l.append), E = !(!e.icon || e.icon === !0), h = (_ == null ? void 0 : _.isSelected.value) && (!I.isLink.value || ((S = I.isActive) == null ? void 0 : S.value)) || !_ || ((A = I.isActive) == null ? void 0 : A.value);
    return ke(s(m, { type: m === "a" ? void 0 : "button", class: ["v-btn", _ == null ? void 0 : _.selectedClass.value, { "v-btn--active": P.value, "v-btn--block": e.block, "v-btn--disabled": N.value, "v-btn--elevated": B.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, o.value, a.value, h ? i.value : void 0, p.value, d.value, f.value, $.value, k.value, x.value, u.value, e.class], style: [h ? r.value : void 0, c.value, g.value, C.value, e.style], disabled: N.value || void 0, href: I.href.value, onClick: w, value: z.value }, { default: () => {
      var L;
      return [cn(!0, "v-btn"), !e.icon && V && s("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? s(Te, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : s(Ie, { key: "prepend-icon", icon: e.prependIcon }, null)]), s("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && E ? s(Ie, { key: "content-icon", icon: e.icon }, null) : s(Te, { key: "content-defaults", disabled: !E, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var M;
        return [((M = l.default) == null ? void 0 : M.call(l)) ?? e.text];
      } })]), !e.icon && y && s("span", { key: "append", class: "v-btn__append" }, [l.append ? s(Te, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : s(Ie, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && s("span", { key: "loader", class: "v-btn__loader" }, [((L = l.loader) == null ? void 0 : L.call(l)) ?? s(vr, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[rt("ripple"), !N.value && e.ripple, null]]);
  }), {};
} }), qe = { h: 0, s: 0, v: 1, a: 1 }, Xt = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }) }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }) }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: Se, from: Pt }, Gt = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }) }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.s) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }) }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.l) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: vl, from: an }, Zn = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t }], to: yl, from: hl };
var el;
const Re = { rgb: { ...Xt, inputs: (el = Xt.inputs) == null ? void 0 : el.slice(0, 3) }, rgba: Xt, hsl: { ...Gt, inputs: Gt.inputs.slice(0, 3) }, hsla: Gt, hex: { ...Zn, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t }] }, hexa: Zn }, mr = (e) => {
  let { label: t, ...n } = e;
  return s("div", { class: "v-color-picker-edit__input" }, [s("input", n, null), s("span", null, [t])]);
}, gr = Ce({ name: "VColorPickerEdit", props: O({ color: Object, disabled: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Re).includes(e) }, modes: { type: Array, default: () => Object.keys(Re), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Re).includes(t)) }, ...q() }, "VColorPickerEdit")(), emits: { "update:color": (e) => !0, "update:mode": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = v(() => e.modes.map((a) => ({ ...Re[a], name: a }))), o = v(() => {
    var r;
    const a = l.value.find((u) => u.name === e.mode);
    if (!a)
      return [];
    const i = e.color ? a.to(e.color) : null;
    return (r = a.inputs) == null ? void 0 : r.map((u) => {
      let { getValue: p, getColor: c, ...d } = u;
      return { ...a.inputProps, ...d, disabled: e.disabled, value: i && p(i), onChange: (f) => {
        const g = f.target;
        g && n("update:color", a.from(c(i ?? qe, g.value)));
      } };
    });
  });
  return W(() => {
    var a;
    return s("div", { class: ["v-color-picker-edit", e.class], style: e.style }, [(a = o.value) == null ? void 0 : a.map((i) => s(mr, i, null)), l.value.length > 1 && s(Ml, { icon: "$unfold", size: "x-small", variant: "plain", onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), hn = Symbol.for("vuetify:v-slider"), hr = O({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: !1, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, ...$e(), ...st({ elevation: 2 }), ripple: { type: Boolean, default: !0 } }, "Slider"), yr = (e) => {
  let { props: t, steps: n, onSliderStart: l, onSliderMove: o, onSliderEnd: a, getActiveThumb: i } = e;
  const { isRtl: r } = ze(), u = G(t, "reverse"), p = v(() => t.direction === "vertical"), c = v(() => p.value !== u.value), { min: d, max: f, step: g, decimals: $, roundValue: k } = n, x = v(() => parseInt(t.thumbSize, 10)), C = v(() => parseInt(t.tickSize, 10)), _ = v(() => parseInt(t.trackSize, 10)), I = v(() => (f.value - d.value) / g.value), P = G(t, "disabled"), N = v(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), B = v(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), z = v(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), w = oe(!1), m = oe(0), V = D(), y = D();
  function E(R) {
    var fe;
    const j = t.direction === "vertical", ye = j ? "top" : "left", J = j ? "height" : "width", ne = j ? "clientY" : "clientX", { [ye]: le, [J]: X } = (fe = V.value) == null ? void 0 : fe.$el.getBoundingClientRect(), Q = function(ae, Pe) {
      return "touches" in ae && ae.touches.length ? ae.touches[0][Pe] : "changedTouches" in ae && ae.changedTouches.length ? ae.changedTouches[0][Pe] : ae[Pe];
    }(R, ne);
    let de = Math.min(Math.max((Q - le - m.value) / X, 0), 1) || 0;
    return (j ? c.value : c.value !== r.value) && (de = 1 - de), k(d.value + de * (f.value - d.value));
  }
  const h = (R) => {
    a({ value: E(R) }), w.value = !1, m.value = 0;
  }, S = (R) => {
    y.value = i(R), y.value && (y.value.focus(), w.value = !0, y.value.contains(R.target) ? m.value = function(j, ye, J) {
      const ne = J === "vertical", le = ye.getBoundingClientRect(), X = "touches" in j ? j.touches[0] : j;
      return ne ? X.clientY - (le.top + le.height / 2) : X.clientX - (le.left + le.width / 2);
    }(R, y.value, t.direction) : (m.value = 0, o({ value: E(R) })), l({ value: E(R) }));
  }, A = { passive: !0, capture: !0 };
  function L(R) {
    o({ value: E(R) });
  }
  function M(R) {
    R.stopPropagation(), R.preventDefault(), h(R), window.removeEventListener("mousemove", L, A), window.removeEventListener("mouseup", M);
  }
  function U(R) {
    var j;
    h(R), window.removeEventListener("touchmove", L, A), (j = R.target) == null || j.removeEventListener("touchend", U);
  }
  const F = (R) => {
    const j = (R - d.value) / (f.value - d.value) * 100;
    return He(isNaN(j) ? 0 : j, 0, 100);
  }, Y = G(t, "showTicks"), te = v(() => Y.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((R) => ({ value: R, position: F(R), label: R.toString() })) : Object.keys(t.ticks).map((R) => ({ value: parseFloat(R), position: F(parseFloat(R)), label: t.ticks[R] })) : I.value !== 1 / 0 ? function(R) {
    let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({ length: R }, (ye, J) => j + J);
  }(I.value + 1).map((R) => {
    const j = d.value + R * g.value;
    return { value: j, position: F(j) };
  }) : [] : []), K = v(() => te.value.some((R) => {
    let { label: j } = R;
    return !!j;
  })), ve = { activeThumbRef: y, color: G(t, "color"), decimals: $, disabled: P, direction: G(t, "direction"), elevation: G(t, "elevation"), hasLabels: K, isReversed: u, indexFromEnd: c, min: d, max: f, mousePressed: w, numTicks: I, onSliderMousedown: function(R) {
    R.preventDefault(), S(R), window.addEventListener("mousemove", L, A), window.addEventListener("mouseup", M, { passive: !1 });
  }, onSliderTouchstart: function(R) {
    var j;
    S(R), window.addEventListener("touchmove", L, A), (j = R.target) == null || j.addEventListener("touchend", U, { passive: !1 });
  }, parsedTicks: te, parseMouseMove: E, position: F, readonly: G(t, "readonly"), rounded: G(t, "rounded"), roundValue: k, showTicks: Y, startOffset: m, step: g, thumbSize: x, thumbColor: N, thumbLabel: G(t, "thumbLabel"), ticks: G(t, "ticks"), tickSize: C, trackColor: B, trackContainerRef: V, trackFillColor: z, trackSize: _, vertical: p };
  return Ke(hn, ve), ve;
}, br = O({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function ue(e, t, n) {
  return H()({ name: e, props: br({ mode: n, origin: t }), setup(l, o) {
    let { slots: a } = o;
    const i = { onBeforeEnter(r) {
      l.origin && (r.style.transformOrigin = l.origin);
    }, onLeave(r) {
      if (l.leaveAbsolute) {
        const { offsetTop: u, offsetLeft: p, offsetWidth: c, offsetHeight: d } = r;
        r._transitionInitialStyles = { position: r.style.position, top: r.style.top, left: r.style.left, width: r.style.width, height: r.style.height }, r.style.position = "absolute", r.style.top = `${u}px`, r.style.left = `${p}px`, r.style.width = `${c}px`, r.style.height = `${d}px`;
      }
      l.hideOnLeave && r.style.setProperty("display", "none", "important");
    }, onAfterLeave(r) {
      if (l.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
        const { position: u, top: p, left: c, width: d, height: f } = r._transitionInitialStyles;
        delete r._transitionInitialStyles, r.style.position = u || "", r.style.top = p || "", r.style.left = c || "", r.style.width = d || "", r.style.height = f || "";
      }
    } };
    return () => {
      const r = l.group ? oa : It;
      return Vt(r, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : i }, a.default);
    };
  } });
}
function Tl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return H()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, o) {
    let { slots: a } = o;
    return () => Vt(It, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, a.default);
  } });
}
function Fl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = nl(`offset-${t}`);
  return { onBeforeEnter(a) {
    a._parent = a.parentNode, a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, [t]: a.style[t] };
  }, onEnter(a) {
    const i = a._initialStyle;
    a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
    const r = `${a[n]}px`;
    a.style[t] = "0", a.offsetHeight, a.style.transition = i.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      a.style[t] = r;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, [t]: a.style[t] }, a.style.overflow = "hidden", a.style[t] = `${a[n]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(a) {
    e && a._parent && a._parent.classList.remove(e), o(a);
  }
  function o(a) {
    const i = a._initialStyle[t];
    a.style.overflow = a._initialStyle.overflow, i != null && (a.style[t] = i), delete a._initialStyle;
  }
}
ue("fab-transition", "center center", "out-in"), ue("dialog-bottom-transition"), ue("dialog-top-transition"), ue("fade-transition");
const kr = ue("scale-transition");
ue("scroll-x-transition"), ue("scroll-x-reverse-transition"), ue("scroll-y-transition"), ue("scroll-y-reverse-transition"), ue("slide-x-transition"), ue("slide-x-reverse-transition");
const jl = ue("slide-y-transition");
ue("slide-y-reverse-transition"), Tl("expand-transition", Fl());
const Sr = Tl("expand-x-transition", Fl("", !0)), Cr = O({ focused: Boolean, max: { type: Number, required: !0 }, min: { type: Number, required: !0 }, modelValue: { type: Number, required: !0 }, position: { type: Number, required: !0 }, ripple: { type: [Boolean, Object], default: !0 }, ...q() }, "VSliderThumb"), wr = H()({ name: "VSliderThumb", directives: { Ripple: gn }, props: Cr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const o = pe(hn), { isRtl: a, rtlClasses: i } = ze();
  if (!o)
    throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { thumbColor: r, step: u, disabled: p, thumbSize: c, thumbLabel: d, direction: f, isReversed: g, vertical: $, readonly: k, elevation: x, mousePressed: C, decimals: _, indexFromEnd: I } = o, { textColorClasses: P, textColorStyles: N } = Fe(r), { pageup: B, pagedown: z, end: w, home: m, left: V, right: y, down: E, up: h } = Sa, S = [B, z, w, m, V, y, E, h], A = v(() => u.value ? [1, 2, 3] : [1, 5, 10]);
  function L(M) {
    const U = function(F, Y) {
      if (!S.includes(F.key))
        return;
      F.preventDefault();
      const te = u.value || 0.1, K = (e.max - e.min) / te;
      if ([V, y, E, h].includes(F.key)) {
        const ve = ($.value ? [a.value ? V : y, g.value ? E : h] : I.value !== a.value ? [V, h] : [y, h]).includes(F.key) ? 1 : -1, R = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
        Y += ve * te * A.value[R];
      } else
        F.key === m ? Y = e.min : F.key === w ? Y = e.max : Y -= (F.key === z ? 1 : -1) * te * (K > 100 ? K / 10 : 10);
      return Math.max(e.min, Math.min(e.max, Y));
    }(M, e.modelValue);
    U != null && l("update:modelValue", U);
  }
  return W(() => {
    const M = T(I.value ? 100 - e.position : e.position, "%"), { elevationClasses: U } = ut(v(() => p.value ? void 0 : x.value));
    return s("div", { class: ["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && C.value }, e.class, i.value], style: [{ "--v-slider-thumb-position": M, "--v-slider-thumb-size": T(c.value) }, e.style], role: "slider", tabindex: p.value ? -1 : 0, "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.modelValue, "aria-readonly": !!k.value, "aria-orientation": f.value, onKeydown: k.value ? void 0 : L }, [s("div", { class: ["v-slider-thumb__surface", P.value, U.value], style: { ...N.value } }, null), ke(s("div", { class: ["v-slider-thumb__ripple", P.value], style: N.value }, null), [[rt("ripple"), e.ripple, null, { circle: !0, center: !0 }]]), s(kr, { origin: "bottom center" }, { default: () => {
      var F;
      return [ke(s("div", { class: "v-slider-thumb__label-container" }, [s("div", { class: ["v-slider-thumb__label"] }, [s("div", null, [((F = n["thumb-label"]) == null ? void 0 : F.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(u.value ? _.value : 1)])])]), [[Bt, d.value && e.focused || d.value === "always"]])];
    } })]);
  }), {};
} }), _r = O({ start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...q() }, "VSliderTrack"), xr = H()({ name: "VSliderTrack", props: _r(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const l = pe(hn);
  if (!l)
    throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: o, parsedTicks: a, rounded: i, showTicks: r, tickSize: u, trackColor: p, trackFillColor: c, trackSize: d, vertical: f, min: g, max: $, indexFromEnd: k } = l, { roundedClasses: x } = Ae(i), { backgroundColorClasses: C, backgroundColorStyles: _ } = Ye(c), { backgroundColorClasses: I, backgroundColorStyles: P } = Ye(p), N = v(() => `inset-${f.value ? "block" : "inline"}-${k.value ? "end" : "start"}`), B = v(() => f.value ? "height" : "width"), z = v(() => ({ [N.value]: "0%", [B.value]: "100%" })), w = v(() => e.stop - e.start), m = v(() => ({ [N.value]: T(e.start, "%"), [B.value]: T(w.value, "%") })), V = v(() => r.value ? (f.value ? a.value.slice().reverse() : a.value).map((y, E) => {
    var S;
    const h = y.value !== g.value && y.value !== $.value ? T(y.position, "%") : void 0;
    return s("div", { key: y.value, class: ["v-slider-track__tick", { "v-slider-track__tick--filled": y.position >= e.start && y.position <= e.stop, "v-slider-track__tick--first": y.value === g.value, "v-slider-track__tick--last": y.value === $.value }], style: { [N.value]: h } }, [(y.label || n["tick-label"]) && s("div", { class: "v-slider-track__tick-label" }, [((S = n["tick-label"]) == null ? void 0 : S.call(n, { tick: y, index: E })) ?? y.label])]);
  }) : []);
  return W(() => s("div", { class: ["v-slider-track", x.value, e.class], style: [{ "--v-slider-track-size": T(d.value), "--v-slider-tick-size": T(u.value) }, e.style] }, [s("div", { class: ["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!o.value || !c.value }], style: { ...z.value, ...P.value } }, null), s("div", { class: ["v-slider-track__fill", C.value], style: { ...m.value, ..._.value } }, null), r.value && s("div", { class: ["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }] }, [V.value])])), {};
} });
function Dl(e) {
  const { t } = function() {
    const n = pe(_l);
    if (!n)
      throw new Error("[Vuetify] Could not find injected locale instance");
    return n;
  }();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], a = e[`onClick:${l}`], i = a && o ? t(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return s(Ie, { icon: e[`${l}Icon`], "aria-label": i, onClick: a }, null);
  } };
}
const Vr = O({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...q(), ...un({ transition: { component: jl, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Ir = H()({ name: "VMessages", props: Vr(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => tt(e.messages)), { textColorClasses: o, textColorStyles: a } = Fe(v(() => e.color));
  return W(() => s(Ue, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((i, r) => s("div", { class: "v-messages__message", key: `${r}-${l.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), yn = O({ focused: Boolean, "onUpdate:focused": Xe() }, "focus");
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e();
  const n = we(e, "focused");
  return { focusClasses: v(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const Br = Symbol.for("vuetify:form"), $r = O({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...yn() }, "validation");
function Ar(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _e(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ot();
  const l = we(e, "modelValue"), o = v(() => e.validationValue === void 0 ? l.value : e.validationValue), a = pe(Br, null), i = D([]), r = oe(!0), u = v(() => !(!tt(l.value === "" ? null : l.value).length && !tt(o.value === "" ? null : o.value).length)), p = v(() => !!(e.disabled ?? (a == null ? void 0 : a.isDisabled.value))), c = v(() => !!(e.readonly ?? (a == null ? void 0 : a.isReadonly.value))), d = v(() => {
    var P;
    return (P = e.errorMessages) != null && P.length ? tt(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors)) : i.value;
  }), f = v(() => {
    let P = (e.validateOn ?? (a == null ? void 0 : a.validateOn.value)) || "input";
    P === "lazy" && (P = "input lazy");
    const N = new Set((P == null ? void 0 : P.split(" ")) ?? []);
    return { blur: N.has("blur") || N.has("input"), input: N.has("input"), submit: N.has("submit"), lazy: N.has("lazy") };
  }), g = v(() => {
    var P;
    return !e.error && !((P = e.errorMessages) != null && P.length) && (!e.rules.length || (r.value ? !i.value.length && !f.value.lazy || null : !i.value.length));
  }), $ = oe(!1), k = v(() => ({ [`${t}--error`]: g.value === !1, [`${t}--dirty`]: u.value, [`${t}--disabled`]: p.value, [`${t}--readonly`]: c.value })), x = v(() => e.name ?? b(n));
  function C() {
    l.value = null, nt(_);
  }
  function _() {
    r.value = !0, f.value.lazy ? i.value = [] : I(!0);
  }
  async function I() {
    let P = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const N = [];
    $.value = !0;
    for (const B of e.rules) {
      if (N.length >= +(e.maxErrors ?? 1))
        break;
      const z = typeof B == "function" ? B : () => B, w = await z(o.value);
      w !== !0 && (w === !1 || typeof w == "string" ? N.push(w || "") : console.warn(`${w} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    return i.value = N, $.value = !1, r.value = P, i.value;
  }
  return rl(() => {
    a == null || a.register({ id: x.value, validate: I, reset: C, resetValidation: _ });
  }), Je(() => {
    a == null || a.unregister(x.value);
  }), $t(async () => {
    f.value.lazy || await I(!0), a == null || a.update(x.value, g.value, d.value);
  }), Qt(() => f.value.input, () => {
    Z(o, () => {
      if (o.value != null)
        I();
      else if (e.focused) {
        const P = Z(() => e.focused, (N) => {
          N || I(), P();
        });
      }
    });
  }), Qt(() => f.value.blur, () => {
    Z(() => e.focused, (P) => {
      P || I();
    });
  }), Z(g, () => {
    a == null || a.update(x.value, g.value, d.value);
  }), { errorMessages: d, isDirty: u, isDisabled: p, isReadonly: c, isPristine: r, isValid: g, isValidating: $, reset: C, resetValidation: _, validate: I, validationClasses: k };
}
const kn = O({ id: String, appendIcon: ie, centerAffix: { type: Boolean, default: !0 }, prependIcon: ie, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Xe(), "onClick:append": Xe(), ...q(), ...Qe(), ...$r() }, "VInput"), wt = H()({ name: "VInput", props: { ...kn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: o } = t;
  const { densityClasses: a } = it(e), { rtlClasses: i } = ze(), { InputIcon: r } = Dl(e), u = ot(), p = v(() => e.id || `input-${u}`), c = v(() => `${p.value}-messages`), { errorMessages: d, isDirty: f, isDisabled: g, isReadonly: $, isPristine: k, isValid: x, isValidating: C, reset: _, resetValidation: I, validate: P, validationClasses: N } = Ar(e, "v-input", p), B = v(() => ({ id: p, messagesId: c, isDirty: f, isDisabled: g, isReadonly: $, isPristine: k, isValid: x, isValidating: C, reset: _, resetValidation: I, validate: P })), z = v(() => {
    var w;
    return (w = e.errorMessages) != null && w.length || !k.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return W(() => {
    var E, h, S, A;
    const w = !(!l.prepend && !e.prependIcon), m = !(!l.append && !e.appendIcon), V = z.value.length > 0, y = !e.hideDetails || e.hideDetails === "auto" && (V || !!l.details);
    return s("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, a.value, i.value, N.value, e.class], style: e.style }, [w && s("div", { key: "prepend", class: "v-input__prepend" }, [(E = l.prepend) == null ? void 0 : E.call(l, B.value), e.prependIcon && s(r, { key: "prepend-icon", name: "prepend" }, null)]), l.default && s("div", { class: "v-input__control" }, [(h = l.default) == null ? void 0 : h.call(l, B.value)]), m && s("div", { key: "append", class: "v-input__append" }, [e.appendIcon && s(r, { key: "append-icon", name: "append" }, null), (S = l.append) == null ? void 0 : S.call(l, B.value)]), y && s("div", { class: "v-input__details" }, [s(Ir, { id: c.value, active: V, messages: z.value }, { message: l.message }), (A = l.details) == null ? void 0 : A.call(l, B.value)])]);
  }), { reset: _, resetValidation: I, validate: P, isValid: x, errorMessages: d };
} }), zr = O({ text: String, clickable: Boolean, ...q(), ...he() }, "VLabel"), Hl = H()({ name: "VLabel", props: zr(), setup(e, t) {
  let { slots: n } = t;
  return W(() => {
    var l;
    return s("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Pr = O({ ...yn(), ...hr(), ...kn(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Jn = H()({ name: "VSlider", props: Pr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, start: (e) => !0, end: (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const o = D(), { rtlClasses: a } = ze(), i = ((B) => {
    const z = v(() => parseFloat(B.min)), w = v(() => parseFloat(B.max)), m = v(() => +B.step > 0 ? parseFloat(B.step) : 0), V = v(() => Math.max(xn(m.value), xn(z.value)));
    return { min: z, max: w, step: m, decimals: V, roundValue: function(y) {
      if (y = parseFloat(y), m.value <= 0)
        return y;
      const E = He(y, z.value, w.value), h = z.value % m.value, S = Math.round((E - h) / m.value) * m.value + h;
      return parseFloat(Math.min(S, w.value).toFixed(V.value));
    } };
  })(e), r = we(e, "modelValue", void 0, (B) => i.roundValue(B ?? i.min.value)), { min: u, max: p, mousePressed: c, roundValue: d, onSliderMousedown: f, onSliderTouchstart: g, trackContainerRef: $, position: k, hasLabels: x, readonly: C } = yr({ props: e, steps: i, onSliderStart: () => {
    l("start", r.value);
  }, onSliderEnd: (B) => {
    let { value: z } = B;
    const w = d(z);
    r.value = w, l("end", w);
  }, onSliderMove: (B) => {
    let { value: z } = B;
    return r.value = d(z);
  }, getActiveThumb: () => {
    var B;
    return (B = o.value) == null ? void 0 : B.$el;
  } }), { isFocused: _, focus: I, blur: P } = bn(e), N = v(() => k(r.value));
  return W(() => {
    const B = wt.filterProps(e), z = !!(e.label || n.label || n.prepend);
    return s(wt, ee({ class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || x.value, "v-slider--focused": _.value, "v-slider--pressed": c.value, "v-slider--disabled": e.disabled }, a.value, e.class], style: e.style }, B, { focused: _.value }), { ...n, prepend: z ? (w) => {
      var m, V;
      return s(be, null, [((m = n.label) == null ? void 0 : m.call(n, w)) ?? (e.label ? s(Hl, { id: w.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (V = n.prepend) == null ? void 0 : V.call(n, w)]);
    } : void 0, default: (w) => {
      let { id: m, messagesId: V } = w;
      return s("div", { class: "v-slider__container", onMousedown: C.value ? void 0 : f, onTouchstartPassive: C.value ? void 0 : g }, [s("input", { id: m.value, name: e.name || m.value, disabled: !!e.disabled, readonly: !!e.readonly, tabindex: "-1", value: r.value }, null), s(xr, { ref: $, start: 0, stop: N.value }, { "tick-label": n["tick-label"] }), s(wr, { ref: o, "aria-describedby": V.value, focused: _.value, min: u.value, max: p.value, modelValue: r.value, "onUpdate:modelValue": (y) => r.value = y, position: N.value, elevation: e.elevation, onFocus: I, onBlur: P, ripple: e.ripple }, { "thumb-label": n["thumb-label"] })]);
    } });
  }), {};
} }), Nr = Ce({ name: "VColorPickerPreview", props: O({ color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...q() }, "VColorPickerPreview")(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = new AbortController();
  async function o() {
    if (!Sn)
      return;
    const a = new window.EyeDropper();
    try {
      const i = hl((await a.open({ signal: l.signal })).sRGBHex);
      n("update:color", { ...e.color ?? qe, ...i });
    } catch {
    }
  }
  return ia(() => l.abort()), W(() => {
    var a, i;
    return s("div", { class: ["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class], style: e.style }, [Sn && s("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [s(Ml, { onClick: o, icon: "$eyeDropper", variant: "plain", density: "comfortable" }, null)]), s("div", { class: "v-color-picker-preview__dot" }, [s("div", { style: { background: ml(e.color ?? qe) } }, null)]), s("div", { class: "v-color-picker-preview__sliders" }, [s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__hue", modelValue: (a = e.color) == null ? void 0 : a.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? qe, h: r }), step: 0, min: 0, max: 360, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null), !e.hideAlpha && s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", modelValue: ((i = e.color) == null ? void 0 : i.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? qe, a: r }), step: 1 / 256, min: 0, max: 1, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null)])]);
  }), {};
} }), Er = { red: { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, pink: { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, purple: { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, deepPurple: { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, indigo: { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, blue: { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, lightBlue: { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, cyan: { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, teal: { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, green: { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, lightGreen: { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, lime: { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, yellow: { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, amber: { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, orange: { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, deepOrange: { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, brown: { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, blueGrey: { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, grey: { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, shades: { black: "#000000", white: "#ffffff", transparent: "#ffffff00" } }, Or = O({ swatches: { type: Array, default: () => function(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}(Er) }, disabled: Boolean, color: Object, maxHeight: [Number, String], ...q() }, "VColorPickerSwatches"), Lr = Ce({ name: "VColorPickerSwatches", props: Or(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  return W(() => s("div", { class: ["v-color-picker-swatches", e.class], style: [{ maxHeight: T(e.maxHeight) }, e.style] }, [s("div", null, [e.swatches.map((l) => s("div", { class: "v-color-picker-swatches__swatch" }, [l.map((o) => {
    const a = Ve(o), i = Pt(a), r = fl(a);
    return s("div", { class: "v-color-picker-swatches__color", onClick: () => i && n("update:color", i) }, [s("div", { style: { background: r } }, [e.color && zt(e.color, i) ? s(Ie, { size: "x-small", icon: "$success", color: Oa(o, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), Wl = O({ color: String, ...Tt(), ...q(), ...Lt(), ...st(), ...jt(), ...fn(), ...$e(), ...Be(), ...he() }, "VSheet"), Qn = H()({ name: "VSheet", props: Wl(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = xe(e), { backgroundColorClasses: o, backgroundColorStyles: a } = Ye(G(e, "color")), { borderClasses: i } = Ft(e), { dimensionStyles: r } = Rt(e), { elevationClasses: u } = ut(e), { locationStyles: p } = Dt(e), { positionClasses: c } = mn(e), { roundedClasses: d } = Ae(e);
  return W(() => s(e.tag, { class: ["v-sheet", l.value, o.value, i.value, u.value, c.value, d.value, e.class], style: [a.value, r.value, p.value, e.style] }, n)), {};
} }), Rr = Ce({ name: "VColorPicker", props: O({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Re).includes(e) }, modes: { type: Array, default: () => Object.keys(Re), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Re).includes(t)) }, showSwatches: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...ul(Wl({ width: 300 }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"]) }, "VColorPicker")(), emits: { "update:modelValue": (e) => !0, "update:mode": (e) => !0 }, setup(e) {
  const t = we(e, "mode"), n = D(null), l = we(e, "modelValue", void 0, (i) => {
    if (i == null || i === "")
      return null;
    let r;
    try {
      r = Pt(Ve(i));
    } catch (u) {
      return Ge(u), null;
    }
    return n.value && (r = { ...r, h: n.value.h }, n.value = null), r;
  }, (i) => i ? function(r, u) {
    if (u == null || typeof u == "string") {
      const p = yl(r);
      return r.a === 1 ? p.slice(0, 7) : p;
    }
    if (typeof u == "object") {
      let p;
      return Le(u, ["r", "g", "b"]) ? p = Se(r) : Le(u, ["h", "s", "l"]) ? p = vl(r) : Le(u, ["h", "s", "v"]) && (p = r), function(c, d) {
        if (d) {
          const { a: f, ...g } = c;
          return g;
        }
        return c;
      }(p, !Le(u, ["a"]) && r.a === 1);
    }
    return r;
  }(i, e.modelValue) : null), { rtlClasses: o } = ze(), a = (i) => {
    l.value = i, n.value = i;
  };
  return $t(() => {
    e.modes.includes(t.value) || (t.value = e.modes[0]);
  }), Nt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), W(() => {
    const i = Qn.filterProps(e);
    return s(Qn, ee({ rounded: e.rounded, elevation: e.elevation, theme: e.theme, class: ["v-color-picker", o.value, e.class], style: [{ "--v-color-picker-color-hsv": ml({ ...l.value ?? qe, a: 1 }) }, e.style] }, i, { maxWidth: e.width }), { default: () => [!e.hideCanvas && s(ir, { key: "canvas", color: l.value, "onUpdate:color": a, disabled: e.disabled, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && s("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && s(Nr, { key: "preview", color: l.value, "onUpdate:color": a, hideAlpha: !t.value.endsWith("a"), disabled: e.disabled }, null), !e.hideInputs && s(gr, { key: "edit", modes: e.modes, mode: t.value, "onUpdate:mode": (r) => t.value = r, color: l.value, "onUpdate:color": a, disabled: e.disabled }, null)]), e.showSwatches && s(Lr, { key: "swatches", color: l.value, "onUpdate:color": a, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled }, null)] });
  }), {};
} }), Mr = O({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...q(), ...un({ transition: { component: jl } }) }, "VCounter"), Tr = H()({ name: "VCounter", functional: !0, props: Mr(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return W(() => s(Ue, { transition: e.transition }, { default: () => [ke(s("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Bt, e.active]])] })), {};
} }), Fr = O({ floating: Boolean, ...q() }, "VFieldLabel"), gt = H()({ name: "VFieldLabel", props: Fr(), setup(e, t) {
  let { slots: n } = t;
  return W(() => s(Hl, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), jr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ul = O({ appendInnerIcon: ie, bgColor: String, clearable: Boolean, clearIcon: { type: ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => jr.includes(e) }, "onClick:clear": Xe(), "onClick:appendInner": Xe(), "onClick:prependInner": Xe(), ...q(), ...pn(), ...$e(), ...he() }, "VField"), ql = H()({ name: "VField", inheritAttrs: !1, props: { id: String, ...yn(), ...Ul() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { themeClasses: a } = xe(e), { loaderClasses: i } = vn(e), { focusClasses: r, isFocused: u, focus: p, blur: c } = bn(e), { InputIcon: d } = Dl(e), { roundedClasses: f } = Ae(e), { rtlClasses: g } = ze(), $ = v(() => e.dirty || e.active), k = v(() => !(e.singleLine || !e.label && !o.label)), x = ot(), C = v(() => e.id || `input-${x}`), _ = v(() => `${C.value}-messages`), I = D(), P = D(), N = D(), B = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: z, backgroundColorStyles: w } = Ye(G(e, "bgColor")), { textColorClasses: m, textColorStyles: V } = Fe(v(() => e.error || e.disabled ? void 0 : $.value && u.value ? e.color : e.baseColor));
  Z($, (h) => {
    if (k.value) {
      const S = I.value.$el, A = P.value.$el;
      requestAnimationFrame(() => {
        const L = function(J) {
          const ne = J.getBoundingClientRect(), le = getComputedStyle(J), X = le.transform;
          if (X) {
            let Q, de, fe, ae, Pe;
            if (X.startsWith("matrix3d("))
              Q = X.slice(9, -1).split(/, /), de = +Q[0], fe = +Q[5], ae = +Q[12], Pe = +Q[13];
            else {
              if (!X.startsWith("matrix("))
                return new Ut(ne);
              Q = X.slice(7, -1).split(/, /), de = +Q[0], fe = +Q[3], ae = +Q[4], Pe = +Q[5];
            }
            const Ht = le.transformOrigin, Gl = ne.x - ae - (1 - de) * parseFloat(Ht), Yl = ne.y - Pe - (1 - fe) * parseFloat(Ht.slice(Ht.indexOf(" ") + 1)), Kl = de ? ne.width / de : J.offsetWidth + 1, Zl = fe ? ne.height / fe : J.offsetHeight + 1;
            return new Ut({ x: Gl, y: Yl, width: Kl, height: Zl });
          }
          return new Ut(ne);
        }(S), M = A.getBoundingClientRect(), U = M.x - L.x, F = M.y - L.y - (L.height / 2 - M.height / 2), Y = M.width / 0.75, te = Math.abs(Y - L.width) > 1 ? { maxWidth: T(Y) } : void 0, K = getComputedStyle(S), ve = getComputedStyle(A), R = 1e3 * parseFloat(K.transitionDuration) || 150, j = parseFloat(ve.getPropertyValue("--v-field-label-scale")), ye = ve.getPropertyValue("color");
        S.style.visibility = "visible", A.style.visibility = "hidden", function(J, ne, le) {
          if (J.animate === void 0)
            return { finished: Promise.resolve() };
          let X;
          try {
            X = J.animate(ne, le);
          } catch {
            return { finished: Promise.resolve() };
          }
          return X.finished === void 0 && (X.finished = new Promise((Q) => {
            X.onfinish = () => {
              Q(X);
            };
          })), X;
        }(S, { transform: `translate(${U}px, ${F}px) scale(${j})`, color: ye, ...te }, { duration: R, easing: "cubic-bezier(0.4, 0, 0.2, 1)", direction: h ? "normal" : "reverse" }).finished.then(() => {
          S.style.removeProperty("visibility"), A.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const y = v(() => ({ isActive: $, isFocused: u, controlRef: N, blur: c, focus: p }));
  function E(h) {
    h.target !== document.activeElement && h.preventDefault();
  }
  return W(() => {
    var U, F, Y;
    const h = e.variant === "outlined", S = o["prepend-inner"] || e.prependInnerIcon, A = !(!e.clearable && !o.clear), L = !!(o["append-inner"] || e.appendInnerIcon || A), M = () => o.label ? o.label({ ...y.value, label: e.label, props: { for: C.value } }) : e.label;
    return s("div", ee({ class: ["v-field", { "v-field--active": $.value, "v-field--appended": L, "v-field--center-affix": e.centerAffix ?? !B.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": S, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !M(), [`v-field--variant-${e.variant}`]: !0 }, a.value, z.value, r.value, i.value, f.value, g.value, e.class], style: [w.value, e.style], onClick: E }, n), [s("div", { class: "v-field__overlay" }, null), s(xl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: o.loader }), S && s("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && s(d, { key: "prepend-icon", name: "prependInner" }, null), (U = o["prepend-inner"]) == null ? void 0 : U.call(o, y.value)]), s("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && k.value && s(gt, { key: "floating-label", ref: P, class: [m.value], floating: !0, for: C.value, style: V.value }, { default: () => [M()] }), s(gt, { ref: I, for: C.value }, { default: () => [M()] }), (F = o.default) == null ? void 0 : F.call(o, { ...y.value, props: { id: C.value, class: "v-field__input", "aria-describedby": _.value }, focus: p, blur: c })]), A && s(Sr, { key: "clear" }, { default: () => [ke(s("div", { class: "v-field__clearable", onMousedown: (te) => {
      te.preventDefault(), te.stopPropagation();
    } }, [o.clear ? o.clear() : s(d, { name: "clear" }, null)]), [[Bt, e.dirty]])] }), L && s("div", { key: "append", class: "v-field__append-inner" }, [(Y = o["append-inner"]) == null ? void 0 : Y.call(o, y.value), e.appendInnerIcon && s(d, { key: "append-icon", name: "appendInner" }, null)]), s("div", { class: ["v-field__outline", m.value], style: V.value }, [h && s(be, null, [s("div", { class: "v-field__outline__start" }, null), k.value && s("div", { class: "v-field__outline__notch" }, [s(gt, { ref: P, floating: !0, for: C.value }, { default: () => [M()] })]), s("div", { class: "v-field__outline__end" }, null)]), B.value && k.value && s(gt, { ref: P, floating: !0, for: C.value }, { default: () => [M()] })])]);
  }), { controlRef: N };
} });
function Dr(e) {
  return sl(e, Object.keys(ql.props).filter((t) => {
    return n = t, !cl.test(n) && t !== "class" && t !== "style";
    var n;
  }));
}
const Yt = Symbol("Forwarded refs");
function Kt(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
const Hr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Wr = O({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...kn(), ...Ul() }, "VTextField"), Ur = H()({ name: "VTextField", directives: { Intersect: Sl }, inheritAttrs: !1, props: Wr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const a = we(e, "modelValue"), { isFocused: i, focus: r, blur: u } = bn(e), p = v(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), c = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), d = v(() => ["plain", "underlined"].includes(e.variant));
  function f(B, z) {
    var w, m;
    e.autofocus && B && ((m = (w = z[0].target) == null ? void 0 : w.focus) == null || m.call(w));
  }
  const g = D(), $ = D(), k = D(), x = v(() => Hr.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function C() {
    var B;
    k.value !== document.activeElement && ((B = k.value) == null || B.focus()), i.value || r();
  }
  function _(B) {
    l("mousedown:control", B), B.target !== k.value && (C(), B.preventDefault());
  }
  function I(B) {
    C(), l("click:control", B);
  }
  function P(B) {
    B.stopPropagation(), C(), nt(() => {
      a.value = null, function(z) {
        for (var w = arguments.length, m = new Array(w > 1 ? w - 1 : 0), V = 1; V < w; V++)
          m[V - 1] = arguments[V];
        if (Array.isArray(z))
          for (const y of z)
            y(...m);
        else
          typeof z == "function" && z(...m);
      }(e["onClick:clear"], B);
    });
  }
  function N(B) {
    var w;
    const z = B.target;
    if (a.value = z.value, ((w = e.modelModifiers) == null ? void 0 : w.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const m = [z.selectionStart, z.selectionEnd];
      nt(() => {
        z.selectionStart = m[0], z.selectionEnd = m[1];
      });
    }
  }
  return W(() => {
    const B = !!(o.counter || e.counter !== !1 && e.counter != null), z = !(!B && !o.details), [w, m] = function(h) {
      const [S, A] = _n(h, [cl]), L = ul(S, Ca), [M, U] = _n(A, ["class", "style", "id", /^data-/]);
      return Object.assign(M, S), Object.assign(U, L), [M, U];
    }(n), { modelValue: V, ...y } = wt.filterProps(e), E = Dr(e);
    return s(wt, ee({ ref: g, modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": d.value }, e.class], style: e.style }, w, y, { centerAffix: !d.value, focused: i.value }), { ...o, default: (h) => {
      let { id: S, isDisabled: A, isDirty: L, isReadonly: M, isValid: U } = h;
      return s(ql, ee({ ref: $, onMousedown: _, onClick: I, "onClick:clear": P, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, E, { id: S.value, active: x.value || L.value, dirty: L.value || e.dirty, disabled: A.value, focused: i.value, error: U.value === !1 }), { ...o, default: (F) => {
        let { props: { class: Y, ...te } } = F;
        const K = ke(s("input", ee({ ref: k, value: a.value, onInput: N, autofocus: e.autofocus, readonly: M.value, disabled: A.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: C, onBlur: u }, te, m), null), [[rt("intersect"), { handler: f }, null, { once: !0 }]]);
        return s(be, null, [e.prefix && s("span", { class: "v-text-field__prefix" }, [s("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), o.default ? s("div", { class: Y, "data-no-activator": "" }, [o.default(), K]) : sa(K, { class: Y }), e.suffix && s("span", { class: "v-text-field__suffix" }, [s("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: z ? (h) => {
      var S;
      return s(be, null, [(S = o.details) == null ? void 0 : S.call(o, h), B && s(be, null, [s("span", null, null), s(Tr, { active: e.persistentCounter || i.value, value: p.value, max: c.value }, o.counter)])]);
    } : void 0 });
  }), function(B) {
    for (var z = arguments.length, w = new Array(z > 1 ? z - 1 : 0), m = 1; m < z; m++)
      w[m - 1] = arguments[m];
    return B[Yt] = w, new Proxy(B, { get(V, y) {
      if (Reflect.has(V, y))
        return Reflect.get(V, y);
      if (typeof y != "symbol" && !y.startsWith("$") && !y.startsWith("__")) {
        for (const E of w)
          if (E.value && Reflect.has(E.value, y)) {
            const h = Reflect.get(E.value, y);
            return typeof h == "function" ? h.bind(E.value) : h;
          }
      }
    }, has(V, y) {
      if (Reflect.has(V, y))
        return !0;
      if (typeof y == "symbol" || y.startsWith("$") || y.startsWith("__"))
        return !1;
      for (const E of w)
        if (E.value && Reflect.has(E.value, y))
          return !0;
      return !1;
    }, set(V, y, E) {
      if (Reflect.has(V, y))
        return Reflect.set(V, y, E);
      if (typeof y == "symbol" || y.startsWith("$") || y.startsWith("__"))
        return !1;
      for (const h of w)
        if (h.value && Reflect.has(h.value, y))
          return Reflect.set(h.value, y, E);
      return !1;
    }, getOwnPropertyDescriptor(V, y) {
      var h;
      const E = Reflect.getOwnPropertyDescriptor(V, y);
      if (E)
        return E;
      if (typeof y != "symbol" && !y.startsWith("$") && !y.startsWith("__")) {
        for (const S of w) {
          if (!S.value)
            continue;
          const A = Kt(S.value, y) ?? ("_" in S.value ? Kt((h = S.value._) == null ? void 0 : h.setupState, y) : void 0);
          if (A)
            return A;
        }
        for (const S of w) {
          const A = S.value && S.value[Yt];
          if (!A)
            continue;
          const L = A.slice();
          for (; L.length; ) {
            const M = L.shift(), U = Kt(M.value, y);
            if (U)
              return U;
            const F = M.value && M.value[Yt];
            F && L.push(...F);
          }
        }
      }
    } });
  }({}, g, $, k);
} }), qr = { key: 1 }, Xr = { key: 0, class: "text-error ms-1" }, Gr = ((e) => (ha("data-v-e2745fd7"), e = e(), ya(), e))(() => ol("div", { class: "position-elm-helper" }, null, -1)), Yr = xt({ inheritAttrs: !1, __name: "VColorField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, clearable: { default: !1 }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, canvasHeight: {}, dotSize: {}, hideCanvas: {}, hideInputs: {}, hideSliders: {}, mode: {}, modes: {}, showSwatches: {}, swatches: {}, swatchesMaxHeight: {}, variant: { default: "filled" }, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { type: [String, null, Boolean], default: "pip" }, pipBorderRadius: { default: "50%" }, pipSize: {}, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(e, { emit: t }) {
  var E;
  const n = ua(), l = ca(), o = t, a = e, i = pe(Xl, {});
  let r = bt({ ...a, ...i });
  _t(() => {
    r = { ...a, ...i };
  });
  const u = D({ VCard: { elevation: 5, hover: !1, loading: !1, verticalOffset: 28, ...r.cardProps }, VColorPicker: { canvasHeight: r.canvasHeight, dotSize: r.dotSize, elevation: 0, hideCanvas: r.hideCanvas, hideInputs: r.hideInputs, hideSliders: r.hideSliders, mode: r.mode, modes: r.modes, showSwatches: r.showSwatches, swatches: r.swatches, swatchesMaxHeight: r.swatchesMaxHeight, ...r.colorPickerProps } }), p = D(null), c = D({}), d = D(!1), f = D(null), g = D(n.modelValue), $ = D(n.modelValue), k = D((E = u.value.VColorPicker) == null ? void 0 : E.mode), x = D(r.theme ?? void 0);
  let C = bt({ bottom: 0, height: 150, left: 0, right: 0, top: 0, width: 300 });
  const _ = D({ density: r.density, modelValue: $, pip: r.pip, pipBorder: r.pipBorder, pipBorderRadius: r.pipBorderRadius, pipIcon: r.pipIcon, pipSize: r.iconSize });
  Z(() => n.modelValue, (h) => {
    m(h);
  });
  const I = v(() => ((h) => {
    const { name: S = "", readonly: A, readonlyInput: L } = h;
    return { [`${Oe}--text-field-${S}`]: S !== "", [`${Oe}--text-field-readonly`]: A ?? !1, [`${Oe}--text-field-readonly-input`]: !(!L || A), [`${Oe}--text-field`]: !0 };
  })({ name: r.name, readonly: r.readonly, readonlyInput: r.readonlyInput })), P = v(() => r.readonly || r.readonlyInput), N = v(() => {
    if (r.iconHoverColor !== !1)
      return typeof r.iconHoverColor == "string" ? r.iconHoverColor : r.color ?? void 0;
  }), B = v(() => ((h) => {
    const { fullWidth: S } = h;
    return { [`${Oe}--card`]: !0, [`${Oe}--card-full-width`]: S };
  })({ fullWidth: r.cardFieldWidth }));
  function z(h) {
    (h !== "textField" || r.readonlyInput || r.readonly) && (h === "textFieldIcon" && (r.readonlyInput || r.readonly) || w());
  }
  function w(h) {
    var R;
    const S = { left: 0, right: 0, top: 0, width: 0 }, A = f.value;
    if (!d.value && (h === "keyup" || h === "clear"))
      return void (h === "clear" && V(""));
    if (d.value = !d.value, !d.value)
      return void (c.value.display = "none");
    const L = (A == null ? void 0 : A.getBoundingClientRect()) ?? S;
    let M = (A == null ? void 0 : A.offsetHeight) ?? 0, U = 300, F = (L == null ? void 0 : L.left) ?? 0, Y = (L == null ? void 0 : L.right) ?? 0;
    const te = (L == null ? void 0 : L.top) ?? 0, K = (R = f == null ? void 0 : f.value) == null ? void 0 : R.querySelector(".v-field__input"), ve = (K == null ? void 0 : K.getBoundingClientRect()) ?? S;
    M = K == null ? void 0 : K.offsetHeight, U = (K == null ? void 0 : K.offsetWidth) ?? 0, F = ve.left, Y = ve.right - ve.width, C = { bottom: "initial", height: M, left: F, right: Y, top: window.scrollY + te, width: r.cardFieldWidth ? U : "auto" }, function() {
      var de, fe, ae;
      let j = Number(C.top) + Number(C.height), ye = "initial", J = Number(r.cardOffsetY) ?? 0;
      const ne = Number(r.cardOffsetX) ?? 0;
      (r.hint || a.messages) && (J += ((de = u.value.VCard) == null ? void 0 : de.verticalOffset) ?? 0), j += J, (fe = r.open) != null && fe.includes("top") && (ye = window.innerHeight - j + Number(C.height) + 2 * J, j = "initial");
      let le = Number(C.left) + ne, X = C.right ?? 0;
      r.cardFieldWidth ? (le = C.left, X = "initial") : (X = "initial", (ae = r.open) != null && ae.includes("right") && (le = "initial", X = Number(C.right) + ne));
      const Q = { bottom: Ee({ value: ye }), display: "block", left: Ee({ value: le }), minWidth: Ee({ value: C.width }), padding: Ee({ value: r.cardPadding }), right: Ee({ value: X }), top: Ee({ value: j }), width: Ee({ value: C.width }) };
      c.value = Q;
    }();
  }
  function m(h) {
    let S = h ?? "";
    if (S.length < 7)
      return $.value = S, void V(S);
    k.value === "hex" && (h.length > 7 && (S = h.substr(0, 7)), S.toString().match(/#[a-zA-Z0-9]{7}/) && (S = h.substr(0, 7))), V(S);
  }
  function V(h, S = !0) {
    S && (g.value = h), $.value = h, o("update:modelValue", h), o("update", h);
  }
  function y(h) {
    k.value = h, $.value = g.value, o("update:mode", h);
  }
  return ba(f, (h) => {
    var A;
    const S = b(p);
    h.target !== S && !((A = S == null ? void 0 : S.$el) != null && A.contains(h.target)) && d.value && w("outside");
  }, { ignore: [p] }), (h, S) => (re(), Wt(be, null, [ol("div", { ref_key: "fieldContainerRef", ref: f, class: "v-color-field" }, [s(Ur, ee({ ref: "textFieldRef" }, h.$attrs, { class: b(I), clearable: b(r).clearable, color: b(r).color, density: b(r).density, hint: b(r).hint, messages: b(r).messages, "model-value": b($), "persistent-hint": b(r).persistentHint, "persistent-placeholder": b(r).persistentPlaceholder, placeholder: b(r).placeholder, readonly: b(P), theme: b(x), variant: b(r).variant, "onClick:clear": S[2] || (S[2] = (A) => w("clear")), "onClick:control": S[3] || (S[3] = (A) => z("textField")), onKeyup: S[4] || (S[4] = da((A) => w("keyup"), ["enter"])), "onUpdate:modelValue": m }), pa({ _: 2 }, [va(b(l), (A, L) => ({ name: L, fn: se((M) => [b(l).prepend || b(l)["prepend-inner"] || b(l)["append-inner"] || b(l).append ? Ne("", !0) : je(h.$slots, L, et(ee({ key: 0 }, { ...M })), void 0, !0)]) })), b(l).prepend ? { name: "prepend", fn: se((A) => [je(h.$slots, "prepend", et(ct({ ...A, toggleColorPicker: w })), void 0, !0)]), key: "0" } : void 0, (b(r).prependIcon || b(r).pipSlot === "prepend" && b(r).pip) && !b(l).prepend ? { name: "prepend", fn: se(() => [b(r).pip ? (re(), me(mt, ee({ key: 0 }, b(_), { onClick: w }), null, 16)) : b(r).prependIcon ? (re(), me(ft, { key: 1, color: b(N), icon: b(r).prependIcon, iconSize: b(r).iconSize, onClick: w }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "1" } : void 0, b(l)["prepend-inner"] ? { name: "prepend-inner", fn: se((A) => [je(h.$slots, "prepend-inner", et(ct({ ...A, toggleColorPicker: w })), void 0, !0)]), key: "2" } : void 0, (b(r).prependInnerIcon || b(r).pipSlot === "prepend-inner" && b(r).pip) && !b(l)["prepend-inner"] ? { name: "prepend-inner", fn: se(() => [b(r).pip ? (re(), me(mt, ee({ key: 0 }, b(_), { onClick: w }), null, 16)) : b(r).prependInnerIcon ? (re(), me(ft, { key: 1, color: b(N), icon: b(r).prependInnerIcon, iconSize: b(r).iconSize, onClick: S[0] || (S[0] = (A) => z("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "3" } : void 0, b(l)["append-inner"] ? { name: "append-inner", fn: se((A) => [je(h.$slots, "append-inner", et(ct({ ...A, toggleColorPicker: w })), void 0, !0)]), key: "4" } : void 0, (b(r).appendInnerIcon || b(r).pipSlot === "append-inner" && b(r).pip) && !b(l)["append-inner"] ? { name: "append-inner", fn: se(() => [b(r).pip ? (re(), me(mt, ee({ key: 0 }, b(_), { onClick: w }), null, 16)) : b(r).appendInnerIcon ? (re(), me(ft, { key: 1, color: b(N), icon: b(r).appendInnerIcon, iconSize: b(r).iconSize, onClick: S[1] || (S[1] = (A) => z("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "5" } : void 0, b(l).append ? { name: "append", fn: se((A) => [je(h.$slots, "append", et(ct({ ...A, toggleColorPicker: w })), void 0, !0)]), key: "6" } : void 0, (b(r).appendIcon || b(r).pipSlot === "append" && b(r).pip) && !b(l).append ? { name: "append", fn: se(() => [b(r).pip ? (re(), me(mt, ee({ key: 0 }, b(_), { onClick: w }), null, 16)) : b(r).appendIcon ? (re(), me(ft, { key: 1, color: b(N), icon: b(r).appendIcon, iconSize: b(r).iconSize, onClick: w }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "7" } : void 0, b(l).label || b(r).label ? { name: "label", fn: se(() => [b(l).label ? je(h.$slots, "label", { key: 0 }, void 0, !0) : b(r).label ? (re(), Wt("div", qr, [fa(ma(b(r).label) + " ", 1), b(r).required ? (re(), Wt("span", Xr, "*")) : Ne("", !0)])) : Ne("", !0)]), key: "8" } : void 0]), 1040, ["class", "clearable", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme", "variant"])], 512), (re(), me(ga, { to: "body" }, [Gr, s(Te, { defaults: b(u) }, { default: se(() => {
    var A;
    return [s(or, { ref_key: "cardRef", ref: p, class: ll(b(B)), style: al(b(c)), theme: ((A = b(u).VCard) == null ? void 0 : A.theme) ?? b(x), width: b(C).width }, { default: se(() => {
      var L, M;
      return [s(Rr, { modelValue: b(g), "onUpdate:modelValue": [S[5] || (S[5] = (U) => Ze(g) ? g.value = U : null), m], class: "v-color-selection", disabled: b(r).readonly || ((L = b(u).VColorPicker) == null ? void 0 : L.disabled), mode: b(k), theme: ((M = b(u).VColorPicker) == null ? void 0 : M.theme) ?? b(x), "onUpdate:mode": y }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 8, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), Kr = ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
})(Yr, [["__scopeId", "data-v-e2745fd7"]]), Xl = Symbol();
function Qr(e = {}) {
  return { install: (t) => {
    t.provide(Xl, e), t.component("VColorField", Kr);
  } };
}
export {
  Kr as VColorField,
  Qr as createVColorField,
  Kr as default,
  Xl as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}.position-elm-helper[data-v-e2745fd7]{background-color:red;border-radius:50%;display:none;height:10px;left:0;position:absolute;top:0;width:10px;z-index:99999999999}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
