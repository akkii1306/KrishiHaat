import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: String,
  stock: Number,
});

export default mongoose.model("Product", productSchema);
