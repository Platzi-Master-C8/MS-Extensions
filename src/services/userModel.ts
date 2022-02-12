import { UserCreationAttributes, UserModel } from "../models/User";

export class UserService {

   async addUser(data: UserCreationAttributes): Promise<UserCreationAttributes> {
      try {
         const createUser = await UserModel.create(data);
         return createUser;
      } catch (error) {
         throw new Error('error on creating user')
      }
   }

   async getUsers(): Promise<Array<UserModel>> {
      try {
         const getUser = await UserModel.findAll();
         return getUser;
      } catch (error) {
         console.log(error)
         throw new Error('Error on get all users')
      }
   }
}

export const userService = new UserService();