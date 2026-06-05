import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getProducts } from "../api/products";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
  const { t } = useTranslation();

  const fetchFilteredProducts = async () => {
    const query = {
      page,
      limit: 8,
    };

    if (filters.search) query.search = filters.search;
    if (filters.category) query.category = filters.category;
    if (filters.priceMin) query.minPrice = filters.priceMin;
    if (filters.priceMax) query.maxPrice = filters.priceMax;
    if (filters.rating) query.rating = filters.rating;

    setLoading(true);
    setError(null);

    try {
      const res = await getProducts(query);

      // 🔥 IMPORTANT FIX
      setProducts(res.data.products || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError(err);
      toast.error(t("products.noResults"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search") || "";
    setFilters((prev) => ({ ...prev, search: searchParam }));
    setPage(1);
  }, [location.search]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters.search, page]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchFilteredProducts();
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
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
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        {t("products.title")}
      </h1>

      {/* Filter Panel */}
      <form
        onSubmit={handleFilterSubmit}
        className="mb-12 p-6 bg-white shadow-md rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <input
          name="search"
          placeholder={t("products.searchPlaceholder")}
          value={filters.search}
          onChange={handleChange}
          className="border p-2 rounded-md text-sm"
        />

        <select
          name="category"
          onChange={handleChange}
          className="border p-2 rounded-md text-sm"
        >
          <option value="">{t("products.categories.all")}</option>
          <option value="Seeds">{t("products.categories.seeds")}</option>
          <option value="Tools">{t("products.categories.tools")}</option>
          <option value="Fertilizers">
            {t("products.categories.fertilizers")}
          </option>
          <option value="Pesticides">
            {t("products.categories.pesticides")}
          </option>
        </select>

        <input
          type="number"
          name="priceMin"
          placeholder={t("products.minPrice")}
          onChange={handleChange}
          className="border p-2 rounded-md text-sm"
        />
        <input
          type="number"
          name="priceMax"
          placeholder={t("products.maxPrice")}
          onChange={handleChange}
          className="border p-2 rounded-md text-sm"
        />

        <select
          name="rating"
          onChange={handleChange}
          className="border p-2 rounded-md text-sm"
        >
          <option value="">{t("products.minRating")}</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>

        <button className="bg-[#347928] text-[#FFFBE6] rounded-lg text-sm">
          {t("products.apply")}
        </button>
      </form>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {products.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white rounded-xl shadow p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded mb-3"
                />
                <h2 className="font-semibold">{product.name}</h2>
                <p className="font-bold">₹{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 bg-[#347928] text-[#FFFBE6] px-3 py-1 rounded"
                >
                  {t("products.addToCart")}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>
        <span>{page} / {totalPages}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
