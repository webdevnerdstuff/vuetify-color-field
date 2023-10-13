import { CSSProperties } from 'vue';
import {
	UseDotStyle,
	UseHintStyles,
} from '@/types';
import {
	useConvertToUnit,
} from '@/plugin/composables/helpers';


// ------------------------------------------------ Component Container //
export const useDotStyles: UseDotStyle = (options) => {
	const { dotField, dotFieldProps, modelValue } = options;
	const dotOptions = unref(dotFieldProps);
	let styles = {};

	if (unref(dotField)) {
		styles = {
			backgroundColor: modelValue.value,
			borderColor: dotOptions?.borderColor,
			borderRadius: useConvertToUnit({ value: dotOptions?.borderRadius }),
			borderStyle: dotOptions?.borderStyle,
			borderWidth: useConvertToUnit({ value: dotOptions?.borderWidth }),
			cursor: dotOptions?.cursor,
			height: useConvertToUnit({ value: dotOptions?.height }),
			width: useConvertToUnit({ value: dotOptions?.width }),
		};
	}

	return styles as CSSProperties;
};

export const useHintStyles: UseHintStyles = (options) => {
	const { dotHintActive, hintAlign, hintColor, persistentHint } = options;

	const styles: {
		color?: string;
		textAlign?: string;
		transform?: string;
	} = {
		color: hintColor,
	};

	if (!persistentHint && !unref(dotHintActive)) {
		styles.transform = 'translateY(-20px)';
	}

	if (hintAlign === 'left') {
		styles.textAlign = 'text-left';
	}

	if (hintAlign === 'right') {
		styles.textAlign = 'text-right';
	}

	return styles as CSSProperties;
};
