// pages/courseslist/courseslist.js

var utils = require('../../timeUtils/timeUtils.js');

Page({

  /**
   * 页面的初始数据
   * selectWeek 0代表的本周 1代表下一周 -1代表上一周
   * timeBean 传递给组件的数据， 数据的格式在一开始的工具类中明确
   */
  data: {
    selectWeek: 0,
    timeBean: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 点击了上一周，选择周数字减一，然后直接调用工具类中一个方法获取到数据
   */
  lastWeek:function (e) {
    var selectWeek = --this.data.selectWeek;
    var timeBean = this.data.timeBean;
    timeBean = utils.getWeekDayList(selectWeek);

    let selecttime = timeBean.yearMonth + '-' + timeBean.weekDayList[timeBean.selectDay].day;
    console.log('----------上一周',selecttime);
    if (selectWeek != 0) {
      timeBean.selectDay = 0;
      timeBean.yearMonth = timeBean.weekDayList[0].ymonth;
    }

    this.setData({
      timeBean,
      selectWeek
    })
  },

  /**
   * 点击了下一周，选择周数字加一，然后直接调用工具类中一个方法获取到数据
   */
  nextWeek:function (e) {
    var selectWeek = ++this.data.selectWeek;
    var timeBean = this.data.timeBean;
    timeBean = utils.getWeekDayList(selectWeek);

    let selecttime = timeBean.yearMonth + '-' + timeBean.weekDayList[timeBean.selectDay].day;
    console.log('----------下一周选中',selecttime);
    if (selectWeek != 0) {
      timeBean.selectDay = 0;
      timeBean.yearMonth = timeBean.weekDayList[0].ymonth;
    }

    this.setData({
      timeBean,
      selectWeek
    })
  },

  /**
   * 选中了某一日，改变selectDay为选中日
   */
  dayClick:function (e) {
    var timeBean = this.data.timeBean;
    timeBean.selectDay = e.detail;
    timeBean.yearMonth = timeBean.weekDayList[e.detail].ymonth;

    let selecttime = timeBean.yearMonth + '-' + timeBean.weekDayList[timeBean.selectDay].day
    console.log('----------选中那天',selecttime);
    this.setData({
      timeBean,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      timeBean: utils.getWeekDayList(this.data.selectWeek)
    })
    let selecttime = this.data.timeBean.yearMonth + '-' + this.data.timeBean.weekDayList[this.data.selectWeek].day;
    console.log('-------默认那天',selecttime);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          windowHeight: result.windowHeight,
          windowWidth: result.windowWidth,
        });
      },
    });
  },

  initDate () {
    var d = new Date();
    // var str = e.target.id;
    
    var month = utils.addZero(d.getMonth()+1),
        day = utils.addZero(d.getDate());
    console.log(d.getFullYear() + '/' + month + '/' + day);
    for (var i = -5; i <= 5; i++) {
      this.updateDate(utils.DateAddDay(d, i*7));//多少天之后的
    }
    this.setData({
      swiperCurrent: 5,
      dateCurrent: 5,
      dateCurrentStr: d.getFullYear() + '-' + month + '-' + day,
      dateMonth: month + '月'
    });
    
  },

  // 获取这周从周日到周六的日期
  calculateDate (_date) {
    var first = utils.FirstDayInThisWeek(_date);
    var d = {
      'month': first.getMonth() + 1,
      'days': [],
    };
    for (var i = 0; i < 7; i++) {
      var dd = utils.DateAddDay(first, i);
      var day = utils.addZero(dd.getDate()),
          month = utils.addZero(dd.getMonth()+1);
      d.days.push({
        'day': day,
        'id': dd.getFullYear()+'-'+month+'-'+day,
      });
    }
    return d;
  },

  // 更新日期数组数据
  updateDate (_date, atBefore) {
    var week = this.calculateDate(_date);
    if (atBefore) {
      this.setData({
        dateList: [week].concat(this.data.dateList),
      });
    } else {
      this.setData({
        dateList: this.data.dateList.concat(week),
      });
    }
  },

  // 日历组件轮播切换
  dateSwiperChange (e) {
    var index = e.detail.current;
    var d = this.data.dateList[index];
    this.setData({
      swiperCurrent: index,
      dateMonth: d.month + '月',
    });
  },

  // 获取日期字符串
  getDateStr: function(arg) {
    if (utils.type(arg) == 'array') {
      return arr[0] + '-' + arr[1] + '-' + arr[2] + '00:00:00';
    } else if (utils.type(arg) == 'date') {
      return arg.getFullYear() + '-' + (arg.getMonth()+1) + '-' +arg.getDate() + ' 00:00:00';      
    } else if (utils.type(arg) == 'object') {
      return arg.year + '-' + arg.month + '-' + arg.day + ' 00:00:00';
    }
  },
  
  // 点击日历某日
  chooseDate (e) {
    var str = e.target.id;
    console.log(str);
    this.setData({
      dateCurrentStr: str
    });
  },

  onApplyLeaveClick: function (e) {
    wx.navigateTo({
      url: '/pages/applyleave/applyleave',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
