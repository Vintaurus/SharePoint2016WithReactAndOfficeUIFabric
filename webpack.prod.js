const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CopyWebpackPlugin([
            { from: './node_modules/react/dist/react.min.js', to: 'scripts/' },
            { from: './node_modules/react-dom/dist/react-dom.min.js', to: 'scripts/' },
        ]),
        new HtmlWebpackPlugin({
            filename: 'demo.html',
            template: 'index.prod.html',
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ]
});