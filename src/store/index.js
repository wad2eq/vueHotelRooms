import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //TODO : czy hotels ma byc obiektem, tu mogą znajdować się metody za weryfikacje
    hotels:{
      sheraton:{
        _id: 0,
        name: "sheraton",
        floorIndexing: 0,
        floorFilter:[],
        // Fake data from rest api 
        floors:[
          {
            _id:0,
            range:[100, 150],
            nRooms :  Array.from({length:51}, (v, i) => i+ 100)
          },
          {
            _id:1,
            range:[151, 200],
            nRooms :  Array.from({length:51}, (v, i) => i+ 151)
          },
          {
            _id:2,
            range:[201, 250],
            nRooms :  Array.from({length:51}, (v, i) => i+ 250)
          },          
          {
            _id:3,
            range:[201, 250],
            nRooms :  Array.from({length:51}, (v, i) => i+ 250)
          },
          {
            _id:4,
            range:[201, 250],
            nRooms :  Array.from({length:51}, (v, i) => i+ 250)
          }
        ] // end floors array
      }
    } //hotels
  },
  getters:{
    /**
     * Return array of filtered objects
     * @param {*} state Object
     */
    getFloors(state){
      return state.hotels.sheraton.floorFilter;
    },
    getFloorIndexing(state){
      return state.hotels.sheraton.floorIndexing;
    }
  },
  mutations: {
    createFloorFilter(state, payLoad){
      state.hotels.sheraton.floorIndexing++;
      const singelFloor =  state.hotels.sheraton.floors[payLoad.floor];
      const rooms = singelFloor.nRooms.slice(payLoad.from, payLoad.to);
      state.hotels.sheraton.floorFilter.push({
        _id:payLoad.index, 
        floorNumber: payLoad.floor,
        maxRange: singelFloor.nRooms.length,
        rooms
      });
    },
    addRoomToFloor(state, payLoad){
      const florToMutate = state.hotels.sheraton.floorFilter[payLoad.index].rooms; 
      if(florToMutate.findIndex(x => x === payLoad.value) === -1){
        florToMutate.push(payLoad.value);
        florToMutate.sort();
      } 
    },
    /**
     * Remove room from the list
     * @param {*} state 
     * @param {object} payLoad -> floor id, room number
     */
    removeRoomFloor(state, payLoad){
      state.hotels.sheraton.floorIndexing--;
      let florToMutate = state.hotels.sheraton.floorFilter[payLoad.floorId].rooms; 
      let filteredArray = florToMutate.filter(x => x !== payLoad.roomNumber);
      if(florToMutate.findIndex(x => x === payLoad.roomNumber) !== -1){
        state.hotels.sheraton.floorFilter[payLoad.floorId].rooms = filteredArray;             
      }
    },
    removeFloor(state, payLoad){
      console.log(state.hotels.sheraton.floorFilter.filter(x => x !== payLoad.floorId));
      state.hotels.sheraton.floorFilter =  state.hotels.sheraton.floorFilter.filter(x => x._id !== payLoad.floorId);
    },
  },
  actions: {
  },
  modules: {
  }
})
