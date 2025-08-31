const express = require('express');
const bookings = require('./models/bookings');
const rooms = require('./models/roomSchema');

const router = express.Router();

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const userBookings = await bookings.find({ userId });
        
        if (!userBookings || userBookings.length === 0) {
            return res.status(404).json({ message: "No bookings found for this user" });
        }

        const bookingWithRooms = await Promise.all(
            userBookings.map(async (book) => {
                const room = await rooms.findById(book.roomId);
                return {
                    ...book.toObject(),
                    roomDetails: room
                };
            })
        );
        console.log(bookingWithRooms)

        res.json(bookingWithRooms);

    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
