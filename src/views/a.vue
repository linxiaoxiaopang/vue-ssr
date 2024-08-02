<template>
  <div>
    a
    <div class="msg">
      {{ $store.state.message }}
    </div>
    <button @click="changeMessage">changeMessage</button>
  </div>
</template>

<script>

export default {
  asyncData({ store }) {
    return store.dispatch('GetMessage', 'i am a')
  },

  methods: {
    changeMessage() {
      this.$store.dispatch('GetMessage', 'i spa am a')
    }
  }
}

</script>

<style scoped>
.msg {
    color: blue;
}
</style>
