<template>
  <v-container>
    <div class="text-center">
      <h1>INGENIERIA S.A.</h1>
      <h2>Análisis Precios Unitarios</h2>
      <br /><br />
    </div>

    <h3 class="center">I. INFORMACION DEL PROYECTO</h3>

    <div class="text-md-left font-italic body-2">
      <v-card class="pa-2" outlined tile>
        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Cliente: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Nombre Cliente"
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
          <v-col cols="2">
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
          <v-col cols="2">
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
        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Ciudad: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Nombre Ciudad"
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Proyecto: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Nombre Proyecto"
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Proponente: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Nombre Proponente"
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
        </v-row>
      </v-card>
      <br />
      <br /><br />
    </div>
    <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="totales"
          hide-default-footer
          :items="totales"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card><br>
      
    <h3 class="center">II. ANALISIS DE PRECIOS UNITARIOS</h3>
    <div>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas"
          hide-default-footer
          :items="items"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="melec"
          hide-default-footer
          :items="electrico"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas4"
          hide-default-footer
          :items="items2"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="mocivil"
          hide-default-footer
          :items="obracivil"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas4"
          hide-default-footer
          :items="items2"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-row>
          <v-col cols="10">
            <p class="text-end">SUBTOTAL</p>
          </v-col>
          <v-col cols="2">
            <p class="end">$ 150.000</p>
          </v-col>
        </v-row> </v-card
      ><br />

      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="equipo"
          hide-default-footer
          :items="equipo"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas4"
          hide-default-footer
          :items="items2"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-row>
          <v-col cols="10">
            <p class="text-end">SUBTOTAL</p>
          </v-col>
          <v-col cols="2">
            <p class="end">$ 150.000</p>
          </v-col>
        </v-row> </v-card
      ><br />

      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="transporte"
          hide-default-footer
          :items="transporte"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas4"
          hide-default-footer
          :items="items2"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-row>
          <v-col cols="10">
            <p class="text-end">SUBTOTAL</p>
          </v-col>
          <v-col cols="2">
            <p class="end">$ 150.000</p>
          </v-col>
        </v-row> </v-card
      ><br />

      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="manoobra"
          hide-default-footer
          :items="manoobra"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-data-table
          dense
          :headers="columnas4"
          hide-default-footer
          :items="items2"
          item-key="item"
          class="elevation-1"
        ></v-data-table>
      </v-card>
      <v-card class="mx-auto mt-5">
        <v-row>
          <v-col cols="10">
            <p class="text-end">SUBTOTAL</p>
          </v-col>
          <v-col cols="2">
            <p class="end">$ 150.000</p>
          </v-col>
        </v-row> </v-card
      ><br />


    </div>
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

    melec: [
      {
        text: "I.",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "Materiales Electricos",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "50%",
        divider: "true",
      },
    ],
    mocivil: [
      {
        text: "I.I",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "Materiales Obra Civil",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "50%",
        divider: "true",
      },
    ],
    equipo: [
      {
        text: "II.",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "Equipo",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "50%",
        divider: "true",
      },
    ],

    transporte: [
      {
        text: "III.",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "Transporte",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "50%",
        divider: "true",
      },
    ],
    manoobra: [
      {
        text: "IV.",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "Mano de obra",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "50%",
        divider: "true",
      },
    ],

    totales: [
      {
        text: "MATERIALES",
        align: "center",
        sortable: false,
        value: "item",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "EQUIPO",
        align: "start",
        sortable: false,
        value: "descripcion",
        class: "grey",
        width: "40%",
        divider: "true",
      },
      {
        text: "TRANSPORTE",
        align: "center",
        sortable: false,
        value: "unidad",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "MANO DE OBRA",
        align: "center",
        sortable: false,
        value: "cantidad",
        class: "grey",
        width: "7%",
        divider: "true",
      },
    ],

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
        width: "7%",
        divider: "true",
      },
      {
        text: "VALOR ITEM",
        align: "right",
        sortable: false,
        value: "valorunit",
        class: "grey",
        width: "7%",
        divider: "true",
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

    columnas4: [
      {
        text: "COD. MATERIALES",
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
        width: "40%",
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
        width: "7%",
        divider: "true",
      },
      {
        text: "VALOR UNIARIO",
        align: "right",
        sortable: false,
        value: "valorunit",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "VALOR PARCIAL",
        align: "right",
        sortable: false,
        value: "valorunit",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "",
        align: "right",
        sortable: false,
        value: "valorunit",
        class: "light",
        width: "10%",
        divider: "true",
      },
      {
        text: "CANTIDAD TOTAL",
        align: "right",
        sortable: false,
        value: "valorunit",
        class: "grey",
        width: "7%",
        divider: "true",
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
