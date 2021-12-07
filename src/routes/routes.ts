import * as controller from "../controllers/JobVacant.controller";


module.exports = [
   {
      method: 'GET',
      path: '/api/job_vacant',
      handler: controller.getAll,
   },
   {
      method: 'POST',
      path: '/api/job_vacant',
      handler: controller.createVacant,
   }
]