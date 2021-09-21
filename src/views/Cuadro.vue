<template>
  <div class="cuadrocotiza">
    <button @click="apu1">ir a APU</button>
    <h2>CUADRO DE COTIZACION</h2>
    <Cuadro />
    <Piedepagina />
  </div>
</template>

<script>
import Cuadro from "@/components/CuadroCotizacion.vue";
import Piedepagina from "@/components/piedepagina.vue";

export default {
  components: {
    Cuadro,
    Piedepagina
  },
  methods: {
    apu1() {
      this.$router.push("/cuadroapu");
    },
  },
};
</script>