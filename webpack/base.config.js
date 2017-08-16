var path = require('path');
var webpack = require("webpack");

module.exports = {
    node: {
        fs: "empty"
    },
    entry: {
        app: [
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
    ],
    externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
};
