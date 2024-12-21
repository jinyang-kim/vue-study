<template>
  <div>
    <h2>최신 인기곡</h2>
    <SongList :songs="songs" />
  </div>
  <br />
  <br />
  <button @click="changeModal">Teleport를 이용한 Modal 기능</button>
  <teleport to="#modal">
    <Modal v-if="isModal" />
  </teleport>
</template>

<script>
// provide 객체는 기본적으로 반응성이 제공 X
//import { computed } from 'vue';

import SongList from '@/components/SongList.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: "App",
  components: {Modal, SongList},
  data() {
    return {
      songs: [
        {id: 1, title: "Blueming", done: true},
        {id: 2, title: "Blueming2", done: false},
        {id: 3, title: "Blueming3", done: true},
        {id: 4, title: "Blueming4", done: false},
        {id: 5, title: "Blueming5", done: true},
      ],
      isModal: false
    }
  },
  methods: {
    changeModal() {
      this.isModal = true;
      setTimeout(() => {this.isModal = false}, 2000);
    }
  },
  provide() {
    return {
      icons: {
        checked: "far fa-check-circle",
        unchecked: "far fa-circle"
      },
      // computed 사용
      //doneCount: computed(() => {
      //  return this.songs.filter((s) => s.done === true).length
      //})

      // computed 미사용
      // 자식 컴포넌트에서 데이터 수정이 되어도 적용 안됨
      doneCount: this.songs.filter((s) => s.done === true).length
    }
  }
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>