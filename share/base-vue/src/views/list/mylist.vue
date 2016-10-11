<template>
	<div class="container">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" bottom-text="加载更多..." top-drop-text="松开更新..." :auto-fill="false" bottom-drop-text="松开加载更多..." top-text="刷新数据">
      <ul>
        <li v-for="item in list" class="li-item">
          <div class="item"> <span>我是条目</span> {{item}}</div>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
import $ from 'zepto'
import  {Toast} from 'mint-ui'

export default {
  ready () {
    this.initData();
  },
  data () {
    return {
      title: '列表界面',
      list:[],
      currentPage:1,
      totalPage:3,
      pageSize:50,
    }
  },
  methods: {
    initData(){
      this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    },
    loadTop:function(id) {
      console.log("loadTop",id);
      let me = this;
      me.$broadcast('onTopLoaded', id);
      //请求数据
      console.log("获取数据");
   
      //更新数据
      me.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
      // setTimeout(function(){
      //   me.list.push("我是添加的条目"+num);
      //   // me.topStatus = 'drop';
      //   // me.$children[0].topStatus ='pull';
      //   // me.$children[0].topDropped =false;
      // }, 100);
    },
    loadBottom:function(id) {
      console.log('加载更多数据loadBottom',id);
      let me = this;
      me.$broadcast('onBottomLoaded',id);
      me.currentPage++;
      if(me.currentPage<=me.totalPage){
      let num = Math.ceil(Math.random()*1000);
      console.log(num);
      setTimeout(function(){
        me.list.push("我是添加的条目"+num);
      },100);
      }else{
        me.allLoaded = true;
        Toast("没有更多数据了...");
      }
    }
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
  ul{
      display: block;
  list-style-type: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0;
  }
  .li-item{
    height: 48px;
    width: 100%;
    line-height: 48px;
    border-bottom:1px solid #999;  
  }
</style>
