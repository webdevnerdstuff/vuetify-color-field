import { Fragment as he, reactive as bt, computed as v, watchEffect as _t, toRefs as nn, capitalize as tl, warn as Jl, ref as j, unref as y, provide as Ze, inject as ve, shallowRef as oe, defineComponent as xt, camelize as nl, h as Vt, getCurrentInstance as Ql, watch as J, onScopeDispose as ea, effectScope as ta, toRaw as na, isRef as je, createVNode as s, mergeProps as te, toRef as Y, Text as la, openBlock as re, createBlock as ge, withCtx as ue, normalizeClass as ll, normalizeStyle as al, Transition as It, onBeforeMount as rl, nextTick as nt, onBeforeUnmount as Je, withDirectives as Se, resolveDirective as rt, vShow as Bt, resolveDynamicComponent as aa, readonly as ra, onMounted as $t, TransitionGroup as oa, onUnmounted as ia, cloneVNode as sa, useAttrs as ua, useSlots as ca, createElementBlock as Wt, createElementVNode as ol, withKeys as da, createSlots as pa, renderList as va, renderSlot as We, normalizeProps as et, createCommentVNode as Ee, guardReactiveProps as ct, createTextVNode as fa, toDisplayString as ma, Teleport as ga, pushScopeId as ha, popScopeId as ya } from "vue";
import { onClickOutside as ba } from "@vueuse/core";
/**
 * @name @wdns/vuetify-color-field
 * @version 1.1.3
 * @description Vuetify Color Field is a Vuetify VTextField Color Picker Component
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-color-field/
 * @repository https://github.com/webdevnerdstuff/vuetify-color-field
 * @license MIT License
 */
const Oe = (e) => {
  const { unit: t = "px", value: n } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, Re = "v-color-field", ka = { fa: { default: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { default: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, il = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  let r = ((n == null ? void 0 : n.defaultSet) ?? "").toLowerCase();
  r = r === "fa" || r === "fasvg" ? "fa" : r;
  const a = ka[r];
  if (!a)
    throw new Error(`[VColorField]: No default ${n == null ? void 0 : n.defaultSet} icon set found.`);
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
function M(e) {
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
  for (const r of t)
    l.has(r) && (n[r] = e[r]);
  return n;
}
function _n(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    t.some((i) => i instanceof RegExp ? i.test(a) : i === a) && !(n != null && n.some((i) => i === a)) ? l[a] = e[a] : r[a] = e[a];
  return [l, r];
}
function ul(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const cl = /^on[^a-z]/, Ca = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function tt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function qe(e) {
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
function Xe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const r in e)
    l[r] = e[r];
  for (const r in t) {
    const a = e[r], i = t[r];
    Zt(a) && Zt(i) ? l[r] = Xe(a, i, n) : Array.isArray(a) && Array.isArray(i) && n ? l[r] = n(a, i) : l[r] = i;
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
const Fe = () => [Function, Array];
function In(e, t) {
  return !!(e[t = "on" + tl(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
const wa = ["top", "bottom"], _a = ["start", "end", "left", "right"];
function Bn(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
class Ut {
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
const Ue = 2.4, $n = 0.2126729, An = 0.7151522, zn = 0.072175, xa = 0.55, Va = 0.58, Ia = 0.57, Ba = 0.62, dt = 0.03, Pn = 1.45, $a = 5e-4, Aa = 1.25, za = 1.25, Nn = 0.078, En = 12.82051282051282, pt = 0.06, On = 1e-3;
function Rn(e, t) {
  const n = (e.r / 255) ** Ue, l = (e.g / 255) ** Ue, r = (e.b / 255) ** Ue, a = (t.r / 255) ** Ue, i = (t.g / 255) ** Ue, o = (t.b / 255) ** Ue;
  let u, d = n * $n + l * An + r * zn, c = a * $n + i * An + o * zn;
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
function Ke(e) {
  Jl(`Vuetify: ${e}`);
}
const Pa = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Na = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function qt(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Ln = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ea = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => Tn({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => Tn({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => Ce({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => Ce({ h: e, s: t, v: n, a: l }) };
function $e(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ke(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Ln.test(e)) {
    const { groups: t } = e.match(Ln), { fn: n, values: l } = t, r = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return Ea[n](...r);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || Ke(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Ke(`'${e}' is not a valid hex(a) color`), gl(t);
  }
  if (typeof e == "object") {
    if (Le(e, ["r", "g", "b"]))
      return e;
    if (Le(e, ["h", "s", "l"]))
      return Ce(an(e));
    if (Le(e, ["h", "s", "v"]))
      return Ce(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Ce(e) {
  const { h: t, s: n, v: l, a: r } = e, a = (o) => {
    const u = (o + t / 60) % 6;
    return l - l * n * Math.max(Math.min(u, 4 - u, 1), 0);
  }, i = [a(5), a(3), a(1)].map((o) => Math.round(255 * o));
  return { r: i[0], g: i[1], b: i[2], a: r };
}
function Tn(e) {
  return Ce(an(e));
}
function Pt(e) {
  if (!e)
    return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.max(t, n, l), a = Math.min(t, n, l);
  let i = 0;
  r !== a && (r === t ? i = 60 * (0 + (n - l) / (r - a)) : r === n ? i = 60 * (2 + (l - t) / (r - a)) : r === l && (i = 60 * (4 + (t - n) / (r - a)))), i < 0 && (i += 360);
  const o = [i, r === 0 ? 0 : (r - a) / r, r];
  return { h: o[0], s: o[1], v: o[2], a: e.a };
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
  return fl(Ce(e));
}
function vt(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function gl(e) {
  e = function(a) {
    return a.startsWith("#") && (a = a.slice(1)), a = a.replace(/([^0-9a-f])/gi, "F"), (a.length === 3 || a.length === 4) && (a = a.split("").map((i) => i + i).join("")), a.length !== 6 && (a = Vn(Vn(a, 6), 8, "F")), a;
  }(e);
  let [t, n, l, r] = function(a) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const o = [];
    let u = 0;
    for (; u < a.length; )
      o.push(a.substr(u, i)), u += i;
    return o;
  }(e, 2).map((a) => parseInt(a, 16));
  return r = r === void 0 ? r : r / 255, { r: t, g: n, b: l, a: r };
}
function hl(e) {
  return Pt(gl(e));
}
function yl(e) {
  return function(t) {
    let { r: n, g: l, b: r, a } = t;
    return `#${[vt(n), vt(l), vt(r), a !== void 0 ? vt(Math.round(255 * a)) : ""].join("")}`;
  }(Ce(e));
}
function Mn(e) {
  return function(t) {
    let { r: n, g: l, b: r } = t;
    const a = [0, 0, 0], i = Na, o = Pa;
    n = i(n / 255), l = i(l / 255), r = i(r / 255);
    for (let u = 0; u < 3; ++u)
      a[u] = o[u][0] * n + o[u][1] * l + o[u][2] * r;
    return a;
  }($e(e))[1];
}
function Oa(e, t) {
  const n = Mn(e), l = Mn(t);
  return (Math.max(n, l) + 0.05) / (Math.min(n, l) + 0.05);
}
function O(e, t) {
  return (n) => Object.keys(e).reduce((l, r) => {
    const a = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : { type: e[r] };
    return l[r] = n && r in n ? { ...a, default: n[r] } : a, t && !l[r].source && (l[r].source = t), l;
  }, {});
}
const U = O({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), kt = Symbol.for("vuetify:defaults");
function rn() {
  const e = ve(kt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Nt(e, t) {
  const n = rn(), l = j(e), r = v(() => {
    if (y(t == null ? void 0 : t.disabled))
      return n.value;
    const a = y(t == null ? void 0 : t.scoped), i = y(t == null ? void 0 : t.reset), o = y(t == null ? void 0 : t.root);
    if (l.value == null && !(a || i || o))
      return n.value;
    let u = Xe(l.value, { prev: n.value });
    if (a)
      return u;
    if (i || o) {
      const d = Number(i || 1 / 0);
      for (let c = 0; c <= d && u && "prev" in u; c++)
        u = u.prev;
      return u && typeof o == "string" && o in u && (u = Xe(Xe(u, { prev: u }), u[o])), u;
    }
    return u.prev ? Xe(u.prev, u) : u;
  });
  return Ze(kt, r), r;
}
function Ra() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rn();
  const l = ye("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const r = v(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), a = new Proxy(e, { get(o, u) {
    var c, p, f, g;
    const d = Reflect.get(o, u);
    return u === "class" || u === "style" ? [(c = r.value) == null ? void 0 : c[u], d].filter((A) => A != null) : typeof u != "string" || function(A, b) {
      var I, S;
      return ((I = A.props) == null ? void 0 : I[b]) !== void 0 || ((S = A.props) == null ? void 0 : S[Me(b)]) !== void 0;
    }(l.vnode, u) ? d : ((p = r.value) == null ? void 0 : p[u]) ?? ((g = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : g[u]) ?? d;
  } }), i = oe();
  return _t(() => {
    if (r.value) {
      const o = Object.entries(r.value).filter((u) => {
        let [d] = u;
        return d.startsWith(d[0].toUpperCase());
      });
      i.value = o.length ? Object.fromEntries(o) : void 0;
    } else
      i.value = void 0;
  }), { props: a, provideSubDefaults: function() {
    const o = function(u) {
      let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ye("injectSelf");
      const { provides: c } = d;
      if (c && u in c)
        return c[u];
    }(kt, l);
    Ze(kt, v(() => i.value ? Xe((o == null ? void 0 : o.value) ?? {}, i.value) : o == null ? void 0 : o.value));
  } };
}
function we(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ke("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = O(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return sl(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const r = rn();
      if (!r.value)
        return e._setup(n, l);
      const { props: a, provideSubDefaults: i } = Ra(n, n._as ?? e.name, r), o = e._setup(a, l);
      return i(), o;
    };
  }
  return e;
}
function D() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? we : xt)(t);
}
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return D()({ name: n ?? tl(nl(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...U() }, setup(l, r) {
    let { slots: a } = r;
    return () => {
      var i;
      return Vt(l.tag, { class: [e, l.class], style: l.style }, (i = a.default) == null ? void 0 : i.call(a));
    };
  } });
}
function ye(e, t) {
  const n = Ql();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function xe() {
  const e = ye(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Me((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let bl = 0, yt = /* @__PURE__ */ new WeakMap();
function ot() {
  const e = ye("getUid");
  if (yt.has(e))
    return yt.get(e);
  {
    const t = bl++;
    return yt.set(e, t), t;
  }
}
function H(e) {
  ye("useRender").render = e;
}
ot.reset = () => {
  bl = 0, yt = /* @__PURE__ */ new WeakMap();
};
const La = O({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Ta(e, t) {
  let n = () => {
  };
  function l(r) {
    n == null || n();
    const a = Number(r ? e.openDelay : e.closeDelay);
    return new Promise((i) => {
      n = function(o, u) {
        if (!At || o === 0)
          return u(), () => {
          };
        const d = window.setTimeout(u, o);
        return () => window.clearTimeout(d);
      }(a, () => {
        t == null || t(r), i(r);
      });
    });
  }
  return { clearDelay: n, runOpenDelay: function() {
    return l(!0);
  }, runCloseDelay: function() {
    return l(!1);
  } };
}
function Qt(e, t) {
  let n;
  function l() {
    n = ta(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  J(e, (r) => {
    r && !n ? l() : r || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), ea(() => {
    n == null || n.stop();
  });
}
function _e(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const a = ye("useProxiedModel"), i = j(e[t] !== void 0 ? e[t] : n), o = Me(t), u = v(o !== t ? () => {
    var c, p, f, g;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) && !((p = a.vnode.props) != null && p.hasOwnProperty(o)) || !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((g = a.vnode.props) != null && g.hasOwnProperty(`onUpdate:${o}`)));
  } : () => {
    var c, p;
    return e[t], !(!((c = a.vnode.props) != null && c.hasOwnProperty(t)) || !((p = a.vnode.props) != null && p.hasOwnProperty(`onUpdate:${t}`)));
  });
  Qt(() => !u.value, () => {
    J(() => e[t], (c) => {
      i.value = c;
    });
  });
  const d = v({ get() {
    const c = e[t];
    return l(u.value ? c : i.value);
  }, set(c) {
    const p = r(c), f = na(u.value ? e[t] : i.value);
    f !== p && l(f) !== c && (i.value = p, a == null || a.emit(`update:${t}`, p));
  } });
  return Object.defineProperty(d, "externalValue", { get: () => u.value ? e[t] : i.value }), d;
}
const Ma = O({ disabled: Boolean, modelValue: { type: Boolean, default: void 0 }, ...La() }, "VHover"), Fa = D()({ name: "VHover", props: Ma(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = _e(e, "modelValue"), { runOpenDelay: r, runCloseDelay: a } = Ta(e, (i) => !e.disabled && (l.value = i));
  return () => {
    var i;
    return (i = n.default) == null ? void 0 : i.call(n, { isHovering: l.value, props: { onMouseenter: r, onMouseleave: a } });
  };
} });
function sn(e) {
  return pl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (qt(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && qt(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const r = $e(e.value.background);
          if (r.a == null || r.a === 1) {
            const a = function(i) {
              const o = Math.abs(Rn($e(0), $e(i)));
              return Math.abs(Rn($e(16777215), $e(i))) > Math.min(o, 50) ? "#fff" : "#000";
            }(r);
            n.color = a, n.caretColor = a;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (qt(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function De(e, t) {
  const n = v(() => ({ text: je(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: r } = sn(n);
  return { textColorClasses: l, textColorStyles: r };
}
function He(e, t) {
  const n = v(() => ({ background: je(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: r } = sn(n);
  return { backgroundColorClasses: l, backgroundColorStyles: r };
}
const ie = [String, Function, Object, Array], ja = Symbol.for("vuetify:icons"), St = O({ icon: { type: ie }, tag: { type: String, required: !0 } }, "icon"), Fn = D()({ name: "VComponentIcon", props: St(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return s(e.tag, null, { default: () => {
      var r;
      return [e.icon ? s(l, null, null) : (r = n.default) == null ? void 0 : r.call(n)];
    } });
  };
} }), Da = we({ name: "VSvgIcon", inheritAttrs: !1, props: St(), setup(e, t) {
  let { attrs: n } = t;
  return () => s(e.tag, te(n, { style: null }), { default: () => [s("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? s("path", { d: l[0], "fill-opacity": l[1] }, null) : s("path", { d: l }, null)) : s("path", { d: e.icon }, null)])] });
} });
we({ name: "VLigatureIcon", props: St(), setup: (e) => () => s(e.tag, null, { default: () => [e.icon] }) }), we({ name: "VClassIcon", props: St(), setup: (e) => () => s(e.tag, { class: e.icon }, null) });
const Ha = ["x-small", "small", "default", "large", "x-large"], Et = O({ size: { type: [String, Number], default: "default" } }, "size");
function Ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  return pl(() => {
    let n, l;
    return Jt(Ha, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: M(e.size), height: M(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const ze = O({ tag: { type: String, default: "div" } }, "tag"), jn = Symbol.for("vuetify:theme"), ke = O({ theme: String }, "theme");
function Ve(e) {
  ye("provideTheme");
  const t = ve(jn, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), l = v(() => t.themes.value[n.value]), r = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = { ...t, name: n, current: l, themeClasses: r };
  return Ze(jn, a), a;
}
const Wa = O({ color: String, start: Boolean, end: Boolean, icon: ie, ...U(), ...Et(), ...ze({ tag: "i" }), ...ke() }, "VIcon"), be = D()({ name: "VIcon", props: Wa(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const r = j(), { themeClasses: a } = Ve(e), { iconData: i } = ((c) => {
    const p = ve(ja);
    if (!p)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var I;
      const f = y(c);
      if (!f)
        return { component: Fn };
      let g = f;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (I = p.aliases) == null ? void 0 : I[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(g))
        return { component: Da, icon: g };
      if (typeof g != "string")
        return { component: Fn, icon: g };
      const A = Object.keys(p.sets).find((S) => typeof g == "string" && g.startsWith(`${S}:`)), b = A ? g.slice(A.length + 1) : g;
      return { component: p.sets[A ?? p.defaultSet].component, icon: b };
    }) };
  })(v(() => r.value || e.icon)), { sizeClasses: o } = Ot(e), { textColorClasses: u, textColorStyles: d } = De(Y(e, "color"));
  return H(() => {
    var p, f;
    const c = (p = l.default) == null ? void 0 : p.call(l);
    return c && (r.value = (f = dl(c).filter((g) => g.type === la && g.children && typeof g.children == "string")[0]) == null ? void 0 : f.children), s(i.value.component, { tag: e.tag, icon: i.value.icon, class: ["v-icon", "notranslate", a.value, o.value, u.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [o.value ? void 0 : { fontSize: M(e.size), height: M(e.size), width: M(e.size) }, d.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [c] });
  }), {};
} }), ft = xt({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, r = ve(Symbol.for("vuetify:icons")), a = v(() => il({ icon: l.icon !== "default" ? l.icon : "", iconOptions: r, name: "default" }));
  function i() {
    n("click");
  }
  return (o, u) => (re(), ge(Fa, null, { default: ue(({ isHovering: d, props: c }) => [s(be, te(c, { color: d ? o.color : void 0, icon: y(a), size: o.iconSize, onClick: i }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), mt = xt({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(e, { emit: t }) {
  const n = t, l = e, { modelValue: r } = nn(l), a = v(() => ({ [`${Re}--pip`]: !0 })), i = v(() => ((c) => {
    const { pipBorder: p, pipBorderRadius: f } = c, g = { backgroundColor: p && p !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return p && p !== "none" && (g.border = p, g.borderRadius = f), g;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), o = ve(Symbol.for("vuetify:icons")), u = v(() => il({ icon: l.pipIcon !== "pip" ? l.pipIcon : "", iconOptions: o, name: "pip" }));
  function d() {
    n("click");
  }
  return (c, p) => (re(), ge(be, { class: ll(y(a)), color: y(r) || "--v-theme-on-surface", icon: y(u), size: c.pipSize, style: al(y(i)), tag: "div", onClick: d }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), Ua = D()({ name: "VCardActions", props: U(), setup(e, t) {
  let { slots: n } = t;
  return Nt({ VBtn: { slim: !0, variant: "text" } }), H(() => {
    var l;
    return s("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), qa = on("v-card-subtitle"), Xa = on("v-card-title"), Ga = O({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ae = D(!1)({ name: "VDefaultsProvider", props: Ga(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: r, reset: a, root: i, scoped: o } = nn(e);
  return Nt(l, { reset: a, root: i, scoped: o, disabled: r }), () => {
    var u;
    return (u = n.default) == null ? void 0 : u.call(n);
  };
} }), Rt = O({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Lt(e) {
  return { dimensionStyles: v(() => ({ height: M(e.height), maxHeight: M(e.maxHeight), maxWidth: M(e.maxWidth), minHeight: M(e.minHeight), minWidth: M(e.minWidth), width: M(e.width) })) };
}
const kl = O({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...U(), ...Rt() }, "VResponsive"), Dn = D()({ name: "VResponsive", props: kl(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: v(() => {
      const i = Number(a.aspectRatio);
      return i ? { paddingBottom: String(1 / i * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: r } = Lt(e);
  return H(() => {
    var a;
    return s("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [r.value, e.style] }, [s("div", { class: "v-responsive__sizer", style: l.value }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && s("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), Ie = O({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function Be(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  return { roundedClasses: v(() => {
    const n = je(e) ? e.value : e.rounded, l = je(e) ? e.value : e.tile, r = [];
    if (n === !0 || n === "")
      r.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        r.push(`rounded-${a}`);
    else
      l && r.push("rounded-0");
    return r;
  }) };
}
const un = O({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ge = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: r, ...a } = e, { component: i = It, ...o } = typeof l == "object" ? l : {};
  return Vt(i, te(typeof l == "string" ? { name: r ? "" : l } : o, a, { disabled: r }), n);
};
function Hn(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Sl = { mounted: function(e, t) {
  if (!ln)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: r, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, i = new IntersectionObserver(function() {
    var p;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const d = (p = e._observe) == null ? void 0 : p[t.instance.$.uid];
    if (!d)
      return;
    const c = o.some((f) => f.isIntersecting);
    !r || n.quiet && !d.init || n.once && !c && !d.init || r(c, o, u), c && n.once ? Hn(e, t) : d.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: i }, i.observe(e);
}, unmounted: Hn }, Ya = O({ alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...kl(), ...U(), ...Ie(), ...un() }, "VImg"), Cl = D()({ name: "VImg", directives: { intersect: Sl }, props: Ya(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { backgroundColorClasses: r, backgroundColorStyles: a } = He(Y(e, "color")), { roundedClasses: i } = Be(e), o = ye("VImg"), u = oe(""), d = j(), c = oe(e.eager ? "loading" : "idle"), p = oe(), f = oe(), g = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), A = v(() => g.value.aspect || p.value / f.value || 0);
  function b(x) {
    if ((!e.eager || !x) && (!ln || x || e.eager)) {
      if (c.value = "loading", g.value.lazySrc) {
        const m = new Image();
        m.src = g.value.lazySrc, P(m, null);
      }
      g.value.src && nt(() => {
        var m;
        n("loadstart", ((m = d.value) == null ? void 0 : m.currentSrc) || g.value.src), setTimeout(() => {
          var h;
          if (!o.isUnmounted)
            if ((h = d.value) != null && h.complete) {
              if (d.value.naturalWidth || S(), c.value === "error")
                return;
              A.value || P(d.value, null), c.value === "loading" && I();
            } else
              A.value || P(d.value), _();
        });
      });
    }
  }
  function I() {
    var x;
    o.isUnmounted || (_(), P(d.value), c.value = "loaded", n("load", ((x = d.value) == null ? void 0 : x.currentSrc) || g.value.src));
  }
  function S() {
    var x;
    o.isUnmounted || (c.value = "error", n("error", ((x = d.value) == null ? void 0 : x.currentSrc) || g.value.src));
  }
  function _() {
    const x = d.value;
    x && (u.value = x.currentSrc || x.src);
  }
  J(() => e.src, () => {
    b(c.value !== "idle");
  }), J(A, (x, m) => {
    !x && m && d.value && P(d.value);
  }), rl(() => b());
  let V = -1;
  function P(x) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const h = () => {
      if (clearTimeout(V), o.isUnmounted)
        return;
      const { naturalHeight: $, naturalWidth: R } = x;
      $ || R ? (p.value = R, f.value = $) : x.complete || c.value !== "loading" || m == null ? (x.currentSrc.endsWith(".svg") || x.currentSrc.startsWith("data:image/svg+xml")) && (p.value = 1, f.value = 1) : V = window.setTimeout(h, m);
    };
    h();
  }
  Je(() => {
    clearTimeout(V);
  });
  const E = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), B = () => {
    var h;
    if (!g.value.src || c.value === "idle")
      return null;
    const x = s("img", { class: ["v-img__img", E.value], style: { objectPosition: e.position }, src: g.value.src, srcset: g.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: d, onLoad: I, onError: S }, null), m = (h = l.sources) == null ? void 0 : h.call(l);
    return s(Ge, { transition: e.transition, appear: !0 }, { default: () => [Se(m ? s("picture", { class: "v-img__picture" }, [m, x]) : x, [[Bt, c.value === "loaded"]])] });
  }, z = () => s(Ge, { transition: e.transition }, { default: () => [g.value.lazySrc && c.value !== "loaded" && s("img", { class: ["v-img__img", "v-img__img--preload", E.value], style: { objectPosition: e.position }, src: g.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), C = () => l.placeholder ? s(Ge, { transition: e.transition, appear: !0 }, { default: () => [(c.value === "loading" || c.value === "error" && !l.error) && s("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, w = () => l.error ? s(Ge, { transition: e.transition, appear: !0 }, { default: () => [c.value === "error" && s("div", { class: "v-img__error" }, [l.error()])] }) : null, N = () => e.gradient ? s("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, k = oe(!1);
  {
    const x = J(A, (m) => {
      m && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          k.value = !0;
        });
      }), x());
    });
  }
  return H(() => {
    const x = Dn.filterProps(e);
    return Se(s(Dn, te({ class: ["v-img", { "v-img--booting": !k.value }, r.value, i.value, e.class], style: [{ width: M(e.width === "auto" ? p.value : e.width) }, a.value, e.style] }, x, { aspectRatio: A.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => s(he, null, [s(B, null, null), s(z, null, null), s(N, null, null), s(C, null, null), s(w, null, null)]), default: l.default }), [[rt("intersect"), { handler: b, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: u, image: d, state: c, naturalWidth: p, naturalHeight: f };
} }), Ka = [null, "default", "comfortable", "compact"], Qe = O({ density: { type: String, default: "default", validator: (e) => Ka.includes(e) } }, "density");
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const Za = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function cn(e, t) {
  return s(he, null, [e && s("span", { key: "overlay", class: `${t}__overlay` }, null), s("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const Tt = O({ color: String, variant: { type: String, default: "elevated", validator: (e) => Za.includes(e) } }, "variant");
function dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  const n = v(() => {
    const { variant: a } = y(e);
    return `${t}--variant-${a}`;
  }), { colorClasses: l, colorStyles: r } = sn(v(() => {
    const { variant: a, color: i } = y(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: i };
  }));
  return { colorClasses: l, colorStyles: r, variantClasses: n };
}
const Ja = O({ start: Boolean, end: Boolean, icon: ie, image: String, text: String, ...U(), ...Qe(), ...Ie(), ...Et(), ...ze(), ...ke(), ...Tt({ variant: "flat" }) }, "VAvatar"), Wn = D()({ name: "VAvatar", props: Ja(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ve(e), { colorClasses: r, colorStyles: a, variantClasses: i } = dn(e), { densityClasses: o } = it(e), { roundedClasses: u } = Be(e), { sizeClasses: d, sizeStyles: c } = Ot(e);
  return H(() => s(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, r.value, o.value, u.value, d.value, i.value, e.class], style: [a.value, c.value, e.style] }, { default: () => [n.default ? s(Ae, { key: "content-defaults", defaults: { VImg: { cover: !0, image: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? s(Cl, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? s(be, { key: "icon", icon: e.icon }, null) : e.text, cn(!1, "v-avatar")] })), {};
} }), Qa = O({ appendAvatar: String, appendIcon: ie, prependAvatar: String, prependIcon: ie, subtitle: [String, Number], title: [String, Number], ...U(), ...Qe() }, "VCardItem"), er = D()({ name: "VCardItem", props: Qa(), setup(e, t) {
  let { slots: n } = t;
  return H(() => {
    var d;
    const l = !(!e.prependAvatar && !e.prependIcon), r = !(!l && !n.prepend), a = !(!e.appendAvatar && !e.appendIcon), i = !(!a && !n.append), o = !(e.title == null && !n.title), u = !(e.subtitle == null && !n.subtitle);
    return s("div", { class: ["v-card-item", e.class], style: e.style }, [r && s("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? s(Ae, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : s(he, null, [e.prependAvatar && s(Wn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && s(be, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), s("div", { class: "v-card-item__content" }, [o && s(Xa, { key: "title" }, { default: () => {
      var c;
      return [((c = n.title) == null ? void 0 : c.call(n)) ?? e.title];
    } }), u && s(qa, { key: "subtitle" }, { default: () => {
      var c;
      return [((c = n.subtitle) == null ? void 0 : c.call(n)) ?? e.subtitle];
    } }), (d = n.default) == null ? void 0 : d.call(n)]), i && s("div", { key: "append", class: "v-card-item__append" }, [n.append ? s(Ae, { key: "append-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : s(he, null, [e.appendIcon && s(be, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && s(Wn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])]);
  }), {};
} }), tr = on("v-card-text"), Mt = O({ border: [Boolean, Number, String] }, "border");
function Ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  return { borderClasses: v(() => {
    const n = je(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const r of String(n).split(" "))
        l.push(`border-${r}`);
    return l;
  }) };
}
const st = O({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function ut(e) {
  return { elevationClasses: v(() => {
    const t = je(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
function wl(e, t) {
  const n = j(), l = oe(!1);
  if (ln) {
    const r = new IntersectionObserver((a) => {
      e == null || e(a, r), l.value = !!a.find((i) => i.isIntersecting);
    }, t);
    Je(() => {
      r.disconnect();
    }), J(n, (a, i) => {
      i && (r.unobserve(i), l.value = !1), a && r.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const _l = Symbol.for("vuetify:locale");
function Pe() {
  const e = ve(_l);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Un = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, jt = O({ location: String }, "location");
function Dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = Pe();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: a, align: i } = function(d, c) {
      let [p, f] = d.split(" ");
      return f || (f = Jt(wa, p) ? "start" : Jt(_a, p) ? "top" : "center"), { side: Bn(p, c), align: Bn(f, c) };
    }(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function o(d) {
      return n ? n(d) : 0;
    }
    const u = {};
    return a !== "center" && (t ? u[Un[a]] = `calc(100% - ${o(a)}px)` : u[a] = 0), i !== "center" ? t ? u[Un[i]] = `calc(100% - ${o(i)}px)` : u[i] = 0 : (a === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), u;
  }) };
}
const nr = O({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...U(), ...jt({ location: "top" }), ...Ie(), ...ze(), ...ke() }, "VProgressLinear"), lr = D()({ name: "VProgressLinear", props: nr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = _e(e, "modelValue"), { isRtl: r, rtlClasses: a } = Pe(), { themeClasses: i } = Ve(e), { locationStyles: o } = Dt(e), { textColorClasses: u, textColorStyles: d } = De(e, "color"), { backgroundColorClasses: c, backgroundColorStyles: p } = He(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: g } = He(e, "color"), { roundedClasses: A } = Be(e), { intersectionRef: b, isIntersecting: I } = wl(), S = v(() => parseInt(e.max, 10)), _ = v(() => parseInt(e.height, 10)), V = v(() => parseFloat(e.bufferValue) / S.value * 100), P = v(() => parseFloat(l.value) / S.value * 100), E = v(() => r.value !== e.reverse), B = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), z = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function C(w) {
    if (!b.value)
      return;
    const { left: N, right: k, width: x } = b.value.getBoundingClientRect(), m = E.value ? x - w.clientX + (k - x) : w.clientX - N;
    l.value = Math.round(m / x * S.value);
  }
  return H(() => s(e.tag, { ref: b, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": E.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, A.value, i.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? M(_.value) : 0, "--v-progress-linear-height": M(_.value), ...o.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : P.value, onClick: e.clickable && C }, { default: () => [e.stream && s("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...d.value, [E.value ? "left" : "right"]: M(-_.value), borderTop: `${M(_.value / 2)} dotted`, opacity: z.value, top: `calc(50% - ${M(_.value / 4)})`, width: M(100 - V.value, "%"), "--v-progress-linear-stream-to": M(_.value * (E.value ? 1 : -1)) } }, null), s("div", { class: ["v-progress-linear__background", c.value], style: [p.value, { opacity: z.value, width: M(e.stream ? V.value : 100, "%") }] }, null), s(It, { name: B.value }, { default: () => [e.indeterminate ? s("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((w) => s("div", { key: w, class: ["v-progress-linear__indeterminate", w, f.value], style: g.value }, null))]) : s("div", { class: ["v-progress-linear__determinate", f.value], style: [g.value, { width: M(P.value, "%") }] }, null)] }), n.default && s("div", { class: "v-progress-linear__content" }, [n.default({ value: P.value, buffer: V.value })])] })), {};
} }), pn = O({ loading: [Boolean, String] }, "loader");
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function xl(e, t) {
  var l;
  let { slots: n } = t;
  return s("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || s(lr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const ar = ["static", "relative", "fixed", "absolute", "sticky"], fn = O({ position: { type: String, validator: (e) => ar.includes(e) } }, "position");
function mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  return { positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Vl(e, t) {
  const n = aa("RouterLink"), l = v(() => !(!e.href && !e.to)), r = v(() => (l == null ? void 0 : l.value) || In(t, "click") || In(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: r, href: Y(e, "href") };
  const a = e.to ? n.useLink(e) : void 0, i = function() {
    const o = ye("useRoute");
    return v(() => {
      var u;
      return (u = o == null ? void 0 : o.proxy) == null ? void 0 : u.$route;
    });
  }();
  return { isLink: l, isClickable: r, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && v(() => {
    var o, u, d;
    return e.exact ? i.value ? ((o = a.isExactActive) == null ? void 0 : o.value) && zt(a.route.value.query, i.value.query) : (u = a.isExactActive) == null ? void 0 : u.value : (d = a.isActive) == null ? void 0 : d.value;
  }), href: v(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const Il = O({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router"), en = Symbol("rippleStop"), rr = 80;
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
  const l = document.createElement("span"), r = document.createElement("span");
  l.appendChild(r), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: a, scale: i, x: o, y: u, centerX: d, centerY: c } = function(A, b) {
    var z;
    let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = 0, _ = 0;
    if (!Bl(A)) {
      const C = b.getBoundingClientRect(), w = tn(A) ? A.touches[A.touches.length - 1] : A;
      S = w.clientX - C.left, _ = w.clientY - C.top;
    }
    let V = 0, P = 0.3;
    (z = b._ripple) != null && z.circle ? (P = 0.15, V = b.clientWidth / 2, V = I.center ? V : V + Math.sqrt((S - V) ** 2 + (_ - V) ** 2) / 4) : V = Math.sqrt(b.clientWidth ** 2 + b.clientHeight ** 2) / 2;
    const E = (b.clientWidth - 2 * V) / 2 + "px", B = (b.clientHeight - 2 * V) / 2 + "px";
    return { radius: V, scale: P, x: I.center ? E : S - V + "px", y: I.center ? B : _ - V + "px", centerX: E, centerY: B };
  }(e, t, n), p = 2 * a + "px";
  r.className = "v-ripple__animation", r.style.width = p, r.style.height = p, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), qn(r, `translate(${o}, ${u}) scale3d(${i},${i},${i})`), r.dataset.activated = String(performance.now()), setTimeout(() => {
    r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), qn(r, `translate(${d}, ${c}) scale3d(1,1,1)`);
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
      var i;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((i = n.parentNode) == null ? void 0 : i.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, r);
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
      }, rr);
    } else
      Ct.show(e, n, t);
  }
}
function Xn(e) {
  e[en] = !0;
}
function de(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        de(e);
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
  at = !1, de(e);
}
function Nl(e) {
  at && (at = !1, de(e));
}
function Gn(e, t, n) {
  const { value: l, modifiers: r } = t, a = $l(l);
  if (a || Ct.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = r.center, e._ripple.circle = r.circle, Zt(l) && l.class && (e._ripple.class = l.class), a && !n) {
    if (r.stop)
      return e.addEventListener("touchstart", Xn, { passive: !0 }), void e.addEventListener("mousedown", Xn);
    e.addEventListener("touchstart", lt, { passive: !0 }), e.addEventListener("touchend", de, { passive: !0 }), e.addEventListener("touchmove", Al, { passive: !0 }), e.addEventListener("touchcancel", de), e.addEventListener("mousedown", lt), e.addEventListener("mouseup", de), e.addEventListener("mouseleave", de), e.addEventListener("keydown", zl), e.addEventListener("keyup", Pl), e.addEventListener("blur", Nl), e.addEventListener("dragstart", de, { passive: !0 });
  } else
    !a && n && El(e);
}
function El(e) {
  e.removeEventListener("mousedown", lt), e.removeEventListener("touchstart", lt), e.removeEventListener("touchend", de), e.removeEventListener("touchmove", Al), e.removeEventListener("touchcancel", de), e.removeEventListener("mouseup", de), e.removeEventListener("mouseleave", de), e.removeEventListener("keydown", zl), e.removeEventListener("keyup", Pl), e.removeEventListener("dragstart", de), e.removeEventListener("blur", Nl);
}
const gn = { mounted: function(e, t) {
  Gn(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, El(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Gn(e, t, $l(t.oldValue));
} }, or = O({ appendAvatar: String, appendIcon: ie, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ie, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...Mt(), ...U(), ...Qe(), ...Rt(), ...st(), ...pn(), ...jt(), ...fn(), ...Ie(), ...Il(), ...ze(), ...ke(), ...Tt({ variant: "elevated" }) }, "VCard"), ir = D()({ name: "VCard", directives: { Ripple: gn }, props: or(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = Ve(e), { borderClasses: a } = Ft(e), { colorClasses: i, colorStyles: o, variantClasses: u } = dn(e), { densityClasses: d } = it(e), { dimensionStyles: c } = Lt(e), { elevationClasses: p } = ut(e), { loaderClasses: f } = vn(e), { locationStyles: g } = Dt(e), { positionClasses: A } = mn(e), { roundedClasses: b } = Be(e), I = Vl(e, n), S = v(() => e.link !== !1 && I.isLink.value), _ = v(() => !e.disabled && e.link !== !1 && (e.link || I.isClickable.value));
  return H(() => {
    const V = S.value ? "a" : e.tag, P = !(!l.title && e.title == null), E = !(!l.subtitle && e.subtitle == null), B = P || E, z = !!(l.append || e.appendAvatar || e.appendIcon), C = !!(l.prepend || e.prependAvatar || e.prependIcon), w = !(!l.image && !e.image), N = B || C || z, k = !(!l.text && e.text == null);
    return Se(s(V, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": _.value }, r.value, a.value, i.value, d.value, p.value, f.value, A.value, b.value, u.value, e.class], style: [o.value, c.value, g.value, e.style], href: I.href.value, onClick: _.value && I.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var x;
      return [w && s("div", { key: "image", class: "v-card__image" }, [l.image ? s(Ae, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : s(Cl, { key: "image-img", cover: !0, src: e.image }, null)]), s(xl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), N && s(er, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), k && s(tr, { key: "text" }, { default: () => {
        var m;
        return [((m = l.text) == null ? void 0 : m.call(l)) ?? e.text];
      } }), (x = l.default) == null ? void 0 : x.call(l), l.actions && s(Ua, null, { default: l.actions }), cn(_.value, "v-card")];
    } }), [[rt("ripple"), _.value && e.ripple]]);
  }), {};
} });
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = j(), l = j();
  if (At) {
    const r = new ResizeObserver((a) => {
      e == null || e(a, r), a.length && (l.value = t === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    Je(() => {
      r.disconnect();
    }), J(n, (a, i) => {
      i && (r.unobserve(Cn(i)), l.value = void 0), a && r.observe(Cn(a));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: ra(l) };
}
const sr = we({ name: "VColorPickerCanvas", props: O({ color: { type: Object }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...U() }, "VColorPickerCanvas")(), emits: { "update:color": (e) => !0, "update:position": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = oe(!1), r = j(), a = oe(parseFloat(e.width)), i = oe(parseFloat(e.height)), o = j({ x: 0, y: 0 }), u = v({ get: () => o.value, set(b) {
    var _, V;
    if (!r.value)
      return;
    const { x: I, y: S } = b;
    o.value = b, n("update:color", { h: ((_ = e.color) == null ? void 0 : _.h) ?? 0, s: qe(I, 0, a.value) / a.value, v: 1 - qe(S, 0, i.value) / i.value, a: ((V = e.color) == null ? void 0 : V.a) ?? 1 });
  } }), d = v(() => {
    const { x: b, y: I } = u.value, S = parseInt(e.dotSize, 10) / 2;
    return { width: M(e.dotSize), height: M(e.dotSize), transform: `translate(${M(b - S)}, ${M(I - S)})` };
  }), { resizeRef: c } = Ol((b) => {
    var _;
    if (!((_ = c.value) != null && _.offsetParent))
      return;
    const { width: I, height: S } = b[0].contentRect;
    a.value = I, i.value = S;
  });
  function p(b) {
    b.type === "mousedown" && b.preventDefault(), e.disabled || (f(b), window.addEventListener("mousemove", f), window.addEventListener("mouseup", g), window.addEventListener("touchmove", f), window.addEventListener("touchend", g));
  }
  function f(b) {
    if (e.disabled || !r.value)
      return;
    l.value = !0;
    const I = function(S) {
      return "touches" in S ? { clientX: S.touches[0].clientX, clientY: S.touches[0].clientY } : { clientX: S.clientX, clientY: S.clientY };
    }(b);
    (function(S, _, V) {
      const { left: P, top: E, width: B, height: z } = V;
      u.value = { x: qe(S - P, 0, B), y: qe(_ - E, 0, z) };
    })(I.clientX, I.clientY, r.value.getBoundingClientRect());
  }
  function g() {
    window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", f), window.removeEventListener("touchend", g);
  }
  function A() {
    var V;
    if (!r.value)
      return;
    const b = r.value, I = b.getContext("2d");
    if (!I)
      return;
    const S = I.createLinearGradient(0, 0, b.width, 0);
    S.addColorStop(0, "hsla(0, 0%, 100%, 1)"), S.addColorStop(1, `hsla(${((V = e.color) == null ? void 0 : V.h) ?? 0}, 100%, 50%, 1)`), I.fillStyle = S, I.fillRect(0, 0, b.width, b.height);
    const _ = I.createLinearGradient(0, 0, 0, b.height);
    _.addColorStop(0, "hsla(0, 0%, 0%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), I.fillStyle = _, I.fillRect(0, 0, b.width, b.height);
  }
  return J(() => {
    var b;
    return (b = e.color) == null ? void 0 : b.h;
  }, A, { immediate: !0 }), J(() => [a.value, i.value], (b, I) => {
    A(), o.value = { x: u.value.x * b[0] / I[0], y: u.value.y * b[1] / I[1] };
  }, { flush: "post" }), J(() => e.color, () => {
    l.value ? l.value = !1 : o.value = e.color ? { x: e.color.s * a.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: !0, immediate: !0 }), $t(() => A()), H(() => s("div", { ref: c, class: ["v-color-picker-canvas", e.class], style: e.style, onMousedown: p, onTouchstartPassive: p }, [s("canvas", { ref: r, width: a.value, height: i.value }, null), e.color && s("div", { class: ["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }], style: d.value }, null)])), {};
} }), Rl = O({ divided: Boolean, ...Mt(), ...U(), ...Qe(), ...st(), ...Ie(), ...ze(), ...ke(), ...Tt() }, "VBtnGroup"), Yn = D()({ name: "VBtnGroup", props: Rl(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ve(e), { densityClasses: r } = it(e), { borderClasses: a } = Ft(e), { elevationClasses: i } = ut(e), { roundedClasses: o } = Be(e);
  Nt({ VBtn: { height: "auto", color: Y(e, "color"), density: Y(e, "density"), flat: !0, variant: Y(e, "variant") } }), H(() => s(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, r.value, i.value, o.value, e.class], style: e.style }, n));
} }), ur = O({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), cr = O({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function dr(e, t) {
  let n = !1;
  const l = bt([]), r = _e(e, "modelValue", [], (d) => d == null ? [] : Kn(l, tt(d)), (d) => {
    const c = function(p, f) {
      const g = [];
      return f.forEach((A) => {
        const b = p.findIndex((I) => I.id === A);
        if (~b) {
          const I = p[b];
          g.push(I.value != null ? I.value : b);
        }
      }), g;
    }(l, d);
    return e.multiple ? c : c[0];
  }), a = ye("useGroup");
  function i() {
    const d = l.find((c) => !c.disabled);
    d && e.mandatory === "force" && !r.value.length && (r.value = [d.id]);
  }
  function o(d) {
    if (e.multiple && Ke('This method is not supported when using "multiple" prop'), r.value.length) {
      const c = r.value[0], p = l.findIndex((A) => A.id === c);
      let f = (p + d) % l.length, g = l[f];
      for (; g.disabled && f !== p; )
        f = (f + d) % l.length, g = l[f];
      if (g.disabled)
        return;
      r.value = [l[f].id];
    } else {
      const c = l.find((p) => !p.disabled);
      c && (r.value = [c.id]);
    }
  }
  $t(() => {
    i();
  }), Je(() => {
    n = !0;
  });
  const u = { register: function(d, c) {
    const p = d, f = ht(Symbol.for(`${t.description}:id`), a == null ? void 0 : a.vnode).indexOf(c);
    y(p.value) == null && (p.value = f), f > -1 ? l.splice(f, 0, p) : l.push(p);
  }, unregister: function(d) {
    if (n)
      return;
    i();
    const c = l.findIndex((p) => p.id === d);
    l.splice(c, 1);
  }, selected: r, select: function(d, c) {
    const p = l.find((f) => f.id === d);
    if (!c || !(p != null && p.disabled))
      if (e.multiple) {
        const f = r.value.slice(), g = f.findIndex((b) => b === d), A = ~g;
        if (c = c ?? !A, A && e.mandatory && f.length <= 1 || !A && e.max != null && f.length + 1 > e.max)
          return;
        g < 0 && c ? f.push(d) : g >= 0 && !c && f.splice(g, 1), r.value = f;
      } else {
        const f = r.value.includes(d);
        if (e.mandatory && f)
          return;
        r.value = c ?? !f ? [d] : [];
      }
  }, disabled: Y(e, "disabled"), prev: () => o(l.length - 1), next: () => o(1), isSelected: (d) => r.value.includes(d), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (d) => function(c, p) {
    const f = Kn(c, [p]);
    return f.length ? c.findIndex((g) => g.id === f[0]) : -1;
  }(l, d) };
  return Ze(t, u), u;
}
function Kn(e, t) {
  const n = [];
  return t.forEach((l) => {
    const r = e.find((i) => zt(l, i.value)), a = e[l];
    (r == null ? void 0 : r.value) != null ? n.push(r.id) : a != null && n.push(a.id);
  }), n;
}
const Ll = Symbol.for("vuetify:v-btn-toggle"), pr = O({ ...Rl(), ...ur() }, "VBtnToggle");
D()({ name: "VBtnToggle", props: pr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: r, prev: a, select: i, selected: o } = dr(e, Ll);
  return H(() => {
    const u = Yn.filterProps(e);
    return s(Yn, te({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var d;
      return [(d = n.default) == null ? void 0 : d.call(n, { isSelected: l, next: r, prev: a, select: i, selected: o })];
    } });
  }), { next: r, prev: a, select: i };
} });
const vr = O({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...U(), ...Et(), ...ze({ tag: "div" }), ...ke() }, "VProgressCircular"), fr = D()({ name: "VProgressCircular", props: vr(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, r = j(), { themeClasses: a } = Ve(e), { sizeClasses: i, sizeStyles: o } = Ot(e), { textColorClasses: u, textColorStyles: d } = De(Y(e, "color")), { textColorClasses: c, textColorStyles: p } = De(Y(e, "bgColor")), { intersectionRef: f, isIntersecting: g } = wl(), { resizeRef: A, contentRect: b } = Ol(), I = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = v(() => Number(e.width)), _ = v(() => o.value ? Number(e.size) : b.value ? b.value.width : Math.max(S.value, 32)), V = v(() => 20 / (1 - S.value / _.value) * 2), P = v(() => S.value / _.value * V.value), E = v(() => M((100 - I.value) / 100 * l));
  return _t(() => {
    f.value = r.value, A.value = r.value;
  }), H(() => s(e.tag, { ref: r, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, i.value, u.value, e.class], style: [o.value, d.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [s("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${V.value} ${V.value}` }, [s("circle", { class: ["v-progress-circular__underlay", c.value], style: p.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), s("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": l, "stroke-dashoffset": E.value }, null)]), n.default && s("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), mr = O({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Ll }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ie, appendIcon: ie, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Mt(), ...U(), ...Qe(), ...Rt(), ...st(), ...cr(), ...pn(), ...jt(), ...fn(), ...Ie(), ...Il(), ...Et(), ...ze({ tag: "button" }), ...ke(), ...Tt({ variant: "elevated" }) }, "VBtn"), Tl = D()({ name: "VBtn", directives: { Ripple: gn }, props: mr(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: r } = Ve(e), { borderClasses: a } = Ft(e), { colorClasses: i, colorStyles: o, variantClasses: u } = dn(e), { densityClasses: d } = it(e), { dimensionStyles: c } = Lt(e), { elevationClasses: p } = ut(e), { loaderClasses: f } = vn(e), { locationStyles: g } = Dt(e), { positionClasses: A } = mn(e), { roundedClasses: b } = Be(e), { sizeClasses: I, sizeStyles: S } = Ot(e), _ = function(w, N) {
    let k = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    const x = ye("useGroupItem");
    if (!x)
      throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const m = ot();
    Ze(Symbol.for(`${N.description}:id`), m);
    const h = ve(N, null);
    if (!h) {
      if (!k)
        return h;
      throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${N.description}`);
    }
    const $ = Y(w, "value"), R = v(() => !(!h.disabled.value && !w.disabled));
    h.register({ id: m, value: $, disabled: R }, x), Je(() => {
      h.unregister(m);
    });
    const T = v(() => h.isSelected(m)), q = v(() => T.value && [h.selectedClass.value, w.selectedClass]);
    return J(T, (W) => {
      x.emit("group:selected", { value: W });
    }, { flush: "sync" }), { id: m, isSelected: T, toggle: () => h.select(m, !T.value), select: (W) => h.select(m, W), selectedClass: q, value: $, disabled: R, group: h };
  }(e, e.symbol, !1), V = Vl(e, n), P = v(() => {
    var w;
    return e.active !== void 0 ? e.active : V.isLink.value ? (w = V.isActive) == null ? void 0 : w.value : _ == null ? void 0 : _.isSelected.value;
  }), E = v(() => (_ == null ? void 0 : _.disabled.value) || e.disabled), B = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), z = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function C(w) {
    var N;
    E.value || V.isLink.value && (w.metaKey || w.ctrlKey || w.shiftKey || w.button !== 0 || n.target === "_blank") || ((N = V.navigate) == null || N.call(V, w), _ == null || _.toggle());
  }
  return function(w, N) {
    J(() => {
      var k;
      return (k = w.isActive) == null ? void 0 : k.value;
    }, (k) => {
      w.isLink.value && k && N && nt(() => {
        N(!0);
      });
    }, { immediate: !0 });
  }(V, _ == null ? void 0 : _.select), H(() => {
    var h, $;
    const w = V.isLink.value ? "a" : e.tag, N = !(!e.prependIcon && !l.prepend), k = !(!e.appendIcon && !l.append), x = !(!e.icon || e.icon === !0), m = (_ == null ? void 0 : _.isSelected.value) && (!V.isLink.value || ((h = V.isActive) == null ? void 0 : h.value)) || !_ || (($ = V.isActive) == null ? void 0 : $.value);
    return Se(s(w, { type: w === "a" ? void 0 : "button", class: ["v-btn", _ == null ? void 0 : _.selectedClass.value, { "v-btn--active": P.value, "v-btn--block": e.block, "v-btn--disabled": E.value, "v-btn--elevated": B.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, r.value, a.value, m ? i.value : void 0, d.value, p.value, f.value, A.value, b.value, I.value, u.value, e.class], style: [m ? o.value : void 0, c.value, g.value, S.value, e.style], disabled: E.value || void 0, href: V.href.value, onClick: C, value: z.value }, { default: () => {
      var R;
      return [cn(!0, "v-btn"), !e.icon && N && s("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? s(Ae, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : s(be, { key: "prepend-icon", icon: e.prependIcon }, null)]), s("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && x ? s(be, { key: "content-icon", icon: e.icon }, null) : s(Ae, { key: "content-defaults", disabled: !x, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var T;
        return [((T = l.default) == null ? void 0 : T.call(l)) ?? e.text];
      } })]), !e.icon && k && s("span", { key: "append", class: "v-btn__append" }, [l.append ? s(Ae, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : s(be, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && s("span", { key: "loader", class: "v-btn__loader" }, [((R = l.loader) == null ? void 0 : R.call(l)) ?? s(fr, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[rt("ripple"), !E.value && e.ripple, null]]);
  }), { group: _ };
} }), Ye = { h: 0, s: 0, v: 0, a: 1 }, Xt = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }) }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }) }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: Ce, from: Pt }, Gt = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }) }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.s) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }) }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(100 * e.l) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }) }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(100 * t) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }) }], to: vl, from: an }, Zn = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t }], to: yl, from: hl };
var el;
const Te = { rgb: { ...Xt, inputs: (el = Xt.inputs) == null ? void 0 : el.slice(0, 3) }, rgba: Xt, hsl: { ...Gt, inputs: Gt.inputs.slice(0, 3) }, hsla: Gt, hex: { ...Zn, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t }] }, hexa: Zn }, gr = (e) => {
  let { label: t, ...n } = e;
  return s("div", { class: "v-color-picker-edit__input" }, [s("input", n, null), s("span", null, [t])]);
}, hr = we({ name: "VColorPickerEdit", props: O({ color: Object, disabled: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Te).includes(e) }, modes: { type: Array, default: () => Object.keys(Te), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Te).includes(t)) }, ...U() }, "VColorPickerEdit")(), emits: { "update:color": (e) => !0, "update:mode": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = v(() => e.modes.map((a) => ({ ...Te[a], name: a }))), r = v(() => {
    var o;
    const a = l.value.find((u) => u.name === e.mode);
    if (!a)
      return [];
    const i = e.color ? a.to(e.color) : null;
    return (o = a.inputs) == null ? void 0 : o.map((u) => {
      let { getValue: d, getColor: c, ...p } = u;
      return { ...a.inputProps, ...p, disabled: e.disabled, value: i && d(i), onChange: (f) => {
        const g = f.target;
        g && n("update:color", a.from(c(i ?? a.to(Ye), g.value)));
      } };
    });
  });
  return H(() => {
    var a;
    return s("div", { class: ["v-color-picker-edit", e.class], style: e.style }, [(a = r.value) == null ? void 0 : a.map((i) => s(gr, i, null)), l.value.length > 1 && s(Tl, { icon: "$unfold", size: "x-small", variant: "plain", onClick: () => {
      const i = l.value.findIndex((o) => o.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), hn = Symbol.for("vuetify:v-slider"), yr = O({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: !1, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, ...Ie(), ...st({ elevation: 2 }), ripple: { type: Boolean, default: !0 } }, "Slider"), br = (e) => {
  let { props: t, steps: n, onSliderStart: l, onSliderMove: r, onSliderEnd: a, getActiveThumb: i } = e;
  const { isRtl: o } = Pe(), u = Y(t, "reverse"), d = v(() => t.direction === "vertical"), c = v(() => d.value !== u.value), { min: p, max: f, step: g, decimals: A, roundValue: b } = n, I = v(() => parseInt(t.thumbSize, 10)), S = v(() => parseInt(t.tickSize, 10)), _ = v(() => parseInt(t.trackSize, 10)), V = v(() => (f.value - p.value) / g.value), P = Y(t, "disabled"), E = v(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), B = v(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), z = v(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), C = oe(!1), w = oe(0), N = j(), k = j();
  function x(L) {
    var me;
    const F = t.direction === "vertical", fe = F ? "top" : "left", Q = F ? "height" : "width", ne = F ? "clientY" : "clientX", { [fe]: le, [Q]: G } = (me = N.value) == null ? void 0 : me.$el.getBoundingClientRect(), ee = function(ae, Ne) {
      return "touches" in ae && ae.touches.length ? ae.touches[0][Ne] : "changedTouches" in ae && ae.changedTouches.length ? ae.changedTouches[0][Ne] : ae[Ne];
    }(L, ne);
    let pe = Math.min(Math.max((ee - le - w.value) / G, 0), 1) || 0;
    return (F ? c.value : c.value !== o.value) && (pe = 1 - pe), b(p.value + pe * (f.value - p.value));
  }
  const m = (L) => {
    a({ value: x(L) }), C.value = !1, w.value = 0;
  }, h = (L) => {
    k.value = i(L), k.value && (k.value.focus(), C.value = !0, k.value.contains(L.target) ? w.value = function(F, fe, Q) {
      const ne = Q === "vertical", le = fe.getBoundingClientRect(), G = "touches" in F ? F.touches[0] : F;
      return ne ? G.clientY - (le.top + le.height / 2) : G.clientX - (le.left + le.width / 2);
    }(L, k.value, t.direction) : (w.value = 0, r({ value: x(L) })), l({ value: x(L) }));
  }, $ = { passive: !0, capture: !0 };
  function R(L) {
    r({ value: x(L) });
  }
  function T(L) {
    L.stopPropagation(), L.preventDefault(), m(L), window.removeEventListener("mousemove", R, $), window.removeEventListener("mouseup", T);
  }
  function q(L) {
    var F;
    m(L), window.removeEventListener("touchmove", R, $), (F = L.target) == null || F.removeEventListener("touchend", q);
  }
  const W = (L) => {
    const F = (L - p.value) / (f.value - p.value) * 100;
    return qe(isNaN(F) ? 0 : F, 0, 100);
  }, Z = Y(t, "showTicks"), K = v(() => Z.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((L) => ({ value: L, position: W(L), label: L.toString() })) : Object.keys(t.ticks).map((L) => ({ value: parseFloat(L), position: W(parseFloat(L)), label: t.ticks[L] })) : V.value !== 1 / 0 ? function(L) {
    let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({ length: L }, (fe, Q) => F + Q);
  }(V.value + 1).map((L) => {
    const F = p.value + L * g.value;
    return { value: F, position: W(F) };
  }) : [] : []), X = v(() => K.value.some((L) => {
    let { label: F } = L;
    return !!F;
  })), se = { activeThumbRef: k, color: Y(t, "color"), decimals: A, disabled: P, direction: Y(t, "direction"), elevation: Y(t, "elevation"), hasLabels: X, isReversed: u, indexFromEnd: c, min: p, max: f, mousePressed: C, numTicks: V, onSliderMousedown: function(L) {
    L.preventDefault(), h(L), window.addEventListener("mousemove", R, $), window.addEventListener("mouseup", T, { passive: !1 });
  }, onSliderTouchstart: function(L) {
    var F;
    h(L), window.addEventListener("touchmove", R, $), (F = L.target) == null || F.addEventListener("touchend", q, { passive: !1 });
  }, parsedTicks: K, parseMouseMove: x, position: W, readonly: Y(t, "readonly"), rounded: Y(t, "rounded"), roundValue: b, showTicks: Z, startOffset: w, step: g, thumbSize: I, thumbColor: E, thumbLabel: Y(t, "thumbLabel"), ticks: Y(t, "ticks"), tickSize: S, trackColor: B, trackContainerRef: N, trackFillColor: z, trackSize: _, vertical: d };
  return Ze(hn, se), se;
}, kr = O({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function ce(e, t, n) {
  return D()({ name: e, props: kr({ mode: n, origin: t }), setup(l, r) {
    let { slots: a } = r;
    const i = { onBeforeEnter(o) {
      l.origin && (o.style.transformOrigin = l.origin);
    }, onLeave(o) {
      if (l.leaveAbsolute) {
        const { offsetTop: u, offsetLeft: d, offsetWidth: c, offsetHeight: p } = o;
        o._transitionInitialStyles = { position: o.style.position, top: o.style.top, left: o.style.left, width: o.style.width, height: o.style.height }, o.style.position = "absolute", o.style.top = `${u}px`, o.style.left = `${d}px`, o.style.width = `${c}px`, o.style.height = `${p}px`;
      }
      l.hideOnLeave && o.style.setProperty("display", "none", "important");
    }, onAfterLeave(o) {
      if (l.leaveAbsolute && (o != null && o._transitionInitialStyles)) {
        const { position: u, top: d, left: c, width: p, height: f } = o._transitionInitialStyles;
        delete o._transitionInitialStyles, o.style.position = u || "", o.style.top = d || "", o.style.left = c || "", o.style.width = p || "", o.style.height = f || "";
      }
    } };
    return () => {
      const o = l.group ? oa : It;
      return Vt(o, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : i }, a.default);
    };
  } });
}
function Ml(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return D()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, r) {
    let { slots: a } = r;
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
    const o = `${a[n]}px`;
    a.style[t] = "0", a.offsetHeight, a.style.transition = i.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      a.style[t] = o;
    });
  }, onAfterEnter: r, onEnterCancelled: r, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, [t]: a.style[t] }, a.style.overflow = "hidden", a.style[t] = `${a[n]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(a) {
    e && a._parent && a._parent.classList.remove(e), r(a);
  }
  function r(a) {
    const i = a._initialStyle[t];
    a.style.overflow = a._initialStyle.overflow, i != null && (a.style[t] = i), delete a._initialStyle;
  }
}
ce("fab-transition", "center center", "out-in"), ce("dialog-bottom-transition"), ce("dialog-top-transition"), ce("fade-transition");
const Sr = ce("scale-transition");
ce("scroll-x-transition"), ce("scroll-x-reverse-transition"), ce("scroll-y-transition"), ce("scroll-y-reverse-transition"), ce("slide-x-transition"), ce("slide-x-reverse-transition");
const jl = ce("slide-y-transition");
ce("slide-y-reverse-transition"), Ml("expand-transition", Fl());
const Cr = Ml("expand-x-transition", Fl("", !0)), wr = O({ focused: Boolean, max: { type: Number, required: !0 }, min: { type: Number, required: !0 }, modelValue: { type: Number, required: !0 }, position: { type: Number, required: !0 }, ripple: { type: [Boolean, Object], default: !0 }, ...U() }, "VSliderThumb"), _r = D()({ name: "VSliderThumb", directives: { Ripple: gn }, props: wr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = ve(hn), { isRtl: a, rtlClasses: i } = Pe();
  if (!r)
    throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { thumbColor: o, step: u, disabled: d, thumbSize: c, thumbLabel: p, direction: f, isReversed: g, vertical: A, readonly: b, elevation: I, mousePressed: S, decimals: _, indexFromEnd: V } = r, P = v(() => d.value ? void 0 : I.value), { elevationClasses: E } = ut(P), { textColorClasses: B, textColorStyles: z } = De(o), { pageup: C, pagedown: w, end: N, home: k, left: x, right: m, down: h, up: $ } = Sa, R = [C, w, N, k, x, m, h, $], T = v(() => u.value ? [1, 2, 3] : [1, 5, 10]);
  function q(W) {
    const Z = function(K, X) {
      if (!R.includes(K.key))
        return;
      K.preventDefault();
      const se = u.value || 0.1, L = (e.max - e.min) / se;
      if ([x, m, h, $].includes(K.key)) {
        const F = (A.value ? [a.value ? x : m, g.value ? h : $] : V.value !== a.value ? [x, $] : [m, $]).includes(K.key) ? 1 : -1, fe = K.shiftKey ? 2 : K.ctrlKey ? 1 : 0;
        X += F * se * T.value[fe];
      } else
        K.key === k ? X = e.min : K.key === N ? X = e.max : X -= (K.key === w ? 1 : -1) * se * (L > 100 ? L / 10 : 10);
      return Math.max(e.min, Math.min(e.max, X));
    }(W, e.modelValue);
    Z != null && l("update:modelValue", Z);
  }
  return H(() => {
    const W = M(V.value ? 100 - e.position : e.position, "%");
    return s("div", { class: ["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && S.value }, e.class, i.value], style: [{ "--v-slider-thumb-position": W, "--v-slider-thumb-size": M(c.value) }, e.style], role: "slider", tabindex: d.value ? -1 : 0, "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.modelValue, "aria-readonly": !!b.value, "aria-orientation": f.value, onKeydown: b.value ? void 0 : q }, [s("div", { class: ["v-slider-thumb__surface", B.value, E.value], style: { ...z.value } }, null), Se(s("div", { class: ["v-slider-thumb__ripple", B.value], style: z.value }, null), [[rt("ripple"), e.ripple, null, { circle: !0, center: !0 }]]), s(Sr, { origin: "bottom center" }, { default: () => {
      var Z;
      return [Se(s("div", { class: "v-slider-thumb__label-container" }, [s("div", { class: ["v-slider-thumb__label"] }, [s("div", null, [((Z = n["thumb-label"]) == null ? void 0 : Z.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(u.value ? _.value : 1)])])]), [[Bt, p.value && e.focused || p.value === "always"]])];
    } })]);
  }), {};
} }), xr = O({ start: { type: Number, required: !0 }, stop: { type: Number, required: !0 }, ...U() }, "VSliderTrack"), Vr = D()({ name: "VSliderTrack", props: xr(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const l = ve(hn);
  if (!l)
    throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: r, parsedTicks: a, rounded: i, showTicks: o, tickSize: u, trackColor: d, trackFillColor: c, trackSize: p, vertical: f, min: g, max: A, indexFromEnd: b } = l, { roundedClasses: I } = Be(i), { backgroundColorClasses: S, backgroundColorStyles: _ } = He(c), { backgroundColorClasses: V, backgroundColorStyles: P } = He(d), E = v(() => `inset-${f.value ? "block" : "inline"}-${b.value ? "end" : "start"}`), B = v(() => f.value ? "height" : "width"), z = v(() => ({ [E.value]: "0%", [B.value]: "100%" })), C = v(() => e.stop - e.start), w = v(() => ({ [E.value]: M(e.start, "%"), [B.value]: M(C.value, "%") })), N = v(() => o.value ? (f.value ? a.value.slice().reverse() : a.value).map((k, x) => {
    var h;
    const m = k.value !== g.value && k.value !== A.value ? M(k.position, "%") : void 0;
    return s("div", { key: k.value, class: ["v-slider-track__tick", { "v-slider-track__tick--filled": k.position >= e.start && k.position <= e.stop, "v-slider-track__tick--first": k.value === g.value, "v-slider-track__tick--last": k.value === A.value }], style: { [E.value]: m } }, [(k.label || n["tick-label"]) && s("div", { class: "v-slider-track__tick-label" }, [((h = n["tick-label"]) == null ? void 0 : h.call(n, { tick: k, index: x })) ?? k.label])]);
  }) : []);
  return H(() => s("div", { class: ["v-slider-track", I.value, e.class], style: [{ "--v-slider-track-size": M(p.value), "--v-slider-tick-size": M(u.value) }, e.style] }, [s("div", { class: ["v-slider-track__background", V.value, { "v-slider-track__background--opacity": !!r.value || !c.value }], style: { ...z.value, ...P.value } }, null), s("div", { class: ["v-slider-track__fill", S.value], style: { ...w.value, ..._.value } }, null), o.value && s("div", { class: ["v-slider-track__ticks", { "v-slider-track__ticks--always-show": o.value === "always" }] }, [N.value])])), {};
} });
function Dl(e) {
  const { t } = function() {
    const n = ve(_l);
    if (!n)
      throw new Error("[Vuetify] Could not find injected locale instance");
    return n;
  }();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], a = e[`onClick:${l}`], i = a && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return s(be, { icon: e[`${l}Icon`], "aria-label": i, onClick: a }, null);
  } };
}
const Ir = O({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...U(), ...un({ transition: { component: jl, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Br = D()({ name: "VMessages", props: Ir(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => tt(e.messages)), { textColorClasses: r, textColorStyles: a } = De(v(() => e.color));
  return H(() => s(Ge, { transition: e.transition, tag: "div", class: ["v-messages", r.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((i, o) => s("div", { class: "v-messages__message", key: `${o}-${l.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), yn = O({ focused: Boolean, "onUpdate:focused": Fe() }, "focus");
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe();
  const n = _e(e, "focused");
  return { focusClasses: v(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const $r = Symbol.for("vuetify:form"), Ar = O({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...yn() }, "validation");
function zr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xe(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ot();
  const l = _e(e, "modelValue"), r = v(() => e.validationValue === void 0 ? l.value : e.validationValue), a = ve($r, null), i = j([]), o = oe(!0), u = v(() => !(!tt(l.value === "" ? null : l.value).length && !tt(r.value === "" ? null : r.value).length)), d = v(() => !!(e.disabled ?? (a == null ? void 0 : a.isDisabled.value))), c = v(() => !!(e.readonly ?? (a == null ? void 0 : a.isReadonly.value))), p = v(() => {
    var P;
    return (P = e.errorMessages) != null && P.length ? tt(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors)) : i.value;
  }), f = v(() => {
    let P = (e.validateOn ?? (a == null ? void 0 : a.validateOn.value)) || "input";
    P === "lazy" && (P = "input lazy");
    const E = new Set((P == null ? void 0 : P.split(" ")) ?? []);
    return { blur: E.has("blur") || E.has("input"), input: E.has("input"), submit: E.has("submit"), lazy: E.has("lazy") };
  }), g = v(() => {
    var P;
    return !e.error && !((P = e.errorMessages) != null && P.length) && (!e.rules.length || (o.value ? !i.value.length && !f.value.lazy || null : !i.value.length));
  }), A = oe(!1), b = v(() => ({ [`${t}--error`]: g.value === !1, [`${t}--dirty`]: u.value, [`${t}--disabled`]: d.value, [`${t}--readonly`]: c.value })), I = v(() => e.name ?? y(n));
  function S() {
    l.value = null, nt(_);
  }
  function _() {
    o.value = !0, f.value.lazy ? i.value = [] : V(!0);
  }
  async function V() {
    let P = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const E = [];
    A.value = !0;
    for (const B of e.rules) {
      if (E.length >= +(e.maxErrors ?? 1))
        break;
      const z = typeof B == "function" ? B : () => B, C = await z(r.value);
      C !== !0 && (C === !1 || typeof C == "string" ? E.push(C || "") : console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    return i.value = E, A.value = !1, o.value = P, i.value;
  }
  return rl(() => {
    a == null || a.register({ id: I.value, validate: V, reset: S, resetValidation: _ });
  }), Je(() => {
    a == null || a.unregister(I.value);
  }), $t(async () => {
    f.value.lazy || await V(!0), a == null || a.update(I.value, g.value, p.value);
  }), Qt(() => f.value.input, () => {
    J(r, () => {
      if (r.value != null)
        V();
      else if (e.focused) {
        const P = J(() => e.focused, (E) => {
          E || V(), P();
        });
      }
    });
  }), Qt(() => f.value.blur, () => {
    J(() => e.focused, (P) => {
      P || V();
    });
  }), J([g, p], () => {
    a == null || a.update(I.value, g.value, p.value);
  }), { errorMessages: p, isDirty: u, isDisabled: d, isReadonly: c, isPristine: o, isValid: g, isValidating: A, reset: S, resetValidation: _, validate: V, validationClasses: b };
}
const kn = O({ id: String, appendIcon: ie, centerAffix: { type: Boolean, default: !0 }, prependIcon: ie, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Fe(), "onClick:append": Fe(), ...U(), ...Qe(), ...Ar() }, "VInput"), wt = D()({ name: "VInput", props: { ...kn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: r } = t;
  const { densityClasses: a } = it(e), { rtlClasses: i } = Pe(), { InputIcon: o } = Dl(e), u = ot(), d = v(() => e.id || `input-${u}`), c = v(() => `${d.value}-messages`), { errorMessages: p, isDirty: f, isDisabled: g, isReadonly: A, isPristine: b, isValid: I, isValidating: S, reset: _, resetValidation: V, validate: P, validationClasses: E } = zr(e, "v-input", d), B = v(() => ({ id: d, messagesId: c, isDirty: f, isDisabled: g, isReadonly: A, isPristine: b, isValid: I, isValidating: S, reset: _, resetValidation: V, validate: P })), z = v(() => {
    var C;
    return (C = e.errorMessages) != null && C.length || !b.value && p.value.length ? p.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return H(() => {
    var x, m, h, $;
    const C = !(!l.prepend && !e.prependIcon), w = !(!l.append && !e.appendIcon), N = z.value.length > 0, k = !e.hideDetails || e.hideDetails === "auto" && (N || !!l.details);
    return s("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, a.value, i.value, E.value, e.class], style: e.style }, [C && s("div", { key: "prepend", class: "v-input__prepend" }, [(x = l.prepend) == null ? void 0 : x.call(l, B.value), e.prependIcon && s(o, { key: "prepend-icon", name: "prepend" }, null)]), l.default && s("div", { class: "v-input__control" }, [(m = l.default) == null ? void 0 : m.call(l, B.value)]), w && s("div", { key: "append", class: "v-input__append" }, [e.appendIcon && s(o, { key: "append-icon", name: "append" }, null), (h = l.append) == null ? void 0 : h.call(l, B.value)]), k && s("div", { class: "v-input__details" }, [s(Br, { id: c.value, active: N, messages: z.value }, { message: l.message }), ($ = l.details) == null ? void 0 : $.call(l, B.value)])]);
  }), { reset: _, resetValidation: V, validate: P, isValid: I, errorMessages: p };
} }), Pr = O({ text: String, onClick: Fe(), ...U(), ...ke() }, "VLabel"), Hl = D()({ name: "VLabel", props: Pr(), setup(e, t) {
  let { slots: n } = t;
  return H(() => {
    var l;
    return s("label", { class: ["v-label", { "v-label--clickable": !!e.onClick }, e.class], style: e.style, onClick: e.onClick }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), Nr = O({ ...yn(), ...yr(), ...kn(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Jn = D()({ name: "VSlider", props: Nr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, start: (e) => !0, end: (e) => !0 }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const r = j(), { rtlClasses: a } = Pe(), i = ((B) => {
    const z = v(() => parseFloat(B.min)), C = v(() => parseFloat(B.max)), w = v(() => +B.step > 0 ? parseFloat(B.step) : 0), N = v(() => Math.max(xn(w.value), xn(z.value)));
    return { min: z, max: C, step: w, decimals: N, roundValue: function(k) {
      if (k = parseFloat(k), w.value <= 0)
        return k;
      const x = qe(k, z.value, C.value), m = z.value % w.value, h = Math.round((x - m) / w.value) * w.value + m;
      return parseFloat(Math.min(h, C.value).toFixed(N.value));
    } };
  })(e), o = _e(e, "modelValue", void 0, (B) => i.roundValue(B ?? i.min.value)), { min: u, max: d, mousePressed: c, roundValue: p, onSliderMousedown: f, onSliderTouchstart: g, trackContainerRef: A, position: b, hasLabels: I, readonly: S } = br({ props: e, steps: i, onSliderStart: () => {
    l("start", o.value);
  }, onSliderEnd: (B) => {
    let { value: z } = B;
    const C = p(z);
    o.value = C, l("end", C);
  }, onSliderMove: (B) => {
    let { value: z } = B;
    return o.value = p(z);
  }, getActiveThumb: () => {
    var B;
    return (B = r.value) == null ? void 0 : B.$el;
  } }), { isFocused: _, focus: V, blur: P } = bn(e), E = v(() => b(o.value));
  return H(() => {
    const B = wt.filterProps(e), z = !!(e.label || n.label || n.prepend);
    return s(wt, te({ class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || I.value, "v-slider--focused": _.value, "v-slider--pressed": c.value, "v-slider--disabled": e.disabled }, a.value, e.class], style: e.style }, B, { focused: _.value }), { ...n, prepend: z ? (C) => {
      var w, N;
      return s(he, null, [((w = n.label) == null ? void 0 : w.call(n, C)) ?? (e.label ? s(Hl, { id: C.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (N = n.prepend) == null ? void 0 : N.call(n, C)]);
    } : void 0, default: (C) => {
      let { id: w, messagesId: N } = C;
      return s("div", { class: "v-slider__container", onMousedown: S.value ? void 0 : f, onTouchstartPassive: S.value ? void 0 : g }, [s("input", { id: w.value, name: e.name || w.value, disabled: !!e.disabled, readonly: !!e.readonly, tabindex: "-1", value: o.value }, null), s(Vr, { ref: A, start: 0, stop: E.value }, { "tick-label": n["tick-label"] }), s(_r, { ref: r, "aria-describedby": N.value, focused: _.value, min: u.value, max: d.value, modelValue: o.value, "onUpdate:modelValue": (k) => o.value = k, position: E.value, elevation: e.elevation, onFocus: V, onBlur: P, ripple: e.ripple }, { "thumb-label": n["thumb-label"] })]);
    } });
  }), {};
} }), Er = we({ name: "VColorPickerPreview", props: O({ color: { type: Object }, disabled: Boolean, hideAlpha: Boolean, ...U() }, "VColorPickerPreview")(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  const l = new AbortController();
  async function r() {
    if (!Sn)
      return;
    const a = new window.EyeDropper();
    try {
      const i = hl((await a.open({ signal: l.signal })).sRGBHex);
      n("update:color", { ...e.color ?? Ye, ...i });
    } catch {
    }
  }
  return ia(() => l.abort()), H(() => {
    var a, i;
    return s("div", { class: ["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class], style: e.style }, [Sn && s("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [s(Tl, { onClick: r, icon: "$eyeDropper", variant: "plain", density: "comfortable" }, null)]), s("div", { class: "v-color-picker-preview__dot" }, [s("div", { style: { background: ml(e.color ?? Ye) } }, null)]), s("div", { class: "v-color-picker-preview__sliders" }, [s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__hue", modelValue: (a = e.color) == null ? void 0 : a.h, "onUpdate:modelValue": (o) => n("update:color", { ...e.color ?? Ye, h: o }), step: 0, min: 0, max: 360, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null), !e.hideAlpha && s(Jn, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", modelValue: ((i = e.color) == null ? void 0 : i.a) ?? 1, "onUpdate:modelValue": (o) => n("update:color", { ...e.color ?? Ye, a: o }), step: 1 / 256, min: 0, max: 1, disabled: e.disabled, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: !0 }, null)])]);
  }), {};
} }), Or = { red: { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, pink: { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, purple: { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, deepPurple: { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, indigo: { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, blue: { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, lightBlue: { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, cyan: { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, teal: { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, green: { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, lightGreen: { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, lime: { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, yellow: { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, amber: { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, orange: { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, deepOrange: { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, brown: { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, blueGrey: { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, grey: { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, shades: { black: "#000000", white: "#ffffff", transparent: "#ffffff00" } }, Rr = O({ swatches: { type: Array, default: () => function(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}(Or) }, disabled: Boolean, color: Object, maxHeight: [Number, String], ...U() }, "VColorPickerSwatches"), Lr = we({ name: "VColorPickerSwatches", props: Rr(), emits: { "update:color": (e) => !0 }, setup(e, t) {
  let { emit: n } = t;
  return H(() => s("div", { class: ["v-color-picker-swatches", e.class], style: [{ maxHeight: M(e.maxHeight) }, e.style] }, [s("div", null, [e.swatches.map((l) => s("div", { class: "v-color-picker-swatches__swatch" }, [l.map((r) => {
    const a = $e(r), i = Pt(a), o = fl(a);
    return s("div", { class: "v-color-picker-swatches__color", onClick: () => i && n("update:color", i) }, [s("div", { style: { background: o } }, [e.color && zt(e.color, i) ? s(be, { size: "x-small", icon: "$success", color: Oa(r, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), Wl = O({ color: String, ...Mt(), ...U(), ...Rt(), ...st(), ...jt(), ...fn(), ...Ie(), ...ze(), ...ke() }, "VSheet"), Qn = D()({ name: "VSheet", props: Wl(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ve(e), { backgroundColorClasses: r, backgroundColorStyles: a } = He(Y(e, "color")), { borderClasses: i } = Ft(e), { dimensionStyles: o } = Lt(e), { elevationClasses: u } = ut(e), { locationStyles: d } = Dt(e), { positionClasses: c } = mn(e), { roundedClasses: p } = Be(e);
  return H(() => s(e.tag, { class: ["v-sheet", l.value, r.value, i.value, u.value, c.value, p.value, e.class], style: [a.value, o.value, d.value, e.style] }, n)), {};
} }), Tr = we({ name: "VColorPicker", props: O({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(Te).includes(e) }, modes: { type: Array, default: () => Object.keys(Te), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(Te).includes(t)) }, showSwatches: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...ul(Wl({ width: 300 }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"]) }, "VColorPicker")(), emits: { "update:modelValue": (e) => !0, "update:mode": (e) => !0 }, setup(e) {
  const t = _e(e, "mode"), n = j(null), l = _e(e, "modelValue", void 0, (u) => {
    if (u == null || u === "")
      return null;
    let d;
    try {
      d = Pt($e(u));
    } catch (c) {
      return Ke(c), null;
    }
    return d;
  }, (u) => u ? function(d, c) {
    if (c == null || typeof c == "string") {
      const p = yl(d);
      return d.a === 1 ? p.slice(0, 7) : p;
    }
    if (typeof c == "object") {
      let p;
      return Le(c, ["r", "g", "b"]) ? p = Ce(d) : Le(c, ["h", "s", "l"]) ? p = vl(d) : Le(c, ["h", "s", "v"]) && (p = d), function(f, g) {
        if (g) {
          const { a: A, ...b } = f;
          return b;
        }
        return f;
      }(p, !Le(c, ["a"]) && d.a === 1);
    }
    return d;
  }(u, e.modelValue) : null), r = v(() => l.value ? { ...l.value, h: n.value ?? l.value.h } : null), { rtlClasses: a } = Pe();
  let i = !0;
  J(l, (u) => {
    i ? u && (n.value = u.h) : i = !0;
  }, { immediate: !0 });
  const o = (u) => {
    i = !1, n.value = u.h, l.value = u;
  };
  return $t(() => {
    e.modes.includes(t.value) || (t.value = e.modes[0]);
  }), Nt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), H(() => {
    const u = Qn.filterProps(e);
    return s(Qn, te({ rounded: e.rounded, elevation: e.elevation, theme: e.theme, class: ["v-color-picker", a.value, e.class], style: [{ "--v-color-picker-color-hsv": ml({ ...r.value ?? Ye, a: 1 }) }, e.style] }, u, { maxWidth: e.width }), { default: () => [!e.hideCanvas && s(sr, { key: "canvas", color: r.value, "onUpdate:color": o, disabled: e.disabled, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && s("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && s(Er, { key: "preview", color: r.value, "onUpdate:color": o, hideAlpha: !t.value.endsWith("a"), disabled: e.disabled }, null), !e.hideInputs && s(hr, { key: "edit", modes: e.modes, mode: t.value, "onUpdate:mode": (d) => t.value = d, color: r.value, "onUpdate:color": o, disabled: e.disabled }, null)]), e.showSwatches && s(Lr, { key: "swatches", color: r.value, "onUpdate:color": o, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled }, null)] });
  }), {};
} }), Mr = O({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...U(), ...un({ transition: { component: jl } }) }, "VCounter"), Fr = D()({ name: "VCounter", functional: !0, props: Mr(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return H(() => s(Ge, { transition: e.transition }, { default: () => [Se(s("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Bt, e.active]])] })), {};
} }), jr = O({ floating: Boolean, ...U() }, "VFieldLabel"), gt = D()({ name: "VFieldLabel", props: jr(), setup(e, t) {
  let { slots: n } = t;
  return H(() => s(Hl, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Dr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ul = O({ appendInnerIcon: ie, bgColor: String, clearable: Boolean, clearIcon: { type: ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Dr.includes(e) }, "onClick:clear": Fe(), "onClick:appendInner": Fe(), "onClick:prependInner": Fe(), ...U(), ...pn(), ...Ie(), ...ke() }, "VField"), ql = D()({ name: "VField", inheritAttrs: !1, props: { id: String, ...yn(), ...Ul() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const { themeClasses: a } = Ve(e), { loaderClasses: i } = vn(e), { focusClasses: o, isFocused: u, focus: d, blur: c } = bn(e), { InputIcon: p } = Dl(e), { roundedClasses: f } = Be(e), { rtlClasses: g } = Pe(), A = v(() => e.dirty || e.active), b = v(() => !(e.singleLine || !e.label && !r.label)), I = ot(), S = v(() => e.id || `input-${I}`), _ = v(() => `${S.value}-messages`), V = j(), P = j(), E = j(), B = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: z, backgroundColorStyles: C } = He(Y(e, "bgColor")), { textColorClasses: w, textColorStyles: N } = De(v(() => e.error || e.disabled ? void 0 : A.value && u.value ? e.color : e.baseColor));
  J(A, (m) => {
    if (b.value) {
      const h = V.value.$el, $ = P.value.$el;
      requestAnimationFrame(() => {
        const R = function(Q) {
          const ne = Q.getBoundingClientRect(), le = getComputedStyle(Q), G = le.transform;
          if (G) {
            let ee, pe, me, ae, Ne;
            if (G.startsWith("matrix3d("))
              ee = G.slice(9, -1).split(/, /), pe = +ee[0], me = +ee[5], ae = +ee[12], Ne = +ee[13];
            else {
              if (!G.startsWith("matrix("))
                return new Ut(ne);
              ee = G.slice(7, -1).split(/, /), pe = +ee[0], me = +ee[3], ae = +ee[4], Ne = +ee[5];
            }
            const Ht = le.transformOrigin, Gl = ne.x - ae - (1 - pe) * parseFloat(Ht), Yl = ne.y - Ne - (1 - me) * parseFloat(Ht.slice(Ht.indexOf(" ") + 1)), Kl = pe ? ne.width / pe : Q.offsetWidth + 1, Zl = me ? ne.height / me : Q.offsetHeight + 1;
            return new Ut({ x: Gl, y: Yl, width: Kl, height: Zl });
          }
          return new Ut(ne);
        }(h), T = $.getBoundingClientRect(), q = T.x - R.x, W = T.y - R.y - (R.height / 2 - T.height / 2), Z = T.width / 0.75, K = Math.abs(Z - R.width) > 1 ? { maxWidth: M(Z) } : void 0, X = getComputedStyle(h), se = getComputedStyle($), L = 1e3 * parseFloat(X.transitionDuration) || 150, F = parseFloat(se.getPropertyValue("--v-field-label-scale")), fe = se.getPropertyValue("color");
        h.style.visibility = "visible", $.style.visibility = "hidden", function(Q, ne, le) {
          if (Q.animate === void 0)
            return { finished: Promise.resolve() };
          let G;
          try {
            G = Q.animate(ne, le);
          } catch {
            return { finished: Promise.resolve() };
          }
          return G.finished === void 0 && (G.finished = new Promise((ee) => {
            G.onfinish = () => {
              ee(G);
            };
          })), G;
        }(h, { transform: `translate(${q}px, ${W}px) scale(${F})`, color: fe, ...K }, { duration: L, easing: "cubic-bezier(0.4, 0, 0.2, 1)", direction: m ? "normal" : "reverse" }).finished.then(() => {
          h.style.removeProperty("visibility"), $.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const k = v(() => ({ isActive: A, isFocused: u, controlRef: E, blur: c, focus: d }));
  function x(m) {
    m.target !== document.activeElement && m.preventDefault();
  }
  return H(() => {
    var q, W, Z;
    const m = e.variant === "outlined", h = r["prepend-inner"] || e.prependInnerIcon, $ = !(!e.clearable && !r.clear), R = !!(r["append-inner"] || e.appendInnerIcon || $), T = () => r.label ? r.label({ ...k.value, label: e.label, props: { for: S.value } }) : e.label;
    return s("div", te({ class: ["v-field", { "v-field--active": A.value, "v-field--appended": R, "v-field--center-affix": e.centerAffix ?? !B.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": h, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !T(), [`v-field--variant-${e.variant}`]: !0 }, a.value, z.value, o.value, i.value, f.value, g.value, e.class], style: [C.value, e.style], onClick: x }, n), [s("div", { class: "v-field__overlay" }, null), s(xl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: r.loader }), h && s("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && s(p, { key: "prepend-icon", name: "prependInner" }, null), (q = r["prepend-inner"]) == null ? void 0 : q.call(r, k.value)]), s("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && s(gt, { key: "floating-label", ref: P, class: [w.value], floating: !0, for: S.value, style: N.value }, { default: () => [T()] }), s(gt, { ref: V, for: S.value }, { default: () => [T()] }), (W = r.default) == null ? void 0 : W.call(r, { ...k.value, props: { id: S.value, class: "v-field__input", "aria-describedby": _.value }, focus: d, blur: c })]), $ && s(Cr, { key: "clear" }, { default: () => [Se(s("div", { class: "v-field__clearable", onMousedown: (K) => {
      K.preventDefault(), K.stopPropagation();
    } }, [r.clear ? r.clear() : s(p, { name: "clear" }, null)]), [[Bt, e.dirty]])] }), R && s("div", { key: "append", class: "v-field__append-inner" }, [(Z = r["append-inner"]) == null ? void 0 : Z.call(r, k.value), e.appendInnerIcon && s(p, { key: "append-icon", name: "appendInner" }, null)]), s("div", { class: ["v-field__outline", w.value], style: N.value }, [m && s(he, null, [s("div", { class: "v-field__outline__start" }, null), b.value && s("div", { class: "v-field__outline__notch" }, [s(gt, { ref: P, floating: !0, for: S.value }, { default: () => [T()] })]), s("div", { class: "v-field__outline__end" }, null)]), B.value && b.value && s(gt, { ref: P, floating: !0, for: S.value }, { default: () => [T()] })])]);
  }), { controlRef: E };
} });
function Hr(e) {
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
const Wr = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ur = O({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...kn(), ...Ul() }, "VTextField"), qr = D()({ name: "VTextField", directives: { Intersect: Sl }, inheritAttrs: !1, props: Ur(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: r } = t;
  const a = _e(e, "modelValue"), { isFocused: i, focus: o, blur: u } = bn(e), d = v(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), c = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), p = v(() => ["plain", "underlined"].includes(e.variant));
  function f(B, z) {
    var C, w;
    e.autofocus && B && ((w = (C = z[0].target) == null ? void 0 : C.focus) == null || w.call(C));
  }
  const g = j(), A = j(), b = j(), I = v(() => Wr.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function S() {
    var B;
    b.value !== document.activeElement && ((B = b.value) == null || B.focus()), i.value || o();
  }
  function _(B) {
    l("mousedown:control", B), B.target !== b.value && (S(), B.preventDefault());
  }
  function V(B) {
    S(), l("click:control", B);
  }
  function P(B) {
    B.stopPropagation(), S(), nt(() => {
      a.value = null, function(z) {
        for (var C = arguments.length, w = new Array(C > 1 ? C - 1 : 0), N = 1; N < C; N++)
          w[N - 1] = arguments[N];
        if (Array.isArray(z))
          for (const k of z)
            k(...w);
        else
          typeof z == "function" && z(...w);
      }(e["onClick:clear"], B);
    });
  }
  function E(B) {
    var C;
    const z = B.target;
    if (a.value = z.value, ((C = e.modelModifiers) == null ? void 0 : C.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const w = [z.selectionStart, z.selectionEnd];
      nt(() => {
        z.selectionStart = w[0], z.selectionEnd = w[1];
      });
    }
  }
  return H(() => {
    const B = !!(r.counter || e.counter !== !1 && e.counter != null), z = !(!B && !r.details), [C, w] = function(m) {
      const [h, $] = _n(m, [cl]), R = ul(h, Ca), [T, q] = _n($, ["class", "style", "id", /^data-/]);
      return Object.assign(T, h), Object.assign(q, R), [T, q];
    }(n), { modelValue: N, ...k } = wt.filterProps(e), x = Hr(e);
    return s(wt, te({ ref: g, modelValue: a.value, "onUpdate:modelValue": (m) => a.value = m, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": p.value }, e.class], style: e.style }, C, k, { centerAffix: !p.value, focused: i.value }), { ...r, default: (m) => {
      let { id: h, isDisabled: $, isDirty: R, isReadonly: T, isValid: q } = m;
      return s(ql, te({ ref: A, onMousedown: _, onClick: V, "onClick:clear": P, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, x, { id: h.value, active: I.value || R.value, dirty: R.value || e.dirty, disabled: $.value, focused: i.value, error: q.value === !1 }), { ...r, default: (W) => {
        let { props: { class: Z, ...K } } = W;
        const X = Se(s("input", te({ ref: b, value: a.value, onInput: E, autofocus: e.autofocus, readonly: T.value, disabled: $.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: S, onBlur: u }, K, w), null), [[rt("intersect"), { handler: f }, null, { once: !0 }]]);
        return s(he, null, [e.prefix && s("span", { class: "v-text-field__prefix" }, [s("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), r.default ? s("div", { class: Z, "data-no-activator": "" }, [r.default(), X]) : sa(X, { class: Z }), e.suffix && s("span", { class: "v-text-field__suffix" }, [s("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: z ? (m) => {
      var h;
      return s(he, null, [(h = r.details) == null ? void 0 : h.call(r, m), B && s(he, null, [s("span", null, null), s(Fr, { active: e.persistentCounter || i.value, value: d.value, max: c.value }, r.counter)])]);
    } : void 0 });
  }), function(B) {
    for (var z = arguments.length, C = new Array(z > 1 ? z - 1 : 0), w = 1; w < z; w++)
      C[w - 1] = arguments[w];
    return B[Yt] = C, new Proxy(B, { get(N, k) {
      if (Reflect.has(N, k))
        return Reflect.get(N, k);
      if (typeof k != "symbol" && !k.startsWith("$") && !k.startsWith("__")) {
        for (const x of C)
          if (x.value && Reflect.has(x.value, k)) {
            const m = Reflect.get(x.value, k);
            return typeof m == "function" ? m.bind(x.value) : m;
          }
      }
    }, has(N, k) {
      if (Reflect.has(N, k))
        return !0;
      if (typeof k == "symbol" || k.startsWith("$") || k.startsWith("__"))
        return !1;
      for (const x of C)
        if (x.value && Reflect.has(x.value, k))
          return !0;
      return !1;
    }, set(N, k, x) {
      if (Reflect.has(N, k))
        return Reflect.set(N, k, x);
      if (typeof k == "symbol" || k.startsWith("$") || k.startsWith("__"))
        return !1;
      for (const m of C)
        if (m.value && Reflect.has(m.value, k))
          return Reflect.set(m.value, k, x);
      return !1;
    }, getOwnPropertyDescriptor(N, k) {
      var m;
      const x = Reflect.getOwnPropertyDescriptor(N, k);
      if (x)
        return x;
      if (typeof k != "symbol" && !k.startsWith("$") && !k.startsWith("__")) {
        for (const h of C) {
          if (!h.value)
            continue;
          const $ = Kt(h.value, k) ?? ("_" in h.value ? Kt((m = h.value._) == null ? void 0 : m.setupState, k) : void 0);
          if ($)
            return $;
        }
        for (const h of C) {
          const $ = h.value && h.value[Yt];
          if (!$)
            continue;
          const R = $.slice();
          for (; R.length; ) {
            const T = R.shift(), q = Kt(T.value, k);
            if (q)
              return q;
            const W = T.value && T.value[Yt];
            W && R.push(...W);
          }
        }
      }
    } });
  }({}, g, A, b);
} }), Xr = { key: 1 }, Gr = { key: 0, class: "text-error ms-1" }, Yr = ((e) => (ha("data-v-461a5893"), e = e(), ya(), e))(() => ol("div", { class: "position-elm-helper" }, null, -1)), Kr = xt({ inheritAttrs: !1, __name: "VColorField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, clearable: { default: !1 }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, canvasHeight: {}, dotSize: {}, hideCanvas: {}, hideInputs: {}, hideSliders: {}, mode: {}, modes: {}, showSwatches: {}, swatches: {}, swatchesMaxHeight: {}, variant: { default: "filled" }, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { type: [String, null, Boolean], default: "pip" }, pipBorderRadius: { default: "50%" }, pipSize: {}, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(e, { emit: t }) {
  var x;
  const n = ua(), l = ca(), r = t, a = e, i = ve(Xl, {}), o = bt({ ...a, ...i });
  _t(() => {
    Object.assign(o, { ...a, ...i });
  });
  const u = j({ VCard: { elevation: 5, hover: !1, loading: !1, verticalOffset: 28, ...o.cardProps }, VColorPicker: { canvasHeight: o.canvasHeight, dotSize: o.dotSize, elevation: 0, hideCanvas: o.hideCanvas, hideInputs: o.hideInputs, hideSliders: o.hideSliders, mode: o.mode, modes: o.modes, showSwatches: o.showSwatches, swatches: o.swatches, swatchesMaxHeight: o.swatchesMaxHeight, ...o.colorPickerProps } }), d = j(null), c = j({}), p = j(!1), f = j(null), g = j(n.modelValue), A = j(n.modelValue), b = j((x = u.value.VColorPicker) == null ? void 0 : x.mode), I = j(o.theme ?? void 0);
  let S = bt({ bottom: 0, height: 150, left: 0, right: 0, top: 0, width: 300 });
  const _ = j({ density: o.density, modelValue: A, pip: o.pip, pipBorder: o.pipBorder, pipBorderRadius: o.pipBorderRadius, pipIcon: o.pipIcon, pipSize: o.iconSize });
  J(() => n.modelValue, (m) => {
    w(m);
  });
  const V = v(() => ((m) => {
    const { name: h = "", readonly: $, readonlyInput: R } = m;
    return { [`${Re}--text-field-${h}`]: h !== "", [`${Re}--text-field-readonly`]: $ ?? !1, [`${Re}--text-field-readonly-input`]: !(!R || $), [`${Re}--text-field`]: !0 };
  })({ name: o.name, readonly: o.readonly, readonlyInput: o.readonlyInput })), P = v(() => o.readonly || o.readonlyInput), E = v(() => {
    if (o.iconHoverColor !== !1)
      return typeof o.iconHoverColor == "string" ? o.iconHoverColor : o.color ?? void 0;
  }), B = v(() => ((m) => {
    const { fullWidth: h } = m;
    return { [`${Re}--card`]: !0, [`${Re}--card-full-width`]: h };
  })({ fullWidth: o.cardFieldWidth }));
  function z(m) {
    (m !== "textField" || o.readonlyInput || o.readonly) && (m === "textFieldIcon" && (o.readonlyInput || o.readonly) || C());
  }
  function C(m) {
    var L;
    const h = { left: 0, right: 0, top: 0, width: 0 }, $ = f.value;
    if (!p.value && (m === "keyup" || m === "clear"))
      return void (m === "clear" && N(""));
    if (p.value = !p.value, !p.value)
      return void (c.value.display = "none");
    const R = ($ == null ? void 0 : $.getBoundingClientRect()) ?? h;
    let T = ($ == null ? void 0 : $.offsetHeight) ?? 0, q = 300, W = (R == null ? void 0 : R.left) ?? 0, Z = (R == null ? void 0 : R.right) ?? 0;
    const K = (R == null ? void 0 : R.top) ?? 0, X = (L = f == null ? void 0 : f.value) == null ? void 0 : L.querySelector(".v-field__input"), se = (X == null ? void 0 : X.getBoundingClientRect()) ?? h;
    T = X == null ? void 0 : X.offsetHeight, q = (X == null ? void 0 : X.offsetWidth) ?? 0, W = se.left, Z = se.right - se.width, S = { bottom: "initial", height: T, left: W, right: Z, top: window.scrollY + K, width: o.cardFieldWidth ? q : "auto" }, function() {
      var pe, me, ae;
      let F = Number(S.top) + Number(S.height), fe = "initial", Q = Number(o.cardOffsetY) ?? 0;
      const ne = Number(o.cardOffsetX) ?? 0;
      (o.hint || a.messages) && (Q += ((pe = u.value.VCard) == null ? void 0 : pe.verticalOffset) ?? 0), F += Q, (me = o.open) != null && me.includes("top") && (fe = window.innerHeight - F + Number(S.height) + 2 * Q, F = "initial");
      let le = Number(S.left) + ne, G = S.right ?? 0;
      o.cardFieldWidth ? (le = S.left, G = "initial") : (G = "initial", (ae = o.open) != null && ae.includes("right") && (le = "initial", G = Number(S.right) + ne));
      const ee = { bottom: Oe({ value: fe }), display: "block", left: Oe({ value: le }), minWidth: Oe({ value: S.width }), padding: Oe({ value: o.cardPadding }), right: Oe({ value: G }), top: Oe({ value: F }), width: Oe({ value: S.width }) };
      c.value = ee;
    }();
  }
  function w(m) {
    let h = m ?? "";
    if (h.length < 7)
      return A.value = h, void N(h);
    b.value === "hex" && (m.length > 7 && (h = m.substr(0, 7)), h.toString().match(/#[a-zA-Z0-9]{7}/) && (h = m.substr(0, 7))), N(h);
  }
  function N(m, h = !0) {
    h && (g.value = m), A.value = m, r("update:modelValue", m), r("update", m);
  }
  function k(m) {
    b.value = m, A.value = g.value, r("update:mode", m);
  }
  return ba(f, (m) => {
    var $;
    const h = y(d);
    m.target !== h && !(($ = h == null ? void 0 : h.$el) != null && $.contains(m.target)) && p.value && C("outside");
  }, { ignore: [d] }), (m, h) => (re(), Wt(he, null, [ol("div", { ref_key: "fieldContainerRef", ref: f, class: "v-color-field" }, [s(qr, te({ ref: "textFieldRef" }, m.$attrs, { class: y(V), clearable: y(o).clearable, color: y(o).color, density: y(o).density, hint: y(o).hint, messages: y(o).messages, "model-value": y(A), "persistent-hint": y(o).persistentHint, "persistent-placeholder": y(o).persistentPlaceholder, placeholder: y(o).placeholder, readonly: y(P), theme: y(I), variant: y(o).variant, "onClick:clear": h[2] || (h[2] = ($) => C("clear")), "onClick:control": h[3] || (h[3] = ($) => z("textField")), onKeyup: h[4] || (h[4] = da(($) => C("keyup"), ["enter"])), "onUpdate:modelValue": w }), pa({ _: 2 }, [va(y(l), ($, R) => ({ name: R, fn: ue((T) => [y(l).prepend || y(l)["prepend-inner"] || y(l)["append-inner"] || y(l).append ? Ee("", !0) : We(m.$slots, R, et(te({ key: 0 }, { ...T })), void 0, !0)]) })), y(l).prepend ? { name: "prepend", fn: ue(($) => [We(m.$slots, "prepend", et(ct({ ...$, toggleColorPicker: C })), void 0, !0)]), key: "0" } : void 0, (y(o).prependIcon || y(o).pipSlot === "prepend" && y(o).pip) && !y(l).prepend ? { name: "prepend", fn: ue(() => [y(o).pip ? (re(), ge(mt, te({ key: 0 }, y(_), { onClick: C }), null, 16)) : y(o).prependIcon ? (re(), ge(ft, { key: 1, color: y(E), icon: y(o).prependIcon, iconSize: y(o).iconSize, onClick: C }, null, 8, ["color", "icon", "iconSize"])) : Ee("", !0)]), key: "1" } : void 0, y(l)["prepend-inner"] ? { name: "prepend-inner", fn: ue(($) => [We(m.$slots, "prepend-inner", et(ct({ ...$, toggleColorPicker: C })), void 0, !0)]), key: "2" } : void 0, (y(o).prependInnerIcon || y(o).pipSlot === "prepend-inner" && y(o).pip) && !y(l)["prepend-inner"] ? { name: "prepend-inner", fn: ue(() => [y(o).pip ? (re(), ge(mt, te({ key: 0 }, y(_), { onClick: C }), null, 16)) : y(o).prependInnerIcon ? (re(), ge(ft, { key: 1, color: y(E), icon: y(o).prependInnerIcon, iconSize: y(o).iconSize, onClick: h[0] || (h[0] = ($) => z("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ee("", !0)]), key: "3" } : void 0, y(l)["append-inner"] ? { name: "append-inner", fn: ue(($) => [We(m.$slots, "append-inner", et(ct({ ...$, toggleColorPicker: C })), void 0, !0)]), key: "4" } : void 0, (y(o).appendInnerIcon || y(o).pipSlot === "append-inner" && y(o).pip) && !y(l)["append-inner"] ? { name: "append-inner", fn: ue(() => [y(o).pip ? (re(), ge(mt, te({ key: 0 }, y(_), { onClick: C }), null, 16)) : y(o).appendInnerIcon ? (re(), ge(ft, { key: 1, color: y(E), icon: y(o).appendInnerIcon, iconSize: y(o).iconSize, onClick: h[1] || (h[1] = ($) => z("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : Ee("", !0)]), key: "5" } : void 0, y(l).append ? { name: "append", fn: ue(($) => [We(m.$slots, "append", et(ct({ ...$, toggleColorPicker: C })), void 0, !0)]), key: "6" } : void 0, (y(o).appendIcon || y(o).pipSlot === "append" && y(o).pip) && !y(l).append ? { name: "append", fn: ue(() => [y(o).pip ? (re(), ge(mt, te({ key: 0 }, y(_), { onClick: C }), null, 16)) : y(o).appendIcon ? (re(), ge(ft, { key: 1, color: y(E), icon: y(o).appendIcon, iconSize: y(o).iconSize, onClick: C }, null, 8, ["color", "icon", "iconSize"])) : Ee("", !0)]), key: "7" } : void 0, y(l).label || y(o).label ? { name: "label", fn: ue(() => [y(l).label ? We(m.$slots, "label", { key: 0 }, void 0, !0) : y(o).label ? (re(), Wt("div", Xr, [fa(ma(y(o).label) + " ", 1), y(o).required ? (re(), Wt("span", Gr, "*")) : Ee("", !0)])) : Ee("", !0)]), key: "8" } : void 0]), 1040, ["class", "clearable", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme", "variant"])], 512), (re(), ge(ga, { to: "body" }, [Yr, s(Ae, { defaults: y(u) }, { default: ue(() => {
    var $;
    return [s(ir, { ref_key: "cardRef", ref: d, class: ll(y(B)), style: al(y(c)), theme: (($ = y(u).VCard) == null ? void 0 : $.theme) ?? y(I), width: y(S).width }, { default: ue(() => {
      var R, T;
      return [s(Tr, { modelValue: y(g), "onUpdate:modelValue": [h[5] || (h[5] = (q) => je(g) ? g.value = q : null), w], class: "v-color-selection", disabled: y(o).readonly || ((R = y(u).VColorPicker) == null ? void 0 : R.disabled), mode: y(b), theme: ((T = y(u).VColorPicker) == null ? void 0 : T.theme) ?? y(I), "onUpdate:mode": k }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 8, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), Zr = ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
})(Kr, [["__scopeId", "data-v-461a5893"]]), Xl = Symbol();
function eo(e = {}) {
  return { install: (t) => {
    t.provide(Xl, e), t.component("VColorField", Zr);
  } };
}
export {
  Zr as VColorField,
  eo as createVColorField,
  Zr as default,
  Xl as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}.v-color-field--text-field-readonly .v-field *[data-v-461a5893],.v-color-field--text-field-readonly-input .v-field *[data-v-461a5893]{cursor:pointer!important}.v-color-field--card[data-v-461a5893]{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker[data-v-461a5893]{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas[data-v-461a5893]{width:100%}.v-color-field--card-full-width .v-color-picker[data-v-461a5893]{max-width:100%!important}.position-elm-helper[data-v-461a5893]{background-color:red;border-radius:50%;display:none;height:10px;left:0;position:absolute;top:0;width:10px;z-index:99999999999}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
