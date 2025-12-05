import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FFFBE6] pt-24 p-6 text-[#2f5723]">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
          <div className="flex gap-3">
            <button onClick={() => { logout(); navigate('/'); }} className="bg-red-500 text-white px-3 py-2 rounded">Logout</button>
            <Link to="/my-orders" className="bg-[#347928] text-white px-3 py-2 rounded">My Orders</Link>
          </div>
        </div>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.isAdmin ? 'Admin' : 'Customer'}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link to="/products" className="text-[#347928]">Browse Products</Link></li>
              <li><Link to="/cart" className="text-[#347928]">View Cart</Link></li>
              <li><Link to="/my-orders" className="text-[#347928]">Manage Orders</Link></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
