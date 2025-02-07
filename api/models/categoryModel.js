import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
