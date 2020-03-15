<template>
  <div clas="container">
     <h2>Floors</h2>
     {{ filteRoomList }}<br />
     <button @click="createRoomList">Create List</button>
     <hr>
     <Rooms :listOfRooms="filteRoomList" v-on:rebuild-list="rebuildRoomLisr" />
  </div>
</template>

<script>
// Import components
import Rooms from "./Rooms.vue"
export default {
   name:'Floors',
   components:{
      Rooms
   },
   data(){
      return{
         rooms:[],
         index:34
      }
   },
   methods:{
      createRoomList(){
         this.rooms=[];
         this.index++
         for(let i=0; i<this.index; i++){
            this.rooms.push(i);
         }
      },
      rebuildRoomLisr(val){
         this.rooms = this.rooms.filter(x => x !=val);
      }
   },
   
   computed:{
      filteRoomList(){
         return this.rooms;
      }
   }
   
}
</script>

<style lang="scss">

</style>