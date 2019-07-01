const path = require('path');

//html模板插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//清除hash重复文件
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle[hash:8].js",
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
                    }
                ]
            }
        ]
    },
    devServer:{
        port:3000,
        hot:true,
        contentBase:path.join(__dirname,"dist"),
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"test App",
            filename:"index.html",
            template:"./index.html"
        }),
        new CleanWebpackPlugin({})
    ]
}