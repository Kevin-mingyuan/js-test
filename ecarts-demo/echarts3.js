
// myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
var myChart = echarts.init(document.getElementById('main'));
console.log(Math.ceil(Math.random()*50)*30 +"-"+ Math.ceil(Math.random()*50)*30);

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

            var legendData = []; //分类个数上
            var xAxisData = [];  //x轴 日期
            var seriesData = []; //图例 种类内容

         for(var i = 0; i < allArr.length; i++){
            console.log(allArr[i] , "0000000");

            console.log(allArr[i].date , "11");
             legendData.push(allArr[i].name);
            
             seriesData.push({
                 name:allArr[i].name,
                 type:'line',
                 data:allArr[i].data
            })
         }
         console.log(legendData , xAxisData , seriesData , "1231")

         myChart.setOption({
            legend: { //图例组件
                data: legendData,//ajax 分类个数
            },
            xAxis: {
                data: data.data.date,//ajax x日期
            },
            series:seriesData //ajax 种类内容
        });
     },
     error: function (err) {
        alert("数据加载错误")
        myChart.hideLoading();
     }
 })


















 