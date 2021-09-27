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
                    color="primary"
                    :disabled="!isValid"
                    >Login
                    <v-form v-model="isValid"></v-form>
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
            })
    };
</script>
