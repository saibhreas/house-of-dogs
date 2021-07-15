const mongoose = require('mongoose');
const { Schema } = mongoose;
const { VeterinarianSchema } = require('./Veterinarian');

const DogSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  weight: {
    type: Number,
  },
  gender: {
    type: String,
    trim: true,
  },
  medicated: {
    type: Boolean,
    default: false
  },
  medications: {
    type: String,
    trim: true,
  },
  veterinarian: VeterinarianSchema
});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = { DogSchema, Dog };