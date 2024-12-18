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
        <InputTodo />
        <TodoList :todoList="todoList" />
        <!--<InputTodo @add-todo="addTodo" />-->
        <!--<TodoList :todoList="todoList" @delete-todo="deleteTodo" @toggle-completed="toggleCompleted" />-->
      </div>
    </div>
    <!-- //body -->
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import InputTodo from '@/components/InputTodo.vue';

let ts = new Date().getTime();

export default {
  name: 'App',
  components: {TodoList, InputTodo},
  created() {
    this.emitter.on('add-todo', this.addTodo);
    this.emitter.on('delete-todo', this.deleteTodo);
    this.emitter.on('toggle-completed', this.toggleCompleted);
  },
  data() {
    return {
      todoList: [
        {id: ts, todo: "자전거 타기", completed: false},
        {id: ts+1, todo: "자전거 타기2", completed: true},
        {id: ts+2, todo: "자전거 타기3", completed: false},
        {id: ts+3, todo: "자전거 타기4", completed: false},
      ]
    }
  },
  methods: {
    addTodo(todo) {
      if (todo.length >= 2) {
        this.todoList.push({id: new Date().getTime(), todo: todo, completed: false})
      }
    },
    deleteTodo(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList.splice(index, 1);
    },
    toggleCompleted(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList[index].completed = !this.todoList[index].completed;
    }
  }
};
</script>

<style scoped>

</style>