import axios from "./axios";

export const placeOrder = (orderData, token) =>
  axios.post("/orders", orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getMyOrders = (token) =>
  axios.get("/orders/myorders", {
    headers: { Authorization: `Bearer ${token}` },
  });
