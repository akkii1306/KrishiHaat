const Admin = () => {
  return (
    <div className="min-h-screen bg-[#FFFBE6] text-[#347928] px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-2xl font-bold">56</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-2xl font-bold">34</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-2xl font-bold">₹45,200</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">#0012 - ₹500 - Pending</li>
            <li className="border-b pb-2">#0011 - ₹1200 - Delivered</li>
            <li className="border-b pb-2">#0010 - ₹850 - Shipped</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Low Stock Products</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">Pesticide A - 4 left</li>
            <li className="border-b pb-2">Wheat Seeds - 2 left</li>
            <li className="border-b pb-2">Hoe Tool - 3 left</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
