'use strict';

var webpack = require('webpack'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        main: './src/js/module'
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src/js']
    },
    output: {
        chunkFilename:"[chunkhash].index.js",
        filename: "index.js",
        path: path.join(__dirname, "/public"),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'Thedyslexicdeveloper',
        publicPath: 'http://localhost:8089/'
    },
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {loader: "style!css", test: /\.css$/}
        ]
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        port: 8089
    },
    eslint:{
        configFile:"./.eslintrc",
        emitError:true,
        failOnError:true,
        failOnWarning:false,
        formatter:require("eslint-friendly-formatter")
    }
};
