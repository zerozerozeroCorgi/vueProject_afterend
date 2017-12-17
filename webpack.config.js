const path = require("path");
const htmlWP = require("html-webpack-plugin");

module.exports = {

    // 打包入口
    entry: path.resolve(__dirname, "./src/main.js"),

    // 输出
    output: {
        path: path.resolve(__dirname, "./dist"),
        // filename: "bundle_[chunkhash:8].js"
        filename: "bundle.js"
    },

    // 插件配置
    plugins: [
        new htmlWP({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html",
            inject: "body"     //自动注入body
        })   
    ],

    module: {
        rules: [
            {

            // 打包css
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
            },

            // 打包url
            {
                test: /\.(gif|png|jpg|svg|mp3|mp4|avi|woff|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 10240 }
                    }
                ]
            },

            // 将es6转换为es5
            {
                test: /\.js$/,
                use: [ 'babel-loader'],
                exclude: /node_modules/    // 如果项目引入了node-modules的东西,不转换它们
            },

            // 打包less
            {
                test: /\.less/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },

            // 打包vue
            {
                test: /\.vue/,
                use: [ 'vue-loader' ]
            }

        ]
    },

     // webpack-dev-server工具配置
    devServer: {
        open: true,         // 服务启动后自动打开浏览器
        port: 8888,         // 服务端口
        contentBase: 'dist' // 开启服务的目录
    }
}