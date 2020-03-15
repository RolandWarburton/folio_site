const merge = require('webpack-merge');
const pages = require('./build/processFiles');
const devserver = require('./build/devserver');
const moduleRules = require('./build/moduleRules');
const webpack = require('webpack');

const config = merge(...pages, devserver, moduleRules, {
    // devtool: "eval-source-map",
    devtool: false,
    stats: 'errors-only',
    target: 'node',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]'
        })
    ]
});

// console.log(config)
module.exports = config;