import { App, Plugin } from 'vue';
import { VColorPickerField } from './plugin';
import './plugin/styles/main.scss';

const install = (app: App) => {
	app.component('VColorPickerField', VColorPickerField);
};

VColorPickerField.install = install;

export default VColorPickerField as unknown as Plugin;

export { VColorPickerField };
