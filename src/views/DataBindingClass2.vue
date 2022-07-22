<!-- 클래스 바인딩의 경우 오브젝트 형태로 사용하며, 바인딩할 클래스를 Key로 잡고, 바인딩 여부를 true/false로 지정한다. -->
<template>
  <div class="container" v-bind:class="[
    activeClass,
    errorClass
  ]">Class Binding</div>
</template>

<script>
  export default {
    data() {
      return {
        activeClass: 'active',
        errorClass: 'text-red'
      };
    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 200px;
  }
  .active{
    background-color: yellow;
    font-weight: bold;
  }
  .text-red{
    color: red;
  }
</style>