<template>
  <div>
    <h1>Tabla desde base de datos</h1>

    <!-- Inicio formulario para crear los items -->
    <v-container>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="itemId" label="Ítem"></v-text-field>
        <v-text-field v-model="descripcion" label="Descripción"></v-text-field>
        <v-text-field v-model="unidad" label="Unidad"></v-text-field>
        <v-text-field v-model="cantidad" label="Cantidad" ></v-text-field>

        <v-btn
          x-small
          color="primary"
          class="mr-4"
          @click="insertarItemcotizacion()"
          >Agregar</v-btn
        >
        <v-btn
          :disabled="!valid"
          color="success"
          x-small
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" x-small class="mr-4" @click="reset">
          Reset Form
        </v-btn>

        <v-btn color="warning" x-small @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </v-container>
    <!-- Fin formulario creación de items -->

    <ul>
      <li v-for="item in itemscotizacion" :key="item._id">
        {{ item.itemId }} - {{ item.descripcion }} - {{ item.unidad }} -
        {{ item.cantidad }} - {{ item.valorunit }}
        <v-btn x-small class="" @click="eliminarItemcotizacion(item._id)">
          Eliminar
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  data: () => ({
    valid: true,
    itemId: "",

    descripcion: "",

    unidad: "",

    cantidad: "",

    return: {
      itemId: null,
      descripcion: null,
      unidad: null,
      cantidad: null,
    },
  }),
  methods: {
    eliminarItemcotizacion(id) {
      let obj = { id };
      store.dispatch("deleteItemcotizacion", obj).then(() => {
        store.dispatch("getItemscotizacion");
      });
    },

    insertarItemcotizacion() {
      let obj = {
        itemId: this.itemId,
        descripcion: this.descripcion,
        unidad: this.unidad,
        cantidad: this.cantidad,
      };
      store.dispatch("setItemscotizacion", obj).then(() => {
        store.dispatch("getItemscotizacion");
        this.itemId = "";
        this.descripcion = "";
        this.unidad = "";
        this.cantidad = "";
      });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  created: () => {
    //dispatch: accede a las acciones del store
    store.dispatch("getItemscotizacion");
  },
  computed: {
    itemscotizacion: () => {
      return store.state.itemscotizacion;
    },
  },
};
</script>

<style>
</style>