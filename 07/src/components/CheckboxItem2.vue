<template>
  <li>
    <input type="checkbox" :checked="idol.checked" /> {{idol.name}}
  </li>
</template>

<script>
export default {
  name: 'CheckboxItem2',
  props: ["idol"],
  // 갹체나 배열은 참조형이기 때문에 변경 가능하지만, 속성의 본래 목적에 위배되는 것이므로 권장하지 않음
  //created() {
  //  this.idol.checked = true;
  //}
};
</script>

<style scoped>

</style>