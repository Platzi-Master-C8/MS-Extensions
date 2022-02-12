import {
  JobVacant,
  JobVacantAttributes,
  JobCreationAttributes,
} from "../models/JobVacant";
export class JobVacantService {
  //this method is use to create and save in the database, following the rules of the interface
  async addVacant(
    jobData: JobCreationAttributes
  ): Promise<JobVacantAttributes> {
    try {
      const createVacant = await JobVacant.create(jobData);
      return createVacant;
    } catch (error) {
      console.log(error)
      throw new Error("Error on creating a vacant");
    }
  }

  //this method is use to get all the records in our database
  async getVacants(user_id: any): Promise<Array<JobVacant>> {
    try {
      const getVacants = await JobVacant.findAll({ where: { user_id } });
      return getVacants;
    } catch (error) {
      console.log(error)
      throw new Error("Error on getting all Vacants");
    }
  }
  //this method is going to get ONE vacant we must provide de user_id and vacant_id
  async getSingleVacant(
    user_id: string,
    vacant_id: number
  ): Promise<JobVacant | null> {
    try {
      const singleVacant = await JobVacant.findOne({
        where: { user_id, id: vacant_id },
      });
      return singleVacant;
    } catch (error) {
      throw new Error("Error searching for the single Vacant");
    }
  }
  //delete the vacant in our table we must have to provide de user_id and vacant_id
  async deleteVacant(
    user_id: string,
    vacant_id: number
  ): Promise<number> {
    try {
      const deleteVacant = await JobVacant.destroy({
        where: { user_id, id: vacant_id },
      });
      return deleteVacant;
    } catch (error) {
      throw new Error("Error deleting vacant");
    }
  }

  async updateJobVacant(
    vacant_id: number,
    user_id: string,
    data: object
  ): Promise<[number, JobVacant[]]> {
    try {
      const update = await JobVacant.update(data, { where: { id: vacant_id, user_id } });
      return update;
    } catch (error) {
      throw new Error("Error to update the vacant");
    }
  }
}

export const jobService = new JobVacantService();
