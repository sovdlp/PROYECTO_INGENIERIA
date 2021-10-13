<template>
  <div class="home">
    <cabecera />
    <cotizacion />
    <pie />
  </div>
</template>

<script>
import Cabecera from "../components/Cabecera.vue";
import Cotizacion from '../components/Cotizacion.vue';
import Pie from "../components/Pie.vue";

export default {
  components: {
    Cabecera,
    Cotizacion,
    Pie,
  },
};
</script>
