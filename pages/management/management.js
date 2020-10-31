// pages/management/management.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus:[{
      id: '1',
      itemlogo: '/assets/institutions.png',
      itemname: '学校信息'
    }, {
      id: '2',
      itemlogo: '/assets/coursetable.png',
      itemname: '课程表'
    }, {
      id: '3',
      itemlogo: '/assets/attendance.png',
      itemname: '预约上课'
    }, {
      id: '4',
      itemlogo: '/assets/signcourses.png',
      itemname: '报读课程'
    }, {
      id: '5',
      itemlogo: '/assets/review.png',
      itemname: '课堂点评'
    }, {
      id: '6',
      itemlogo: '/assets/signup.png',
      itemname: '学校课程'
    }, {
      id: '7',
      itemlogo: '/assets/tradingrecord.png',
      itemname: '交易记录'
    }, {
      id: '8',
      itemlogo: '/assets/tradingrecord.png',
      itemname: '作业'
    }]
  },

  menuitemClick:function(e) {
    if (e.currentTarget.dataset.id == '1') {
      wx.navigateTo({
        url: '/pages/organizationdetails/organizationdetails',
      })
    } else if (e.currentTarget.dataset.id == '2') {
      wx.navigateTo({
        url: '/pages/courseslist/courseslist',
      })
    } else if (e.currentTarget.dataset.id == '3') {
      wx.navigateTo({
        url: '/pages/appointmentCourse/appointmentCourse',
      })
    } else if (e.currentTarget.dataset.id == '4') {
      wx.navigateTo({
        url: '/pages/signcourses/signcourses',
      })
    } else if (e.currentTarget.dataset.id == '5') {
      wx.navigateTo({
        url: '/pages/classReviewDetail/classReviewDetail',
      })
    } else if (e.currentTarget.dataset.id == '6') {
      wx.navigateTo({
        url: '/pages/schoolcourse/schoolcourse',
      })
    } else if (e.currentTarget.dataset.id == '7') {
      wx.navigateTo({
        url: '/pages/tradingrecord/tradingrecord',
      })
    } else {
      wx.navigateTo({
        url: '/pages/homework/homework',
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
    // 获得toastedit组件
    this.toastedit = this.selectComponent("#toastedit")
  },

  showToast: function () {
    this.toastedit.showToast('我是传过来的toast内容',2000)
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