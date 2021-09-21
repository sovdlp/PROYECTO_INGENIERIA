<template>
  <div class="cuadroapu">
    <button @click="materiales">ir a Materiales</button>
        <h2>ANALISIS DE PRECIOS UNITARIOS</h2>
        <p class="subheading font-weight-regular">
      APU--> 
      <a href="..//apu.html" target="_blank"
        >Elaboración de APU</a
      >
    </p>
    <Piedepagina />
  </div>
</template>

<script>
import Piedepagina from "@/components/piedepagina.vue";
export default {
    components: {
    Piedepagina
  },
methods: {
    materiales() {
      this.$router.push("/cuadromateriales");
    },
  },
};
</script>

<style>

</style>