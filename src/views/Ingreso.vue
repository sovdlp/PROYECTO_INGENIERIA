<template>
  <div class="ingreso">
    <button @click="home">Home</button>
    <h2>Por favor ingrese registrese para ingresar</h2>
    <p class="subheading font-weight-regular">
      Registrarse--> 
      <a href="..//login.html" target="_blank"
        >Página de registro</a
      >
    </p>

  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>


  
