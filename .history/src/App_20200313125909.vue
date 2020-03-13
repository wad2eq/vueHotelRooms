<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Hotels />
  </div>
</template>

<script>
// App vue pass what hottel do we need
import Hotels from './components/Hotels.vue'

export default {
  name: 'App',
  components: {
    Hotels
  }
}
</script>

<style lang="scss">
</style>
