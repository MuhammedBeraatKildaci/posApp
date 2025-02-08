import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import categoryRouter from "./routes/categoryRouter.js";
import productRouter from "./routes/productRouter.js";
import billRouter from "./routes/billRouter.js";
import authRouter from "./routes/authRouter.js";
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
app.use("/api/products", productRouter);
app.use("/api/bills", billRouter);
app.use("/api/auth", authRouter);


app.listen(PORT, () => {
  connectDB();
  console.log("Server is running");
});
