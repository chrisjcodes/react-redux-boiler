const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [new HtmlWebpackPlugin({template: './frontend/index.html'})],
    resolve: {
        extensions: [
            '.js', '.jsx', '.json', '.scss'
        ],
        alias: {
            actions: path.resolve(__dirname, '../frontend/javascript/actions/'),
            components: path.resolve(__dirname, '../frontend/javascript/components/'),
            constants$: path.resolve(__dirname, '../frontend/javascript/constants.js'),
            reducers: path.resolve(__dirname, '../frontend/javascript/reducers/'),
            routes: path.resolve(__dirname, '../frontend/javascript/routes/'),
            utils: path.resolve(__dirname, '../frontend/javascript/utils/'),
            styles: path.resolve(__dirname, '../frontend/styles/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve('./frontend'),
                loader: 'babel-loader'
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
}