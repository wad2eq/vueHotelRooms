<template>
  <div class="container">
     <h2>Hotels</h2>
     {{ hotel}}
  </div>
</template>

<script>

import Floors from './components/Floors'
export default {
   name:'Hotels',
   data(){},
   computed:{
      hotel(){
         // return this.$tore.state.hotels[0];
      }
   }
   
}
</script>

<style lang="scss">

</style>