<template>
	<div class="container">
   <mt-header fixed :title="title">
      <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
    <section>
      <div class="welcome">欢迎交流 </div>
    </section>
    <mt-swipe :auto="3000">
      <mt-swipe-item class="slide1">
        <div>jun_dev@qq.com</div>
      </mt-swipe-item>
      <mt-swipe-item class="slide1">
        <div>kobezone</div>
      </mt-swipe-item>
      <mt-swipe-item class="slide1">
      <div><a href="http://junzone.cn">junzone.cn</a></div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import $ from 'zepto'

export default {
  ready () {
  },
  data () {
    return {
      title: '关于界面'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .welcome{
    position: relative;
    height: 100%;
    color:#999;
    width: 100%;
    margin-top: 48px;
    line-height: 48px;
    font-size: 20px;
    text-align: center;
  }
  .swipe {
      height: 200px;
      color: #fff;
      font-size: 30px;
      text-align: center;
      margin-bottom: 20px;
  }
  .swipe-item {
      line-height: 200px;
  }
  .slide1 {
      background-color: #0089dc;
      color: #fff;
  }
</style>
