// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listitem:[{
      icon: '/assets/switchschool.png',
      title: '切换机构'
    }, {
      icon: '/assets/modifyphone.png',
      title: '修改手机号'
    }]
  },

  // 登录
  loginClick:function (e) {
    wx.navigateTo({
      url: '/pages/login/login?title=登录',//带参数跳转页面动态修改导航栏
    })
  },

  itemClick:function (e) {
    var itemtitle = e.currentTarget.dataset.item;
    if (itemtitle == '切换机构') {
      console.log('切换机构');
    } else {
      wx.navigateTo({
        url: '/pages/login/login?title=修改手机号',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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