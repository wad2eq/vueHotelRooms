import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //TODO : czy hotels ma byc obiektem, tu mogą znajdować się metody za weryfikacje
    floorIndexToMutate: 0,
    floorFilter: [],
    hotels: {
      sheraton: {
        _id: 0,
        name: "sheraton",
        // Fake data from rest api 
        floors: [
          {
            _id: 0,
            range: [100, 150],
            nRooms: Array.from({ length: 51 }, (v, i) => i + 100)
          },
          {
            _id: 1,
            range: [151, 200],
            nRooms: Array.from({ length: 51 }, (v, i) => i + 151)
          },
          {
            _id: 2,
            range: [201, 250],
            nRooms: Array.from({ length: 51 }, (v, i) => i + 250)
          },
          {
            _id: 3,
            range: [201, 250],
            nRooms: Array.from({ length: 51 }, (v, i) => i + 250)
          },
          {
            _id: 4,
            range: [201, 250],
            nRooms: Array.from({ length: 51 }, (v, i) => i + 250)
          }
        ] // end floors array
      }
    } //hotels
  },
  getters: {
    /**
     * Return array of filtered objects
     * @param {*} state Object
     */
    getFloors(state) {
      return state.floorFilter;
    }
    // getRangeOfRooms(state){
    //   return state.floorFilter[];
    // }
  },
  mutations: {
    createFloor(state, payLoad) {
      //Take rooms from flor
      const sheratornFlors = state.hotels.sheraton.floors[payLoad.floor];
      const rooms = sheratornFlors.nRooms.slice(payLoad.from, payLoad.to);
      //Create filtered floor
      console.log(state.floorIndex);
      state.floorFilter.push({
        _id: state.floorIndex++,
        floorNumber: payLoad.floor,
        range: sheratornFlors.range[1] - sheratornFlors.range[0],
        rooms
      });
    },
    // Mutate rooms in floors
    addRoomToFloor(state, payLoad) {
      let floor = state.floorFilter[state.floorIndexToMutate].rooms;
      if (floor.findIndex(x => x === payLoad.roomNumber) === -1) {
        floor.push(payLoad.roomNumber);
        floor.sort();
      }
    },
    removeRoomFloor(state, payLoad) {
      let floor = state.floorFilter[state.floorIndexToMutate].rooms;
      if (floor.findIndex(x => x === payLoad.roomNumber) !== -1) {
        state.floorFilter[state.floorIndexToMutate].rooms = floor.filter(x => x !== payLoad.roomNumber);
      }
    },
    //Filter floor to mutate when adding room
    filterFloor(state, payLoad) {
      state.floorIndexToMutate = state.floorFilter.findIndex(function (x) {
        return x._id === payLoad.floorId;
      });
    },
    removeFloor(state, payLoad) {
      state.floorIndex = state.floorIndex--;
      state.floorFilter =  state.floorFilter.filter(x => x._id !== payLoad.floorId);
    },
  },
  actions: {
  },
  modules: {
  }
})
