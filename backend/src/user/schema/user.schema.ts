import {Document, Model, model, Schema} from "mongoose";


export interface IUser extends Document{
    username:string;
    password:string;
    email:string;
}


export class UserSchema{

    private static schema = new Schema<IUser>({
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            minlength:8,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true   
        }

    })

    private static model:Model<IUser> = model<IUser>("User", UserSchema.schema, "users");

    static getModel():Model<IUser>{
        return UserSchema.model;
    }
}
