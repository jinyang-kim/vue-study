<template>
  <div class="mt-5">
    <img :src="member.photo" :alt="member.name" :title="member.name" class="img" />
    <h4 class="mt-2">{{member.name}}({{member.role}})</h4>
    <p>{{member.desc}}</p>
    <a v-if="member.insta && member.insta !== ''" class="fa fa-instagram m-1" :href="member.insta"></a>
    <a v-if="member.facebook && member.facebook !== ''" class="fa fa-facebook m-1" :href="member.facebook"></a>
    <a v-if="member.youtube && member.youtube !== ''" class="fa fa-youtube m-1" :href="member.youtube"></a>
    <br />
    <br />
    <router-link :to="{name: 'members'}">목록으로</router-link>
    <!--<router-link to="/members">목록으로</router-link>-->
  </div>
</template>

<script>
import {useRoute} from 'vue-router';

import members from '@/data-sample/members.json';

export default {
  name: "MemberInfo",
  props: ['id'],
  setup(props) {
    // router props 전달 안하는 경우
    //const currentRoute = useRoute();
    //const id = parseInt(currentRoute.params.id, 10);
    //const member = members.find((member) => member.id === id);
    const member = members.find((member) => member.id === parseInt(props.id, 10));

    return {member};
  }
};
</script>

<style scoped>

</style>