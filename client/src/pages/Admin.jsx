// import { useState } from "react";

// const Admin = () => {
//   const [stats] = useState({
//     users: 102,
//     orders: 67,
//     products: 34,
//   });

//   const [orders] = useState([
//     { id: "ORD001", user: "Amit", amount: 1200, status: "Delivered" },
//     { id: "ORD002", user: "Priya", amount: 850, status: "Pending" },
//     { id: "ORD003", user: "Rahul", amount: 430, status: "Cancelled" },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#FFFBE6] pt-24 px-4">
//       <h2 className="text-3xl font-bold text-center text-[#347928] mb-10">
//         Admin Dashboard
//       </h2>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
//         <div className="bg-white rounded-xl shadow p-6 text-center">
//           <h3 className="text-xl font-semibold text-[#347928] mb-2">Total Users</h3>
//           <p className="text-3xl font-bold">{stats.users}</p>
//         </div>
//         <div className="bg-white rounded-xl shadow p-6 text-center">
//           <h3 className="text-xl font-semibold text-[#347928] mb-2">Total Orders</h3>
//           <p className="text-3xl font-bold">{stats.orders}</p>
//         </div>
//         <div className="bg-white rounded-xl shadow p-6 text-center">
//           <h3 className="text-xl font-semibold text-[#347928] mb-2">Total Products</h3>
//           <p className="text-3xl font-bold">{stats.products}</p>
//         </div>
//       </div>

//       {/* Orders Table */}
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow overflow-x-auto">
//         <div className="bg-[#347928] text-white font-semibold px-6 py-4 rounded-t-xl">
//           Recent Orders
//         </div>
//         <table className="w-full text-sm text-left text-gray-700">
//           <thead className="bg-[#C0EBA6] text-[#347928]">
//             <tr>
//               <th className="px-6 py-3">Order ID</th>
//               <th className="px-6 py-3">User</th>
//               <th className="px-6 py-3">Amount (₹)</th>
//               <th className="px-6 py-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr
//                 key={order.id}
//                 className="border-t border-gray-200 hover:bg-[#F9FFE8]"
//               >
//                 <td className="px-6 py-4">{order.id}</td>
//                 <td className="px-6 py-4">{order.user}</td>
//                 <td className="px-6 py-4">{order.amount}</td>
//                 <td className="px-6 py-4">{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Admin;
