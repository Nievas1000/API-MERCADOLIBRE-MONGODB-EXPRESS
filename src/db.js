const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      autoIndex: true,
    });
    console.log("Successful connection to the database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
