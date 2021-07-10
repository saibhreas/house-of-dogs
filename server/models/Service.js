const { Schema, model } = require("mongoose");


const serviceSchema = new Schema({
  
  dogWalking: {
    type: String,
  },
  petSitting: {
    type: String,
  },
  petGrooming: {
    type: String,
  },
  overnightSitting: {
    type: String,
  },
  doggyDaycare: 
    {
      type: String,
     
    },
  fullKennel : 
    {
      type: String,
     
    },
 
});

const Service = model("Service", serviceSchema);

module.exports = Service;
