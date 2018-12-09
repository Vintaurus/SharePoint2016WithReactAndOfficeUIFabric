const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: { form: './src/index.tsx' },
    output: {
        filename: 'scripts/[name].js',
        path: __dirname + "/dist"
    },
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
        rules: [
            { test: /\.ts(x?)$/, loader: "awesome-typescript-loader",  exclude: /node_modules/ },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { 
                test: /\.s?css$/, 
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 
                "css-loader", 
                "sass-loader"
            ]}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{ from: './node_modules/office-ui-fabric-react/dist/css/fabric.min.css', to: 'css/' },]),
        new MiniCssExtractPlugin({ filename: "css/[name].min.css" }),
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};