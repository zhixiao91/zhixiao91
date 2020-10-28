// components/toastedit/toastedit.js
Component({
  options: {
    multipleSlots: true  //在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    toastText: {
      type: String,
      value: '内容'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toastShow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showToast(text, time) {
      this.setData({
        toastShow: !this.data.toastShow,
        toastText: text
      })

      var that = this;
      if (!time) {
        time = 8000
      }

      setTimeout(function() {
        that.setData({
          toastShow: !that.data.toastShow
        })
      }, time);
    }
  }
})
