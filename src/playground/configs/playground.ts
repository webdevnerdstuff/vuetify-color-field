import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import CodeBlock from 'vue3-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VColorField from '../../index';

const app = createApp(PlaygroundApp);
app.component('CodeBlock', CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VColorField', VColorField);

registerPlugins(app);

app.mount('#app');
