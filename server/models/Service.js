const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
<<<<<<< HEAD
<<<<<<< HEAD
  name: {
    type: String,
    required: true,
    trim: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'Provider'
  }
  
  
=======
=======
  _id: { type: Number, },
>>>>>>> 2239cf1f76921dfb098f5d6d99bb5b53fa96860b
  name: { type: String }
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;

