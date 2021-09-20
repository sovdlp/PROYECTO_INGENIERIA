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
  </div>
</template>

<script>
export default {
  methods: {
    materiales() {
      this.$router.push("/cuadromateriales");
    },
  },
};
</script>

<style>

</style>