import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import { ModelInitializer } from './ModelInitializer';


//This interface is indicating us wich are the field the JobVacant object will have.
export interface JobVacantAttributes {
   id: number;
   title: string;
   link: string;
   company: string;
   // salary_from: number;
   // salary_to: number;
   // currency: string
   date_application: Date;
   interest: number;
   notes: string;
   user_id: number
}

export interface JobCreationAttributes extends Optional<JobVacantAttributes, "id"> {}

export class JobVacant extends Model<JobVacantAttributes, JobCreationAttributes> {
   public id!: number;
   public title!: string;
   public link!: string;
   public company!: string;
   // public salary_from!: number;
   // public salary_to!: number;
   // public currency!: string;
   public date_application!: Date;
   public interest!: number;
   public notes!: string;
   public user_id!: number

   public readonly createdAt!: Date;
   public readonly updatedAt!: Date;


}

export class JobVacantInitializer implements ModelInitializer {

   constructor(private client: Sequelize) {};

   initialize(): void {
      JobVacant.init({
         id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
         },
         title: {
            allowNull: false,
            type: DataTypes.STRING(128)
         },
         link: {
            allowNull: false,
            type: DataTypes.STRING(128)
         },
         company: {
            allowNull: false,
            type: DataTypes.STRING(128)
         },
         // salary_from: {
         //    type: DataTypes.STRING(128)
         // },
         // salary_to: {
         //    type: DataTypes.STRING(128)
         // },
         // currency: {
         //    type: new DataTypes.STRING(128)
         // },
         date_application: {
            type: DataTypes.DATEONLY
         },
         interest: {
            allowNull: false,
            type: DataTypes.INTEGER
         },
         notes: {
            allowNull: false,
            type: new DataTypes.STRING(128)
         },
         user_id: {
            allowNull: false,
            type: new DataTypes.INTEGER
         }
      }, {
         sequelize: this.client,
         modelName: 'job_vacant'
      })
   };
}
