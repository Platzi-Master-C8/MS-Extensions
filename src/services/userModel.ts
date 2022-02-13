import { User, UserCreationAttributes, UserModel } from "../models/User";

export class UserService {
  async addUser(data: User): Promise<UserCreationAttributes> {
    try {
      const createUser = await UserModel.create(data);
      return createUser;
    } catch (error) {
      throw new Error("error on creating user");
    }
  }

  async getUsers(): Promise<Array<UserModel>> {
    try {
      const getUser = await UserModel.findAll();
      return getUser;
    } catch (error) {
      console.log(error);
      throw new Error("Error on get all users");
    }
  }
  async getSingleUser(
    user_id: string,
  ): Promise<UserModel | null> {
    try {
      const singleVacant = await UserModel.findOne({
        where: { id: user_id },
      });
      return singleVacant;
    } catch (error) {
      throw new Error("Error searching for the single Vacant");
    }
  }
}

export const userService = new UserService();
