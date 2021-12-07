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
      throw new Error("Error on creating a vacant");
    }
  }

  //this method is use to get all the records in our the database
  async getVacants(): Promise<Array<JobVacant>> {
    try {
      const getVacants = await JobVacant.findAll();
      return getVacants;
    } catch (error) {
      throw new Error("Error on getting all Vacants");
    }
  }
}
