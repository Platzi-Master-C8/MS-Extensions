import { Request, ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const deleteVacant = async (req: Request, res: ResponseToolkit) => {
  const { vacant_id } = req.params;
  console.log(req)
  //With this we can extract the sub key provide with the JWT token
  const { sub } = req.auth.credentials;
  const user_id = `${sub}`;
  try {
    const deleteVacant = await jobService.deleteVacant(user_id, vacant_id);
    if (deleteVacant === 0) {
      return res
        .response({
          code: 404,
          message: "Not exist",
        })
        .code(404);
    }
    return res.response({
      code: 200,
      message: "DELETE",
    });
  } catch (error) {
    return res
      .response({
        error: "Something wrong searching for the vacant",
      })
      .code(401);
  }
};
