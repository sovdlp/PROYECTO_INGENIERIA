import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cotizaciones: [],
  },

  mutations: {
    setCotizaciones(state, payload) {
      state.cotizaciones = payload;
    },
  },
  actions: {
    
    async getCotizaciones({ commit }) {
      //const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const peticion = await fetch('http://localhost:3000/cotizacion');
      const data = await peticion.json();
      console.log(data);
      commit('setCotizaciones', data);
    },  
    
    async setCotizaciones({ commit }, cotizaciones) {
      const peticion = await fetch('http://localhost:3000/cotizacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cotizaciones)
      });
    },

    async deleteCotizaciones({ commit }, personajes) {
      const peticion = await fetch('http://localhost:3000/cotizacion', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personajes)
      });
    },    
    
    async updateCotizaciones({ commit }, cotizaciones) {
      const peticion = await fetch('http://localhost:3000/cotizacion', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cotizaciones)
      });
    },
  },
  modules: {
  }
})
