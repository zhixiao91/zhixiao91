// pages/login/login.js

// 获取应用实例
const httpUtil = require('../../config/httpUtil');
const api = require('../../config/api');

var interval = null;//倒计时函数

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum: '',
    isdisab: false,
    codeNum: '',
    id_token: '',//方便存在本地的locakStorage
    response: '',//存取返回数据
    timeCountDownTop: '获取验证码',
    second: 91,
    ajxtrue: false //验证手机号是否正确
  },

  // 手机号输入
  phoneInput:function (e) {
    this.setData({
      phoneNum: e.detail.value
    })
  },
// 验证码输入
  codeInput:function (e) {
    this.setData({
      codeNum: e.detail.value
    })
  },


  getCode: function (options) {
    var that = this;
    var second = that.data.second;
    interval = setInterval (function () {
      second--;
      that.setData({
        timeCountDownTop: second + 's'
      })
      if (second <= 0) {
        clearInterval(interval)
        that.setData({
          timeCountDownTop: '重新发送',
          second: 91,
          disabled: false,
          isdisab: false
        })
      }
    }, 1000)
  },
  // 获取验证码
  codeClick:function () {
    var that = this;
    var phone = that.data.phoneNum;
    if (phone.length == 0) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000
      })
    } else if (!(/^1[34578]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue: false
      })
      if (phone.length >= 11) {
        wx.showToast({
          title: '手机号有误',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      if (!that.data.counting) {
        wx.showToast({
          title: '验证码已发送',
          icon: 'success',
          duration: 2000
        })
      }
      this.getCode();
      that.setData({
        disabled: true,
        isdisab: true
      })
    }
  },

  // 登录
  loginClick:function (e) {
    var that = this;
    console.log(that.data.phoneNum,that.data.codeNum);
    wx.prams = {
      phone: this.data.phoneNum,
      code: this.data.codeNum
    }
    httpUtil.postRequest(api.IndexUrl, prams, function(res) {
      wx.navigateBack({
        delta: 0,
      })
    }, function(err) {

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let title = options.title;
    wx.setNavigationBarTitle({
      title: title,
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