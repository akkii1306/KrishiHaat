import axios from "axios";

const instance = axios.create({
  baseURL: "https://krishihaat-backend.onrender.com/api", // ✅ correct Render backend
  withCredentials: true,
});

export default instance;

