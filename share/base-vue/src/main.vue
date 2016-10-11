<template>
  <div class="page page-current">
      <home-bar v-if="isIndex">
        <home-bar-item path="/home" label="主页"  mycls="tab_1"></home-bar-item>
        <home-bar-item path="/user/login" label="登录"  mycls="tab_1"></home-bar-item>
        <home-bar-item path="/list" label="列表"  mycls="tab_1"></home-bar-item>
        <home-bar-item path="/about" label="关于"  mycls="tab_1"></home-bar-item>
      </home-bar>
      <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import HomeBar from './components/HomeBar'
import HomeBarItem from './components/HomeBarItem'
import $ from 'zepto'

export default {
  ready () {
    $.init()
  },
  data () {
    return {
      isIndex: true
    }
  },
  components: {
    HomeBar,
    HomeBarItem
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

.hide {
  display: none;
}

.show {
  display: block;
}
html{
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
</style>
