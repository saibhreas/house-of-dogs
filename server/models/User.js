<<<<<<< HEAD
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  requiresWalking: {
    type: String,
    trim: true,
  },
  requiresFeeding: {
    type: Boolean,
    trim: true,
  },
  requiresHousing: {
    type: Boolean,
    trim: true,
  },
  preferredProvider: {
    type: String,
    trim: true,
  },
  lastProvider: {
    type: String,
    trim: true,
  },
  requiresMedication: [
    {
      type: String,
      trim: true,
    },
  ],
});

const User = model('User', UserSchema);
=======
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const ownerProfileSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

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
      unique: true,
    },
    //todo fix syntax for number of pets
    numberPets: {
      type: String,
      required: true,
      trim: true,
    },
    petsName: {
      type: String,
      required: true,
      trim: true,
    },
    //todo fix syntax for this array
    //services: [serviceSchema],
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


//may use to querry services the user uses
// userSchema.virtual('bookCount').get(function () {
//   return this.savedBooks.length;
// });

const User = model("User", UserSchema);
>>>>>>> 2e7aae5d48d174ac432fc20ffe663f879046cde4

module.exports = User;
