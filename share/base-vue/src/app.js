import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
window.FastClick = FastClick
import VueResource from 'vue-resource'
import routerConfig from './router'
import pullToRefresh from './directives/pullToRefresh'
import infiniteScroll from './directives/infiniteScroll'
import filters from './filters'
import app from './main'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import $ from 'zepto'
import {Indicator, Toast} from 'mint-ui'

Vue.use(VueRouter)
Vue.use(MintUI)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)

Vue.use(VueResource)
Vue.http.options.params = {
  'platform': 'h5',
  'time': new Date().getTime(),
  'authToken': window.getCookie('authToken'),
  'uid': window.getCookie('uid')
}

Vue.http.options.timeout = 100000

Vue.http.options.emulateJSON = true
Vue.http.interceptors.push({
  request: function (request) {
    console.log('request: ', request)
    request.params.platform = 'h5'
    request.params.time = new Date().getTime()
    request.params.uid = window.getCookie('uid')
    request.params.authToken = window.getCookie('authToken')
    Indicator.open('加载中...')
    return request
  },
  response: function (response) {
    Indicator.close()
    if (response.data.resultCode === '-9999' || response.data.resultCode === '-100000005') {
      Toast(response.data.resultMsg)
    }
    if (response.data.resultCode === '-100000002' || response.data.resultCode === '-100000003' || response.data.resultCode === '-100000004') {
      if (!$.hb.debug) {
        window.setCookie('uid', '', 3600)
        window.setCookie('authToken', '', 3600)
        window.location = $.hb.LOGIN_URL
      }
    }
    let message = response['authToken']
    if (message != null && message !== '') {
      localStorage.setItem('hb-train-auth-token', message)
    }
    return response
  }
})
// Vue.http.interceptors.push((request, next) => {

// })

// Directive
Vue.directive('pullToRefresh', pullToRefresh)
Vue.directive('infiniteScroll', infiniteScroll)

// Filters
Object.keys(filters).forEach((x) => Vue.filter(x, filters[x]))

router.start(app, '#app')

window.router = router
