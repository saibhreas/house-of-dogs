const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  requiresWalking: {
    type: String,
    trim: true,
  },
  requiresFeeding: {
    type: Boolean,
    trim: true,
  },
  requiresHousing: {
    type: Boolean,
    trim: true,
  },
  preferredProvider: {
    type: String,
    trim: true,
  },
  lastProvider: {
    type: String,
    trim: true,
  },
  requiresMedication: [
    {
      type: String,
      trim: true,
    },
  ],
});

const User = model('User', UserSchema);

module.exports = User;
