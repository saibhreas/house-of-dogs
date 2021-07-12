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
  me: async (parent, args, context) => {
    if (context.user) {
      console.log(" this is id: ,context.user._id ")
      return User.findOne({ _id: context.user._id });
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user=await User.create({
        name,
        email, 
        password
      });
      const token = signToken(user);
      return { token, user };
    },
    login:async (parent, {email, password}) =>{
      const user = await User.findOne({email});

      if (!user){
        console.log("This is the New User: ",User);
        throw new AuthenticationError("Incorrect Password");
      }
    }
  }

};

module.exports = resolvers;
