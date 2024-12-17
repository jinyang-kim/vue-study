<template>
  <div>
    <Sender />
    <br />
    <Receiver />
  </div>
</template>

<script>
import Sender from '@/components/Sender.vue';
import Receiver from '@/components/Receiver.vue';
export default {
  name: 'App5',
  components: {Receiver, Sender }
};
</script>

<style scoped>

</style>