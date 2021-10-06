<template>
  <div>
    <h1>Tabla desde base de datos</h1>
    <ul>
      <li v-for="item in itemscotizacion" :key="item._id">
        {{ item.itemId }} - {{ item.descripcion }} - {{ item.unidad }} -
        {{ item.cantidad }} - {{ item.valorunit }}
        <v-btn x-small class="" @click="eliminarItemcotizacion(item._id)"> Eliminar </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => {
    return {};
  },
  methods: {
    eliminarItemcotizacion(id) {
      let obj = { id };
      store.dispatch("deleteItemcotizacion", obj)
      .then (()=>{
      store.dispatch("getItemscotizacion");
      });
    }
  },
  created: () => {
    //dispatch: accede a las acciones del store
    store.dispatch("getItemscotizacion");
  },
  computed: {
    itemscotizacion: () => {
      return store.state.itemscotizacion;
    },
  },
};
</script>

<style>
</style>