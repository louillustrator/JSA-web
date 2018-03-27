'use strict';

const webpack = require('webpack');
const config = require('./webpack.config.base.js');

if (!config.performance) {
    config.performance = {};
}

config.performance.hints = false;

config.output.filename = '[name].js';

config.entry.main.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server'
);

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
);

module.exports = config;

