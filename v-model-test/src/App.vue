<template>
  <div>
    <!-- :update 방식 -->
    <!--<InputName :name="searchName" @update:name="changeSearchName" />-->
    <!-- v-model 방식 -->
    <InputName v-model:name="searchName" />
  </div>
</template>

<script>
import InputName from '@/components/InputName.vue';

export default {
  name: "App",
  components: {InputName},
  data() {
    return {
      searchName: "Hong"
    }
  },
  methods: {
    changeSearchName(name) {
      console.log(name);
      this.searchName = name;
    }
  }
};
</script>

<style scoped>

</style>