<template>
  <div class="container">
     <h2>Hotels</h2>
     {{ hotel}}
  </div>
</template>

<script>

//Import components 
import Floors from './components/Floors';

export default {
   name:'Hotel',
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