const express = require('express');
const Room = require('./models/roomSchema'); // Room model
const Reviews = require('./models/reviewSchema'); // Review model

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { roomId } = req.query;

    if (!roomId) {
      return res.status(400).json({ error: "roomId query parameter is required" });
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    const reviews = await Reviews.find({ roomId });

    res.json({
      room,
      reviews
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
