<template>
  <div>
    a
    <div class="msg">
      {{ $store.state.message }}
    </div>
  </div>
</template>

<script>

export default {
  asyncData({ store }) {
    return store.dispatch('GetMessage', 'i am a')
  }
}

</script>

<style scoped>
.msg {
    color: blue;
}
</style>
