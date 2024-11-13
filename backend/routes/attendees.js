const express = require('express');
const router = express.Router();
const Attendee = require('../models/attendee');

// POST: RSVP to the event
router.post('/rsvp', async (req, res) => {
    try {
        const newAttendee = new Attendee(req.body);
        await newAttendee.save();
        res.status(201).json(newAttendee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET: Retrieve all attendees
router.get('/attendees', async (req, res) => {
    try {
        const attendees = await Attendee.find();
        res.json(attendees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE: Remove an attendee by ID
router.delete('/attendees/:id', async (req, res) => {
    try {
        const attendee = await Attendee.findById(req.params.id);
        
        if (!attendee) {
            return res.status(404).json({ message: 'Attendee not found' });
        }

        await attendee.deleteOne();
        res.json({ message: 'Attendee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
