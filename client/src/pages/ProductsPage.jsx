import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priceMin: "",
    priceMax: "",
    rating: "",
    search: "",
  });

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
    fetchFilteredProducts();
  }, []);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchFilteredProducts();
  };

  return (
    <div className="min-h-screen bg-[#FFFBE6] px-6 py-10 text-[#347928]">
      <h1 className="text-3xl font-bold mb-8 text-center">Agricultural Products</h1>

      {/* Filter Panel */}
      <form onSubmit={handleFilterSubmit} className="mb-6 flex flex-wrap gap-4 justify-center">
        <input
          name="search"
          placeholder="Search..."
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select name="category" onChange={handleChange} className="border p-2 rounded">
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
          className="border p-2 rounded w-28"
        />
        <input
          type="number"
          name="priceMax"
          placeholder="Max Price"
          onChange={handleChange}
          className="border p-2 rounded w-28"
        />
        <select name="rating" onChange={handleChange} className="border p-2 rounded">
          <option value="">Min Rating</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <button type="submit" className="bg-[#347928] text-white px-4 py-2 rounded">Apply</button>
      </form>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4">Price: ₹{product.price}</p>
            <button className="mt-auto bg-[#347928] text-[#FFFBE6] px-4 py-2 rounded hover:bg-[#285e20] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
