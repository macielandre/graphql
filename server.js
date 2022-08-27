const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const userRouter = require('./src/handlers/user-handler.js')

const app = express()
const port = 80

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Running a server at http://localhost:${port}`)
})