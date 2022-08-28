const { query } = require("express")
const UserModel = require("../models/user-model")

class UserService {
    static async getAll(query = {}) {
        return UserModel.find()
    }

    static async findOne(query = {}) {
        return UserModel.findOne(query)
    }

    static async deleteUserById(id) {
        const query = { _id: id }
        const user = await UserService.findOne(query)

        await UserModel.deleteOne(query)

        return user
    }

    static async create(data) {
        return UserModel.insert(data)
    }

    static async updateUserFromId(data) {
        const query = { _id: data.id }
        const user = await UserService.findOne(query)

        delete data.id

        await UserModel.updateOne(query, data)
        
        return user
    }
}

module.exports = UserService