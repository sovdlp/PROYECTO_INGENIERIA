<template>
    <div class="cuadromateriales">
         <a href="../../Materiales.html" target="_blank">GESTION DE MATERIALES</a>
            <p class="subheading font-weight-regular">
                <v-row class="text-left">
                    <v-col cols="40">    
                    </v-col>
                </v-row>
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