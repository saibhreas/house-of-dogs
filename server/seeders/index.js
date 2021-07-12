const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`

  type User {
      _id: ID!
      name: String!
      email:[String]!
      password:String!
      phoneNumber: String!
      address: String!
      numberPets: Int!
      petsName: String!

    }
  Type Query{
    users: [User]
  }



`;



  const users = [
  {
    "name": "Michael Acevedo",
    "email": "michaelacevedo@quizka.com",
    "password": 123,
    "phoneNumber": "+1 (996) 465-3505",
    "address": "147 Main Street, Ezel, Virginia, 3782",
    "numberPets": 2,
    "petsName": "dolore",
    "services": [
      "dogWalking"
    ]
  },
  {
    "name": "Burns Sargent",
    "email": "burnssargent@quizka.com",
    "password": 123,
    "phoneNumber": "+1 (850) 520-2700",
    "address": "242 Nassau Avenue, Como, Puerto Rico, 3819",
    "numberPets": 2,
    "petsName": "ipsum",
    "services": [
      "velit",
      "commodo"
    ]
  },
];

const resolvers = {
  Query :{
    users: ()  => users,
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});




