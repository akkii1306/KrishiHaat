import { useState } from 'react';
import './Filters.css';

const Filters = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <>
      <button className="filter-toggle" onClick={() => setShowMobileFilters(!showMobileFilters)}>
        Filter
      </button>
      <div className={`filters-panel ${showMobileFilters ? 'show' : ''}`}>
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
    </>
  );
};

export default Filters;
