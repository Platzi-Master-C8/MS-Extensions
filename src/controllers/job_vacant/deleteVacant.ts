import { Request, ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const deleteVacant = async (req: Request, res: ResponseToolkit) => {
  const { user_id, vacant_id } = req.params;
  try {
    const deleteVacant = await jobService.deleteVacant(user_id, vacant_id);
    return deleteVacant;
  } catch (error) {
    return res
      .response({
        error: "Something wrong searching for the vacant",
      })
      .code(401);
  }
};
