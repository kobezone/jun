import $ from 'zepto'

export default function (router) {
  router.map({
    '*': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/home': {
      component (resolve) {
        require(['./views/home'], resolve)
      }
    },
    '/list': {
      component (resolve) {
        require(['./views/list/mylist'], resolve)
      }
    },
    '/list/1': {
      component (resolve) {
        require(['./views/list/myinfinite-scroll'], resolve)
      }
    },
    '/about': {
      component (resolve) {
        require(['./views/public/about'], resolve)
      }
    },
    '/user/login': {
      component (resolve) {
        require(['./views/user/login'], resolve)
      }
    }
  })

  router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    if (toPath === '/home') {
      router.app.isIndex = true
    }
    else if (toPath.replace(/[^/]/g, '').length >= 2) {
      router.app.isIndex = false
    }
    else {
      router.app.isIndex = true
    }
    next()
  })

  router.afterEach(function ({to}) {
    $('.javascript-scroll').each(function () {
      $(this).scroller('refresh')
    })
  })
}
