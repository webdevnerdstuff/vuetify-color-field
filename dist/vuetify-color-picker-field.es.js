import { Fragment as he, reactive as Jt, computed as f, watchEffect as Qt, toRefs as en, capitalize as tl, warn as Xl, ref as M, unref as P, provide as Ye, inject as fe, shallowRef as le, defineComponent as _t, camelize as nl, h as xt, getCurrentInstance as Gl, watch as J, onScopeDispose as Yl, effectScope as Kl, toRaw as Zl, isRef as Ke, createVNode as s, mergeProps as Z, toRef as G, Text as Jl, openBlock as ne, createBlock as ve, withCtx as oe, normalizeClass as Ql, normalizeStyle as ea, Transition as Vt, onBeforeMount as ll, nextTick as tt, withDirectives as be, resolveDirective as at, vShow as It, onBeforeUnmount as rt, resolveDynamicComponent as ta, readonly as al, onMounted as Bt, TransitionGroup as na, cloneVNode as la, useAttrs as aa, useSlots as ra, createElementBlock as Mt, createElementVNode as rl, withKeys as oa, createSlots as ia, renderList as sa, renderSlot as Me, normalizeProps as Je, createCommentVNode as Pe, guardReactiveProps as ct, createTextVNode as ua, toDisplayString as ca, Teleport as da, pushScopeId as pa, popScopeId as va } from "vue";
import { onClickOutside as fa } from "@vueuse/core";
/**
 * @name vuetify-color-picker-field
 * @version 1.0.0-beta.1
 * @description Vuetify Color Picker Field is a Vuetify VTextField Color Picker Component
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, __USERNAME__
 * @homepage https://webdevnerdstuff.github.io/vuetify-color-picker-field/
 * @repository https://github.com/webdevnerdstuff/vuetify-color-picker-field
 * @license MIT License
 */
const Ne = (e) => {
  const { unit: t = "px", value: n } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, Ee = "v-color-picker-field", ma = { fa: { eyedropper: "fa-solid fa-eyedropper", palette: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { eyedropper: "mdi:mdi-eyedropper", palette: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, ol = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  const r = ma[n == null ? void 0 : n.defaultSet];
  if (!r)
    throw new Error(`VColorPickerField: No VColorPickerField default ${n == null ? void 0 : n.defaultSet} icon set found.`);
  const a = r[l];
  if (!a)
    throw new Error(`VColorPickerField: No ${l} icon found.`);
  return a;
}, tn = typeof window < "u", nn = tn && "IntersectionObserver" in window;
function ln(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => ln(e[l], t[l]));
}
function F(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Xt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Sn(e) {
  return e && "$el" in e ? e.$el : e;
}
const Cn = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 }), ga = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Le(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function yt(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    t.some((o) => o instanceof RegExp ? o.test(a) : o === a) && !(n != null && n.some((o) => o === a)) ? l[a] = e[a] : r[a] = e[a];
  return [l, r];
}
function il(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const sl = /^on[^a-z]/, ha = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Qe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function We(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function wn(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function _n(e, t) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function He() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const r in e)
    l[r] = e[r];
  for (const r in t) {
    const a = e[r], o = t[r];
    Xt(a) && Xt(o) ? l[r] = He(a, o, n) : Array.isArray(a) && Array.isArray(o) && n ? l[r] = n(a, o) : l[r] = o;
  }
  return l;
}
function ul(e) {
  return e.map((t) => t.type === he ? ul(t.children) : t).flat();
}
function Re() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Re.cache.has(e))
    return Re.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Re.cache.set(e, t), t;
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
  const t = Jt({}), n = f(e);
  return Qt(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), en(t);
}
function Gt(e, t) {
  return e.includes(t);
}
Re.cache = /* @__PURE__ */ new Map();
const qe = () => [Function, Array];
function xn(e, t) {
  return !!(e[t = "on" + tl(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
const ba = ["top", "bottom"], ya = ["start", "end", "left", "right"];
function Vn(e, t) {
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
const De = 2.4, In = 0.2126729, Bn = 0.7151522, $n = 0.072175, ka = 0.55, Sa = 0.58, Ca = 0.57, wa = 0.62, dt = 0.03, An = 1.45, _a = 5e-4, xa = 1.25, Va = 1.25, zn = 0.078, On = 12.82051282051282, pt = 0.06, Pn = 1e-3;
function Nn(e, t) {
  const n = (e.r / 255) ** De, l = (e.g / 255) ** De, r = (e.b / 255) ** De, a = (t.r / 255) ** De, o = (t.g / 255) ** De, i = (t.b / 255) ** De;
  let u, d = n * In + l * Bn + r * $n, c = a * In + o * Bn + i * $n;
  if (d <= dt && (d += (dt - d) ** An), c <= dt && (c += (dt - c) ** An), Math.abs(c - d) < _a)
    return 0;
  if (c > d) {
    const p = (c ** ka - d ** Sa) * xa;
    u = p < Pn ? 0 : p < zn ? p - p * On * pt : p - pt;
  } else {
    const p = (c ** wa - d ** Ca) * Va;
    u = p > -Pn ? 0 : p > -zn ? p - p * On * pt : p + pt;
  }
  return 100 * u;
}
function Xe(e) {
  Xl(`Vuetify: ${e}`);
}
const Ia = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ba = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function En(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Ln = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, $a = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => jn({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => jn({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => ye({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => ye({ h: e, s: t, v: n, a: l }) };
function Ve(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Xe(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Ln.test(e)) {
    const { groups: t } = e.match(Ln), { fn: n, values: l } = t, r = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return $a[n](...r);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Xe(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Xe(`'${e}' is not a valid hex(a) color`), fl(t);
  }
  if (typeof e == "object") {
    if (Le(e, ["r", "g", "b"]))
      return e;
    if (Le(e, ["h", "s", "l"]))
      return ye(an(e));
    if (Le(e, ["h", "s", "v"]))
      return ye(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ye(e) {
  const { h: t, s: n, v: l, a: r } = e, a = (i) => {
    const u = (i + t / 60) % 6;
    return l - l * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, o = [a(5), a(3), a(1)].map((i) => Math.round(255 * i));
  return { r: o[0], g: o[1], b: o[2], a: r };
}
function jn(e) {
  return ye(an(e));
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
function dl(e) {
  const { h: t, s: n, v: l, a: r } = e, a = l - l * n / 2;
  return { h: t, s: a === 1 || a === 0 ? 0 : (l - a) / Math.min(a, 1 - a), l: a, a: r };
}
function an(e) {
  const { h: t, s: n, l, a: r } = e, a = l + n * Math.min(l, 1 - l);
  return { h: t, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: r };
}
function pl(e) {
  let { r: t, g: n, b: l, a: r } = e;
  return r === void 0 ? `rgb(${t}, ${n}, ${l})` : `rgba(${t}, ${n}, ${l}, ${r})`;
}
function vl(e) {
  return pl(ye(e));
}
function vt(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function fl(e) {
  e = function(a) {
    return a.startsWith("#") && (a = a.slice(1)), a = a.replace(/([^0-9a-f])/gi, "F"), (a.length === 3 || a.length === 4) && (a = a.split("").map((o) => o + o).join("")), a.length !== 6 && (a = _n(_n(a, 6), 8, "F")), a;
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
function ml(e) {
  return function(t) {
    let { r: n, g: l, b: r, a } = t;
    return `#${[vt(n), vt(l), vt(r), a !== void 0 ? vt(Math.round(255 * a)) : ""].join("")}`;
  }(ye(e));
}
function Rn(e) {
  return function(t) {
    let { r: n, g: l, b: r } = t;
    const a = [0, 0, 0], o = Ba, i = Ia;
    n = o(n / 255), l = o(l / 255), r = o(r / 255);
    for (let u = 0; u < 3; ++u)
      a[u] = i[u][0] * n + i[u][1] * l + i[u][2] * r;
    return a;
  }(Ve(e))[1];
}
function Aa(e, t) {
  const n = Rn(e), l = Rn(t);
  return (Math.max(n, l) + 0.05) / (Math.min(n, l) + 0.05);
}
function N(e, t) {
  return (n) => Object.keys(e).reduce((l, r) => {
    const a = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : { type: e[r] };
    return l[r] = n && r in n ? { ...a, default: n[r] } : a, t && !l[r].source && (l[r].source = t), l;
  }, {});
}
const X = N({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), kt = Symbol.for("vuetify:defaults");
function rn() {
  const e = fe(kt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function At(e, t) {
  const n = rn(), l = M(e), r = f(() => {
    if (P(t == null ? void 0 : t.disabled))
      return n.value;
    const a = P(t == null ? void 0 : t.scoped), o = P(t == null ? void 0 : t.reset), i = P(t == null ? void 0 : t.root);
    if (l.value == null && !(a || o || i))
      return n.value;
    let u = He(l.value, { prev: n.value });
    if (a)
      return u;
    if (o || i) {
      const d = Number(o || 1 / 0);
      for (let c = 0; c <= d && u && "prev" in u; c++)
        u = u.prev;
      return u && typeof i == "string" && i in u && (u = He(He(u, { prev: u }), u[i])), u;
    }
    return u.prev ? He(u.prev, u) : u;
  });
  return Ye(kt, r), r;
}
function za() {
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
      return ((C = A.props) == null ? void 0 : C[S]) !== void 0 || ((x = A.props) == null ? void 0 : x[Re(S)]) !== void 0;
    }(l.vnode, u) ? d : ((p = r.value) == null ? void 0 : p[u]) ?? ((g = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : g[u]) ?? d;
  } }), o = le();
  return Qt(() => {
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
    }(kt, l);
    Ye(kt, f(() => o.value ? He((i == null ? void 0 : i.value) ?? {}, o.value) : i == null ? void 0 : i.value));
  } };
}
function ke(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Xe("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = N(e.props ?? {}, e.name)();
    const t = Object.keys(e.props);
    e.filterProps = function(n) {
      return yt(n, t, ["class", "style"]);
    }, e.props._as = String, e.setup = function(n, l) {
      const r = rn();
      if (!r.value)
        return e._setup(n, l);
      const { props: a, provideSubDefaults: o } = za(n, n._as ?? e.name, r), i = e._setup(a, l);
      return o(), i;
    };
  }
  return e;
}
function W() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? ke : _t)(t);
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return W()({ name: n ?? tl(nl(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...X() }, setup(l, r) {
    let { slots: a } = r;
    return () => {
      var o;
      return xt(l.tag, { class: [e, l.class], style: l.style }, (o = a.default) == null ? void 0 : o.call(a));
    };
  } });
}
function Se(e, t) {
  const n = Gl();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function we() {
  const e = Se(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Re((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let gl = 0, bt = /* @__PURE__ */ new WeakMap();
function ot() {
  const e = Se("getUid");
  if (bt.has(e))
    return bt.get(e);
  {
    const t = gl++;
    return bt.set(e, t), t;
  }
}
function H(e) {
  Se("useRender").render = e;
}
ot.reset = () => {
  gl = 0, bt = /* @__PURE__ */ new WeakMap();
};
const Oa = N({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Yt(e, t) {
  let n;
  function l() {
    n = Kl(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  J(e, (r) => {
    r && !n ? l() : r || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), Yl(() => {
    n == null || n.stop();
  });
}
function Ce(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const a = Se("useProxiedModel"), o = M(e[t] !== void 0 ? e[t] : n), i = Re(t), u = f(i !== t ? () => {
    var c, p, m, g;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) && !((p = a.vnode.props) != null && p.hasOwnProperty(i)) || !((m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)) && !((g = a.vnode.props) != null && g.hasOwnProperty(`onUpdate:${i}`)));
  } : () => {
    var c, p;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) || !((p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${t}`)));
  });
  Yt(() => !u.value, () => {
    J(() => e[t], (c) => {
      o.value = c;
    });
  });
  const d = f({ get() {
    const c = e[t];
    return l(u.value ? c : o.value);
  }, set(c) {
    const p = r(c), m = Zl(u.value ? e[t] : o.value);
    m !== p && l(m) !== c && (o.value = p, a == null || a.emit(`update:${t}`, p));
  } });
  return Object.defineProperty(d, "externalValue", { get: () => u.value ? e[t] : o.value }), d;
}
const Pa = N({ disabled: Boolean, modelValue: { type: Boolean, default: void 0 }, ...Oa() }, "VHover"), Na = W()({ name: "VHover", props: Pa(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = Ce(e, "modelValue"), { runOpenDelay: r, runCloseDelay: a } = function(o, i) {
    const u = {}, d = (c) => () => {
      if (!tn)
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
  return cl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (En(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text) {
          const l = Ve(e.value.background);
          if (l.a == null || l.a === 1) {
            const r = function(a) {
              const o = Math.abs(Nn(Ve(0), Ve(a)));
              return Math.abs(Nn(Ve(16777215), Ve(a))) > Math.min(o, 50) ? "#fff" : "#000";
            }(l);
            n.color = r, n.caretColor = r;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (En(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function Te(e, t) {
  const n = f(() => ({ text: Ke(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: r } = sn(n);
  return { textColorClasses: l, textColorStyles: r };
}
function Ge(e, t) {
  const n = f(() => ({ background: Ke(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: r } = sn(n);
  return { backgroundColorClasses: l, backgroundColorStyles: r };
}
const ae = [String, Function, Object, Array], Ea = Symbol.for("vuetify:icons"), St = N({ icon: { type: ae }, tag: { type: String, required: !0 } }, "icon"), Fn = W()({ name: "VComponentIcon", props: St(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return s(e.tag, null, { default: () => {
      var r;
      return [e.icon ? s(l, null, null) : (r = n.default) == null ? void 0 : r.call(n)];
    } });
  };
} }), La = ke({ name: "VSvgIcon", inheritAttrs: !1, props: St(), setup(e, t) {
  let { attrs: n } = t;
  return () => s(e.tag, Z(n, { style: null }), { default: () => [s("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? s("path", { d: l[0], "fill-opacity": l[1] }, null) : s("path", { d: l }, null)) : s("path", { d: e.icon }, null)])] });
} });
ke({ name: "VLigatureIcon", props: St(), setup: (e) => () => s(e.tag, null, { default: () => [e.icon] }) }), ke({ name: "VClassIcon", props: St(), setup: (e) => () => s(e.tag, { class: e.icon }, null) });
const ja = ["x-small", "small", "default", "large", "x-large"], zt = N({ size: { type: [String, Number], default: "default" } }, "size");
function Ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return cl(() => {
    let n, l;
    return Gt(ja, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: F(e.size), height: F(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const Be = N({ tag: { type: String, default: "div" } }, "tag"), Tn = Symbol.for("vuetify:theme"), me = N({ theme: String }, "theme");
function _e(e) {
  Se("provideTheme");
  const t = fe(Tn, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = f(() => e.theme ?? t.name.value), l = f(() => t.themes.value[n.value]), r = f(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = { ...t, name: n, current: l, themeClasses: r };
  return Ye(Tn, a), a;
}
const Ra = N({ color: String, start: Boolean, end: Boolean, icon: ae, ...X(), ...zt(), ...Be({ tag: "i" }), ...me() }, "VIcon"), Ie = W()({ name: "VIcon", props: Ra(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const r = M(), { themeClasses: a } = _e(e), { iconData: o } = ((c) => {
    const p = fe(Ea);
    if (!p)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: f(() => {
      var C;
      const m = P(c);
      if (!m)
        return { component: Fn };
      let g = m;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (C = p.aliases) == null ? void 0 : C[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${m}"`);
      if (Array.isArray(g))
        return { component: La, icon: g };
      if (typeof g != "string")
        return { component: Fn, icon: g };
      const A = Object.keys(p.sets).find((x) => typeof g == "string" && g.startsWith(`${x}:`)), S = A ? g.slice(A.length + 1) : g;
      return { component: p.sets[A ?? p.defaultSet].component, icon: S };
    }) };
  })(f(() => r.value || e.icon)), { sizeClasses: i } = Ot(e), { textColorClasses: u, textColorStyles: d } = Te(G(e, "color"));
  return H(() => {
    var p, m;
    const c = (p = l.default) == null ? void 0 : p.call(l);
    return c && (r.value = (m = ul(c).filter((g) => g.type === Jl && g.children && typeof g.children == "string")[0]) == null ? void 0 : m.children), s(o.value.component, { tag: e.tag, icon: o.value.icon, class: ["v-icon", "notranslate", a.value, i.value, u.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [i.value ? void 0 : { fontSize: F(e.size), height: F(e.size), width: F(e.size) }, d.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [c] });
  }), {};
} }), ft = _t({ __name: "ColorPickerIcon", props: { color: {}, icon: { default: "" } }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, r = fe(Symbol.for("vuetify:icons")), a = f(() => ol({ icon: l.icon, iconOptions: r, name: "palette" }));
  function o() {
    n("click");
  }
  return (i, u) => (ne(), ve(Na, null, { default: oe(({ isHovering: d, props: c }) => [s(Ie, Z(c, { color: d ? i.color : void 0, icon: P(a), onClick: o }), null, 16, ["color", "icon"])]), _: 1 }));
} }), mt = _t({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: {}, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, { modelValue: r } = en(l), a = f(() => ({ [`${Ee}--pip`]: !0 })), o = f(() => ((c) => {
    const { pipBorder: p, pipBorderRadius: m } = c, g = { backgroundColor: p && p !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return p && p !== "none" && (g.border = p, g.borderRadius = m), g;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), i = fe(Symbol.for("vuetify:icons")), u = f(() => ol({ icon: l.pipIcon, iconOptions: i, name: "pip" }));
  function d() {
    n("click");
  }
  return (c, p) => (ne(), ve(Ie, { class: Ql(P(a)), color: P(r) || "--v-theme-on-surface", icon: P(u), size: c.pipSize, style: ea(P(o)), tag: "div", onClick: d }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), Fa = W()({ name: "VCardActions", props: X(), setup(e, t) {
  let { slots: n } = t;
  return At({ VBtn: { variant: "text" } }), H(() => {
    var l;
    return s("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Ta = on("v-card-subtitle"), Ma = on("v-card-title"), Pt = N({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Nt(e) {
  return { dimensionStyles: f(() => ({ height: F(e.height), maxHeight: F(e.maxHeight), maxWidth: F(e.maxWidth), minHeight: F(e.minHeight), minWidth: F(e.minWidth), width: F(e.width) })) };
}
const hl = N({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...X(), ...Pt() }, "VResponsive"), Mn = W()({ name: "VResponsive", props: hl(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: f(() => {
      const o = Number(a.aspectRatio);
      return o ? { paddingBottom: String(1 / o * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: r } = Nt(e);
  return H(() => {
    var a;
    return s("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [r.value, e.style] }, [s("div", { class: "v-responsive__sizer", style: l.value }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && s("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), un = N({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ue = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: r, ...a } = e, { component: o = Vt, ...i } = typeof l == "object" ? l : {};
  return xt(o, Z(typeof l == "string" ? { name: r ? "" : l } : i, a, { disabled: r }), n);
};
function Dn(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const bl = { mounted: function(e, t) {
  if (!nn)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: r, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, o = new IntersectionObserver(function() {
    var p;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const d = (p = e._observe) == null ? void 0 : p[t.instance.$.uid];
    if (!d)
      return;
    const c = i.some((m) => m.isIntersecting);
    !r || n.quiet && !d.init || n.once && !c && !d.init || r(c, i, u), c && n.once ? Dn(e, t) : d.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: o }, o.observe(e);
}, unmounted: Dn }, Da = N({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...hl(), ...X(), ...un() }, "VImg"), yl = W()({ name: "VImg", directives: { intersect: bl }, props: Da(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const r = le(""), a = M(), o = le(e.eager ? "loading" : "idle"), i = le(), u = le(), d = f(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), c = f(() => d.value.aspect || i.value / u.value || 0);
  function p(y) {
    if ((!e.eager || !y) && (!nn || y || e.eager)) {
      if (o.value = "loading", d.value.lazySrc) {
        const h = new Image();
        h.src = d.value.lazySrc, C(h, null);
      }
      d.value.src && tt(() => {
        var h, $;
        if (n("loadstart", ((h = a.value) == null ? void 0 : h.currentSrc) || d.value.src), ($ = a.value) == null ? void 0 : $.complete) {
          if (a.value.naturalWidth || g(), o.value === "error")
            return;
          c.value || C(a.value, null), m();
        } else
          c.value || C(a.value), A();
      });
    }
  }
  function m() {
    var y;
    A(), o.value = "loaded", n("load", ((y = a.value) == null ? void 0 : y.currentSrc) || d.value.src);
  }
  function g() {
    var y;
    o.value = "error", n("error", ((y = a.value) == null ? void 0 : y.currentSrc) || d.value.src);
  }
  function A() {
    const y = a.value;
    y && (r.value = y.currentSrc || y.src);
  }
  J(() => e.src, () => {
    p(o.value !== "idle");
  }), J(c, (y, h) => {
    !y && h && a.value && C(a.value);
  }), ll(() => p());
  let S = -1;
  function C(y) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const $ = () => {
      clearTimeout(S);
      const { naturalHeight: b, naturalWidth: v } = y;
      b || v ? (i.value = v, u.value = b) : y.complete || o.value !== "loading" || h == null ? (y.currentSrc.endsWith(".svg") || y.currentSrc.startsWith("data:image/svg+xml")) && (i.value = 1, u.value = 1) : S = window.setTimeout($, h);
    };
    $();
  }
  const x = f(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), _ = () => {
    var $;
    if (!d.value.src || o.value === "idle")
      return null;
    const y = s("img", { class: ["v-img__img", x.value], src: d.value.src, srcset: d.value.srcset, alt: e.alt, sizes: e.sizes, ref: a, onLoad: m, onError: g }, null), h = ($ = l.sources) == null ? void 0 : $.call(l);
    return s(Ue, { transition: e.transition, appear: !0 }, { default: () => [be(h ? s("picture", { class: "v-img__picture" }, [h, y]) : y, [[It, o.value === "loaded"]])] });
  }, V = () => s(Ue, { transition: e.transition }, { default: () => [d.value.lazySrc && o.value !== "loaded" && s("img", { class: ["v-img__img", "v-img__img--preload", x.value], src: d.value.lazySrc, alt: e.alt }, null)] }), z = () => l.placeholder ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [(o.value === "loading" || o.value === "error" && !l.error) && s("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, O = () => l.error ? s(Ue, { transition: e.transition, appear: !0 }, { default: () => [o.value === "error" && s("div", { class: "v-img__error" }, [l.error()])] }) : null, I = () => e.gradient ? s("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, B = le(!1);
  {
    const y = J(c, (h) => {
      h && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          B.value = !0;
        });
      }), y());
    });
  }
  return H(() => {
    const [y] = Mn.filterProps(e);
    return be(s(Mn, Z({ class: ["v-img", { "v-img--booting": !B.value }, e.class], style: [{ width: F(e.width === "auto" ? i.value : e.width) }, e.style] }, y, { aspectRatio: c.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => s(he, null, [s(_, null, null), s(V, null, null), s(I, null, null), s(z, null, null), s(O, null, null)]), default: l.default }), [[at("intersect"), { handler: p, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: r, image: a, state: o, naturalWidth: i, naturalHeight: u };
} }), Wa = [null, "default", "comfortable", "compact"], Ze = N({ density: { type: String, default: "default", validator: (e) => Wa.includes(e) } }, "density");
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { densityClasses: f(() => `${t}--density-${e.density}`) };
}
const $e = N({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { roundedClasses: f(() => {
    const n = Ke(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const r of String(n).split(" "))
        l.push(`rounded-${r}`);
    return l;
  }) };
}
const Ha = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function cn(e, t) {
  return s(he, null, [e && s("span", { key: "overlay", class: `${t}__overlay` }, null), s("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const Et = N({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ha.includes(e) } }, "variant");
function dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  const n = f(() => {
    const { variant: a } = P(e);
    return `${t}--variant-${a}`;
  }), { colorClasses: l, colorStyles: r } = sn(f(() => {
    const { variant: a, color: o } = P(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: o };
  }));
  return { colorClasses: l, colorStyles: r, variantClasses: n };
}
const Ua = N({ start: Boolean, end: Boolean, icon: ae, image: String, ...X(), ...Ze(), ...$e(), ...zt(), ...Be(), ...me(), ...Et({ variant: "flat" }) }, "VAvatar"), Wn = W()({ name: "VAvatar", props: Ua(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { colorClasses: r, colorStyles: a, variantClasses: o } = dn(e), { densityClasses: i } = it(e), { roundedClasses: u } = Ae(e), { sizeClasses: d, sizeStyles: c } = Ot(e);
  return H(() => s(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, r.value, i.value, u.value, d.value, o.value, e.class], style: [a.value, c.value, e.style] }, { default: () => {
    var p;
    return [e.image ? s(yl, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? s(Ie, { key: "icon", icon: e.icon }, null) : (p = n.default) == null ? void 0 : p.call(n), cn(!1, "v-avatar")];
  } })), {};
} }), qa = N({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Fe = W(!1)({ name: "VDefaultsProvider", props: qa(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: r, reset: a, root: o, scoped: i } = en(e);
  return At(l, { reset: a, root: o, scoped: i, disabled: r }), () => {
    var u;
    return (u = n.default) == null ? void 0 : u.call(n);
  };
} }), Xa = N({ appendAvatar: String, appendIcon: ae, prependAvatar: String, prependIcon: ae, subtitle: String, title: String, ...X(), ...Ze() }, "VCardItem"), Ga = W()({ name: "VCardItem", props: Xa(), setup(e, t) {
  let { slots: n } = t;
  return H(() => {
    var d;
    const l = !(!e.prependAvatar && !e.prependIcon), r = !(!l && !n.prepend), a = !(!e.appendAvatar && !e.appendIcon), o = !(!a && !n.append), i = !(!e.title && !n.title), u = !(!e.subtitle && !n.subtitle);
    return s("div", { class: ["v-card-item", e.class], style: e.style }, [r && s("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? s(Fe, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && s(Wn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), s("div", { class: "v-card-item__content" }, [i && s(Ma, { key: "title" }, { default: () => {
      var c;
      return [((c = n.title) == null ? void 0 : c.call(n)) ?? e.title];
    } }), u && s(Ta, { key: "subtitle" }, { default: () => {
      var c;
      return [((c = n.subtitle) == null ? void 0 : c.call(n)) ?? e.subtitle];
    } }), (d = n.default) == null ? void 0 : d.call(n)]), o && s("div", { key: "append", class: "v-card-item__append" }, [n.append ? s(Fe, { key: "append-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : a && s(Wn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), Ya = on("v-card-text"), Lt = N({ border: [Boolean, Number, String] }, "border");
function jt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { borderClasses: f(() => {
    const n = Ke(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const r of String(n).split(" "))
        l.push(`border-${r}`);
    return l;
  }) };
}
const st = N({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function ut(e) {
  return { elevationClasses: f(() => {
    const t = Ke(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
function kl(e, t) {
  const n = M(), l = le(!1);
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
const Sl = Symbol.for("vuetify:locale");
function ze() {
  const e = fe(Sl);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Hn = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Rt = N({ location: String }, "location");
function Ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = ze();
  return { locationStyles: f(() => {
    if (!e.location)
      return {};
    const { side: a, align: o } = function(d, c) {
      let [p, m] = d.split(" ");
      return m || (m = Gt(ba, p) ? "start" : Gt(ya, p) ? "top" : "center"), { side: Vn(p, c), align: Vn(m, c) };
    }(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function i(d) {
      return n ? n(d) : 0;
    }
    const u = {};
    return a !== "center" && (t ? u[Hn[a]] = `calc(100% - ${i(a)}px)` : u[a] = 0), o !== "center" ? t ? u[Hn[o]] = `calc(100% - ${i(o)}px)` : u[o] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), u;
  }) };
}
const Ka = N({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...X(), ...Rt({ location: "top" }), ...$e(), ...Be(), ...me() }, "VProgressLinear"), Za = W()({ name: "VProgressLinear", props: Ka(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = Ce(e, "modelValue"), { isRtl: r, rtlClasses: a } = ze(), { themeClasses: o } = _e(e), { locationStyles: i } = Ft(e), { textColorClasses: u, textColorStyles: d } = Te(e, "color"), { backgroundColorClasses: c, backgroundColorStyles: p } = Ge(f(() => e.bgColor || e.color)), { backgroundColorClasses: m, backgroundColorStyles: g } = Ge(e, "color"), { roundedClasses: A } = Ae(e), { intersectionRef: S, isIntersecting: C } = kl(), x = f(() => parseInt(e.max, 10)), _ = f(() => parseInt(e.height, 10)), V = f(() => parseFloat(e.bufferValue) / x.value * 100), z = f(() => parseFloat(l.value) / x.value * 100), O = f(() => r.value !== e.reverse), I = f(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), B = f(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function y(h) {
    if (!S.value)
      return;
    const { left: $, right: b, width: v } = S.value.getBoundingClientRect(), k = O.value ? v - h.clientX + (b - v) : h.clientX - $;
    l.value = Math.round(k / v * x.value);
  }
  return H(() => s(e.tag, { ref: S, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && C.value, "v-progress-linear--reverse": O.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, A.value, o.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? F(_.value) : 0, "--v-progress-linear-height": F(_.value), ...i.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : z.value, onClick: e.clickable && y }, { default: () => [e.stream && s("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...d.value, [O.value ? "left" : "right"]: F(-_.value), borderTop: `${F(_.value / 2)} dotted`, opacity: B.value, top: `calc(50% - ${F(_.value / 4)})`, width: F(100 - V.value, "%"), "--v-progress-linear-stream-to": F(_.value * (O.value ? 1 : -1)) } }, null), s("div", { class: ["v-progress-linear__background", c.value], style: [p.value, { opacity: B.value, width: F(e.stream ? V.value : 100, "%") }] }, null), s(Vt, { name: I.value }, { default: () => [e.indeterminate ? s("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((h) => s("div", { key: h, class: ["v-progress-linear__indeterminate", h, m.value], style: g.value }, null))]) : s("div", { class: ["v-progress-linear__determinate", m.value], style: [g.value, { width: F(z.value, "%") }] }, null)] }), n.default && s("div", { class: "v-progress-linear__content" }, [n.default({ value: z.value, buffer: V.value })])] })), {};
} }), pn = N({ loading: [Boolean, String] }, "loader");
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { loaderClasses: f(() => ({ [`${t}--loading`]: e.loading })) };
}
function Cl(e, t) {
  var l;
  let { slots: n } = t;
  return s("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || s(Za, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Ja = ["static", "relative", "fixed", "absolute", "sticky"], fn = N({ position: { type: String, validator: (e) => Ja.includes(e) } }, "position");
function mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  return { positionClasses: f(() => e.position ? `${t}--${e.position}` : void 0) };
}
function wl(e, t) {
  const n = ta("RouterLink"), l = f(() => !(!e.href && !e.to)), r = f(() => (l == null ? void 0 : l.value) || xn(t, "click") || xn(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: r, href: G(e, "href") };
  const a = e.to ? n.useLink(e) : void 0;
  return { isLink: l, isClickable: r, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && f(() => {
    var o, i;
    return e.exact ? (o = a.isExactActive) == null ? void 0 : o.value : (i = a.isActive) == null ? void 0 : i.value;
  }), href: f(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const _l = N({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router"), Kt = Symbol("rippleStop"), Qa = 80;
function Un(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Zt(e) {
  return e.constructor.name === "TouchEvent";
}
function xl(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ct = { show(e, t) {
  var g;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
    return;
  const l = document.createElement("span"), r = document.createElement("span");
  l.appendChild(r), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: a, scale: o, x: i, y: u, centerX: d, centerY: c } = function(A, S) {
    var B;
    let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = 0, _ = 0;
    if (!xl(A)) {
      const y = S.getBoundingClientRect(), h = Zt(A) ? A.touches[A.touches.length - 1] : A;
      x = h.clientX - y.left, _ = h.clientY - y.top;
    }
    let V = 0, z = 0.3;
    (B = S._ripple) != null && B.circle ? (z = 0.15, V = S.clientWidth / 2, V = C.center ? V : V + Math.sqrt((x - V) ** 2 + (_ - V) ** 2) / 4) : V = Math.sqrt(S.clientWidth ** 2 + S.clientHeight ** 2) / 2;
    const O = (S.clientWidth - 2 * V) / 2 + "px", I = (S.clientHeight - 2 * V) / 2 + "px";
    return { radius: V, scale: z, x: C.center ? O : x - V + "px", y: C.center ? I : _ - V + "px", centerX: O, centerY: I };
  }(e, t, n), p = 2 * a + "px";
  r.className = "v-ripple__animation", r.style.width = p, r.style.height = p, t.appendChild(l);
  const m = window.getComputedStyle(t);
  m && m.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), Un(r, `translate(${i}, ${u}) scale3d(${o},${o},${o})`), r.dataset.activated = String(performance.now()), setTimeout(() => {
    r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), Un(r, `translate(${d}, ${c}) scale3d(1,1,1)`);
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
function Vl(e) {
  return e === void 0 || !!e;
}
function nt(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[Kt]) {
    if (e[Kt] = !0, Zt(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || xl(e), n._ripple.class && (t.class = n._ripple.class), Zt(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Ct.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Qa);
    } else
      Ct.show(e, n, t);
  }
}
function qn(e) {
  e[Kt] = !0;
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
    }), Ct.hide(t);
  }
}
function Il(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let lt = !1;
function Bl(e) {
  lt || e.keyCode !== Cn.enter && e.keyCode !== Cn.space || (lt = !0, nt(e));
}
function $l(e) {
  lt = !1, se(e);
}
function Al(e) {
  lt && (lt = !1, se(e));
}
function Xn(e, t, n) {
  const { value: l, modifiers: r } = t, a = Vl(l);
  if (a || Ct.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = r.center, e._ripple.circle = r.circle, Xt(l) && l.class && (e._ripple.class = l.class), a && !n) {
    if (r.stop)
      return e.addEventListener("touchstart", qn, { passive: !0 }), void e.addEventListener("mousedown", qn);
    e.addEventListener("touchstart", nt, { passive: !0 }), e.addEventListener("touchend", se, { passive: !0 }), e.addEventListener("touchmove", Il, { passive: !0 }), e.addEventListener("touchcancel", se), e.addEventListener("mousedown", nt), e.addEventListener("mouseup", se), e.addEventListener("mouseleave", se), e.addEventListener("keydown", Bl), e.addEventListener("keyup", $l), e.addEventListener("blur", Al), e.addEventListener("dragstart", se, { passive: !0 });
  } else
    !a && n && zl(e);
}
function zl(e) {
  e.removeEventListener("mousedown", nt), e.removeEventListener("touchstart", nt), e.removeEventListener("touchend", se), e.removeEventListener("touchmove", Il), e.removeEventListener("touchcancel", se), e.removeEventListener("mouseup", se), e.removeEventListener("mouseleave", se), e.removeEventListener("keydown", Bl), e.removeEventListener("keyup", $l), e.removeEventListener("dragstart", se), e.removeEventListener("blur", Al);
}
const gn = { mounted: function(e, t) {
  Xn(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, zl(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Xn(e, t, Vl(t.oldValue));
} }, er = N({ appendAvatar: String, appendIcon: ae, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ae, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Lt(), ...X(), ...Ze(), ...Pt(), ...st(), ...pn(), ...Rt(), ...fn(), ...$e(), ..._l(), ...Be(), ...me(), ...Et({ variant: "elevated" }) }, "VCard"), tr = W()({ name: "VCard", directives: { Ripple: gn }, props: er(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = _e(e), { borderClasses: a } = jt(e), { colorClasses: o, colorStyles: i, variantClasses: u } = dn(e), { densityClasses: d } = it(e), { dimensionStyles: c } = Nt(e), { elevationClasses: p } = ut(e), { loaderClasses: m } = vn(e), { locationStyles: g } = Ft(e), { positionClasses: A } = mn(e), { roundedClasses: S } = Ae(e), C = wl(e, n), x = f(() => e.link !== !1 && C.isLink.value), _ = f(() => !e.disabled && e.link !== !1 && (e.link || C.isClickable.value));
  return H(() => {
    const V = x.value ? "a" : e.tag, z = !(!l.title && !e.title), O = !(!l.subtitle && !e.subtitle), I = z || O, B = !!(l.append || e.appendAvatar || e.appendIcon), y = !!(l.prepend || e.prependAvatar || e.prependIcon), h = !(!l.image && !e.image), $ = I || y || B, b = !(!l.text && !e.text);
    return be(s(V, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": _.value }, r.value, a.value, o.value, d.value, p.value, m.value, A.value, S.value, u.value, e.class], style: [i.value, c.value, g.value, e.style], href: C.href.value, onClick: _.value && C.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var v;
      return [h && s("div", { key: "image", class: "v-card__image" }, [l.image ? s(Fe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : s(yl, { key: "image-img", cover: !0, src: e.image }, null)]), s(Cl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), $ && s(Ga, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), b && s(Ya, { key: "text" }, { default: () => {
        var k;
        return [((k = l.text) == null ? void 0 : k.call(l)) ?? e.text];
      } }), (v = l.default) == null ? void 0 : v.call(l), l.actions && s(Fa, null, { default: l.actions }), cn(_.value, "v-card")];
    } }), [[at("ripple"), _.value && e.ripple]]);
  }), {};
} });
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = M(), l = M();
  if (tn) {
    const r = new ResizeObserver((a) => {
      e == null || e(a, r), a.length && (l.value = t === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    rt(() => {
      r.disconnect();
    }), J(n, (a, o) => {
      o && (r.unobserve(Sn(o)), l.value = void 0), a && r.observe(Sn(a));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: al(l) };
}
const nr = ke({ name: "VColorPickerCanvas", props: N({ color: { type: Object }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...X() }, "VColorPickerCanvas")(), emits: { "update:color": (e) => !0, "update:position": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = le(!1), r = M(), a = le(parseFloat(e.width)), o = le(parseFloat(e.height)), i = M({ x: 0, y: 0 }), u = f({ get: () => i.value, set(S) {
    var _, V;
    if (!r.value)
      return;
    const { x: C, y: x } = S;
    i.value = S, n("update:color", { h: ((_ = e.color) == null ? void 0 : _.h) ?? 0, s: We(C, 0, a.value) / a.value, v: 1 - We(x, 0, o.value) / o.value, a: ((V = e.color) == null ? void 0 : V.a) ?? 1 });
  } }), d = f(() => {
    const { x: S, y: C } = u.value, x = parseInt(e.dotSize, 10) / 2;
    return { width: F(e.dotSize), height: F(e.dotSize), transform: `translate(${F(S - x)}, ${F(C - x)})` };
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
      const { left: z, top: O, width: I, height: B } = V;
      u.value = { x: We(x - z, 0, I), y: We(_ - O, 0, B) };
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
  }, { deep: !0, immediate: !0 }), Bt(() => A()), H(() => s("div", { ref: c, class: ["v-color-picker-canvas", e.class], style: e.style, onMousedown: p, onTouchstartPassive: p }, [s("canvas", { ref: r, width: a.value, height: o.value }, null), e.color && s("div", { class: ["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }], style: d.value }, null)])), {};
} }), Pl = N({ divided: Boolean, ...Lt(), ...X(), ...Ze(), ...st(), ...$e(), ...Be(), ...me(), ...Et() }, "VBtnGroup"), Gn = W()({ name: "VBtnGroup", props: Pl(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { densityClasses: r } = it(e), { borderClasses: a } = jt(e), { elevationClasses: o } = ut(e), { roundedClasses: i } = Ae(e);
  At({ VBtn: { height: "auto", color: G(e, "color"), density: G(e, "density"), flat: !0, variant: G(e, "variant") } }), H(() => s(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, r.value, o.value, i.value, e.class], style: e.style }, n));
} }), lr = N({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ar = N({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function rr(e, t) {
  let n = !1;
  const l = Jt([]), r = Ce(e, "modelValue", [], (d) => d == null ? [] : Yn(l, Qe(d)), (d) => {
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
    if (e.multiple && Xe('This method is not supported when using "multiple" prop'), r.value.length) {
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
  Bt(() => {
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
    const m = Yn(c, [p]);
    return m.length ? c.findIndex((g) => g.id === m[0]) : -1;
  }(l, d) };
  return Ye(t, u), u;
}
function Yn(e, t) {
  const n = [];
  return t.forEach((l) => {
    const r = e.find((o) => ln(l, o.value)), a = e[l];
    (r == null ? void 0 : r.value) != null ? n.push(r.id) : a != null && n.push(a.id);
  }), n;
}
const Nl = Symbol.for("vuetify:v-btn-toggle"), or = N({ ...Pl(), ...lr() }, "VBtnToggle");
W()({ name: "VBtnToggle", props: or(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: r, prev: a, select: o, selected: i } = rr(e, Nl);
  return H(() => {
    const [u] = Gn.filterProps(e);
    return s(Gn, Z({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var d;
      return [(d = n.default) == null ? void 0 : d.call(n, { isSelected: l, next: r, prev: a, select: o, selected: i })];
    } });
  }), { next: r, prev: a, select: o };
} });
const ir = N({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...X(), ...zt(), ...Be({ tag: "div" }), ...me() }, "VProgressCircular"), sr = W()({ name: "VProgressCircular", props: ir(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, r = M(), { themeClasses: a } = _e(e), { sizeClasses: o, sizeStyles: i } = Ot(e), { textColorClasses: u, textColorStyles: d } = Te(G(e, "color")), { textColorClasses: c, textColorStyles: p } = Te(G(e, "bgColor")), { intersectionRef: m, isIntersecting: g } = kl(), { resizeRef: A, contentRect: S } = Ol(), C = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = f(() => Number(e.width)), _ = f(() => i.value ? Number(e.size) : S.value ? S.value.width : Math.max(x.value, 32)), V = f(() => 20 / (1 - x.value / _.value) * 2), z = f(() => x.value / _.value * V.value), O = f(() => F((100 - C.value) / 100 * l));
  return Qt(() => {
    m.value = r.value, A.value = r.value;
  }), H(() => s(e.tag, { ref: r, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, o.value, u.value, e.class], style: [i.value, d.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : C.value }, { default: () => [s("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${V.value} ${V.value}` }, [s("circle", { class: ["v-progress-circular__underlay", c.value], style: p.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": z.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), s("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": z.value, "stroke-dasharray": l, "stroke-dashoffset": O.value }, null)]), n.default && s("div", { class: "v-progress-circular__content" }, [n.default({ value: C.value })])] })), {};
} }), ur = N({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Nl }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ae, appendIcon: ae, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Lt(), ...X(), ...Ze(), ...Pt(), ...st(), ...ar(), ...pn(), ...Rt(), ...fn(), ...$e(), ..._l(), ...zt(), ...Be({ tag: "button" }), ...me(), ...Et({ variant: "elevated" }) }, "VBtn"), cr = W()({ name: "VBtn", directives: { Ripple: gn }, props: ur(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = _e(e), { borderClasses: a } = jt(e), { colorClasses: o, colorStyles: i, variantClasses: u } = dn(e), { densityClasses: d } = it(e), { dimensionStyles: c } = Nt(e), { elevationClasses: p } = ut(e), { loaderClasses: m } = vn(e), { locationStyles: g } = Ft(e), { positionClasses: A } = mn(e), { roundedClasses: S } = Ae(e), { sizeClasses: C, sizeStyles: x } = Ot(e), _ = function(h, $) {
    let b = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    const v = Se("useGroupItem");
    if (!v)
      throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const k = ot();
    Ye(Symbol.for(`${$.description}:id`), k);
    const w = fe($, null);
    if (!w) {
      if (!b)
        return w;
      throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${$.description}`);
    }
    const E = G(h, "value"), R = f(() => !(!w.disabled.value && !h.disabled));
    w.register({ id: k, value: E, disabled: R }, v), rt(() => {
      w.unregister(k);
    });
    const j = f(() => w.isSelected(k)), q = f(() => j.value && [w.selectedClass.value, h.selectedClass]);
    return J(j, (T) => {
      v.emit("group:selected", { value: T });
    }), { id: k, isSelected: j, toggle: () => w.select(k, !j.value), select: (T) => w.select(k, T), selectedClass: q, value: E, disabled: R, group: w };
  }(e, e.symbol, !1), V = wl(e, n), z = f(() => {
    var h;
    return e.active !== void 0 ? e.active : V.isLink.value ? (h = V.isActive) == null ? void 0 : h.value : _ == null ? void 0 : _.isSelected.value;
  }), O = f(() => (_ == null ? void 0 : _.disabled.value) || e.disabled), I = f(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), B = f(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function y(h) {
    var $;
    O.value || V.isLink.value && (h.metaKey || h.ctrlKey || h.shiftKey || h.button !== 0 || n.target === "_blank") || (($ = V.navigate) == null || $.call(V, h), _ == null || _.toggle());
  }
  return function(h, $) {
    J(() => {
      var b;
      return (b = h.isActive) == null ? void 0 : b.value;
    }, (b) => {
      h.isLink.value && b && $ && tt(() => {
        $(!0);
      });
    }, { immediate: !0 });
  }(V, _ == null ? void 0 : _.select), H(() => {
    var w, E;
    const h = V.isLink.value ? "a" : e.tag, $ = !(!e.prependIcon && !l.prepend), b = !(!e.appendIcon && !l.append), v = !(!e.icon || e.icon === !0), k = (_ == null ? void 0 : _.isSelected.value) && (!V.isLink.value || ((w = V.isActive) == null ? void 0 : w.value)) || !_ || ((E = V.isActive) == null ? void 0 : E.value);
    return be(s(h, { type: h === "a" ? void 0 : "button", class: ["v-btn", _ == null ? void 0 : _.selectedClass.value, { "v-btn--active": z.value, "v-btn--block": e.block, "v-btn--disabled": O.value, "v-btn--elevated": I.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, r.value, a.value, k ? o.value : void 0, d.value, p.value, m.value, A.value, S.value, C.value, u.value, e.class], style: [k ? i.value : void 0, c.value, g.value, x.value, e.style], disabled: O.value || void 0, href: V.href.value, onClick: y, value: B.value }, { default: () => {
      var R;
      return [cn(!0, "v-btn"), !e.icon && $ && s("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? s(Fe, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : s(Ie, { key: "prepend-icon", icon: e.prependIcon }, null)]), s("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && v ? s(Ie, { key: "content-icon", icon: e.icon }, null) : s(Fe, { key: "content-defaults", disabled: !v, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var j;
        return [((j = l.default) == null ? void 0 : j.call(l)) ?? e.text];
      } })]), !e.icon && b && s("span", { key: "append", class: "v-btn__append" }, [l.append ? s(Fe, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : s(Ie, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && s("span", { key: "loader", class: "v-btn__loader" }, [((R = l.loader) == null ? void 0 : R.call(l)) ?? s(sr, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[at("ripple"), !O.value && e.ripple, null]]);
  }), {};
} }), et = { h: 0, s: 0, v: 1, a: 1 }, Wt = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }) }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }) }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: ye, from: $t }, Ht = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }) }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.s) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }) }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.l) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: dl, from: an }, Kn = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t }], to: ml, from: function(e) {
  return $t(fl(e));
} };
var el;
const je = { rgb: { ...Wt, inputs: (el = Wt.inputs) == null ? void 0 : el.slice(0, 3) }, rgba: Wt, hsl: { ...Ht, inputs: Ht.inputs.slice(0, 3) }, hsla: Ht, hex: { ...Kn, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t }] }, hexa: Kn }, dr = (e) => {
  let { label: t, ...n } = e;
  return s("div", { class: "v-color-picker-edit__input" }, [s("input", n, null), s("span", null, [t])]);
}, pr = ke({ name: "VColorPickerEdit", props: N({ color: Object, disabled: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(je).includes(e) }, modes: { type: Array, default: () => Object.keys(je), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(je).includes(t)) }, ...X() }, "VColorPickerEdit")(), emits: { "update:color": (e) => !0, "update:mode": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = f(() => e.modes.map((a) => ({ ...je[a], name: a }))), r = f(() => {
    var i;
    const a = l.value.find((u) => u.name === e.mode);
    if (!a)
      return [];
    const o = e.color ? a.to(e.color) : null;
    return (i = a.inputs) == null ? void 0 : i.map((u) => {
      let { getValue: d, getColor: c, ...p } = u;
      return { ...a.inputProps, ...p, disabled: e.disabled, value: o && d(o), onChange: (m) => {
        const g = m.target;
        g && n("update:color", a.from(c(o ?? et, g.value)));
      } };
    });
  });
  return H(() => {
    var a;
    return s("div", { class: ["v-color-picker-edit", e.class], style: e.style }, [(a = r.value) == null ? void 0 : a.map((o) => s(dr, o, null)), l.value.length > 1 && s(cr, { icon: "$unfold", size: "x-small", variant: "plain", onClick: () => {
      const o = l.value.findIndex((i) => i.name === e.mode);
      n("update:mode", l.value[(o + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), hn = Symbol.for("vuetify:v-slider"), vr = N({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: !1, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, ...$e(), ...st({ elevation: 2 }) }, "Slider"), fr = (e) => {
  let { props: t, steps: n, onSliderStart: l, onSliderMove: r, onSliderEnd: a, getActiveThumb: o } = e;
  const { isRtl: i } = ze(), u = G(t, "reverse"), d = f(() => t.direction === "vertical"), c = f(() => d.value !== u.value), { min: p, max: m, step: g, decimals: A, roundValue: S } = n, C = f(() => parseInt(t.thumbSize, 10)), x = f(() => parseInt(t.tickSize, 10)), _ = f(() => parseInt(t.trackSize, 10)), V = f(() => (m.value - p.value) / g.value), z = G(t, "disabled"), O = f(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), I = f(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), B = f(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), y = le(!1), h = le(0), $ = M(), b = M();
  function v(L) {
    var xe;
    const D = t.direction === "vertical", ge = D ? "top" : "left", ee = D ? "height" : "width", te = D ? "clientY" : "clientX", { [ge]: re, [ee]: Y } = (xe = $.value) == null ? void 0 : xe.$el.getBoundingClientRect(), K = function(pe, Oe) {
      return "touches" in pe && pe.touches.length ? pe.touches[0][Oe] : "changedTouches" in pe && pe.changedTouches.length ? pe.changedTouches[0][Oe] : pe[Oe];
    }(L, te);
    let de = Math.min(Math.max((K - re - h.value) / Y, 0), 1) || 0;
    return (D ? c.value : c.value !== i.value) && (de = 1 - de), S(p.value + de * (m.value - p.value));
  }
  const k = (L) => {
    a({ value: v(L) }), y.value = !1, h.value = 0;
  }, w = (L) => {
    b.value = o(L), b.value && (b.value.focus(), y.value = !0, b.value.contains(L.target) ? h.value = function(D, ge, ee) {
      const te = ee === "vertical", re = ge.getBoundingClientRect(), Y = "touches" in D ? D.touches[0] : D;
      return te ? Y.clientY - (re.top + re.height / 2) : Y.clientX - (re.left + re.width / 2);
    }(L, b.value, t.direction) : (h.value = 0, r({ value: v(L) })), l({ value: v(L) }));
  }, E = { passive: !0, capture: !0 };
  function R(L) {
    r({ value: v(L) });
  }
  function j(L) {
    L.stopPropagation(), L.preventDefault(), k(L), window.removeEventListener("mousemove", R, E), window.removeEventListener("mouseup", j);
  }
  function q(L) {
    var D;
    k(L), window.removeEventListener("touchmove", R, E), (D = L.target) == null || D.removeEventListener("touchend", q);
  }
  const T = (L) => {
    const D = (L - p.value) / (m.value - p.value) * 100;
    return We(isNaN(D) ? 0 : D, 0, 100);
  }, U = G(t, "showTicks"), Q = f(() => U.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((L) => ({ value: L, position: T(L), label: L.toString() })) : Object.keys(t.ticks).map((L) => ({ value: parseFloat(L), position: T(parseFloat(L)), label: t.ticks[L] })) : V.value !== 1 / 0 ? function(L) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({ length: L }, (ge, ee) => D + ee);
  }(V.value + 1).map((L) => {
    const D = p.value + L * g.value;
    return { value: D, position: T(D) };
  }) : [] : []), ue = f(() => Q.value.some((L) => {
    let { label: D } = L;
    return !!D;
  })), ce = { activeThumbRef: b, color: G(t, "color"), decimals: A, disabled: z, direction: G(t, "direction"), elevation: G(t, "elevation"), hasLabels: ue, isReversed: u, indexFromEnd: c, min: p, max: m, mousePressed: y, numTicks: V, onSliderMousedown: function(L) {
    L.preventDefault(), w(L), window.addEventListener("mousemove", R, E), window.addEventListener("mouseup", j, { passive: !1 });
  }, onSliderTouchstart: function(L) {
    var D;
    w(L), window.addEventListener("touchmove", R, E), (D = L.target) == null || D.addEventListener("touchend", q, { passive: !1 });
  }, parsedTicks: Q, parseMouseMove: v, position: T, readonly: G(t, "readonly"), rounded: G(t, "rounded"), roundValue: S, showTicks: U, startOffset: h, step: g, thumbSize: C, thumbColor: O, thumbLabel: G(t, "thumbLabel"), ticks: G(t, "ticks"), tickSize: x, trackColor: I, trackContainerRef: $, trackFillColor: B, trackSize: _, vertical: d };
  return Ye(hn, ce), ce;
}, mr = N({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function ie(e, t, n) {
  return W()({ name: e, props: mr({ mode: n, origin: t }), setup(l, r) {
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
      const i = l.group ? na : Vt;
      return xt(i, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : o }, a.default);
    };
  } });
}
function El(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return W()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, r) {
    let { slots: a } = r;
    return () => xt(Vt, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, a.default);
  } });
}
function Ll() {
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
const gr = ie("scale-transition");
ie("scroll-x-transition"), ie("scroll-x-reverse-transition"), ie("scroll-y-transition"), ie("scroll-y-reverse-transition"), ie("slide-x-transition"), ie("slide-x-reverse-transition");
const jl = ie("slide-y-transition");
ie("slide-y-reverse-transition"), El("expand-transition", Ll());
const hr = El("expand-x-transition", Ll("", !0)), br = N({ focused: Boolean, max: { type: Number, required: !0 }, min: { type: Number, required: !0 }, modelValue: { type: Number, required: !0 }, position: { type: Number, required: !0 }, ripple: { type: [Boolean, Object], default: !0 }, ...X() }, "VSliderThumb"), yr = W()({ name: "VSliderThumb", directives: { Ripple: gn }, props: br(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = fe(hn), { isRtl: a, rtlClasses: o } = ze();
  if (!r)
    throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { thumbColor: i, step: u, disabled: d, thumbSize: c, thumbLabel: p, direction: m, isReversed: g, vertical: A, readonly: S, elevation: C, mousePressed: x, decimals: _, indexFromEnd: V } = r, { textColorClasses: z, textColorStyles: O } = Te(i), { pageup: I, pagedown: B, end: y, home: h, left: $, right: b, down: v, up: k } = ga, w = [I, B, y, h, $, b, v, k], E = f(() => u.value ? [1, 2, 3] : [1, 5, 10]);
  function R(j) {
    const q = function(T, U) {
      if (!w.includes(T.key))
        return;
      T.preventDefault();
      const Q = u.value || 0.1, ue = (e.max - e.min) / Q;
      if ([$, b, v, k].includes(T.key)) {
        const ce = (A.value ? [a.value ? $ : b, g.value ? v : k] : V.value !== a.value ? [$, k] : [b, k]).includes(T.key) ? 1 : -1, L = T.shiftKey ? 2 : T.ctrlKey ? 1 : 0;
        U += ce * Q * E.value[L];
      } else
        T.key === h ? U = e.min : T.key === y ? U = e.max : U -= (T.key === B ? 1 : -1) * Q * (ue > 100 ? ue / 10 : 10);
      return Math.max(e.min, Math.min(e.max, U));
    }(j, e.modelValue);
    q != null && l("update:modelValue", q);
  }
  return H(() => {
    const j = F(V.value ? 100 - e.position : e.position, "%"), { elevationClasses: q } = ut(f(() => d.value ? void 0 : C.value));
    return s("div", { class: ["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && x.value }, e.class, o.value], style: [{ "--v-slider-thumb-position": j, "--v-slider-thumb-size": F(c.value) }, e.style], role: "slider", tabindex: d.value ? -1 : 0, "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.modelValue, "aria-readonly": !!S.value, "aria-orientation": m.value, onKeydown: S.value ? void 0 : R }, [s("div", { class: ["v-slider-thumb__surface", z.value, q.value], style: { ...O.value } }, null), be(s("div", { class: ["v-slider-thumb__ripple", z.value], style: O.value }, null), [[at("ripple"), e.ripple, null, { circle: !0, center: !0 }]]), s(gr, { origin: "bottom center" }, { default: () => {
      var T;
      return [be(s("div", { class: "v-slider-thumb__label-container" }, [s("div", { class: ["v-slider-thumb__label"] }, [s("div", null, [((T = n["thumb-label"]) == null ? void 0 : T.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(u.value ? _.value : 1)])])]), [[It, p.value && e.focused || p.value === "always"]])];
    } })]);
  }), {};
} }), kr = N({ start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...X() }, "VSliderTrack"), Sr = W()({ name: "VSliderTrack", props: kr(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const l = fe(hn);
  if (!l)
    throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: r, parsedTicks: a, rounded: o, showTicks: i, tickSize: u, trackColor: d, trackFillColor: c, trackSize: p, vertical: m, min: g, max: A, indexFromEnd: S } = l, { roundedClasses: C } = Ae(o), { backgroundColorClasses: x, backgroundColorStyles: _ } = Ge(c), { backgroundColorClasses: V, backgroundColorStyles: z } = Ge(d), O = f(() => `inset-${m.value ? "block" : "inline"}-${S.value ? "end" : "start"}`), I = f(() => m.value ? "height" : "width"), B = f(() => ({ [O.value]: "0%", [I.value]: "100%" })), y = f(() => e.stop - e.start), h = f(() => ({ [O.value]: F(e.start, "%"), [I.value]: F(y.value, "%") })), $ = f(() => i.value ? (m.value ? a.value.slice().reverse() : a.value).map((b, v) => {
    var w;
    const k = b.value !== g.value && b.value !== A.value ? F(b.position, "%") : void 0;
    return s("div", { key: b.value, class: ["v-slider-track__tick", { "v-slider-track__tick--filled": b.position >= e.start && b.position <= e.stop, "v-slider-track__tick--first": b.value === g.value, "v-slider-track__tick--last": b.value === A.value }], style: { [O.value]: k } }, [(b.label || n["tick-label"]) && s("div", { class: "v-slider-track__tick-label" }, [((w = n["tick-label"]) == null ? void 0 : w.call(n, { tick: b, index: v })) ?? b.label])]);
  }) : []);
  return H(() => s("div", { class: ["v-slider-track", C.value, e.class], style: [{ "--v-slider-track-size": F(p.value), "--v-slider-tick-size": F(u.value) }, e.style] }, [s("div", { class: ["v-slider-track__background", V.value, { "v-slider-track__background--opacity": !!r.value || !c.value }], style: { ...B.value, ...z.value } }, null), s("div", { class: ["v-slider-track__fill", x.value], style: { ...h.value, ..._.value } }, null), i.value && s("div", { class: ["v-slider-track__ticks", { "v-slider-track__ticks--always-show": i.value === "always" }] }, [$.value])])), {};
} });
function Rl(e) {
  const { t } = function() {
    const n = fe(Sl);
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
const Cr = N({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...X(), ...un({ transition: { component: jl, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), wr = W()({ name: "VMessages", props: Cr(), setup(e, t) {
  let { slots: n } = t;
  const l = f(() => Qe(e.messages)), { textColorClasses: r, textColorStyles: a } = Te(f(() => e.color));
  return H(() => s(Ue, { transition: e.transition, tag: "div", class: ["v-messages", r.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((o, i) => s("div", { class: "v-messages__message", key: `${i}-${l.value}` }, [n.message ? n.message({ message: o }) : o]))] })), {};
} }), bn = N({ focused: Boolean, "onUpdate:focused": qe() }, "focus");
function yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we();
  const n = Ce(e, "focused");
  return { focusClasses: f(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const _r = Symbol.for("vuetify:form"), xr = N({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...bn() }, "validation");
function Vr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : we(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ot();
  const l = Ce(e, "modelValue"), r = f(() => e.validationValue === void 0 ? l.value : e.validationValue), a = fe(_r, null), o = M([]), i = le(!0), u = f(() => !(!Qe(l.value === "" ? null : l.value).length && !Qe(r.value === "" ? null : r.value).length)), d = f(() => !!(e.disabled ?? (a == null ? void 0 : a.isDisabled.value))), c = f(() => !!(e.readonly ?? (a == null ? void 0 : a.isReadonly.value))), p = f(() => {
    var z;
    return (z = e.errorMessages) != null && z.length ? Qe(e.errorMessages).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), m = f(() => {
    let z = (e.validateOn ?? (a == null ? void 0 : a.validateOn.value)) || "input";
    z === "lazy" && (z = "input lazy");
    const O = new Set((z == null ? void 0 : z.split(" ")) ?? []);
    return { blur: O.has("blur") || O.has("input"), input: O.has("input"), submit: O.has("submit"), lazy: O.has("lazy") };
  }), g = f(() => {
    var z;
    return !e.error && !((z = e.errorMessages) != null && z.length) && (!e.rules.length || (i.value ? !o.value.length && !m.value.lazy || null : !o.value.length));
  }), A = le(!1), S = f(() => ({ [`${t}--error`]: g.value === !1, [`${t}--dirty`]: u.value, [`${t}--disabled`]: d.value, [`${t}--readonly`]: c.value })), C = f(() => e.name ?? P(n));
  function x() {
    l.value = null, tt(_);
  }
  function _() {
    i.value = !0, m.value.lazy ? o.value = [] : V(!0);
  }
  async function V() {
    let z = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const O = [];
    A.value = !0;
    for (const I of e.rules) {
      if (O.length >= +(e.maxErrors ?? 1))
        break;
      const B = typeof I == "function" ? I : () => I, y = await B(r.value);
      y !== !0 && (y === !1 || typeof y == "string" ? O.push(y || "") : console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    return o.value = O, A.value = !1, i.value = z, o.value;
  }
  return ll(() => {
    a == null || a.register({ id: C.value, validate: V, reset: x, resetValidation: _ });
  }), rt(() => {
    a == null || a.unregister(C.value);
  }), Bt(async () => {
    m.value.lazy || await V(!0), a == null || a.update(C.value, g.value, p.value);
  }), Yt(() => m.value.input, () => {
    J(r, () => {
      if (r.value != null)
        V();
      else if (e.focused) {
        const z = J(() => e.focused, (O) => {
          O || V(), z();
        });
      }
    });
  }), Yt(() => m.value.blur, () => {
    J(() => e.focused, (z) => {
      z || V();
    });
  }), J(g, () => {
    a == null || a.update(C.value, g.value, p.value);
  }), { errorMessages: p, isDirty: u, isDisabled: d, isReadonly: c, isPristine: i, isValid: g, isValidating: A, reset: x, resetValidation: _, validate: V, validationClasses: S };
}
const kn = N({ id: String, appendIcon: ae, centerAffix: { type: Boolean, default: !0 }, prependIcon: ae, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": qe(), "onClick:append": qe(), ...X(), ...Ze(), ...xr() }, "VInput"), wt = W()({ name: "VInput", props: { ...kn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: r } = t;
  const { densityClasses: a } = it(e), { rtlClasses: o } = ze(), { InputIcon: i } = Rl(e), u = ot(), d = f(() => e.id || `input-${u}`), c = f(() => `${d.value}-messages`), { errorMessages: p, isDirty: m, isDisabled: g, isReadonly: A, isPristine: S, isValid: C, isValidating: x, reset: _, resetValidation: V, validate: z, validationClasses: O } = Vr(e, "v-input", d), I = f(() => ({ id: d, messagesId: c, isDirty: m, isDisabled: g, isReadonly: A, isPristine: S, isValid: C, isValidating: x, reset: _, resetValidation: V, validate: z })), B = f(() => {
    var y;
    return (y = e.errorMessages) != null && y.length || !S.value && p.value.length ? p.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return H(() => {
    var v, k, w, E;
    const y = !(!l.prepend && !e.prependIcon), h = !(!l.append && !e.appendIcon), $ = B.value.length > 0, b = !e.hideDetails || e.hideDetails === "auto" && ($ || !!l.details);
    return s("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, a.value, o.value, O.value, e.class], style: e.style }, [y && s("div", { key: "prepend", class: "v-input__prepend" }, [(v = l.prepend) == null ? void 0 : v.call(l, I.value), e.prependIcon && s(i, { key: "prepend-icon", name: "prepend" }, null)]), l.default && s("div", { class: "v-input__control" }, [(k = l.default) == null ? void 0 : k.call(l, I.value)]), h && s("div", { key: "append", class: "v-input__append" }, [e.appendIcon && s(i, { key: "append-icon", name: "append" }, null), (w = l.append) == null ? void 0 : w.call(l, I.value)]), b && s("div", { class: "v-input__details" }, [s(wr, { id: c.value, active: $, messages: B.value }, { message: l.message }), (E = l.details) == null ? void 0 : E.call(l, I.value)])]);
  }), { reset: _, resetValidation: V, validate: z };
} }), Ir = N({ text: String, clickable: Boolean, ...X(), ...me() }, "VLabel"), Fl = W()({ name: "VLabel", props: Ir(), setup(e, t) {
  let { slots: n } = t;
  return H(() => {
    var l;
    return s("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Br = N({ ...bn(), ...vr(), ...kn(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Zn = W()({ name: "VSlider", props: Br(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, start: (e) => !0, end: (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = M(), { rtlClasses: a } = ze(), o = ((I) => {
    const B = f(() => parseFloat(I.min)), y = f(() => parseFloat(I.max)), h = f(() => +I.step > 0 ? parseFloat(I.step) : 0), $ = f(() => Math.max(wn(h.value), wn(B.value)));
    return { min: B, max: y, step: h, decimals: $, roundValue: function(b) {
      if (b = parseFloat(b), h.value <= 0)
        return b;
      const v = We(b, B.value, y.value), k = B.value % h.value, w = Math.round((v - k) / h.value) * h.value + k;
      return parseFloat(Math.min(w, y.value).toFixed($.value));
    } };
  })(e), i = Ce(e, "modelValue", void 0, (I) => o.roundValue(I ?? o.min.value)), { min: u, max: d, mousePressed: c, roundValue: p, onSliderMousedown: m, onSliderTouchstart: g, trackContainerRef: A, position: S, hasLabels: C, readonly: x } = fr({ props: e, steps: o, onSliderStart: () => {
    l("start", i.value);
  }, onSliderEnd: (I) => {
    let { value: B } = I;
    const y = p(B);
    i.value = y, l("end", y);
  }, onSliderMove: (I) => {
    let { value: B } = I;
    return i.value = p(B);
  }, getActiveThumb: () => {
    var I;
    return (I = r.value) == null ? void 0 : I.$el;
  } }), { isFocused: _, focus: V, blur: z } = yn(e), O = f(() => S(i.value));
  return H(() => {
    const [I, B] = wt.filterProps(e), y = !!(e.label || n.label || n.prepend);
    return s(wt, Z({ class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || C.value, "v-slider--focused": _.value, "v-slider--pressed": c.value, "v-slider--disabled": e.disabled }, a.value, e.class], style: e.style }, I, { focused: _.value }), { ...n, prepend: y ? (h) => {
      var $, b;
      return s(he, null, [(($ = n.label) == null ? void 0 : $.call(n, h)) ?? (e.label ? s(Fl, { id: h.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (b = n.prepend) == null ? void 0 : b.call(n, h)]);
    } : void 0, default: (h) => {
      let { id: $, messagesId: b } = h;
      return s("div", { class: "v-slider__container", onMousedown: x.value ? void 0 : m, onTouchstartPassive: x.value ? void 0 : g }, [s("input", { id: $.value, name: e.name || $.value, disabled: !!e.disabled, readonly: !!e.readonly, tabindex: "-1", value: i.value }, null), s(Sr, { ref: A, start: 0, stop: O.value }, { "tick-label": n["tick-label"] }), s(yr, { ref: r, "aria-describedby": b.value, focused: _.value, min: u.value, max: d.value, modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, position: O.value, elevation: e.elevation, onFocus: V, onBlur: z }, { "thumb-label": n["thumb-label"] })]);
    } });
  }), {};
} }), $r = ke({ name: "VColorPickerPreview", props: N({ color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...X() }, "VColorPickerPreview")(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  return H(() => {
    var l, r;
    return s("div", { class: ["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class], style: e.style }, [s("div", { class: "v-color-picker-preview__dot" }, [s("div", { style: { background: vl(e.color ?? et) } }, null)]), s("div", { class: "v-color-picker-preview__sliders" }, [s(Zn, { class: "v-color-picker-preview__track v-color-picker-preview__hue", modelValue: (l = e.color) == null ? void 0 : l.h, "onUpdate:modelValue": (a) => n("update:color", { ...e.color ?? et, h: a }), step: 0, min: 0, max: 360, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null), !e.hideAlpha && s(Zn, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", modelValue: ((r = e.color) == null ? void 0 : r.a) ?? 1, "onUpdate:modelValue": (a) => n("update:color", { ...e.color ?? et, a }), step: 1 / 256, min: 0, max: 1, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null)])]);
  }), {};
} }), Ar = Object.freeze({ base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }), zr = Object.freeze({ base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }), Or = Object.freeze({ base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }), Pr = Object.freeze({ base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }), Nr = Object.freeze({ base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }), Er = Object.freeze({ base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }), Lr = Object.freeze({ base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }), jr = Object.freeze({ base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }), Rr = Object.freeze({ base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }), Fr = Object.freeze({ base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }), Tr = Object.freeze({ base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }), Mr = Object.freeze({ base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }), Dr = Object.freeze({ base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }), Wr = Object.freeze({ base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }), Hr = Object.freeze({ base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }), Ur = Object.freeze({ base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }), qr = Object.freeze({ base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }), Xr = Object.freeze({ base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }), Gr = Object.freeze({ base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }), Yr = Object.freeze({ black: "#000000", white: "#ffffff", transparent: "#ffffff00" }), Kr = Object.freeze({ red: Ar, pink: zr, purple: Or, deepPurple: Pr, indigo: Nr, blue: Er, lightBlue: Lr, cyan: jr, teal: Rr, green: Fr, lightGreen: Tr, lime: Mr, yellow: Dr, amber: Wr, orange: Hr, deepOrange: Ur, brown: qr, blueGrey: Xr, grey: Gr, shades: Yr }), Zr = N({ swatches: { type: Array, default: () => function(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}(Kr) }, disabled: Boolean, color: Object, maxHeight: [Number, String], ...X() }, "VColorPickerSwatches"), Jr = ke({ name: "VColorPickerSwatches", props: Zr(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  return H(() => s("div", { class: ["v-color-picker-swatches", e.class], style: [{ maxHeight: F(e.maxHeight) }, e.style] }, [s("div", null, [e.swatches.map((l) => s("div", { class: "v-color-picker-swatches__swatch" }, [l.map((r) => {
    const a = Ve(r), o = $t(a), i = pl(a);
    return s("div", { class: "v-color-picker-swatches__color", onClick: () => o && n("update:color", o) }, [s("div", { style: { background: i } }, [e.color && ln(e.color, o) ? s(Ie, { size: "x-small", icon: "$success", color: Aa(r, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), Tl = N({ color: String, ...Lt(), ...X(), ...Pt(), ...st(), ...Rt(), ...fn(), ...$e(), ...Be(), ...me() }, "VSheet"), Jn = W()({ name: "VSheet", props: Tl(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = _e(e), { backgroundColorClasses: r, backgroundColorStyles: a } = Ge(G(e, "color")), { borderClasses: o } = jt(e), { dimensionStyles: i } = Nt(e), { elevationClasses: u } = ut(e), { locationStyles: d } = Ft(e), { positionClasses: c } = mn(e), { roundedClasses: p } = Ae(e);
  return H(() => s(e.tag, { class: ["v-sheet", l.value, r.value, o.value, u.value, c.value, p.value, e.class], style: [a.value, i.value, d.value, e.style] }, n)), {};
} }), Qr = ke({ name: "VColorPicker", props: N({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(je).includes(e) }, modes: { type: Array, default: () => Object.keys(je), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(je).includes(t)) }, showSwatches: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...il(Tl({ width: 300 }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"]) }, "VColorPicker")(), emits: { "update:modelValue": (e) => !0, "update:mode": (e) => !0 }, setup(e) {
  const t = Ce(e, "mode"), n = M(null), l = Ce(e, "modelValue", void 0, (o) => {
    if (o == null || o === "")
      return null;
    let i;
    try {
      i = $t(Ve(o));
    } catch (u) {
      return Xe(u), null;
    }
    return n.value && (i = { ...i, h: n.value.h }, n.value = null), i;
  }, (o) => o ? function(i, u) {
    if (u == null || typeof u == "string") {
      const d = ml(i);
      return i.a === 1 ? d.slice(0, 7) : d;
    }
    if (typeof u == "object") {
      let d;
      return Le(u, ["r", "g", "b"]) ? d = ye(i) : Le(u, ["h", "s", "l"]) ? d = dl(i) : Le(u, ["h", "s", "v"]) && (d = i), function(c, p) {
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
  return Bt(() => {
    e.modes.includes(t.value) || (t.value = e.modes[0]);
  }), At({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), H(() => {
    const [o] = Jn.filterProps(e);
    return s(Jn, Z({ rounded: e.rounded, elevation: e.elevation, theme: e.theme, class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": vl({ ...l.value ?? et, a: 1 }) }, e.style] }, o, { maxWidth: e.width }), { default: () => [!e.hideCanvas && s(nr, { key: "canvas", color: l.value, "onUpdate:color": a, disabled: e.disabled, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && s("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && s($r, { key: "preview", color: l.value, "onUpdate:color": a, hideAlpha: !t.value.endsWith("a"), disabled: e.disabled }, null), !e.hideInputs && s(pr, { key: "edit", modes: e.modes, mode: t.value, "onUpdate:mode": (i) => t.value = i, color: l.value, "onUpdate:color": a, disabled: e.disabled }, null)]), e.showSwatches && s(Jr, { key: "swatches", color: l.value, "onUpdate:color": a, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled }, null)] });
  }), {};
} }), eo = N({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...X(), ...un({ transition: { component: jl } }) }, "VCounter"), to = W()({ name: "VCounter", functional: !0, props: eo(), setup(e, t) {
  let { slots: n } = t;
  const l = f(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return H(() => s(Ue, { transition: e.transition }, { default: () => [be(s("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[It, e.active]])] })), {};
} }), no = N({ floating: Boolean, ...X() }, "VFieldLabel"), gt = W()({ name: "VFieldLabel", props: no(), setup(e, t) {
  let { slots: n } = t;
  return H(() => s(Fl, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), lo = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ml = N({ appendInnerIcon: ae, bgColor: String, clearable: Boolean, clearIcon: { type: ae, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ae, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => lo.includes(e) }, "onClick:clear": qe(), "onClick:appendInner": qe(), "onClick:prependInner": qe(), ...X(), ...pn(), ...$e(), ...me() }, "VField"), Dl = W()({ name: "VField", inheritAttrs: !1, props: { id: String, ...bn(), ...Ml() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const { themeClasses: a } = _e(e), { loaderClasses: o } = vn(e), { focusClasses: i, isFocused: u, focus: d, blur: c } = yn(e), { InputIcon: p } = Rl(e), { roundedClasses: m } = Ae(e), { rtlClasses: g } = ze(), A = f(() => e.dirty || e.active), S = f(() => !(e.singleLine || !e.label && !r.label)), C = ot(), x = f(() => e.id || `input-${C}`), _ = f(() => `${x.value}-messages`), V = M(), z = M(), O = M(), I = f(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: B, backgroundColorStyles: y } = Ge(G(e, "bgColor")), { textColorClasses: h, textColorStyles: $ } = Te(f(() => e.error || e.disabled ? void 0 : A.value && u.value ? e.color : e.baseColor));
  J(A, (k) => {
    if (S.value) {
      const w = V.value.$el, E = z.value.$el;
      requestAnimationFrame(() => {
        const R = function(ee) {
          const te = ee.getBoundingClientRect(), re = getComputedStyle(ee), Y = re.transform;
          if (Y) {
            let K, de, xe, pe, Oe;
            if (Y.startsWith("matrix3d("))
              K = Y.slice(9, -1).split(/, /), de = +K[0], xe = +K[5], pe = +K[12], Oe = +K[13];
            else {
              if (!Y.startsWith("matrix("))
                return new Dt(te);
              K = Y.slice(7, -1).split(/, /), de = +K[0], xe = +K[3], pe = +K[4], Oe = +K[5];
            }
            const Tt = re.transformOrigin, Wl = te.x - pe - (1 - de) * parseFloat(Tt), Hl = te.y - Oe - (1 - xe) * parseFloat(Tt.slice(Tt.indexOf(" ") + 1)), Ul = de ? te.width / de : ee.offsetWidth + 1, ql = xe ? te.height / xe : ee.offsetHeight + 1;
            return new Dt({ x: Wl, y: Hl, width: Ul, height: ql });
          }
          return new Dt(te);
        }(w), j = E.getBoundingClientRect(), q = j.x - R.x, T = j.y - R.y - (R.height / 2 - j.height / 2), U = j.width / 0.75, Q = Math.abs(U - R.width) > 1 ? { maxWidth: F(U) } : void 0, ue = getComputedStyle(w), ce = getComputedStyle(E), L = 1e3 * parseFloat(ue.transitionDuration) || 150, D = parseFloat(ce.getPropertyValue("--v-field-label-scale")), ge = ce.getPropertyValue("color");
        w.style.visibility = "visible", E.style.visibility = "hidden", function(ee, te, re) {
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
        }(w, { transform: `translate(${q}px, ${T}px) scale(${D})`, color: ge, ...Q }, { duration: L, easing: "cubic-bezier(0.4, 0, 0.2, 1)", direction: k ? "normal" : "reverse" }).finished.then(() => {
          w.style.removeProperty("visibility"), E.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const b = f(() => ({ isActive: A, isFocused: u, controlRef: O, blur: c, focus: d }));
  function v(k) {
    k.target !== document.activeElement && k.preventDefault();
  }
  return H(() => {
    var q, T, U;
    const k = e.variant === "outlined", w = r["prepend-inner"] || e.prependInnerIcon, E = !(!e.clearable && !r.clear), R = !!(r["append-inner"] || e.appendInnerIcon || E), j = r.label ? r.label({ ...b.value, label: e.label, props: { for: x.value } }) : e.label;
    return s("div", Z({ class: ["v-field", { "v-field--active": A.value, "v-field--appended": R, "v-field--center-affix": e.centerAffix ?? !I.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": w, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !j, [`v-field--variant-${e.variant}`]: !0 }, a.value, B.value, i.value, o.value, m.value, g.value, e.class], style: [y.value, e.style], onClick: v }, n), [s("div", { class: "v-field__overlay" }, null), s(Cl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: r.loader }), w && s("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && s(p, { key: "prepend-icon", name: "prependInner" }, null), (q = r["prepend-inner"]) == null ? void 0 : q.call(r, b.value)]), s("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && S.value && s(gt, { key: "floating-label", ref: z, class: [h.value], floating: !0, for: x.value, style: $.value }, { default: () => [j] }), s(gt, { ref: V, for: x.value }, { default: () => [j] }), (T = r.default) == null ? void 0 : T.call(r, { ...b.value, props: { id: x.value, class: "v-field__input", "aria-describedby": _.value }, focus: d, blur: c })]), E && s(hr, { key: "clear" }, { default: () => [be(s("div", { class: "v-field__clearable", onMousedown: (Q) => {
      Q.preventDefault(), Q.stopPropagation();
    } }, [r.clear ? r.clear() : s(p, { name: "clear" }, null)]), [[It, e.dirty]])] }), R && s("div", { key: "append", class: "v-field__append-inner" }, [(U = r["append-inner"]) == null ? void 0 : U.call(r, b.value), e.appendInnerIcon && s(p, { key: "append-icon", name: "appendInner" }, null)]), s("div", { class: ["v-field__outline", h.value], style: $.value }, [k && s(he, null, [s("div", { class: "v-field__outline__start" }, null), S.value && s("div", { class: "v-field__outline__notch" }, [s(gt, { ref: z, floating: !0, for: x.value }, { default: () => [j] })]), s("div", { class: "v-field__outline__end" }, null)]), I.value && S.value && s(gt, { ref: z, floating: !0, for: x.value }, { default: () => [j] })])]);
  }), { controlRef: O };
} });
function ao(e) {
  return yt(e, Object.keys(Dl.props).filter((t) => {
    return n = t, !sl.test(n) && t !== "class" && t !== "style";
    var n;
  }));
}
const Ut = Symbol("Forwarded refs");
function qt(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
const ro = ["color", "file", "time", "date", "datetime-local", "week", "month"], oo = N({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...kn(), ...Ml() }, "VTextField"), io = W()({ name: "VTextField", directives: { Intersect: bl }, inheritAttrs: !1, props: oo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const a = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: u } = yn(e), d = f(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), c = f(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), p = f(() => ["plain", "underlined"].includes(e.variant));
  function m(I, B) {
    var y, h;
    e.autofocus && I && ((h = (y = B[0].target) == null ? void 0 : y.focus) == null || h.call(y));
  }
  const g = M(), A = M(), S = M(), C = f(() => ro.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
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
        for (var y = arguments.length, h = new Array(y > 1 ? y - 1 : 0), $ = 1; $ < y; $++)
          h[$ - 1] = arguments[$];
        if (Array.isArray(B))
          for (const b of B)
            b(...h);
        else
          typeof B == "function" && B(...h);
      }(e["onClick:clear"], I);
    });
  }
  function O(I) {
    var y;
    const B = I.target;
    if (a.value = B.value, ((y = e.modelModifiers) == null ? void 0 : y.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const h = [B.selectionStart, B.selectionEnd];
      tt(() => {
        B.selectionStart = h[0], B.selectionEnd = h[1];
      });
    }
  }
  return H(() => {
    const I = !!(r.counter || e.counter !== !1 && e.counter != null), B = !(!I && !r.details), [y, h] = function(k) {
      const [w, E] = yt(k, [sl]), R = il(w, ha), [j, q] = yt(E, ["class", "style", "id", /^data-/]);
      return Object.assign(j, w), Object.assign(q, R), [j, q];
    }(n), [{ modelValue: $, ...b }] = wt.filterProps(e), [v] = ao(e);
    return s(wt, Z({ ref: g, modelValue: a.value, "onUpdate:modelValue": (k) => a.value = k, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, y, b, { centerAffix: !p.value, focused: o.value }), { ...r, default: (k) => {
      let { id: w, isDisabled: E, isDirty: R, isReadonly: j, isValid: q } = k;
      return s(Dl, Z({ ref: A, onMousedown: _, onClick: V, "onClick:clear": z, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, v, { id: w.value, active: C.value || R.value, dirty: R.value || e.dirty, disabled: E.value, focused: o.value, error: q.value === !1 }), { ...r, default: (T) => {
        let { props: { class: U, ...Q } } = T;
        const ue = be(s("input", Z({ ref: S, value: a.value, onInput: O, autofocus: e.autofocus, readonly: j.value, disabled: E.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: x, onBlur: u }, Q, h), null), [[at("intersect"), { handler: m }, null, { once: !0 }]]);
        return s(he, null, [e.prefix && s("span", { class: "v-text-field__prefix" }, [s("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), r.default ? s("div", { class: U, "data-no-activator": "" }, [r.default(), ue]) : la(ue, { class: U }), e.suffix && s("span", { class: "v-text-field__suffix" }, [s("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: B ? (k) => {
      var w;
      return s(he, null, [(w = r.details) == null ? void 0 : w.call(r, k), I && s(he, null, [s("span", null, null), s(to, { active: e.persistentCounter || o.value, value: d.value, max: c.value }, r.counter)])]);
    } : void 0 });
  }), function(I) {
    for (var B = arguments.length, y = new Array(B > 1 ? B - 1 : 0), h = 1; h < B; h++)
      y[h - 1] = arguments[h];
    return I[Ut] = y, new Proxy(I, { get($, b) {
      if (Reflect.has($, b))
        return Reflect.get($, b);
      if (typeof b != "symbol" && !b.startsWith("$") && !b.startsWith("__")) {
        for (const v of y)
          if (v.value && Reflect.has(v.value, b)) {
            const k = Reflect.get(v.value, b);
            return typeof k == "function" ? k.bind(v.value) : k;
          }
      }
    }, has($, b) {
      if (Reflect.has($, b))
        return !0;
      if (typeof b == "symbol" || b.startsWith("$") || b.startsWith("__"))
        return !1;
      for (const v of y)
        if (v.value && Reflect.has(v.value, b))
          return !0;
      return !1;
    }, set($, b, v) {
      if (Reflect.has($, b))
        return Reflect.set($, b, v);
      if (typeof b == "symbol" || b.startsWith("$") || b.startsWith("__"))
        return !1;
      for (const k of y)
        if (k.value && Reflect.has(k.value, b))
          return Reflect.set(k.value, b, v);
      return !1;
    }, getOwnPropertyDescriptor($, b) {
      var k;
      const v = Reflect.getOwnPropertyDescriptor($, b);
      if (v)
        return v;
      if (typeof b != "symbol" && !b.startsWith("$") && !b.startsWith("__")) {
        for (const w of y) {
          if (!w.value)
            continue;
          const E = qt(w.value, b) ?? ("_" in w.value ? qt((k = w.value._) == null ? void 0 : k.setupState, b) : void 0);
          if (E)
            return E;
        }
        for (const w of y) {
          const E = w.value && w.value[Ut];
          if (!E)
            continue;
          const R = E.slice();
          for (; R.length; ) {
            const j = R.shift(), q = qt(j.value, b);
            if (q)
              return q;
            const T = j.value && j.value[Ut];
            T && R.push(...T);
          }
        }
      }
    } });
  }({}, g, A, S);
} }), so = { key: 1 }, uo = { key: 0, class: "text-error ms-1" }, co = ((e) => (pa("data-v-8c335e67"), e = e(), va(), e))(() => rl("div", { class: "position-elm-helper" }, null, -1)), Qn = ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
})(_t({ inheritAttrs: !1, __name: "VColorPickerField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [null, Boolean], default: "mdi:mdi-palette" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { default: void 0 }, pipBorderRadius: { default: "50%" }, pipSize: { default: "default" }, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(e, { emit: t }) {
  var b;
  const n = aa(), l = ra(), r = t, a = e, o = { elevation: 5, hover: !1, loading: !1, verticalOffset: 28 }, i = M({ VCard: { ...o, ...a.cardProps }, VColorPicker: { elevation: 0, ...a.colorPickerProps } }), u = M(null), d = M({}), c = M(!1), p = M(null), m = M(n.modelValue), g = M(n.modelValue), A = M((b = i.value.VColorPicker) == null ? void 0 : b.mode), S = M(a.theme ?? void 0);
  let C = Jt({ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 });
  const x = M({ density: a.density, modelValue: g, pip: a.pip, pipBorder: a.pipBorder, pipBorderRadius: a.pipBorderRadius, pipIcon: a.pipIcon, pipSize: a.pipSize });
  J(() => n.modelValue, (v) => {
    y(v);
  });
  const _ = f(() => ((v) => {
    const { name: k, readonly: w, readonlyInput: E } = v;
    return { [`${Ee}--text-field-${k}`]: !0, [`${Ee}--text-field-readonly`]: w ?? !1, [`${Ee}--text-field-readonly-input`]: !(!E || w), [`${Ee}--text-field`]: !0 };
  })({ name: a.name, readonly: a.readonly, readonlyInput: a.readonlyInput })), V = f(() => a.readonly || a.readonlyInput), z = f(() => {
    if (a.iconHoverColor !== !1)
      return typeof a.iconHoverColor == "string" ? a.iconHoverColor : a.color ?? void 0;
  }), O = f(() => ((v) => {
    const { fullWidth: k } = v;
    return { [`${Ee}--card`]: !0, [`${Ee}--card-full-width`]: k };
  })({ fullWidth: a.cardFieldWidth }));
  function I(v) {
    (v !== "textField" || a.readonlyInput || a.readonly) && (v === "textFieldIcon" && (a.readonlyInput || a.readonly) || B());
  }
  function B(v) {
    var ue;
    const k = { left: 0, right: 0, top: 0, width: 0 }, w = p.value;
    if (!c.value && (v === "keyup" || v === "clear"))
      return void (v === "clear" && h(""));
    if (c.value = !c.value, !c.value)
      return void (d.value.display = "none");
    const E = (w == null ? void 0 : w.getBoundingClientRect()) ?? k;
    let R = (w == null ? void 0 : w.offsetHeight) ?? 0, j = 300, q = (E == null ? void 0 : E.left) ?? 0, T = (E == null ? void 0 : E.right) ?? 0;
    const U = (ue = p == null ? void 0 : p.value) == null ? void 0 : ue.querySelector(".v-field__input"), Q = (U == null ? void 0 : U.getBoundingClientRect()) ?? k;
    R = U == null ? void 0 : U.offsetHeight, j = (U == null ? void 0 : U.offsetWidth) ?? 0, q = Q.left, T = Q.right - Q.width, C = { bottom: "initial", height: R, left: q, right: T, top: window.scrollY + (E == null ? void 0 : E.top), width: a.cardFieldWidth ? j : "auto" }, function() {
      var Y, K, de;
      let ce = Number(C.top) + Number(C.height), L = "initial", D = Number(a.cardOffsetY) ?? 0;
      const ge = Number(a.cardOffsetX) ?? 0;
      (a.hint || a.messages) && (D += ((Y = i.value.VCard) == null ? void 0 : Y.verticalOffset) ?? 0), ce += D, (K = a.open) != null && K.includes("top") && (L = window.innerHeight - ce + Number(C.height) + 2 * D, ce = "initial");
      let ee = Number(C.left) + ge, te = C.right ?? 0;
      a.cardFieldWidth ? (ee = C.left, te = "initial") : (te = "initial", (de = a.open) != null && de.includes("right") && (ee = "initial", te = Number(C.right) + ge));
      const re = { bottom: Ne({ value: L }), display: "block", left: Ne({ value: ee }), minWidth: Ne({ value: C.width }), padding: Ne({ value: a.cardPadding }), right: Ne({ value: te }), top: Ne({ value: ce }), width: Ne({ value: C.width }) };
      d.value = re;
    }();
  }
  function y(v) {
    let k = v ?? "";
    k.length < 7 ? g.value = k : (A.value === "hex" && (v.length > 7 && (k = v.substr(0, 7)), k.toString().match(/#[a-zA-Z0-9]{7}/) && (k = v.substr(0, 7))), h(k));
  }
  function h(v) {
    m.value = v, g.value = v, r("update:modelValue", v), r("update", v);
  }
  function $(v) {
    A.value = v, g.value = m.value, r("update:mode", v);
  }
  return fa(p, (v) => {
    var w;
    const k = P(u);
    v.target !== k && !((w = k == null ? void 0 : k.$el) != null && w.contains(v.target)) && c.value && B("outside");
  }, { ignore: [u] }), (v, k) => (ne(), Mt(he, null, [rl("div", { ref_key: "fieldContainerRef", ref: p, class: "v-color-picker-field" }, [s(io, Z({ ref: "textFieldRef" }, v.$attrs, { class: P(_), color: v.color, density: v.density, hint: v.hint, messages: v.messages, "model-value": P(g), "persistent-hint": v.persistentHint, "persistent-placeholder": v.persistentPlaceholder, placeholder: v.placeholder, readonly: P(V), theme: P(S), "onClick:clear": k[2] || (k[2] = (w) => B("clear")), "onClick:control": k[3] || (k[3] = (w) => I("textField")), onKeyup: k[4] || (k[4] = oa((w) => B("keyup"), ["enter"])), "onUpdate:modelValue": y }), ia({ _: 2 }, [sa(P(l), (w, E) => ({ name: E, fn: oe((R) => [P(l).prepend || P(l)["prepend-inner"] || P(l)["append-inner"] || P(l).append ? Pe("", !0) : Me(v.$slots, E, Je(Z({ key: 0 }, { ...R })), void 0, !0)]) })), P(l).prepend ? { name: "prepend", fn: oe((w) => [Me(v.$slots, "prepend", Je(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "0" } : void 0, (v.prependIcon || v.pipSlot === "prepend" && v.pip) && !P(l).prepend ? { name: "prepend", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, P(x), { onClick: B }), null, 16)) : v.prependIcon ? (ne(), ve(ft, { key: 1, color: P(z), icon: v.prependIcon, onClick: B }, null, 8, ["color", "icon"])) : Pe("", !0)]), key: "1" } : void 0, P(l)["prepend-inner"] ? { name: "prepend-inner", fn: oe((w) => [Me(v.$slots, "prepend-inner", Je(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "2" } : void 0, (v.prependInnerIcon || v.pipSlot === "prepend-inner" && v.pip) && !P(l)["prepend-inner"] ? { name: "prepend-inner", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, P(x), { onClick: B }), null, 16)) : v.prependInnerIcon ? (ne(), ve(ft, { key: 1, color: P(z), icon: v.prependInnerIcon, onClick: k[0] || (k[0] = (w) => I("textFieldIcon")) }, null, 8, ["color", "icon"])) : Pe("", !0)]), key: "3" } : void 0, P(l)["append-inner"] ? { name: "append-inner", fn: oe((w) => [Me(v.$slots, "append-inner", Je(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "4" } : void 0, (v.appendInnerIcon || v.pipSlot === "append-inner" && v.pip) && !P(l)["append-inner"] ? { name: "append-inner", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, P(x), { onClick: B }), null, 16)) : v.appendInnerIcon ? (ne(), ve(ft, { key: 1, color: P(z), icon: v.appendInnerIcon, onClick: k[1] || (k[1] = (w) => I("textFieldIcon")) }, null, 8, ["color", "icon"])) : Pe("", !0)]), key: "5" } : void 0, P(l).append ? { name: "append", fn: oe((w) => [Me(v.$slots, "append", Je(ct({ ...w, toggleColorPicker: B })), void 0, !0)]), key: "6" } : void 0, (v.appendIcon || v.pipSlot === "append" && v.pip) && !P(l).append ? { name: "append", fn: oe(() => [v.pip ? (ne(), ve(mt, Z({ key: 0 }, P(x), { onClick: B }), null, 16)) : v.appendIcon ? (ne(), ve(ft, { key: 1, color: P(z), icon: v.appendIcon, onClick: B }, null, 8, ["color", "icon"])) : Pe("", !0)]), key: "7" } : void 0, P(l).label || v.label ? { name: "label", fn: oe(() => [P(l).label ? Me(v.$slots, "label", { key: 0 }, void 0, !0) : v.label ? (ne(), Mt("div", so, [ua(ca(v.label) + " ", 1), v.required ? (ne(), Mt("span", uo, "*")) : Pe("", !0)])) : Pe("", !0)]), key: "8" } : void 0]), 1040, ["class", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme"])], 512), (ne(), ve(da, { to: "body" }, [co, s(Fe, { defaults: P(i) }, { default: oe(() => {
    var w;
    return [s(tr, Z(o, { ref_key: "cardRef", ref: u, class: P(O), style: P(d), theme: ((w = P(i).VCard) == null ? void 0 : w.theme) ?? P(S), width: P(C).width }), { default: oe(() => {
      var E, R;
      return [s(Qr, { modelValue: P(m), "onUpdate:modelValue": [k[5] || (k[5] = (j) => Ke(m) ? m.value = j : null), y], class: "v-color-selection", disabled: ("readonly" in v ? v.readonly : P(al)) || ((E = P(i).VColorPicker) == null ? void 0 : E.disabled), mode: P(A), theme: ((R = P(i).VColorPicker) == null ? void 0 : R.theme) ?? P(S), "onUpdate:mode": $ }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 16, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), [["__scopeId", "data-v-8c335e67"]]);
Qn.install = (e) => {
  e.component("VColorPickerField", Qn);
};
export {
  Qn as VColorPickerField,
  Qn as default
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".position-elm-helper[data-v-8c335e67]{background-color:red;border-radius:50%;display:none;height:10px;left:0;position:absolute;top:0;width:10px;z-index:99999999999}.v-color-picker-field--text-field-readonly .v-field *,.v-color-picker-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-picker-field--card{display:none;position:absolute;z-index:999999}.v-color-picker-field--card .v-color-picker{width:100%!important}.v-color-picker-field--card .v-color-picker-canvas canvas{width:100%}.v-color-picker-field--card-full-width .v-color-picker{max-width:100%!important}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
