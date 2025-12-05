import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGlobe, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { DropdownMenu, Trigger, Content, Item } from './ui/DropdownMenu';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [query, setQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);
  const { t, i18n } = useTranslation();

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
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-[#FCCD2A] font-medium">{t('nav.home')}</Link>
            <Link to="/products" className="hover:text-[#FCCD2A] font-medium">{t('nav.products')}</Link>
            <Link to="/cart" className="hover:text-[#FCCD2A] font-medium">{t('nav.cart')}</Link>
            {user ? (
              <Link to="/dashboard" className="hover:text-[#FCCD2A] font-medium">{t('nav.dashboard')}</Link>
            ) : (
              <Link to="/auth" className="hover:text-[#FCCD2A] font-medium">{t('nav.login')}</Link>
            )}
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
            <AnimatePresence>
              {showSearch && (
                <motion.form
                  onSubmit={handleSearch}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-[60px] right-4 bg-white p-2 rounded shadow-md z-50"
                >
                    <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="rounded-full pl-4 pr-8 py-1.5 w-44 bg-[#E9F8E5] text-gray-800 focus:outline-none"
                  />
                  <button type="submit" className="absolute right-5 top-[10px] text-[#347928]">
                    <FaSearch />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          {/* Language Dropdown */}
          <div className="relative">
            <button onClick={() => setShowLang(!showLang)}>
              <FaGlobe className="text-lg hover:text-[#FCCD2A]" />
            </button>
              <AnimatePresence>
              {showLang && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.14 }}
                  className="absolute bg-white text-gray-800 mt-2 p-2 rounded shadow-md right-0 z-50"
                >
                  <button onClick={() => { i18n.changeLanguage('en'); setShowLang(false); }} className="block px-3 py-1 hover:bg-gray-200 w-full text-left">English</button>
                  <button onClick={() => { i18n.changeLanguage('hi'); setShowLang(false); }} className="block px-3 py-1 hover:bg-gray-200 w-full text-left">हिन्दी</button>
                </motion.div>
              )}
              </AnimatePresence>
          </div>
          {/* User avatar + dropdown (shadcn-style) */}
          <div className="relative">
            {user ? (
              <>
                <DropdownMenu>
                  <Trigger>
                    <button className="w-9 h-9 rounded-full bg-yellow-400 text-[#1f3d14] flex items-center justify-center font-semibold">{user.name ? user.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}</button>
                  </Trigger>

                  <Content className="absolute right-0 mt-2 p-2 w-44">
                    <Item onSelect={() => navigate('/dashboard')}>{t('nav.dashboard')}</Item>
                    <Item onSelect={() => navigate('/my-orders')}>{t('nav.myOrders')}</Item>
                    <Item onSelect={() => { logout(); navigate('/'); }}>{t('auth.logout')}</Item>
                  </Content>
                </DropdownMenu>
              </>
            ) : null}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mt-2 flex flex-col items-center gap-2 text-sm overflow-hidden"
          >
            <Link to="/" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>{t('nav.home')}</Link>
            <Link to="/products" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>{t('nav.products')}</Link>
            <Link to="/cart" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>{t('nav.cart')}</Link>
            <Link to="/auth" className="hover:text-[#FCCD2A] font-medium" onClick={() => setOpen(false)}>{t('nav.login')}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
