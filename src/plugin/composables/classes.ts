import {
	UseCardClasses,
	UseDotContainerClass,
	UseDotFieldClass,
	UseHintClasses,
	UseTextFieldClasses,
} from '@/types';
import { componentName } from '../utils/globals';


// ------------------------------------------------ Dot Field //
export const useDotContainerClass: UseDotContainerClass = (options) => {
	const { density } = options;

	return {
		[`${componentName}--dot-container`]: true,
		[`v-input--density-${density}`]: true,
		'v-input--horizontal': true,
	};
};

export const useDotFieldClasses: UseDotFieldClass = (options) => {
	const { name } = options;

	return {
		[`${componentName}--dot-field`]: true,
		[`${componentName}--dot-field-${name}`]: true,
		'v-field__field': true,
	};
};

// ------------------------------------------------ Text Field //
export const useTextFieldClasses: UseTextFieldClasses = (options) => {
	const { name, readonly, readonlyInput } = options;

	return {
		[`${componentName}--text-field-${name}`]: true,
		[`${componentName}--text-field-readonly`]: readonly ?? false,
		[`${componentName}--text-field-readonly-input`]: readonlyInput && !readonly ? true : false,
		[`${componentName}--text-field`]: true,
	};
};

export const useHintClasses: UseHintClasses = (options) => {
	const { hintAlign, hintColor } = options;

	return {
		[`${componentName}--text-field`]: true,
		[`text-${hintColor}`]: hintColor,
		'text-left': hintAlign === 'left',
		'text-right': hintAlign === 'right',
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
