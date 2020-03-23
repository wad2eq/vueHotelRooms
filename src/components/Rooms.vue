<template>
  <div class="padding">
    <div class="flex-container flex-center">
      <div :key="i" v-for="(room, i) in getRooms" class="room card">
        <input :value="room" :class="inputClasses" />
        <span class="remove-block" @click="removeRoom(room)"></span>
      </div>
      <div class="room card" v-show="!floorLimit">
        <input type="text" v-model="addRoomValue" :class="inputClasses" @keyup="addRooom" />
      </div>
    </div>
    <div class="text-center errorMessage">{{ errMessage}}</div>
  </div>
</template>

<script>
export default {
  name: "Rooms",
  props: ["floorId", "floorLimit"],
  data() {
    return {
      show: true,
      rooms: null,
      addRoomValue: "",
      //TODO setup classes more generic -> do vuexa ???
      inputClasses: ["border-light", "room--number"],
      errMessage: ""
    };
  },
  methods: {
    addRooom() {
      let roomNumber = parseInt(this.addRoomValue.slice(0, 3));
      if (this.checkUpdatedRoomValue(roomNumber, this.isExists)) {
        this.$emit("filter-floor", this.floorId);
        this.$store.commit({
          type: "addRoomToFloor",
          roomNumber: roomNumber
        });
        this.addRoomValue = "";
      }
    },
    removeRoom(roomNumber) {
      // this.filterFloor();
      this.$store.commit({
        type: "removeRoomFloor",
        roomNumber: roomNumber
      });
    },
    checkUpdatedRoomValue(roomNumber, fun) {
      let reg = /^[0-9]{3},$/;
      if (reg.test(this.addRoomValue)) {
        if (fun()) {
          console.log("vaidate number ");
          this.addRoomValue = "";
          return false;
        }
        return true;
      }
    },
    isExists() {
      console.log("number exists" + this.addRoomValue.slice(0, 3));
      if (!this.isValidRange()) {
        return true;
      }
      return this.getRooms.includes(this.addRoomValue.slice(0, 3));
    },
    isValidRange() {
      if (
        this.addRoomValue.slice(0, 3) > this.getNumberRange[1] ||
        this.addRoomValue.slice(0, 3) < this.getNumberRange[0]
      ) {
        this.errMessage = `Floor range numbers are ${this.getNumberRange[0]} - ${this.getNumberRange[1]}`;
        return false;
      }
      return true;
    }
  }, //methods
  computed: {
    getCurrentFloor() {
      let id = this.floorId;
      const getFloor = this.$store.getters.getFloors.filter(function(x) {
        return x._id === id;
      });
      return getFloor;
    },
    getRooms() {
      return this.getCurrentFloor[0]["rooms"];
    },
    getNumberRange() {
      return this.getCurrentFloor[0]["numberRange"];
    }
  }
};
</script>

<style lang="scss" scoped>
.room {
  width: $room-size;
  height: $room-size;
  color: lighten($light-greay, 23);
  position: relative;
  margin: 5px;
  border-radius: 2px;
  display: flex;
  &--number {
    width: 100%;
    margin-top: $input-size/5;
    align-self: center;
    font-size: $room-size/3;
    font-family: $big-header;
    font-weight: bold;
    border: none;
    text-align: center;
  }
}
</style>