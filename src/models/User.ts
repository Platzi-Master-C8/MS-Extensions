import { DataTypes, Model, Sequelize, Optional } from "sequelize";
import { ModelInitializer } from "./ModelInitializer";


export interface User {
   id: number;
   name: string,
   email: string,
   website: string,
   date_of_birth: Date,
   gender: string,
   hashtags: string,
}

export interface UserCreationAttributes extends Optional<User, "id"> {}

export class UserModel extends Model<User, UserCreationAttributes> {
   public id!: number;
   public name!: string;
   public email!: string;
   public website!: string;
   public date_of_birth!: Date;
   public gender!: string;
   public hashtags!: string;

}

export class UserInitializer implements ModelInitializer {
   constructor(private client: Sequelize) {}

   initialize(): void {
      UserModel.init({
         id: {
            primaryKey: true,
            autoIncrement: true,
            type: new DataTypes.INTEGER,
          },
          name: {
             allowNull: false,
             type: DataTypes.STRING(128)
          },
          email: {
            allowNull: false,
             type: DataTypes.STRING(128)
         },
          website: {
            allowNull: true,
            type: DataTypes.STRING(128)
         },
         date_of_birth: {
            allowNull: true,
            type: DataTypes.DATEONLY
         },
         gender: {
            allowNull: true,
            type: DataTypes.STRING(128)
         },
         hashtags: {
            allowNull: true,
            type: DataTypes.STRING(128)
         },
      }, {
         sequelize: this.client,
         timestamps: false,
         modelName: "users"
      })
   };
}