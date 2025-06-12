import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#347928] text-white sticky top-0 z-50 px-6 py-4 flex flex-wrap justify-between items-center">
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-[#FCCD2A]">Krishi Haat</div>

      {/* Center - Links */}
      <div
        className={`w-full md:w-auto md:flex gap-6 items-center mt-4 md:mt-0 ${
          open ? "flex flex-col" : "hidden md:flex"
        }`}
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

      {/* Right - Language and Hamburger */}
      <div className="flex items-center ml-auto md:ml-0">
        <FaGlobe
          className="text-lg cursor-pointer hover:text-[#FCCD2A]"
          title="Switch Language"
        />
        <div className="md:hidden ml-4 text-xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
