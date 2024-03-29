import { CSSProperties } from 'vue';
import type { IconOptions } from 'vuetify';
import VColorField from '../VColorField.vue';
import type { VCard, VColorPicker, VIcon, VTextField } from 'vuetify/components';
export * from '../index';
export type Mode = VColorPicker['$props']['mode'];
export interface KeyStringAny<T = any> {
    [key: string]: T;
}
export type HtmlRefElement = HTMLDivElement | null | undefined;
export interface PipProps {
    pip?: boolean;
    pipBorder?: string | null | undefined;
    pipIcon?: VIcon['$props']['icon'] | string | null | boolean;
    pipBorderRadius?: string;
    pipSize?: VIcon['$props']['size'];
    pipSlot?: string | undefined;
}
export interface VCardProps extends Omit<VCard['$props'], '$children'> {
    verticalOffset?: number;
}
export interface Props extends PipProps {
    appendIcon?: VTextField['$props']['appendIcon'];
    appendInnerIcon?: VTextField['$props']['appendInnerIcon'];
    cardFieldWidth?: boolean;
    cardOffsetX?: number | string;
    cardOffsetY?: number | string;
    cardPadding?: number | string;
    cardProps?: VCardProps;
    clearable?: VTextField['$props']['clearable'];
    color?: VTextField['$props']['color'];
    colorPickerProps?: VColorPicker['$props'];
    density?: VTextField['$props']['density'];
    hint?: string;
    iconHoverColor?: VIcon['$props']['color'] | boolean;
    iconSize?: VIcon['$props']['size'];
    label?: string;
    messages?: VTextField['$props']['messages'];
    name?: any;
    open?: string | undefined;
    persistentHint?: boolean;
    persistentPlaceholder?: VTextField['$props']['persistentPlaceholder'];
    placeholder?: VTextField['$props']['placeholder'];
    prependIcon?: VTextField['$props']['prependIcon'];
    prependInnerIcon?: VTextField['$props']['prependInnerIcon'] | string | null | boolean;
    readonly?: VTextField['$props']['readonly'];
    readonlyInput?: boolean | null | undefined;
    required?: boolean;
    theme?: VTextField['$props']['theme'];
    canvasHeight?: VColorPicker['$props']['canvasHeight'];
    dotSize?: VColorPicker['$props']['dotSize'];
    hideCanvas?: VColorPicker['$props']['hideCanvas'];
    hideInputs?: VColorPicker['$props']['hideInputs'];
    hideSliders?: VColorPicker['$props']['hideSliders'];
    mode?: VColorPicker['$props']['mode'];
    modes?: VColorPicker['$props']['modes'];
    showSwatches?: VColorPicker['$props']['showSwatches'];
    swatches?: VColorPicker['$props']['swatches'];
    swatchesMaxHeight?: VColorPicker['$props']['swatchesMaxHeight'];
    variant?: VTextField['$props']['variant'];
}
export interface GlobalOptions extends Props {
}
export interface PipComponentProps extends PipProps {
    modelValue?: any;
}
export interface ColorPickerIconProps {
    color?: VIcon['$props']['color'];
    icon?: VIcon['$props']['icon'] | string | null | boolean;
    iconSize?: VIcon['$props']['size'];
}
export interface VuetifyDefaults {
    VCard: Props['cardProps'];
    VColorPicker: Props['colorPickerProps'];
}
export interface TextFieldProperties {
    bottom: string | number | undefined;
    height: number | string;
    left: string | number | undefined;
    right: string | number | undefined;
    top: string | number | undefined;
    width: number | string;
}
export interface UseGetIcon {
    (options: {
        icon: PipProps['pipIcon'] | string | null | boolean;
        iconOptions: IconOptions | undefined;
        name: string;
    }): string;
}
export interface UseComposableName {
    (options: {
        foo?: string;
    }): Props;
}
export interface UseConvertToUnit {
    (options: {
        unit?: string;
        value: string | number | undefined;
    }): string | undefined;
}
export interface UsePipClasses {
    (options?: {}): object;
}
export interface UseTextFieldClasses {
    (options: {
        name?: Props['name'];
        readonly?: boolean | null;
        readonlyInput: Props['readonlyInput'];
    }): object;
}
export interface UseHintClasses {
    (options?: {}): object;
}
export interface UseCardClasses {
    (options: {
        fullWidth?: boolean;
    }): object;
}
export interface UsePipStyle {
    (options: {
        pipBorder?: Props['pipBorder'];
        pipBorderRadius?: Props['pipBorderRadius'];
    }): CSSProperties;
}
export interface CardStylesObject extends CSSProperties {
    bottom?: string | number;
    display?: string;
    left?: string | number;
    minWidth?: string;
    padding?: string;
    right?: string | number;
    top?: string | number;
    width?: string | number;
}
declare module "vue" {
    interface ComponentCustomProperties {
    }
    interface GlobalComponents {
        VColorField: typeof VColorField;
    }
}
