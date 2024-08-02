const {merge} = require('webpack-merge')
const base = require('./webpack.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
    entry: {
        serve: './src/entry/serve.entry.js'
    },
    output: {
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    plugins: [new VueSSRServerPlugin()]
})
