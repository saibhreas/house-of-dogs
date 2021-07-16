const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: 'User' },
        provider: { type: mongoose.Types.ObjectId, ref: 'Provider' },
        dog: mongoose.Types.ObjectId,
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