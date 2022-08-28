const Mongodb = require('../databases/mongodb')
const UserSchema = require('../schemas/user-schema')

class UserModel {
    static getModel() {
        const connection = Mongodb.getOrCreateConnection()

        return connection.model('user', UserSchema, 'users')
    }

    static async insert(data) {
        const User = UserModel.getModel()
        const user = new User(data)

        await user.save()

        return user
    }

    static async findOne(query = {}) {
        const model = UserModel.getModel()

        return model.findOne(query)
    }

    static async find(query = {}) {
        const model = UserModel.getModel()

        return model.find()
    }

    static async updateOne(query, data) {
        const model = UserModel.getModel()

        return model.updateOne(query, data)
    }

    static async deleteOne(query) {
        const model = UserModel.getModel()

        return model.deleteOne(query)
    }
}

module.exports = UserModel