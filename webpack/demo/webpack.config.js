const path = require('path');

//html模板插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//清除hash重复文件
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.[hash:8].js",
        path:path.resolve(__dirname,"dist"),
    },
    module:{
        rules:[
            {
                test:/\.(c|sa|le)ss$/,
                use:[
                    {
                        loader:"style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader:"css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    },
                    {
                        loader:"postcss-loader" //为浏览器添加前缀 配合 autoprefixer 插件使用
                    }
                ]
            }
        ]
    },
    devServer:{
        port:3000,
        hot:true,
        contentBase:path.join(__dirname,"dist"), //监听路径
    },
    plugins:[

        //模板html插件
        new HtmlWebpackPlugin({
            title:"test App", //模板头部名字
            filename:"index.html", //模板名字
            template:"./index.html", //模板路径
            inject: 'body' //打包到body底部
        }),

        //清除每次hash打包重复
        new CleanWebpackPlugin({})
    ]
}