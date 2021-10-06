const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
        this.router.get("/itemscotizacion", objServerC.getAllItem);
        this.router.get("/itemscotizacion/:id", objServerC.getItem);
        this.router.post("/itemscotizacion", objServerC.registerItem);
        this.router.put("/itemscotizacion", objServerC.updateItem);
        this.router.delete("/itemscotizacion", objServerC.deleteItem);       
    }
}

exports.default = ServerRouter;