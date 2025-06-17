import mongoose from "mongoose";

class DB {


    static async conn (URI:string){

        try {

            const conn = await mongoose.connect(URI);
            return conn;

        } catch (error) {
            
            console.error(" Error con establecer conexión con la base de datos", error);
            throw error;

        }



    }

}


export default DB;