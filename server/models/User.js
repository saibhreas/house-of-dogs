const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const OwnerprofileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email : {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password : {
    type: String,
    required: true,
    minlength: 5,
  },
  phoneNumber :{
    type: String,
    required: true,
    minlength: 10,
  }
  address : {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  }
  petsName: {
    type: String,
    trim: true,
    
  },
  services : {// will become an array
    type: String,
    trim: true,
  },
  // requiresFeeding: {
  //   type: Boolean,
  //   trim: true,
  // },
  // requiresHousing: {
  //   type: Boolean,
  //   trim: true,
  // },
  // preferredProvider: {
  //   type: String,
  //   trim: true,
  // },
  // lastProvider: {
  //   type: String,
  //   trim: true,
  // },
  // requiresMedication: [
  //   {
  //     type: String,
  //     trim: true,
  //   },
  // ],
});

const User = model('User', UserSchema);

module.exports = User;
