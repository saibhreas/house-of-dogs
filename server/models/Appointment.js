const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },
        dog: mongoose.Schema.Types.ObjectId,
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