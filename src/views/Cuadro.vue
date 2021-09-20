<template>
  <div class="cuadrocotiza">
    <button @click="apu1">ir a APU</button>
    <h2>CUADRO DE COTIZACION</h2>
    <Cuadro />
    <piepagina />
  </div>
</template>

<script>
import Cuadro from "../components/CuadroCotizacion.vue";
import Piepagina from "../components/piedepagina.vue";

export default {
  components: {
    Cuadro,
    Piepagina,
  },
  methods: {
    apu1() {
      this.$router.push("/cuadroapu");
    },
  },
};
</script>