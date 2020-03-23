<template>
  <div class="container main">
    <div class="text text-center">
      <h3>Podaj numer piętra i zakres numeracji pokjów/apartamentów, które na nich występują.</h3>
      <div class="note">
        <div class="note--icon svg-ikon">
          <svg
            class="svg-ikon svg-color-yellow"
            viewBox="-56 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="evenodd">
              <path
                d="m77.78125 170.320312c5.246094 1.734376 10.902344-1.109374 12.632812-6.355468 15.699219-47.480469 59.867188-79.378906 109.910157-79.378906 63.816406 0 115.738281 51.917968 115.738281 115.738281 0 49.324219-22.09375 78.792969-39.84375 102.472656-12.914062 17.222656-24.066406 32.101563-24.066406 50.144531 0 1.1875-.015625 2.363282-.042969 3.53125h-41.785156v-22.972656c0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v22.972656h-41.789063c-.027344-1.167968-.042968-2.34375-.042968-3.53125 0-18.046875-11.152344-32.921875-24.066407-50.148437-13.074219-17.441407-27.890625-37.210938-35.238281-65.300781-1.398438-5.34375-6.867188-8.542969-12.207031-7.144532-5.339844 1.394532-8.539063 6.863282-7.140625 12.203125 8.339844 31.886719 25.109375 54.261719 38.585937 72.238281 11.210938 14.957032 20.066407 26.769532 20.066407 38.152344 0 4.789063.203124 9.460938.597656 13.917969v84.585937c0 .269532.019531.53125.039062.792969.007813.0625.003906.128907.011719.191407.035156.371093.09375.730468.167969 1.089843v.007813c3.472656 16.289062 12.363281 31.101562 25.042968 41.707031 12.921876 10.8125 29.25 16.765625 45.972657 16.765625 16.722656 0 33.046875-5.953125 45.972656-16.765625 12.675781-10.605469 21.570313-25.417969 25.039063-41.707031 0-.003906.003906-.007813.003906-.011719.074218-.355469.128906-.714844.167968-1.085937.003907-.0625.003907-.128907.007813-.191407.019531-.265625.039063-.527343.039063-.796875v-84.582031c.394531-4.457031.601562-9.128906.601562-13.917969 0-11.382812 8.855469-23.195312 20.066406-38.152344 18.5-24.679687 43.839844-58.476562 43.839844-114.464843 0-74.847657-60.894531-135.738281-135.738281-135.738281-58.6875 0-110.484375 37.414062-128.898438 93.101562-1.734375 5.242188 1.113281 10.898438 6.355469 12.632812zm122.542969 321.679688c-20.332031 0-38.667969-12.296875-47.355469-30.558594h94.710938c-8.691407 18.261719-27.027344 30.558594-47.355469 30.558594zm51.234375-50.558594h-102.46875v-22.484375h102.46875zm0-42.484375h-102.46875v-22.484375h102.46875zm0 0"
              />
              <path
                d="m200.324219 46.644531c5.523437 0 10-4.476562 10-10v-26.644531c0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v26.644531c0 5.523438 4.476562 10 10 10zm0 0"
              />
              <path
                d="m10 210.324219h26.644531c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-26.644531c-5.523438 0-10 4.476562-10 10 0 5.523437 4.476562 10 10 10zm0 0"
              />
              <path
                d="m246.109375 220.527344c0-5.523438-4.476563-10-10-10h-71.570313c-5.523437 0-10 4.476562-10 10 0 5.523437 4.476563 10 10 10h25.785157v22.972656c0 5.523438 4.476562 10 10 10 5.523437 0 10-4.476562 10-10v-22.972656h25.785156c5.523437 0 10-4.476563 10-10zm0 0"
              />
              <path
                d="m77.515625 91.65625c1.953125 1.953125 4.511719 2.929688 7.070313 2.929688 2.558593 0 5.117187-.976563 7.070312-2.929688 3.90625-3.90625 3.90625-10.238281 0-14.140625l-18.839844-18.839844c-3.90625-3.90625-10.238281-3.90625-14.144531 0-3.902344 3.902344-3.902344 10.234375 0 14.140625zm0 0"
              />
              <path
                d="m58.847656 351.800781c2.558594 0 5.117188-.976562 7.070313-2.929687l18.839843-18.839844c3.90625-3.90625 3.90625-10.234375 0-14.140625s-10.238281-3.90625-14.140624 0l-18.84375 18.839844c-3.902344 3.90625-3.902344 10.238281 0 14.140625 1.953124 1.953125 4.511718 2.929687 7.074218 2.929687zm0 0"
              />
              <path
                d="m316.0625 94.585938c2.558594 0 5.117188-.976563 7.070312-2.929688l18.839844-18.839844c3.90625-3.90625 3.90625-10.238281 0-14.144531-3.902344-3.90625-10.234375-3.902344-14.140625 0l-18.839843 18.839844c-3.90625 3.90625-3.90625 10.238281-.003907 14.144531 1.953125 1.953125 4.515625 2.929688 7.074219 2.929688zm0 0"
              />
              <path
                d="m315.890625 315.890625c-3.90625 3.902344-3.90625 10.234375 0 14.140625l18.839844 18.839844c1.953125 1.953125 4.511719 2.929687 7.070312 2.929687 2.558594 0 5.117188-.976562 7.070313-2.929687 3.90625-3.902344 3.90625-10.234375 0-14.140625l-18.839844-18.839844c-3.90625-3.90625-10.238281-3.90625-14.140625 0zm0 0"
              />
              <path
                d="m364.003906 210.324219h26.644532c5.523437 0 10-4.476563 10-10 0-5.523438-4.476563-10-10-10h-26.644532c-5.523437 0-10 4.476562-10 10 0 5.523437 4.476563 10 10 10zm0 0"
              />
              <path
                d="m200.324219 283.5c-5.507813 0-10 4.492188-10 10s4.492187 10 10 10c5.507812 0 10-4.492188 10-10s-4.492188-10-10-10zm0 0"
              />
              <path
                d="m84.585938 200.324219c0-5.507813-4.492188-10-10-10-5.511719 0-10 4.492187-10 10 0 5.507812 4.488281 10 10 10 5.507812 0 10-4.492188 10-10zm0 0"
              />
            </g>
          </svg>
        </div>
        <div calss="note--text">
          Podaj numer piętra i zakres numeracji pokjów/apartamentów, które na nich występują.
          Aby dodać edytować zakres, lub wpisać poszczególne numery ręcznie, kliknij ikonę ołówka
        </div>
      </div>
    </div>
    <form>
      <div class="errorMessage" v-show="notValidInput">{{ errorMessage }}</div>
      <fieldset class="flors flex-container flex-center box-container">
        <div class="flors--block">
          <label>Pientro</label>
          <input
            :class="[inputClasses, {notValidInput: notValidInput}]"
            type="text"
            :disabled="onInput"
            v-model="floor"
            placeholder="nr"
            @keyup="checking(floor, 'floor')"
          />
        </div>
        <div class="flors--block">
          <span>Zakres pokoi </span>
          <label>from</label>
          <input
            :class="[inputClasses, {notValidInput: notValidInput}]"
            type="text"
            :disabled="onInput"
            v-model="from"
            placeholder="nr"
            @keyup="checking(from, 'from')"
          />
          <label>to</label>
          <input
            :class="[inputClasses, {notValidInput: notValidInput}]"
            type="text"
            :disabled="onInput"
            v-model="to"
            placeholder="nr"
            @keyup="checking(to, 'to')"
          />
        </div>
        <button @click.prevent="enableInputs()" class="flors--edit-range">
          <svg
            class="svg-color-yellow svg-ikon"
            height="401pt"
            viewBox="0 -1 401.52289 401"
            width="401pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"
            />
            <path
              d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"
            />
          </svg>
        </button>
      </fieldset>
      <div class="flex-center flex-container">
        <button @click.prevent="validate()" class="btn">Add flor</button>
      </div>
      <Floors :key="fl._id" v-for="fl in floors" :floorId="fl._id" :to="to" />
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
      floor: "",
      from: "",
      to: "",
      onInput: true,
      isActive: true,
      notValidInput: false,
      florIndex: 0,
      errorMessage: ""
    };
  },
  methods: {
    enableInputs() {
      this.onInput = !this.onInput;
    },
    createFloor() {
      this.errorMessage = "";
      this.$store.commit({
        type: "createFloor",
        index: this.florIndex,
        floor: parseInt(this.floor) - 1,
        from: parseInt(this.from),
        to: parseInt(this.to)
      });
      this.florIndex++;
    },
    //Validate input data
    validate() {
      //TODO bardziej generalnie zrobić validacje -> lepiej :)
      if (this.floor === "") {
        this.notValidInput = true;
        this.errorMessage = " Podałeś nie prawidłowe dane";
        return;
      }
      //  this.checking() ? this.createFloor() : this.errorMessage="Nie odałeś wartości" ;
      this.createFloor();
    },
    checking(value, rangeType) {
      // regular expresion depends on lenth room number
      let reg = rangeType === "floor" ? /^[1-9]{1}$/ : /^[1-9][0-9]?$/;
      if (rangeType === "to") {
        console.log(this.floors);
      }
      if (reg.test(parseInt(value))) {
        this.notValidInput = false;
        this.errorMessage = "";
        return true;
      } else {
        this.notValidInput = true;
        this.errorMessage = " Podałeś nie prawidłowe dane";
        this[rangeType] = "";
        return false;
      }
    }
  },
  computed: {
    inputClasses() {
      return {
        "flors--input": true,
        card: !this.onInput,
        "flors--notValidInput": this.notValidInput,
        "text-center": true
      };
    },
    floors() {
      return this.$store.getters.getFloors;
    }
  }
};
</script>

<style lang="scss" >
.main {
  background: $color3;
  padding: $input-size/2 0;
}
.florRooms {
  max-width: 80%;
  margin: 0 auto;
  padding: 40px 0;
}
@media screen and(max-width:799px) {
  .flors--block{
    padding-bottom: 20px;
  }
  .flors--edit-range {
    width: 100%;
  }
  .flors {
    display: none;
    justify-content: left !important;
  }
}
</style>