import { Request, ResponseToolkit } from "@hapi/hapi";
import { JobVacantService } from "../services/jobVacant.service";

const jobService = new JobVacantService();

export const getAll = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
  try {
    const getVacant = await jobService.getVacants();
    return res.response(getVacant).code(200);
  } catch (error) {
    console.log(error);
    return {
      error: "Something wrong to get all Vacants",
    };
  }
};

export const createVacant = async (
  req: any,
  res: ResponseToolkit
): Promise<object> => {
  const {
    title,
    link,
    company,
    salary,
    date_application,
    interest,
    notes,
    user_id,
  } = req.payload;

  const vacantInfo = {
    title,
    link,
    company,
    salary,
    date_application,
    interest,
    notes,
    user_id,
  };
  try {
     console.log(vacantInfo)
    const createVacant = await jobService.addVacant(vacantInfo);
    return createVacant;
  } catch (error) {
     console.log(error)
    return {
      error: "Something wron creating Vacant",
    };
  }
};
