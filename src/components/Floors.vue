<template>
  <div class="box-container">
    <span class="remove-block" @click="removeFloor()"></span>
    <h2 class="title text-center">{{}}</h2>
    <Rooms :floorId="florIdprop" v-show="validRoomRangeEntry"/>
  </div>
</template>

<script>
// Import components
import Rooms from "./Rooms.vue";
export default {
  name: "Floors",
  props: ["floorId"],
  components: {
    Rooms,
  },
  data() {
    return {
      florIdprop: this.floorId,
      validRoomRangeEntry: true
    };
  },
  methods: {
    //TODO change for action
    removeFloor(){
      console.log(this.florIdprop);
      this.$store.commit({
        type: 'removeFloor',
        floorId: this.floorId,
      })
    },
  },
  computed:{
    getRoomRange(){
      return true;
    }
  }
};
</script>

<style lang="scss">
.flors {
  border: none;
  background: $color2 !important;
  color:$gray;
  border-top: 2px $yellow2 solid;
  padding:$input-size/2 0 ;
  &--input {
    max-width: $input-size;
    height: $input-size;
    margin: 0 $input-size/5;
    color: $yellow2;
    font-weight: bold;
    padding: 4px;
    border:none;
    border-bottom:1px solid $green2;
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