import { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
   const BASE_URL = import.meta.env.VITE_API_URL;
const res = await axios.get(`${BASE_URL}/api/orders/my-orders`, {

          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBE6] pt-24 p-6 text-[#2f5723]">
      <h1 className="text-3xl font-bold text-center mb-6">📦 My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-lg text-gray-600">You haven't placed any orders yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Order #{index + 1}</h2>
              <p className="text-sm text-gray-600 mb-2">
                Payment: {order.paymentMethod}, Total: ₹{order.totalPrice}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Shipping: {order.shippingAddress?.address}
              </p>
              <ul className="pl-5 list-disc">
                {order.orderItems.map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <strong>{item.product?.name || item.name}</strong> × {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
