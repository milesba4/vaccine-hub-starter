const {BadRequestError,UnauthorizedError} = require("../utils/errors")
const db = require("../db")
class User {

static async login(credentials){
// User submits their email and passwords
// if any feilds missing throw error

// look up user in db by email
// if user found, compare the submitted password

// with the password in db
// if there is a match, return the user

// if anything goes wrong throw an error
throw new UnauthorizedError("Invalid credentials")
}

static async register(credentials){
// user should submit email, password
// if any of these feilds are missing, throw an error
const requiredFeilds = ["email", "password", "first_name", "last_name", "location", "date"]

requiredFeilds.forEach(field=>{
    if(!credentials.hasOwnProperty(field)){
    throw new BadRequestError(`Missing ${field} in request body`)
    }
})

// Make sure user doesnt already exist in the system 
// if one does, throw an error

//take the user's password, and hash it 
// take the user's email and lowecase it 

//create a new user in the database with the email and password

//return user
}

}



module.exports = User