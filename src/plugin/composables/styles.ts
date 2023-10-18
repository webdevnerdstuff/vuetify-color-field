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
	const { dotHintActive, persistentHint } = options;

	const styles: {
		textAlign?: string;
		transform?: string;
	} = {};

	if (!persistentHint && !unref(dotHintActive)) {
		styles.transform = 'translateY(-20px)';
	}

	return styles as CSSProperties;
};
