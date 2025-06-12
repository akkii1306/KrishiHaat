// src/api/order.js
import axios from "./axios";

// Place a new order (requires token)
export const placeOrder = (orderData, token) =>
  axios.post("/orders", orderData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Fetch logged-in user's orders
export const getMyOrders = (token) =>
  axios.get("/orders/myorders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
