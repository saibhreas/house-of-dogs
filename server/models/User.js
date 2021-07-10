const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const ownerProfileSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  
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
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password : {
    type: String,
    required: true,
    minlength: 2,
  },
  phoneNumber :{
    type: String,
    required: true,
    minlength: 10,
  },
  address : {
    type: String,
    required: true,
    unique: true
    
  },
  numberPets: {
    type: Int,
    required: true,
    trim: true,
    
  },
  petsName: {
    type: String,
    required: true,
    trim: true,
    
  },
  services : {
    type: String,
    trim: true,
  },

  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
  

});

const User = model('User', UserSchema);

module.exports = User;
