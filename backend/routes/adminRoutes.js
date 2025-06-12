import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllOrders,
} from "../controllers/adminController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin Product Routes
router.get("/products", protect, admin, getAllProducts);
router.post("/products", protect, admin, createProduct);
router.put("/products/:id", protect, admin, updateProduct);
router.delete("/products/:id", protect, admin, deleteProduct);

// Admin Order Routes
router.get("/orders", protect, admin, getAllOrders);

export default router;
