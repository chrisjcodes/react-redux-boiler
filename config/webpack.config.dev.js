const merge = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config.base.js');

module.exports = merge.smart(config, {
    entry: './frontend/javascript/index.js',
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                loader: [
                    'style-loader', 'css-loader', 'sass-loader'
                ],
                include: path.resolve(__dirname, '../frontend')
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "../build"),
        compress: true,
        port: 9000
    }
})
