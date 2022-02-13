import { createVacant } from "../controllers/job_vacant/postVacant";
import { deleteVacant } from "../controllers/job_vacant/deleteVacant";
import { singleVacant } from "../controllers/job_vacant/getSingleVacant";
import { getAllVacant } from "../controllers/job_vacant/getAllVacant";
import { updateVacant } from "../controllers/job_vacant/patchVacant";
import { VERIFY_POST, VERIFY_SCHEMA} from "../helpers/validation_schema";
import { getUsers } from "../controllers/getUser";
import { postUser } from "../controllers/postUsers";

const API_VERSION: string  = '/api'

module.exports = [
  {
    //This endpoints is only for test porpuse
    method: "GET",
    options: {
      // auth: false
    },
    path: '/',
    handler: getUsers
  },
  {
    //This endpoints is only for test porpuse
    method: "POST",
    path: '/users',
    handler: postUser
  },
  {
    //Here is where the User is going to request all the job Vacant of him
    method: "GET",
    path: `${API_VERSION}/job-vacancies`,
    handler: getAllVacant,
  },
  {
    //Here the user is where is going to save vacants of his apply
    method: "POST",
    path: `${API_VERSION}/job-vacancies`,
    options: {
      validate: {
          payload: VERIFY_POST
      }
    },
    handler: createVacant,
  },
  {
    //Get JUST one vacant needs user_id, and the vacant_id
    method: "GET",
    path: `${API_VERSION}/job-vacancies/{vacant_id}`,
    handler: singleVacant,
  },
  {
    //Delete one vacant
    method: "DELETE",
    path: `${API_VERSION}/job-vacancies/{vacant_id}`,
    handler: deleteVacant,
  },
  {
    //Update one vacant with user_id and vacant_id
    method: "PATCH",
    path: `${API_VERSION}/job-vacancies/{vacant_id}`,
    options: {
      validate: {
          payload: VERIFY_SCHEMA
      }
    },
    handler: updateVacant
  }
];
