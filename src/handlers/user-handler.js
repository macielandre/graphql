const router = require('express').Router()
const { graphqlHTTP } = require('express-graphql')
const { executableSchema } = require('../configs/graphql')

const data = {
    users: [
        { id: '001', name: 'ANDRE'},
        { id: '002', name: 'PETER' }
    ]
}

router.get('/', graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
}))

module.exports = router