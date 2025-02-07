import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  timestamp: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
