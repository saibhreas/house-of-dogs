const mongoose = require('mongoose');
const { Schema } =  mongoose;
const bcrypt = require("bcrypt");

const { DogSchema } = require('./Dog');
const { AppointmentSchema } = require('./Appointment');
//TODO: model needs to be adjusted to the form.  WE knwo form works with the rest of the app, so adjust the model.
//Review front and make models, typedefs and resolver 
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
      minlength: 10,
      allowNull: true
    },
    address: {
      type: String,
      allowNull: true
      
    },
    pets: [DogSchema],
    appointments: [AppointmentSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

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


const User = mongoose.model("User", userSchema);

module.exports = User;
