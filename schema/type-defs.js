const { gql } = require('apollo-server');

const typeDefs = gql `
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int! 
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: UsersResults
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = TAPA
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }

    type Mutation{
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality{
        INDIA
        DESH 
        PUNJAB 
        TAPA
        GURGAON
    }

    type UsersSuccessfulResult {
        users: [User!]!
    }

    type UsersErrorResult{
        message: String!
    }

    union UsersResults = UsersSuccessfulResult | UsersErrorResult

`;

module.exports = { typeDefs };