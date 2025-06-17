import { UserControll } from "../controllers/user.controll";
import express, {Router, Request, Response} from "express";

class UserRouter {

    public router: Router;


    constructor(){
        this.router = express.Router();
        this.setRoutes();
    }

    setRoutes(){
        // RUTA TEST
        this.router.get('/user/test' ,(req:Request,res:Response)=>{
            res.status(200).send("Bienvenido a mi ruta de usuario")
        })

        // -------------------------------- RUTAS GET  ----------------------------------
        // HOME USER
        // this.router.post('/user/:id', UserControll.home);

        // -------------------------------- RUTAS POST ---------------------------------
        // Crear usuario
        this.router.post('/user/register' , UserControll.register);
        // Login de usuario
        // this.router.post('/user/login', UserControll.login);

    }

    getRouter(){
        return this.router;
    }

}


export default new UserRouter().getRouter();
