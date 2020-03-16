import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //TODO : czy hotels ma byc obiektem, tu mogą znajdować się metody za logike
    hotels:{
      sheraton:{
        _id: 0,
        name: "sheraton",
        floorFilter:[],
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
    updateFloorFilter(state, payLoad){
      const rooms = state.hotels.sheraton.floors[payLoad.floor].nRooms.slice(payLoad.from-1, payLoad.to);
      state.hotels.sheraton.floorFilter.push({_id:payLoad.index, floorNumber: payLoad.foor, rooms});
    },
    
  },
  actions: {
  },
  modules: {
  }
})
