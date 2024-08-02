const {merge} = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
    entry: {
        serve: './src/entry/serve.entry.js'
    },
    output: {
        libraryTarget: 'commonjs2'
    },
    target: 'node'
})
