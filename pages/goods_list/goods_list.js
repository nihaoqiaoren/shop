const {request} = require("../../utils/request.js");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品列表关键词
    keyword: "",
    activeIndex: 0,
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在页面生命周期函数中，可以通过 options 获取页面传递的参数
    console.log(options);
    const {
      keyword
    } = options;

    this.setData({
      keyword
    });

    this.getListData(keyword);
  },
  // 获取列表数据
  getListData(keyword) {
    request({
      url: "goods/search",
      data: {
        query: keyword
      }
    })
      .then(res => {
        // console.log(res);
        const { goods } = res;
        this.setData({
          goods
        })
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
    console.log("onUnload");
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