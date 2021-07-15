<<<<<<< HEAD
const mongoose =require ('mongoose');
const { Schema } = mongoose;
=======
const mongoose = require('mongoose');
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd

const { DogSchema } = require('./Dog');
const { AppointmentSchema } = require('./Appointment');

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
<<<<<<< HEAD
    numberPets: {
      type: Number,
      trim: true,
    },
    petsName: {
      type: String,
      trim: true,
    },
   
=======
    pets: [DogSchema],
    appointments: [AppointmentSchema]
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

<<<<<<< HEAD
=======
// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `petsCount` with the number of saved pets we have
userSchema.virtual('petsCount').get(function () {
  return this.pets.length;
});
>>>>>>> 31229957a31923716d15e4fafc6a2a95a23fe3bd


const User = mongoose.model("User", userSchema);

module.exports = User;
