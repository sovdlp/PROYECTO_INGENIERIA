<template>
    <div class="cuadromateriales">
        <button @click="home">Home</button>
            <h2>MATERIALES</h2>
            <p class="subheading font-weight-regular">
                Materiales-->
                <a href="../../apu.html" target="_blank">Gestión de materiales</a>
            </p>
        <Piedepagina />
    </div>
</template>

<script>

//import Apu from "../../public/login.html";
import Piedepagina from "@/components/piedepagina.vue";
export default {
    components: {
    Piedepagina
  },
    methods: {
    home() {
        this.$router.push("/");
    },
    },
};
</script>