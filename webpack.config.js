const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // mode模式，development 开发阶段，简易打包，打包速度快
    mode: 'development',
    entry: "./src/main.js", // 入口
    output: {
        path: path.join(__dirname, "lib"), // 出口路径
        filename: "webpack-demo.js", // 出口文件名
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html")
            
        }),
        new VueLoaderPlugin(),
        new EslintWebpackPlugin({
            context:path.join(__dirname,'src/')
        }),
        new MiniCssExtractPlugin()
    ],
    // 配置服务器
    devServer: {
        port: 30000,
        open: true
    },
    module: {
        rules: [ // loader规则
            // {
            //     test: /\.css/i,
            //     // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test:/\.less/,
                use:[ "style-loader", "css-loader", "less-loader"]
            },
            {
                test:/\.(png|gif|jpeg)$/i,
                type:'asset',
                generator:{
                    filename:'images/[hash:6][ext]'
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/i,
                type:'asset/resource',
                generator:{
                 filename:'fonts/[hash:6][ext]'
                }
             },
             {
                test: /\.js$/i,
                use:["babel-loader"]
             },
             {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
              {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              }
        ]
    }
}