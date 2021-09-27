<template>
  <v-container>
    <div class="text-center">
      <h1>INGENIERIA S.A.</h1>
      <h2>Cuadro de cotización</h2>
      <br /><br />
    </div>

    <h3 class="center">I. INFORMACION DEL PROYECTO</h3>

    <div class="text-md-left font-italic body-2">
      <v-card>
        <v-row>
          <v-col cols="6">

              <v-data-table
                dense
                disable-sort
                :headers="columnas3"
                hide-default-footer
                :items="cotizacion"
                class=" my-2 elevation-1"
              ></v-data-table>

          </v-col>
          <v-col cols="1">
            <v-card class="mx-auto pa-2" outlined tile width="120">
              <v-img
                :src="require('../assets/logo.png')"
                class="my-3"
                contain
                height="100"
              />
              <v-btn class="ma-1" color="indigo" outlined small>Logo..</v-btn>
            </v-card>
          </v-col>
          <v-col cols="1">
            <v-card class="mx-auto pa-2" outlined tile width="120">
              <v-img
                :src="require('../assets/logo.svg')"
                class="my-3"
                contain
                height="100"
              />
              <v-btn class="ma-1" color="indigo" outlined small>Logo..</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <br /><br />
    </div>
    <h3 class="center">II. CUADRO DE COSTOS DIRECTOS</h3>
    <div>
      <v-row class="text-left">
        <v-col cols="6">
          <v-file-input
            show-size
            truncate-length="40"
            accept=".xls, .csv"
            placeholder="Seleccione un archivo"
            label="Cuadro de cantidades"
          >
          </v-file-input>
        </v-col>
        <v-col cols="4">
          <v-btn class="ma-2" color="indigo" outlined small
            >Cargar archivo cantidades</v-btn
          >
          <v-btn
            class="ma-2"
            color="indigo"
            outlined
            small
            @click="editarCuadro()"
          >
            >Edición</v-btn
          >
        </v-col>
      </v-row>

      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas"
          :items="items"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>

      <v-row>
        <v-col cols="8">
          <p class="left">SUBTOTAL COSTOS DIRECTOS</p>
        </v-col>
        <v-col cols="4">
          <p class="right">$ 150.000</p>
        </v-col>
      </v-row>
    </div>
    <div>
      <h3 class="center">III. CUADRO DE COSTOS INDIRECTOS</h3>
      <v-row class="text-left">
        <v-col cols="6">
          <v-file-input
            show-size
            truncate-length="40"
            accept=".xls, .csv"
            placeholder="Seleccione un archivo"
            label="Cuadro APU"
          >
          </v-file-input>
        </v-col>
        <v-col cols="4">
          <v-btn class="ma-2" color="indigo" outlined small
            >Cargar archivo A.I.U.</v-btn
          >
        </v-col>
      </v-row>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas2"
          :items="indirectos"
          :single-select="false"
          item-key="descripcion"
          show-select
          class="elevation-1"
          hide-default-footer
        ></v-data-table>
      </v-card>

      <v-row>
        <v-col cols="8">
          <p class="left">SUBTOTAL COSTOS INDIRECTOS</p>
        </v-col>
        <v-col cols="4">
          <p class="right">$ 150.000</p>
        </v-col>
      </v-row>

      <br />
      <h3 class="center">IV. CUADRO DE IMPUESTOS</h3>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas2"
          :items="impuestos"
          :single-select="true"
          item-key="descripcion"
          show-select
          class="elevation-1"
          hide-default-footer
        ></v-data-table>
      </v-card>
      <v-row>
        <v-col cols="8">
          <p class="left">SUBTOTAL IMPUESTOS</p>
        </v-col>
        <v-col cols="4">
          <p class="right">$ 150.000</p>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col cols="8">
        <h3 class="left">VALOR TOTAL COTIZACION</h3>
      </v-col>
      <v-col cols="4">
        <h3 class="right">$ 150.000</h3>
      </v-col>
    </v-row>
    <br /><br />
  </v-container>
</template>

<script>
import store from "../store/tbl_items.js";

export default {
  data: () => ({
    rules: [
      (value) => !!value || "Requerido.",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    items: store.items,
    indirectos: store.indirectos,
    impuestos: store.impuestos,
    cotizacion: store.cotizacion,

    columnas: [
      {
        text: "ÍTEM",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "DESCRIPCIÓN",
        align: "start",
        sortable: false,
        value: "descripcion",
        class: "grey",
        width: "50%",
        divider: "true",
      },
      {
        text: "UNIDAD",
        align: "center",
        sortable: false,
        value: "unidad",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "CANTIDAD",
        align: "center",
        sortable: false,
        value: "cantidad",
        class: "grey",
        width: "16%",
        divider: "true",
      },
      {
        text: "VALOR UNITARIO",
        align: "right",
        sortable: false,
        value: "valorunit",
        class: "grey",
        divider: "true",
      },
      {
        text: "VALOR TOTAL",
        align: "end",
        sortable: false,
        value: "valortotal",
        class: "grey",
      },
    ],

    columnas2: [
      {
        text: "DESCRIPCIÓN",
        sortable: false,
        align: "start",
        value: "descripcion",
        width: "20%",
        class: "grey",
        divider: "true",
      },
      {
        text: "PORCENTAJE",
        sortable: false,
        value: "porcentaje",
        width: "10%",
        align: "center",
        class: "grey",
        divider: "true",
      },
      {
        text: "VALOR TOTAL",
        sortable: false,
        value: "vrindirecto",
        align: "end",
        class: "grey",
      },
    ],
    columnas3: [
      {
        text: "Cliente:",
        align: "start",
        value: "cliente",
      },
      {
        text: "Proyecto:",
        align: "start",
        value: "proyecto",
      },
      {
        text: "Contiene:",
        align: "start",
        value: "contenido",
      },
      {
        text: "Fecha:",
        align: "start",
        value: "fecha",
      },
      {
        text: "Ciudad:",
        align: "start",
        value: "ciudad",
      },
      {
        text: "# COT:",
        align: "start",
        value: "numero_cot",
      },
    ],
  }),
  methods: {
    editarCuadro() {
      console.log("editar cotizacion...");
      this.$router.push("/editarcuadro");
    },
  },
  components: {},
};
</script>