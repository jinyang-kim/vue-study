<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input id="msg" type="text" class="form-control" name="msg" placeholder="할 일을 여기에 입력해 주세요" v-model.trim="todo" @keyup.enter="addTodoHandler" />
        <button class="btn btn-primary input-group-addon" @click="addTodoHanlder">추가</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: ''
    }
  },
  //emits: ['add-todo'],
  methods: {
    addTodoHanlder() {
      if (this.todo.length >= 3) {
        this.emitter.emit('add-todo', this.todo);
        //this.$emit('add-todo', this.todo);
        this.todo = "";
      }
    }
  }
};
</script>

<style scoped>

</style>