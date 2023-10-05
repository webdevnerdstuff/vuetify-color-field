import '@/libraries/fontawesome';
import App from './App.vue';
import CodeBlock from 'vue3-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { makeServer } from './server';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VColorPickerField from './index';

makeServer({ environment: 'demo' });

const app = createApp(App);
app.use(VColorPickerField);
app.component('CodeBlock', CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
