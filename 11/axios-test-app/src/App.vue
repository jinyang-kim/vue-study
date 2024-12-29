<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
import axios from 'axios';

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

const requestAPI = () => {
  let todoList = [];
  axios
    .get(listUrl)
    .then((response) => {
      todoList = response.data;
      console.log("# TodoList : ", todoList);
      return todoList[0].id;
    })
    .then((id) => {
      return axios.get(todoUrlPrefix + id);
    })
    .then((response) => {
      console.log("## 첫번째 Todo : ", response.data);
      return todoList[1].id;
    })
    .then((id) => {
      axios.get(todoUrlPrefix + id).then((response) => {
        console.log("## 두번쨰 Todo : ", response.data);
      })
    })
}

requestAPI();

//const requestAPI = () => {
//  //const api = "https://todosvc.bmaster.kro.kr/"
//  //const url = `${api}todolist/gdhong`;
//  axios.get(url).then((response) => {
//    console.log("# 응답객체 : ", response);
//  })
//}

//requestAPI();
</script>

<style scoped>

</style>