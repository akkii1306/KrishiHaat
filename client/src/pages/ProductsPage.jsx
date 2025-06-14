import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { useLocation } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceMin: "",
    priceMax: "",
    rating: "",
    search: "",
  });

  const location = useLocation();

  const fetchFilteredProducts = () => {
    const query = {};
    if (filters.search) query.search = filters.search;
    if (filters.category) query.category = filters.category;
    if (filters.priceMin) query["price[gte]"] = filters.priceMin;
    if (filters.priceMax) query["price[lte]"] = filters.priceMax;
    if (filters.rating) query["rating[gte]"] = filters.rating;

    getProducts(query)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
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

  return (
    <div className="min-h-screen bg-[#FFFBE6] px-6 py-10 text-[#347928] pt-28 font-sans">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Agricultural Products</h1>

      {/* Filter Panel */}
      <form
        onSubmit={handleFilterSubmit}
        className="mb-10 p-4 bg-white shadow rounded-lg flex flex-wrap gap-4 justify-center items-center"
      >
        <input
          name="search"
          placeholder="Search products..."
          value={filters.search}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg w-44"
        />
        <select
          name="category"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
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
          className="border border-gray-300 p-2 rounded-lg w-28"
        />
        <input
          type="number"
          name="priceMax"
          placeholder="Max Price"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg w-28"
        />
        <select
          name="rating"
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        >
          <option value="">Min Rating</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <button
          type="submit"
          className="bg-[#347928] text-white px-6 py-2 rounded-lg hover:bg-[#285e20] transition"
        >
          Apply
        </button>
      </form>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.length === 0 ? (
          <p className="text-center col-span-full text-xl">No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105 p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm bg-[#C0EBA6] text-[#347928] font-medium px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-yellow-500 text-sm">
                  {"★".repeat(Math.floor(product.rating || 0)).padEnd(5, "☆")}
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-1 text-gray-800">{product.name}</h2>
              <p className="text-[#347928] font-bold mb-4 text-base">
                ₹{product.price}
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ₹{product.originalPrice}
                  </span>
                )}
              </p>
              <button className="mt-auto bg-[#347928] text-[#FFFBE6] px-4 py-2 rounded-lg hover:bg-[#285e20] transition">
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
