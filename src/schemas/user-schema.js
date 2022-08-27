const { Schema } = require('mongoose')

const UserSchema = new Schema({
    id: { type: String, unique: true },
    name: { type: String }
})

module.exports = UserSchema