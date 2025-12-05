import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Filters.css';

const Filters = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <>
      <button className="filter-toggle" onClick={() => setShowMobileFilters(!showMobileFilters)}>
        Filter
      </button>
      <div className="hidden md:block filters-panel">
        <h3>Filters</h3>
        <div className="filter-group">
          <label>Category</label>
          <div><input type="checkbox" /> Tools</div>
          <div><input type="checkbox" /> Seeds</div>
          <div><input type="checkbox" /> Pesticides</div>
        </div>

        <div className="filter-group">
          <label>Price Range</label>
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>

        <div className="filter-group">
          <label><input type="checkbox" /> In Stock Only</label>
        </div>
      </div>

      <AnimatePresence>
        {showMobileFilters && (
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.16 }}
            className="md:hidden filters-panel show"
            style={{ position: 'absolute', zIndex: 999 }}
          >
            <h3>Filters</h3>
            <div className="filter-group">
              <label>Category</label>
              <div><input type="checkbox" /> Tools</div>
              <div><input type="checkbox" /> Seeds</div>
              <div><input type="checkbox" /> Pesticides</div>
            </div>

            <div className="filter-group">
              <label>Price Range</label>
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max" />
            </div>

            <div className="filter-group">
              <label><input type="checkbox" /> In Stock Only</label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Filters;
