<template>
  <div clas="container">
    <h2>Floor</h2>
    <hr />
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
</style>