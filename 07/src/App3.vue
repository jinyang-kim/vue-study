<template>
  <div>
    <h2>관심있는 K-POP 가수는?</h2>
    <hr />
    <div>
      <ul>
        <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
      </ul>
    </div>
  </div>
</template>

<script>
import CheckboxItem from '@/components/CheckboxItem2.vue';
import Idol from '@/Idol.js';
export default {
  name: 'App',
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        new Idol(1, "BTS", true),
        new Idol(2, "IU", false),
        new Idol(3, "Twice", false),
        new Idol(4, "IVE", true),
      ]
    }
  }
};
</script>

<style scoped>

</style>