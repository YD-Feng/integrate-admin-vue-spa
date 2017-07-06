var path = require('path'),
    webpack = require('webpack'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    babiliPlugin = require('babili-webpack-plugin'),
    vue = require('vue-loader');

module.exports = {
    //JS文件引用入口配置
    entry: {
        common: ['vue', 'vue-router', 'vuex', 'vuex-logger', 'vue-resource', 'q', 'underscore'],
        element: ['element-ui'],
        app: [
            path.resolve(__dirname, './src/js/app.js')
        ]
    },

    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist/'), //指定生成文件的保存路径
        publicPath: '../', //更新 src、url 里的值，为其添加前缀（实际输出：publicPath + fileName）
        filename: 'js/[name].js?v=[hash:8]',
        chunkFilename: 'js/modules/[name].js?v=[hash:8]'
    },

    //插件项
    plugins: [
        //html 文件生成插件
        new htmlWebpackPlugin({
            title: 'admin-sys',
            filename: 'index.html',
            template: 'src/index.html',
            hash: true
        }),
        //文件单独提取插件
        new extractTextPlugin({
            filename: 'css/style.css',
            allChunks: true,
            disable: false
        }),
        //公共组件提取插件
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common', 'element']
        }),
        //JS压缩插件
        new babiliPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)\??.*$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)\??.*$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[ext]?[hash]'
                        }
                    }
                ]
            }
        ],
    },

    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们 require 模块可以省略不写后缀名
        extensions: ['.js', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.min.js'),
            'vue-router': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.min.js'),
            'vuex': path.resolve(__dirname, 'node_modules/vuex/dist/vuex.min.js'),
            'vuex-logger': path.resolve(__dirname, 'node_modules/vuex/dist/logger.js'),
            'vue-resource': path.resolve(__dirname, 'node_modules/vue-resource/dist/vue-resource.js'),
            'q': path.resolve(__dirname, 'node_modules/q/q.js'),
            'underscore': path.resolve(__dirname, 'node_modules/underscore/underscore-min.js'),
            'element-style': path.resolve(__dirname, 'node_modules/element-ui/lib/theme-default/index.css')
        }
    }
};
