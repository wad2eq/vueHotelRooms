<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hotels />
  </div>
</template>

<script>
// App vue pass what hottel do we need
import Hotels from './components/Hotels.vue'

export default {
  name: 'App',
  components: {
    Floors
  }
}
</script>

<style lang="scss">
</style>
