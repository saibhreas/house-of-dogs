const mongoose = require('mongoose');
const { Schema } = mongoose;

const VeterinarianSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Veterinarian = mongoose.model('Veterinarian', VeterinarianSchema);

module.exports = { VeterinarianSchema, Veterinarian };