const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Service {
    name: String!
  }

  type Appointment {
    userId: ID!,
    dogId: ID!,
    from: Date!
    to: Date!
  }

  type Provider {
    _id: ID!
    name: String!
    email: String!
    phoneNumber: String!
    address: String!
    about: String!
    service: Service
    appointments: [Appointment]
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    phoneNumber: String!
    address: String!
    petsCount: Int!
    petsunt: Int!
  }

  type Dog {
    _id: ID!
    name: String!
    breed: String!
    age: Int!
    weight: Int!
    gender: String!
    veterinaryContact: String!
    medicated: Boolean!
    medications: String
  }

  type Veterinarian {
    _id: ID!
    name: String
    email: String!
    phoneNumber:String !
    address:String!
  }

  type Query {
    users: [User]
    user(UserId: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  
`;

module.exports = typeDefs;
