<template>
  <div class="container">
     <h2>Hotels</h2>
     {{ hotel}}
     <Floors />
  </div>
</template>

<script>

//Import components 
import Floors from './Floors.vue';

export default {
   name:'Hotel',
   components:{
      Floors
   },
   data(){},
   computed:{
      hotel(){
         return "wad";
      }
   }
   
}
</script>

<style lang="scss">

</style>