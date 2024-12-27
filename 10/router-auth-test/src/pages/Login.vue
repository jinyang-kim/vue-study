<template>
  <div>
    <h2>로그인</h2>
    <div>
      사용자 : <input type="text" v-model="info.userid" />
    </div>
    <div>
      비밀번호 : <input type="password" v-model="info.password" />
    </div>
    <div>
      <button @click="login">로그인</button>
    </div>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import {reactive} from 'vue';
import {loginProcess} from '@/utils/AuthUtil.js';

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const currentRoute = useRoute();
    const fromname = currentRoute.query.fromname;
    
    const info = reactive({userid: "", password: ""});

    // 로그인 성공 시 액션
    const successCallback = () => {
      if(fromname) router.push({path: fromname})
      else router.push({name: 'home'})
    }
    // 로그인 실패 시 액션
    const failCallback = () => {
      alert("로그인 실패");
    }
    
    const login = () => {
      loginProcess(info.userid, info.password, successCallback, failCallback)
    }
    
    return {info, login}
  },
};
</script>

<style scoped>

</style>