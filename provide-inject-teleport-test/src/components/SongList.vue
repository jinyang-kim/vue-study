<template>
  <ul>
    <SongListItem v-for="song in songs" :key="song.id" :song="song" />
  </ul>
  <div>
    체크된 곡 수 : {{ doneCount }}
  </div>
</template>

<script>
import SongListItem from '@/components/SongListItem.vue';

export default {
  name: "SongList",
  components: {SongListItem},
  props: ["songs"],
  inject: ["doneCount"]
};
</script>

<style scoped>

</style>