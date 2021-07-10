const { Schema, model } = require('mongoose');

const dogSchema =  new Schema ({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
    //pick closest match
  },

  age: {
    type: Int,
    required: true,
    trim: true,
  },
  weight: {
    type: Int,
    required: true,
    trim: true,
  },
  sex: {
    type: String,
    required: true,
    trim: true,
  },
  veterinaryContact: {
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


});

const User = model('Dog', DogSchema);

module.exports = Dog;