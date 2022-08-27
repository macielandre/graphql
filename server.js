import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const app = express()
const port = 80

const data = {
    users: [
        { id: '001', name: 'ANDRE'},
        { id: '002', name: 'PETER' }
    ]
}

const typeDefs = `
    type User {
        id: ID!
        name: String!
    }

    type Query {
        users: [User]
    }
`

const resolvers = {
    Query: {
        users: (obj, args, context, info) => context.users
    }
}

const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/graphql',
    graphqlHTTP({
        schema: executableSchema,
        context: data,
        graphiql: true,
    })
  )

app.listen(port, () => {
    console.log(`Running a server at http://localhost:${port}`)
})