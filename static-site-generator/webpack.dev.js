const merge = require('webpack-merge');
const pages = require('./build/processFiles');
const devserver = require('./build/devserver');
const moduleRules = require('./build/moduleRules');

const config = merge(...pages, devserver, moduleRules, {
    devtool: "eval-source-map",
    stats: 'errors-only',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    }
});

// console.log(config)
module.exports = config;