import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    city: localStorage.myCity || '北京'
  },
  mutations: {
    showCity (state, city) {
      state.city = city
      localStorage.myCity = city
    },

  }
})
export default store
