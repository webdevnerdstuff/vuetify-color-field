import { defineComponent as Q, inject as ee, computed as V, openBlock as u, createBlock as v, withCtx as f, createVNode as N, mergeProps as $, unref as o, toRefs as be, normalizeClass as ce, normalizeStyle as ue, useAttrs as we, useSlots as Ve, reactive as se, watchEffect as ze, ref as g, watch as Be, createElementBlock as G, Fragment as Pe, createElementVNode as fe, withKeys as xe, createSlots as $e, renderList as Fe, renderSlot as H, normalizeProps as R, createCommentVNode as P, guardReactiveProps as M, createTextVNode as He, toDisplayString as _e, Teleport as Re, isRef as Ne, pushScopeId as Oe, popScopeId as We } from "vue";
import { VHover as Ee } from "vuetify/lib/components/VHover/index.mjs";
import { VIcon as me } from "vuetify/lib/components/VIcon/index.mjs";
import { onClickOutside as Ae } from "@vueuse/core";
import { VCard as qe } from "vuetify/lib/components/VCard/index.mjs";
import { VColorPicker as Me } from "vuetify/lib/components/VColorPicker/index.mjs";
import { VDefaultsProvider as Te } from "vuetify/lib/components/VDefaultsProvider/index.mjs";
import { VTextField as Ue } from "vuetify/lib/components/VTextField/index.mjs";
/**
 * @name @wdns/vuetify-color-field
 * @version 1.1.4
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
}, F = "v-color-field", Ye = { fa: { default: "fa-solid fa-palette", pip: "fa-solid fa-circle" }, mdi: { default: "mdi:mdi-palette", pip: "mdi:mdi-circle" } }, he = (r) => {
  const { icon: p, iconOptions: a, name: i } = r;
  if (p)
    return p;
  let s = ((a == null ? void 0 : a.defaultSet) ?? "").toLowerCase();
  s = s === "fa" || s === "fasvg" ? "fa" : s;
  const y = Ye[s];
  if (!y)
    throw new Error(`[VColorField]: No default ${a == null ? void 0 : a.defaultSet} icon set found.`);
  const k = y[i];
  if (!k)
    throw new Error(`[VColorField]: No ${i} icon found.`);
  return k;
}, T = Q({ __name: "ColorPickerIcon", props: { color: {}, icon: { type: [String, null, Boolean], default: "" }, iconSize: {} }, emits: ["click"], setup(r, { emit: p }) {
  const a = p, i = r, s = ee(Symbol.for("vuetify:icons")), y = V(() => he({ icon: i.icon !== "default" ? i.icon : "", iconOptions: s, name: "default" }));
  function k() {
    a("click");
  }
  return (e, S) => (u(), v(Ee, null, { default: f(({ isHovering: z, props: C }) => [N(me, $(C, { color: z ? e.color : void 0, icon: o(y), size: e.iconSize, onClick: k }), null, 16, ["color", "icon", "size"])]), _: 1 }));
} }), U = Q({ __name: "PipComponent", props: { modelValue: {}, pip: { type: Boolean }, pipBorder: {}, pipIcon: { type: [String, null, Boolean] }, pipBorderRadius: {}, pipSize: {}, pipSlot: {} }, emits: ["click"], setup(r, { emit: p }) {
  const a = p, i = r, { modelValue: s } = be(i), y = V(() => ({ [`${F}--pip`]: !0 })), k = V(() => ((C) => {
    const { pipBorder: m, pipBorderRadius: w } = C, I = { backgroundColor: m && m !== "none" ? "rgb(var(--v-theme-on-surface))" : "transparent", overflow: "hidden" };
    return m && m !== "none" && (I.border = m, I.borderRadius = w), I;
  })({ pipBorder: i.pipBorder, pipBorderRadius: i.pipBorderRadius })), e = ee(Symbol.for("vuetify:icons")), S = V(() => he({ icon: i.pipIcon !== "pip" ? i.pipIcon : "", iconOptions: e, name: "pip" }));
  function z() {
    a("click");
  }
  return (C, m) => (u(), v(me, { class: ce(o(y)), color: o(s) || "--v-theme-on-surface", icon: o(S), size: C.pipSize, style: ue(o(k)), tag: "div", onClick: z }, null, 8, ["class", "color", "icon", "size", "style"]));
} }), je = { key: 1 }, De = { key: 0, class: "text-error ms-1" }, Ke = ((r) => (Oe("data-v-461a5893"), r = r(), We(), r))(() => fe("div", { class: "position-elm-helper" }, null, -1)), Le = ((r, p) => {
  const a = r.__vccOpts || r;
  for (const [i, s] of p)
    a[i] = s;
  return a;
})(Q({ inheritAttrs: !1, __name: "VColorField", props: { appendIcon: { default: void 0 }, appendInnerIcon: { default: void 0 }, cardFieldWidth: { type: Boolean, default: !1 }, cardOffsetX: { default: 0 }, cardOffsetY: { default: 5 }, cardPadding: { default: 4 }, cardProps: { default: () => ({}) }, clearable: { default: !1 }, color: { default: void 0 }, colorPickerProps: { default: () => ({}) }, density: { default: "default" }, hint: { default: "" }, iconHoverColor: { type: Boolean, default: void 0 }, iconSize: { default: "default" }, label: { default: void 0 }, messages: { default: void 0 }, name: { default: "color" }, open: { default: "bottom left" }, persistentHint: { type: Boolean, default: !1 }, persistentPlaceholder: { default: !1 }, placeholder: { default: void 0 }, prependIcon: { default: void 0 }, prependInnerIcon: { type: [String, null, Boolean], default: "default" }, readonly: { default: !1 }, readonlyInput: { type: [Boolean, null], default: !1 }, required: { type: Boolean, default: !1 }, theme: {}, canvasHeight: {}, dotSize: {}, hideCanvas: {}, hideInputs: {}, hideSliders: {}, mode: {}, modes: {}, showSwatches: {}, swatches: {}, swatchesMaxHeight: {}, variant: { default: "filled" }, pip: { type: Boolean, default: !1 }, pipBorder: { default: "3px solid rgb(var(--v-theme-on-surface))" }, pipIcon: { type: [String, null, Boolean], default: "pip" }, pipBorderRadius: { default: "50%" }, pipSize: {}, pipSlot: { default: "prepend-inner" } }, emits: ["update", "update:mode", "update:modelValue"], setup(r, { emit: p }) {
  var oe;
  const a = we(), i = Ve(), s = p, y = r, k = ee(ve, {}), e = se({ ...y, ...k });
  ze(() => {
    Object.assign(e, { ...y, ...k });
  });
  const S = g({ VCard: { elevation: 5, hover: !1, loading: !1, verticalOffset: 28, ...e.cardProps }, VColorPicker: { canvasHeight: e.canvasHeight, dotSize: e.dotSize, elevation: 0, hideCanvas: e.hideCanvas, hideInputs: e.hideInputs, hideSliders: e.hideSliders, mode: e.mode, modes: e.modes, showSwatches: e.showSwatches, swatches: e.swatches, swatchesMaxHeight: e.swatchesMaxHeight, ...e.colorPickerProps } }), z = g(null), C = g({}), m = g(!1), w = g(null), I = g(a.modelValue), _ = g(a.modelValue), Y = g((oe = S.value.VColorPicker) == null ? void 0 : oe.mode), j = g(e.theme ?? void 0);
  let h = se({ bottom: 0, height: 150, left: 0, right: 0, top: 0, width: 300 });
  const O = g({ density: e.density, modelValue: _, pip: e.pip, pipBorder: e.pipBorder, pipBorderRadius: e.pipBorderRadius, pipIcon: e.pipIcon, pipSize: e.iconSize });
  Be(() => a.modelValue, (n) => {
    K(n);
  });
  const ye = V(() => ((n) => {
    const { name: t = "", readonly: l, readonlyInput: d } = n;
    return { [`${F}--text-field-${t}`]: t !== "", [`${F}--text-field-readonly`]: l ?? !1, [`${F}--text-field-readonly-input`]: !(!d || l), [`${F}--text-field`]: !0 };
  })({ name: e.name, readonly: e.readonly, readonlyInput: e.readonlyInput })), ge = V(() => e.readonly || e.readonlyInput), W = V(() => {
    if (e.iconHoverColor !== !1)
      return typeof e.iconHoverColor == "string" ? e.iconHoverColor : e.color ?? void 0;
  }), ke = V(() => ((n) => {
    const { fullWidth: t } = n;
    return { [`${F}--card`]: !0, [`${F}--card-full-width`]: t };
  })({ fullWidth: e.cardFieldWidth }));
  function D(n) {
    (n !== "textField" || e.readonlyInput || e.readonly) && (n === "textFieldIcon" && (e.readonlyInput || e.readonly) || c());
  }
  function c(n) {
    var ie;
    const t = { left: 0, right: 0, top: 0, width: 0 }, l = w.value;
    if (!m.value && (n === "keyup" || n === "clear"))
      return void (n === "clear" && L(""));
    if (m.value = !m.value, !m.value)
      return void (C.value.display = "none");
    const d = (l == null ? void 0 : l.getBoundingClientRect()) ?? t;
    let B = (l == null ? void 0 : l.offsetHeight) ?? 0, E = 300, ne = (d == null ? void 0 : d.left) ?? 0, te = (d == null ? void 0 : d.right) ?? 0;
    const Ce = (d == null ? void 0 : d.top) ?? 0, b = (ie = w == null ? void 0 : w.value) == null ? void 0 : ie.querySelector(".v-field__input"), X = (b == null ? void 0 : b.getBoundingClientRect()) ?? t;
    B = b == null ? void 0 : b.offsetHeight, E = (b == null ? void 0 : b.offsetWidth) ?? 0, ne = X.left, te = X.right - X.width, h = { bottom: "initial", height: B, left: ne, right: te, top: window.scrollY + Ce, width: e.cardFieldWidth ? E : "auto" }, function() {
      var re, de, pe;
      let A = Number(h.top) + Number(h.height), le = "initial", Z = Number(e.cardOffsetY) ?? 0;
      const ae = Number(e.cardOffsetX) ?? 0;
      (e.hint || y.messages) && (Z += ((re = S.value.VCard) == null ? void 0 : re.verticalOffset) ?? 0), A += Z, (de = e.open) != null && de.includes("top") && (le = window.innerHeight - A + Number(h.height) + 2 * Z, A = "initial");
      let J = Number(h.left) + ae, q = h.right ?? 0;
      e.cardFieldWidth ? (J = h.left, q = "initial") : (q = "initial", (pe = e.open) != null && pe.includes("right") && (J = "initial", q = Number(h.right) + ae));
      const Ie = { bottom: x({ value: le }), display: "block", left: x({ value: J }), minWidth: x({ value: h.width }), padding: x({ value: e.cardPadding }), right: x({ value: q }), top: x({ value: A }), width: x({ value: h.width }) };
      C.value = Ie;
    }();
  }
  function K(n) {
    let t = n ?? "";
    if (t.length < 7)
      return _.value = t, void L(t);
    Y.value === "hex" && (n.length > 7 && (t = n.substr(0, 7)), t.toString().match(/#[a-zA-Z0-9]{7}/) && (t = n.substr(0, 7))), L(t);
  }
  function L(n, t = !0) {
    t && (I.value = n), _.value = n, s("update:modelValue", n), s("update", n);
  }
  function Se(n) {
    Y.value = n, _.value = I.value, s("update:mode", n);
  }
  return Ae(w, (n) => {
    var l;
    const t = o(z);
    n.target !== t && !((l = t == null ? void 0 : t.$el) != null && l.contains(n.target)) && m.value && c("outside");
  }, { ignore: [z] }), (n, t) => (u(), G(Pe, null, [fe("div", { ref_key: "fieldContainerRef", ref: w, class: "v-color-field" }, [N(Ue, $({ ref: "textFieldRef" }, n.$attrs, { class: o(ye), clearable: o(e).clearable, color: o(e).color, density: o(e).density, hint: o(e).hint, messages: o(e).messages, "model-value": o(_), "persistent-hint": o(e).persistentHint, "persistent-placeholder": o(e).persistentPlaceholder, placeholder: o(e).placeholder, readonly: o(ge), theme: o(j), variant: o(e).variant, "onClick:clear": t[2] || (t[2] = (l) => c("clear")), "onClick:control": t[3] || (t[3] = (l) => D("textField")), onKeyup: t[4] || (t[4] = xe((l) => c("keyup"), ["enter"])), "onUpdate:modelValue": K }), $e({ _: 2 }, [Fe(o(i), (l, d) => ({ name: d, fn: f((B) => [o(i).prepend || o(i)["prepend-inner"] || o(i)["append-inner"] || o(i).append ? P("", !0) : H(n.$slots, d, R($({ key: 0 }, { ...B })), void 0, !0)]) })), o(i).prepend ? { name: "prepend", fn: f((l) => [H(n.$slots, "prepend", R(M({ ...l, toggleColorPicker: c })), void 0, !0)]), key: "0" } : void 0, (o(e).prependIcon || o(e).pipSlot === "prepend" && o(e).pip) && !o(i).prepend ? { name: "prepend", fn: f(() => [o(e).pip ? (u(), v(U, $({ key: 0 }, o(O), { onClick: c }), null, 16)) : o(e).prependIcon ? (u(), v(T, { key: 1, color: o(W), icon: o(e).prependIcon, iconSize: o(e).iconSize, onClick: c }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "1" } : void 0, o(i)["prepend-inner"] ? { name: "prepend-inner", fn: f((l) => [H(n.$slots, "prepend-inner", R(M({ ...l, toggleColorPicker: c })), void 0, !0)]), key: "2" } : void 0, (o(e).prependInnerIcon || o(e).pipSlot === "prepend-inner" && o(e).pip) && !o(i)["prepend-inner"] ? { name: "prepend-inner", fn: f(() => [o(e).pip ? (u(), v(U, $({ key: 0 }, o(O), { onClick: c }), null, 16)) : o(e).prependInnerIcon ? (u(), v(T, { key: 1, color: o(W), icon: o(e).prependInnerIcon, iconSize: o(e).iconSize, onClick: t[0] || (t[0] = (l) => D("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "3" } : void 0, o(i)["append-inner"] ? { name: "append-inner", fn: f((l) => [H(n.$slots, "append-inner", R(M({ ...l, toggleColorPicker: c })), void 0, !0)]), key: "4" } : void 0, (o(e).appendInnerIcon || o(e).pipSlot === "append-inner" && o(e).pip) && !o(i)["append-inner"] ? { name: "append-inner", fn: f(() => [o(e).pip ? (u(), v(U, $({ key: 0 }, o(O), { onClick: c }), null, 16)) : o(e).appendInnerIcon ? (u(), v(T, { key: 1, color: o(W), icon: o(e).appendInnerIcon, iconSize: o(e).iconSize, onClick: t[1] || (t[1] = (l) => D("textFieldIcon")) }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "5" } : void 0, o(i).append ? { name: "append", fn: f((l) => [H(n.$slots, "append", R(M({ ...l, toggleColorPicker: c })), void 0, !0)]), key: "6" } : void 0, (o(e).appendIcon || o(e).pipSlot === "append" && o(e).pip) && !o(i).append ? { name: "append", fn: f(() => [o(e).pip ? (u(), v(U, $({ key: 0 }, o(O), { onClick: c }), null, 16)) : o(e).appendIcon ? (u(), v(T, { key: 1, color: o(W), icon: o(e).appendIcon, iconSize: o(e).iconSize, onClick: c }, null, 8, ["color", "icon", "iconSize"])) : P("", !0)]), key: "7" } : void 0, o(i).label || o(e).label ? { name: "label", fn: f(() => [o(i).label ? H(n.$slots, "label", { key: 0 }, void 0, !0) : o(e).label ? (u(), G("div", je, [He(_e(o(e).label) + " ", 1), o(e).required ? (u(), G("span", De, "*")) : P("", !0)])) : P("", !0)]), key: "8" } : void 0]), 1040, ["class", "clearable", "color", "density", "hint", "messages", "model-value", "persistent-hint", "persistent-placeholder", "placeholder", "readonly", "theme", "variant"])], 512), (u(), v(Re, { to: "body" }, [Ke, N(Te, { defaults: o(S) }, { default: f(() => {
    var l;
    return [N(qe, { ref_key: "cardRef", ref: z, class: ce(o(ke)), style: ue(o(C)), theme: ((l = o(S).VCard) == null ? void 0 : l.theme) ?? o(j), width: o(h).width }, { default: f(() => {
      var d, B;
      return [N(Me, { modelValue: o(I), "onUpdate:modelValue": [t[5] || (t[5] = (E) => Ne(I) ? I.value = E : null), K], class: "v-color-selection", disabled: o(e).readonly || ((d = o(S).VColorPicker) == null ? void 0 : d.disabled), mode: o(Y), theme: ((B = o(S).VColorPicker) == null ? void 0 : B.theme) ?? o(j), "onUpdate:mode": Se }, null, 8, ["modelValue", "disabled", "mode", "theme"])];
    }), _: 1 }, 8, ["class", "style", "theme", "width"])];
  }), _: 1 }, 8, ["defaults"])]))], 64));
} }), [["__scopeId", "data-v-461a5893"]]), ve = Symbol();
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
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".v-color-field--text-field-readonly .v-field *,.v-color-field--text-field-readonly-input .v-field *{cursor:pointer!important}.v-color-field--card{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas{width:100%}.v-color-field--card-full-width .v-color-picker{max-width:100%!important}.v-color-field--text-field-readonly .v-field *[data-v-461a5893],.v-color-field--text-field-readonly-input .v-field *[data-v-461a5893]{cursor:pointer!important}.v-color-field--card[data-v-461a5893]{display:none;position:absolute!important;z-index:999999}.v-color-field--card .v-color-picker[data-v-461a5893]{width:100%!important}.v-color-field--card .v-color-picker-canvas canvas[data-v-461a5893]{width:100%}.v-color-field--card-full-width .v-color-picker[data-v-461a5893]{max-width:100%!important}.position-elm-helper[data-v-461a5893]{background-color:red;border-radius:50%;display:none;height:10px;left:0;position:absolute;top:0;width:10px;z-index:99999999999}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
