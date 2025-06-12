import Product from "../models/Product.js";
import { ApiFeatures } from "../utils/ApiFeatures.js";

export const getAllProducts = async (req, res) => {
  try {
    const features = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter();

    const products = await features.query;

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
