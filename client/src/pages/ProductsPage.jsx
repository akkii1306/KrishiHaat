import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getProducts } from "../api/products";
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from "../components/Card";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceMin: "",
    priceMax: "",
    rating: "",
    search: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const fetchFilteredProducts = async () => {
    const query = {};
    if (filters.search) query.search = filters.search;
    if (filters.category) query.category = filters.category;
    if (filters.priceMin) query["price[gte]"] = filters.priceMin;
    if (filters.priceMax) query["price[lte]"] = filters.priceMax;
    if (filters.rating) query["rating[gte]"] = filters.rating;

    setLoading(true);
    setError(null);
    try {
      const res = await getProducts(query);
      setProducts(res.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError(err);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search") || "";
    setFilters((prev) => ({ ...prev, search: searchParam }));
  }, [location.search]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters.search]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchFilteredProducts();
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      // support both qty and quantity stored formats
      if (existingItem.quantity !== undefined) existingItem.quantity += 1;
      else if (existingItem.qty !== undefined) existingItem.qty += 1;
      else existingItem.quantity = 2;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${product.name} added to cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFBE6] px-4 sm:px-6 md:px-10 pt-28 text-[#347928] font-sans">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Agricultural Products</h1>
      <p className="text-center text-sm text-gray-600 mb-6 max-w-3xl mx-auto">Find high-quality seeds, tools, fertilizers and pesticides sourced for small and large farms. Use filters to narrow down by category, price and rating.</p>

      {/* Filter Panel */}
      <form
        onSubmit={handleFilterSubmit}
        className="mb-12 p-6 bg-white shadow-md rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <input
          name="search"
          placeholder="Search products..."
          value={filters.search}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-sm w-full"
        />

        <select
          name="category"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-sm w-full"
        >
          <option value="">All Categories</option>
          <option value="Seeds">Seeds</option>
          <option value="Tools">Tools</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Pesticides">Pesticides</option>
        </select>

        <input
          type="number"
          name="priceMin"
          placeholder="Min Price"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-sm w-full"
        />
        <input
          type="number"
          name="priceMax"
          placeholder="Max Price"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-sm w-full"
        />

        <select
          name="rating"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-sm w-full"
        >
          <option value="">Min Rating</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>

        <button
          type="submit"
          className="mt-auto bg-[#347928] text-[#FFFBE6] px-4 py-2 rounded-lg hover:bg-[#285e20] hover:scale-105 transition-all duration-200 ease-in-out text-sm cursor-pointer"
        >
          Apply
        </button>
      </form>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-2xl h-64" />
            ))}
          </div>
        ) : (
          <AnimatePresence>
            {products.length === 0 ? (
              <p className="text-center text-xl">No products found.</p>
            ) : (
              <motion.div
                layout
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {products.map((product) => (
                  <motion.div key={product._id} layout variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                    <div className="p-2">
                      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-4 flex flex-col h-full">
                        <img src={product.image} alt={product.name} className="w-full h-44 object-cover rounded-lg mb-4" />
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs bg-[#C0EBA6] text-[#347928] font-medium px-2 py-1 rounded-full">{product.category}</span>
                          <span className="text-yellow-500 text-sm">{"★".repeat(Math.floor(product.rating || 0)).padEnd(5, "☆")}</span>
                        </div>
                        <h2 className="text-lg font-semibold mb-1 text-gray-800">{product.name}</h2>
                        <p className="text-[#347928] font-bold mb-4 text-base">₹{product.price}{product.originalPrice && (<span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>)}</p>
                        <button onClick={() => handleAddToCart(product)} className="mt-auto bg-[#347928] text-[#FFFBE6] px-4 py-2 rounded-lg hover:bg-[#285e20] hover:scale-105 transition-all duration-200 ease-in-out text-sm cursor-pointer">Add to Cart</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
