import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  subTotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  total: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Bill = mongoose.model("Bill", billSchema);

export default Bill;
