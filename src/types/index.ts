/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import {
	CSSProperties,
	MaybeRef,
} from 'vue';
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
export interface Props {
	appendIcon?: VTextField['$props']['appendIcon'];
	appendInnerIcon?: VTextField['$props']['appendInnerIcon'];
	cardProps?: VCard['$props'] & {
		align?: string | undefined;
		borderColor?: string;
		borderStyle?: string;
		borderWidth?: number;
		closeDelay?: number;
		fieldOffset?: number;
		fullWidth?: boolean;
		padding?: number;
		verticalOffset?: number;
	};
	color?: VTextField['$props']['color'];
	colorPickerProps?: VColorPicker['$props'] & {
		hideModeSwitch?: boolean;
	};
	density?: VTextField['$props']['density'];
	dotField?: boolean;
	dotFieldProps?: {
		borderColor?: string;
		borderRadius?: string;
		borderStyle?: string;
		borderWidth?: number;
		cursor?: string;
		height?: string | number;
		width?: string | number;
	};
	hideValue?: boolean | null | undefined;
	hint?: string;
	hintColor?: string | undefined;
	iconHoverColor?: VIcon['$props']['color'] | boolean;
	label?: string;
	messages?: VTextField['$props']['messages'];
	name?: any;
	open?: boolean | null | undefined;
	persistentHint?: boolean;
	persistentPlaceholder?: VTextField['$props']['persistentPlaceholder'];
	placeholder?: VTextField['$props']['placeholder'];
	prependIcon?: VTextField['$props']['prependIcon'];
	prependInnerIcon?: VTextField['$props']['prependInnerIcon'] | string | false;
	readonly?: VTextField['$props']['readonly'];
	readonlyInput?: boolean | null | undefined;
	required?: boolean;
	theme?: VTextField['$props']['theme'];
}

export interface ColorPickerIconProps {
	color?: VIcon['$props']['color'];
	icon?: VIcon['$props']['icon'];
}

export interface VuetifyDefaults {
	VCard: Props['cardProps'];
	VColorPicker: Props['colorPickerProps'];
	global?: any;
}

export interface TextFieldProperties {
	bottom: string | number | undefined;
	height: number | string;
	left: string | number | undefined;
	// maxWidth: string | number | undefined;
	right: string | number | undefined;
	top: string | number | undefined;
	width: number | string;
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

// ------------------------- Classes //
export interface UseDotContainerClass {
	(
		options: {
			density?: Props['density'];
		}
	): object;
}

export interface UseDotFieldClass {
	(
		options: {
			name?: Props['name'];
		}
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
export interface UseDotStyle {
	(
		options: {
			dotFieldProps: MaybeRef<Props['dotFieldProps']>;
			dotField: MaybeRef<Props['dotField']>;
			modelValue: MaybeRef<any>;
		}
	): CSSProperties;
}


export interface UseHintStyles {
	(
		options: {
			dotHintActive: MaybeRef<boolean>;
			persistentHint: MaybeRef<Props['persistentHint']>;
		}
	): CSSProperties;
}

export interface CardStylesObject {
	borderColor?: string;
	borderStyle?: string;
	borderWidth?: string;
	bottom?: string | number;
	display?: string;
	left?: string | number;
	minWidth?: string;
	padding?: string;
	right?: string | number;
	top?: string | number;
	width?: string | number;
}
