<template>
  <div>
    <button @click="home">Home</button>
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