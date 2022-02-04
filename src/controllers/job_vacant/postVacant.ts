import { ResponseToolkit } from "@hapi/hapi";
import { jobService } from "../../services/jobVacant.service";

export const createVacant = async (
   req: any,
   res: ResponseToolkit
 ): Promise<object> => {
   const {
     title,
     link,
     company,
     salary,
     date_application,
     interest,
     notes,
     salary_from,
     salary_to,
     currency,
     remote,
     status,
     user_id,
   } = req.payload;
 
   const vacantInfo = {
     title,
     link,
     company,
     salary,
     date_application,
     interest,
     notes,
     salary_from,
     salary_to,
     currency,
     remote,
     status,
     user_id,
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
     return res
       .response({
         error: "Something wrong creating Vacant",
       })
       .code(401);
   }
 };