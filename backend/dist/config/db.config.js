"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DB {
    static async conn(URI) {
        try {
            const conn = await mongoose_1.default.connect(URI);
            if (!conn) {
                throw new Error("Error con establecer conexión a la base de datos");
            }
            return conn;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = DB;
