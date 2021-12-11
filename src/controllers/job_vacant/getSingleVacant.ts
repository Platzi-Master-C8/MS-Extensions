import { Request, ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const singleVacant = async (req: Request, res: ResponseToolkit) => {
  const { user_id, vacant_id } = req.params;

  try {
    const getSingleVacant = await jobService.getSingleVacant(
      user_id,
      vacant_id
    );
    if (getSingleVacant === null) {
      return res
        .response({
          error: "Dont exist",
        })
        .code(200);
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
