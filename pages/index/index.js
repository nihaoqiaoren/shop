Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [],
    inlets: [],
    floor: [],
    showTop: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getSwiper(),
      this.getinlet(),
      this.getfloorData()
  },
  // 封装轮播图
  getSwiper() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: res => {
        // console.log(res)
        const message = res.data;
        this.setData({
          swipers: message
        });
      }
    });
  },
  //封装入口函数
  getinlet() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: res => {
        const message = res.data;
        this.setData({
          inlets: message
        })
      }
    })
  },

  //封装楼层信息入口函数
  getfloorData() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: res => {
        // console.log(res)
        const message = res.data;
        this.setData({
          floor: message
        })
      }
    })
  },

  //点击返回顶部的事件
  goTop(e) {
    // console.log(e)
    const {
      top
    } = e.currentTarget.dataset
    // console.log(top)
    // 调用返回顶部
    wx.pageScrollTo({
      scrollTop: top,
      duration: 300
    })
  },

  //页面滚动触发的函数
  onPageScroll(event) {
    const {
      scrollTop
    } = event;
    if (scrollTop > 200) {
      this.setData({
        showTop: false
      })
    }else{
      this.setData({
        showTop: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})