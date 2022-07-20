<template>
  <div>
    <label>
      <input type="checkbox" v-model="checked" />{{checked}}
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" v-model="checked2" true-value="yes" false-value="no" />{{checked2}}
    </label>
  </div>
  <div>
    <!-- <label><input type="checkbox" value="서울" v-model="checked3" /> 서울</label>
    <label><input type="checkbox" value="부산" v-model="checked3" /> 부산</label>
    <label><input type="checkbox" value="제주" v-model="checked3" /> 제주</label> -->
    <label><input type="checkbox" v-bind:value="checkValue1" v-model="checked3" /> 서울</label>
    <label><input type="checkbox" v-bind:value="checkValue2" v-model="checked3" /> 부산</label>
    <label><input type="checkbox" v-bind:value="checkValue3" v-model="checked3" /> 제주</label>
    <br />
    <p>체크한 지역 : {{checked3}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: 'true',
        checked2: 'true',
        checked3: [],
        checkValue1: '서울',
        checkValue2: '부산',
        checkValue3: '제주',
      };
    }
  }
</script>