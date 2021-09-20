<template>
    <div class="cuadromateriales">
    <button @click="home">Home</button>
    <p class="subheading font-weight-regular">
        Materiales-->
        <a href="..//apu.html" target="_blank">Gestión de materiales</a>
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