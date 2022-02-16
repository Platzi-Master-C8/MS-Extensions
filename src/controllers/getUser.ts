import { Request, ResponseToolkit } from "@hapi/hapi";
// import { getUserProfile } from "../services/GetUserProfile.service";
import { userService } from "../services/User.service";

export const getUsers = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
  // const getData = await getUserProfile.getInfo(req.auth.artifacts.token);
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
