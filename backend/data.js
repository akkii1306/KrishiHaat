import bcrypt from "bcryptjs";

export const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 10),
    isAdmin: true,
  },
  {
    name: "Farmer Ram",
    email: "ram@example.com",
    password: bcrypt.hashSync("ram123", 10),
  },
  {
    name: "Farmer Sita",
    email: "sita@example.com",
    password: bcrypt.hashSync("sita123", 10),
  },
];

export const products = [
  {
    name: "Hoe Tool",
    image: "/images/tools/hoe.jpg",
    price: 250,
    category: "Tools",
    countInStock: 10,
    description: "Durable hoe for farming",
  },
  {
    name: "Wheat Seeds",
    image: "/images/seeds/wheat.jpg",
    price: 120,
    category: "Seeds",
    countInStock: 50,
    description: "High quality wheat seeds",
  },
  {
    name: "Organic Fertilizer",
    image: "/images/fertilizers/fertilizer.jpg",
    price: 300,
    category: "Fertilizers",
    countInStock: 20,
    description: "Eco-friendly organic fertilizer",
  },
  {
    name: "Pesticide Spray",
    image: "/images/pesticides/pesticide.jpg",
    price: 180,
    category: "Pesticides",
    countInStock: 15,
    description: "Effective pest control spray",
  },
];
