require('dotenv').config()

// About env setting
const dbName = "graphql"
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost"

console.log(PORT, MONGODB_URI)