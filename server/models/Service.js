const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
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
  name: { type: String }
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;

