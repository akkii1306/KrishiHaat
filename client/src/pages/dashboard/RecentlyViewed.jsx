import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentlyViewed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    setItems(stored.reverse());
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">You haven't viewed any products yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map(item => (
            <Link key={item._id} to={`/products/${item._id}`} className="p-3 border rounded hover:shadow-sm flex flex-col items-center gap-2">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="text-sm font-medium text-center">{item.name}</div>
              <div className="text-sm text-gray-600">₹{item.price}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentlyViewed;
