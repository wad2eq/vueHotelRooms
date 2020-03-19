<template>
  <div class="box-container">
    <h2 class="title text-center">Floor</h2>
    <Rooms :floorId="floorId"/>
  </div>
</template>

<script>
// Import components
import Rooms from "./Rooms.vue";
export default {
  name: "Floors",
  props: ["floorId"],
  components: {
    Rooms
  },
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    floors() {
      return this.$store.getters.getFloors[this.floorId];
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