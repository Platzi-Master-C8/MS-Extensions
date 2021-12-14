import { ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const updateVacant = async (req: any, res: ResponseToolkit) => {
  const { payload } = req;
  const { user_id, vacant_id } = req.params;

  try {
    const updateJobVacant = await jobService.updateJobVacant(vacant_id, user_id, payload,);
    return res.response(updateJobVacant).code(200);
  } catch (error) {
     console.log(error)
     throw new Error('Something wrong')
  }
};
