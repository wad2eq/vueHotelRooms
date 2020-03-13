<template>
  <div id="app">
    <h1>wad</h1>
    <img alt="Vue logo" :src="img">
      <img alt="Vue logo" src="./assets/hotels/sheraton/sheraton_logo.png">
    {{ hotels }}
    {{ hotels.logo }}
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
      img:'./assets/hotels/sheraton/sheraton_logo.png',
      logo: 'wad.jpg'
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
