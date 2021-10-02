import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cotitems: []
  },
  mutations: {
    setCotItems(state, payload) {
      state.cotitems = payload;
    }
  },
  actions: {
    async getCotItems({ commit }) {
      const peticion = await fetch('http://localhost:3000/cotitems/');
      const data = await peticion.json();
      console.log(data);
      commit('setCotItems', data);
    }
  },
  modules: {
    
  }
})