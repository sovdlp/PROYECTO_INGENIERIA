<template>
  <v-container>
    <div class="text-center">
      <h1>INGENIERIA S.A.</h1>
      <h2>Cuadro de cotización</h2>
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
              label="Nombre cliente "
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
          <v-col cols="2">
            <v-img
              :src="require('../assets/logo.png')"
              class="my-3"
              contain
              height="100"
            />
          </v-col>
          <v-col cols="2">
            <v-btn class="ma-1" color="indigo" outlined small>Logo..</v-btn>
          </v-col>
        </v-row>
      </v-card>
      <br />
      <v-card class="pa-2" outlined tile>
        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Proyecto: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Nombre proyecto"
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Contenido: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Descripción "
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Fecha: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Fecha cotización"
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
        </v-row>
      </v-card>
      <br />
      <v-card class="pa-2" outlined tile>
        <v-row>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>Proponente: </v-card>
          </v-col>
          <v-col cols="5"
            ><v-text-field
              dense
              label="Nombre empresa proponente "
              :rules="rules"
              hide-details="auto"
            ></v-text-field
          ></v-col>
          <v-col cols="2">
            <v-img
              :src="require('../assets/ingenieria_sa.png')"
              class="my-3"
              contain
              height="100"
            />
          </v-col>
          <v-col cols="2">
            <v-btn class="ma-1" color="indigo" outlined small>Logo..</v-btn>
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
      <v-data-table
        dense
        :headers="headers2"
        :items="indirectos"
        :single-select="singleSelect"
        item-key="descripcion"
        show-select
        class="elevation-1"
        hide-default-footer
      ></v-data-table>

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
      <v-data-table
        v-model="selected"
        dense
        :headers="headers2"
        :items="impuestos"
        :single-select="singleSelect"
        item-key="descripcion"
        show-select
        class="elevation-1"
        hide-default-footer
      ></v-data-table>

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
    indirectos: [
      {
        descripcion: "Administración",
        porcentaje: "10%",
        vrindirecto: "$42345",
      },
      {
        descripcion: "Imprevistos",
        porcentaje: "5%",
        vrindirecto: "$9876",
      },
      {
        descripcion: "Utilidades",
        porcentaje: "7%",
        vrindirecto: "$15645",
      },
    ],

    impuestos: [
      {
        descripcion: "IVA/Utilidades",
        porcentaje: "19%",
        vrindirecto: "$12345",
      },
      {
        descripcion: "IVA Pleno",
        porcentaje: "19%",
        vrindirecto: "$12345",
      },
    ],

     columnas: [
      { text: "ÍTEM", align: "center", sortable: false, value: "item", class:"grey" },
      { text: "DESCRIPCIÓN", alingn:"start", sortable: false, value: "descripcion", class:"grey" },
      { text: "UNIDAD", align: "center",sortable: false, value: "unidad", class:"grey" },
      { text: "CANTIDAD", align: "center",sortable: false, value: "cantidad", class:"grey" },
      { text: "VALOR UNITARIO", align: "right",sortable: false, value: "valorunit", class:"grey" },
      { text: "VALOR TOTAL", align: "end",sortable: false, value: "valortotal", class:"grey" }
    ],

    headers2: [
      {
        text: "Descripción",
        sortable: false,
        align: "start",
        value: "descripcion",
      },
      { text: "Porcentaje", sortable: false, value: "porcentaje" },
      { text: "Valor Total", sortable: false, value: "vrindirecto" },
    ],
  }),

  components: {
    
  },
};
</script>