<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Floors msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Floors from './components/Floors.vue'

export default {
  name: 'App',
  components: {
    Floors
  }
}
</script>

<style lang="scss">
</style>
