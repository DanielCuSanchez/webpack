const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin') //CSS config special 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: {
        form: path.resolve(__dirname, 'src/js/form.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Plugins'
        })
    ]
};
