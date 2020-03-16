<template>
  <div>
     <form>
     <input type="text" v-model="floor">
     <input type="text" v-model="from">
     <input type="text" v-model="to">
     <Floors :key='fl._id' v-for="fl in floors" :floorId="fl._id" />
     <button @click.prevent="validae()">Add flor</button>
     {{ floors }}
     </form>
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
         floor:0,
         from:0,
         to:0,
         florIndex:0
      }
   },
   methods:{
      createFloor(){
         this.$store.commit({
            type:'updateFloorFilter', 
            index:this.florIndex++, 
            floor:this.floor, 
            from:this.from, 
            to:this.to});
      },
      validae(){
         this.createFloor();
      },
   },
   computed:{
      floors(){
         return this.$store.getters.getFloors;
      }
   }
   
}
</script>

<style lang="scss">

</style>