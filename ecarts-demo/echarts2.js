
// myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
var myChart = echarts.init(document.getElementById('main'));

myChart.setOption({
    title: {
        text: '行情走势',
        show: true,
        textStyle: {
            color: "#1cbcff",
            fontWeight: 700,
            fontSize: 14
        },
        // subtext:"123" //副文本
    },
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    legend: { //图例组件
        data: [],//ajax
        // selectedMode: 'multiple', //单选 single / duo multiple
        right: 30,
        top: 0,
        selected: {
            
        },
        textStyle: {
            // color: 'blue'
        },
    },
    grid: { //绘制网格 
        left: '3%', //距离容器的边距
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: true,
        tooltip: {
            trigger: "axis",
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
        data: [],//ajax
        show: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: ["rgba(28, 188, 255, 0.3)", "rgba(28, 188, 255, 0.3)"],
            }
        }
    },
    yAxis: {
        type: 'value',
        //  min:0,
        //  max:1000,
        axisLabel: {
            // formatter:function(value ,index){
            //     console.log(value)
            //     return value;
            // }
        },
        show: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: ["rgba(28, 188, 255, 0.3)", "rgba(28, 188, 255, 0.3)"],
            }
        }
    },
    series:[] //ajax
});
myChart.showLoading();
 $.ajax({
     type: 'get',
     url: "http://localhost:9000/",
     success: function (data) {
        let allArr = data.data.data;

         // 基于准备好的dom，初始化echarts实例
         myChart.hideLoading();    //隐藏加载动画
         console.log(data.data.data , "data");

            // var legendData = ['角钢','工字钢','螺纹钢',];
            // var xAxisData = ['2019-04-01','2019-04-02','2019-04-03']; 
            // var seriesData = [{
            //     name:'角钢',
            //     type:'line',
            //     data:[111,222,333]
            // },
            // {
            //     name:'工字钢',
            //     type:'line',
            //     data:[1111,2222,3333]
            // },
            // {
            //     name:'螺纹钢',
            //     type:'line',
            //     data:[11222,22333,33212]
            // }];

            var legendData = [];
            var xAxisData = [];
            var seriesData = [];
            console.log(legendData , xAxisData , seriesData , "1231")

         for(var i = 0; i < allArr.length; i++){
            console.log(allArr[i] , "0000000");

            console.log(allArr[i].date , "11");
             legendData.push(allArr[i].name);
            
            //  for(var j = 0; j < allArr[i].date.length; j++){
            //      console.log(allArr[i][j] , "data111")
                
            //  }
             seriesData.push({
                 name:allArr[i].name,
                 type:'line',
                 data:allArr[i].data
            })
         }
         console.log(allArr[0].date , "111111")
         for(var k = 0; k < allArr[0].date.length; k++){
            xAxisData.push(allArr[0].date[k]);
         }

         myChart.setOption({
            
            legend: { //图例组件
                data: legendData,//ajax
            },
            xAxis: {
                data: xAxisData,//ajax
            },
            series:seriesData //ajax
        });

     },
     error: function (err) {
         console.log(err);
         myChart.hideLoading();
     }
 })


















 