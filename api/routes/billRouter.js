import express from "express";
import Bill from "../models/billModel.js";

const billRouter = express.Router();

billRouter.get("/get-all-bills", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

billRouter.get("/get-bill-by-id/:id", async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    res.json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

billRouter.post("/add-bill", async (req, res) => {
  const newBill = new Bill(req.body);
  await newBill.save();
  res.status(201).json(newBill);
});

billRouter.delete("/delete-bill/:id", async (req, res) => {
  try {
    await Bill.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bill deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

billRouter.put("/update-bill/:id", async (req, res) => {
  try {
    await Bill.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Bill updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default billRouter;
