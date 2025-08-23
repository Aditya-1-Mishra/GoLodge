// roomSchema.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  id: Number,
  name: String,
  roomType: String,
  accommodation: String,
  hotel_name: String,
  location: String,
  images: [String],
  description: String,
  amenities: [String],
  price: Number,
  currency: String,
});

module.exports = mongoose.model("Room", roomSchema);
