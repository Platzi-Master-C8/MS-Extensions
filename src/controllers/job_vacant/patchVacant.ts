import { ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const updateVacant = async (req: any, res: ResponseToolkit) => {
  const { payload } = req;
  const { user_id, vacant_id } = req.params;

  try {
    const updateJobVacant = await jobService.updateJobVacant(vacant_id, user_id, payload,);

    if (updateJobVacant[0] === 0) {
      return res
        .response({
          code: 204,
          message: 'Not exist'
        })
        .code(204);
    }

    return res
      .response({
        code: 200,
        message: "UPDATE",
      })
      .code(200);
  } catch (error) {
     console.log(error)
     throw new Error('Something wrong')
  }
};
