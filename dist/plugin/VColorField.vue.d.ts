declare function toggleColorPicker(trigger?: string | Event): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    color: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    theme: {
        type: globalThis.PropType<string>;
    };
    density: {
        type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
        default: string;
    };
    appendIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    prependIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    appendInnerIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    cardFieldWidth: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    cardOffsetX: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    cardOffsetY: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    cardPadding: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    cardProps: {
        type: globalThis.PropType<import('../types').VCardProps>;
        default: () => {};
    };
    colorPickerProps: {
        type: globalThis.PropType<{
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
        }>;
        default: () => {};
    };
    hint: {
        type: globalThis.PropType<string>;
        default: string;
    };
    iconHoverColor: {
        type: globalThis.PropType<string | boolean>;
        default: undefined;
    };
    label: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    messages: {
        type: globalThis.PropType<string | readonly string[]>;
        default: undefined;
    };
    name: {
        type: globalThis.PropType<any>;
        default: string;
    };
    open: {
        type: globalThis.PropType<string>;
        default: string;
    };
    persistentHint: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    persistentPlaceholder: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    prependInnerIcon: {
        type: globalThis.PropType<false | (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | null>;
        default: string;
    };
    readonly: {
        type: globalThis.PropType<boolean | null>;
        default: boolean;
    };
    readonlyInput: {
        type: globalThis.PropType<boolean | null>;
        default: boolean;
    };
    required: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    pipIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    pipBorder: {
        type: globalThis.PropType<string | null>;
        default: string;
    };
    pipBorderRadius: {
        type: globalThis.PropType<string>;
        default: string;
    };
    pip: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    pipSize: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    pipSlot: {
        type: globalThis.PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    update: (...args: any[]) => void;
    "update:mode": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    theme: {
        type: globalThis.PropType<string>;
    };
    density: {
        type: globalThis.PropType<"default" | "comfortable" | "compact" | null>;
        default: string;
    };
    appendIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    prependIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    appendInnerIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    cardFieldWidth: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    cardOffsetX: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    cardOffsetY: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    cardPadding: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    cardProps: {
        type: globalThis.PropType<import('../types').VCardProps>;
        default: () => {};
    };
    colorPickerProps: {
        type: globalThis.PropType<{
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
        }>;
        default: () => {};
    };
    hint: {
        type: globalThis.PropType<string>;
        default: string;
    };
    iconHoverColor: {
        type: globalThis.PropType<string | boolean>;
        default: undefined;
    };
    label: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    messages: {
        type: globalThis.PropType<string | readonly string[]>;
        default: undefined;
    };
    name: {
        type: globalThis.PropType<any>;
        default: string;
    };
    open: {
        type: globalThis.PropType<string>;
        default: string;
    };
    persistentHint: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    persistentPlaceholder: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: globalThis.PropType<string>;
        default: undefined;
    };
    prependInnerIcon: {
        type: globalThis.PropType<false | (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | null>;
        default: string;
    };
    readonly: {
        type: globalThis.PropType<boolean | null>;
        default: boolean;
    };
    readonlyInput: {
        type: globalThis.PropType<boolean | null>;
        default: boolean;
    };
    required: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    pipIcon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: undefined;
    };
    pipBorder: {
        type: globalThis.PropType<string | null>;
        default: string;
    };
    pipBorderRadius: {
        type: globalThis.PropType<string>;
        default: string;
    };
    pip: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    pipSize: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    pipSlot: {
        type: globalThis.PropType<string>;
        default: string;
    };
}>> & {
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
    label: string;
    messages: string | readonly string[];
    name: any;
    open: string;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    placeholder: string;
    prependInnerIcon: false | (string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent) | null;
    readonly: boolean | null;
    readonlyInput: boolean | null;
    required: boolean;
    pipIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    pipBorder: string | null;
    pipBorderRadius: string;
    pip: boolean;
    pipSize: string | number;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
