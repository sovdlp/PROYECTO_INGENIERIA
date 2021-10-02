import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemscotizacion: []
  },
  mutations: {
    setItemscotizacion(state, payload) {
      state.itemscotizacion = payload;
    }
  },
  actions: {
    async getItemscotizacion({ commit }) {
      const peticion = await fetch('http://localhost:3000/cotitems/');
      const data = await peticion.json();
      console.log(data);
      commit('setItemscotizacion', data);
    }
  },
  modules: {
    
  }
})