import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGlobe, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#347928] text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between flex-wrap">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-[#FCCD2A]">Krishi Haat</div>

        {/* Center - Links */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:justify-center gap-6 w-full md:w-auto mt-4 md:mt-0 text-center flex-1`}
        >
          <Link to="/" className="hover:text-[#FCCD2A] font-medium">
            Home
          </Link>
          <Link to="/products" className="hover:text-[#FCCD2A] font-medium">
            Products
          </Link>
          <Link to="/cart" className="hover:text-[#FCCD2A] font-medium">
            Cart
          </Link>
          <Link to="/auth" className="hover:text-[#FCCD2A] font-medium">
            Login
          </Link>
          <Link to="/admin" className="hover:text-[#FCCD2A] font-medium">
            Admin
          </Link>
          <Link to="/my-orders" className="hover:text-[#FCCD2A] font-medium">
            My Orders
          </Link>
        </div>

        {/* Right - Search, Language, Hamburger */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="rounded-full pl-4 pr-10 py-2 bg-[#E9F8E5] text-gray-800 placeholder-gray-500 shadow-[inset_4px_4px_8px_#c8d8c6,inset_-4px_-4px_8px_#ffffff] focus:outline-none"
              style={{ minWidth: "220px" }}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#347928]">
              <FaSearch />
            </button>
          </form>

          {/* Language Selector */}
          <div className="relative group hidden md:block">
            <FaGlobe
              className="text-lg cursor-pointer hover:text-[#FCCD2A]"
              title="Switch Language"
            />
            <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 p-2 rounded shadow-md right-0">
              <button className="block px-3 py-1 hover:bg-gray-200 w-full text-left">English</button>
              <button className="block px-3 py-1 hover:bg-gray-200 w-full text-left">हिन्दी</button>
            </div>
          </div>

          {/* Hamburger */}
          <div className="md:hidden text-xl cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
