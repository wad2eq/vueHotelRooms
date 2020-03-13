<template>
  <div id="app">
    <h1>wad</h1>
    {{ hotels }}
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
