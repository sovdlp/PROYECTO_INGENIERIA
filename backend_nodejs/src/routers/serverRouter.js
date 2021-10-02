const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
        this.router.get("/cotItems", objServerC.getAllUsers);
        this.router.get("/cotItems/:id", objServerC.getUsers);
        this.router.post("/cotItems", objServerC.register);
        this.router.put("/cotItems", objServerC.update);
        this.router.delete("/cotItems", objServerC.deleteUser);       
    }
}

exports.default = ServerRouter;