import Product from "../models/Product.js";
import Order from "../models/Order.js";

// GET all products (admin only)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to get products" });
  }
};

// POST create a product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const created = await product.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: "Failed to create product" });
  }
};

// PUT update product by ID
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};

// DELETE product by ID
export const deleteProduct = async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed" });
  }
};

// GET all orders (admin only)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to get orders" });
  }
};
