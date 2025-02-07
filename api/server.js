import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import categoryRouter from "./routes/categoryRouter.js";

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

app.use(express.json());
app.use(cors());
app.use("/api/categories", categoryRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running");
});
