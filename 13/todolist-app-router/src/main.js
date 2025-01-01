import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import router from '@/router/index.js';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');
