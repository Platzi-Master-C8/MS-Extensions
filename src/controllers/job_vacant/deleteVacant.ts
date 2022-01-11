import { Request, ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const deleteVacant = async (req: Request, res: ResponseToolkit) => {
  const { user_id, vacant_id } = req.params;
  try {
    const deleteVacant = await jobService.deleteVacant(user_id, vacant_id);
    if(deleteVacant === 0) {
      return res.response({
        code: 404,
        message: 'Not exist'
      }).code(404);
    }
    return res.response({
      code: 200,
      message: 'DELETE'
    });
  } catch (error) {
    return res
      .response({
        error: "Something wrong searching for the vacant",
      })
      .code(401);
  }
};
