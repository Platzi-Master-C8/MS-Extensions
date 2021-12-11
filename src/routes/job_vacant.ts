import { createVacant } from "src/controllers/job_vacant/postVacant";
import { deleteVacant } from "src/controllers/job_vacant/deleteVacant";
import { singleVacant } from "src/controllers/job_vacant/getSingleVacant";
import { getAllVacant } from "../controllers/job_vacant/getAllVacant";

module.exports = [
  {
    //Here is where the User is going to request all the job Vacant of him
    method: "GET",
    path: "/api/job_vacant",
    handler: getAllVacant,
  },
  {
    //Here the user is where is going to save vacants of his apply
    method: "POST",
    path: "/api/job_vacant",
    handler: createVacant,
  },
  {
    //Get JUST one vacant needs user_id, and the vacant_id
    method: "GET",
    path: "/api/job_vacant/{user_id}/{vacant_id}",
    handler: singleVacant,
  },
  {
    method: "DELETE",
    path: "/api/job_vacant/{user_id}/{vacant_id}",
    handler: deleteVacant,
  },
];
