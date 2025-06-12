import { useEffect, useState } from "react";
import axios from "axios";
const Admin = () => {
const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const headers = { Authorization: `Bearer ${token}` };
    const productsRes = await axios.get("http://localhost:5000/api/admin/products", { headers });
    const ordersRes = await axios.get("http://localhost:5000/api/admin/orders", { headers });
    setProducts(productsRes.data);
    setOrders(ordersRes.data);
  };

  const deleteProduct = async (id) => {
    const headers = { Authorization: `Bearer ${token}` };
    await axios.delete(`http://localhost:5000/api/admin/products/${id}`, { headers });
    fetchData();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#347928]">Admin Dashboard</h1>

      <h2 className="text-xl mt-6 font-semibold">All Products</h2>
      <ul className="bg-white p-4 rounded shadow space-y-2">
        {products.map((p) => (
          <li key={p._id} className="flex justify-between items-center">
            <span>{p.name} - ₹{p.price}</span>
            <button onClick={() => deleteProduct(p._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl mt-6 font-semibold">All Orders</h2>
      <ul className="bg-white p-4 rounded shadow space-y-2">
        {orders.map((o) => (
          <li key={o._id}>
            {o.user?.name} - {o.totalPrice} - {new Date(o.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
