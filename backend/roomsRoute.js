const express=require('express');
const mongoose = require('mongoose');
const Room = require('./models/roomSchema'); // Import the Room model
const router = express.Router();


router.get("/search", async (req, res) => {
      try {
    const { location, roomType, accommodation } = req.query;

    // Build query dynamically so empty filters don’t break
    const query = {};
    if (location) query.location = location;
    if (roomType) query.roomType = roomType;
    if (accommodation) query.accommodation = accommodation;

    const rooms = await Room.find(query);
    res.json({ rooms });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

