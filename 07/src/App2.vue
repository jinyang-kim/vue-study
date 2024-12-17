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

export default {
  name: 'App2',
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        {id: 1, name: "BTS", checked: true},
        {id: 2, name: "Black Pink", checked: true},
        {id: 3, name: "IU", checked: true},
        {id: 4, name: "Twice", checked: true},
        {id: 5, name: "ITZY", checked: false},
      ]
    }
  }
};
</script>

<style scoped>

</style>