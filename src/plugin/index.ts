import type { App } from 'vue';
import type { GlobalOptions } from './types';
import './styles/main.scss';
import VColorField from './VColorField.vue';


export const globalOptions = Symbol();

export function createVColorField(options: GlobalOptions = {}) {
	const install = (app: App) => {
		app.provide(globalOptions, options);

		app.component('VColorField', VColorField);
	};

	return {
		install,
	};
}

export default VColorField;

export {
	VColorField,
};
