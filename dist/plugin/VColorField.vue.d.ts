import { Props } from '../types';
declare function toggleColorPicker(trigger?: string | Event): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    appendIcon: undefined;
    appendInnerIcon: undefined;
    cardFieldWidth: boolean;
    cardOffsetX: number;
    cardOffsetY: number;
    cardPadding: number;
    cardProps: () => {};
    color: undefined;
    colorPickerProps: () => {};
    density: string;
    hint: string;
    iconHoverColor: undefined;
    iconSize: string;
    label: undefined;
    messages: undefined;
    name: string;
    open: string;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    pip: boolean;
    pipBorder: string;
    pipBorderRadius: string;
    pipIcon: string;
    pipSlot: string;
    placeholder: undefined;
    prependIcon: undefined;
    prependInnerIcon: string;
    readonly: boolean;
    readonlyInput: boolean;
    required: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    update: (...args: any[]) => void;
    "update:mode": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    appendIcon: undefined;
    appendInnerIcon: undefined;
    cardFieldWidth: boolean;
    cardOffsetX: number;
    cardOffsetY: number;
    cardPadding: number;
    cardProps: () => {};
    color: undefined;
    colorPickerProps: () => {};
    density: string;
    hint: string;
    iconHoverColor: undefined;
    iconSize: string;
    label: undefined;
    messages: undefined;
    name: string;
    open: string;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    pip: boolean;
    pipBorder: string;
    pipBorderRadius: string;
    pipIcon: string;
    pipSlot: string;
    placeholder: undefined;
    prependIcon: undefined;
    prependInnerIcon: string;
    readonly: boolean;
    readonlyInput: boolean;
    required: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:mode"?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    density: "default" | "comfortable" | "compact" | null;
    appendIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    prependIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    appendInnerIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    cardFieldWidth: boolean;
    cardOffsetX: string | number;
    cardOffsetY: string | number;
    cardPadding: string | number;
    cardProps: import('../types').VCardProps;
    colorPickerProps: {
        width?: NonNullable<string | number> | undefined;
        style?: globalThis.StyleValue | undefined;
        disabled?: boolean | undefined;
        tag?: string | undefined;
        mode?: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa" | undefined;
        rounded?: string | number | boolean | undefined;
        dotSize?: string | number | undefined;
        modes?: readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[] | undefined;
        canvasHeight?: string | number | undefined;
        hideCanvas?: boolean | undefined;
        hideSliders?: boolean | undefined;
        hideInputs?: boolean | undefined;
        showSwatches?: boolean | undefined;
        swatchesMaxHeight?: string | number | undefined;
        key?: string | number | symbol | undefined;
        readonly border?: string | number | boolean | undefined;
        readonly color?: string | undefined;
        readonly position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        class?: any;
        readonly elevation?: string | number | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        readonly theme?: string | undefined;
        onVnodeBeforeMount?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: globalThis.VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        readonly modelValue?: string | Record<string, unknown> | null | undefined;
        "onUpdate:modelValue"?: ((color: any) => any) | undefined;
        "onUpdate:mode"?: ((mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => any) | undefined;
        readonly swatches?: readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] | undefined;
    } & {
        hideModeSwitch?: boolean | undefined;
    };
    hint: string;
    iconHoverColor: string | boolean;
    iconSize: string | number;
    label: string;
    messages: string | readonly string[];
    name: any;
    open: string;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: string;
    prependInnerIcon: boolean | (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | null;
    readonly: boolean | null;
    readonlyInput: boolean | null;
    required: boolean;
    pipIcon: boolean | (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | null;
    pipBorder: string | null;
    pipBorderRadius: string;
    pip: boolean;
    pipSlot: string;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
    prepend?(_: {
        toggleColorPicker: typeof toggleColorPicker;
        id: globalThis.ComputedRef<string>;
        messagesId: globalThis.ComputedRef<string>;
        isDirty: globalThis.ComputedRef<boolean>;
        isDisabled: globalThis.ComputedRef<boolean>;
        isReadonly: globalThis.ComputedRef<boolean>;
        isPristine: globalThis.Ref<boolean>;
        isValid: globalThis.ComputedRef<boolean | null>;
        isValidating: globalThis.Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
    }): any;
    "prepend-inner"?(_: {
        toggleColorPicker: typeof toggleColorPicker;
        isActive: globalThis.Ref<boolean>;
        isFocused: globalThis.Ref<boolean>;
        controlRef: globalThis.Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
    }): any;
    "append-inner"?(_: {
        toggleColorPicker: typeof toggleColorPicker;
        isActive: globalThis.Ref<boolean>;
        isFocused: globalThis.Ref<boolean>;
        controlRef: globalThis.Ref<HTMLElement | undefined>;
        focus: () => void;
        blur: () => void;
    }): any;
    append?(_: {
        toggleColorPicker: typeof toggleColorPicker;
        id: globalThis.ComputedRef<string>;
        messagesId: globalThis.ComputedRef<string>;
        isDirty: globalThis.ComputedRef<boolean>;
        isDisabled: globalThis.ComputedRef<boolean>;
        isReadonly: globalThis.ComputedRef<boolean>;
        isPristine: globalThis.Ref<boolean>;
        isValid: globalThis.ComputedRef<boolean | null>;
        isValidating: globalThis.Ref<boolean>;
        reset: () => void;
        resetValidation: () => void;
        validate: () => void;
    }): any;
    label?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
