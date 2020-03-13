<template>
  <div id="app">
    <h1>wad</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <Hotel />
  </div>
</template>

<script>
// App vue pass what hottel do we need
import Hotel from './components/Hotel.vue'

export default {
  name: 'App',
  components:{
    // Hotel
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
</style>
