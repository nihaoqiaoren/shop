// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    // 分类总数据
    sort: [],
    //右侧二级分类
    subSort: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSortData()
  },
  getSortData() {
    // 发送请求前显示加载框
    wx.showLoading({
      title: '疯狂加载中.',
    })
    wx: wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/categories',
      //请求成功
      success: res => {
        // console.log(res)
        const { message } = res.data
        this.setData({
          sort: message,
          subSort: message[this.data.activeIndex].children
        })
      },
      //请求完成后
      complete: res => {
        //隐藏加载框
        wx.hideLoading()
      }
    })
  },
  // 点击切换TAB栏事件
  changeTab(e) {
    // console.log(e)
    //结构索引
    const { index } = e.currentTarget.dataset;
    this.setData({
      //改变左侧选中状态
      activeIndex:index,
      //右侧的数据  可以在总数据通过索引来重新绑定
      subSort: this.data.sort[index].children
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