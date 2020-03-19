<template>
  <div class="flex-container">
    <div :key="i" v-for="(room, i) in getRooms" class="room card">
      <input :value="room" :class="inputClasses" />
      <span class="room--switcher" @click="removeRoom(room)"></span>
    </div>
    <div class="room card">
      <input type="text" v-model="addRoomValue" class="inputClasses" @keyup="updateRoom">
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
    updateRoom(){
      if(this.checkUpdatedRoomValue()){
        this.$store.commit({
          type:'addRoomToFloor',
          index: this.floorId,
          value: parseInt(this.addRoomValue.slice(0,3))
        })
        this.addRoomValue = '';
      }
    },
    removeRoom(roomNumber){
      console.log(roomNumber);
      this.$store.commit({
        type: 'removeRoomToFloor',
        index: this.floorId,
        roomNumber: roomNumber
      })
    },
    checkUpdatedRoomValue(){
      if(this.addRoomValue.length === 4 && this.addRoomValue.indexOf(',', 3) != -1){
        console.log('er');
        return true;
      }else{
        this.errMessage = 'UPS nie pozwalam';
        return false;
      }
    }
  },
  computed:{
      getRooms(){
          // console.log(this.$store.getters.getTodoById(this.floorId));
          return this.$store.getters.getFloors[this.floorId]['rooms'];
      }
  }
};
</script>

<style lang="scss" scoped>
  $room-size:48px;
  $switcher-size:$room-size/5;
  $light-greay: hsla(360, 0%, 68%, 1);
    .room{
        width: $room-size;
        height: $room-size{};
        color: lighten($light-greay, 23);
        position: relative;
        margin:5px;
        border-radius: 2px;
      &--number{
        color:darken($light-greay, 30);
        font-size: $room-size/3;
        font-weight: bold;
        width: 100%;
        border:none;
        position: absolute;
        bottom: 2px;
        text-align: center;
      }
      &--switcher{
        display: block;
        position: absolute;
        color:$light-greay;
        right: $switcher-size/2;
        top: $switcher-size/2;
        height: $switcher-size;
        width: $switcher-size;
        padding:$switcher-size/2;
        box-sizing: border-box;
        &:hover{
          color:red;
          cursor: pointer;
        }
        &:after, &:before{
          content: '';
          display: block;
          height:  $switcher-size;
          position: absolute;
          top:0;
          margin: auto;
          width: 10px;
          height: 2px;
          background-color:red;
        }
        &:after{
          transform: rotate(45deg);
        }
        &:before{
          transform: rotate(-45deg);
        }
      }
    }
</style>