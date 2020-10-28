// pages/message/message.js

// 获取应用实例
const httpUtil = require('../../config/httpUtil');
const api = require('../../config/api');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum: 1,  //设置加载的第几次。默认是第一次
    isFirstLoad: true,  //用于判断List数组是不是空数组，默认true，空的数组
    hasMore: false,  //加载更多

    idx: '1',
    messeagList:[],
    noticetypelist:[{
      id: '1',
      type: '通知',
      checked: 'true'
    }, {
      id: '2',
      type: '作业',
      checked: 'false'
    }, {
      id: '3',
      type: '交易',
      checked: 'false'
    }, {
      id: '4',
      type: '课耗',
      checked: 'false'
    }, {
      id: '5',
      type: '申请',
      checked: 'false'
    }, {
      id: '6',
      type: '反馈',
      checked: 'false'
    }]
  },

  select:function (e) {
    let id = e.currentTarget.dataset.id;
    this.setData ({
      idx: id
    })
  },

  messageClick: function (e) {
    wx.navigateTo({
      url: '/pages/msgdetails/msgdetails',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var prams = {
      type: 'top',
      key: '1d4b18227927307dc097b9f46be59835'
    }
    httpUtil.postRequest(api.IndexBanner, prams, function(res) {
      console.log(res.result.data);
      that.setData({
        messeagList: res.result.data
      })
    }, function(err) {
      console.log(err);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    wx.showNavigationBarLoading()//在标题栏中显示加载

    //模拟加载
    setTimeout(function(){
      wx.hideNavigationBarLoading()//完成停止加载
      wx.stopPullDownRefresh()//停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this;
    if (that.data.hasMore) {
      that.setData({
        pageNum: that.data.pageNum + 1,//每次触发上拉事件，把pageNum+1
        isFirstLoad: false   //触发到上拉事件，把isFirstLoad设为false
      });
      that.loadData();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})