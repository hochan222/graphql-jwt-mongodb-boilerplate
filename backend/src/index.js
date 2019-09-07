import mongoose from 'mongoose';
import { GraphQLServer } from 'graphql-yoga'
require('dotenv').config()

import User from './models/user'

// About env setting
const dbName = "graphql-boilerplate"
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost"

const resolvers = {
    Query: {
        info: () => `This is the API of a graphql boilerplate`,
        feed: async() => {
            return await User.find()
        }
    },
    Mutation: {
        createUser: async (root, args) => {
            return await User.create({
                email: args.email,
                password: args.password
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start((PORT) => console.log(`Server is running`))

// mongodb
mongoose.Promise = global.Promise
mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true,
      useFindAndModify: false }
).then(console.log('connect db'))