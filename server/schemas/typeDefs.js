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

  type Veterinarian {
    _id: ID!
    name: String!
    email: String!
    phoneNumber: String!
    address: String!
  }

  type Dog {
    _id: ID!
    name: String!
    breed: String!
    age: Number!
    weight: Number!
    gender: String!
    veterinerian: Veterinarian
    medicated: Boolean!
    medications: String
  }

  type Query {
    services: [Service]
    providers: [Provider]
    provider(providerId: ID!): Provider
    me: User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!, phoneNumber: String, address: String): Auth
    login(email: String!, password: String!): Auth
    saveAppointment(appointment: Appointment!): Appointment
  }
  
`;

module.exports = typeDefs;
