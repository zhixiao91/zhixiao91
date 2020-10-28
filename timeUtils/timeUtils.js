/**
 * 获取该周的所要显示的周和日期的对应数据，数据结构如下
 * var weekDay = {week: '', day: ''}
 * 参数：selectWeek  0为本周， 数字代表前几周或者后几周，例如1是下一周
 */
function getWeekDayList (selectWeek) {
  //1.获取周一对应的时间
  //2.用循环七次添加周一到周日对应的周几和几号
  var selectWeekTime = getCurrentTimeStamp() + (selectWeek * 7) * 24 * 60 * 60 * 1000;
  var mondayTime = selectWeekTime - (getWeekNumber(selectWeekTime) - 1) * 24 *60 * 60 * 1000;
  var timeBean = {
    selectDay: 0,
    yearMonth: '',
    weekDayList: []
  }

  for (let i = 0; i < 7; i++) {
    var weekDay = {
      week: '',
      day: '',
      ymonth: ''
    }
    weekDay.week = getWeek(mondayTime + i * 24 * 60 * 60 * 1000)
    weekDay.day = getMyDay(mondayTime + i * 24 * 60 * 60 * 1000)
    weekDay.ymonth = getYearMonth(mondayTime + i * 24 * 60 * 60 * 1000)
    timeBean.weekDayList.push(weekDay)
  }

  timeBean.yearMonth = getYearMonth(selectWeekTime);
  timeBean.selectDay = getCurrenrWeek();
  return timeBean;
}

// 获取当前时间戳
function getCurrentTimeStamp () {
  var timestamp = new Date().getTime();
  return timestamp;
}

// 获取当前周几
function getCurrenrWeek () {
  var str = "6012345".charAt(new Date().getDay());
  return str;
}

// 时间戳获得年月
function getYearMonth(res) {
  var time = new Date(res);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  return y + '-' + m;
}

// 时间戳获取的月
function getMonth(res) {
  var time = new Date(res);
  var m = time.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  return m;
}

// 时间戳转几号
function getMyDay(res) {
  var time = new Date(res);
  var d = time.getDate();
  return d;
}

// 时间戳转周几
function getWeek(res) {
  var time = new Date(res);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  return "日一二三四五六".charAt(new Date(y + '-' + m + '-' + d).getDay());
}

// 时间戳转周几 0123456
function getWeekNumber(res) {
  var time = new Date(res);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  return "0123456".charAt(new Date(y + '-' + m + '-' + d).getDay());
}

module.exports = {//把方法共享， 让引用的地方可以调用
  getWeekDayList: getWeekDayList,
}


