import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose';
import logger from 'morgan'
require('dotenv').config()

import schema from './schema'

// About env setting
const dbName = "graphql-boilerplate"
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost"

const server = new GraphQLServer({ schema })
server.express.use(logger("dev"))
server.start((PORT) => console.log(`Server is running`))

// mongodb
mongoose.Promise = global.Promise
mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true,
      useFindAndModify: false }
).then(console.log('connect db'))
