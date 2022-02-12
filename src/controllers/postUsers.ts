import { ResponseToolkit } from "@hapi/hapi";
import { userService } from "../services/userModel";

export const postUser = async (
   req: any,
   res: ResponseToolkit
 ): Promise<object> => {

   try {
     const createVacant = await userService.addUser(req.payload);
     return res
       .response({
         vacant: createVacant,
         message: "CREATE",
       })
       .code(201);
   } catch (error) {
     console.log(error)
     return res
       .response({
         error: "Something wrong creating Vacant",
       })
       .code(401);
   }
 };