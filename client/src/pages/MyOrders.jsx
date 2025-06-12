import { useEffect, useState, useContext } from "react";
import { getMyOrders } from "../api/orders";
import { AuthContext } from "../context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.token) {
      getMyOrders(user.token)
        .then((res) => {
          setOrders(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch orders:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading your orders...</p>;

  if (!orders.length) {
    return <p className="text-center mt-10 text-xl text-gray-600">No orders found.</p>;
  }

  return (
    <div className="min-h-screen bg-[#FFFBE6] px-6 py-10 text-[#347928]">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        {orders.map((order) => (
          <div key={order._id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">
              Order #{order._id.slice(-6).toUpperCase()}
            </h2>
            <p className="mb-2 text-sm">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p className="mb-2 text-sm">Status: <span className="font-semibold">{order.status || 'Processing'}</span></p>
            <p className="mb-4 text-sm">Total: ₹{order.totalPrice}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {order.orderItems.map((item, i) => (
                <div key={i} className="flex gap-3 items-center border p-2 rounded">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                    <p className="text-sm">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
