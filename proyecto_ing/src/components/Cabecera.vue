<template>
  <div>
    <v-toolbar dark >
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-spacer></v-spacer>
      <v-toolbar-title class="display-1 font-weight-bold"
        >GESTION DE COTIZACIONES</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!--<v-avatar> <img src="../assets/JV.jpg" /></v-avatar>-->
      <v-btn icon>
        <v-icon @click="volver()">mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <v-row class="text-center">
      <v-col>
        <h1>SE&C INGENIERIA S.A.S</h1>
        <h3>Confianza, Honestidad y Experiencia</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {    
        methods: {    
            volver() {
            this.$router.push("/");
            },    
        },
}
</script>