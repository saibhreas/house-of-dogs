const mongoose =require ('mongoose');
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
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
    numberPets: {
      type: Number,
      required: true,
      trim: true,
    },
    petsName: {
      type: String,
      required: true,
      trim: true,
    },
    // services: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Service",
    //   },
    // ],
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

const User = mongoose.model("User", userSchema);

module.exports = User;
