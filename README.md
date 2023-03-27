# API End Point Documentation : 

## USER ENDPOINTS : 

- ### ***GET* User** 
  - Description : Fetches a user
  - Endpoint : /user/getById
  - Method : GET
  - Params : id -> Number <Required>
  - Body : none
  - Response : 
    - {
    - "username": "FAIZAN",
    - "id": 1,
    - "roleId": 1
    - }

- ### ***GET* Users**
  - Description : Fetches multiple users
  - Endpoint : /user/
  - Method : GET 
  - Params : 
      - offset -> Number <Optional>
	  - limit -> Number <Optional>
	  - sortBy -> String <Optional>
    - isDescending -> Boolean <Optional>
    - groupBy -> String <Optional>
  - Body : none
  - Response : 
  [
    {
        "username": "FAIZAN",
        "id": 1,
        "Role": {
            "name": "Super Admin"
        }
    },
    {
        "username": "FAIZANN",
        "id": 2,
        "Role": {
            "name": "Super Admin"
        }
    },
    {
        "username": "FAIZANNN",
        "id": 3,
        "Role": {
            "name": "Super Admin"
        }
    }
]


- ### ***ADD* User**
  - Description : "Inserts a single user"
  - Endpoint : /user/
  - Method : POST
  - Params : none
  - Body : User tuple
		{
			"username": "Faizan3493",
      "password": "faizan",
  		"roleId": 1,
  		"createdBy": 1,
  		"updatedBy":1
		}
  - Response : User successfully inserted

- ### ***Update* User PUT**
  - Endpoint : /user/
  - Description : Replace a single user with a new one
  - Method : PUT
  - Params : id -> Number <Required>
  - Body : Tuple of user fields
{
    "username": "Faizan3543",
    "password": "faizan",
    "roleId": 1,
    "createdBy": 14,
    "updatedBy": 14
}
  - Response : User successfully updated


- ### ***Update* User PATCH**
  - Endpoint : /user/
  - Description : Updates certain fields of the user
  - Method : PATCH
  - Params : id -> Number <Required>
  - Body : Fields that need to be updated
{
  "username": "Faizan",
  "password": "faizan32432"
}
  - Response : Record successfully updated

- ### ***Delete* User**
  - Endpoint : /user/delete
  - Description : Sets the user to be deleted
  - Method : PATCH
  - Params : id -> Number <Required>
  - Body : None
  - Response : Deleted user successfully


## ROLE ENDPOINTS : 

- ### ***GET* Role**
  - Endpoint : /role/getById
  - Description : Fetches a role
  - Method : GET
  - Params : id -> Number <Required>
  - Body : none
  - Response : {
    "id": 1,
    "name": "Super Admin",
    "createdBy": 1,
    "updatedBy": 1,
    "deletedBy": null,
    "deletedAt": null,
    "createdAt": "2023-03-24T09:03:04.000Z",
    "updatedAt": "2023-03-24T09:03:04.000Z"
}


- ### ***GET* Roles**
  - Endpoint : /role/
  - Description : Fetches multiple roles
  - Method : GET 
  - Params : 
      - offset -> Number <Optional>
	  -  limit -> Number <Optional>
	  -  sortBy -> String <Optional>
    -  isDescending -> Boolean <Optional>
    -  groupBy -> String <Optional>
  - Body : none
  - Response : [
    {
        "id": 1,
        "name": "Super Admin",
        "createdBy": 1,
        "updatedBy": 1,
        "deletedBy": null,
        "deletedAt": null,
        "createdAt": "2023-03-24T09:03:04.000Z",
        "updatedAt": "2023-03-24T09:03:04.000Z"
    }
]


- ### ***ADD* Roles**
  - Endpoint : /user/
  - Description : Add a role or multiple roles
  - Method : POST
  - Params : none
  - Body : Role tuples
	{
		"name": "Customer",
  	"createdBy": 1,
  	"updatedBy":1
	}
  - Response : Record inserted successfully

- ### ***Update* Role PUT**
  - Endpoint : /role/
  - Description : Replaces specific role
  - Method : PUT
  - Params : id -> Number <Required>
  - Body : Tuple of role fields
{
    "name": "Producer",
    "createdBy": 14,
    "updatedBy": 14
}
  - Response : Roles successfully updated


- ### ***Update* Role PATCH**
  - Endpoint : /role/
  - Description : Updates specific role fields
  - Method : PATCH
  - Params : id -> Number <Required>
  - Body : A Object that contains the fields that need to be updated
{
  "name": "Faizan"
}
  - Response : Record successfully updated

- ### ***Delete* Role**
  - Endpoint : /role/delete
  - Description : Deletes the specified role
  - Method : PATCH
  - Params : id -> Number <Required>
  - Body : None
  - Response : Record successfully deleted