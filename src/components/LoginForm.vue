<template>
    <v-container>
        <v-card>
            <img src="https://raw.githubusercontent.com/sovdlp/PROYECTO_INGENIERIA/main/src/assets/ingenieria_sa.png">
        </v-card>
        <v-card>
            <v-card-title>USUARIO</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field 
                            label="Email"
                            v-model="email"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                        <v-text-field 
                            label="Password"
                            v-model="password"
                            type="password"
                            :rules="passwordRules"
                            required
                        ></v-text-field>
                    </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    class="ma-2"
                    :loading="loading2"
                    :disabled="loading2"
                    color="accent"
                    @click="loader = 'loading2'"
                >
                INGRESAR
                <template v-slot:loader>
                <span>Loading...</span>
                </template>
                </v-btn>
                <v-btn
                    class="ma-2"
                    :loading="loading3"
                    :disabled="loading3"
                    color="success"
                    @click="loader = 'loading3'"
                >
                REGISTRARSE
                <template v-slot:loader>
                <span>Cargando...</span>
                </template>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
    export default {
        name: "LoginForm",
            data: () => ({
                email: null,
                password: null,
                isValid: true,
                emailRules: [
                    v => !!v || 'Se requiere su email',
                ],
                passwordRules: [
                    v => !!v || 'Se requiere su contraseña',
                ],
                
            }),
    data: () =>{
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },   
    };

</script>
