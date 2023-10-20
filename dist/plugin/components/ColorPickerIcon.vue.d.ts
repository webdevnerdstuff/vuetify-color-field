declare const _default: import("vue").DefineComponent<{
    color: {
        type: globalThis.PropType<string>;
    };
    icon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: globalThis.PropType<string>;
    };
    icon: {
        type: globalThis.PropType<string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent>;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    icon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
}, {}>;
export default _default;
