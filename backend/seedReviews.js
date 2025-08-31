// seedReviews.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import roomsData from "./rooms.js";
import Room from "./models/roomSchema.js";
import Review from "./models/reviewSchema.js"; // Your Review model

dotenv.config();

const seedReviews = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear old reviews
    await Review.deleteMany({});
    console.log("🗑️ Old reviews deleted");

    for (const room of roomsData) {
      // Find the room in DB
      const dbRoom = await Room.findOne({ id: room.id }); // match by your custom id

      if (!dbRoom) {
        console.log(`❌ Room not found in DB: ${room.id}`);
        continue;
      }

      if (!room.reviews || room.reviews.length === 0) {
        console.log(`⚠️ No reviews for ${room.name}`);
        continue;
      }

      // Create Review document linked to roomId
      const reviewDoc = new Review({
        roomId: dbRoom._id, // ObjectId of the room
        reviews: room.reviews.map(r => ({
          user: r.user,
          rating: r.rating,
          comment: r.comment,
          date: new Date(r.date),
        })),
      });

      await reviewDoc.save();
      console.log(`✅ Reviews added for room: ${room.name}`);
    }

    await mongoose.connection.close();
    console.log("🌱 Seeding complete!");
  } catch (err) {
    console.error("❌ Error seeding reviews:", err);
    await mongoose.connection.close();
  }
};

seedReviews();
