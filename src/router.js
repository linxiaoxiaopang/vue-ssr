import Router from 'vue-router'
import Vue from 'vue'
import index from './views/index'
import a from './views/a'
import b from './views/b'

Vue.use(Router)

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        component: index,
        path: '/'
      },
      {
        component: a,
        path: '/a'
      },
      {
        component: b,
        path: '/b'
      }
    ]
  })
}
