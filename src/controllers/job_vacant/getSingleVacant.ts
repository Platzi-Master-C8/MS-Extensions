import { Request, ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const singleVacant = async (req: Request, res: ResponseToolkit) => {
  //We need to receive the vacant_id
  const { vacant_id } = req.params;
  //With this we can extract the sub key provide with the JWT token
  const { sub } = req.auth.credentials;
  const user_id = `${sub}`
  try {
    const getSingleVacant = await jobService.getSingleVacant(
      user_id,
      vacant_id
    );
    if (getSingleVacant === null) {
      return res
        .response({
          code: 404,
          message: "Not exist",
        })
        .code(404);
    }

    return res
      .response({
        code: 200,
        vacant: getSingleVacant,
        message: "OK",
      })
      .code(200);
  } catch (error) {
    return res
      .response({
        error: "Something wrong searching for the vacant",
      })
      .code(401);
  }
};
