<template>
  <div id="app" class="container">
    <!-- title -->
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <!-- //title -->
    <!-- body -->
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo"></InputTodo>
        <TodoList :todoList="state.todoList" @delete-todo="deleteTodo" @toggle-completed="toggleCompleted" />
      </div>
    </div>
    <!-- //body -->
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';

import TodoList from "@/components/TodoList3.vue";
import InputTodo from '@/components/InputTodo3.vue';

const ts = new Date().getTime();
const state = reactive({todoList: []});

onMounted(() => {
  state.todoList.push({id: ts, todo: '자전거 타기', completed: false})
  state.todoList.push({id: ts + 1, todo: '자전거 타기2', completed: true})
  state.todoList.push({id: ts + 2, todo: '자전거 타기3', completed: false})
  state.todoList.push({id: ts + 3, todo: '자전거 타기4', completed: false})
})

const addTodo = (todo) => {
  if (todo.length >= 2) {
    state.todoList.push({id: new Date().getTime(), todo: todo, completed: false})
  }
}
const deleteTodo = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList.splice(index, 1);
}
const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList[index].completed = !state.todoList[index].completed;
}
</script>

<style scoped>

</style>