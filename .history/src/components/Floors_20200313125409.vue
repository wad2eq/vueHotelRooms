<template>
  <div clas="container">
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