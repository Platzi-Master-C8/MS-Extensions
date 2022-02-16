import { Request, ResponseToolkit } from "@hapi/hapi";
import { userService } from "../../services/User.service";
import { jobService } from "../../services/jobVacant.service";
import { getUserProfile } from "../../services/GetUserProfile.service";

export const getAllVacant = async (
  req: Request,
  res: ResponseToolkit
): Promise<object> => {
  //With this we can extract the sub key provide with the JWT token
  const { sub } = req.auth.credentials;
  try {
    //Verify if the user exist, if not, create
    const getSingleUser = await userService.getSingleUser(`${sub}`);
    if (getSingleUser === null) {
      //with the auth0 token get info from profile: email, name
      const data = await getUserProfile.getInfo(req.auth.artifacts.token);
      const { sub, name, email = "" } = data.data;
      let createUser = {
        id: sub,
        name,
        email,
      };
      await userService.addUser(createUser);
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
