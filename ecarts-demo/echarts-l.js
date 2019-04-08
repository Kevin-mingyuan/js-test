 // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var legendData = ['角钢','工字钢','螺纹钢','方管','圆管'] //图例品种

//x轴数据
var xAxisData = ['2019-04-01','2019-04-02','2019-04-03','2019-04-04','2019-04-05','2019-04-06','2019-04-07','2019-04-08','2019-04-09','2019-04-10','2019-04-11','2019-04-12','2019-04-13','2019-04-14','2019-04-15','2019-04-16','2019-04-17','2019-04-18','2019-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24','2019-04-25','2019-04-26','2019-04-27','2019-04-28',"2019-04-29","2019-04-30",];

// 指定图表的配置项和数据
myChart.setOption({
     title: {
         text: '行情走势',
         show:true,
         textStyle:{
             color:"#1cbcff",
             fontWeight:700,
             fontSize:14
         },
     },
     tooltip: {
         show:true,
         trigger: 'axis' 
     },
     legend: { //图例组件
         data:legendData,
         selectedMode: 'multiple', //单选 single / duo multiple
         right:30,
         top:0,
         selected:{
            "方管":false,
            "螺纹钢":false,
            "方管":false,
            "圆管":false
         },
         textStyle: {
            // color: 'blue'
        },
     },
     grid: { //绘制网格 
         left: '3%',//距离容器的边距
         right: '4%',
         bottom: '3%',
         containLabel: true,
         show:true,
         tooltip:{
             trigger:"axis",
         },
     },
     toolbox: { //是否下载
         // feature: {
         //     saveAsImage: {}
         // }
     },
     xAxis: {
         type: 'category',
         boundaryGap: false,
         data: xAxisData,
         show:true,
         splitLine:{
    　　　　show:true,
            lineStyle:{
                color:["rgba(28, 188, 255, 0.3)","rgba(28, 188, 255, 0.3)"],
            }
    　　 }
     },
     yAxis: {
         type: 'value',
        //  min:0,
        //  max:1000,
         axisLabel:{
            // formatter:function(value ,index){
            //     console.log(value)
            //     return value;
            // }
         },
         show:true,
         splitLine:{
    　　　　show:true,
            lineStyle:{
                color:["rgba(28, 188, 255, 0.3)","rgba(28, 188, 255, 0.3)"],
            }
    　　 }
     },
     series: [
         {
             name:'角钢',
             type:'line',
            //  stack: '总量',
             data:[3200, 4320, 3010, 3340, 3333, 3213, 4321,4567, 3456,  3340, 3333, 3213, 4321,4567, 3456,  3340, 3333, 3213, 4321,4567, 3456, 3340, 3333, 3213, 4321,4567, 3456, 3310,4330, 5210,3222,],
             showAllSymbol:false,
             lineStyle:{
                //  color:"blue"
             }
        },
         {
             name:'工字钢',
             type:'line',
            //  stack: '总量',
             data:[2200, 1820, 1910, 2340, 2900, 3300, 3100,2200, 1820, 1910, 2340, 2900, 3300, 3100,2200, 1820, 1901, 2340, 2900, 3300, 3100,2200, 1820, 1901, 2340, 2900, 3300, 3100,3300, 3100,3330,]
         },
         {
             name:'螺纹钢',
             type:'line',
            //  stack: '总量',
             data:[1500, 2320, 2010, 1540, 1900, 3300, 4100,1500, 2320, 2010, 1540, 1900, 3300, 4100,1500, 2320, 2010, 1540, 1900, 3300, 4100,1500, 2320, 2010, 1540, 1900, 3300, 4100,3300, 4100,4440,]
         },
         {
             name:'方管',
             type:'line',
            //  stack: '总量',
             data:[3200, 3320, 3010, 3340, 3900, 3300, 3200,3200, 3320, 3010, 3340, 3900, 3300, 3200,3200, 3320, 3010, 3340, 3900, 3300, 3200,3200, 3320, 3010, 3340, 3900, 3300, 3200,3300, 3200,5550,]
         },
         {
             name:'圆管',
             type:'line',
            //  stack: '总量',
             data:[3200, 4032, 4001, 5034, 1290, 1330, 1320,5020, 4032, 2001, 3034, 1290, 1330, 1320,4020, 5032, 4001, 4034, 1290, 1330, 1320,4020, 5032, 4001, 5340, 1290, 1330, 1320,1330, 1320,1222]
         }
     ]
 });
 