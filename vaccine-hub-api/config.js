require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT): 3001

function getDatabaseUri(){
const dbUser = process.env.DATABASE_USER || "postgres"
const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS): "postgres"
const dbHost = process.env.DATABASE_HOST || "localhost"
const dbPort = process.env.DATABASE_PORT || 5432
const dbName = process.env.DATABASE_NAME || "vaccine_hub"

// if the DATABASE_URL environment variable exists, use that
//else create the dbconnection string ourselves
return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}
console.log("Vaccine Hub Config:".red)
console.log("PORT:".blue,PORT)
console.log("Database URI:".blue, getDatabaseUri())
console.log("------".yellow)

module.exports = {
PORT,
getDatabaseUri,

}