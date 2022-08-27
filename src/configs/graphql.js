const { makeExecutableSchema } = require('@graphql-tools/schema')

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

module.exports = {
    typeDefs,
    resolvers,
    executableSchema
}