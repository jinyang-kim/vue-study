import { createApp } from 'vue'
import App from '@/App.vue'

import mitt from 'mitt';

import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/main.css'

const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
