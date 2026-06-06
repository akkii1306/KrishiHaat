import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Profile from './dashboard/Profile';
import Addresses from './dashboard/Addresses';
import Wishlist from './dashboard/Wishlist';
import RecentlyViewed from './dashboard/RecentlyViewed';
import MyOrders from './MyOrders';
import OrderTracking from './dashboard/OrderTracking';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [tab, setTab] = useState('profile');

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FFFBE6] pt-24 p-4 sm:p-6 text-[#2f5723]">
      <div className="max-w-6xl mx-auto">
        {/* Mobile tab bar (visible on small screens) */}
        <div className="md:hidden bg-white rounded-xl shadow p-2 mb-4 overflow-x-auto">
          <div className="flex gap-2">
            <button onClick={() => setTab('profile')} className={`px-3 py-2 rounded whitespace-nowrap ${tab==='profile' ? 'bg-[#E6F6DF]' : ''}`}>{t('dashboard.profile')}</button>
            <button onClick={() => setTab('orders')} className={`px-3 py-2 rounded whitespace-nowrap ${tab==='orders' ? 'bg-[#E6F6DF]' : ''}`}>📦 {t('nav.myOrders')}</button>
            <button onClick={() => setTab('addresses')} className={`px-3 py-2 rounded whitespace-nowrap ${tab==='addresses' ? 'bg-[#E6F6DF]' : ''}`}>🏠 Addresses</button>
            <button onClick={() => setTab('wishlist')} className={`px-3 py-2 rounded whitespace-nowrap ${tab==='wishlist' ? 'bg-[#E6F6DF]' : ''}`}>💚 Wishlist</button>
            <button onClick={() => setTab('recent')} className={`px-3 py-2 rounded whitespace-nowrap ${tab==='recent' ? 'bg-[#E6F6DF]' : ''}`}>👀 Recently</button>
            <button onClick={() => setTab('tracking')} className={`px-3 py-2 rounded whitespace-nowrap ${tab==='tracking' ? 'bg-[#E6F6DF]' : ''}`}>🚚 Tracking</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="hidden md:block md:col-span-1 bg-white rounded-xl shadow p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-semibold text-[#1f3d14]">{user.name ? user.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}</div>
            <div>
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          </div>
          <nav className="space-y-2">
            <button onClick={() => setTab('profile')} className={`w-full text-left px-3 py-2 rounded ${tab==='profile' ? 'bg-[#E6F6DF]' : ''}`}>{t('dashboard.profile')}</button>
            <button onClick={() => setTab('orders')} className={`w-full text-left px-3 py-2 rounded ${tab==='orders' ? 'bg-[#E6F6DF]' : ''}`}>📦 {t('nav.myOrders')}</button>
            <button onClick={() => setTab('addresses')} className={`w-full text-left px-3 py-2 rounded ${tab==='addresses' ? 'bg-[#E6F6DF]' : ''}`}>🏠 Addresses</button>
            <button onClick={() => setTab('wishlist')} className={`w-full text-left px-3 py-2 rounded ${tab==='wishlist' ? 'bg-[#E6F6DF]' : ''}`}>💚 Wishlist</button>
            <button onClick={() => setTab('recent')} className={`w-full text-left px-3 py-2 rounded ${tab==='recent' ? 'bg-[#E6F6DF]' : ''}`}>👀 Recently Viewed</button>
            <button onClick={() => setTab('tracking')} className={`w-full text-left px-3 py-2 rounded ${tab==='tracking' ? 'bg-[#E6F6DF]' : ''}`}>🚚 Order Tracking</button>
            <div className="mt-4">
              <button onClick={() => { logout(); navigate('/'); }} className="w-full bg-red-500 text-white px-3 py-2 rounded">{t('auth.logout')}</button>
            </div>
          </nav>
        </aside>

        <main className="md:col-span-3 space-y-6">
          {tab === 'profile' && <Profile />}
          {tab === 'orders' && <MyOrders />}
          {tab === 'addresses' && <Addresses />}
          {tab === 'wishlist' && <Wishlist />}
          {tab === 'recent' && <RecentlyViewed />}
          {tab === 'tracking' && <OrderTracking />}
        </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

