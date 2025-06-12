import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

 const placeOrder = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to place an order");
      navigate("/auth"); // redirect to login
      return;
    }

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const res = await axios.post(
      "http://localhost:5000/api/orders",
      {
        orderItems: cartItems,
        shippingAddress: { address: "Bihar" }, // update with user input if needed
        paymentMethod: "COD",
        totalPrice,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // just in case
      }
    );

    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    setCartItems([]);
    navigate("/my-orders");
  } catch (err) {
    console.error("Failed to place order:", err);
    alert("Order failed");
  }
};


  return (
    <div className="min-h-screen bg-[#FFFBE6] p-6 text-[#347928]">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>₹{item.price}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            ))}
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 bg-[#347928] text-[#FFFBE6] px-6 py-3 rounded hover:bg-[#2e6823] transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
