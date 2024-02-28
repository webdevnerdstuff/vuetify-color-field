import { defineComponent as Q, inject as ee, computed as V, openBlock as c, createBlock as v, withCtx as u, createVNode as O, mergeProps as F, unref as o, toRefs as Ie, normalizeClass as ce, normalizeStyle as ue, useAttrs as be, useSlots as we, reactive as se, watchEffect as Ve, ref as g, watch as ze, createElementBlock as J, Fragment as Be, createElementVNode as Pe, withKeys as xe, createSlots as Fe, renderList as $e, renderSlot as H, normalizeProps as N, createCommentVNode as P, guardReactiveProps as q, createTextVNode as He, toDisplayString as _e, Teleport as Re, isRef as Ne } from "vue";
import { VHover as Oe } from "vuetify/lib/components/VHover/index.mjs";
import { VIcon as fe } from "vuetify/lib/components/VIcon/index.mjs";
import { onClickOutside as We } from "@vueuse/core";
import { VCard as Ee } from "vuetify/lib/components/VCard/index.mjs";
import { VColorPicker as Te } from "vuetify/lib/components/VColorPicker/index.mjs";
import { VDefaultsProvider as Ue } from "vuetify/lib/components/VDefaultsProvider/index.mjs";
import { VTextField as Ye } from "vuetify/lib/components/VTextField/index.mjs";
/**
 * @name @wdns/vuetify-color-field
 * @version 1.1.7
 * @description Vuetify Color Field is a Vuetify VTextField Color Picker Component
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-color-field/
 * @repository https://github.com/webdevnerdstuff/vuetify-color-field
 * @license MIT License
 */
const x = (s) => {
  const { unit: d = "px", value: a } = s;
  if (a != null && a !== "")
    return +a ? `${Number(a)}${d}` : String(a);
}, $ = "v-color-field", qe = { fa: { default: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { default: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, me = (s) => {
  const { icon: d, iconOptions: a, name: l } = s;
  if (d)
    return d;
  let p = ((a == null ? void 0 : a.defaultSet) ?? "").toLowerCase();
  p = p === "fa" || p === "fasvg" ? "fa" : p;
  const y = qe[p];
  if (!y)
    throw new Error(`[VColorField]: No default ${a == null ? void 0 : a.defaultSet} icon set found.`);
  const k = y[l];
  if (!k)
    throw new Error(`[VColorField]: No ${l} icon found.`);
  return k;
}, A = Q({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(s, { emit: d }) {
  const a = d, l = s, p = ee(Symbol.for("vuetify:icons")), y = V(() => me({ icon: l.icon !== "default" ? l.icon : "", iconOptions: p, name: "default" }));
  function k() {
    a("click");
  }
  return (e, S) => (c(), v(Oe, null, { default: u(({ isHovering: z, props: C }) => [O(fe, F(C, { color: z ? e.color : void 0, icon: o(y), size: e.iconSize, onClick: k }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), K = Q({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(s, { emit: d }) {
  const a = d, l = s, { modelValue: p } = Ie(l), y = V(() => ({ [`${$}--pip`]: !0 })), k = V(() => ((C) => {
    const { pipBorder: f, pipBorderRadius: w } = C, I = { backgroundColor: f && f !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return f && f !== "none" && (I.border = f, I.borderRadius = w), I;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), e = ee(Symbol.for("vuetify:icons")), S = V(() => me({ icon: l.pipIcon !== "pip" ? l.pipIcon : "", iconOptions: e, name: "pip" }));
  function z() {
    a("click");
  }
  return (C, f) => (c(), v(fe, { class: ce(o(y)), color: o(p) || "--v-theme-on-surface", icon: o(S), size: C.pipSize, style: ue(o(k)), tag: "div", onClick: z }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), Ae = { key: 1 }, Ke = { key: 0, class: "text-error ms-1" }, Me = ((s, d) => {
  const a = s.__vccOpts || s;
  for (const [l, p] of d)
    a[l] = p;
  return a;
})(Q({ inheritAttrs: !1, __name: "VColorField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, clearable: { default: !1 }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, canvasHeight: {}, dotSize: {}, hideCanvas: {}, hideInputs: {}, hideSliders: {}, mode: {}, modes: {}, showSwatches: {}, swatches: {}, swatchesMaxHeight: {}, variant: { default: "filled" }, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { type: [String, null, Boolean], default: "pip" }, pipBorderRadius: { default: "50%" }, pipSize: {}, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(s, { emit: d }) {
  var oe;
  const a = be(), l = we(), p = d, y = s, k = ee(he, {}), e = se({ ...y, ...k });
  Ve(() => {
    Object.assign(e, { ...y, ...k });
  });
  const S = g({ VCard: { elevation: 5, hover: !1, loading: !1, verticalOffset: 28, ...e.cardProps }, VColorPicker: { canvasHeight: e.canvasHeight, dotSize: e.dotSize, elevation: 0, hideCanvas: e.hideCanvas, hideInputs: e.hideInputs, hideSliders: e.hideSliders, mode: e.mode, modes: e.modes, showSwatches: e.showSwatches, swatches: e.swatches, swatchesMaxHeight: e.swatchesMaxHeight, ...e.colorPickerProps } }), z = g(null), C = g({}), f = g(!1), w = g(null), I = g(a.modelValue), _ = g(a.modelValue), M = g((oe = S.value.VColorPicker) == null ? void 0 : oe.mode), j = g(e.theme ?? void 0);
  let h = se({ bottom: 0, height: 150, left: 0, right: 0, top: 0, width: 300 });
  const W = g({ density: e.density, modelValue: _, pip: e.pip, pipBorder: e.pipBorder, pipBorderRadius: e.pipBorderRadius, pipIcon: e.pipIcon, pipSize: e.iconSize });
  ze(() => a.modelValue, (t) => {
    D(t);
  });
  const ve = V(() => ((t) => {
    const { name: n = "", readonly: i, readonlyInput: r } = t;
    return { [`${$}--text-field-${n}`]: n !== "", [`${$}--text-field-readonly`]: i ?? !1, [`${$}--text-field-readonly-input`]: !(!r || i), [`${$}--text-field`]: !0 };
  })({ name: e.name, readonly: e.readonly, readonlyInput: e.readonlyInput })), ye = V(() => e.readonly || e.readonlyInput), E = V(() => {
    if (e.iconHoverColor !== !1)
      return typeof e.iconHoverColor == "string" ? e.iconHoverColor : e.color ?? void 0;
  }), ge = V(() => ((t) => {
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
    const r = (i == null ? void 0 : i.getBoundingClientRect()) ?? n;
    let B = (i == null ? void 0 : i.offsetHeight) ?? 0, T = 300, ne = (r == null ? void 0 : r.left) ?? 0, te = (r == null ? void 0 : r.right) ?? 0;
    const Se = (r == null ? void 0 : r.top) ?? 0, b = (ie = w == null ? void 0 : w.value) == null ? void 0 : ie.querySelector(".v-field__input"), X = (b == null ? void 0 : b.getBoundingClientRect()) ?? n;
    B = b == null ? void 0 : b.offsetHeight, T = (b == null ? void 0 : b.offsetWidth) ?? 0, ne = X.left, te = X.right - X.width, h = { bottom: "initial", height: B, left: ne, right: te, top: window.scrollY + Se, width: e.cardFieldWidth ? T : "auto" }, function() {
      var re, de, pe;
      let U = Number(h.top) + Number(h.height), le = "initial", Z = Number(e.cardOffsetY) ?? 0;
      const ae = Number(e.cardOffsetX) ?? 0;
      (e.hint || y.messages) && (Z += ((re = S.value.VCard) == null ? void 0 : re.verticalOffset) ?? 0), U += Z, (de = e.open) != null && de.includes("top") && (le = window.innerHeight - U + Number(h.height) + 2 * Z, U = "initial");
      let G = Number(h.left) + ae, Y = h.right ?? 0;
      e.cardFieldWidth ? (G = h.left, Y = "initial") : (Y = "initial", (pe = e.open) != null && pe.includes("right") && (G = "initial", Y = Number(h.right) + ae));
      const Ce = { bottom: x({ value: le }), display: "block", left: x({ value: G }), minWidth: x({ value: h.width }), padding: x({ value: e.cardPadding }), right: x({ value: Y }), top: x({ value: U }), width: x({ value: h.width }) };
      C.value = Ce;
    }();
  }
  function D(t) {
    let n = t ?? "";
    if (n.length < 7)
      return _.value = n, void L(n);
    M.value === "hex" && (t.length > 7 && (n = t.substr(0, 7)), n.toString().match(/#[a-zA-Z0-9]{7}/) && (n = t.substr(0, 7))), L(n);
  }
  function L(t, n = !0) {
    n && (I.value = t), _.value = t, p("update:modelValue", t), p("update", t);
  }
  function ke(t) {
    M.value = t, _.value = I.value, p("update:mode", t);
  }
  return We(w, (t) => {
    var i;
    const n = o(z);
    t.target !== n && !((i = n == null ? void 0 : n.$el) != null && i.contains(t.target)) && f.value && m("outside");
  }, { ignore: [z] }), (t, n) => (c(), J(Be, null, [Pe("div", { ref_key: "fieldContainerRef", ref: w, class: "v-color-field" }, [O(Ye, F({ ref: "textFieldRef" }, t.$attrs, { class: o(ve), clearable: o(e).clearable, color: o(e).color, density: o(e).density, hint: o(e).hint, messages: o(e).messages, "model-value": o(_), "persistent-hint": o(e).persistentHint, "persistent-placeholder": o(e).persistentPlaceholder, placeholder: o(e).placeholder, readonly: o(ye), theme: o(j), variant: o(e).variant, "onClick:clear": n[4] || (n[4] = (i) => m("clear")), "onClick:control": n[5] || (n[5] = (i) => R("textField")), onKeyup: n[6] || (n[6] = xe((i) => m("keyup"), ["enter"])), "onUpdate:modelValue": D }), Fe({ _: 2 }, [$e(o(l), (i, r) => ({ name: r, fn: u((B) => [o(l).prepend || o(l)["prepend-inner"] || o(l)["append-inner"] || o(l).append ? P("", !0) : H(t.$slots, r, N(F({ key: 0 }, { ...B })), void 0, !0)]) })), o(l).prepend ? { name: "prepend", fn: u((i) => [H(t.$slots, "prepend", N(q({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "0" } : void 0, (o(e).prependIcon || o(e).pipSlot === "prepend" && o(e).pip) && !o(l).prepend ? { name: "prepend", fn: u(() => [o(e).pip ? (c(), v(K, F({ key: 0 }, o(W), { onClick: m }), null, 16)) : o(e).prependIcon ? (c(), v(A, { key: 1, color: o(E), icon: o(e).prependIcon, iconSize: o(e).iconSize, onClick: m }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "1" } : void 0, o(l)["prepend-inner"] ? { name: "prepend-inner", fn: u((i) => [H(t.$slots, "prepend-inner", N(q({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "2" } : void 0, (o(e).prependInnerIcon || o(e).pipSlot === "prepend-inner" && o(e).pip) && !o(l)["prepend-inner"] ? { name: "prepend-inner", fn: u(() => [o(e).pip ? (c(), v(K, F({ key: 0 }, o(W), { onClick: n[0] || (n[0] = (i) => R("textFieldIcon")) }), null, 16)) : o(e).prependInnerIcon ? (c(), v(A, { key: 1, color: o(E), icon: o(e).prependInnerIcon, iconSize: o(e).iconSize, onClick: n[1] || (n[1] = (i) => R("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "3" } : void 0, o(l)["append-inner"] ? { name: "append-inner", fn: u((i) => [H(t.$slots, "append-inner", N(q({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "4" } : void 0, (o(e).appendInnerIcon || o(e).pipSlot === "append-inner" && o(e).pip) && !o(l)["append-inner"] ? { name: "append-inner", fn: u(() => [o(e).pip ? (c(), v(K, F({ key: 0 }, o(W), { onClick: n[2] || (n[2] = (i) => R("textFieldIcon")) }), null, 16)) : o(e).appendInnerIcon ? (c(), v(A, { key: 1, color: o(E), icon: o(e).appendInnerIcon, iconSize: o(e).iconSize, onClick: n[3] || (n[3] = (i) => R("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "5" } : void 0, o(l).append ? { name: "append", fn: u((i) => [H(t.$slots, "append", N(q({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "6" } : void 0, (o(e).appendIcon || o(e).pipSlot === "append" && o(e).pip) && !o(l).append ? { name: "append", fn: u(() => [o(e).pip ? (c(), v(K, F({ key: 0 }, o(W), { onClick: m }), null, 16)) : o(e).appendIcon ? (c(), v(A, { key: 1, color: o(E), icon: o(e).appendIcon, iconSize: o(e).iconSize, onClick: m }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "7" } : void 0, o(l).label || o(e).label ? { name: "label", fn: u(() => [o(l).label ? H(t.$slots, "label", { key: 0 }, void 0, !0) : o(e).label ? (c(), J("div", Ae, [He(_e(o(e).label) + " ", 1), o(e).required ? (c(), J("span", Ke, "*")) : P("", !0)])) : P("", !0)]), key: "8" } : void 0]), 1040, ["class", "clearable", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme", "variant"])], 512), (c(), v(Re, { to: "body" }, [O(Ue, { defaults: o(S) }, { default: u(() => {
    var i;
    return [O(Ee, { ref_key: "cardRef", ref: z, class: ce(o(ge)), style: ue(o(C)), theme: ((i = o(S).VCard) == null ? void 0 : i.theme) ?? o(j), width: o(h).width }, { default: u(() => {
      var r, B;
      return [O(Te, { modelValue: o(I), "onUpdate:modelValue": [n[7] || (n[7] = (T) => Ne(I) ? I.value = T : null), D], class: "v-color-selection", disabled: o(e).readonly || ((r = o(S).VColorPicker) == null ? void 0 : r.disabled), mode: o(M), theme: ((B = o(S).VColorPicker) == null ? void 0 : B.theme) ?? o(j), "onUpdate:mode": ke }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 8, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), [["__scopeId", "data-v-bd364cff"]]), he = Symbol();
function eo(s = {}) {
  return { install: (d) => {
    d.provide(he, s), d.component("VColorField", Me);
  } };
}
export {
  Me as VColorField,
  eo as createVColorField,
  Me as default,
  he as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}.v-color-field--pip{opacity:1}.v-color-field--text-field-readonly .v-field *[data-v-bd364cff],.v-color-field--text-field-readonly-input .v-field *[data-v-bd364cff]{cursor:pointer!important}.v-color-field--card[data-v-bd364cff]{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker[data-v-bd364cff]{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas[data-v-bd364cff]{width:100%}.v-color-field--card-full-width .v-color-picker[data-v-bd364cff]{max-width:100%!important}.v-color-field--pip[data-v-bd364cff]{opacity:1}")),document.head.appendChild(o)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
