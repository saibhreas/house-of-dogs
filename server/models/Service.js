const mongoose =require ('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  dogWalking: {
    type: Boolean,
  },
  petSitting: {
    type: Boolean,
  },
  petGrooming: {
    type: Boolean,
  },
  overnightSitting: {
    type: Boolean,
  },
  doggyDaycare: {
    type: Boolean,
  },
  fullKennel: {
    type: Boolean,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;

