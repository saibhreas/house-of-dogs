const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const providerSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
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
  service: [
    {
      type: String,
      required: true,
    },
  ],
});

const Provider = model("Provider", providerSchema);

module.exports = Provider;
