const mongoose =require ('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'Provider'
  }
  
  
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;

