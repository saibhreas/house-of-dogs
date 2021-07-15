const mongoose = require('mongoose');
const { Schema } = 'mongoose';

const VeterinarianSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
});

const Veterinarian = mongoose.model('Veterinarian', veterinarianSchema);

module.exports = { VeterinarianSchema, Veterinarian };