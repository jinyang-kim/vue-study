<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">이날치(LeeNalChi)</span>
    <button class="navbar-toggler" type="button" @click="changeIsNavShow"><span class="navbar-toggler-icon"></span></button>

    <div :class="navClass">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="nav-link">홈</router-link>
          <!--<router-link to="/" class="nav-link">홈</router-link>-->
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'about'}" class="nav-link">소개</router-link>
          <!--<router-link to="/about" class="nav-link">소개</router-link>-->
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'members'}" class="nav-link">멤버</router-link>
          <!--<router-link to="/members" class="nav-link">멤버</router-link>-->
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'videos'}" class="nav-link">영상</router-link>
          <!--<router-link to="/videos" class="nav-link">영상</router-link>-->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {computed, reactive} from 'vue';

export default {
  name: "Header",
  setup() {
    const state = reactive({
      isNavShow: false
    })
    const navClass = computed(() =>
      state.isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse"
    )
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    }

    return {state, navClass, changeIsNavShow}
  }
};
</script>

<style scoped>

</style>