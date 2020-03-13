<template>
  <div class="container">
     <h2>Hotels</h2>
     {{ hotel}}
  </div>
</template>

<script>
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