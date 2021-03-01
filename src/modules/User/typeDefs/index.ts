import { gql } from 'apollo-server';

export const typeDef = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(name: String!, email: String!): User
  }
`
