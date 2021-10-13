const cotizacion = require('../models/Cotizacion');

class ServerController {

    constructor() {}


    registerCotizaciones(req, res) {
        cotizacion.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });
    }

    updateCotizaciones(req, res) {
        let {
            id,
            nombre,
            apellido,
            direccion,
            ciudad,
            telefonoOficina,
            telefonoCelular,
            nombreEmpresa,
            email,        
            nombreItem,
            cantidad,
            precioItem,
            totalItem
        } = req.body;
       
        let obj = {
            nombre,
            apellido,
            direccion,
            ciudad,
            telefonoOficina,
            telefonoCelular,
            nombreEmpresa,
            email,               
            nombreItem,
            cantidad,
            precioItem,
            totalItem
        };
        cotizacion.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    deleteCotizaciones(req, res) {
        let {
            id
        } = req.body;
        cotizacion.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getCotizaciones(req, res) {
        let id = req.params.id;
        cotizacion.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    getAllCotizaciones(req, res) {
        cotizacion.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }
}
exports.default = ServerController;