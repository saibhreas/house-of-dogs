const mongoose = require('mongoose');
const { Schema } = mongoose;
const { VeterinerianSchema } = require('./Veterinarian');

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
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  medicated: {
    type: Boolean,
    required: true,
    trim: true,
  },
  medications: {
    type: String,
    trim: true,
  },
  veterinerian: VeterinerianSchema
});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = { DogSchema, Dog };