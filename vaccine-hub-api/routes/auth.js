const express = require("express")
const User = require("../models/user")
const router = express.Router()
const user = require("../models/user")

router.post("/login",async(req,res,next)=>{
try{
// take the users email and password and attempting to authenticate them

}catch(err){
next(err)
}

})
router.post("/register", async(req,res,next)=>{
    try{
        
        //Take users email,password, rsvp status 
        // create new user in db
        }catch(err){
        next(err)
        }
})

module.exports = router