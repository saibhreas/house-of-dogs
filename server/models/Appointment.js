const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema(
    {
        userId: { type: mongoose.Types.ObjectId, ref: 'User' },
        dogId: mongoose.Types.ObjectId,
        from: Date,
        to: Date
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = { AppointmentSchema, Appointment };