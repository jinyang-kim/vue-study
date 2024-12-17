<template>
  <div style="border: 1px solid gray; padding: 5px;">
    <p>이름 : <input type="text" v-model="name"></p>
    <p>
      <button @click="$emit('nameChanged', {name})">이벤트 발신</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "InputName",
  //emits: ["nameChanged1"],
  emits: {
    nameChanged: (e) => {
      // 문자열이면서 3글자 이상인지 검증
      return e.name && typeof(e.name) === "string" && e.name.trim().length >= 3 ? true : false
    }
  },
  data() {
    name: ""
  }
};
</script>

<style scoped>

</style>