const itemcotizacion = require('../models/itemcotizacion');

class ServerController {
    constructor() {}

    registerItem(req, res) {
        itemcotizacion.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    updateItem(req, res) {
        let {itemId, descripcion, unidad, cantidad, valorunit, valortotal } = req.body; 
        let obj = { descripcion, unidad, cantidad, valorunit, valortotal }; 
        itemcotizacion.findByIdAndUpdate(itemId, { $set: obj}, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteItem(req, res) {
        let { id } = req.body;
        itemcotizacion.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getItem(req, res) {
        let id = req.params.id;
        itemcotizacion.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getAllItem(req, res) {
        itemcotizacion.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerController;