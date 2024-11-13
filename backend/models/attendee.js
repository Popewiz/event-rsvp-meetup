const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    country: String,
    city: String,
    pronoun: String,
});

module.exports = mongoose.model('Attendee', AttendeeSchema);
