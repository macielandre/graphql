const router = require('express').Router()
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const userTypeDefs = require('../types/user-type-defs')
const userResolvers = require('../resolvers/user-resolvers')

router.get('/', graphqlHTTP({
        schema: makeExecutableSchema({ typeDefs: userTypeDefs, resolvers: userResolvers }),
        graphiql: true,
    })
)

router.post('/', graphqlHTTP({
        schema: makeExecutableSchema({ typeDefs: userTypeDefs, resolvers: userResolvers }),
        graphiql: true,
    })
)

module.exports = router