<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Hotels />
  </div>
</template>

<script>
// App vue pass what hottel do we need
// import Hotel from './components/Hotel.vue'

export default {
  name: 'App',
  components:{
    Hotel
  },
  data(){
    return{

    }
  },
  components: {
    Hotels
  }
}
</script>

<style lang="scss">
</style>
