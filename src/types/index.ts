/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import {
	CSSProperties,
} from 'vue';
import type { IconOptions } from 'vuetify';
import type {
	VCard,
	VColorPicker,
	VIcon,
	VTextField,
} from 'vuetify/components';


// -------------------------------------------------- Vuetify Types //
export type Mode = VColorPicker['$props']['mode'];

// -------------------------------------------------- Misc //
export interface KeyStringAny<T = any> {
	[key: string]: T;
};

export type HtmlRefElement = HTMLDivElement | null | undefined;


// -------------------------------------------------- Props //
export interface PipProps {
	pip?: boolean,
	pipBorder?: string | null | undefined;
	pipIcon?: VIcon['$props']['icon'],
	pipBorderRadius?: string;
	pipSize?: VIcon['$props']['size'];
	pipSlot?: string | undefined;
}

export interface Props extends PipProps {
	appendIcon?: VTextField['$props']['appendIcon'];
	appendInnerIcon?: VTextField['$props']['appendInnerIcon'];
	cardProps?: VCard['$props'] & {
		fullWidth?: boolean;
		offsetX?: number;
		offsetY?: number;
		padding?: number;
		verticalOffset?: number;
	};
	color?: VTextField['$props']['color'];
	colorPickerProps?: VColorPicker['$props'] & {
		hideModeSwitch?: boolean;
	};
	density?: VTextField['$props']['density'];
	hideValue?: boolean | null | undefined;
	hint?: string;
	hintColor?: string | undefined;
	iconHoverColor?: VIcon['$props']['color'] | boolean;
	label?: string;
	messages?: VTextField['$props']['messages'];
	name?: any;
	open?: string | undefined;
	persistentHint?: boolean;
	persistentPlaceholder?: VTextField['$props']['persistentPlaceholder'];
	placeholder?: VTextField['$props']['placeholder'];
	prependIcon?: VTextField['$props']['prependIcon'];
	prependInnerIcon?: VTextField['$props']['prependInnerIcon'] | false;
	readonly?: VTextField['$props']['readonly'];
	readonlyInput?: boolean | null | undefined;
	required?: boolean;
	theme?: VTextField['$props']['theme'];
}

export interface PipComponentProps extends PipProps {
	modelValue?: any;
};

export interface ColorPickerIconProps {
	color?: VIcon['$props']['color'];
	icon?: VIcon['$props']['icon'];
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

// ------------------------ Icons //
export interface UseGetIcon {
	(
		options: {
			icon: PipProps['pipIcon'],
			iconOptions: IconOptions | undefined,
			name: string,
		}
	): string;
}

// -------------------------------------------------- Composables //
export interface UseComposableName {
	(
		options: {
			foo?: string;
		}
	): Props;
}

// ------------------------- Helpers //
export interface UseConvertToUnit {
	(
		options: {
			unit?: string,
			value: string | number | undefined,
		}
	): string | undefined;
}

export interface UseDetectOutsideClick {
	(
		component: any,
		callback: (event: Event) => void,
	): void;
}

// ------------------------- Classes //

export interface UsePipClasses {
	(
		options?: {}
	): object;
}

export interface UseTextFieldClasses {
	(
		options: {
			name?: Props['name'];
			readonly?: boolean | null;
			readonlyInput: Props['readonlyInput'];
		}
	): object;
}

export interface UseHintClasses {
	(
		options?: {}
	): object;
}

export interface UseCardClasses {
	(
		options: {
			fullWidth?: boolean;
		}
	): object;
}


// ------------------------- Styles //
export interface UsePipStyle {
	(
		options: {
			pipBorder?: Props['pipBorder'];
			pipBorderRadius?: Props['pipBorderRadius'];
		}
	): CSSProperties;
}

export interface CardStylesObject extends CSSProperties {
	border?: string | number;
	bottom?: string | number;
	display?: string;
	left?: string | number;
	minWidth?: string;
	padding?: string;
	right?: string | number;
	top?: string | number;
	width?: string | number;
}
