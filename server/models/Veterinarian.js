const { Schema, model } = require('mongoose');

const veterinarianSchema = new Schema({
  // _id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true,
  // },
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
  
});

const Veterinarian = model('Veterinarian', veterinarianSchema);

module.exports = Veterinarian;