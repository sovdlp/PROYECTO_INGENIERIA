<template>
  <v-container>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">
            Mantente conectado a nuestras redes sociales!
          </strong>
          <v-spacer />
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="30px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong
            >Copyright © - MisiónTIC2022 UTP P62-3 - All Rights Reserved</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
    <v-footer paddles>
      <v-row no-gutters>
        <v-col class="red--text">
          <strong>
            Copyright © - MisiónTIC2022 UTP P62-3 - All Rights Reserved
          </strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>