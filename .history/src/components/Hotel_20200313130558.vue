<template>
  <div class="container">
     <h2>Hotels</h2>
     {{ hotel}}
     <Floors />
  </div>
</template>

<script>

//Import components 
import Floors from './components/Floors.vue';

export default {
   name:'Hotel',
   components:{
      Floors
   },
   data(){},
   computed:{
      hotel(){
         return this.$tore.state.hotels[0];
      }
   }
   
}
</script>

<style lang="scss">

</style>