import { createVacant } from "../controllers/job_vacant/postVacant";
import { deleteVacant } from "../controllers/job_vacant/deleteVacant";
import { singleVacant } from "../controllers/job_vacant/getSingleVacant";
import { getAllVacant } from "../controllers/job_vacant/getAllVacant";
import { updateVacant } from "../controllers/job_vacant/patchVacant";
const {verify_post,verify_schema} = require('../helpers/validation_schema');

const API_VERSION: string  = '/api'

module.exports = [
  {
    //This endpoints is only for test porpuse
    method: "GET",
    path: '/',
    handler: function (request, h) {

      return 'Hello World!';
  }
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
          payload: verify_post
      }
    },
    handler: createVacant,
  },
  {
    //Get JUST one vacant needs user_id, and the vacant_id
    method: "GET",
    path: `${API_VERSION}/job-vacancies/{user_id}/{vacant_id}`,
    handler: singleVacant,
  },
  {
    //Delete one vacant
    method: "DELETE",
    path: `${API_VERSION}/job-vacancies/{user_id}/{vacant_id}`,
    options: {
      validate: {
          payload: verify_schema
      }
    }, 
    handler: deleteVacant,
  },
  {
    //Update one vacant with user_id and vacant_id
    method: "PATCH",
    path: `${API_VERSION}/job-vacancies/{user_id}/{vacant_id}`,
    options: {
      validate: {
          payload: verify_schema
      }
    },
    handler: updateVacant
  }
];
