const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
//TODO implement when we get the front up
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
 

 
};

module.exports = resolvers;
