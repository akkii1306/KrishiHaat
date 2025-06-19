import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  AiOutlinePlus,
  AiOutlineMinus
} from "react-icons/ai";
import {
  MdDeleteOutline,
  MdRemoveShoppingCart,
  MdShoppingCartCheckout
} from "react-icons/md";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCartStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(1, (updatedCart[index].quantity || 1) + delta);
    updateCartStorage(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCartStorage(updatedCart);
    toast.info("Item removed from cart", { autoClose: 1800 });
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    toast.info("Cart cleared", { autoClose: 1800 });
  };

  const placeOrder = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to place an order", { autoClose: 2000 });
      navigate("/auth");
      return;
    }

    // Validate shipping form
    const { address, city, postalCode, country } = shippingAddress;
    if (!address || !city || !postalCode || !country) {
      toast.error("Please fill out all shipping fields", { autoClose: 2000 });
      return;
    }

    try {
      const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );

      const orderItems = cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity || 1,
        image: item.image,
        price: item.price,
        product: item._id,
      }));

      const orderData = {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
      };

      const BASE_URL = import.meta.env.VITE_API_URL;
await axios.post(`${BASE_URL}/api/orders`, orderData, {

        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      toast.success("Order placed successfully!", { autoClose: 2000 });
      localStorage.removeItem("cart");
      setCartItems([]);
      localStorage.setItem("latestOrder", JSON.stringify(orderData));

      if (paymentMethod === "Bank Transfer") {
        navigate("/payment-success");
      } else {
        navigate("/my-orders");
      }
    } catch (err) {
      console.error(err);
      toast.error("Order failed. Try again.", { autoClose: 2000 });
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-[#FFFBE6] p-6 pt-24 text-[#2f5723]">
      <h1 className="text-3xl font-bold mb-10 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is currently empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Cart Items */}
          <div className="flex-1 space-y-5">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 px-6">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                  <div className="mt-3 flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(idx, -1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="w-8 text-center">{item.quantity || 1}</span>
                    <button
                      onClick={() => handleQuantityChange(idx, 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(idx)}
                  className="text-red-500 text-xl hover:text-red-700"
                  title="Remove"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-semibold border-b pb-3 mb-4 text-center">
              Order Summary
            </h2>
            <p className="mb-2 text-gray-700">
              Items:{" "}
              <span className="font-semibold">
                {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}
              </span>
            </p>
            <p className="mb-2 text-gray-700">
              Total: <span className="font-semibold text-[#2f5723]">₹{totalPrice}</span>
            </p>

            {/* Shipping Form */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Shipping Address</label>
              <input
                type="text"
                placeholder="Street Address"
                value={shippingAddress.address}
                onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                placeholder="City"
                value={shippingAddress.city}
                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={shippingAddress.postalCode}
                onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
              <input
                type="text"
                placeholder="Country"
                value={shippingAddress.country}
                onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="Bank Transfer">Bank Transfer (Mock UPI)</option>
              </select>
            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-[#347928] text-white py-3 rounded-lg hover:bg-[#2e6823] transition mb-3 flex items-center justify-center gap-2"
            >
              <MdShoppingCartCheckout size={20} />
              Place Order
            </button>
            <button
              onClick={clearCart}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition flex items-center justify-center gap-2"
            >
              <MdRemoveShoppingCart size={20} />
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
