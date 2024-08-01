const {default: Vue} = require('vue')
const {default: App} = require('./app')

module.exports = function createApp(options = {}) {
    return new Vue({
        ...options,
        render: (h) => h(App)
    })
}
