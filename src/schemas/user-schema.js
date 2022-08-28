const { Schema } = require('mongoose')

const UserSchema = new Schema({
    email: { type: String },
    password: { type: String },
    name: { type: String }
}, { timestamps: true })

module.exports = UserSchema