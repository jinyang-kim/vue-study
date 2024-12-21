<template>
  <div class="modal">
    <div class="box">
      처리중
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: aqua;
  border: 3px double gray;
  width: 100px;
  height: 80px;
  margin-top: -50px;
  margin-left: -50px;
}
</style>