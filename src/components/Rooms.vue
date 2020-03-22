<template>
  <div class="flex-container flex-center padding">
    <div :key="i" v-for="(room, i) in getRooms" class="room card">
      <input :value="room" :class="inputClasses" />
      <span class="remove-block" @click="removeRoom(room)"></span>
    </div>
    <div class="room card">
      <input type="text" v-model="addRoomValue" :class="inputClasses" @keyup="addRooom">
    </div>
  </div>
</template>

<script>
export default {
  name: "Rooms",
   props: ["floorId"],
  data() {
    return {
      show: true,
      rooms:null,
      addRoomValue:'',
      //TODO setup classes more generic -> do vuexa ???
      inputClasses:['border-light','room--number'],
      errMessage:''
    };
  },
  methods: {
    addRooom(){
      let roomNumber = parseInt(this.addRoomValue.slice(0,3));
      if(this.checkUpdatedRoomValue(roomNumber, this.isExists)){
      this.filterFloor();
        this.$store.commit({
          type:'addRoomToFloor',
          roomNumber: roomNumber
        })
        this.addRoomValue = '';
      }
    },
    removeRoom(roomNumber){
      this.filterFloor();
      this.$store.commit({
        type: 'removeRoomFloor',
        roomNumber: roomNumber
      })
    },
    filterFloor(){
      this.$store.commit({
          type:'filterFloor',
          floorId: this.floorId,
        })
    },
    checkUpdatedRoomValue(roomNumber, fun){
      if(this.addRoomValue.length === 4 && this.addRoomValue.indexOf(',', 3) != -1){
        if(fun(roomNumber)){
          return false;
        }
        return true;
      }else{
        this.errMessage = 'UPS nie pozwalam';
        return false;
      }
    },
    isExists(){
      return this.getRooms.includes(this.addRoomValue)
    }
  },//methods
  computed:{
      getRooms(){
        let id = this.floorId;
        const getFloor = this.$store.getters.getFloors.filter(function(x){
          return x._id === id;
        });
        console.log(getFloor);
        return getFloor[0]['rooms'];
      },
  }
};
</script>

<style lang="scss" scoped>

    .room{
        width: $room-size;
        height: $room-size;
        color: lighten($light-greay, 23);
        position: relative;
        margin:5px;
        border-radius: 2px;
        display: flex;
      &--number{
        width: 100%;
        margin-top: $input-size/5;
        align-self: center;
        font-size: $room-size/3;
        font-family: $big-header;
        font-weight: bold;
        border:none;
        text-align: center;
      }
    }
</style>