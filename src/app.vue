<template>
  <div class="app">
    {{ msg }}
  </div>
</template>
<script>

export default {
  data() {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style lang="css">
.app {
  font-size: 60px;
  color: red;
}
</style>
