const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
        this.router.get("/itemscotizacion", objServerC.getAllUsers);
        this.router.get("/itemscotizacion/:id", objServerC.getUsers);
        this.router.post("/itemscotizacion", objServerC.register);
        this.router.put("/itemscotizacion", objServerC.update);
        this.router.delete("/itemscotizacion", objServerC.deleteUser);       
    }
}

exports.default = ServerRouter;