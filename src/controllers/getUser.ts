import { Request, ResponseToolkit } from "@hapi/hapi";
import { linkedinService } from "../services/linkedin.service";
import { userService } from "../services/userModel";

export const getUsers = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
  console.log(req.auth.credentials)
  const getData = await linkedinService.getInfo(req.auth.artifacts.token);
  console.log(getData)
  try {
    const getVacant = await userService.getUsers();
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
