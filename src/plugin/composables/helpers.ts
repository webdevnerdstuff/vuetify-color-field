import { onBeforeUnmount, onMounted } from 'vue';
import {
	UseConvertToUnit,
	UseDetectOutsideClick,
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


/**
* Detects clicking outside of an element and calls a callback.
*/
export const useDetectOutsideClick: UseDetectOutsideClick = (component, callback) => {
	if (!component) {
		return;
	};

	const listener = (event: Event) => {
		if (event.target !== component.value && event.composedPath().includes(component.value)) {
			return;
		}

		if (typeof callback === 'function') {
			callback(event);
		}
	};

	onMounted(() => {
		window.addEventListener('click', listener, false);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('click', listener, false);
	});

	return { listener };
};
