import {
	UseConvertToUnit,
} from '@/types';


/**
* Converts a string to a number with a unit.
*/
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { unit = 'px', value } = options;

	if (value == null || value === '') {
		return undefined;
	}

	if (!+value) {
		return String(value);
	}

	return `${Number(value)}${unit}`;
};
