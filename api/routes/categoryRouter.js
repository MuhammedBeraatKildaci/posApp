import express from "express";
import Category from "../models/categoryModel.js";

const categoryRouter = express.Router();

categoryRouter.get("/get-all-categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

categoryRouter.get("/get-category-by-id/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

categoryRouter.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

categoryRouter.delete("/delete-category/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

categoryRouter.put("/update-category/:id", async (req, res) => {
  try {
    await Category.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Category updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default categoryRouter;
