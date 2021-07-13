const mongoose =require ('mongoose');
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
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 2,
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


  about: {
    type: String,
    trim: true,
  },
},
{
  toJSON: {
    virtuals: true,
  },
}
);




 
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
