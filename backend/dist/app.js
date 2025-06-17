"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("./config/db.config"));
class App {
    app;
    port;
    uri;
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT);
        this.uri = process.env.URI;
        this.config();
        this.routes();
    }
    async config() {
        await db_config_1.default.conn(this.uri);
    }
    routes() {
        // TEST DE RUTAS
        this.app.get('/', (req, res) => {
            res.status(200).send("Bienvenido a la ruta TEST");
        });
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`App running on PORT: http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
