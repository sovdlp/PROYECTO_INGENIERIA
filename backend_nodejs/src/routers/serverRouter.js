const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter {
    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        const objServerC = new serverController.default();
        this.router.get("/cotizacion", objServerC.getAllCotizaciones);
        this.router.get("/cotizacion/:id", objServerC.getCotizaciones);
        this.router.post("/cotizacion", objServerC.registerCotizaciones);
        this.router.put("/cotizacion", objServerC.updateCotizaciones);
        this.router.delete("/cotizacion", objServerC.deleteCotizaciones);
    }
}
exports.default = ServerRouter;