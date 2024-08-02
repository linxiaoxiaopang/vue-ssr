const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {merge} = require('webpack-merge')
const base = require('./webpack.base')
module.exports = merge(base, {
    entry: {
        client: './src/entry/client.entry.js'
    },
    optimization: {
        splitChunks: {
            name: "manifest",
            minChunks: Infinity
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
            // filename: 'client.html'
        }),
        new VueSSRClientPlugin()
    ]
})
