<template>
  <div class="container">
     <h2>Floors</h2>
     {{ data}}
  </div>
</template>

<script>
export default {
   name:'Floors',
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