const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'output'
        })
    ],
    devtool: "eval-source-map",
    devServer: {
        port:9000,
        contentBase:path.join(__dirname,'dist'),
        proxy:{
            '/api':{
                target:'http://localhost:8000',
                changeOrigin:true,
                pathRewrite:{
                    '/^api/':''
                }
            }
        }
    }
};