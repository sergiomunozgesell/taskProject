import { IUser, UserSchema } from "../schema/user.schema";


export class UserService {
    private userModel = UserSchema.getModel();

    async createUser(data: IUser): Promise<IUser> {
        const user = new this.userModel(data);
        return await user.save();
    }
    
}