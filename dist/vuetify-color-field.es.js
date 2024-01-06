import { Fragment as ye, reactive as en, computed as f, watchEffect as tn, toRefs as nn, capitalize as tl, warn as Kl, ref as j, unref as N, provide as Ke, inject as me, shallowRef as le, defineComponent as wt, camelize as nl, h as _t, getCurrentInstance as Zl, watch as J, onScopeDispose as Jl, effectScope as Ql, toRaw as ea, isRef as Ze, createVNode as s, mergeProps as Z, toRef as G, Text as ta, openBlock as ne, createBlock as ve, withCtx as oe, normalizeClass as na, normalizeStyle as la, Transition as xt, onBeforeMount as ll, nextTick as nt, onBeforeUnmount as Je, withDirectives as be, resolveDirective as rt, vShow as Vt, resolveDynamicComponent as aa, readonly as al, onMounted as It, TransitionGroup as ra, onUnmounted as oa, cloneVNode as ia, useAttrs as sa, useSlots as ua, createElementBlock as Dt, createElementVNode as rl, withKeys as da, createSlots as ca, renderList as pa, renderSlot as je, normalizeProps as et, createCommentVNode as Ne, guardReactiveProps as dt, createTextVNode as va, toDisplayString as fa, Teleport as ma, pushScopeId as ga, popScopeId as ha } from "vue";
import { onClickOutside as ya } from "@vueuse/core";
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
}, Oe = "v-color-field", ba = { fa: { default: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { default: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, ol = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  let r = ((n == null ? void 0 : n.defaultSet) ?? "").toLowerCase();
  r = r === "fa" || r === "fasvg" ? "fa" : r;
  const a = ba[r];
  if (!a)
    throw new Error(`[VColorField]: No VColorField default ${n == null ? void 0 : n.defaultSet} icon set found.`);
  const o = a[l];
  if (!o)
    throw new Error(`[VColorField]: No ${l} icon found.`);
  return o;
}, Bt = typeof window < "u", ln = Bt && "IntersectionObserver" in window, Sn = Bt && "EyeDropper" in window;
function $t(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => $t(e[l], t[l]));
}
function T(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Yt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Cn(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const wn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 }), ka = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Le(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function il(e, t) {
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
function sl(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const ul = /^on[^a-z]/, Sa = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
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
  for (const r in e)
    l[r] = e[r];
  for (const r in t) {
    const a = e[r], o = t[r];
    Yt(a) && Yt(o) ? l[r] = We(a, o, n) : Array.isArray(a) && Array.isArray(o) && n ? l[r] = n(a, o) : l[r] = o;
  }
  return l;
}
function dl(e) {
  return e.map((t) => t.type === ye ? dl(t.children) : t).flat();
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
function cl(e) {
  const t = en({}), n = f(e);
  return tn(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), nn(t);
}
function Kt(e, t) {
  return e.includes(t);
}
Me.cache = /* @__PURE__ */ new Map();
const Xe = () => [Function, Array];
function In(e, t) {
  return !!(e[t = "on" + tl(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
const Ca = ["top", "bottom"], wa = ["start", "end", "left", "right"];
function Bn(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
class Ht {
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
const De = 2.4, $n = 0.2126729, An = 0.7151522, zn = 0.072175, _a = 0.55, xa = 0.58, Va = 0.57, Ia = 0.62, ct = 0.03, Pn = 1.45, Ba = 5e-4, $a = 1.25, Aa = 1.25, Nn = 0.078, En = 12.82051282051282, pt = 0.06, On = 1e-3;
function Ln(e, t) {
  const n = (e.r / 255) ** De, l = (e.g / 255) ** De, r = (e.b / 255) ** De, a = (t.r / 255) ** De, o = (t.g / 255) ** De, i = (t.b / 255) ** De;
  let u, p = n * $n + l * An + r * zn, d = a * $n + o * An + i * zn;
  if (p <= ct && (p += (ct - p) ** Pn), d <= ct && (d += (ct - d) ** Pn), Math.abs(d - p) < Ba)
    return 0;
  if (d > p) {
    const c = (d ** _a - p ** xa) * $a;
    u = c < On ? 0 : c < Nn ? c - c * En * pt : c - pt;
  } else {
    const c = (d ** Ia - p ** Va) * Aa;
    u = c > -On ? 0 : c > -Nn ? c - c * En * pt : c + pt;
  }
  return 100 * u;
}
function Ge(e) {
  Kl(`Vuetify: ${e}`);
}
const za = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Pa = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Wt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Rn = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Na = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => Mn({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => Mn({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => ke({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => ke({ h: e, s: t, v: n, a: l }) };
function Ve(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ge(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Rn.test(e)) {
    const { groups: t } = e.match(Rn), { fn: n, values: l } = t, r = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return Na[n](...r);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Ge(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Ge(`'${e}' is not a valid hex(a) color`), ml(t);
  }
  if (typeof e == "object") {
    if (Le(e, ["r", "g", "b"]))
      return e;
    if (Le(e, ["h", "s", "l"]))
      return ke(an(e));
    if (Le(e, ["h", "s", "v"]))
      return ke(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ke(e) {
  const { h: t, s: n, v: l, a: r } = e, a = (i) => {
    const u = (i + t / 60) % 6;
    return l - l * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, o = [a(5), a(3), a(1)].map((i) => Math.round(255 * i));
  return { r: o[0], g: o[1], b: o[2], a: r };
}
function Mn(e) {
  return ke(an(e));
}
function At(e) {
  if (!e)
    return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.max(t, n, l), a = Math.min(t, n, l);
  let o = 0;
  r !== a && (r === t ? o = 60 * (0 + (n - l) / (r - a)) : r === n ? o = 60 * (2 + (l - t) / (r - a)) : r === l && (o = 60 * (4 + (t - n) / (r - a)))), o < 0 && (o += 360);
  const i = [o, r === 0 ? 0 : (r - a) / r, r];
  return { h: i[0], s: i[1], v: i[2], a: e.a };
}
function pl(e) {
  const { h: t, s: n, v: l, a: r } = e, a = l - l * n / 2;
  return { h: t, s: a === 1 || a === 0 ? 0 : (l - a) / Math.min(a, 1 - a), l: a, a: r };
}
function an(e) {
  const { h: t, s: n, l, a: r } = e, a = l + n * Math.min(l, 1 - l);
  return { h: t, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: r };
}
function vl(e) {
  let { r: t, g: n, b: l, a: r } = e;
  return r === void 0 ? `rgb(${t}, ${n}, ${l})` : `rgba(${t}, ${n}, ${l}, ${r})`;
}
function fl(e) {
  return vl(ke(e));
}
function vt(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function ml(e) {
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
function gl(e) {
  return At(ml(e));
}
function hl(e) {
  return function(t) {
    let { r: n, g: l, b: r, a } = t;
    return `#${[vt(n), vt(l), vt(r), a !== void 0 ? vt(Math.round(255 * a)) : ""].join("")}`;
  }(ke(e));
}
function Tn(e) {
  return function(t) {
    let { r: n, g: l, b: r } = t;
    const a = [0, 0, 0], o = Pa, i = za;
    n = o(n / 255), l = o(l / 255), r = o(r / 255);
    for (let u = 0; u < 3; ++u)
      a[u] = i[u][0] * n + i[u][1] * l + i[u][2] * r;
    return a;
  }(Ve(e))[1];
}
function Ea(e, t) {
  const n = Tn(e), l = Tn(t);
  return (Math.max(n, l) + 0.05) / (Math.min(n, l) + 0.05);
}
function E(e, t) {
  return (n) => Object.keys(e).reduce((l, r) => {
    const a = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : { type: e[r] };
    return l[r] = n && r in n ? { ...a, default: n[r] } : a, t && !l[r].source && (l[r].source = t), l;
  }, {});
}
const X = E({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), bt = Symbol.for("vuetify:defaults");
function rn() {
  const e = me(bt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function zt(e, t) {
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
      const p = Number(o || 1 / 0);
      for (let d = 0; d <= p && u && "prev" in u; d++)
        u = u.prev;
      return u && typeof i == "string" && i in u && (u = We(We(u, { prev: u }), u[i])), u;
    }
    return u.prev ? We(u.prev, u) : u;
  });
  return Ke(bt, r), r;
}
function Oa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rn();
  const l = fe("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = f(() => {
    var i;
    return (i = n.value) == null ? void 0 : i[e._as ?? t];
  }), a = new Proxy(e, { get(i, u) {
    var d, c, m, h;
    const p = Reflect.get(i, u);
    return u === "class" || u === "style" ? [(d = r.value) == null ? void 0 : d[u], p].filter((A) => A != null) : typeof u != "string" || function(A, k) {
      var S, w;
      return ((S = A.props) == null ? void 0 : S[k]) !== void 0 || ((w = A.props) == null ? void 0 : w[Me(k)]) !== void 0;
    }(l.vnode, u) ? p : ((c = r.value) == null ? void 0 : c[u]) ?? ((h = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : h[u]) ?? p;
  } }), o = le();
  return tn(() => {
    if (r.value) {
      const i = Object.entries(r.value).filter((u) => {
        let [p] = u;
        return p.startsWith(p[0].toUpperCase());
      });
      o.value = i.length ? Object.fromEntries(i) : void 0;
    } else
      o.value = void 0;
  }), { props: a, provideSubDefaults: function() {
    const i = function(u) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fe("injectSelf");
      const { provides: d } = p;
      if (d && u in d)
        return d[u];
    }(bt, l);
    Ke(bt, f(() => o.value ? We((i == null ? void 0 : i.value) ?? {}, o.value) : i == null ? void 0 : i.value));
  } };
}
function Se(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ge("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return il(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const r = rn();
      if (!r.value)
        return e._setup(n, l);
      const { props: a, provideSubDefaults: o } = Oa(n, n._as ?? e.name, r), i = e._setup(a, l);
      return o(), i;
    };
  }
  return e;
}
function H() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? Se : wt)(t);
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return H()({ name: n ?? tl(nl(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...X() }, setup(l, r) {
    let { slots: a } = r;
    return () => {
      var o;
      return _t(l.tag, { class: [e, l.class], style: l.style }, (o = a.default) == null ? void 0 : o.call(a));
    };
  } });
}
function fe(e, t) {
  const n = Zl();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function we() {
  const e = fe(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Me((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let yl = 0, yt = /* @__PURE__ */ new WeakMap();
function ot() {
  const e = fe("getUid");
  if (yt.has(e))
    return yt.get(e);
  {
    const t = yl++;
    return yt.set(e, t), t;
  }
}
function W(e) {
  fe("useRender").render = e;
}
ot.reset = () => {
  yl = 0, yt = /* @__PURE__ */ new WeakMap();
};
const La = E({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Zt(e, t) {
  let n;
  function l() {
    n = Ql(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  J(e, (r) => {
    r && !n ? l() : r || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), Jl(() => {
    n == null || n.stop();
  });
}
function Ce(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const a = fe("useProxiedModel"), o = j(e[t] !== void 0 ? e[t] : n), i = Me(t), u = f(i !== t ? () => {
    var d, c, m, h;
    return e[t], !(!((d = a.vnode.props) != null && d.hasOwnProperty(t)) && !((c = a.vnode.props) != null && c.hasOwnProperty(i)) || !((m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)) && !((h = a.vnode.props) != null && h.hasOwnProperty(`onUpdate:${i}`)));
  } : () => {
    var d, c;
    return e[t], !(!((d = a.vnode.props) != null && d.hasOwnProperty(t)) || !((c = a.vnode.props) != null && c.hasOwnProperty(`onUpdate:${t}`)));
  });
  Zt(() => !u.value, () => {
    J(() => e[t], (d) => {
      o.value = d;
    });
  });
  const p = f({ get() {
    const d = e[t];
    return l(u.value ? d : o.value);
  }, set(d) {
    const c = r(d), m = ea(u.value ? e[t] : o.value);
    m !== c && l(m) !== d && (o.value = c, a == null || a.emit(`update:${t}`, c));
  } });
  return Object.defineProperty(p, "externalValue", { get: () => u.value ? e[t] : o.value }), p;
}
const Ra = E({ disabled: Boolean, modelValue: { type: Boolean, default: void 0 }, ...La() }, "VHover"), Ma = H()({ name: "VHover", props: Ra(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = Ce(e, "modelValue"), { runOpenDelay: r, runCloseDelay: a } = function(o, i) {
    const u = {}, p = (d) => () => {
      if (!Bt)
        return Promise.resolve(!0);
      const c = d === "openDelay";
      return u.closeDelay && window.clearTimeout(u.closeDelay), delete u.closeDelay, u.openDelay && window.clearTimeout(u.openDelay), delete u.openDelay, new Promise((m) => {
        const h = parseInt(o[d] ?? 0, 10);
        u[d] = window.setTimeout(() => {
          i == null || i(c), m(c);
        }, h);
      });
    };
    return { runCloseDelay: p("closeDelay"), runOpenDelay: p("openDelay") };
  }(e, (o) => !e.disabled && (l.value = o));
  return () => {
    var o;
    return (o = n.default) == null ? void 0 : o.call(n, { isHovering: l.value, props: { onMouseenter: r, onMouseleave: a } });
  };
} });
function sn(e) {
  return cl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (Wt(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Wt(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
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
    return e.value.text && (Wt(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
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
const ae = [String, Function, Object, Array], Ta = Symbol.for("vuetify:icons"), kt = E({ icon: { type: ae }, tag: { type: String, required: !0 } }, "icon"), Fn = H()({ name: "VComponentIcon", props: kt(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return s(e.tag, null, { default: () => {
      var r;
      return [e.icon ? s(l, null, null) : (r = n.default) == null ? void 0 : r.call(n)];
    } });
  };
} }), Fa = Se({ name: "VSvgIcon", inheritAttrs: !1, props: kt(), setup(e, t) {
  let { attrs: n } = t;
  return () => s(e.tag, Z(n, { style: null }), { default: () => [s("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? s("path", { d: l[0], "fill-opacity": l[1] }, null) : s("path", { d: l }, null)) : s("path", { d: e.icon }, null)])] });
} });
Se({ name: "VLigatureIcon", props: kt(), setup: (e) => () => s(e.tag, null, { default: () => [e.icon] }) }), Se({ name: "VClassIcon", props: kt(), setup: (e) => () => s(e.tag, { class: e.icon }, null) });
const ja = ["x-small", "small", "default", "large", "x-large"], Pt = E({ size: { type: [String, Number], default: "default" } }, "size");
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return cl(() => {
    let n, l;
    return Kt(ja, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: T(e.size), height: T(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const Be = E({ tag: { type: String, default: "div" } }, "tag"), jn = Symbol.for("vuetify:theme"), ge = E({ theme: String }, "theme");
function _e(e) {
  fe("provideTheme");
  const t = me(jn, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), l = f(() => t.themes.value[n.value]), r = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = { ...t, name: n, current: l, themeClasses: r };
  return Ke(jn, a), a;
}
const Da = E({ color: String, start: Boolean, end: Boolean, icon: ae, ...X(), ...Pt(), ...Be({ tag: "i" }), ...ge() }, "VIcon"), Ie = H()({ name: "VIcon", props: Da(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const r = j(), { themeClasses: a } = _e(e), { iconData: o } = ((d) => {
    const c = me(Ta);
    if (!c)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: f(() => {
      var S;
      const m = N(d);
      if (!m)
        return { component: Fn };
      let h = m;
      if (typeof h == "string" && (h = h.trim(), h.startsWith("$") && (h = (S = c.aliases) == null ? void 0 : S[h.slice(1)])), !h)
        throw new Error(`Could not find aliased icon "${m}"`);
      if (Array.isArray(h))
        return { component: Fa, icon: h };
      if (typeof h != "string")
        return { component: Fn, icon: h };
      const A = Object.keys(c.sets).find((w) => typeof h == "string" && h.startsWith(`${w}:`)), k = A ? h.slice(A.length + 1) : h;
      return { component: c.sets[A ?? c.defaultSet].component, icon: k };
    }) };
  })(f(() => r.value || e.icon)), { sizeClasses: i } = Nt(e), { textColorClasses: u, textColorStyles: p } = Fe(G(e, "color"));
  return W(() => {
    var c, m;
    const d = (c = l.default) == null ? void 0 : c.call(l);
    return d && (r.value = (m = dl(d).filter((h) => h.type === ta && h.children && typeof h.children == "string")[0]) == null ? void 0 : m.children), s(o.value.component, { tag: e.tag, icon: o.value.icon, class: ["v-icon", "notranslate", a.value, i.value, u.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [i.value ? void 0 : { fontSize: T(e.size), height: T(e.size), width: T(e.size) }, p.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [d] });
  }), {};
} }), ft = wt({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, r = me(Symbol.for("vuetify:icons")), a = f(() => ol({ icon: l.icon !== "default" ? l.icon : "", iconOptions: r, name: "default" }));
  function o() {
    n("click");
  }
  return (i, u) => (ne(), ve(Ma, null, { default: oe(({ isHovering: p, props: d }) => [s(Ie, Z(d, { color: p ? i.color : void 0, icon: N(a), size: i.iconSize, onClick: o }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), mt = wt({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, { modelValue: r } = nn(l), a = f(() => ({ [`${Oe}--pip`]: !0 })), o = f(() => ((d) => {
    const { pipBorder: c, pipBorderRadius: m } = d, h = { backgroundColor: c && c !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return c && c !== "none" && (h.border = c, h.borderRadius = m), h;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), i = me(Symbol.for("vuetify:icons")), u = f(() => ol({ icon: l.pipIcon !== "pip" ? l.pipIcon : "", iconOptions: i, name: "pip" }));
  function p() {
    n("click");
  }
  return (d, c) => (ne(), ve(Ie, { class: na(N(a)), color: N(r) || "--v-theme-on-surface", icon: N(u), size: d.pipSize, style: la(N(o)), tag: "div", onClick: p }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), Ha = H()({ name: "VCardActions", props: X(), setup(e, t) {
  let { slots: n } = t;
  return zt({ VBtn: { slim: !0, variant: "text" } }), W(() => {
    var l;
    return s("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Wa = on("v-card-subtitle"), Ua = on("v-card-title"), Et = E({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Ot(e) {
  return { dimensionStyles: f(() => ({ height: T(e.height), maxHeight: T(e.maxHeight), maxWidth: T(e.maxWidth), minHeight: T(e.minHeight), minWidth: T(e.minWidth), width: T(e.width) })) };
}
const bl = E({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...X(), ...Et() }, "VResponsive"), Dn = H()({ name: "VResponsive", props: bl(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: f(() => {
      const o = Number(a.aspectRatio);
      return o ? { paddingBottom: String(1 / o * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: r } = Ot(e);
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
const kl = { mounted: function(e, t) {
  if (!ln)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: r, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, o = new IntersectionObserver(function() {
    var c;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const p = (c = e._observe) == null ? void 0 : c[t.instance.$.uid];
    if (!p)
      return;
    const d = i.some((m) => m.isIntersecting);
    !r || n.quiet && !p.init || n.once && !d && !p.init || r(d, i, u), d && n.once ? Hn(e, t) : p.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: o }, o.observe(e);
}, unmounted: Hn }, qa = E({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...bl(), ...X(), ...un() }, "VImg"), Sl = H()({ name: "VImg", directives: { intersect: kl }, props: qa(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const r = fe("VImg"), a = le(""), o = j(), i = le(e.eager ? "loading" : "idle"), u = le(), p = le(), d = f(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), c = f(() => d.value.aspect || u.value / p.value || 0);
  function m(g) {
    if ((!e.eager || !g) && (!ln || g || e.eager)) {
      if (i.value = "loading", d.value.lazySrc) {
        const I = new Image();
        I.src = d.value.lazySrc, w(I, null);
      }
      d.value.src && nt(() => {
        var I;
        n("loadstart", ((I = o.value) == null ? void 0 : I.currentSrc) || d.value.src), setTimeout(() => {
          var b;
          if (!r.isUnmounted)
            if ((b = o.value) != null && b.complete) {
              if (o.value.naturalWidth || A(), i.value === "error")
                return;
              c.value || w(o.value, null), i.value === "loading" && h();
            } else
              c.value || w(o.value), k();
        });
      });
    }
  }
  function h() {
    var g;
    r.isUnmounted || (k(), w(o.value), i.value = "loaded", n("load", ((g = o.value) == null ? void 0 : g.currentSrc) || d.value.src));
  }
  function A() {
    var g;
    r.isUnmounted || (i.value = "error", n("error", ((g = o.value) == null ? void 0 : g.currentSrc) || d.value.src));
  }
  function k() {
    const g = o.value;
    g && (a.value = g.currentSrc || g.src);
  }
  J(() => e.src, () => {
    m(i.value !== "idle");
  }), J(c, (g, I) => {
    !g && I && o.value && w(o.value);
  }), ll(() => m());
  let S = -1;
  function w(g) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const b = () => {
      if (clearTimeout(S), r.isUnmounted)
        return;
      const { naturalHeight: v, naturalWidth: y } = g;
      v || y ? (u.value = y, p.value = v) : g.complete || i.value !== "loading" || I == null ? (g.currentSrc.endsWith(".svg") || g.currentSrc.startsWith("data:image/svg+xml")) && (u.value = 1, p.value = 1) : S = window.setTimeout(b, I);
    };
    b();
  }
  Je(() => {
    clearTimeout(S);
  });
  const _ = f(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), x = () => {
    var b;
    if (!d.value.src || i.value === "idle")
      return null;
    const g = s("img", { class: ["v-img__img", _.value], style: { objectPosition: e.position }, src: d.value.src, srcset: d.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: o, onLoad: h, onError: A }, null), I = (b = l.sources) == null ? void 0 : b.call(l);
    return s(Ue, { transition: e.transition, appear: !0 }, { default: () => [be(I ? s("picture", { class: "v-img__picture" }, [I, g]) : g, [[Vt, i.value === "loaded"]])] });
  }, z = () => s(Ue, { transition: e.transition }, { default: () => [d.value.lazySrc && i.value !== "loaded" && s("img", { class: ["v-img__img", "v-img__img--preload", _.value], style: { objectPosition: e.position }, src: d.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), P = () => l.placeholder ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [(i.value === "loading" || i.value === "error" && !l.error) && s("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, V = () => l.error ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [i.value === "error" && s("div", { class: "v-img__error" }, [l.error()])] }) : null, B = () => e.gradient ? s("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, $ = le(!1);
  {
    const g = J(c, (I) => {
      I && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          $.value = !0;
        });
      }), g());
    });
  }
  return W(() => {
    const g = Dn.filterProps(e);
    return be(s(Dn, Z({ class: ["v-img", { "v-img--booting": !$.value }, e.class], style: [{ width: T(e.width === "auto" ? u.value : e.width) }, e.style] }, g, { aspectRatio: c.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => s(ye, null, [s(x, null, null), s(z, null, null), s(B, null, null), s(P, null, null), s(V, null, null)]), default: l.default }), [[rt("intersect"), { handler: m, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: o, state: i, naturalWidth: u, naturalHeight: p };
} }), Xa = [null, "default", "comfortable", "compact"], Qe = E({ density: { type: String, default: "default", validator: (e) => Xa.includes(e) } }, "density");
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
const Ga = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function dn(e, t) {
  return s(ye, null, [e && s("span", { key: "overlay", class: `${t}__overlay` }, null), s("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const Lt = E({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ga.includes(e) } }, "variant");
function cn(e) {
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
const Ya = E({ start: Boolean, end: Boolean, icon: ae, image: String, text: String, ...X(), ...Qe(), ...$e(), ...Pt(), ...Be(), ...ge(), ...Lt({ variant: "flat" }) }, "VAvatar"), Wn = H()({ name: "VAvatar", props: Ya(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { colorClasses: r, colorStyles: a, variantClasses: o } = cn(e), { densityClasses: i } = it(e), { roundedClasses: u } = Ae(e), { sizeClasses: p, sizeStyles: d } = Nt(e);
  return W(() => s(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, r.value, i.value, u.value, p.value, o.value, e.class], style: [a.value, d.value, e.style] }, { default: () => {
    var c;
    return [e.image ? s(Sl, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? s(Ie, { key: "icon", icon: e.icon }, null) : ((c = n.default) == null ? void 0 : c.call(n)) ?? e.text, dn(!1, "v-avatar")];
  } })), {};
} }), Ka = E({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Te = H(!1)({ name: "VDefaultsProvider", props: Ka(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: r, reset: a, root: o, scoped: i } = nn(e);
  return zt(l, { reset: a, root: o, scoped: i, disabled: r }), () => {
    var u;
    return (u = n.default) == null ? void 0 : u.call(n);
  };
} }), Za = E({ appendAvatar: String, appendIcon: ae, prependAvatar: String, prependIcon: ae, subtitle: [String, Number], title: [String, Number], ...X(), ...Qe() }, "VCardItem"), Ja = H()({ name: "VCardItem", props: Za(), setup(e, t) {
  let { slots: n } = t;
  return W(() => {
    var p;
    const l = !(!e.prependAvatar && !e.prependIcon), r = !(!l && !n.prepend), a = !(!e.appendAvatar && !e.appendIcon), o = !(!a && !n.append), i = !(e.title == null && !n.title), u = !(e.subtitle == null && !n.subtitle);
    return s("div", { class: ["v-card-item", e.class], style: e.style }, [r && s("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? s(Te, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && s(Wn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), s("div", { class: "v-card-item__content" }, [i && s(Ua, { key: "title" }, { default: () => {
      var d;
      return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
    } }), u && s(Wa, { key: "subtitle" }, { default: () => {
      var d;
      return [((d = n.subtitle) == null ? void 0 : d.call(n)) ?? e.subtitle];
    } }), (p = n.default) == null ? void 0 : p.call(n)]), o && s("div", { key: "append", class: "v-card-item__append" }, [n.append ? s(Te, { key: "append-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : a && s(Wn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), Qa = on("v-card-text"), Rt = E({ border: [Boolean, Number, String] }, "border");
function Mt(e) {
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
function Cl(e, t) {
  const n = j(), l = le(!1);
  if (ln) {
    const r = new IntersectionObserver((a) => {
      e == null || e(a, r), l.value = !!a.find((o) => o.isIntersecting);
    }, t);
    Je(() => {
      r.disconnect();
    }), J(n, (a, o) => {
      o && (r.unobserve(o), l.value = !1), a && r.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const wl = Symbol.for("vuetify:locale");
function ze() {
  const e = me(wl);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Un = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Tt = E({ location: String }, "location");
function Ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = ze();
  return { locationStyles: f(() => {
    if (!e.location)
      return {};
    const { side: a, align: o } = function(p, d) {
      let [c, m] = p.split(" ");
      return m || (m = Kt(Ca, c) ? "start" : Kt(wa, c) ? "top" : "center"), { side: Bn(c, d), align: Bn(m, d) };
    }(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function i(p) {
      return n ? n(p) : 0;
    }
    const u = {};
    return a !== "center" && (t ? u[Un[a]] = `calc(100% - ${i(a)}px)` : u[a] = 0), o !== "center" ? t ? u[Un[o]] = `calc(100% - ${i(o)}px)` : u[o] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), u;
  }) };
}
const er = E({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...X(), ...Tt({ location: "top" }), ...$e(), ...Be(), ...ge() }, "VProgressLinear"), tr = H()({ name: "VProgressLinear", props: er(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = Ce(e, "modelValue"), { isRtl: r, rtlClasses: a } = ze(), { themeClasses: o } = _e(e), { locationStyles: i } = Ft(e), { textColorClasses: u, textColorStyles: p } = Fe(e, "color"), { backgroundColorClasses: d, backgroundColorStyles: c } = Ye(f(() => e.bgColor || e.color)), { backgroundColorClasses: m, backgroundColorStyles: h } = Ye(e, "color"), { roundedClasses: A } = Ae(e), { intersectionRef: k, isIntersecting: S } = Cl(), w = f(() => parseInt(e.max, 10)), _ = f(() => parseInt(e.height, 10)), x = f(() => parseFloat(e.bufferValue) / w.value * 100), z = f(() => parseFloat(l.value) / w.value * 100), P = f(() => r.value !== e.reverse), V = f(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), B = f(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function $(g) {
    if (!k.value)
      return;
    const { left: I, right: b, width: v } = k.value.getBoundingClientRect(), y = P.value ? v - g.clientX + (b - v) : g.clientX - I;
    l.value = Math.round(y / v * w.value);
  }
  return W(() => s(e.tag, { ref: k, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && S.value, "v-progress-linear--reverse": P.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, A.value, o.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? T(_.value) : 0, "--v-progress-linear-height": T(_.value), ...i.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : z.value, onClick: e.clickable && $ }, { default: () => [e.stream && s("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...p.value, [P.value ? "left" : "right"]: T(-_.value), borderTop: `${T(_.value / 2)} dotted`, opacity: B.value, top: `calc(50% - ${T(_.value / 4)})`, width: T(100 - x.value, "%"), "--v-progress-linear-stream-to": T(_.value * (P.value ? 1 : -1)) } }, null), s("div", { class: ["v-progress-linear__background", d.value], style: [c.value, { opacity: B.value, width: T(e.stream ? x.value : 100, "%") }] }, null), s(xt, { name: V.value }, { default: () => [e.indeterminate ? s("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((g) => s("div", { key: g, class: ["v-progress-linear__indeterminate", g, m.value], style: h.value }, null))]) : s("div", { class: ["v-progress-linear__determinate", m.value], style: [h.value, { width: T(z.value, "%") }] }, null)] }), n.default && s("div", { class: "v-progress-linear__content" }, [n.default({ value: z.value, buffer: x.value })])] })), {};
} }), pn = E({ loading: [Boolean, String] }, "loader");
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { loaderClasses: f(() => ({ [`${t}--loading`]: e.loading })) };
}
function _l(e, t) {
  var l;
  let { slots: n } = t;
  return s("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || s(tr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const nr = ["static", "relative", "fixed", "absolute", "sticky"], fn = E({ position: { type: String, validator: (e) => nr.includes(e) } }, "position");
function mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { positionClasses: f(() => e.position ? `${t}--${e.position}` : void 0) };
}
function xl(e, t) {
  const n = aa("RouterLink"), l = f(() => !(!e.href && !e.to)), r = f(() => (l == null ? void 0 : l.value) || In(t, "click") || In(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: r, href: G(e, "href") };
  const a = e.to ? n.useLink(e) : void 0, o = function() {
    const i = fe("useRoute");
    return f(() => {
      var u;
      return (u = i == null ? void 0 : i.proxy) == null ? void 0 : u.$route;
    });
  }();
  return { isLink: l, isClickable: r, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && f(() => {
    var i, u, p;
    return e.exact ? o.value ? ((i = a.isExactActive) == null ? void 0 : i.value) && $t(a.route.value.query, o.value.query) : (u = a.isExactActive) == null ? void 0 : u.value : (p = a.isActive) == null ? void 0 : p.value;
  }), href: f(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const Vl = E({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router"), Jt = Symbol("rippleStop"), lr = 80;
function qn(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Qt(e) {
  return e.constructor.name === "TouchEvent";
}
function Il(e) {
  return e.constructor.name === "KeyboardEvent";
}
const St = { show(e, t) {
  var h;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((h = t == null ? void 0 : t._ripple) != null && h.enabled))
    return;
  const l = document.createElement("span"), r = document.createElement("span");
  l.appendChild(r), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: a, scale: o, x: i, y: u, centerX: p, centerY: d } = function(A, k) {
    var B;
    let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, w = 0, _ = 0;
    if (!Il(A)) {
      const $ = k.getBoundingClientRect(), g = Qt(A) ? A.touches[A.touches.length - 1] : A;
      w = g.clientX - $.left, _ = g.clientY - $.top;
    }
    let x = 0, z = 0.3;
    (B = k._ripple) != null && B.circle ? (z = 0.15, x = k.clientWidth / 2, x = S.center ? x : x + Math.sqrt((w - x) ** 2 + (_ - x) ** 2) / 4) : x = Math.sqrt(k.clientWidth ** 2 + k.clientHeight ** 2) / 2;
    const P = (k.clientWidth - 2 * x) / 2 + "px", V = (k.clientHeight - 2 * x) / 2 + "px";
    return { radius: x, scale: z, x: S.center ? P : w - x + "px", y: S.center ? V : _ - x + "px", centerX: P, centerY: V };
  }(e, t, n), c = 2 * a + "px";
  r.className = "v-ripple__animation", r.style.width = c, r.style.height = c, t.appendChild(l);
  const m = window.getComputedStyle(t);
  m && m.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), qn(r, `translate(${i}, ${u}) scale3d(${o},${o},${o})`), r.dataset.activated = String(performance.now()), setTimeout(() => {
    r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), qn(r, `translate(${p}, ${d}) scale3d(1,1,1)`);
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
function Bl(e) {
  return e === void 0 || !!e;
}
function lt(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[Jt]) {
    if (e[Jt] = !0, Qt(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Il(e), n._ripple.class && (t.class = n._ripple.class), Qt(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        St.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, lr);
    } else
      St.show(e, n, t);
  }
}
function Xn(e) {
  e[Jt] = !0;
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
function $l(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let at = !1;
function Al(e) {
  at || e.keyCode !== wn.enter && e.keyCode !== wn.space || (at = !0, lt(e));
}
function zl(e) {
  at = !1, se(e);
}
function Pl(e) {
  at && (at = !1, se(e));
}
function Gn(e, t, n) {
  const { value: l, modifiers: r } = t, a = Bl(l);
  if (a || St.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = r.center, e._ripple.circle = r.circle, Yt(l) && l.class && (e._ripple.class = l.class), a && !n) {
    if (r.stop)
      return e.addEventListener("touchstart", Xn, { passive: !0 }), void e.addEventListener("mousedown", Xn);
    e.addEventListener("touchstart", lt, { passive: !0 }), e.addEventListener("touchend", se, { passive: !0 }), e.addEventListener("touchmove", $l, { passive: !0 }), e.addEventListener("touchcancel", se), e.addEventListener("mousedown", lt), e.addEventListener("mouseup", se), e.addEventListener("mouseleave", se), e.addEventListener("keydown", Al), e.addEventListener("keyup", zl), e.addEventListener("blur", Pl), e.addEventListener("dragstart", se, { passive: !0 });
  } else
    !a && n && Nl(e);
}
function Nl(e) {
  e.removeEventListener("mousedown", lt), e.removeEventListener("touchstart", lt), e.removeEventListener("touchend", se), e.removeEventListener("touchmove", $l), e.removeEventListener("touchcancel", se), e.removeEventListener("mouseup", se), e.removeEventListener("mouseleave", se), e.removeEventListener("keydown", Al), e.removeEventListener("keyup", zl), e.removeEventListener("dragstart", se), e.removeEventListener("blur", Pl);
}
const gn = { mounted: function(e, t) {
  Gn(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, Nl(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Gn(e, t, Bl(t.oldValue));
} }, ar = E({ appendAvatar: String, appendIcon: ae, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ae, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...Rt(), ...X(), ...Qe(), ...Et(), ...st(), ...pn(), ...Tt(), ...fn(), ...$e(), ...Vl(), ...Be(), ...ge(), ...Lt({ variant: "elevated" }) }, "VCard"), rr = H()({ name: "VCard", directives: { Ripple: gn }, props: ar(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = _e(e), { borderClasses: a } = Mt(e), { colorClasses: o, colorStyles: i, variantClasses: u } = cn(e), { densityClasses: p } = it(e), { dimensionStyles: d } = Ot(e), { elevationClasses: c } = ut(e), { loaderClasses: m } = vn(e), { locationStyles: h } = Ft(e), { positionClasses: A } = mn(e), { roundedClasses: k } = Ae(e), S = xl(e, n), w = f(() => e.link !== !1 && S.isLink.value), _ = f(() => !e.disabled && e.link !== !1 && (e.link || S.isClickable.value));
  return W(() => {
    const x = w.value ? "a" : e.tag, z = !(!l.title && e.title == null), P = !(!l.subtitle && e.subtitle == null), V = z || P, B = !!(l.append || e.appendAvatar || e.appendIcon), $ = !!(l.prepend || e.prependAvatar || e.prependIcon), g = !(!l.image && !e.image), I = V || $ || B, b = !(!l.text && e.text == null);
    return be(s(x, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": _.value }, r.value, a.value, o.value, p.value, c.value, m.value, A.value, k.value, u.value, e.class], style: [i.value, d.value, h.value, e.style], href: S.href.value, onClick: _.value && S.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var v;
      return [g && s("div", { key: "image", class: "v-card__image" }, [l.image ? s(Te, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : s(Sl, { key: "image-img", cover: !0, src: e.image }, null)]), s(_l, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), I && s(Ja, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), b && s(Qa, { key: "text" }, { default: () => {
        var y;
        return [((y = l.text) == null ? void 0 : y.call(l)) ?? e.text];
      } }), (v = l.default) == null ? void 0 : v.call(l), l.actions && s(Ha, null, { default: l.actions }), dn(_.value, "v-card")];
    } }), [[rt("ripple"), _.value && e.ripple]]);
  }), {};
} });
function El(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = j(), l = j();
  if (Bt) {
    const r = new ResizeObserver((a) => {
      e == null || e(a, r), a.length && (l.value = t === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    Je(() => {
      r.disconnect();
    }), J(n, (a, o) => {
      o && (r.unobserve(Cn(o)), l.value = void 0), a && r.observe(Cn(a));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: al(l) };
}
const or = Se({ name: "VColorPickerCanvas", props: E({ color: { type: Object }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...X() }, "VColorPickerCanvas")(), emits: { "update:color": (e) => !0, "update:position": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = le(!1), r = j(), a = le(parseFloat(e.width)), o = le(parseFloat(e.height)), i = j({ x: 0, y: 0 }), u = f({ get: () => i.value, set(k) {
    var _, x;
    if (!r.value)
      return;
    const { x: S, y: w } = k;
    i.value = k, n("update:color", { h: ((_ = e.color) == null ? void 0 : _.h) ?? 0, s: He(S, 0, a.value) / a.value, v: 1 - He(w, 0, o.value) / o.value, a: ((x = e.color) == null ? void 0 : x.a) ?? 1 });
  } }), p = f(() => {
    const { x: k, y: S } = u.value, w = parseInt(e.dotSize, 10) / 2;
    return { width: T(e.dotSize), height: T(e.dotSize), transform: `translate(${T(k - w)}, ${T(S - w)})` };
  }), { resizeRef: d } = El((k) => {
    var _;
    if (!((_ = d.value) != null && _.offsetParent))
      return;
    const { width: S, height: w } = k[0].contentRect;
    a.value = S, o.value = w;
  });
  function c(k) {
    k.type === "mousedown" && k.preventDefault(), e.disabled || (m(k), window.addEventListener("mousemove", m), window.addEventListener("mouseup", h), window.addEventListener("touchmove", m), window.addEventListener("touchend", h));
  }
  function m(k) {
    if (e.disabled || !r.value)
      return;
    l.value = !0;
    const S = function(w) {
      return "touches" in w ? { clientX: w.touches[0].clientX, clientY: w.touches[0].clientY } : { clientX: w.clientX, clientY: w.clientY };
    }(k);
    (function(w, _, x) {
      const { left: z, top: P, width: V, height: B } = x;
      u.value = { x: He(w - z, 0, V), y: He(_ - P, 0, B) };
    })(S.clientX, S.clientY, r.value.getBoundingClientRect());
  }
  function h() {
    window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", h), window.removeEventListener("touchmove", m), window.removeEventListener("touchend", h);
  }
  function A() {
    var x;
    if (!r.value)
      return;
    const k = r.value, S = k.getContext("2d");
    if (!S)
      return;
    const w = S.createLinearGradient(0, 0, k.width, 0);
    w.addColorStop(0, "hsla(0, 0%, 100%, 1)"), w.addColorStop(1, `hsla(${((x = e.color) == null ? void 0 : x.h) ?? 0}, 100%, 50%, 1)`), S.fillStyle = w, S.fillRect(0, 0, k.width, k.height);
    const _ = S.createLinearGradient(0, 0, 0, k.height);
    _.addColorStop(0, "hsla(0, 0%, 100%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), S.fillStyle = _, S.fillRect(0, 0, k.width, k.height);
  }
  return J(() => {
    var k;
    return (k = e.color) == null ? void 0 : k.h;
  }, A, { immediate: !0 }), J(() => [a.value, o.value], (k, S) => {
    A(), i.value = { x: u.value.x * k[0] / S[0], y: u.value.y * k[1] / S[1] };
  }, { flush: "post" }), J(() => e.color, () => {
    l.value ? l.value = !1 : i.value = e.color ? { x: e.color.s * a.value, y: (1 - e.color.v) * o.value } : { x: 0, y: 0 };
  }, { deep: !0, immediate: !0 }), It(() => A()), W(() => s("div", { ref: d, class: ["v-color-picker-canvas", e.class], style: e.style, onMousedown: c, onTouchstartPassive: c }, [s("canvas", { ref: r, width: a.value, height: o.value }, null), e.color && s("div", { class: ["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }], style: p.value }, null)])), {};
} }), Ol = E({ divided: Boolean, ...Rt(), ...X(), ...Qe(), ...st(), ...$e(), ...Be(), ...ge(), ...Lt() }, "VBtnGroup"), Yn = H()({ name: "VBtnGroup", props: Ol(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { densityClasses: r } = it(e), { borderClasses: a } = Mt(e), { elevationClasses: o } = ut(e), { roundedClasses: i } = Ae(e);
  zt({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), W(() => s(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, r.value, o.value, i.value, e.class], style: e.style }, n));
} }), ir = E({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), sr = E({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ur(e, t) {
  let n = !1;
  const l = en([]), r = Ce(e, "modelValue", [], (p) => p == null ? [] : Kn(l, tt(p)), (p) => {
    const d = function(c, m) {
      const h = [];
      return m.forEach((A) => {
        const k = c.findIndex((S) => S.id === A);
        if (~k) {
          const S = c[k];
          h.push(S.value != null ? S.value : k);
        }
      }), h;
    }(l, p);
    return e.multiple ? d : d[0];
  }), a = fe("useGroup");
  function o() {
    const p = l.find((d) => !d.disabled);
    p && e.mandatory === "force" && !r.value.length && (r.value = [p.id]);
  }
  function i(p) {
    if (e.multiple && Ge('This method is not supported when using "multiple" prop'), r.value.length) {
      const d = r.value[0], c = l.findIndex((A) => A.id === d);
      let m = (c + p) % l.length, h = l[m];
      for (; h.disabled && m !== c; )
        m = (m + p) % l.length, h = l[m];
      if (h.disabled)
        return;
      r.value = [l[m].id];
    } else {
      const d = l.find((c) => !c.disabled);
      d && (r.value = [d.id]);
    }
  }
  It(() => {
    o();
  }), Je(() => {
    n = !0;
  });
  const u = { register: function(p, d) {
    const c = p, m = ht(Symbol.for(`${t.description}:id`), a == null ? void 0 : a.vnode).indexOf(d);
    m > -1 ? l.splice(m, 0, c) : l.push(c);
  }, unregister: function(p) {
    if (n)
      return;
    o();
    const d = l.findIndex((c) => c.id === p);
    l.splice(d, 1);
  }, selected: r, select: function(p, d) {
    const c = l.find((m) => m.id === p);
    if (!d || !(c != null && c.disabled))
      if (e.multiple) {
        const m = r.value.slice(), h = m.findIndex((k) => k === p), A = ~h;
        if (d = d ?? !A, A && e.mandatory && m.length <= 1 || !A && e.max != null && m.length + 1 > e.max)
          return;
        h < 0 && d ? m.push(p) : h >= 0 && !d && m.splice(h, 1), r.value = m;
      } else {
        const m = r.value.includes(p);
        if (e.mandatory && m)
          return;
        r.value = d ?? !m ? [p] : [];
      }
  }, disabled: G(e, "disabled"), prev: () => i(l.length - 1), next: () => i(1), isSelected: (p) => r.value.includes(p), selectedClass: f(() => e.selectedClass), items: f(() => l), getItemIndex: (p) => function(d, c) {
    const m = Kn(d, [c]);
    return m.length ? d.findIndex((h) => h.id === m[0]) : -1;
  }(l, p) };
  return Ke(t, u), u;
}
function Kn(e, t) {
  const n = [];
  return t.forEach((l) => {
    const r = e.find((o) => $t(l, o.value)), a = e[l];
    (r == null ? void 0 : r.value) != null ? n.push(r.id) : a != null && n.push(a.id);
  }), n;
}
const Ll = Symbol.for("vuetify:v-btn-toggle"), dr = E({ ...Ol(), ...ir() }, "VBtnToggle");
H()({ name: "VBtnToggle", props: dr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: r, prev: a, select: o, selected: i } = ur(e, Ll);
  return W(() => {
    const u = Yn.filterProps(e);
    return s(Yn, Z({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var p;
      return [(p = n.default) == null ? void 0 : p.call(n, { isSelected: l, next: r, prev: a, select: o, selected: i })];
    } });
  }), { next: r, prev: a, select: o };
} });
const cr = E({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...X(), ...Pt(), ...Be({ tag: "div" }), ...ge() }, "VProgressCircular"), pr = H()({ name: "VProgressCircular", props: cr(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, r = j(), { themeClasses: a } = _e(e), { sizeClasses: o, sizeStyles: i } = Nt(e), { textColorClasses: u, textColorStyles: p } = Fe(G(e, "color")), { textColorClasses: d, textColorStyles: c } = Fe(G(e, "bgColor")), { intersectionRef: m, isIntersecting: h } = Cl(), { resizeRef: A, contentRect: k } = El(), S = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), w = f(() => Number(e.width)), _ = f(() => i.value ? Number(e.size) : k.value ? k.value.width : Math.max(w.value, 32)), x = f(() => 20 / (1 - w.value / _.value) * 2), z = f(() => w.value / _.value * x.value), P = f(() => T((100 - S.value) / 100 * l));
  return tn(() => {
    m.value = r.value, A.value = r.value;
  }), W(() => s(e.tag, { ref: r, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": h.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, o.value, u.value, e.class], style: [i.value, p.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : S.value }, { default: () => [s("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${x.value} ${x.value}` }, [s("circle", { class: ["v-progress-circular__underlay", d.value], style: c.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": z.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), s("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": z.value, "stroke-dasharray": l, "stroke-dashoffset": P.value }, null)]), n.default && s("div", { class: "v-progress-circular__content" }, [n.default({ value: S.value })])] })), {};
} }), vr = E({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Ll }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ae, appendIcon: ae, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Rt(), ...X(), ...Qe(), ...Et(), ...st(), ...sr(), ...pn(), ...Tt(), ...fn(), ...$e(), ...Vl(), ...Pt(), ...Be({ tag: "button" }), ...ge(), ...Lt({ variant: "elevated" }) }, "VBtn"), Rl = H()({ name: "VBtn", directives: { Ripple: gn }, props: vr(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = _e(e), { borderClasses: a } = Mt(e), { colorClasses: o, colorStyles: i, variantClasses: u } = cn(e), { densityClasses: p } = it(e), { dimensionStyles: d } = Ot(e), { elevationClasses: c } = ut(e), { loaderClasses: m } = vn(e), { locationStyles: h } = Ft(e), { positionClasses: A } = mn(e), { roundedClasses: k } = Ae(e), { sizeClasses: S, sizeStyles: w } = Nt(e), _ = function(g, I) {
    let b = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    const v = fe("useGroupItem");
    if (!v)
      throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const y = ot();
    Ke(Symbol.for(`${I.description}:id`), y);
    const C = me(I, null);
    if (!C) {
      if (!b)
        return C;
      throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${I.description}`);
    }
    const O = G(g, "value"), M = f(() => !(!C.disabled.value && !g.disabled));
    C.register({ id: y, value: O, disabled: M }, v), Je(() => {
      C.unregister(y);
    });
    const R = f(() => C.isSelected(y)), q = f(() => R.value && [C.selectedClass.value, g.selectedClass]);
    return J(R, (F) => {
      v.emit("group:selected", { value: F });
    }), { id: y, isSelected: R, toggle: () => C.select(y, !R.value), select: (F) => C.select(y, F), selectedClass: q, value: O, disabled: M, group: C };
  }(e, e.symbol, !1), x = xl(e, n), z = f(() => {
    var g;
    return e.active !== void 0 ? e.active : x.isLink.value ? (g = x.isActive) == null ? void 0 : g.value : _ == null ? void 0 : _.isSelected.value;
  }), P = f(() => (_ == null ? void 0 : _.disabled.value) || e.disabled), V = f(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), B = f(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function $(g) {
    var I;
    P.value || x.isLink.value && (g.metaKey || g.ctrlKey || g.shiftKey || g.button !== 0 || n.target === "_blank") || ((I = x.navigate) == null || I.call(x, g), _ == null || _.toggle());
  }
  return function(g, I) {
    J(() => {
      var b;
      return (b = g.isActive) == null ? void 0 : b.value;
    }, (b) => {
      g.isLink.value && b && I && nt(() => {
        I(!0);
      });
    }, { immediate: !0 });
  }(x, _ == null ? void 0 : _.select), W(() => {
    var C, O;
    const g = x.isLink.value ? "a" : e.tag, I = !(!e.prependIcon && !l.prepend), b = !(!e.appendIcon && !l.append), v = !(!e.icon || e.icon === !0), y = (_ == null ? void 0 : _.isSelected.value) && (!x.isLink.value || ((C = x.isActive) == null ? void 0 : C.value)) || !_ || ((O = x.isActive) == null ? void 0 : O.value);
    return be(s(g, { type: g === "a" ? void 0 : "button", class: ["v-btn", _ == null ? void 0 : _.selectedClass.value, { "v-btn--active": z.value, "v-btn--block": e.block, "v-btn--disabled": P.value, "v-btn--elevated": V.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, r.value, a.value, y ? o.value : void 0, p.value, c.value, m.value, A.value, k.value, S.value, u.value, e.class], style: [y ? i.value : void 0, d.value, h.value, w.value, e.style], disabled: P.value || void 0, href: x.href.value, onClick: $, value: B.value }, { default: () => {
      var M;
      return [dn(!0, "v-btn"), !e.icon && I && s("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? s(Te, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : s(Ie, { key: "prepend-icon", icon: e.prependIcon }, null)]), s("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && v ? s(Ie, { key: "content-icon", icon: e.icon }, null) : s(Te, { key: "content-defaults", disabled: !v, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var R;
        return [((R = l.default) == null ? void 0 : R.call(l)) ?? e.text];
      } })]), !e.icon && b && s("span", { key: "append", class: "v-btn__append" }, [l.append ? s(Te, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : s(Ie, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && s("span", { key: "loader", class: "v-btn__loader" }, [((M = l.loader) == null ? void 0 : M.call(l)) ?? s(pr, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[rt("ripple"), !P.value && e.ripple, null]]);
  }), {};
} }), qe = { h: 0, s: 0, v: 1, a: 1 }, Ut = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }) }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }) }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: ke, from: At }, qt = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }) }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.s) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }) }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.l) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: pl, from: an }, Zn = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t }], to: hl, from: gl };
var el;
const Re = { rgb: { ...Ut, inputs: (el = Ut.inputs) == null ? void 0 : el.slice(0, 3) }, rgba: Ut, hsl: { ...qt, inputs: qt.inputs.slice(0, 3) }, hsla: qt, hex: { ...Zn, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t }] }, hexa: Zn }, fr = (e) => {
  let { label: t, ...n } = e;
  return s("div", { class: "v-color-picker-edit__input" }, [s("input", n, null), s("span", null, [t])]);
}, mr = Se({ name: "VColorPickerEdit", props: E({ color: Object, disabled: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Re).includes(e) }, modes: { type: Array, default: () => Object.keys(Re), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Re).includes(t)) }, ...X() }, "VColorPickerEdit")(), emits: { "update:color": (e) => !0, "update:mode": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = f(() => e.modes.map((a) => ({ ...Re[a], name: a }))), r = f(() => {
    var i;
    const a = l.value.find((u) => u.name === e.mode);
    if (!a)
      return [];
    const o = e.color ? a.to(e.color) : null;
    return (i = a.inputs) == null ? void 0 : i.map((u) => {
      let { getValue: p, getColor: d, ...c } = u;
      return { ...a.inputProps, ...c, disabled: e.disabled, value: o && p(o), onChange: (m) => {
        const h = m.target;
        h && n("update:color", a.from(d(o ?? qe, h.value)));
      } };
    });
  });
  return W(() => {
    var a;
    return s("div", { class: ["v-color-picker-edit", e.class], style: e.style }, [(a = r.value) == null ? void 0 : a.map((o) => s(fr, o, null)), l.value.length > 1 && s(Rl, { icon: "$unfold", size: "x-small", variant: "plain", onClick: () => {
      const o = l.value.findIndex((i) => i.name === e.mode);
      n("update:mode", l.value[(o + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), hn = Symbol.for("vuetify:v-slider"), gr = E({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: !1, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, ...$e(), ...st({ elevation: 2 }), ripple: { type: Boolean, default: !0 } }, "Slider"), hr = (e) => {
  let { props: t, steps: n, onSliderStart: l, onSliderMove: r, onSliderEnd: a, getActiveThumb: o } = e;
  const { isRtl: i } = ze(), u = G(t, "reverse"), p = f(() => t.direction === "vertical"), d = f(() => p.value !== u.value), { min: c, max: m, step: h, decimals: A, roundValue: k } = n, S = f(() => parseInt(t.thumbSize, 10)), w = f(() => parseInt(t.tickSize, 10)), _ = f(() => parseInt(t.trackSize, 10)), x = f(() => (m.value - c.value) / h.value), z = G(t, "disabled"), P = f(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), V = f(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), B = f(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), $ = le(!1), g = le(0), I = j(), b = j();
  function v(L) {
    var xe;
    const D = t.direction === "vertical", he = D ? "top" : "left", ee = D ? "height" : "width", te = D ? "clientY" : "clientX", { [he]: re, [ee]: Y } = (xe = I.value) == null ? void 0 : xe.$el.getBoundingClientRect(), K = function(pe, Pe) {
      return "touches" in pe && pe.touches.length ? pe.touches[0][Pe] : "changedTouches" in pe && pe.changedTouches.length ? pe.changedTouches[0][Pe] : pe[Pe];
    }(L, te);
    let ce = Math.min(Math.max((K - re - g.value) / Y, 0), 1) || 0;
    return (D ? d.value : d.value !== i.value) && (ce = 1 - ce), k(c.value + ce * (m.value - c.value));
  }
  const y = (L) => {
    a({ value: v(L) }), $.value = !1, g.value = 0;
  }, C = (L) => {
    b.value = o(L), b.value && (b.value.focus(), $.value = !0, b.value.contains(L.target) ? g.value = function(D, he, ee) {
      const te = ee === "vertical", re = he.getBoundingClientRect(), Y = "touches" in D ? D.touches[0] : D;
      return te ? Y.clientY - (re.top + re.height / 2) : Y.clientX - (re.left + re.width / 2);
    }(L, b.value, t.direction) : (g.value = 0, r({ value: v(L) })), l({ value: v(L) }));
  }, O = { passive: !0, capture: !0 };
  function M(L) {
    r({ value: v(L) });
  }
  function R(L) {
    L.stopPropagation(), L.preventDefault(), y(L), window.removeEventListener("mousemove", M, O), window.removeEventListener("mouseup", R);
  }
  function q(L) {
    var D;
    y(L), window.removeEventListener("touchmove", M, O), (D = L.target) == null || D.removeEventListener("touchend", q);
  }
  const F = (L) => {
    const D = (L - c.value) / (m.value - c.value) * 100;
    return He(isNaN(D) ? 0 : D, 0, 100);
  }, U = G(t, "showTicks"), Q = f(() => U.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((L) => ({ value: L, position: F(L), label: L.toString() })) : Object.keys(t.ticks).map((L) => ({ value: parseFloat(L), position: F(parseFloat(L)), label: t.ticks[L] })) : x.value !== 1 / 0 ? function(L) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({ length: L }, (he, ee) => D + ee);
  }(x.value + 1).map((L) => {
    const D = c.value + L * h.value;
    return { value: D, position: F(D) };
  }) : [] : []), ue = f(() => Q.value.some((L) => {
    let { label: D } = L;
    return !!D;
  })), de = { activeThumbRef: b, color: G(t, "color"), decimals: A, disabled: z, direction: G(t, "direction"), elevation: G(t, "elevation"), hasLabels: ue, isReversed: u, indexFromEnd: d, min: c, max: m, mousePressed: $, numTicks: x, onSliderMousedown: function(L) {
    L.preventDefault(), C(L), window.addEventListener("mousemove", M, O), window.addEventListener("mouseup", R, { passive: !1 });
  }, onSliderTouchstart: function(L) {
    var D;
    C(L), window.addEventListener("touchmove", M, O), (D = L.target) == null || D.addEventListener("touchend", q, { passive: !1 });
  }, parsedTicks: Q, parseMouseMove: v, position: F, readonly: G(t, "readonly"), rounded: G(t, "rounded"), roundValue: k, showTicks: U, startOffset: g, step: h, thumbSize: S, thumbColor: P, thumbLabel: G(t, "thumbLabel"), ticks: G(t, "ticks"), tickSize: w, trackColor: V, trackContainerRef: I, trackFillColor: B, trackSize: _, vertical: p };
  return Ke(hn, de), de;
}, yr = E({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function ie(e, t, n) {
  return H()({ name: e, props: yr({ mode: n, origin: t }), setup(l, r) {
    let { slots: a } = r;
    const o = { onBeforeEnter(i) {
      l.origin && (i.style.transformOrigin = l.origin);
    }, onLeave(i) {
      if (l.leaveAbsolute) {
        const { offsetTop: u, offsetLeft: p, offsetWidth: d, offsetHeight: c } = i;
        i._transitionInitialStyles = { position: i.style.position, top: i.style.top, left: i.style.left, width: i.style.width, height: i.style.height }, i.style.position = "absolute", i.style.top = `${u}px`, i.style.left = `${p}px`, i.style.width = `${d}px`, i.style.height = `${c}px`;
      }
      l.hideOnLeave && i.style.setProperty("display", "none", "important");
    }, onAfterLeave(i) {
      if (l.leaveAbsolute && (i != null && i._transitionInitialStyles)) {
        const { position: u, top: p, left: d, width: c, height: m } = i._transitionInitialStyles;
        delete i._transitionInitialStyles, i.style.position = u || "", i.style.top = p || "", i.style.left = d || "", i.style.width = c || "", i.style.height = m || "";
      }
    } };
    return () => {
      const i = l.group ? ra : xt;
      return _t(i, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : o }, a.default);
    };
  } });
}
function Ml(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return H()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, r) {
    let { slots: a } = r;
    return () => _t(xt, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, a.default);
  } });
}
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = nl(`offset-${t}`);
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
const br = ie("scale-transition");
ie("scroll-x-transition"), ie("scroll-x-reverse-transition"), ie("scroll-y-transition"), ie("scroll-y-reverse-transition"), ie("slide-x-transition"), ie("slide-x-reverse-transition");
const Fl = ie("slide-y-transition");
ie("slide-y-reverse-transition"), Ml("expand-transition", Tl());
const kr = Ml("expand-x-transition", Tl("", !0)), Sr = E({ focused: Boolean, max: { type: Number, required: !0 }, min: { type: Number, required: !0 }, modelValue: { type: Number, required: !0 }, position: { type: Number, required: !0 }, ripple: { type: [Boolean, Object], default: !0 }, ...X() }, "VSliderThumb"), Cr = H()({ name: "VSliderThumb", directives: { Ripple: gn }, props: Sr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = me(hn), { isRtl: a, rtlClasses: o } = ze();
  if (!r)
    throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { thumbColor: i, step: u, disabled: p, thumbSize: d, thumbLabel: c, direction: m, isReversed: h, vertical: A, readonly: k, elevation: S, mousePressed: w, decimals: _, indexFromEnd: x } = r, { textColorClasses: z, textColorStyles: P } = Fe(i), { pageup: V, pagedown: B, end: $, home: g, left: I, right: b, down: v, up: y } = ka, C = [V, B, $, g, I, b, v, y], O = f(() => u.value ? [1, 2, 3] : [1, 5, 10]);
  function M(R) {
    const q = function(F, U) {
      if (!C.includes(F.key))
        return;
      F.preventDefault();
      const Q = u.value || 0.1, ue = (e.max - e.min) / Q;
      if ([I, b, v, y].includes(F.key)) {
        const de = (A.value ? [a.value ? I : b, h.value ? v : y] : x.value !== a.value ? [I, y] : [b, y]).includes(F.key) ? 1 : -1, L = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
        U += de * Q * O.value[L];
      } else
        F.key === g ? U = e.min : F.key === $ ? U = e.max : U -= (F.key === B ? 1 : -1) * Q * (ue > 100 ? ue / 10 : 10);
      return Math.max(e.min, Math.min(e.max, U));
    }(R, e.modelValue);
    q != null && l("update:modelValue", q);
  }
  return W(() => {
    const R = T(x.value ? 100 - e.position : e.position, "%"), { elevationClasses: q } = ut(f(() => p.value ? void 0 : S.value));
    return s("div", { class: ["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && w.value }, e.class, o.value], style: [{ "--v-slider-thumb-position": R, "--v-slider-thumb-size": T(d.value) }, e.style], role: "slider", tabindex: p.value ? -1 : 0, "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.modelValue, "aria-readonly": !!k.value, "aria-orientation": m.value, onKeydown: k.value ? void 0 : M }, [s("div", { class: ["v-slider-thumb__surface", z.value, q.value], style: { ...P.value } }, null), be(s("div", { class: ["v-slider-thumb__ripple", z.value], style: P.value }, null), [[rt("ripple"), e.ripple, null, { circle: !0, center: !0 }]]), s(br, { origin: "bottom center" }, { default: () => {
      var F;
      return [be(s("div", { class: "v-slider-thumb__label-container" }, [s("div", { class: ["v-slider-thumb__label"] }, [s("div", null, [((F = n["thumb-label"]) == null ? void 0 : F.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(u.value ? _.value : 1)])])]), [[Vt, c.value && e.focused || c.value === "always"]])];
    } })]);
  }), {};
} }), wr = E({ start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...X() }, "VSliderTrack"), _r = H()({ name: "VSliderTrack", props: wr(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const l = me(hn);
  if (!l)
    throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: r, parsedTicks: a, rounded: o, showTicks: i, tickSize: u, trackColor: p, trackFillColor: d, trackSize: c, vertical: m, min: h, max: A, indexFromEnd: k } = l, { roundedClasses: S } = Ae(o), { backgroundColorClasses: w, backgroundColorStyles: _ } = Ye(d), { backgroundColorClasses: x, backgroundColorStyles: z } = Ye(p), P = f(() => `inset-${m.value ? "block" : "inline"}-${k.value ? "end" : "start"}`), V = f(() => m.value ? "height" : "width"), B = f(() => ({ [P.value]: "0%", [V.value]: "100%" })), $ = f(() => e.stop - e.start), g = f(() => ({ [P.value]: T(e.start, "%"), [V.value]: T($.value, "%") })), I = f(() => i.value ? (m.value ? a.value.slice().reverse() : a.value).map((b, v) => {
    var C;
    const y = b.value !== h.value && b.value !== A.value ? T(b.position, "%") : void 0;
    return s("div", { key: b.value, class: ["v-slider-track__tick", { "v-slider-track__tick--filled": b.position >= e.start && b.position <= e.stop, "v-slider-track__tick--first": b.value === h.value, "v-slider-track__tick--last": b.value === A.value }], style: { [P.value]: y } }, [(b.label || n["tick-label"]) && s("div", { class: "v-slider-track__tick-label" }, [((C = n["tick-label"]) == null ? void 0 : C.call(n, { tick: b, index: v })) ?? b.label])]);
  }) : []);
  return W(() => s("div", { class: ["v-slider-track", S.value, e.class], style: [{ "--v-slider-track-size": T(c.value), "--v-slider-tick-size": T(u.value) }, e.style] }, [s("div", { class: ["v-slider-track__background", x.value, { "v-slider-track__background--opacity": !!r.value || !d.value }], style: { ...B.value, ...z.value } }, null), s("div", { class: ["v-slider-track__fill", w.value], style: { ...g.value, ..._.value } }, null), i.value && s("div", { class: ["v-slider-track__ticks", { "v-slider-track__ticks--always-show": i.value === "always" }] }, [I.value])])), {};
} });
function jl(e) {
  const { t } = function() {
    const n = me(wl);
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
const xr = E({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...X(), ...un({ transition: { component: Fl, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Vr = H()({ name: "VMessages", props: xr(), setup(e, t) {
  let { slots: n } = t;
  const l = f(() => tt(e.messages)), { textColorClasses: r, textColorStyles: a } = Fe(f(() => e.color));
  return W(() => s(Ue, { transition: e.transition, tag: "div", class: ["v-messages", r.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((o, i) => s("div", { class: "v-messages__message", key: `${i}-${l.value}` }, [n.message ? n.message({ message: o }) : o]))] })), {};
} }), yn = E({ focused: Boolean, "onUpdate:focused": Xe() }, "focus");
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  const n = Ce(e, "focused");
  return { focusClasses: f(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const Ir = Symbol.for("vuetify:form"), Br = E({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...yn() }, "validation");
function $r(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ot();
  const l = Ce(e, "modelValue"), r = f(() => e.validationValue === void 0 ? l.value : e.validationValue), a = me(Ir, null), o = j([]), i = le(!0), u = f(() => !(!tt(l.value === "" ? null : l.value).length && !tt(r.value === "" ? null : r.value).length)), p = f(() => !!(e.disabled ?? (a == null ? void 0 : a.isDisabled.value))), d = f(() => !!(e.readonly ?? (a == null ? void 0 : a.isReadonly.value))), c = f(() => {
    var z;
    return (z = e.errorMessages) != null && z.length ? tt(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), m = f(() => {
    let z = (e.validateOn ?? (a == null ? void 0 : a.validateOn.value)) || "input";
    z === "lazy" && (z = "input lazy");
    const P = new Set((z == null ? void 0 : z.split(" ")) ?? []);
    return { blur: P.has("blur") || P.has("input"), input: P.has("input"), submit: P.has("submit"), lazy: P.has("lazy") };
  }), h = f(() => {
    var z;
    return !e.error && !((z = e.errorMessages) != null && z.length) && (!e.rules.length || (i.value ? !o.value.length && !m.value.lazy || null : !o.value.length));
  }), A = le(!1), k = f(() => ({ [`${t}--error`]: h.value === !1, [`${t}--dirty`]: u.value, [`${t}--disabled`]: p.value, [`${t}--readonly`]: d.value })), S = f(() => e.name ?? N(n));
  function w() {
    l.value = null, nt(_);
  }
  function _() {
    i.value = !0, m.value.lazy ? o.value = [] : x(!0);
  }
  async function x() {
    let z = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const P = [];
    A.value = !0;
    for (const V of e.rules) {
      if (P.length >= +(e.maxErrors ?? 1))
        break;
      const B = typeof V == "function" ? V : () => V, $ = await B(r.value);
      $ !== !0 && ($ === !1 || typeof $ == "string" ? P.push($ || "") : console.warn(`${$} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    return o.value = P, A.value = !1, i.value = z, o.value;
  }
  return ll(() => {
    a == null || a.register({ id: S.value, validate: x, reset: w, resetValidation: _ });
  }), Je(() => {
    a == null || a.unregister(S.value);
  }), It(async () => {
    m.value.lazy || await x(!0), a == null || a.update(S.value, h.value, c.value);
  }), Zt(() => m.value.input, () => {
    J(r, () => {
      if (r.value != null)
        x();
      else if (e.focused) {
        const z = J(() => e.focused, (P) => {
          P || x(), z();
        });
      }
    });
  }), Zt(() => m.value.blur, () => {
    J(() => e.focused, (z) => {
      z || x();
    });
  }), J(h, () => {
    a == null || a.update(S.value, h.value, c.value);
  }), { errorMessages: c, isDirty: u, isDisabled: p, isReadonly: d, isPristine: i, isValid: h, isValidating: A, reset: w, resetValidation: _, validate: x, validationClasses: k };
}
const kn = E({ id: String, appendIcon: ae, centerAffix: { type: Boolean, default: !0 }, prependIcon: ae, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Xe(), "onClick:append": Xe(), ...X(), ...Qe(), ...Br() }, "VInput"), Ct = H()({ name: "VInput", props: { ...kn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: r } = t;
  const { densityClasses: a } = it(e), { rtlClasses: o } = ze(), { InputIcon: i } = jl(e), u = ot(), p = f(() => e.id || `input-${u}`), d = f(() => `${p.value}-messages`), { errorMessages: c, isDirty: m, isDisabled: h, isReadonly: A, isPristine: k, isValid: S, isValidating: w, reset: _, resetValidation: x, validate: z, validationClasses: P } = $r(e, "v-input", p), V = f(() => ({ id: p, messagesId: d, isDirty: m, isDisabled: h, isReadonly: A, isPristine: k, isValid: S, isValidating: w, reset: _, resetValidation: x, validate: z })), B = f(() => {
    var $;
    return ($ = e.errorMessages) != null && $.length || !k.value && c.value.length ? c.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return W(() => {
    var v, y, C, O;
    const $ = !(!l.prepend && !e.prependIcon), g = !(!l.append && !e.appendIcon), I = B.value.length > 0, b = !e.hideDetails || e.hideDetails === "auto" && (I || !!l.details);
    return s("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, a.value, o.value, P.value, e.class], style: e.style }, [$ && s("div", { key: "prepend", class: "v-input__prepend" }, [(v = l.prepend) == null ? void 0 : v.call(l, V.value), e.prependIcon && s(i, { key: "prepend-icon", name: "prepend" }, null)]), l.default && s("div", { class: "v-input__control" }, [(y = l.default) == null ? void 0 : y.call(l, V.value)]), g && s("div", { key: "append", class: "v-input__append" }, [e.appendIcon && s(i, { key: "append-icon", name: "append" }, null), (C = l.append) == null ? void 0 : C.call(l, V.value)]), b && s("div", { class: "v-input__details" }, [s(Vr, { id: d.value, active: I, messages: B.value }, { message: l.message }), (O = l.details) == null ? void 0 : O.call(l, V.value)])]);
  }), { reset: _, resetValidation: x, validate: z, isValid: S, errorMessages: c };
} }), Ar = E({ text: String, clickable: Boolean, ...X(), ...ge() }, "VLabel"), Dl = H()({ name: "VLabel", props: Ar(), setup(e, t) {
  let { slots: n } = t;
  return W(() => {
    var l;
    return s("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), zr = E({ ...yn(), ...gr(), ...kn(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Jn = H()({ name: "VSlider", props: zr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, start: (e) => !0, end: (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = j(), { rtlClasses: a } = ze(), o = ((V) => {
    const B = f(() => parseFloat(V.min)), $ = f(() => parseFloat(V.max)), g = f(() => +V.step > 0 ? parseFloat(V.step) : 0), I = f(() => Math.max(xn(g.value), xn(B.value)));
    return { min: B, max: $, step: g, decimals: I, roundValue: function(b) {
      if (b = parseFloat(b), g.value <= 0)
        return b;
      const v = He(b, B.value, $.value), y = B.value % g.value, C = Math.round((v - y) / g.value) * g.value + y;
      return parseFloat(Math.min(C, $.value).toFixed(I.value));
    } };
  })(e), i = Ce(e, "modelValue", void 0, (V) => o.roundValue(V ?? o.min.value)), { min: u, max: p, mousePressed: d, roundValue: c, onSliderMousedown: m, onSliderTouchstart: h, trackContainerRef: A, position: k, hasLabels: S, readonly: w } = hr({ props: e, steps: o, onSliderStart: () => {
    l("start", i.value);
  }, onSliderEnd: (V) => {
    let { value: B } = V;
    const $ = c(B);
    i.value = $, l("end", $);
  }, onSliderMove: (V) => {
    let { value: B } = V;
    return i.value = c(B);
  }, getActiveThumb: () => {
    var V;
    return (V = r.value) == null ? void 0 : V.$el;
  } }), { isFocused: _, focus: x, blur: z } = bn(e), P = f(() => k(i.value));
  return W(() => {
    const V = Ct.filterProps(e), B = !!(e.label || n.label || n.prepend);
    return s(Ct, Z({ class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || S.value, "v-slider--focused": _.value, "v-slider--pressed": d.value, "v-slider--disabled": e.disabled }, a.value, e.class], style: e.style }, V, { focused: _.value }), { ...n, prepend: B ? ($) => {
      var g, I;
      return s(ye, null, [((g = n.label) == null ? void 0 : g.call(n, $)) ?? (e.label ? s(Dl, { id: $.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (I = n.prepend) == null ? void 0 : I.call(n, $)]);
    } : void 0, default: ($) => {
      let { id: g, messagesId: I } = $;
      return s("div", { class: "v-slider__container", onMousedown: w.value ? void 0 : m, onTouchstartPassive: w.value ? void 0 : h }, [s("input", { id: g.value, name: e.name || g.value, disabled: !!e.disabled, readonly: !!e.readonly, tabindex: "-1", value: i.value }, null), s(_r, { ref: A, start: 0, stop: P.value }, { "tick-label": n["tick-label"] }), s(Cr, { ref: r, "aria-describedby": I.value, focused: _.value, min: u.value, max: p.value, modelValue: i.value, "onUpdate:modelValue": (b) => i.value = b, position: P.value, elevation: e.elevation, onFocus: x, onBlur: z, ripple: e.ripple }, { "thumb-label": n["thumb-label"] })]);
    } });
  }), {};
} }), Pr = Se({ name: "VColorPickerPreview", props: E({ color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...X() }, "VColorPickerPreview")(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = new AbortController();
  async function r() {
    if (!Sn)
      return;
    const a = new window.EyeDropper();
    try {
      const o = gl((await a.open({ signal: l.signal })).sRGBHex);
      n("update:color", { ...e.color ?? qe, ...o });
    } catch {
    }
  }
  return oa(() => l.abort()), W(() => {
    var a, o;
    return s("div", { class: ["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class], style: e.style }, [Sn && s("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [s(Rl, { onClick: r, icon: "$eyeDropper", variant: "plain", density: "comfortable" }, null)]), s("div", { class: "v-color-picker-preview__dot" }, [s("div", { style: { background: fl(e.color ?? qe) } }, null)]), s("div", { class: "v-color-picker-preview__sliders" }, [s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__hue", modelValue: (a = e.color) == null ? void 0 : a.h, "onUpdate:modelValue": (i) => n("update:color", { ...e.color ?? qe, h: i }), step: 0, min: 0, max: 360, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null), !e.hideAlpha && s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1, "onUpdate:modelValue": (i) => n("update:color", { ...e.color ?? qe, a: i }), step: 1 / 256, min: 0, max: 1, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null)])]);
  }), {};
} }), Nr = { red: { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, pink: { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, purple: { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, deepPurple: { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, indigo: { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, blue: { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, lightBlue: { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, cyan: { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, teal: { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, green: { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, lightGreen: { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, lime: { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, yellow: { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, amber: { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, orange: { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, deepOrange: { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, brown: { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, blueGrey: { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, grey: { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, shades: { black: "#000000", white: "#ffffff", transparent: "#ffffff00" } }, Er = E({ swatches: { type: Array, default: () => function(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}(Nr) }, disabled: Boolean, color: Object, maxHeight: [Number, String], ...X() }, "VColorPickerSwatches"), Or = Se({ name: "VColorPickerSwatches", props: Er(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  return W(() => s("div", { class: ["v-color-picker-swatches", e.class], style: [{ maxHeight: T(e.maxHeight) }, e.style] }, [s("div", null, [e.swatches.map((l) => s("div", { class: "v-color-picker-swatches__swatch" }, [l.map((r) => {
    const a = Ve(r), o = At(a), i = vl(a);
    return s("div", { class: "v-color-picker-swatches__color", onClick: () => o && n("update:color", o) }, [s("div", { style: { background: i } }, [e.color && $t(e.color, o) ? s(Ie, { size: "x-small", icon: "$success", color: Ea(r, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), Hl = E({ color: String, ...Rt(), ...X(), ...Et(), ...st(), ...Tt(), ...fn(), ...$e(), ...Be(), ...ge() }, "VSheet"), Qn = H()({ name: "VSheet", props: Hl(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { backgroundColorClasses: r, backgroundColorStyles: a } = Ye(G(e, "color")), { borderClasses: o } = Mt(e), { dimensionStyles: i } = Ot(e), { elevationClasses: u } = ut(e), { locationStyles: p } = Ft(e), { positionClasses: d } = mn(e), { roundedClasses: c } = Ae(e);
  return W(() => s(e.tag, { class: ["v-sheet", l.value, r.value, o.value, u.value, d.value, c.value, e.class], style: [a.value, i.value, p.value, e.style] }, n)), {};
} }), Lr = Se({ name: "VColorPicker", props: E({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Re).includes(e) }, modes: { type: Array, default: () => Object.keys(Re), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Re).includes(t)) }, showSwatches: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...sl(Hl({ width: 300 }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"]) }, "VColorPicker")(), emits: { "update:modelValue": (e) => !0, "update:mode": (e) => !0 }, setup(e) {
  const t = Ce(e, "mode"), n = j(null), l = Ce(e, "modelValue", void 0, (o) => {
    if (o == null || o === "")
      return null;
    let i;
    try {
      i = At(Ve(o));
    } catch (u) {
      return Ge(u), null;
    }
    return n.value && (i = { ...i, h: n.value.h }, n.value = null), i;
  }, (o) => o ? function(i, u) {
    if (u == null || typeof u == "string") {
      const p = hl(i);
      return i.a === 1 ? p.slice(0, 7) : p;
    }
    if (typeof u == "object") {
      let p;
      return Le(u, ["r", "g", "b"]) ? p = ke(i) : Le(u, ["h", "s", "l"]) ? p = pl(i) : Le(u, ["h", "s", "v"]) && (p = i), function(d, c) {
        if (c) {
          const { a: m, ...h } = d;
          return h;
        }
        return d;
      }(p, !Le(u, ["a"]) && i.a === 1);
    }
    return i;
  }(o, e.modelValue) : null), { rtlClasses: r } = ze(), a = (o) => {
    l.value = o, n.value = o;
  };
  return It(() => {
    e.modes.includes(t.value) || (t.value = e.modes[0]);
  }), zt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), W(() => {
    const o = Qn.filterProps(e);
    return s(Qn, Z({ rounded: e.rounded, elevation: e.elevation, theme: e.theme, class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": fl({ ...l.value ?? qe, a: 1 }) }, e.style] }, o, { maxWidth: e.width }), { default: () => [!e.hideCanvas && s(or, { key: "canvas", color: l.value, "onUpdate:color": a, disabled: e.disabled, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && s("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && s(Pr, { key: "preview", color: l.value, "onUpdate:color": a, hideAlpha: !t.value.endsWith("a"), disabled: e.disabled }, null), !e.hideInputs && s(mr, { key: "edit", modes: e.modes, mode: t.value, "onUpdate:mode": (i) => t.value = i, color: l.value, "onUpdate:color": a, disabled: e.disabled }, null)]), e.showSwatches && s(Or, { key: "swatches", color: l.value, "onUpdate:color": a, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled }, null)] });
  }), {};
} }), Rr = E({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...X(), ...un({ transition: { component: Fl } }) }, "VCounter"), Mr = H()({ name: "VCounter", functional: !0, props: Rr(), setup(e, t) {
  let { slots: n } = t;
  const l = f(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return W(() => s(Ue, { transition: e.transition }, { default: () => [be(s("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Vt, e.active]])] })), {};
} }), Tr = E({ floating: Boolean, ...X() }, "VFieldLabel"), gt = H()({ name: "VFieldLabel", props: Tr(), setup(e, t) {
  let { slots: n } = t;
  return W(() => s(Dl, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Fr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Wl = E({ appendInnerIcon: ae, bgColor: String, clearable: Boolean, clearIcon: { type: ae, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ae, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Fr.includes(e) }, "onClick:clear": Xe(), "onClick:appendInner": Xe(), "onClick:prependInner": Xe(), ...X(), ...pn(), ...$e(), ...ge() }, "VField"), Ul = H()({ name: "VField", inheritAttrs: !1, props: { id: String, ...yn(), ...Wl() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const { themeClasses: a } = _e(e), { loaderClasses: o } = vn(e), { focusClasses: i, isFocused: u, focus: p, blur: d } = bn(e), { InputIcon: c } = jl(e), { roundedClasses: m } = Ae(e), { rtlClasses: h } = ze(), A = f(() => e.dirty || e.active), k = f(() => !(e.singleLine || !e.label && !r.label)), S = ot(), w = f(() => e.id || `input-${S}`), _ = f(() => `${w.value}-messages`), x = j(), z = j(), P = j(), V = f(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: B, backgroundColorStyles: $ } = Ye(G(e, "bgColor")), { textColorClasses: g, textColorStyles: I } = Fe(f(() => e.error || e.disabled ? void 0 : A.value && u.value ? e.color : e.baseColor));
  J(A, (y) => {
    if (k.value) {
      const C = x.value.$el, O = z.value.$el;
      requestAnimationFrame(() => {
        const M = function(ee) {
          const te = ee.getBoundingClientRect(), re = getComputedStyle(ee), Y = re.transform;
          if (Y) {
            let K, ce, xe, pe, Pe;
            if (Y.startsWith("matrix3d("))
              K = Y.slice(9, -1).split(/, /), ce = +K[0], xe = +K[5], pe = +K[12], Pe = +K[13];
            else {
              if (!Y.startsWith("matrix("))
                return new Ht(te);
              K = Y.slice(7, -1).split(/, /), ce = +K[0], xe = +K[3], pe = +K[4], Pe = +K[5];
            }
            const jt = re.transformOrigin, ql = te.x - pe - (1 - ce) * parseFloat(jt), Xl = te.y - Pe - (1 - xe) * parseFloat(jt.slice(jt.indexOf(" ") + 1)), Gl = ce ? te.width / ce : ee.offsetWidth + 1, Yl = xe ? te.height / xe : ee.offsetHeight + 1;
            return new Ht({ x: ql, y: Xl, width: Gl, height: Yl });
          }
          return new Ht(te);
        }(C), R = O.getBoundingClientRect(), q = R.x - M.x, F = R.y - M.y - (M.height / 2 - R.height / 2), U = R.width / 0.75, Q = Math.abs(U - M.width) > 1 ? { maxWidth: T(U) } : void 0, ue = getComputedStyle(C), de = getComputedStyle(O), L = 1e3 * parseFloat(ue.transitionDuration) || 150, D = parseFloat(de.getPropertyValue("--v-field-label-scale")), he = de.getPropertyValue("color");
        C.style.visibility = "visible", O.style.visibility = "hidden", function(ee, te, re) {
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
        }(C, { transform: `translate(${q}px, ${F}px) scale(${D})`, color: he, ...Q }, { duration: L, easing: "cubic-bezier(0.4, 0, 0.2, 1)", direction: y ? "normal" : "reverse" }).finished.then(() => {
          C.style.removeProperty("visibility"), O.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const b = f(() => ({ isActive: A, isFocused: u, controlRef: P, blur: d, focus: p }));
  function v(y) {
    y.target !== document.activeElement && y.preventDefault();
  }
  return W(() => {
    var q, F, U;
    const y = e.variant === "outlined", C = r["prepend-inner"] || e.prependInnerIcon, O = !(!e.clearable && !r.clear), M = !!(r["append-inner"] || e.appendInnerIcon || O), R = () => r.label ? r.label({ ...b.value, label: e.label, props: { for: w.value } }) : e.label;
    return s("div", Z({ class: ["v-field", { "v-field--active": A.value, "v-field--appended": M, "v-field--center-affix": e.centerAffix ?? !V.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": C, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !R(), [`v-field--variant-${e.variant}`]: !0 }, a.value, B.value, i.value, o.value, m.value, h.value, e.class], style: [$.value, e.style], onClick: v }, n), [s("div", { class: "v-field__overlay" }, null), s(_l, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: r.loader }), C && s("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && s(c, { key: "prepend-icon", name: "prependInner" }, null), (q = r["prepend-inner"]) == null ? void 0 : q.call(r, b.value)]), s("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && k.value && s(gt, { key: "floating-label", ref: z, class: [g.value], floating: !0, for: w.value, style: I.value }, { default: () => [R()] }), s(gt, { ref: x, for: w.value }, { default: () => [R()] }), (F = r.default) == null ? void 0 : F.call(r, { ...b.value, props: { id: w.value, class: "v-field__input", "aria-describedby": _.value }, focus: p, blur: d })]), O && s(kr, { key: "clear" }, { default: () => [be(s("div", { class: "v-field__clearable", onMousedown: (Q) => {
      Q.preventDefault(), Q.stopPropagation();
    } }, [r.clear ? r.clear() : s(c, { name: "clear" }, null)]), [[Vt, e.dirty]])] }), M && s("div", { key: "append", class: "v-field__append-inner" }, [(U = r["append-inner"]) == null ? void 0 : U.call(r, b.value), e.appendInnerIcon && s(c, { key: "append-icon", name: "appendInner" }, null)]), s("div", { class: ["v-field__outline", g.value], style: I.value }, [y && s(ye, null, [s("div", { class: "v-field__outline__start" }, null), k.value && s("div", { class: "v-field__outline__notch" }, [s(gt, { ref: z, floating: !0, for: w.value }, { default: () => [R()] })]), s("div", { class: "v-field__outline__end" }, null)]), V.value && k.value && s(gt, { ref: z, floating: !0, for: w.value }, { default: () => [R()] })])]);
  }), { controlRef: P };
} });
function jr(e) {
  return il(e, Object.keys(Ul.props).filter((t) => {
    return n = t, !ul.test(n) && t !== "class" && t !== "style";
    var n;
  }));
}
const Xt = Symbol("Forwarded refs");
function Gt(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
const Dr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Hr = E({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...kn(), ...Wl() }, "VTextField"), Wr = H()({ name: "VTextField", directives: { Intersect: kl }, inheritAttrs: !1, props: Hr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const a = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: u } = bn(e), p = f(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), d = f(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), c = f(() => ["plain", "underlined"].includes(e.variant));
  function m(V, B) {
    var $, g;
    e.autofocus && V && ((g = ($ = B[0].target) == null ? void 0 : $.focus) == null || g.call($));
  }
  const h = j(), A = j(), k = j(), S = f(() => Dr.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
  function w() {
    var V;
    k.value !== document.activeElement && ((V = k.value) == null || V.focus()), o.value || i();
  }
  function _(V) {
    l("mousedown:control", V), V.target !== k.value && (w(), V.preventDefault());
  }
  function x(V) {
    w(), l("click:control", V);
  }
  function z(V) {
    V.stopPropagation(), w(), nt(() => {
      a.value = null, function(B) {
        for (var $ = arguments.length, g = new Array($ > 1 ? $ - 1 : 0), I = 1; I < $; I++)
          g[I - 1] = arguments[I];
        if (Array.isArray(B))
          for (const b of B)
            b(...g);
        else
          typeof B == "function" && B(...g);
      }(e["onClick:clear"], V);
    });
  }
  function P(V) {
    var $;
    const B = V.target;
    if (a.value = B.value, (($ = e.modelModifiers) == null ? void 0 : $.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const g = [B.selectionStart, B.selectionEnd];
      nt(() => {
        B.selectionStart = g[0], B.selectionEnd = g[1];
      });
    }
  }
  return W(() => {
    const V = !!(r.counter || e.counter !== !1 && e.counter != null), B = !(!V && !r.details), [$, g] = function(y) {
      const [C, O] = _n(y, [ul]), M = sl(C, Sa), [R, q] = _n(O, ["class", "style", "id", /^data-/]);
      return Object.assign(R, C), Object.assign(q, M), [R, q];
    }(n), { modelValue: I, ...b } = Ct.filterProps(e), v = jr(e);
    return s(Ct, Z({ ref: h, modelValue: a.value, "onUpdate:modelValue": (y) => a.value = y, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": c.value }, e.class], style: e.style }, $, b, { centerAffix: !c.value, focused: o.value }), { ...r, default: (y) => {
      let { id: C, isDisabled: O, isDirty: M, isReadonly: R, isValid: q } = y;
      return s(Ul, Z({ ref: A, onMousedown: _, onClick: x, "onClick:clear": z, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, v, { id: C.value, active: S.value || M.value, dirty: M.value || e.dirty, disabled: O.value, focused: o.value, error: q.value === !1 }), { ...r, default: (F) => {
        let { props: { class: U, ...Q } } = F;
        const ue = be(s("input", Z({ ref: k, value: a.value, onInput: P, autofocus: e.autofocus, readonly: R.value, disabled: O.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: w, onBlur: u }, Q, g), null), [[rt("intersect"), { handler: m }, null, { once: !0 }]]);
        return s(ye, null, [e.prefix && s("span", { class: "v-text-field__prefix" }, [s("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), r.default ? s("div", { class: U, "data-no-activator": "" }, [r.default(), ue]) : ia(ue, { class: U }), e.suffix && s("span", { class: "v-text-field__suffix" }, [s("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: B ? (y) => {
      var C;
      return s(ye, null, [(C = r.details) == null ? void 0 : C.call(r, y), V && s(ye, null, [s("span", null, null), s(Mr, { active: e.persistentCounter || o.value, value: p.value, max: d.value }, r.counter)])]);
    } : void 0 });
  }), function(V) {
    for (var B = arguments.length, $ = new Array(B > 1 ? B - 1 : 0), g = 1; g < B; g++)
      $[g - 1] = arguments[g];
    return V[Xt] = $, new Proxy(V, { get(I, b) {
      if (Reflect.has(I, b))
        return Reflect.get(I, b);
      if (typeof b != "symbol" && !b.startsWith("$") && !b.startsWith("__")) {
        for (const v of $)
          if (v.value && Reflect.has(v.value, b)) {
            const y = Reflect.get(v.value, b);
            return typeof y == "function" ? y.bind(v.value) : y;
          }
      }
    }, has(I, b) {
      if (Reflect.has(I, b))
        return !0;
      if (typeof b == "symbol" || b.startsWith("$") || b.startsWith("__"))
        return !1;
      for (const v of $)
        if (v.value && Reflect.has(v.value, b))
          return !0;
      return !1;
    }, set(I, b, v) {
      if (Reflect.has(I, b))
        return Reflect.set(I, b, v);
      if (typeof b == "symbol" || b.startsWith("$") || b.startsWith("__"))
        return !1;
      for (const y of $)
        if (y.value && Reflect.has(y.value, b))
          return Reflect.set(y.value, b, v);
      return !1;
    }, getOwnPropertyDescriptor(I, b) {
      var y;
      const v = Reflect.getOwnPropertyDescriptor(I, b);
      if (v)
        return v;
      if (typeof b != "symbol" && !b.startsWith("$") && !b.startsWith("__")) {
        for (const C of $) {
          if (!C.value)
            continue;
          const O = Gt(C.value, b) ?? ("_" in C.value ? Gt((y = C.value._) == null ? void 0 : y.setupState, b) : void 0);
          if (O)
            return O;
        }
        for (const C of $) {
          const O = C.value && C.value[Xt];
          if (!O)
            continue;
          const M = O.slice();
          for (; M.length; ) {
            const R = M.shift(), q = Gt(R.value, b);
            if (q)
              return q;
            const F = R.value && R.value[Xt];
            F && M.push(...F);
          }
        }
      }
    } });
  }({}, h, A, k);
} }), Ur = { key: 1 }, qr = { key: 0, class: "text-error ms-1" }, Xr = ((e) => (ga("data-v-5bdd4871"), e = e(), ha(), e))(() => rl("div", { class: "position-elm-helper" }, null, -1)), Gr = ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
})(wt({ inheritAttrs: !1, __name: "VColorField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, canvasHeight: {}, dotSize: {}, hideCanvas: {}, hideInputs: {}, hideSliders: {}, mode: {}, modes: {}, showSwatches: {}, swatches: {}, swatchesMaxHeight: {}, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { type: [String, null, Boolean], default: "pip" }, pipBorderRadius: { default: "50%" }, pipSize: {}, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(e, { emit: t }) {
  var b;
  const n = sa(), l = ua(), r = t, a = e, o = { elevation: 5, hover: !1, loading: !1, verticalOffset: 28 }, i = j({ VCard: { ...o, ...a.cardProps }, VColorPicker: { elevation: 0, canvasHeight: a.canvasHeight, dotSize: a.dotSize, hideCanvas: a.hideCanvas, hideInputs: a.hideInputs, hideSliders: a.hideSliders, mode: a.mode, modes: a.modes, showSwatches: a.showSwatches, swatches: a.swatches, swatchesMaxHeight: a.swatchesMaxHeight, ...a.colorPickerProps } }), u = j(null), p = j({}), d = j(!1), c = j(null), m = j(n.modelValue), h = j(n.modelValue), A = j((b = i.value.VColorPicker) == null ? void 0 : b.mode), k = j(a.theme ?? void 0);
  let S = en({ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 });
  const w = j({ density: a.density, modelValue: h, pip: a.pip, pipBorder: a.pipBorder, pipBorderRadius: a.pipBorderRadius, pipIcon: a.pipIcon, pipSize: a.iconSize });
  J(() => n.modelValue, (v) => {
    $(v);
  });
  const _ = f(() => ((v) => {
    const { name: y = "", readonly: C, readonlyInput: O } = v;
    return { [`${Oe}--text-field-${y}`]: y !== "", [`${Oe}--text-field-readonly`]: C ?? !1, [`${Oe}--text-field-readonly-input`]: !(!O || C), [`${Oe}--text-field`]: !0 };
  })({ name: a.name, readonly: a.readonly, readonlyInput: a.readonlyInput })), x = f(() => a.readonly || a.readonlyInput), z = f(() => {
    if (a.iconHoverColor !== !1)
      return typeof a.iconHoverColor == "string" ? a.iconHoverColor : a.color ?? void 0;
  }), P = f(() => ((v) => {
    const { fullWidth: y } = v;
    return { [`${Oe}--card`]: !0, [`${Oe}--card-full-width`]: y };
  })({ fullWidth: a.cardFieldWidth }));
  function V(v) {
    (v !== "textField" || a.readonlyInput || a.readonly) && (v === "textFieldIcon" && (a.readonlyInput || a.readonly) || B());
  }
  function B(v) {
    var ue;
    const y = { left: 0, right: 0, top: 0, width: 0 }, C = c.value;
    if (!d.value && (v === "keyup" || v === "clear"))
      return void (v === "clear" && g(""));
    if (d.value = !d.value, !d.value)
      return void (p.value.display = "none");
    const O = (C == null ? void 0 : C.getBoundingClientRect()) ?? y;
    let M = (C == null ? void 0 : C.offsetHeight) ?? 0, R = 300, q = (O == null ? void 0 : O.left) ?? 0, F = (O == null ? void 0 : O.right) ?? 0;
    const U = (ue = c == null ? void 0 : c.value) == null ? void 0 : ue.querySelector(".v-field__input"), Q = (U == null ? void 0 : U.getBoundingClientRect()) ?? y;
    M = U == null ? void 0 : U.offsetHeight, R = (U == null ? void 0 : U.offsetWidth) ?? 0, q = Q.left, F = Q.right - Q.width, S = { bottom: "initial", height: M, left: q, right: F, top: window.scrollY + (O == null ? void 0 : O.top), width: a.cardFieldWidth ? R : "auto" }, function() {
      var Y, K, ce;
      let de = Number(S.top) + Number(S.height), L = "initial", D = Number(a.cardOffsetY) ?? 0;
      const he = Number(a.cardOffsetX) ?? 0;
      (a.hint || a.messages) && (D += ((Y = i.value.VCard) == null ? void 0 : Y.verticalOffset) ?? 0), de += D, (K = a.open) != null && K.includes("top") && (L = window.innerHeight - de + Number(S.height) + 2 * D, de = "initial");
      let ee = Number(S.left) + he, te = S.right ?? 0;
      a.cardFieldWidth ? (ee = S.left, te = "initial") : (te = "initial", (ce = a.open) != null && ce.includes("right") && (ee = "initial", te = Number(S.right) + he));
      const re = { bottom: Ee({ value: L }), display: "block", left: Ee({ value: ee }), minWidth: Ee({ value: S.width }), padding: Ee({ value: a.cardPadding }), right: Ee({ value: te }), top: Ee({ value: de }), width: Ee({ value: S.width }) };
      p.value = re;
    }();
  }
  function $(v) {
    let y = v ?? "";
    if (y.length < 7)
      return h.value = y, void g(y);
    A.value === "hex" && (v.length > 7 && (y = v.substr(0, 7)), y.toString().match(/#[a-zA-Z0-9]{7}/) && (y = v.substr(0, 7))), g(y);
  }
  function g(v, y = !0) {
    y && (m.value = v), h.value = v, r("update:modelValue", v), r("update", v);
  }
  function I(v) {
    A.value = v, h.value = m.value, r("update:mode", v);
  }
  return ya(c, (v) => {
    var C;
    const y = N(u);
    v.target !== y && !((C = y == null ? void 0 : y.$el) != null && C.contains(v.target)) && d.value && B("outside");
  }, { ignore: [u] }), (v, y) => (ne(), Dt(ye, null, [rl("div", { ref_key: "fieldContainerRef", ref: c, class: "v-color-field" }, [s(Wr, Z({ ref: "textFieldRef" }, v.$attrs, { class: N(_), color: v.color, density: v.density, hint: v.hint, messages: v.messages, "model-value": N(h), "persistent-hint": v.persistentHint, "persistent-placeholder": v.persistentPlaceholder, placeholder: v.placeholder, readonly: N(x), theme: N(k), "onClick:clear": y[2] || (y[2] = (C) => B("clear")), "onClick:control": y[3] || (y[3] = (C) => V("textField")), onKeyup: y[4] || (y[4] = da((C) => B("keyup"), ["enter"])), "onUpdate:modelValue": $ }), ca({ _: 2 }, [pa(N(l), (C, O) => ({ name: O, fn: oe((M) => [N(l).prepend || N(l)["prepend-inner"] || N(l)["append-inner"] || N(l).append ? Ne("", !0) : je(v.$slots, O, et(Z({ key: 0 }, { ...M })), void 0, !0)]) })), N(l).prepend ? { name: "prepend", fn: oe((C) => [je(v.$slots, "prepend", et(dt({ ...C, toggleColorPicker: B })), void 0, !0)]), key: "0" } : void 0, (v.prependIcon || v.pipSlot === "prepend" && v.pip) && !N(l).prepend ? { name: "prepend", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(w), { onClick: B }), null, 16)) : v.prependIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.prependIcon, iconSize: v.iconSize, onClick: B }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "1" } : void 0, N(l)["prepend-inner"] ? { name: "prepend-inner", fn: oe((C) => [je(v.$slots, "prepend-inner", et(dt({ ...C, toggleColorPicker: B })), void 0, !0)]), key: "2" } : void 0, (v.prependInnerIcon || v.pipSlot === "prepend-inner" && v.pip) && !N(l)["prepend-inner"] ? { name: "prepend-inner", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(w), { onClick: B }), null, 16)) : v.prependInnerIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.prependInnerIcon, iconSize: v.iconSize, onClick: y[0] || (y[0] = (C) => V("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "3" } : void 0, N(l)["append-inner"] ? { name: "append-inner", fn: oe((C) => [je(v.$slots, "append-inner", et(dt({ ...C, toggleColorPicker: B })), void 0, !0)]), key: "4" } : void 0, (v.appendInnerIcon || v.pipSlot === "append-inner" && v.pip) && !N(l)["append-inner"] ? { name: "append-inner", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(w), { onClick: B }), null, 16)) : v.appendInnerIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.appendInnerIcon, iconSize: v.iconSize, onClick: y[1] || (y[1] = (C) => V("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "5" } : void 0, N(l).append ? { name: "append", fn: oe((C) => [je(v.$slots, "append", et(dt({ ...C, toggleColorPicker: B })), void 0, !0)]), key: "6" } : void 0, (v.appendIcon || v.pipSlot === "append" && v.pip) && !N(l).append ? { name: "append", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, N(w), { onClick: B }), null, 16)) : v.appendIcon ? (ne(), ve(ft, { key: 1, color: N(z), icon: v.appendIcon, iconSize: v.iconSize, onClick: B }, null, 8, ["color", "icon", "iconSize"])) : Ne("", !0)]), key: "7" } : void 0, N(l).label || v.label ? { name: "label", fn: oe(() => [N(l).label ? je(v.$slots, "label", { key: 0 }, void 0, !0) : v.label ? (ne(), Dt("div", Ur, [va(fa(v.label) + " ", 1), v.required ? (ne(), Dt("span", qr, "*")) : Ne("", !0)])) : Ne("", !0)]), key: "8" } : void 0]), 1040, ["class", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme"])], 512), (ne(), ve(ma, { to: "body" }, [Xr, s(Te, { defaults: N(i) }, { default: oe(() => {
    var C;
    return [s(rr, Z(o, { ref_key: "cardRef", ref: u, class: N(P), style: N(p), theme: ((C = N(i).VCard) == null ? void 0 : C.theme) ?? N(k), width: N(S).width }), { default: oe(() => {
      var O, M;
      return [s(Lr, { modelValue: N(m), "onUpdate:modelValue": [y[5] || (y[5] = (R) => Ze(m) ? m.value = R : null), $], class: "v-color-selection", disabled: ("readonly" in v ? v.readonly : N(al)) || ((O = N(i).VColorPicker) == null ? void 0 : O.disabled), mode: N(A), theme: ((M = N(i).VColorPicker) == null ? void 0 : M.theme) ?? N(k), "onUpdate:mode": I }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 16, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), [["__scopeId", "data-v-5bdd4871"]]), Yr = Symbol();
function Jr(e = {}) {
  return { install: (t) => {
    t.provide(Yr, e), t.component("VColorField", Gr);
  } };
}
export {
  Gr as VColorField,
  Jr as createVColorField,
  Gr as default,
  Yr as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}.position-elm-helper[data-v-5bdd4871]{background-color:red;border-radius:50%;display:none;height:10px;left:0;position:absolute;top:0;width:10px;z-index:99999999999}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
