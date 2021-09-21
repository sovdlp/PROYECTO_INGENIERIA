<template>
  <div class="cuadroapu">
    <v-btn @click="materiales">ir a Materiales</v-btn>
        <h2>ANALISIS DE PRECIOS UNITARIOS</h2>
        <p class="subheading font-weight-regular">
      APU--> 
      <a href="http://127.0.0.1:5501/public/apu.html" target="_blank"
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