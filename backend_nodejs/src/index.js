//Importacion de los Middelwares que nos ayudaran en el proyecto
const express = require('express');
const serverRouter = require('./routers/serverRouter');
const mongoose = require('mongoose');
const database = require('./database/db');
const cors = require('cors');

class Server {
    constructor() {

        this.conectDB();
        this.app = express();

        //Puerto por donde trabajara el servidor
        this.app.set('port', process.env.PORT || 3000);

        //Tipo de peticiones HTTP que usaremos
        this.app.use(express.json());
        this.app.use(cors());

        //Rutas:
        const router = express.Router();
        router.get('/', (req, res) => {
            console.log("New Conection...");
            res.status(200).json({
                message: "Hola mundo!"
            });
        });
        const serverR = new serverRouter.default();

        //Dandole la ruta al servidor
        this.app.use(serverR.router);
        this.app.use(router);

        //Levantando el servidor...
        this.app.listen(this.app.get('port'), () => {
            console.log("Our 62-3 Server is Runing on port ", this.app.get('port'));
        });
    }

    conectDB() {
        mongoose.connect(database.db).then(() => {
            console.log("Our 62-3 Conection is Ready... Go!");
        }).catch((err) => {
            console.error("Bad Conection!!");
        });
    }
}
const objServer = new Server();