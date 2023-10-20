import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import CodeBlock from 'vue3-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VColorPickerField from '../../index';

const app = createApp(PlaygroundApp);
app.component('CodeBlock', CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VColorPickerField', VColorPickerField);

registerPlugins(app);

app.mount('#app');
