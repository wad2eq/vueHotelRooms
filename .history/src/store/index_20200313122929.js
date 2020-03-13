import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotels:[
      {
        _id: 0,
        name: "Szeraton",
        logo: "../assets/Hotels/sheraton/sheraton_logo.png",
        pietra:[
          {
            _id:0,
            rooms:[100, 150]
          },
          {
            _id:1,
            rooms:[151, 200]
          },
          {
            _id:2,
            rooms:[201, 250]
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
