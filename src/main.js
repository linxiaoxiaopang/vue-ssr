import Vue from 'vue'
import App from './app'
import createRouter from './router'
import createStore from './store'

export default function createApp(options = {}) {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    ...options,
    router,
    store,
    render: (h) => h(App)
  })
  return {
    app,
    router,
    store
  }
}
