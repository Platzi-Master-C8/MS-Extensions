import { Request, ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const getAllVacant = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
  try {
    const getVacant = await jobService.getVacants();
    return res
      .response({
        code: 200,
        job_vacants: getVacant,
        message: "OK",
      })
      .code(200);
  } catch (error) {
    return res
      .response({
        error: "Something wrong with the service",
      })
      .code(401);
  }
};






