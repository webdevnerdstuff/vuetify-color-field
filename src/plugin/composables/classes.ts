import {
	UseCardClasses,
	UseHintClasses,
	UsePipClasses,
	UseTextFieldClasses,
} from '@/plugin/types';
import { componentName } from '@utils/globals';


// ------------------------------------------------ Pip //

export const usePipClasses: UsePipClasses = () => {
	return {
		[`${componentName}--pip`]: true,
	};
};

// ------------------------------------------------ Text Field //
export const useTextFieldClasses: UseTextFieldClasses = (options) => {
	const { name = '', readonly, readonlyInput } = options;

	return {
		[`${componentName}--text-field-${name}`]: name !== '',
		[`${componentName}--text-field-readonly`]: readonly ?? false,
		[`${componentName}--text-field-readonly-input`]: readonlyInput && !readonly ? true : false,
		[`${componentName}--text-field`]: true,
	};
};

export const useHintClasses: UseHintClasses = () => {
	return {
		[`${componentName}--text-field`]: true,
	};
};

// -------------------------------------------------- Card //
export const useCardClasses: UseCardClasses = (options) => {
	const { fullWidth } = options;

	return {
		[`${componentName}--card`]: true,
		[`${componentName}--card-full-width`]: fullWidth,
	};

};
