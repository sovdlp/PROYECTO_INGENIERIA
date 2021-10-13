<template>
  <div>
    <cabecera />
    <cotizador />
    <pie />
  </div>
</template>

<script>
import Cabecera from "../components/Cabecera.vue";
import Cotizador from "../components/Cotizador.vue";
import Pie from "../components/Pie.vue";

export default {
  components: {
    Cabecera,
    Cotizador,
    Pie,
  },
};
</script>
