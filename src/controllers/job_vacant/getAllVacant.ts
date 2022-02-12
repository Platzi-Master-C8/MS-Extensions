import { Request, ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const getAllVacant = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
  //With this we can extract the sub key provide with the JWT token
  const { sub } = req.auth.credentials;
  try {
    const getVacant = await jobService.getVacants(sub);
    console.log(getVacant);
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
