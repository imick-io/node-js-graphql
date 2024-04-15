const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type PostData {
        posts: [Post!]!
        totalPosts: Int!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String
        posts: [Post!]!
    }

    type AuthData {
        userId: ID!
        token: String!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    input PostInput {
        title: String!
        content: String!
        imageUrl: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        posts(page: Int!): PostData!
    }

    type RootMutation {
        createUser(userInput: UserInput): User!
        createPost(postInput: PostInput): Post!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
