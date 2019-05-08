const path = require('path');
console.log(__dirname);
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //设置css 抽离为一个单独的css
// const devMode = process.env.NODE_ENV !== 'production'; // 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
// const autoprefixer = require('autoprefixer'); //postcss压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //js压缩

module.exports = {
    mode: 'development', // development ||  production
    entry: './src/index.js',
    output: {
        filename:"[name].js",
        path: path.resolve(__dirname, './dist')
    },
    //模式加载器
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,    //这是配置加载文件的规则 值是正则表达式 这里写的意思是.js .jsx结尾的文件加载loader
                loader:"babel-loader",
                exclude:/node_modules/,        //这个目录不需要加载loader
                query:{
                    presets:["es2015","react"]        //加载loader的presets
                }
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
        　　 　　    { loader:"css-loader" },
                    {loader :"sass-loader"}
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         ident: 'postcss',
                    //         plugins: loader => [autoprefixer({ browsers: ['> 0.15% in CN'] })]
                    //     }
                    // },
                ]
            }
        ]
    },
    //插件
    plugins: [
        // new MiniCssExtractPlugin({ //判断生产模式/开发模式
        //   filename: devMode ? '[name].css' : '[name].[hash].css', // 设置最终输出的文件名
        //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        // })
        
        new MiniCssExtractPlugin({  //抽离一个单个css 
            filename: '[name][hash].css',
            chunkFilename: '[id][hash].css'
        })
    ],
    // 自定义一些优化打包策略。
    optimization: {
        // minimize默认为true，效果就是压缩js代码。
        minimizer: [
            new OptimizeCSSAssetsPlugin({}), // 压缩css
            new UglifyJsPlugin({ //压缩js
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            })
        ]
    },
    //热更新
    devServer:{
        contentBase: "dist", //监听打包后文件夹 自动找寻html文件
        hot:true, //不用刷新也可以更替
        compress: true, //是否启用压缩
        open:true,
        port: 9000
    }
};



