<template>
  <div id="app">
    <h1>wad</h1>
    <!-- <img alt="Vue logo" :src="hotels.logo"> -->
      <img alt="Vue logo" :src="require(`./assets/${images}`)">
      <img alt="Vue logo" src="./assets/hotels/sheraton/sheraton_logo.png">
      <img alt="Vue logo" src="./assets/logo.png">
    {{ hotels }}
    {{ images }}
    <Hotel />
  </div>
</template>

<script>
// App vue pass what hottel do we need
import Hotel from './components/Hotel.vue'

export default {
  name: 'App',
  components:{
    Hotel,
  },
  data(){
    return{
      logo: 'wad.jpg',
    }
  },
  computed:{
    hotels(){
      return this.$store.state.hotels[0];
    }
  }
}
</script>

<style lang="scss">
</style>
