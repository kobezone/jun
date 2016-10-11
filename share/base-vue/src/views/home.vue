<template>
<div class="container">
  <div class="content">
    <mt-header fixed title="home页面"></mt-header>
    <div class="main-content">
      <div class="nav">
        <mt-button size="small" @click.prevent="active = 'tab-container1'">昨天</mt-button>
        <mt-button size="small" @click.prevent="active = 'tab-container2'">今天</mt-button>
        <mt-button size="small" @click.prevent="active = 'tab-container3'">明天</mt-button>
      </div>
      <div class="page-tab-container">
        <mt-tab-container style="page-tabbar-tab-container" :active="active">
          <mt-tab-container-item id="tab-container1">
            <mt-cell v-for="n in 10" title="昨天"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <mt-cell v-for="n in 5" title="今天"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <mt-cell v-for="n in 7" title="明天"></mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Slider from '../components/Slider'
import NavHome from '../components/NavHome'

import { Indicator,Switch,Toast,Swipe, SwipeItem } from 'mint-ui';
import $ from 'zepto'

export default {
  route: {
    data ({to, next}) {
    }
  },
  ready () {
  },
  data () {
    return {
      content:'我是home页面',
      active: 'tab-container1'
    }
  },
  computed: {
  },
  filters:{
  },
  methods: {
  },
  components: {
    Slider,
    NavHome,
    Switch
  }
}
</script>

<style scoped>

.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0px;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.item {
  display: inline-block;
}

.nav {
  padding: 10px;
}

.link {
  color: inherit;
  padding: 20px;
  display: block;
}
.main-content{
  margin-top: 48px;
}
</style>
