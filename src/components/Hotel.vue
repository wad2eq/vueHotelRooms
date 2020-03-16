<template>
  <div class="container">
    <form>
      {{ errorMessage }}
      <fieldset class="flors flex-container">
        <label>Wybież pientro</label>
        <input
          :class="[inputClasses, {notValidInput: notValidInput}]"
          type="text"
          :disabled="onInput"
          v-model="floor"
          placeholder="nr"
          @keyup="checking(floor, 'floor')"
        />
        <span>Wybież zakres pienter</span>
        <label>from</label>
        <input
          :class="[inputClasses, {notValidInput: notValidInput}]"
          type="text"
          :disabled="onInput"
          v-model="from"
          @keyup="checking(from, 'from')"
        />
        <label>to</label>
        <input
          :class="[inputClasses, {notValidInput: notValidInput}]"
          type="text"
          :disabled="onInput"
          v-model="to"
          @keyup="checking(to, 'to')"
        />
        <button @click.prevent="enableInputs()" class="flors--edit-range">
          <img src="../assets/edit.svg" />
        </button>
      </fieldset>
      <Floors :key="fl._id" v-for="fl in floors" :floorId="fl._id"  />
      <button @click.prevent="validate()">Add flor</button>
    </form>
  </div>
</template>

<script>
//Import components
import Floors from "./Floors.vue";

export default {
  name: "Hotel",
  components: {
    Floors
  },
  data() {
    return {
      floor: "nr",
      from: "nr",
      to: "nr",
      onInput: true,
      isActive: true,
      notValidInput: false,
      florIndex: 0,
      errorMessage:''
    };
  },
  methods: {
    enableInputs() {
      this.onInput = !this.onInput;
    },
    createFloor() {
       this.errorMessage='';
      this.$store.commit({
        type: "createFloorFilter",
        index: this.florIndex++,
        floor: this.floor,
        from: this.from,
        to: this.to
      });
    },
    validate() {
       //TODO bardziej generalnie zrobić validacje -> lepiej :)
      //  this.checking() ? this.createFloor() : this.errorMessage="Nie odałeś wartości" ;
      this.createFloor();
    },
    checking(value,rangeValue) {
      let reg = rangeValue === 'floor' ? /^\d{1}$/ : /^\d{3}$/;
      if (reg.test(parseInt(value))) {
        this.notValidInput = false;
        return true;
      } else {
        this.notValidInput = true;
        return false;
      }
    }
  },
  computed: {
    inputClasses() {
      return {
        "flors--input": true,
        "border-light": true,
        card: !this.onInput,
        "flors--notValidInput": this.notValidInput
      };
    },
    floors() {
      return this.$store.getters.getFloors;
    }
  }
};
</script>

<style lang="scss" scoped>
$input-size: 50px;
.flors {
  padding: $input-size 0 $input-size/2;
  justify-content: center;
  align-items: center;
  &--input {
    max-width: $input-size;
    height: $input-size;
    margin: 0 $input-size/5;
    color: #333;
    font-weight: bold;
    padding: 4px;
  }
  &--edit-range {
    background: none;
    border: none;
    max-width: $input-size;
    max-height: $input-size;
  }
  .notValidInput {
    border-color: red;
  }
}
.florRooms {
  max-width: 80%;
  margin: 0 auto;
  padding: 40px 0;
}
</style>