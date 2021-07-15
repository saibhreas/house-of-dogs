const mongoose = require('mongoose');
const { Schema } = mongoose;
<<<<<<< HEAD
=======

const { AppointmentSchema } = require('./Appointment');
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd

const providerSchema = new Schema({
  name: {
    type: String,
    required: true,   
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  address: {
    type: String,
    required: true,
   
  },
<<<<<<< HEAD


=======
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd
  about: {
    type: String,
    trim: true,
  },
  serviceId: {
    type: mongoose.Types.ObjectId,
    ref: 'Service'
  },
<<<<<<< HEAD
}
);




 
const Provider = mongoose.model('Provider', providerSchema);
=======
  appointments: [AppointmentSchema]
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Provider = mongoose.model("Provider", providerSchema);
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd

module.exports = Provider;
