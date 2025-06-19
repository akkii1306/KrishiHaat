import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGlobe, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#347928] text-white px-4 py-3 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Left - Logo */}
        <div className="text-xl font-bold text-[#FCCD2A] whitespace-nowrap">Krishi Haat</div>

        {/* Center - Hamburger and Links */}
        <div className="flex-1 flex items-center justify-center gap-6">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
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
          </div>

          {/* Hamburger (always center) */}
          <div className="md:hidden text-xl cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4">
          {/* Search icon for all screens */}
          <button onClick={() => setShowSearch(!showSearch)}>
            <FaSearch className="text-lg hover:text-[#FCCD2A]" />
          </button>

          {/* Search popup */}
          {showSearch && (
            <form
              onSubmit={handleSearch}
              className="absolute top-[60px] right-4 bg-white p-2 rounded shadow-md z-50"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="rounded-full pl-4 pr-8 py-1.5 w-44 bg-[#E9F8E5] text-gray-800 focus:outline-none"
              />
              <button type="submit" className="absolute right-5 top-[10px] text-[#347928]">
                <FaSearch />
              </button>
            </form>
          )}

          {/* Language Dropdown */}
          <div className="relative">
            <button onClick={() => setShowLang(!showLang)}>
              <FaGlobe className="text-lg hover:text-[#FCCD2A]" />
            </button>
            {showLang && (
              <div className="absolute bg-white text-gray-800 mt-2 p-2 rounded shadow-md right-0 z-50">
                <button className="block px-3 py-1 hover:bg-gray-200 w-full text-left">English</button>
                <button className="block px-3 py-1 hover:bg-gray-200 w-full text-left">हिन्दी</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col items-center gap-2 text-sm">
          <Link to="/" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/products" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/cart" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>Cart</Link>
          <Link to="/auth" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
