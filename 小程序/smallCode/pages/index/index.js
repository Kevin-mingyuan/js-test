//index.js
const data = require("../endport/data.js");

//获取应用实例
const app = getApp();

Page({
  data: {
    imgUrls:[
      '../images/banner1.jpg',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorDots:true,
    circular:true,
    dataList:[],//请求的数据源
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
      console.log(data.data.data);
      if(data.data.error === 0){
          this.setData({
              dataList: data.data.data
          })
      }
  },
  getUserInfo: function(e) {
   
  }
})
