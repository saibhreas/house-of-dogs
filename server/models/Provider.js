const mongoose = require('mongoose');
const { Schema } = mongoose;


const providerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email add  ress'],
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    trim: true,
  },
  service: {
    type: Number,
    ref: 'Service'
  },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
},
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
