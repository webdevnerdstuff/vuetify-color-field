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
    colorPickerProps: Partial<{
        width: NonNullable<string | number>;
        style: globalThis.StyleValue;
        disabled: boolean;
        tag: string;
        mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa";
        rounded: string | number | boolean;
        dotSize: string | number;
        modes: readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[];
        canvasHeight: string | number;
        hideCanvas: boolean;
        hideSliders: boolean;
        hideInputs: boolean;
        showSwatches: boolean;
        swatchesMaxHeight: string | number;
    }> & Omit<{
        readonly width: NonNullable<string | number>;
        readonly style: globalThis.StyleValue;
        readonly disabled: boolean;
        readonly tag: string;
        readonly mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa";
        readonly dotSize: string | number;
        readonly modes: readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[];
        readonly canvasHeight: string | number;
        readonly hideCanvas: boolean;
        readonly hideSliders: boolean;
        readonly hideInputs: boolean;
        readonly showSwatches: boolean;
        readonly swatchesMaxHeight: string | number;
        readonly border?: string | number | boolean | undefined;
        readonly color?: string | undefined;
        readonly position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
        readonly class?: any;
        readonly elevation?: string | number | undefined;
        readonly theme?: string | undefined;
        readonly rounded?: string | number | boolean | undefined;
        readonly modelValue?: string | Record<string, unknown> | null | undefined;
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
        "onUpdate:modelValue"?: ((color: any) => any) | undefined;
        "onUpdate:mode"?: ((mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: globalThis.PropType<NonNullable<string | number>>;
            default: NonNullable<string | number>;
        };
        border: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        color: StringConstructor;
        position: {
            type: globalThis.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
            validator: (v: any) => boolean;
        };
        style: {
            type: globalThis.PropType<globalThis.StyleValue>;
            default: null;
        };
        class: globalThis.PropType<any>;
        tag: {
            type: StringConstructor;
            default: string;
        };
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        theme: StringConstructor;
        rounded: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: undefined;
        };
        canvasHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        hideCanvas: BooleanConstructor;
        hideSliders: BooleanConstructor;
        hideInputs: BooleanConstructor;
        mode: {
            type: globalThis.PropType<"rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa">;
            default: string;
            validator: (v: string) => boolean;
        };
        modes: {
            type: globalThis.PropType<readonly ("rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa")[]>;
            default: () => string[];
            validator: (v: any) => boolean;
        };
        showSwatches: BooleanConstructor;
        swatches: globalThis.PropType<readonly (readonly (string | number | {
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
        })[])[]>;
        swatchesMaxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        modelValue: {
            type: globalThis.PropType<string | Record<string, unknown> | null | undefined>;
        };
    }>> & {
        "onUpdate:modelValue"?: ((color: any) => any) | undefined;
        "onUpdate:mode"?: ((mode: "rgb" | "rgba" | "hsl" | "hsla" | "hex" | "hexa") => any) | undefined;
    }, "width" | "style" | "tag" | "rounded" | "canvasHeight" | "disabled" | "dotSize" | "hideCanvas" | "hideSliders" | "hideInputs" | "mode" | "modes" | "showSwatches" | "swatchesMaxHeight"> & {
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
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
