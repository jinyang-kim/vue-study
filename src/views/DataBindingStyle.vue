<template>
  <div v-bind:style="styleObject">Inline Style Binding</div>
</template>

<script>
  export default {
    data() {
      return {
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      };
    }
  }
</script>