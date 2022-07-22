import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App) 최상위 컴포넌트인 App.vue로 app을 생성
// use(router) 코드를 추가하여 App.vue에서 router가 사용될 수 있도록 추가
// App.vue를 public 폴더의 index.html에 정의되어 있는 id="app"인 html element에 마운트 시킴
createApp(App).use(router).mount('#app')
