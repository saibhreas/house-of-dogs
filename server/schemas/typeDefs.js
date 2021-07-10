const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    services: String!
    email : String!
    password : String!
    phoneNumber : String!
    address : String!
    numberPets : Int!
    petsName : [String!]

  }
  type Provider {
    _id: ID!
    name: String
    skills: [String]!
  }
  type Dog {
    _id: ID!
    name: String
    skills: [String]!
  }
  type Veterinarian {
    _id: ID!
    name: String
    skills: [String]!
  }
  type Service {
    _id: ID!
    name: String
    skills: [String]!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
