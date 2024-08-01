const HtmlWebpackPlugin = require("html-webpack-plugin")
const {merge} = require('webpack-merge')
const base = require('./webpack.base')
module.exports = merge(base, {
    entry: {
        client: './src/entry/client.entry.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
})
