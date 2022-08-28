const mongoose = require('mongoose')

const { MONGO_URI } = process.env

let connection = null


class Mongodb {
    static getOrCreateConnection() {
        if(!connection) {
            connection = Mongodb.createConnection()
        }

        return connection
    }

    static createConnection() {
        const options = {
            family: 4
        }

        return mongoose.createConnection(MONGO_URI, options)
    }
}

module.exports = Mongodb