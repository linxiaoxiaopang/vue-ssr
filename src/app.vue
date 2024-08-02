<template>
  <div id="app">
    <router-link to="/a">a</router-link>
    <router-link to="/b">b</router-link>
    <router-view></router-view>
    <hello />
  </div>
</template>
<script>

import hello from './components/hello'
export default {
  components: {
    hello
  },

  data() {
    return {
      msg: 'hello world'
    }
  },

  methods: {
    onclick() {
      console.log('click')
    }
  }
}
</script>

<style lang="css">

</style>
