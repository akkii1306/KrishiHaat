import dotenv from "dotenv";
import User from "./models/User.js";
import Product from "./models/Product.js";
import { users, products } from "./data.js";
import connectDB from "./config/db.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(sampleProducts);

    console.log("✅ Data Seeded!");
  } catch (err) {
    console.error("❌ Seeding Failed:", err);
    process.exit(1);
  } finally {
    process.exit();
  }
};

seedData();
