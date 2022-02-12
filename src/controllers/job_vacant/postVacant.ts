import { ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const createVacant = async (
  req: any,
  res: ResponseToolkit
): Promise<object> => {
  //With this we can extract the sub key provide with the JWT token
  const { sub } = req.auth.credentials;

  const vacantInfo = {
    ...req.payload,
    user_id: sub,
  };
  try {
    const createVacant = await jobService.addVacant(vacantInfo);
    return res
      .response({
        code: 201,
        vacant: createVacant,
        message: "CREATE",
      })
      .code(201);
  } catch (error) {
    console.log(error);
    return res
      .response({
        error: "Something wrong creating Vacant",
      })
      .code(401);
  }
};
