const mongoose = require('mongoose');
const schema = mongoose.Schema;

var itemSchema = new schema({
    itemId: {
        type: String
    },
    descripcion: {
        type: String
    },
    unidad: {
        type: String
    },
    cantidad: {
        type: Number

    },
    valorunit: {
        type: Number
    },
    valortotal: {
        type: Number
    },
}, {
    collection: 'itemscotizacion'
});

module.exports = mongoose.model('Item', itemSchema);