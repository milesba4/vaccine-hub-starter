const express = require("express")
const User = require("../models/user")
const router = express.Router()
// const user = require("../models/user")

router.post("/login",async(req,res,next)=>{
try{
    const user = await User.login(req.body) // take the users email and password and attempting to authenticate them
    return res.status(200).json({user})

}catch(err){
next(err)
}

})
router.post("/register", async(req,res,next)=>{
    try{
        console.log("req body=",req.body)
        const user = await User.register(req.body)
        return res.status(200).json({user})
        }catch(err){
        console.log("hello")
        next(err)
        }
})

module.exports = router