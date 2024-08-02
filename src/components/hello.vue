<template>
 <div class="hello">
   <button @click="onclick"> hello component</button>
 </div>
</template>

<script>

export default {
  methods: {
    onclick() {
      console.log('hello component')
    }
  }
}

</script>

<style scoped>
.hello {
  color: green;
}
</style>
