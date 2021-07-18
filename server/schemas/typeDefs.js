const { gql } = require('apollo-server-express');

const typeDefs = gql`

  scalar Date

  type Service {
    _id: Int!
    name: String!
  }

  type Appointment {
    _id: ID!
    user: User!
    dog: ID!
    provider: Provider!
    from: Date!
    to: Date!
  }

  input AppointmentObj {
    dog: ID!
    provider: ID!
    from: Date!
    to: Date!
  }

  type Provider {
    _id: ID!
    name: String!
    email: String!
    phoneNumber: String
    address: String
    about: String!
    service: Service
    appointments: [Appointment]
  }


  type User {
    _id: ID!
    name: String!
    email: String!
    phoneNumber: String
    address: String
    petsCount: Int!
    pets: [Dog]
    appointments: [Appointment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Veterinarian {
    _id: ID!
    name: String!
    email: String!
    phoneNumber: String
    address: String
  }

  input VeterinarianObj {
    name: String!
    email: String!
    phoneNumber: String
    address: String
  }

  type Dog {
    _id: ID!
    name: String!
    breed: String!
    age: Int!
    weight: Int!
    gender: String!
    veterinarian: Veterinarian
    medicated: Boolean!
    medications: String
  }

  input DogObj {
    name: String!
    breed: String!
    age: Int!
    weight: Int!
    gender: String!
    veterinarian: VeterinarianObj
    medications: String
  }

  type Query {
    services: [Service]
    providers(service: Int): [Provider]
    provider(providerId: ID!): Provider
    me: User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!, phoneNumber: String, address: String): Auth
    addDog(dog: DogObj!): User
    login(email: String!, password: String!): Auth
    makeAppointment(appointment: AppointmentObj!): ID
  }
  
`;

module.exports = typeDefs;
