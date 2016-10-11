<template>
  <iframe :src="path" :name="name" :title="title" frameborder="0"></iframe>
</template>

<script>
export default {
  props: {
    title: '',
    path: '',
    name: ''
  }
}
</script>

<style scoped>
  iframe {
    border: 0px;
    width: 100%;
    height: 100%;
    z-index: 100px;
    min-height: 300px;
  }
</style>
