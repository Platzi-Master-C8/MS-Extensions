## **Microservice Extension Squad API**
This API was developed with this stack: NodeJS, Hapi.dev, Typescript and Sequelize, Postgres.
At first this API work as a CRUD where we are going to save our JobVacants in our DB.

    GET /api/job-vacancies
This endpoint with the method `GET` will return all the vacants the user have saved, al those in an `array`of `objects`.

    [
	    {
		    "id":  1, //ID of the JobVacant
		    "title":  "Dev Facebbok",//Title
		    "link":  "facebook/jobs",//Link to the Vacant
		    "company":  "Facebook",//Company
		    "salary":  "22222",//Salary show in the vacant
		    "date_application":  TIMESTAMP,//Date of apply
		    "interest":  3,//Our interest in this vacant
		    "notes":  "Quiero este trabajo",//Some notes if we want
			 "salary_from": 2222,
			 "salary_to": 222222,
			 "currency": "USD"
		    "user_id":  1,//User id
		    "createdAt":  "2021-12-06T23:44:49.142Z",//Create at
		    "updatedAt":  "2021-12-06T23:44:49.142Z"//Update
	    },
    ]


 With the `POST` method we will create/save in our DB the Vacant

      POST /api/job-vacancies
and we have to receive in the `req.payload` the following `JSON`

    {
		    "id":  1, //ID of the JobVacant
		    "title":  "Dev Facebbok",//Title
		    "link":  "facebook/jobs",//Link to the Vacant
		    "company":  "Facebook",//Company
		    "salary":  "22222",//Salary show in the vacant
		    "date_application":  null,//Date of apply
		    "interest":  3,//Our interest in this vacant
		    "notes":  "Quiero este trabajo",//Some notes if we want
			 "salary_from": 2222,//salary_from and salary_to it would be the range
			 "salary_to": 222222,
			 "currency": "USD",
		    "user_id":  1,//User id
		    "createdAt":  "2021-12-06T23:44:49.142Z",//Create at
		    "updatedAt":  "2021-12-06T23:44:49.142Z"//Update
    }
    
   For delete a register we will use the `DELETE` method

     DELETE  /api/job-vacancies/{user_id}/{vacant_id}
We need to provide the `user_id` and the `id` of the vacant in the `req.params`, if exist this going to `DELETE` the register and return a `JSON`

    {
    	code:  200,
    	message:  'DELETE',
    }
If the Vacant not exist, the `JSON` returned would be this:

    {
    	"code":  400,
    	"message":  "Not exist"
    }

    
When we want to get a single(Just one) Vacant we need to use a `GET` method.

     GET  /api/job-vacancies/{user_id}/{vacant_id}

 the same way we use it with the `DELETE` method, in this case `JSON` it would be like this:

    {
    	"code":  200,
    	"vacant":  {
    		"id":  9,
    		"title":  "Dev 3",
    		"link":  "google/job 3",
    		"company":  "Google 3",
    		"salary":  "22222",
    		"date_application":  null,
    		"interest":  3,
    		"notes":  "Quiero este trabajo",
			"salary_from": 2222,
			"salary_to": 222222,
			"currency": "USD"
    		"user_id":  3,
    		"createdAt":  "2022-01-05T13:04:47.844Z",
    		"updatedAt":  "2022-01-05T13:04:47.844Z"
    	},
    	"message":  "OK"
    }

If the Vacant not exist, the `JSON` returned would be this:

    {
    	"code":  400,
    	"message":  "Not exist"
    }

When we need to `update` one Vacant we have to use `PATCH` method. You must have to follow the rules when you create a Vacant with the `POST` method.

     PATCH  /api/job-vacancies/{user_id}/{vacant_id}

Like the two previus method. The `JSON` returned in here it would be like this.

    {
    	"code":  200,
    	"message":  "UPDATE"
    }
If the Vacant not exist, the `JSON` returned would be this:

	{
		"code":  400,
		"message":  "Not exist"
	}