<template>
  <div>
     <h2>Hotels</h2>
     <img alt="Vue logo" :src="require(`./assets/${hotels.logo}`)">
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
   data(){
      return{

      }
   },
   computed:{
      hotel(){
         return "wad";
      }
   }
   
}
</script>

<style lang="scss">

</style>