<template>
  <div clas="container">
    <h2>floors</h2>
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
  methods: {},
  computed: {
    floors() {
      return this.$store.getters.getFloors;
    }
  }
};
</script>

<style lang="scss">
</style>