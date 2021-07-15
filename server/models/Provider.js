const mongoose = require('mongoose');
const { Schema } = mongoose;

const { AppointmentSchema } = require('./Appointment');

const providerSchema = new Schema({
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
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  about: {
    type: String,
    trim: true,
  },
  serviceId: {
    type: mongoose.Types.ObjectId,
    ref: 'Service'
  },
  appointments: [AppointmentSchema]
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
