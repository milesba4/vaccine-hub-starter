const express= require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

app.use(cors())

//parse incoming request bodies with JSON payload
app.use(express.json())

// log request info 
app.use(morgan("tiny"))

//setting up port 
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ` + PORT)
})