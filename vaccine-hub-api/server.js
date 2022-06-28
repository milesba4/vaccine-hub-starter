const express= require("express")
const cors = require("cors")
const morgan = require("morgan")
const {PORT } = require("./config")
const {BadRequestError, NotFoundError} = require("./utils/errors")
const app = express()

app.use(cors())

//parse incoming request bodies with JSON payload
app.use(express.json())

// log request info 
app.use(morgan("tiny"))

app.use((req,res,next)=>{
return next(new NotFoundError())
})

app.use((err,req,res,next)=>{  // generic error handler
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
  error:{message,status}
  })
})

//setting up port 
app.listen(PORT, () => {
  console.log(`🧨 Server listening on port ` + PORT)
})