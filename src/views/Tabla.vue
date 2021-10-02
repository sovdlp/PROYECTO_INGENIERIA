<template>
  <div>
    <h1>Tabla desde base de datos</h1>
    <ul>
      <li v-for="item in itemscotizacion" :key="item._id"> <!--item.Name-->
          {{item.itemId}} - {{ item.descripcion }} - {{ item.unidad }} - {{ item.cantidad }}
          <!--{{ item.Name }} - {{ item.Age }}-->
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store/index';

export default {
    data: () => {
        return {};
    },
    methods: {},
    created: () => {
        //accede a las acciones del store
        store.dispatch("getItemscotizacion");
    },
    computed: {
        itemscotizacion: () => {
            return store.state.itemscotizacion;
        }
    }

};
</script>

<style>
</style>