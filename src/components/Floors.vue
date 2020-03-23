<template>
  <div class="box-container">
    <span class="remove-block" @click="removeFloor()"></span>
    <h2 class="title text-center">{{}}</h2>
    <Rooms :floorId="floorId" :floorLimit="floorLimit" @filter-floor="filterFloor"/>
    <div class="rangeMessage" v-show="floorLimit"> przekroczono limit pokoi</div>
  </div>
</template>

<script>
// Import components
import Rooms from "./Rooms.vue";
export default {
  name: "Floors",
  props: ["floorId", "to"],
  components: {
    Rooms
  },
  created: function(){
    this.filterFloor(this.floorId);
  },
  data() {
    return {
      toRange: this.to,
      floorLimit: false
    };
  },
  methods: {
    //TODO change for action
    removeFloor() {
      this.$store.commit({
        type: "removeFloor",
        floorId: this.floorId
      });
    },
    filterFloor(floorID) {
      console.log("floor >")
      this.$store.commit({
        type: "filterFloor",
        floorId: floorID
      });
      this.validateData();
    },
    validateData() {
      this.floorLimit = (this.toRange - this.getRangeOfRoom) > 0? true: false; 
    }
  },
  computed: {
    getRangeOfRoom() {
      return this.$store.getters.getRangeOfRooms;
    }
  }
};
</script>

<style lang="scss">
.flors {
  border: none;
  background: $color2 !important;
  color: $gray;
  border-top: 2px $yellow2 solid;
  padding: $input-size/2 0;
  &--input {
    max-width: $input-size;
    height: $input-size;
    margin: 0 $input-size/5;
    color: $yellow2;
    font-weight: bold;
    padding: 4px;
    border: none;
    border-bottom: 1px solid $green2;
    background: $color1;
    border-radius: 2px;
  }
  &--edit-range {
    background: none;
    border: none;
    max-width: $input-size;
    max-height: $input-size;
  }
  .notValidInput {
    border-color: $color4;
  }
}
</style>