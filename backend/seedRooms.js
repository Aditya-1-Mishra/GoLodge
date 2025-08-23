import mongoose from "mongoose";
import dotenv from "dotenv";
import Room from "./models/roomSchema.js"; // <-- Your Room model
import roomsData from "./rooms.js";       // <-- Your dataset file

dotenv.config();

async function seedRooms() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");

    // Clear existing data
    await Room.deleteMany({});
    console.log("🗑️ Old rooms deleted");

    // Check if dataset is loaded
    if (!roomsData || roomsData.length === 0) {
      throw new Error("⚠️ roomsData is empty. Please check your rooms.js file.");
    }

    console.log(`📦 Found ${roomsData.length} rooms in dataset`);

    // Insert new data
    const inserted = await Room.insertMany(roomsData, { ordered: false });
    console.log(`✅ Successfully inserted ${inserted.length} rooms`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding rooms:", error.message);
    process.exit(1);
  }
}

seedRooms();
