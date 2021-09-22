<!---------------------------------------------------------------------------------------------------------->
<template>
<v-container>
  <div>
    <!------------------------------------------------------------------------------------------------------>
    <v-app-bar 
      flat
      src="../assets/sseyc.jpg">
    </v-app-bar>
    <!------------------------------------------------------------------------------------------------------>
    <v-toolbar dark src="../assets/fondo.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="display-1 font-weight-bold">GESTION DE COTIZACIONES</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar>
        <img src="../assets/JV.jpg"></v-avatar>      
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <!------------------------------------------------------------------------------------------------------>
    <v-row class="text-center">
      <v-col>
        <h1>SE&C INGENIERIA S.A.S</h1>
        <h3>Confianza, Honestidad y Experiencia</h3>
        </v-col>
    </v-row>
    <!------------------------------------------------------------------------------------------------------>
    <v-row class="text-center">
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-img
          :src="require('../assets/Elec1.jpg')"
          contain
          height="100"
        />
        <h1 class="display font-weight-bold">Nueva</h1>
        <h2 class="display font-weight-bold">Cotizacón</h2>
        <p class="pa-md-6 text-justify text--secondary text-subtitle-2">
          En este módulo podrá crear una cotización completamente nueva. Aquí
          puede seleccionar un cliente, seleccionar los productos y los
          servicios deseados por ese cliente, agregue valores con tan solo un
          clic y genere un archivo para descargarlo, Imprimirlo o Compartirlo.
        </p>
      </v-col>
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-img
          :src="require('../assets/Elec2.jpg')"
          contain
          height="100"
        />
        <h1 class="display font-weight-bold">Editar</h1>
        <h2 class="display font-weight-bold">Cotizacón</h2>
        <p class="pa-md-6 text-justify text--secondary text-subtitle-2">
          En este módulo podrá Editar una cotización ya existente. Aquí puede
          seleccionar una Cotización, seleccionar los productos y los servicios
          a editar para ese cliente, agregue valores con tan solo un clic y
          genere un archivo para descargarlo, Imprimirlo o Compartirlo.
        </p>
       </v-col>
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-img
          :src="require('../assets/Elec3.jpg')"
          contain
          height="100"
        />
        <h1 class="display font-weight-bold">Buscar</h1>
        <h2 class="display font-weight-bold">Cotización</h2>
        <p class="pa-md-6 text-justify text--secondary text-subtitle-2">
          En este módulo podrá Buscar una cotización Existente. Aquí puede
          seleccionar un cliente y ver la(s) cotizaciones que tiene asignadas,
          revisar el estado de la cotización y ver los productos y los servicios
          para ese cliente, puede descargarla, Imprimirla o Compartirla.
        </p>   
      </v-col>
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-img
          :src="require('../assets/Elec4.jpg')"
          contain
          height="100"
        />
        <h1 class="display font-weight-bold">Auditar</h1>
        <h2 class="display font-weight-bold">Cotización</h2>
        <p class="pa-md-6 text-justify text--secondary text-subtitle-2">
          En este módulo podrá Auditar una cotización existente. Puede examinar
          la gestión económica de cada cotización y comprobar si se ajusta a lo
          establecido por ley. Aquí puede seleccionar un cliente, seleccionar
          los productos y los servicios solicitados por ese cliente para la
          respectiva revisión.
        </p>      
      </v-col>
      <!------------------------------------------------------------->
    </v-row>
    <!------------------------------------------------------------------------------------------------------>
    <v-row class="text-center mb-2">
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-btn
          rounded
          color="red"
          dark
        >
          NUEVA
        </v-btn>
      </v-col>
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-btn
          rounded
          color="red"
          dark
        >
          EDITAR
        </v-btn>
      </v-col>
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-btn
          rounded
          color="red"
          dark
        >
          BUSCAR
        </v-btn>
      </v-col>
      <!------------------------------------------------------------->
      <v-col cols="3">
        <v-btn
          rounded
          color="red"
          dark
        >
          AUDITAR
        </v-btn>
      </v-col>
      <!------------------------------------------------------------->
    </v-row>
    <!------------------------------------------------------------------------------------------------------>

    <v-footer
    
      color="primary lighten-6"
      padless
    >
      <v-row
        justify="center"
        no-gutters
       >
      
        <v-btn
         rounded
         v-for="link in links"
          :key="link"
          color="black"
          text
                  
        >
          {{ link }}
        </v-btn>
        
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
         >
          <strong>
            Copyright © - MisiónTIC2022 UTP P62-3 - All Rights Reserved
          </strong>
        </v-col>
      </v-row>
    </v-footer>

    <!------------------------------------------------------------------------------------------------------>
  </div>
</v-container>
</template>
<!---------------------------------------------------------------------------------------------------------->


<!---------------------------------------------------------------------------------------------------------->
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'web',
        'Contact Us',
      ],
    }),
  }
</script>
<!---------------------------------------------------------------------------------------------------------->


<!---------------------------------------------------------------------------------------------------------->
<style></style>
<!---------------------------------------------------------------------------------------------------------->