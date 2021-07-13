const mongoose =require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
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
    numberPets: {
      type: Number,
      trim: true,
    },
    petsName: {
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



const User = mongoose.model("User", userSchema);

module.exports = User;
