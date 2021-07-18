// import user model
const { User, Provider } = require('../models');
const { Appointment } = require('../models/Appointment');
// import sign token function from auth
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const mongoose = require('mongoose');

module.exports = {
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ name, username, email, password, phoneNumber, address }) {
    const user = await User.create({ name, username, email, password, phoneNumber, address });

    if (!user) {
      throw new AuthenticationError('Something is wrong!');
    }
    const token = signToken(user);
    return { token, user };
  },

  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ email, password }) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AuthenticationError('No user found with this email address');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }
    const token = signToken(user);
    return { token, user };
  },

  // save a dog to a user's `pets` field by adding it to the set (to prevent duplicates)
  async addDog({ dog }, context) {
    if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { pets: dog } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  // creates an appointment between user (dog) and provider for a given date
  async makeAppointment({ appointment }, context) {
    if (context.user) {
      const newAppointment = await Appointment.create({
        ...appointment,
        user: context.user._id
      });

      const provider = await Provider.findOne({ _id: appointment.provider });
      await Provider.findOneAndUpdate(
        { _id: appointment.provider },
        { $addToSet: { appointments: newAppointment._id } },
        { new: true, runValidators: true }
      );
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { appointments: newAppointment._id } },
        { new: true, runValidators: true }
      );
      return newAppointment._id;
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  // remove a book from `savedBooks`
  async deleteBook({ bookId }, context) {
    if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
      return updatedUser;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
};
