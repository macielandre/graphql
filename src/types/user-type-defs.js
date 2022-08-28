const userTypeDefs = `
    type User {
        id: ID!
        name: String!
        password: String!
        email: String!
    }

    type Query {
        users: [User]!
        user(name: String, password: String, email: String): User!
    }

    type Mutation {
        createUser(name: String!, password: String!, email: String!): User!
        updateUserFromId(id: ID!, name: String, password: String, email: String): User!
        deleteUserById(id: ID!): User!
    }
`

module.exports = userTypeDefs