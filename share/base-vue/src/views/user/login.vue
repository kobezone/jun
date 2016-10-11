<template>
	<div class="container">
    <mt-header :title="title">
      <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
    </mt-header>

    <div class="h5"></div>
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
    <div class="h5"></div>
    <mt-button type="primary" size="large" @click="login">登录</mt-button>
  </div>
</template>
<script>
import $ from 'zepto'
import HNav from '../../components/HNav'
import { Toast } from 'mint-ui'

export default {
  ready () {
    // this.initData();
  },
  route:{
    data({from,to}){

    }
  },
  data () {
    return {
      title:'登录'
    }
  },
  methods: {
    login(){
      Toast("登录成功 返回首页");
      router.go('/home');

    }
  },
  components: {
    HNav
  }
}
</script>
<style scoped>
.h5{
  height: 8px;
  width: 100%;
}


</style>