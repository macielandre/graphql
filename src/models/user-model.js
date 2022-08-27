const Mongodb = require('../databases/mongodb')
const UserSchema = require('../schemas/user-schema')

class UserModel {
    static getModel() {
        const connection = Mongodb.getOrCreateConnection()

        return connection.model('user', UserSchema, 'users')
    }

    static async getOne(query = {}) {
        const model = UserModel.getModel()
        
        return model.findOne(query).lean()
    }

    static async getAll() {
        const model = UserModel.getModel()

        return model.find({}).lean()
    }
}