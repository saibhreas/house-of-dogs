const mongoose =require ('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const providerSchema = new Schema({
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
    match: [/.+@.+\..+/, 'Must match an email address!'],
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

providerSchema.pre('save', async function (next) {
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
 
const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
