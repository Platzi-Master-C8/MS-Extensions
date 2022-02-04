import { ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const updateVacant = async (req: any, res: ResponseToolkit) => {
  const { payload } = req;
  const { user_id, vacant_id } = req.params;
  console.log(user_id, vacant_id)

  try {
    const updateJobVacant = await jobService.updateJobVacant(
      vacant_id,
      user_id,
      payload
    );

    if (updateJobVacant[0] === 0) {
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
        message: "UPDATE",
      })
      .code(200);
  } catch (error) {
    console.log(error);
    throw new Error("Something wrong");
  }
};
