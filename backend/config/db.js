const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
      console.log("MongoDB connection error:", error);
    }
  };

module.exports = { connectDB };
