<template>
  <nav class="infoBox">
    <article class="header1">
      <header>
          <i class="returnico infoPage_close" @click="goBack()"></i>
          <h1 v-text="title"></h1>
      </header>
    </article>
  </nav>
</template>

<script>
export default {
  props: {
    title: ''
  },
  methods: {
    goBack () {
      history.go(-1)
    }
  }
}
</script>

<style scoped>
.header .header_right, .header .errorico {
    position: absolute;
    right: 0;
    top: 0;
    height: 44px;
    width: 44px;
}
.header1{
  z-index: 999;
}

</style>
