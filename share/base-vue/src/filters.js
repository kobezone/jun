
let format = (value) => {
  return value >= 10 ? value : '0' + value
}
/**
 * 时间格式化
 */
exports.dateFilter = (time, type) => {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()
  let result
  switch (type)
  {
    case 0: // 01-05
      result = `${format(month)}-${format(day)}`
      break
    case 1: // 11:12
      result = `${format(hours)}:${format(minutes)}`
      break
    case 2: // 2015-01-05
      result = `${year}-${format(month)}-${format(day)}`
      break
    case 3: // 2015-01-05 11:12
      result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`
      break
    case 4:// 2015-01-05 11:12:06
      result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
      break
    case 5: // 01月05日
      result = `${format(month)}月${format(day)}日`
      break
  }
  return result
}

/* 显示当前选择的日期 格式化 mm-dd*/
exports.date2mmdd = function (value) {
  var date = new Date(value)
  if (date == null) {
    console.err('格式化时间错误')
  }
  return (date.getMonth() + 1) + '-' + date.getDate()
}

/* 注册filter 显示当前选择的日期 格式化 为星期 */
exports.date2e = function (value) {
  var date = new Date(value)
  if (date == null) {
    console.err('格式化时间错误')
  }
  var week = '周' + '日一二三四五六'.split('')[date.getDay()]
  return week
}

// 事件格式化 timeFilter
exports.timeFilter = (x) => {
  if (x <= 0) {
    return '时间已过期'
  }
  else {
    let minCnt = Math.floor(x / 60000)
    let secCnt = window.parseInt(x / 1000) - minCnt * 60

    if (minCnt > 0) {
      return `${minCnt}分${secCnt}秒`
    }
    else {
      return `${secCnt}秒`
    }
  }
}
