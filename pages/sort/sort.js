//在page入口导入request模块  导入后用一个名字存起来
const { request } = require("../../utils/request.js")


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
    // console.log(request)
    //调用自己封装的    
    request({ url: "categories" })
      //请求成功
      .then(res => {
        // console.log(res)
        //设置页面数据
        this.setData({
          sort: res,
          subSort: res[this.data.activeIndex].children
        })
      })
  },
  // 点击切换TAB栏事件
  changeTab(e) {
    // console.log(e)
    //结构索引
    const { index } = e.currentTarget.dataset;
    this.setData({
      //改变左侧选中状态
      activeIndex: index,
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