var path = require('path');
var webpack = require("webpack");

module.exports = {
    node: {
        fs: "empty"
    },
    entry: {
        app: [
            './src/assets/js/variables.js',
            './src/assets/js/config.js',
            './node_modules/jpkleemans-angular-validate/dist/angular-validate.min.js',
            './src/assets/js/app.js'
        ],
        vendor : ['web3']
    },
    output: {
        filename: './src/dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./src/dist/vendor.bundle.js"),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            wsBC : JSON.stringify("ws://199.188.207.232:30312"),
            rpcBC : JSON.stringify('http://199.188.207.232:30311'),
            tokenAddress : JSON.stringify('0xe882fd909c130383125fdeb17c117eac08f564a5'),
            crowdsaleAddress : JSON.stringify('0xe54f1fd3be9e901212fe16d0c1fb6cd337e18c87'),
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
    externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
};
