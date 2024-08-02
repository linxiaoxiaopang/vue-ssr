// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default function createStore() {
  return new Vuex.Store({
    state: {
      message: ''
    },

    actions: {
      GetMessage({ commit }, message) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('setMessage', message)
            resolve(true)
          }, 500)
        })
      }
    },

    mutations: {
      setMessage(state, message) {
        state.message = message
      }
    }
  })
}
