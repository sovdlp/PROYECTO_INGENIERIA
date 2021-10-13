<template>
  <v-container>
    <div>
      <h1>Crear Nueva Cotización</h1>
      <h2>Datos Cliente</h2>
      <br />

      <v-validation-observer ref="observer">
        <form @submit.prevent="submit">
          <v-row>
            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="nombre"
                rules="required|max:30"
              >
                <v-text-field
                  v-model="nombre"
                  :counter="30"
                  :error-messages="errors"
                  label="Nombres"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="apellid"
                rules="required|max:30"
              >
                <v-text-field
                  v-model="apellido"
                  :counter="30"
                  :error-messages="errors"
                  label="Apellidos"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="Direccion"
                rules="required|max:30"
              >
                <v-text-field
                  v-model="direccion"
                  :counter="30"
                  :error-messages="errors"
                  label="Direccion"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="ciudad"
                rules="required|max:30"
              >
                <v-text-field
                  v-model="ciudad"
                  :counter="30"
                  :error-messages="errors"
                  label="Ciudad"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="telefonoOficina"
                :rules="{
                  required: true,
                  digits: 10,
                  regex: '^(601|602|603|604|605|606|607|608|609)\\d{7}$',
                }"
              >
                <v-text-field
                  v-model="telefonoOficina"
                  :counter="10"
                  :error-messages="errors"
                  label="Telefono Oficina"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>

            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="telefonoCelular"
                :rules="{
                  required: true,
                  digits: 10,
                  regex:
                    '^(300|301|302|304|310|311|312|313|314|315|316|317|320|321)\\d{7}$',
                }"
              >
                <v-text-field
                  v-model="telefonoCelular"
                  :counter="10"
                  :error-messages="errors"
                  label="Telefono Celular"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="empresa"
                rules="required|max:30"
              >
                <v-text-field
                  v-model="nombreEmpresa"
                  :counter="30"
                  :error-messages="errors"
                  label="Nombre Empresa"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
            <v-col cols="6">
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>
            </v-col>
          </v-row>

          <br />
        </form>
      </v-validation-observer>

      <br />

      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="nombreItem"
            :counter="50"
            label="Nombre Item"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="1">
          <v-text-field
            v-model="cantidad"
            :counter="3"
            label="Cantidad"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="2">
          <v-text-field
            v-model="precioItem"
            :counter="4"
            label="Precio Item"
            required
          ></v-text-field>
        </v-col>

        <!-- ----------------------------------   BOTONES  ------------------------------------------------ -->

        <v-col cols="1">
          <v-btn
            v-if="id == null"
            elevation="13"
            rounded
            x-small
            color="primary"
            class="mr-5"
            v-on:click="crearCotizacion"
            >Agregar</v-btn
          >
        </v-col>

        <v-col cols="1">
          <v-btn
            v-if="id != null"
            elevation="13"
            rounded
            x-small
            color="primary"
            class="mr-5"
            v-on:click="actualizarCotizacion"
            >Actualizar</v-btn
          >
        </v-col>

        <v-col cols="1">
          <v-btn
            v-if="id != null"
            elevation="13"
            rounded
            x-small
            color="error"
            class="mr-5"
            v-on:click="btnCancelar"
            >Cancelar</v-btn
          >
        </v-col>
      </v-row>

      <br />

      <h1>Cotización Actual</h1>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Nombre Empresa</th>
              <th class="text-center">Nombre Item</th>
              <th class="text-center">Cantidad</th>
              <th class="text-center">Precio Item</th>
              <th class="text-center">Total Item</th>
              <th class="text-center">Eliminar Item</th>
              <th class="text-center">Actualizar Item</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in cotizaciones" :key="item._id">
              <td>{{ item.nombreEmpresa }}</td>
              <td>{{ item.nombreItem }}</td>
              <td>{{ item.cantidad }}</td>
              <td>{{ item.precioItem }}</td>
              <td>{{ item.totalItem }}</td>

              <td>
                <v-btn
                  @click="eliminarCotizacion(item._id)"
                  color="error"
                  elevation="12"
                  rounded
                  x-small
                  class=""
                  >Eliminar</v-btn
                >
              </td>
              <td>
                <v-btn
                  @click="
                    btnActualizar(
                      item._id,
                      item.nombre,
                      item.apellido,
                      item.direccion,
                      item.ciudad,
                      item.telefonoOficina,
                      item.telefonoCelular,
                      item.nombreEmpresa,
                      item.email,                      
                      item.nombreItem,
                      item.cantidad,
                      item.precioItem,
                      item.totalItem
                    )
                  "
                  color="primary"
                  elevation="12"
                  rounded
                  x-small
                  class=""
                  >Actualizar</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <br/>
    <v-row>
      <v-col>
        <v-btn rounded dark v-on:click="volver"> REGRESAR </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<!-- //-----------------------------   SCRIPT    ------------------------------------------ -->>


<script>
import store from "../store/index.js";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");
extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});
extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  //---------------------------------   DATA   -------------------------------------------->>

  data: () => ({
    nombre: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    telefonoOficina: "",
    telefonoCelular: "",
    nombreEmpresa: "",
    email: "",
    nombreItem: "",
    cantidad: "",
    precioItem: "",
    totalItem: "",
  }),

  //-----------------------------   METODOS    -------------------------------------------->>

  methods: {
    volver() {
      this.$router.push("/");
    },

    crearCotizacion() {
      let obj = {
        nombre: this.nombre,
        apellido: this.apellido,
        direccion: this.direccion,
        ciudad: this.ciudad,
        telefonoOficina: this.telefonoOficina,
        telefonoCelular: this.telefonoCelular,
        nombreEmpresa: this.nombreEmpresa,
        email: this.email,        
        nombreItem: this.nombreItem,
        cantidad: this.cantidad,
        precioItem: this.precioItem,
        totalItem: this.cantidad * this.precioItem,
      };
      store.dispatch("setCotizaciones", obj).then(() => {
        store.dispatch("getCotizaciones");
      });
    },

    actualizarCotizacion(id) {
      let obj = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        direccion: this.direccion,
        ciudad: this.ciudad,
        telefonoOficina: this.telefonoOficina,
        telefonoCelular: this.telefonoCelular,
        nombreEmpresa: this.nombreEmpresa,
        email: this.email,  
        nombreItem: this.nombreItem,
        cantidad: this.cantidad,
        precioItem: this.precioItem,
        totalItem: this.cantidad * this.precioItem,
      };
      store.dispatch("updateCotizaciones", obj).then(() => {
        store.dispatch("getCotizaciones");
        this.id = null;
      });
    },

    eliminarCotizacion(id) {
      let obj = { id };
      store.dispatch("deleteCotizaciones", obj).then(() => {
        store.dispatch("getCotizaciones");
      });
    },

    btnActualizar(id, nombre, apellido, direccion, ciudad, telefonoOficina, telefonoCelular, nombreEmpresa, email, nombreItem, cantidad, precioItem, totalItem) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.ciudad = ciudad;
      this.telefonoOficina = telefonoOficina;
      this.telefonoCelular = telefonoCelular;
      this.nombreEmpresa = nombreEmpresa;
      this.email = email;
      this.nombreItem = nombreItem;
      this.cantidad = cantidad;
      this.precioItem = precioItem;
      this.totalItem = totalItem;
    },

    btnCancelar() {
      this.id = null;
      this.nombre = "";
      this.apellido = "";
      this.direccion = "";
      this.ciudad = "";
      this.telefonoOficina = "";
      this.telefonoCelular = "";
      this.nombreEmpresa = "";
      this.email = "";
      this.nombreItem = "";
      this.cantidad = "";
      this.precioItem = "";
      this.totalItem = "";
    },
  },

  volver() {
    this.$router.push("/");
  },

  created: () => {
    //dispatch: accede a las acciones del store
    store.dispatch("getCotizaciones");
  },

  computed: {
    cotizaciones: () => {
      return store.state.cotizaciones;
    },
  },
};
</script>

<style>
</style>