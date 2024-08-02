const path = require('path')
const fs = require('fs')
const express = require('express')
const server = express()
const template = fs.readFileSync(path.resolve(__dirname, './index.ssr.html'), 'utf-8')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'))
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template,
  clientManifest
})
server.use(express.static(path.join(__dirname, '../dist'), {index: false}))


server.get('*', async  (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context,(err, html) => {
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
