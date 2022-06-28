const {UnauthorizedError} = require("../utils/errors")

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
// user should submit email, password, rsvp status, and # of guests 
// if any of these feilds are missing, throw an error


// Make sure email doesnt already exist in the system 
// if one does, throw an error

//take the user's password, and hash it 
// take the user's email and lowecase it 

//create a new user in the database with the email and password

//return user
}

}



module.exports = User