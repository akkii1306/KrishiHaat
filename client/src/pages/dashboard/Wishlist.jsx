import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setItems(stored);
  }, []);

  const remove = (id) => {
    const next = items.filter(i => i._id !== id);
    setItems(next);
    localStorage.setItem('wishlist', JSON.stringify(next));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map(item => (
            <div key={item._id} className="p-4 border rounded flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-600">₹{item.price}</div>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={`/products/${item._id}`} className="text-sm text-[#347928]">View</Link>
                <button onClick={()=>remove(item._id)} className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
