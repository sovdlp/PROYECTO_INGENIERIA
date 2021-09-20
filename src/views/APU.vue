<template>
  <div class="cuadroapu">
    <button @click="home">Home</button>
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
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>