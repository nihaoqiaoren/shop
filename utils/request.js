//封装promeise  方法 封装request方法
// function request(params){}

const request=(params)=>{
  // 抽离项目的基本路径
  const baseURL="https://api.zbztb.cn/api/public/v1/"
  // 发送请求前显示加载框
  wx.showLoading({
    title: '疯狂加载中.',
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      // 基本路径+传入的url
      url: baseURL + params.url,
      //请求成功
      success: res => {
        // console.log(res)
        const { message } = res.data
        //设置页面跟新视图
          // this.setData({
          //   sort: message,
          //   subSort: message[this.data.activeIndex].children
          // })
          //请求成功执行回调函数
        resolve(message);
      },
      //请求失败
      fail:err=>{
        reject(err);
      },
      //请求完成后
      complete: res => {
        //隐藏加载框
        wx.hideLoading()
      }
    })
  })
}

module.exports = {
  request
}
