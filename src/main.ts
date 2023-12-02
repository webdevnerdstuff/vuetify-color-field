import '@/libraries/fontawesome';
import App from './App.vue';
import { createVCodeBlock } from '@wdns/vue-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { VColorField } from './index';


const app = createApp(App);

app.use(createVCodeBlock());

app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VColorField', VColorField);

registerPlugins(app);

app.mount('#app');
