const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: [String]!
    password: String!
    phoneNumber: String!
    address: String!
    numberPets: Int!
    petsName: String!
  }

  type Provider {
    _id: ID!
    name: String
    email: [String]!
    password: String!
    phoneNumber: String!
    address: String!
    veterinarian: [Veterinarian]
    about: String
  }

  type Dog {
    _id: ID!
    name: String!
    breed: String!
    age: Number!
    weight: Number!
    gender: String!
    veterinaryContact: String!
    medicated: Boolean!
    medications: String
    
  }
  type Veterinarian {
    _id: ID!
    name: String
    email: [String]!
    phoneNumber:String !
    address:String!
  }
  type Service {
  dogWalking:Boolean!
  petSitting:Boolean!
  petGrooming:Boolean!
  overnightSitting:Boolean!
  doggyDaycare:Boolean!
  fullKennel:Boolean!
  }

  type Query {
    users: [User]
    user(UserId: ID!): User
  }
  type Mutation{
    addUser(name: String!): User
  }
  
`;

module.exports = typeDefs;
