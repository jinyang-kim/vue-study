import './assets/main.css'

import { createApp } from 'vue'
//import App from '@/App.vue'
import App from '@/App5.vue'

import mitt from 'mitt';
// 전역 컴포넌트 등록
//import CheckboxItem from '@/components/CheckboxItem.vue';

//createApp(App).mount('#app')
//createApp(App).component('CheckboxItem', CheckboxItem).mount('#app')

const emitter = mitt();
emitter.on('*', (type, e) => console.log(`## 이벤트 로그 : ${type} -> `, e));

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
