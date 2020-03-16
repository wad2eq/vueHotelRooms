<template>
  <div>
    <!-- <div class="el">To ejst rum</div>
    <div class="close" @click="close(val)">x</div> -->
    <div :key="i" v-for="(room, i) in getRooms" class="room card">
      <input :value="room" class="room--number"/>
      <span class="room--switcher" @click="removeRoom(room)"></span>
    </div>
    <span class="add-room"><input type="text" v-model="newRoom" @keyup="addRoom()"></span>
  </div>
</template>

<script>
export default {
  name: "Rooms",
   props: ["floorId"],
  data() {
    return {
      show: true,
      rooms:null
    };
  },
  methods: {
    close(val) {
      this.$emit("rebuild-list", val);
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