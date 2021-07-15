const mongoose = require('mongoose');
<<<<<<< HEAD
const { Schema } = mongoose;
=======
const { Schema } = 'mongoose';
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd

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
    required: true,
    minlength: 10,
  },
  address: {
    type: String,
    required: true,
<<<<<<< HEAD
    
    
  },
 
  
=======
    unique: true
  },
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd
});

const Veterinarian = mongoose.model('Veterinarian', veterinarianSchema);

module.exports = { VeterinarianSchema, Veterinarian };