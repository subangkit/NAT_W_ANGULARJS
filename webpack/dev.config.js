const merge = require('webpack-merge');
const webpack = require("webpack");
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    plugins: [
       new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            wsBC : JSON.stringify("ws://199.188.207.232:30312"),
            rpcBC : JSON.stringify('http://199.188.207.232:30311'),
            tokenAddress : JSON.stringify('0xa174bec743f3c26df11d8ca3e93a7f5c885862b1'),
            crowdsaleAddress : JSON.stringify('0xf3ce3010a2a0604095d735a772b55715c84d777d'),
            // Development
            host : JSON.stringify('http://dev.wallet.natcoin.io'),
            app_host : JSON.stringify('http://dev.wallet.natcoin.io'+ '/app_dev/src'),
            api_host : JSON.stringify('http://dev.wallet.natcoin.io' + '/api'),
            enviroment : JSON.stringify('development'),
            // Live
            // host = 'http://wallet.natcoin.io';
            // app_host = host+ '';
            // api_host = host + '/api';
            // enviroment = 'live';
        })
    ],
});