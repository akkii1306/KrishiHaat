const products = [
  {
    id: 1,
    name: "Hoe Tool",
    price: 250,
    image: "/tools/hoe.jpg",
  },
  {
    id: 2,
    name: "Wheat Seeds",
    price: 120,
    image: "/seeds/wheat.jpg",
  },
  {
    id: 3,
    name: "Organic Fertilizer",
    price: 300,
    image: "/fertilizers/fertilizer.jpg",
  },
  {
    id: 4,
    name: "Pesticide Spray",
    price: 180,
    image: "/pesticides/spray.jpg",
  },
];

const ProductsPage = () => {
  const addToCart = (product) => {
    console.log("Added to cart:", product.name);
    // Later: Connect with Redux or Context or API call
  };

  return (
    <div className="min-h-screen bg-[#FFFBE6] px-6 py-10 text-[#347928]">
      <h1 className="text-3xl font-bold mb-8 text-center">Agricultural Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4">Price: ₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-[#347928] text-[#FFFBE6] px-4 py-2 rounded hover:bg-[#285e20] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
