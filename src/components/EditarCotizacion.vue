<template>
  <v-container>
    <v-btn color="primary" @click="salir"> Regresar </v-btn>

    <v-data-table
      :headers="columnas"
      :items="itemscotizacion"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Editar Cantidades</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- Inicio formulario para crear los items -->
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Agregar Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title> Modificación de Ítem </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="itemId"
                        label="Ítem"
                      ></v-text-field>
                    </v-col>
                    <v-text-field
                      v-model="descripcion"
                      label="Descripción"
                    ></v-text-field>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="unidad"
                        label="Unidad"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="cantidad"
                        label="Cantidad"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4"> </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  v-if="id != null"
                  color="blue darken-1"
                  text
                  @click="btnCancelar()"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  v-if="id == null"
                  color="blue darken-1"
                  text
                  @click="insertarItemcotizacion()"
                >
                  Crear Ítem</v-btn
                >
                <v-btn
                  v-if="id != null"
                  color="blue darken-1"
                  text
                  @click="editarItemcotizacion(id)"
                >
                  Actualizar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- Fin formulario para crear los items -->

          <!-- Inicio formulario para eliminar los items -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Está seguro de eliminar este item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >Borrar</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- fin formulario para eliminar los items -->
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="
            btnEditar(
              item,
              item.itemId,
              item.descripcion,
              item.unidad,
              item.cantidad
            )
          "
        >
          mdi-pencil
        </v-icon>
        <v-icon small @click="eliminarItemcotizacion(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
// import store from "../store/tbl_items.js";
import storeitems from "../store/index.js";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    valid: true,

    itemId: "1.1",
    descripcion: "Suministro, transporte e instalación de ",
    unidad: "Un",
    cantidad: 0,

    id: null,

    columnas: [
      {
        text: "ÍTEM",
        align: "center",
        sortable: false,
        value: "itemId",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "DESCRIPCIÓN",
        alingn: "start",
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
        width: "10%",
        divider: "true",
      },
      {
        text: "VALOR UNITARIO",
        align: "end",
        sortable: false,
        value: "valorunit",
        class: "grey",
        divider: "true",
      },
      {
        text: "Actions",
        align: "center",
        value: "actions",
        sortable: false,
        class: "grey",
      },
    ],

    editedIndex: -1,

    editedItem: {
      itemId: "",
      descripcion: "",
      unidad: "",
      cantidad: 0,
    },
    defaultItem: {
      itemId: "1.1",
      descripcion: "Suministro, transporte e instalación de ...",
      unidad: "Ml",
      cantidad: 0.0,
    },
  }),

  computed: {
    itemscotizacion: () => {
      return storeitems.state.itemscotizacion;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created: () => {
    storeitems.dispatch("getItemscotizacion");
  },

  methods: {
    eliminarItemcotizacion(id) {
      let obj = { id };
      storeitems.dispatch("deleteItemcotizacion", obj).then(() => {
        storeitems.dispatch("getItemscotizacion");
      });
    },

    insertarItemcotizacion() {
      let obj = {
        itemId: this.itemId,
        descripcion: this.descripcion,
        unidad: this.unidad,
        cantidad: this.cantidad,
      };
      storeitems.dispatch("setItemscotizacion", obj).then(() => {
        storeitems.dispatch("getItemscotizacion");
        //        this.$refs.form.reset();
      });
      this.close();
    },

    editarItemcotizacion(id) {
      this.dialog = true;
      let obj = {
        id: id,
        itemId: this.itemId,
        descripcion: this.descripcion,
        unidad: this.unidad,
        cantidad: this.cantidad,
      };
      storeitems.dispatch("editItemscotizacion", obj).then(() => {
        storeitems.dispatch("getItemscotizacion");
        this.id = null;
      });
    },

    btnEditar(id, itemId, descripcion, unidad, cantidad) {
      this.id = id;
      this.itemId = itemId;
      this.descripcion = descripcion;
      this.unidad = unidad;
      this.cantidad = cantidad;
    },

    btnCancelar() {
      this.id = null;
      this.close();
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

     //* Botor para cerrar la ventana de edicion y volver a Cuadro

    salir() {
      this.$router.push("/cuadrocotiza");
    },
  },
};
</script>