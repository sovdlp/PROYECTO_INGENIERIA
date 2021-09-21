<template>
    <v-container >
        <div class="text-center">
            <h1>INGENIERIA S.A.</h1>
            <h2>Cuadro de cotización</h2>
            <br /><br />
        </div>

        <h3 class="center"> I. INFORMACION DEL PROYECTO</h3> 

        <div class="text-md-left font-italic body-2">
            <v-card class="pa-2" outlined tile>
                <v-row>
                    <v-col cols="2"> <v-card class="pa-2" outlined tile>Cliente: </v-card> </v-col>
                    <v-col cols="5"><v-text-field dense label="Nombre cliente " :rules="rules" hide-details="auto" ></v-text-field></v-col>
                    <v-col cols= "2">
                        <v-img
                            :src="require('../assets/logo.png')"
                            class="my-3"
                            contain
                            height="100"
                        />
                    </v-col>
                    <v-col cols= "2">
                        <v-btn class= "ma-1" color="indigo" outlined small >Logo..</v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <br />
            <v-card class="pa-2" outlined tile>
                <v-row>
                    <v-col cols="2"> <v-card class="pa-2" outlined tile>Proyecto: </v-card> </v-col>
                    <v-col cols="5"><v-text-field dense label="Nombre proyecto" :rules="rules" hide-details="auto" ></v-text-field></v-col>
                </v-row>

                <v-row>
                    <v-col cols="2"> <v-card class="pa-2" outlined tile>Contenido: </v-card> </v-col>
                    <v-col cols="5"><v-text-field dense label="Descripción " :rules="rules" hide-details="auto" ></v-text-field></v-col>
                </v-row>

                <v-row>
                    <v-col cols="2"> <v-card class="pa-2" outlined tile>Fecha: </v-card> </v-col>
                    <v-col cols="5"><v-text-field dense label="Fecha cotización" :rules="rules" hide-details="auto" ></v-text-field></v-col>
                </v-row>
            </v-card>
            <br />
            <v-card class="pa-2" outlined tile>
                <v-row>
                    <v-col cols="2"> <v-card class="pa-2" outlined tile>Proponente: </v-card> </v-col>
                    <v-col cols="5"><v-text-field dense label="Nombre empresa proponente " :rules="rules" hide-details="auto" ></v-text-field></v-col>
                    <v-col cols= "2">
                        <v-img
                            :src="require('../assets/ingenieria_sa.png')"
                            class="my-3"
                            contain
                            height="100"
                        />
                    </v-col>
                    <v-col cols="2">
                        <v-btn class= "ma-1" color="indigo" outlined small >Logo..</v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <br><br>
        </div>
            <h3 class="center"> II. CUADRO DE COSTOS DIRECTOS</h3>        
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
                    <v-btn class= "ma-2" color="indigo" outlined small >Cargar archivo cantidades</v-btn>
                </v-col>
            </v-row>

            <v-data-table
                dense
                :headers="headers"
                :items="items"
                item-key="item"
                class="elevation-1"
            ></v-data-table>

        <v-row>
            <v-col cols="8">
                <p class="left"> SUBTOTAL COSTOS DIRECTOS</p> 
            </v-col>
            <v-col cols="4">
                <p class="right"> $ 150.000</p> 
            </v-col>
        </v-row>            

                        
        </div>
        <div>
            <h3 class="center"> III. CUADRO DE COSTOS INDIRECTOS</h3>                
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
                    <v-btn class= "ma-2" color="indigo" outlined small >Cargar archivo A.I.U.</v-btn>
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
                <p class="left"> SUBTOTAL COSTOS INDIRECTOS</p> 
            </v-col>
            <v-col cols="4">
                <p class="right"> $ 150.000</p> 
            </v-col>
        </v-row>            

            <br>
            <h3 class="center"> IV. CUADRO DE IMPUESTOS</h3> 
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
                <p class="left"> SUBTOTAL IMPUESTOS</p> 
            </v-col>
            <v-col cols="4">
                <p class="right"> $ 150.000</p> 
            </v-col>
        </v-row>  
        </div>
        <v-row>
            <v-col cols="8">
                <h3 class="left"> VALOR TOTAL COTIZACION</h3> 
            </v-col>
            <v-col cols="4">
                <h3 class="right"> $ 150.000</h3> 
            </v-col>
        </v-row>
        <br><br>
    </v-container>

</template>

<script>
    //import items from "../store/Almacen_items.js";
    export default {
        data: () => ({
        
        rules: [
        value => !!value || 'Requerido.',
        value => (value && value.length >= 3) || 'Min 3 caracteres',
        ],

        items: [
        {
            item: '1.1',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
        },
        {
            item: '1.2',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
        },
        {
            item: '1.3',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
        },
        {
            item: '1.4',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
        },
        {
            item: '2.1',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
        },
        {
            item: '2.2',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
        },
        {
            item: '2.3',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
        },
        {
            item: '3.1',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
        },
        {
            item: '3.2',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
        },
        {
            item: '3.3',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
        },
        ],

        indirectos: [
            {
            descripcion: 'Administración',
            porcentaje: '10%',
            vrindirecto: '$42345',
            },
            {
            descripcion: 'Imprevistos',
            porcentaje: '5%',
            vrindirecto: '$9876',
            },
            {
            descripcion: 'Utilidades',
            porcentaje: '7%',
            vrindirecto: '$15645',
            },
        ],
        
        impuestos: [
            {
            descripcion: 'IVA/Utilidades',
            porcentaje: '19%',
            vrindirecto: '$12345',
            },
            {
            descripcion: 'IVA Pleno',
            porcentaje: '19%',
            vrindirecto: '$12345',
            },
        ],
        selected: [],
        headers: [
            { text: 'Ítem', align: 'start', sortable: false, value: 'item', },
            { text: 'Descripción', sortable: false, value: 'calories' },
            { text: 'Unidad',  sortable: false, value: 'fat' },
            { text: 'Cantidad', sortable: false, value: 'carbs' },
            { text: 'Valor unit', sortable: false, value: 'protein' },
            { text: 'Valor total',  sortable: false, value: 'iron' },
        ],
        
        headers2: [
            { text: 'Descripción', sortable: false, align: 'start', value: 'descripcion', },
            { text: 'Porcentaje', sortable: false, value: 'porcentaje' },
            { text: 'Valor Total', sortable: false, value: 'vrindirecto' },
        ],

        }),
    }
</script>