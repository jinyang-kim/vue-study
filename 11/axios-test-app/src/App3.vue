<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
import axios from 'axios';

// axios.get() 학습
const requestAPI = async () => {
  const url = "/api/todolist/gdhong";
  const response = await axios.get(url);
  console.log("# 응답객체 : ", response);
}

requestAPI();
</script>

<style scoped>

</style>