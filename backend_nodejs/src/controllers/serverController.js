const itemcotizacion = require('../models/itemcotizacion'); //const person = require('../models/person');


class ServerController {
    constructor() {}

    register(req, res) {
        itemcotizacion.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    update(req, res) {
        let {
            itemId,
            descripcion,
            unidad,
            cantidad,
            valorunit,
            valortotal
        } = req.body; 
        let obj = {
            descripcion,
            unidad,
            cantidad,
            valorunit,
            valortotal
        }; 
        itemcotizacion.findByIdAndUpdate(itemId, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteUser(req, res) {
        let {
            itemId
        } = req.body; //let { id } = req.body;
        itemcotizacion.findByIdAndDelete(itemId, (error, data) => {
            /*person.findByIdAndDelete(id, (error, data) => { */
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getUsers(req, res) {
        let itemId = req.params.id;
        itemcotizacion.findById(itemId, (error, data) => {
            /*person.findById(id, (error, data) => { */
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getAllUsers(req, res) {
        itemcotizacion.find((error, data) => {
            /*person.find((error, data) => {*/
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerController;