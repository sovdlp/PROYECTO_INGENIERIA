<template>
  <div class="cuadrocotiza">
    <button @click="home">Home</button>
    <h1>CUADRO DE COTIZACION</h1>
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