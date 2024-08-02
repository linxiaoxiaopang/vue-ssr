import createApp from '../main'

const { store } = createApp({
  el: '#app'
})

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
