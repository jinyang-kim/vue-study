import {createRouter, createWebHistory, isNavigationFailure} from 'vue-router';

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Members from "@/pages/Members.vue";
import MemberInfo from "@/pages/MemberInfo.vue";
import Videos from "@/pages/Videos.vue";
import VideoPlayer from '@/pages/VideoPlayer.vue';

const membersIdGuard = (to, from) => {
  // members/:id 경로는 반드시 이전 경로가 /members, /members:id인 경우에만 내비게이션 허용
  if(from.name !== "members" && from.name !== "members/id") {
    return false;
  }
}

const router = createRouter({
  // 라우팅 모드 지정
  history: createWebHistory(),
  routes: [
    {path: "/", name: "home", component: Home},
    {path: "/about", name: "about",  component: About},
    {path: "/members", name: "members", component: Members},
    {
      path: "/members/:id",
      name: "members/id",
      component: MemberInfo,
      beforeEnter: membersIdGuard
    },
    {
      path: "/videos",
      name: "videos",
      component: Videos,
      // 중첩 라우트 구성
      children: [
        {
          path: ':id',
          name: "videos/id",
          component: VideoPlayer
        }
      ]
    },
  ]
})

router.beforeEach((to) => {
  // to.query에 속성이 존재할 경우 제거된 경로로 재이동
  if(to.query && Object.keys(to.query).length > 0) {
    return {path:to.path, query: {}, params: to.params};
  }
})

router.afterEach((to, from, failure) => {
  if(isNavigationFailure(failure)) {
    console.log("@@ 내비게이션 중단 : ", failure);
  }
})

export default router;