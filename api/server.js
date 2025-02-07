import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";

const PORT = process.env.PORT;

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.send(`Hello World ,${PORT}`);
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running");
});
