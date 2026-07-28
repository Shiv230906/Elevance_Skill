const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.DATABASE_URL;

module.exports.connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    // Don't crash the server — routes that don't need DB (like /admin) still work
  }
};