const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const providerSchema = new Schema({
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
    unique: true,
  },
  veterinarian: [
    {
      type: Schema.Types.ObjectId,
      ref: "Veterinarian",
    },
  ],
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

providereSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
providerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
 
const Provider = model("Provider", providerSchema);

module.exports = Provider;
