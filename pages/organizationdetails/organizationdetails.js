// pages/organizationdetails/organizationdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    schoolinformation:{
      phone: '13212345678',
      schoolname: '美术教育',
      schoolsubtitle: '我们用心去做教育。',
      address: '石家庄市保利广场5楼501室从某种意义上说，个人简介的写作不亚于参加面',
      introduction: '从某种意义上说，个人简介的写作不亚于参加面试。通过短短数百字的个人简介，不但要能较充分地展现出毕业生的才能及综合素质，而且要使聘任者感到自己是位思维清晰、条理性强、语言表达能力突出的应聘者。因此，写好个人简介是求职成功的第一步。 但是，在实际中，不少毕业生对个人简介和求职信之间的界线辨析不清，影向了求职效果。这里，我就先讲一下两者的区别与联系。'
    }
  },

  onCallTelClick:function (e) {
    let that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.schoolinformation.phone,
    })
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
    // this.titlecontent = this.selectComponent('#titlecontent')
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