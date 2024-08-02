const path = require('path')
const fs = require('fs')
const express = require('express')
const server = express()
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(path.resolve(__dirname, '../dist/client.html'), 'utf-8')
})

server.use(express.static(path.join(__dirname, '../dist')))

const { default: createApp } = require(path.resolve(__dirname, '../dist/serve'))
server.get('*', async  (req, res) => {
  const context = { url: req.url }
  const app = await createApp(context).catch((err) => {
    res.status(err.code).end('error page')
  })
  renderer.renderToString(app, context,(err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

server.listen(3000)
