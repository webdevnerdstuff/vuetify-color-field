import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import CodeBlock from 'vue3-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { makeServer } from '../../server';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as MyComponents from '../../index';

makeServer({ environment: 'demo' });

const app = createApp(PlaygroundApp);
app.component('CodeBlock', CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VPluginTemplate', MyComponents.VPluginTemplate);

registerPlugins(app);

app.mount('#app');
