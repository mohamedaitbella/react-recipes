const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    mode:"development",
    context:path.join(__dirname,'src'),
  entry: { main: './index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundel.js'
  },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins :[
        new HtmlWebpackPlugin({
            template:'./index.html',
            inject:'body'
        })
    ]
};