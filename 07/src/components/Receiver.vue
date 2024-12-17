<template>
  <div style="border: 1px solid gray; margin: 5px; padding: 5px;">
    <h2>Receiver</h2><hr />
    <h2>전송된 메시지 : {{textMessage}}</h2>
  </div>
</template>

<script>
export default {
  name: "Receiver",
  created() {
    this.emitter.on("message", this.receiveHandler);
  },
  data() {
    return {
      textMessage: ""
    }
  },
  methods: {
    receiveHandler(msg) {
      this.textMessage = msg;
    }
  }
};
</script>

<style scoped>

</style>