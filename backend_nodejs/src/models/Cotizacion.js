const mongoose = require('mongoose');
const schema = mongoose.Schema;

var cotizacionSchema = new schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    direccion: {
        type: String
    },
    ciudad: {
        type: String
    },
    telefonoOficina: {
        type: Number
    },
    telefonoCelular: {
        type: Number
    },
    nombreEmpresa: {
        type: String
    },
    email: {
        type: String
    },
    nombreItem: {
        type: String
    },
    cantidad: {
        type: Number
    },
    precioItem: {
        type: Number
    },
    totalItem: {
        type: Number
    }
}, {
    collection: 'cotizacion'
});
module.exports = mongoose.model('Cotizacion', cotizacionSchema);