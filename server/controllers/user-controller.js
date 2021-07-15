// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ username, email, password }) {
    const user = await User.create({ username, email, password });

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
  
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveBook({ book }, context) {
    if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: book } },
        { new: true, runValidators: true }
      );
      return updatedUser;
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
