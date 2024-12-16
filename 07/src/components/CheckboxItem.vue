<template>
  <li>
    <input type="checkbox" :checked="checked" />{{id}} - {{name}}
  </li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: {
    id: [Number, String],
    //name: String,
    name: {
      validator(v) {
        return typeof(v) !== "string" ? false : v.trim().length >= 4 ? true : false
      }
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  }
  // 기본 타입의 속성의 변경할때 오류 발생
  //created() {
  //  this.checked = true;
  //}
};
</script>

<style scoped>

</style>