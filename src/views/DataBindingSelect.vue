<template>
  <div>
    <select v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">제주</option>
    </select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        city: '02' // selectBox default 값 설정
      };
    }
  }
</script>