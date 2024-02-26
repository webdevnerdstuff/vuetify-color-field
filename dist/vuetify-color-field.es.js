import { defineComponent as Q, inject as ee, computed as V, openBlock as c, createBlock as v, withCtx as u, createVNode as O, mergeProps as F, unref as o, toRefs as be, normalizeClass as ce, normalizeStyle as ue, useAttrs as we, useSlots as Ve, reactive as se, watchEffect as ze, ref as g, watch as Be, createElementBlock as G, Fragment as Pe, createElementVNode as fe, withKeys as xe, createSlots as Fe, renderList as $e, renderSlot as H, normalizeProps as N, createCommentVNode as P, guardReactiveProps as T, createTextVNode as He, toDisplayString as _e, Teleport as Re, isRef as Ne, pushScopeId as Oe, popScopeId as We } from "vue";
import { VHover as Ee } from "vuetify/lib/components/VHover/index.mjs";
import { VIcon as me } from "vuetify/lib/components/VIcon/index.mjs";
import { onClickOutside as Ae } from "@vueuse/core";
import { VCard as qe } from "vuetify/lib/components/VCard/index.mjs";
import { VColorPicker as Me } from "vuetify/lib/components/VColorPicker/index.mjs";
import { VDefaultsProvider as Te } from "vuetify/lib/components/VDefaultsProvider/index.mjs";
import { VTextField as Ue } from "vuetify/lib/components/VTextField/index.mjs";
/**
 * @name @wdns/vuetify-color-field
 * @version 1.1.6
 * @description Vuetify Color Field is a Vuetify VTextField Color Picker Component
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-color-field/
 * @repository https://github.com/webdevnerdstuff/vuetify-color-field
 * @license MIT License
 */
const x = (r) => {
  const { unit: p = "px", value: a } = r;
  if (a != null && a !== "")
    return +a ? `${Number(a)}${p}` : String(a);
}, $ = "v-color-field", Ye = { fa: { default: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { default: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, he = (r) => {
  const { icon: p, iconOptions: a, name: l } = r;
  if (p)
    return p;
  let s = ((a == null ? void 0 : a.defaultSet) ?? "").toLowerCase();
  s = s === "fa" || s === "fasvg" ? "fa" : s;
  const y = Ye[s];
  if (!y)
    throw new Error(`[VColorField]: No default ${a == null ? void 0 : a.defaultSet} icon set found.`);
  const k = y[l];
  if (!k)
    throw new Error(`[VColorField]: No ${l} icon found.`);
  return k;
}, U = Q({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(r, { emit: p }) {
  const a = p, l = r, s = ee(Symbol.for("vuetify:icons")), y = V(() => he({ icon: l.icon !== "default" ? l.icon : "", iconOptions: s, name: "default" }));
  function k() {
    a("click");
  }
  return (e, S) => (c(), v(Ee, null, { default: u(({ isHovering: z, props: C }) => [O(me, F(C, { color: z ? e.color : void 0, icon: o(y), size: e.iconSize, onClick: k }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), Y = Q({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(r, { emit: p }) {
  const a = p, l = r, { modelValue: s } = be(l), y = V(() => ({ [`${$}--pip`]: !0 })), k = V(() => ((C) => {
    const { pipBorder: f, pipBorderRadius: w } = C, I = { backgroundColor: f && f !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return f && f !== "none" && (I.border = f, I.borderRadius = w), I;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), e = ee(Symbol.for("vuetify:icons")), S = V(() => he({ icon: l.pipIcon !== "pip" ? l.pipIcon : "", iconOptions: e, name: "pip" }));
  function z() {
    a("click");
  }
  return (C, f) => (c(), v(me, { class: ce(o(y)), color: o(s) || "--v-theme-on-surface", icon: o(S), size: C.pipSize, style: ue(o(k)), tag: "div", onClick: z }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), je = { key: 1 }, De = { key: 0, class: "text-error ms-1" }, Ke = ((r) => (Oe("data-v-781d35c8"), r = r(), We(), r))(() => fe("div", { class: "position-elm-helper" }, null, -1)), Le = ((r, p) => {
  const a = r.__vccOpts || r;
  for (const [l, s] of p)
    a[l] = s;
  return a;
})(Q({ inheritAttrs: !1, __name: "VColorField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, clearable: { default: !1 }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, canvasHeight: {}, dotSize: {}, hideCanvas: {}, hideInputs: {}, hideSliders: {}, mode: {}, modes: {}, showSwatches: {}, swatches: {}, swatchesMaxHeight: {}, variant: { default: "filled" }, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { type: [String, null, Boolean], default: "pip" }, pipBorderRadius: { default: "50%" }, pipSize: {}, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(r, { emit: p }) {
  var oe;
  const a = we(), l = Ve(), s = p, y = r, k = ee(ve, {}), e = se({ ...y, ...k });
  ze(() => {
    Object.assign(e, { ...y, ...k });
  });
  const S = g({ VCard: { elevation: 5, hover: !1, loading: !1, verticalOffset: 28, ...e.cardProps }, VColorPicker: { canvasHeight: e.canvasHeight, dotSize: e.dotSize, elevation: 0, hideCanvas: e.hideCanvas, hideInputs: e.hideInputs, hideSliders: e.hideSliders, mode: e.mode, modes: e.modes, showSwatches: e.showSwatches, swatches: e.swatches, swatchesMaxHeight: e.swatchesMaxHeight, ...e.colorPickerProps } }), z = g(null), C = g({}), f = g(!1), w = g(null), I = g(a.modelValue), _ = g(a.modelValue), j = g((oe = S.value.VColorPicker) == null ? void 0 : oe.mode), D = g(e.theme ?? void 0);
  let h = se({ bottom: 0, height: 150, left: 0, right: 0, top: 0, width: 300 });
  const W = g({ density: e.density, modelValue: _, pip: e.pip, pipBorder: e.pipBorder, pipBorderRadius: e.pipBorderRadius, pipIcon: e.pipIcon, pipSize: e.iconSize });
  Be(() => a.modelValue, (t) => {
    K(t);
  });
  const ye = V(() => ((t) => {
    const { name: n = "", readonly: i, readonlyInput: d } = t;
    return { [`${$}--text-field-${n}`]: n !== "", [`${$}--text-field-readonly`]: i ?? !1, [`${$}--text-field-readonly-input`]: !(!d || i), [`${$}--text-field`]: !0 };
  })({ name: e.name, readonly: e.readonly, readonlyInput: e.readonlyInput })), ge = V(() => e.readonly || e.readonlyInput), E = V(() => {
    if (e.iconHoverColor !== !1)
      return typeof e.iconHoverColor == "string" ? e.iconHoverColor : e.color ?? void 0;
  }), ke = V(() => ((t) => {
    const { fullWidth: n } = t;
    return { [`${$}--card`]: !0, [`${$}--card-full-width`]: n };
  })({ fullWidth: e.cardFieldWidth }));
  function R(t) {
    (t !== "textField" || e.readonlyInput || e.readonly) && (t === "textFieldIcon" && (e.readonlyInput || e.readonly) || m());
  }
  function m(t) {
    var ie;
    const n = { left: 0, right: 0, top: 0, width: 0 }, i = w.value;
    if (!f.value && (t === "keyup" || t === "clear"))
      return void (t === "clear" && L(""));
    if (f.value = !f.value, !f.value)
      return void (C.value.display = "none");
    const d = (i == null ? void 0 : i.getBoundingClientRect()) ?? n;
    let B = (i == null ? void 0 : i.offsetHeight) ?? 0, A = 300, ne = (d == null ? void 0 : d.left) ?? 0, te = (d == null ? void 0 : d.right) ?? 0;
    const Ce = (d == null ? void 0 : d.top) ?? 0, b = (ie = w == null ? void 0 : w.value) == null ? void 0 : ie.querySelector(".v-field__input"), X = (b == null ? void 0 : b.getBoundingClientRect()) ?? n;
    B = b == null ? void 0 : b.offsetHeight, A = (b == null ? void 0 : b.offsetWidth) ?? 0, ne = X.left, te = X.right - X.width, h = { bottom: "initial", height: B, left: ne, right: te, top: window.scrollY + Ce, width: e.cardFieldWidth ? A : "auto" }, function() {
      var re, de, pe;
      let q = Number(h.top) + Number(h.height), le = "initial", Z = Number(e.cardOffsetY) ?? 0;
      const ae = Number(e.cardOffsetX) ?? 0;
      (e.hint || y.messages) && (Z += ((re = S.value.VCard) == null ? void 0 : re.verticalOffset) ?? 0), q += Z, (de = e.open) != null && de.includes("top") && (le = window.innerHeight - q + Number(h.height) + 2 * Z, q = "initial");
      let J = Number(h.left) + ae, M = h.right ?? 0;
      e.cardFieldWidth ? (J = h.left, M = "initial") : (M = "initial", (pe = e.open) != null && pe.includes("right") && (J = "initial", M = Number(h.right) + ae));
      const Ie = { bottom: x({ value: le }), display: "block", left: x({ value: J }), minWidth: x({ value: h.width }), padding: x({ value: e.cardPadding }), right: x({ value: M }), top: x({ value: q }), width: x({ value: h.width }) };
      C.value = Ie;
    }();
  }
  function K(t) {
    let n = t ?? "";
    if (n.length < 7)
      return _.value = n, void L(n);
    j.value === "hex" && (t.length > 7 && (n = t.substr(0, 7)), n.toString().match(/#[a-zA-Z0-9]{7}/) && (n = t.substr(0, 7))), L(n);
  }
  function L(t, n = !0) {
    n && (I.value = t), _.value = t, s("update:modelValue", t), s("update", t);
  }
  function Se(t) {
    j.value = t, _.value = I.value, s("update:mode", t);
  }
  return Ae(w, (t) => {
    var i;
    const n = o(z);
    t.target !== n && !((i = n == null ? void 0 : n.$el) != null && i.contains(t.target)) && f.value && m("outside");
  }, { ignore: [z] }), (t, n) => (c(), G(Pe, null, [fe("div", { ref_key: "fieldContainerRef", ref: w, class: "v-color-field" }, [O(Ue, F({ ref: "textFieldRef" }, t.$attrs, { class: o(ye), clearable: o(e).clearable, color: o(e).color, density: o(e).density, hint: o(e).hint, messages: o(e).messages, "model-value": o(_), "persistent-hint": o(e).persistentHint, "persistent-placeholder": o(e).persistentPlaceholder, placeholder: o(e).placeholder, readonly: o(ge), theme: o(D), variant: o(e).variant, "onClick:clear": n[4] || (n[4] = (i) => m("clear")), "onClick:control": n[5] || (n[5] = (i) => R("textField")), onKeyup: n[6] || (n[6] = xe((i) => m("keyup"), ["enter"])), "onUpdate:modelValue": K }), Fe({ _: 2 }, [$e(o(l), (i, d) => ({ name: d, fn: u((B) => [o(l).prepend || o(l)["prepend-inner"] || o(l)["append-inner"] || o(l).append ? P("", !0) : H(t.$slots, d, N(F({ key: 0 }, { ...B })), void 0, !0)]) })), o(l).prepend ? { name: "prepend", fn: u((i) => [H(t.$slots, "prepend", N(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "0" } : void 0, (o(e).prependIcon || o(e).pipSlot === "prepend" && o(e).pip) && !o(l).prepend ? { name: "prepend", fn: u(() => [o(e).pip ? (c(), v(Y, F({ key: 0 }, o(W), { onClick: m }), null, 16)) : o(e).prependIcon ? (c(), v(U, { key: 1, color: o(E), icon: o(e).prependIcon, iconSize: o(e).iconSize, onClick: m }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "1" } : void 0, o(l)["prepend-inner"] ? { name: "prepend-inner", fn: u((i) => [H(t.$slots, "prepend-inner", N(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "2" } : void 0, (o(e).prependInnerIcon || o(e).pipSlot === "prepend-inner" && o(e).pip) && !o(l)["prepend-inner"] ? { name: "prepend-inner", fn: u(() => [o(e).pip ? (c(), v(Y, F({ key: 0 }, o(W), { onClick: n[0] || (n[0] = (i) => R("textFieldIcon")) }), null, 16)) : o(e).prependInnerIcon ? (c(), v(U, { key: 1, color: o(E), icon: o(e).prependInnerIcon, iconSize: o(e).iconSize, onClick: n[1] || (n[1] = (i) => R("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "3" } : void 0, o(l)["append-inner"] ? { name: "append-inner", fn: u((i) => [H(t.$slots, "append-inner", N(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "4" } : void 0, (o(e).appendInnerIcon || o(e).pipSlot === "append-inner" && o(e).pip) && !o(l)["append-inner"] ? { name: "append-inner", fn: u(() => [o(e).pip ? (c(), v(Y, F({ key: 0 }, o(W), { onClick: n[2] || (n[2] = (i) => R("textFieldIcon")) }), null, 16)) : o(e).appendInnerIcon ? (c(), v(U, { key: 1, color: o(E), icon: o(e).appendInnerIcon, iconSize: o(e).iconSize, onClick: n[3] || (n[3] = (i) => R("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "5" } : void 0, o(l).append ? { name: "append", fn: u((i) => [H(t.$slots, "append", N(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "6" } : void 0, (o(e).appendIcon || o(e).pipSlot === "append" && o(e).pip) && !o(l).append ? { name: "append", fn: u(() => [o(e).pip ? (c(), v(Y, F({ key: 0 }, o(W), { onClick: m }), null, 16)) : o(e).appendIcon ? (c(), v(U, { key: 1, color: o(E), icon: o(e).appendIcon, iconSize: o(e).iconSize, onClick: m }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "7" } : void 0, o(l).label || o(e).label ? { name: "label", fn: u(() => [o(l).label ? H(t.$slots, "label", { key: 0 }, void 0, !0) : o(e).label ? (c(), G("div", je, [He(_e(o(e).label) + " ", 1), o(e).required ? (c(), G("span", De, "*")) : P("", !0)])) : P("", !0)]), key: "8" } : void 0]), 1040, ["class", "clearable", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme", "variant"])], 512), (c(), v(Re, { to: "body" }, [Ke, O(Te, { defaults: o(S) }, { default: u(() => {
    var i;
    return [O(qe, { ref_key: "cardRef", ref: z, class: ce(o(ke)), style: ue(o(C)), theme: ((i = o(S).VCard) == null ? void 0 : i.theme) ?? o(D), width: o(h).width }, { default: u(() => {
      var d, B;
      return [O(Me, { modelValue: o(I), "onUpdate:modelValue": [n[7] || (n[7] = (A) => Ne(I) ? I.value = A : null), K], class: "v-color-selection", disabled: o(e).readonly || ((d = o(S).VColorPicker) == null ? void 0 : d.disabled), mode: o(j), theme: ((B = o(S).VColorPicker) == null ? void 0 : B.theme) ?? o(D), "onUpdate:mode": Se }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 8, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), [["__scopeId", "data-v-781d35c8"]]), ve = Symbol();
function to(r = {}) {
  return { install: (p) => {
    p.provide(ve, r), p.component("VColorField", Le);
  } };
}
export {
  Le as VColorField,
  to as createVColorField,
  Le as default,
  ve as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}.v-color-field--text-field-readonly .v-field *[data-v-781d35c8],.v-color-field--text-field-readonly-input .v-field *[data-v-781d35c8]{cursor:pointer!important}.v-color-field--card[data-v-781d35c8]{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker[data-v-781d35c8]{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas[data-v-781d35c8]{width:100%}.v-color-field--card-full-width .v-color-picker[data-v-781d35c8]{max-width:100%!important}.position-elm-helper[data-v-781d35c8]{background-color:red;border-radius:50%;display:none;height:10px;left:0;position:absolute;top:0;width:10px;z-index:99999999999}")),document.head.appendChild(o)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
