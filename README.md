## **Microservice Extension Squad API**
This API was developed with this stack: NodeJS, Hapi.dev, Typescript and Sequelize, Postgres.
At first this API work as a CRUD where we are going to save our JobVacants in our DB.

    GET /api/job_vacant
This endpoint with the method `GET` will return all the vacants the user have saved, al those in an `array`of `objects`.

    [
	    {
		    "id":  1, //ID of the JobVacant
		    "title":  "Dev Facebbok",//Title
		    "link":  "facebook/jobs",//Link to the Vacant
		    "company":  "Facebook",//Company
		    "salary":  "22222",//Salary show in the vacant
		    "date_application":  null,//Date of apply
		    "interest":  3,//Our interest in this vacant
		    "notes":  "Quiero este trabajo",//Some notes if we want
		    "user_id":  1,//User id
		    "createdAt":  "2021-12-06T23:44:49.142Z",//Create at
		    "updatedAt":  "2021-12-06T23:44:49.142Z"//Update
	    },
    ]

 
 With the `POST` method we will create/save in our DB the Vacant
 
      POST /api/job_vacant
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
		    "user_id":  1,//User id
		    "createdAt":  "2021-12-06T23:44:49.142Z",//Create at
		    "updatedAt":  "2021-12-06T23:44:49.142Z"//Update
    }
