import { App, Plugin } from 'vue';
import { VColorField } from './plugin';
import './plugin/styles/main.scss';

const install = (app: App) => {
	app.component('VColorField', VColorField);
};

VColorField.install = install;

export default VColorField as unknown as Plugin;

export { VColorField };
