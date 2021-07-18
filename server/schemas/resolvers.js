const { AuthenticationError } = require('apollo-server-express');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { User, Dog, Provider, Service, Veterinarian, Appointment } = require('../models');
const { addDog, createUser, login, makeAppointment } = require('../controllers/user-controller');

const resolvers = {
  Query: {
    services: async () => {
      return Service.find();
    },
    providers: async (parent, { service }, context) => {
      if (service) {
        return Provider.find({ service }).populate('service');
      }
      return Provider.find().populate('service');
    },
    provider: async (parent, { providerId }) => {
      return Provider.findOne({ _id: providerId }).populate('service');
    },
    me: async (parent, args, context) => {
      // If user is authenticated
      if (context.user) {
        const resp = await User.findOne({ _id: context.user._id })
          .populate({
            path: 'appointments',
            populate: [
              { path: 'user', model: User },
              { path: 'provider', model: Provider },
            ]
          })
          .exec();
        return resp;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addDog: async (parent, { dog }, context) => {
      return addDog({ dog }, context);
    },
    createUser: (parent, { name, email, password, phoneNumber, address }) => {
      return createUser({ name, email, password, phoneNumber, address });
    },
    login: (parent, { email, password }) => {
      return login({ email, password });
    },
    makeAppointment: async (parent, { appointment }, context) => {
      return makeAppointment({ appointment }, context);
    },
  }

};

module.exports = resolvers;
