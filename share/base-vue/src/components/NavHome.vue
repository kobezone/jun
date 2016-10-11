<template>
  <header class="bar bar-nav">
    <a class="icon icon-me pull-left open-panel" data-panel=".panel-left"></a>
      <span class="icon icon-menu"></span>
    </a>
    <h1 class="title">title</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: '',
    path: '',
    cityName: ''
  }
}
</script>

<style scoped>
.icon-left {
  width: 2rem;
}
</style>
