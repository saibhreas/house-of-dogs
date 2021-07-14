const mongoose =require ('mongoose');
const { Schema } = mongoose;

const dogSchema =  new Schema ({
   
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
    //pick closest match
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  weight: {
    type: Number,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  veterinaryContact: {
    type: String,
    required: true,
    trim: true,
  },
  medicated: {
    type: Boolean,
    required: true,
    trim: true,
  },
  medications: {
    type: String,
    trim: true,
  },

});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;