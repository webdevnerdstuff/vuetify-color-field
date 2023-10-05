import { App, Plugin } from 'vue';
import VPluginTemplates from './plugin';
import './plugin/styles/main.scss';

const install = (app: App) => {
	for (const prop in VPluginTemplates) {
		const component = VPluginTemplates[prop];
		app.component(component.name, component);
	}
};

for (const prop in VPluginTemplates) {
	const component = VPluginTemplates[prop];
	component.install = install;
}

export const VPluginTemplate = VPluginTemplates.VPluginTemplate;

export default { VPluginTemplates } as unknown as Plugin;

