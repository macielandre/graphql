const UserService = require('../services/user-service')

const userResolvers = {
    Query: {
        users: () => UserService.getAll(),
        user: async (parent, query) => await UserService.findOne(query)
    },
    Mutation: {
        createUser: async (parent, { name, password, email }) => {
            return UserService.create({ name, password, email })
        },
        updateUserFromId: async (parent, args) => {
            return UserService.updateUserFromId(args)
        },
        deleteUserById: async (parent, { id }) => {
            return UserService.deleteUserById(id)
        }
    }
}

module.exports = userResolvers