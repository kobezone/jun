<template>
  <nav class="bar bar-nav">
    <span>back</span>
    <span v-text="startCity"></span>
    <span @click="switchAddress">切换图标</span>
    <span v-text="endCity"></span>
</template>

<script>
export default {
  props: {
    startCity: '',
    endCity: ''
  },
  methods: {
    switchAddress: function () {
      [this.startCity, this.endCity] =  [this.endCity, this.startCity]
    }
  }
}
</script>

<style scoped>
.icon-left {
  width: 2rem;
}
</style>
