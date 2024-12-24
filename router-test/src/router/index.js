import {createRouter, createWebHistory} from 'vue-router';

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Members from "@/pages/Members.vue";
import MemberInfo from "@/pages/MemberInfo.vue";
import Videos from "@/pages/Videos.vue";
import VideoPlayer from '@/pages/VideoPlayer.vue';

const router = createRouter({
  // 라우팅 모드 지정
  history: createWebHistory(),
  routes: [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/members", component: Members},
    {path: "/members/:id", component: MemberInfo},
    {
      path: "/videos",
      component: Videos,
      // 중첩 라우트 구성
      children: [
        {
          path: ':id',
          component: VideoPlayer
        }
      ]
    },
  ]
})

export default router;