// pages/applyleave/applyleave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [
      {isSelected: false},
      {isSelected: false}
    ]
  },

  onItemSelected: function (e) {
    let index = e.currentTarget.dataset.index;
    let item = this.data.itemList[index];
    item.isSelected = !item.isSelected;
    this.setData({
      itemList: this.data.itemList,
    });
  },

  onSubmitClick: function (e) {
    wx.navigateBack({
      delta: 0,
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