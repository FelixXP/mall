var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 页面入口文件配置
    entry : {
        'index': './origin/static/js/index.js',
        'detail': './origin/static/js/detail.js',
        'upload': './origin/static/js/upload.js'
    },
    // 入口文件输出配置
    output : {
        filename : 'static/js/[name].bundle.js',
        publicPath: '//127.0.0.1:8080/'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader!jsx-loader?harmony',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.less$/, 
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader?name=static/img/[name].[ext]'
        }
        ]        
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    // 插件项
    plugins : [
        new htmlWebpackPlugin({
            filename: 'views/index.html',
            template: 'origin/views/index.html',
            inject: 'body',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename: 'views/detail.html',
            template: 'origin/views/detail.html',
            inject: 'body',
            chunks: ['detail']
        }),
        new htmlWebpackPlugin({
            filename: 'views/upload.html',
            template: 'origin/views/upload.html',
            inject: 'body',
            chunks: ['upload']
        })
    ]
}