// pages/funny/funny.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ipt1:"1",//第一个input的值
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

  },


  //确定
  sure(event) {
    console.log(event);
  //   let obj = { appkey: "a1e212fc92c2e9fa", keyword: "梦见发财", pagenum: 1, pagesize: 10 };
  //   wx: wx.request({
  //     url: 'https://api.jisuapi.com/dream/search',
  //     data: obj,
  //     header: {},
  //     method: 'GET',
  //     dataType: 'json',
  //     success: function (res) {
  //       console.log(res)
  //     },
  //     fail: function (res) {
  //       console.log(res);
  //     },
  //     complete: function (res) {
  //       console.log(res);
  //     },
  //   })
  }
  
})