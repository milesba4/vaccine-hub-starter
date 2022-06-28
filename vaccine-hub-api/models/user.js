const {BadRequestError,UnauthorizedError} = require("../utils/errors")
const bcrypt = require("bcrypt")
const db = require("../db")
const{BCRYPT_WORK_FACTOR} = require("../config")
class User {

static async login(credentials){

    const requiredFeilds = ["email", "password", "first_name", "last_name", "location","date"]
    requiredFeilds.forEach(field=>{
        if(!credentials.hasOwnProperty(field)){
        throw new BadRequestError(`Missing ${field} in request body`)
        }
    })

    const user = await User.fetchUserByEmail(credentials.email)

    if(user){
        const isValid = await bcrypt.compare(credentials.password,user.password)
        if(isValid){
            return user
        }
    }
    
throw new UnauthorizedError("Invalid credentials")
}

static async register(credentials){
// user should submit email, password
// if any of these feilds are missing, throw an error
const requiredFeilds = ["email", "password", "first_name", "last_name", "location","date"]
requiredFeilds.forEach(field=>{
    if(!credentials.hasOwnProperty(field)){
    throw new BadRequestError(`Missing ${field} in request body`)
    }
})

if(credentials.email.indexOf("@")<=0){
    throw new BadRequestError("Invalid email")
}
console.log("check",credentials)
// Make sure user doesnt already exist in the system 
// if one does, throw an error

const existingUser = await User.fetchUserByEmail(credentials.email)
if(existingUser){
    throw new BadRequestError(`Duplicate email: ${credentials.email}`)
}
console.log("exist=",existingUser)

const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
//take the user's password, and hash it 
// take the user's email and lowercase it 

const lowercasedEmail = credentials.email.toLowerCase()
//create a new user in the database with the email and password


const result = await db.query(
`INSERT INTO users(
    email,
    password,
    first_name,
    last_name,
    location,
    date
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, email, first_name, last_name, location, date;
`,[lowercasedEmail, hashedPassword, credentials.first_name, credentials.last_name,credentials.location, credentials.date])

//return user
console.log("result =", result)
const user = result.rows[0]
console.log("user=", user)
return user
}
static async fetchUserByEmail(email){
    if(!email){
        throw new BadRequestError("No email provided")
    }

    const query = `SELECT * FROM users WHERE email = $1`

    const result = await db.query(query, [email.toLowerCase()])

    const user = result.rows[0]

    return user

}
}



module.exports = User