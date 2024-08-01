const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const {default: createApp} = require('../dist/8093b.serve')
console.log('createApp', createApp)
server.get('*', (req, res) => {
    const app = createApp()

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
      <!DOCTYPE html>
      <html lang="en">
         <meta charset="UTF-8">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
    })
})

server.listen(3001)
