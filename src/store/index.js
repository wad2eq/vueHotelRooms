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
          }
        ] // end floors array
      }
    } //hotels
  },
  getters:{
    getFloors(state){
      return state.hotels.sheraton.floorFilter;
    },
  },
  mutations: {
    createFloorFilter(state, payLoad){
      const rooms = state.hotels.sheraton.floors[payLoad.floor].nRooms.slice(payLoad.from, payLoad.to);
      state.hotels.sheraton.floorFilter.push({_id:payLoad.index, floorNumber: payLoad.floor, rooms});
    },
    addRoomToFloor(state, payLoad){
      const florToMutate = state.hotels.sheraton.floorFilter[payLoad.index].rooms; 
      if(florToMutate.findIndex(x => x === payLoad.value) === -1){
        florToMutate.push(payLoad.value);
      } 
    },
    /**
     * Remove room from the list
     * @param {*} state 
     * @param {object} payLoad -> floor id, room number
     */
    removeRoomToFloor(state, payLoad){
      let florToMutate = state.hotels.sheraton.floorFilter[payLoad.index].rooms; 
      let filteredArray = florToMutate.filter(x => x !== payLoad.roomNumber);
      if(florToMutate.findIndex(x => x === payLoad.roomNumber) !== -1){
        state.hotels.sheraton.floorFilter[payLoad.index].rooms = filteredArray;             
       } 
      }
  },
  actions: {
  },
  modules: {
  }
})
