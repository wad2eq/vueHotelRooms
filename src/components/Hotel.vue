<template>
  <div>
     <h2>{{ hotels.name }}</h2>
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
      hotels(){
         return this.$store.state.hotels[0];
      }   
   }
   
}
</script>

<style lang="scss">

</style>