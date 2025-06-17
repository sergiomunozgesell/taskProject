import {Request,Response} from "express";
import { UserService } from "../services/user.service";

const userService = new UserService(); 

export class UserControll{

    static async register(req:Request, res:Response){
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({message:"Error al crear el registro", error});
        }

    }


}

