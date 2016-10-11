import $ from 'zepto'

// 打印钩子函数运行的时间
export let hookTime = (component, hookFnName) => {
  let date = new Date()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let ms = date.getMilliseconds()
  console.log(`${component} ${hookFnName} ${m}-${s}-${ms}`)
}

// 加载动画
export let loader = {
  show () {
    if ($('.ball-beat')[0]) {
      return
    }
    let modalContainer = document.body
    $(modalContainer).append('<div class="loader-inner ball-beat"><div></div><div></div><div></div></div>')
  },
  hide () {
    $('.ball-beat').remove()
  }
}

// 通用函数
export let addDay = (date, num) => {
  if (date instanceof Date) {
    date.setDate(date.getDate() + num)
  }
  else {
    date = new Date()
  }
  var month = date.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  var day = date.getDate()
  if (day < 10) {
    day = '0' + day
  }
  let str = date.getFullYear() + '-' + month + '-' + day
  console.log(str)
  return str
}

// 输出tools
export let tools = {
  checkMobile (mobilePhone) {
    var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
    return reg.test(mobilePhone)
  },
  checkPositiveNumber (number) {
    var reg = /^[1-9][0-9]*$/
    return reg.test(number)
  },
  compareTime (dateOne, dateTwo) {
    var dtOne = 0
    var dtTwo = 0
    if (dateOne instanceof Date) {
      dateOne.setHours(0, 0, 0, 0)
      dtOne = dateOne.getTime()
    }
    else {
      return -1
    }
    if (dateTwo instanceof Date) {
      dateTwo.setHours(0, 0, 0, 0)
      dtTwo = dateTwo.getTime()
    }
    else {
      var date = new Date()
      date.setHours(0, 0, 0, 0)
      dtTwo = date.getTime()
    }
    if (dtOne > dtTwo) {
      return 1
    }
    else if (dtOne === dtTwo) {
      return 0
    }
    else {
      return -1
    }
  }
}

export let formatTime = (timeStamp, fmt) => { // author: meizz
  if (!timeStamp) {
    return ''
  }
  var _timeStamp = parseInt(timeStamp, 10)
  if (_timeStamp.toString().length === 10) {
    _timeStamp *= 1000
  }
  !fmt && (fmt = 'yyyy-MM-dd')

  var t = new Date(_timeStamp)

  var o = {
    'M+': t.getMonth() + 1, // 月份
    'd+': t.getDate(),      // 日
    'h+': t.getHours(),     // 小时
    'm+': t.getMinutes(),   // 分
    's+': t.getSeconds(),   // 秒
    'q+': Math.floor((t.getMonth() + 3) / 3), // 季度
    'S': t.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

// accessToken getAuthToken 获取authToken
export let getAuthToken = () => {
  let baseInfo = localStorage.getItem('hb-train-12308')
  if (baseInfo == null || baseInfo === '') {
    return ''
  }
  else {
    let base = JSON.parse(baseInfo)
    return base.authToken
  }
}

// 获取用户请求配置
export let getUserBase = function(isGotoLogin=true) {
  console.log('获取用户请求配置')
  $.get($.hb.BASE_INFO_URL, function (data) {
    let resp = data
    if (typeof data === 'string') {
      resp = JSON.parse(data)
    }
    if ($.hb.SUCCESS === resp.rsCode) {
      let _initData = localStorage.getItem('hb-train-12308')
      let item = JSON.parse(_initData)
      let ctx = resp.ctx
      if (window.getCookie('authToken') != '') {
        item.userMobile = ctx.userMobile
      }
      if (isGotoLogin && ctx.userId == '') {
        window.location = $.hb.LOGIN_URL +'?service=' + window.location.href
      }
      item.pulblicPayAddr = ctx.pulblicPayAddr
      console.log('util.getUserBase', JSON.stringify(item))
      localStorage.setItem('hb-train-12308', JSON.stringify(item))
    }
  })
}



// 获取用户基本信息
export let getUserBaseInfo = () => {
  let _initData = localStorage.getItem('hb-train-12308')
  if (_initData == null) {
    return null
  }
  else {
    return JSON.parse(_initData)
  }
}

// wxPublicPayAddr wxPublicPayAddr 获取wxPublicPayAddr
export let getWxPublicPayAddr = () => {
  let baseInfo = localStorage.getItem('hb-train-12308')
  if (baseInfo == null || baseInfo === '') {
    return ''
  }
  else {
    let base = JSON.parse(baseInfo)
    return base.pulblicPayAddr
  }
}

// 从cookie中获取userId
export let getCookieUserId = () => {
  return window.getCookie('uid')
}

