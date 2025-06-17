import express, { Application } from "express";
import DB from "./config/db.config";
import UserRouter from "./user/routes/user.router";



class App {

    public app: Application;
    private port:number;
    private uri:string;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT);
        if(isNaN(this.port)) throw new Error("PORT, no esta definido correctamente");
        
        this.uri = process.env.URI as string;
        if(!this.uri)throw new Error("Uri no esta definida");
        
        this.config();
        this.middlewares();
        this.routes();
    }

    async config() {
        await DB.conn(this.uri);
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        
        // User Router
        this.app.use('/api', UserRouter);

        // Otras rutas que quizas no son necesarias ya que task pasara por user también
    }

    start() {
        this.app.listen(this.port, ()=>{
            console.log(`App running on PORT: http://localhost:${this.port}`);       
        })
    }

}


export default App;