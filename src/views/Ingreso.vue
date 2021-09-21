<template>
  <div class="ingreso">
    <button @click="cuadro1">ir a Cuadro Cotizacion</button>
    <h2>FORMULARIO DE INGRESO</h2>
    <p class="subheading font-weight-regular">
      Registrarse--> 
      <a href="..//login.html" target="_blank"
        >Página de registro</a
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
    cuadro1() {
      this.$router.push("/cuadrocotiza");
    },
  },
};
</script>

<style>
</style>


  
