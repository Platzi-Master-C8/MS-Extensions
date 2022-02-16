import { Request, ResponseToolkit } from "@hapi/hapi";
import { userService } from "../services/User.service";

export const getUsers = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
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
