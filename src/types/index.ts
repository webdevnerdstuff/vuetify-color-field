/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { CSSProperties } from 'vue';
// import { ThemeInstance } from 'vuetify';
// import type {  } from 'vuetify/labs/components';


// -------------------------------------------------- Vuetify Types //


// -------------------------------------------------- Misc //
export interface KeyStringAny<T = any> {
	[key: string]: T;
};


// -------------------------------------------------- Props //
export interface Props {
	foo?: string;
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
			str: string | number,
			unit?: string,
		}
	): string | void;
}

// ------------------------- Classes //
export interface UseContainerClasses {
	(
		options: {
			isOption?: boolean;
		}
	): object;
}


// ------------------------- Styles //
export interface UseContainerStyle {
	(
		options: {
			displayType?: string;
		}
	): CSSProperties;
}
