import axios from "./axios";

export const getProducts = (filters = {}) => {
  return axios.get("/products", { params: filters });
};
