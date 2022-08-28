require('dotenv').config({ path: 'env/.env' })

const { PORT } = process.env

const express = require('express')
const cors = require('cors')

const userRouter = require('./src/handlers/user-handler.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`[server] Running server at http://localhost:${PORT}`)
})