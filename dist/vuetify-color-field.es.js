import { defineComponent as Q, inject as ee, computed as V, openBlock as c, createBlock as v, withCtx as u, createVNode as N, mergeProps as _, unref as o, toRefs as Ie, normalizeClass as ce, normalizeStyle as ue, useAttrs as be, useSlots as we, reactive as se, watchEffect as Ve, ref as g, watch as ze, createElementBlock as J, Fragment as Be, createElementVNode as Pe, withKeys as xe, createSlots as _e, renderList as Fe, renderSlot as $, normalizeProps as R, createCommentVNode as P, guardReactiveProps as T, createTextVNode as $e, toDisplayString as He, Teleport as Oe, isRef as Re, defineAsyncComponent as Ne } from "vue";
import { VHover as We } from "vuetify/lib/components/VHover/index.mjs";
import { VIcon as fe } from "vuetify/lib/components/VIcon/index.mjs";
import { onClickOutside as Ae } from "@vueuse/core";
import { VCard as Ee } from "vuetify/lib/components/VCard/index.mjs";
import { VColorPicker as je } from "vuetify/lib/components/VColorPicker/index.mjs";
import { VDefaultsProvider as Me } from "vuetify/lib/components/VDefaultsProvider/index.mjs";
import { VTextField as Te } from "vuetify/lib/components/VTextField/index.mjs";
/**
 * @name @wdns/vuetify-color-field
 * @version 1.1.8
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
}, F = "v-color-field", Ye = { fa: { default: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { default: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, me = (s) => {
  const { icon: d, iconOptions: a, name: l } = s;
  if (d)
    return d;
  let p = ((a == null ? void 0 : a.defaultSet) ?? "").toLowerCase();
  p = p === "fa" || p === "fasvg" ? "fa" : p;
  const y = Ye[p];
  if (!y)
    throw new Error(`[VColorField]: No default ${a == null ? void 0 : a.defaultSet} icon set found.`);
  const k = y[l];
  if (!k)
    throw new Error(`[VColorField]: No ${l} icon found.`);
  return k;
}, Y = Q({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(s, { emit: d }) {
  const a = d, l = s, p = ee(Symbol.for("vuetify:icons")), y = V(() => me({ icon: l.icon !== "default" ? l.icon : "", iconOptions: p, name: "default" }));
  function k() {
    a("click");
  }
  return (e, S) => (c(), v(We, null, { default: u(({ isHovering: z, props: C }) => [N(fe, _(C, { color: z ? e.color : void 0, icon: o(y), size: e.iconSize, onClick: k }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), q = Q({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(s, { emit: d }) {
  const a = d, l = s, { modelValue: p } = Ie(l), y = V(() => ({ [`${F}--pip`]: !0 })), k = V(() => ((C) => {
    const { pipBorder: f, pipBorderRadius: w } = C, I = { backgroundColor: f && f !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return f && f !== "none" && (I.border = f, I.borderRadius = w), I;
  })({ pipBorder: l.pipBorder, pipBorderRadius: l.pipBorderRadius })), e = ee(Symbol.for("vuetify:icons")), S = V(() => me({ icon: l.pipIcon !== "pip" ? l.pipIcon : "", iconOptions: e, name: "pip" }));
  function z() {
    a("click");
  }
  return (C, f) => (c(), v(fe, { class: ce(o(y)), color: o(p) || "--v-theme-on-surface", icon: o(S), size: C.pipSize, style: ue(o(k)), tag: "div", onClick: z }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), qe = { key: 1 }, Ke = { key: 0, class: "text-error ms-1" }, Le = ((s, d) => {
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
  const S = g({ VCard: { elevation: 5, hover: !1, loading: !1, verticalOffset: 28, ...e.cardProps }, VColorPicker: { canvasHeight: e.canvasHeight, dotSize: e.dotSize, elevation: 0, hideCanvas: e.hideCanvas, hideInputs: e.hideInputs, hideSliders: e.hideSliders, mode: e.mode, modes: e.modes, showSwatches: e.showSwatches, swatches: e.swatches, swatchesMaxHeight: e.swatchesMaxHeight, ...e.colorPickerProps } }), z = g(null), C = g({}), f = g(!1), w = g(null), I = g(a.modelValue), H = g(a.modelValue), K = g((oe = S.value.VColorPicker) == null ? void 0 : oe.mode), L = g(e.theme ?? void 0);
  let h = se({ bottom: 0, height: 150, left: 0, right: 0, top: 0, width: 300 });
  const W = g({ density: e.density, modelValue: H, pip: e.pip, pipBorder: e.pipBorder, pipBorderRadius: e.pipBorderRadius, pipIcon: e.pipIcon, pipSize: e.iconSize });
  ze(() => a.modelValue, (t) => {
    U(t);
  });
  const ve = V(() => ((t) => {
    const { name: n = "", readonly: i, readonlyInput: r } = t;
    return { [`${F}--text-field-${n}`]: n !== "", [`${F}--text-field-readonly`]: i ?? !1, [`${F}--text-field-readonly-input`]: !(!r || i), [`${F}--text-field`]: !0 };
  })({ name: e.name, readonly: e.readonly, readonlyInput: e.readonlyInput })), ye = V(() => e.readonly || e.readonlyInput), A = V(() => {
    if (e.iconHoverColor !== !1)
      return typeof e.iconHoverColor == "string" ? e.iconHoverColor : e.color ?? void 0;
  }), ge = V(() => ((t) => {
    const { fullWidth: n } = t;
    return { [`${F}--card`]: !0, [`${F}--card-full-width`]: n };
  })({ fullWidth: e.cardFieldWidth }));
  function O(t) {
    (t !== "textField" || e.readonlyInput || e.readonly) && (t === "textFieldIcon" && (e.readonlyInput || e.readonly) || m());
  }
  function m(t) {
    var ie;
    const n = { left: 0, right: 0, top: 0, width: 0 }, i = w.value;
    if (!f.value && (t === "keyup" || t === "clear"))
      return void (t === "clear" && D(""));
    if (f.value = !f.value, !f.value)
      return void (C.value.display = "none");
    const r = (i == null ? void 0 : i.getBoundingClientRect()) ?? n;
    let B = (i == null ? void 0 : i.offsetHeight) ?? 0, E = 300, ne = (r == null ? void 0 : r.left) ?? 0, te = (r == null ? void 0 : r.right) ?? 0;
    const Se = (r == null ? void 0 : r.top) ?? 0, b = (ie = w == null ? void 0 : w.value) == null ? void 0 : ie.querySelector(".v-field__input"), X = (b == null ? void 0 : b.getBoundingClientRect()) ?? n;
    B = b == null ? void 0 : b.offsetHeight, E = (b == null ? void 0 : b.offsetWidth) ?? 0, ne = X.left, te = X.right - X.width, h = { bottom: "initial", height: B, left: ne, right: te, top: window.scrollY + Se, width: e.cardFieldWidth ? E : "auto" }, function() {
      var re, de, pe;
      let j = Number(h.top) + Number(h.height), le = "initial", G = Number(e.cardOffsetY) ?? 0;
      const ae = Number(e.cardOffsetX) ?? 0;
      (e.hint || y.messages) && (G += ((re = S.value.VCard) == null ? void 0 : re.verticalOffset) ?? 0), j += G, (de = e.open) != null && de.includes("top") && (le = window.innerHeight - j + Number(h.height) + 2 * G, j = "initial");
      let Z = Number(h.left) + ae, M = h.right ?? 0;
      e.cardFieldWidth ? (Z = h.left, M = "initial") : (M = "initial", (pe = e.open) != null && pe.includes("right") && (Z = "initial", M = Number(h.right) + ae));
      const Ce = { bottom: x({ value: le }), display: "block", left: x({ value: Z }), minWidth: x({ value: h.width }), padding: x({ value: e.cardPadding }), right: x({ value: M }), top: x({ value: j }), width: x({ value: h.width }) };
      C.value = Ce;
    }();
  }
  function U(t) {
    let n = t ?? "";
    if (n.length < 7)
      return H.value = n, void D(n);
    K.value === "hex" && (t.length > 7 && (n = t.substr(0, 7)), n.toString().match(/#[a-zA-Z0-9]{7}/) && (n = t.substr(0, 7))), D(n);
  }
  function D(t, n = !0) {
    n && (I.value = t), H.value = t, p("update:modelValue", t), p("update", t);
  }
  function ke(t) {
    K.value = t, H.value = I.value, p("update:mode", t);
  }
  return Ae(w, (t) => {
    var i;
    const n = o(z);
    t.target !== n && !((i = n == null ? void 0 : n.$el) != null && i.contains(t.target)) && f.value && m("outside");
  }, { ignore: [z] }), (t, n) => (c(), J(Be, null, [Pe("div", { ref_key: "fieldContainerRef", ref: w, class: "v-color-field" }, [N(Te, _({ ref: "textFieldRef" }, t.$attrs, { class: o(ve), clearable: o(e).clearable, color: o(e).color, density: o(e).density, hint: o(e).hint, messages: o(e).messages, "model-value": o(H), "persistent-hint": o(e).persistentHint, "persistent-placeholder": o(e).persistentPlaceholder, placeholder: o(e).placeholder, readonly: o(ye), theme: o(L), variant: o(e).variant, "onClick:clear": n[4] || (n[4] = (i) => m("clear")), "onClick:control": n[5] || (n[5] = (i) => O("textField")), onKeyup: n[6] || (n[6] = xe((i) => m("keyup"), ["enter"])), "onUpdate:modelValue": U }), _e({ _: 2 }, [Fe(o(l), (i, r) => ({ name: r, fn: u((B) => [o(l).prepend || o(l)["prepend-inner"] || o(l)["append-inner"] || o(l).append ? P("", !0) : $(t.$slots, r, R(_({ key: 0 }, { ...B })), void 0, !0)]) })), o(l).prepend ? { name: "prepend", fn: u((i) => [$(t.$slots, "prepend", R(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "0" } : void 0, (o(e).prependIcon || o(e).pipSlot === "prepend" && o(e).pip) && !o(l).prepend ? { name: "prepend", fn: u(() => [o(e).pip ? (c(), v(q, _({ key: 0 }, o(W), { onClick: m }), null, 16)) : o(e).prependIcon ? (c(), v(Y, { key: 1, color: o(A), icon: o(e).prependIcon, iconSize: o(e).iconSize, onClick: m }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "1" } : void 0, o(l)["prepend-inner"] ? { name: "prepend-inner", fn: u((i) => [$(t.$slots, "prepend-inner", R(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "2" } : void 0, (o(e).prependInnerIcon || o(e).pipSlot === "prepend-inner" && o(e).pip) && !o(l)["prepend-inner"] ? { name: "prepend-inner", fn: u(() => [o(e).pip ? (c(), v(q, _({ key: 0 }, o(W), { onClick: n[0] || (n[0] = (i) => O("textFieldIcon")) }), null, 16)) : o(e).prependInnerIcon ? (c(), v(Y, { key: 1, color: o(A), icon: o(e).prependInnerIcon, iconSize: o(e).iconSize, onClick: n[1] || (n[1] = (i) => O("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "3" } : void 0, o(l)["append-inner"] ? { name: "append-inner", fn: u((i) => [$(t.$slots, "append-inner", R(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "4" } : void 0, (o(e).appendInnerIcon || o(e).pipSlot === "append-inner" && o(e).pip) && !o(l)["append-inner"] ? { name: "append-inner", fn: u(() => [o(e).pip ? (c(), v(q, _({ key: 0 }, o(W), { onClick: n[2] || (n[2] = (i) => O("textFieldIcon")) }), null, 16)) : o(e).appendInnerIcon ? (c(), v(Y, { key: 1, color: o(A), icon: o(e).appendInnerIcon, iconSize: o(e).iconSize, onClick: n[3] || (n[3] = (i) => O("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "5" } : void 0, o(l).append ? { name: "append", fn: u((i) => [$(t.$slots, "append", R(T({ ...i, toggleColorPicker: m })), void 0, !0)]), key: "6" } : void 0, (o(e).appendIcon || o(e).pipSlot === "append" && o(e).pip) && !o(l).append ? { name: "append", fn: u(() => [o(e).pip ? (c(), v(q, _({ key: 0 }, o(W), { onClick: m }), null, 16)) : o(e).appendIcon ? (c(), v(Y, { key: 1, color: o(A), icon: o(e).appendIcon, iconSize: o(e).iconSize, onClick: m }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "7" } : void 0, o(l).label || o(e).label ? { name: "label", fn: u(() => [o(l).label ? $(t.$slots, "label", { key: 0 }, void 0, !0) : o(e).label ? (c(), J("div", qe, [$e(He(o(e).label) + " ", 1), o(e).required ? (c(), J("span", Ke, "*")) : P("", !0)])) : P("", !0)]), key: "8" } : void 0]), 1040, ["class", "clearable", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme", "variant"])], 512), (c(), v(Oe, { to: "body" }, [N(Me, { defaults: o(S) }, { default: u(() => {
    var i;
    return [N(Ee, { ref_key: "cardRef", ref: z, class: ce(o(ge)), style: ue(o(C)), theme: ((i = o(S).VCard) == null ? void 0 : i.theme) ?? o(L), width: o(h).width }, { default: u(() => {
      var r, B;
      return [N(je, { modelValue: o(I), "onUpdate:modelValue": [n[7] || (n[7] = (E) => Re(I) ? I.value = E : null), U], class: "v-color-selection", disabled: o(e).readonly || ((r = o(S).VColorPicker) == null ? void 0 : r.disabled), mode: o(K), theme: ((B = o(S).VColorPicker) == null ? void 0 : B.theme) ?? o(L), "onUpdate:mode": ke }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 8, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), [["__scopeId", "data-v-bd364cff"]]), Ue = Object.freeze(Object.defineProperty({ __proto__: null, default: Le }, Symbol.toStringTag, { value: "Module" })), he = Symbol();
function no(s = {}) {
  return { install: (d) => {
    d.provide(he, s), d.component("VColorField", Ne(() => Promise.resolve().then(() => Ue)));
  } };
}
export {
  Le as VColorField,
  no as createVColorField,
  Le as default,
  he as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}.v-color-field--pip{opacity:1}.v-color-field--text-field-readonly .v-field *[data-v-bd364cff],.v-color-field--text-field-readonly-input .v-field *[data-v-bd364cff]{cursor:pointer!important}.v-color-field--card[data-v-bd364cff]{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker[data-v-bd364cff]{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas[data-v-bd364cff]{width:100%}.v-color-field--card-full-width .v-color-picker[data-v-bd364cff]{max-width:100%!important}.v-color-field--pip[data-v-bd364cff]{opacity:1}")),document.head.appendChild(o)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
