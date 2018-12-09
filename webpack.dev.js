const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        index: 'demo.html',
        hot: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'demo.html',
            template: 'index.dev.html',
        }),
        new CopyWebpackPlugin([
            { from: './node_modules/react/dist/react.js', to: 'scripts/' },
            { from: './node_modules/react-dom/dist/react-dom.js', to: 'scripts/' },
        ]),        
        new webpack.NamedModulesPlugin(),
    ],
});