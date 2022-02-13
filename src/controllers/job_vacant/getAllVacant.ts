import { Request, ResponseToolkit } from "@hapi/hapi";
import { userService } from "../../services/userModel";
import { jobService } from "../../services/jobVacant.service";

export const getAllVacant = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
  //With this we can extract the sub key provide with the JWT token
  const { sub } = req.auth.credentials;
  console.log(req.auth.credentials.sub);
  try {
    //Verify if the user exist, if not, create
    const getSingleUser = await userService.getSingleUser(`${sub}`);
    if (getSingleUser === null) {
      await userService.addUser({ id: `${sub}` });
    }
    //get all vacants of the user
    const getVacant = await jobService.getVacants(sub);
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
