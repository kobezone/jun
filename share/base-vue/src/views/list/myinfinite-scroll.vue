<template>
  <div>
    <ul
      v-infinite-scroll="loadMore()"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
    <li v-for="item in list">
      <div><span v-text = 'item'></span></div>
    </li>
  </ul>
  </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
export default { 
  ready () {
    this.initData();
  },
  data () {
    return {
      list:[]
    }
  },
  methods:{
    initData(){
      this.list=[1,2,3,4,5,6,7]
    },
    loadMore(){
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
}

</script>
<style scoped>

</style>