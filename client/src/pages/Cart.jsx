const cartItems = [
  { name: "Hoe", price: 250, quantity: 2, image: "/tools/hoe.jpg" },
  { name: "Wheat Seeds", price: 120, quantity: 1, image: "/seeds/wheat.jpg" },
];

const Cart = () => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFBE6] text-[#347928] px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {cartItems.map((item, i) => (
          <div
            key={i}
            className="flex bg-white rounded-lg shadow-md p-4 items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded mr-6"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-right">
        <h3 className="text-2xl font-bold mb-4">Total: ₹{total}</h3>
        <button className="bg-[#347928] text-[#FFFBE6] px-6 py-2 rounded hover:bg-[#285e20] transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
