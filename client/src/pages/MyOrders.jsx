// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaBoxOpen, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setOrders([
//           {
//             _id: "demo1",
//             createdAt: new Date().toISOString(),
//             orderItems: [
//               { name: "Wheat Seeds", quantity: 2, price: 100 },
//               { name: "Organic Fertilizer", quantity: 1, price: 250 },
//             ],
//             totalPrice: 450,
//             paymentMethod: "Cash on Delivery",
//             status: "Delivered",
//           },
//         ]);
//         return;
//       }

//       try {
//         const res = await axios.get("http://localhost:5000/api/orders/my", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrders(res.data);
//       } catch (err) {
//         console.error("Failed to fetch orders", err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#FFFBE6] p-6">
//       <h1 className="text-4xl font-bold text-center text-[#2f5723] mb-10">🧾 My Orders</h1>

//       {orders.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">You haven’t placed any orders yet.</p>
//       ) : (
//         <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex items-center gap-2 text-[#347928] font-medium">
//                   <FaBoxOpen />
//                   <span>Order ID:</span>
//                   <span className="text-gray-600 text-sm">{order._id.slice(-6)}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <FaCalendarAlt />
//                   {new Date(order.createdAt).toLocaleDateString()}
//                 </div>
//               </div>

//               <div className="mt-4 space-y-2">
//                 {order.orderItems.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex justify-between text-sm border-b border-dashed pb-1"
//                   >
//                     <span>
//                       {item.name} × {item.quantity}
//                     </span>
//                     <span className="text-[#2f5723] font-semibold">
//                       ₹{item.quantity * item.price}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-4 flex justify-between items-center">
//                 <div className="flex flex-col text-sm text-gray-700">
//                   <span className="font-medium">
//                     Payment:{" "}
//                     <span className="bg-[#C0EBA6] px-2 py-0.5 rounded-md text-[#2f5723]">
//                       {order.paymentMethod}
//                     </span>
//                   </span>
//                   <span className="font-medium mt-1">
//                     Status:{" "}
//                     <span
//                       className={`px-2 py-0.5 rounded-md ${
//                         order.status === "Delivered"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-yellow-100 text-yellow-800"
//                       }`}
//                     >
//                       {order.status || "Processing"}
//                     </span>
//                   </span>
//                 </div>
//                 <div className="text-xl font-bold text-[#2f5723] flex items-center gap-1">
//                   <FaRupeeSign />
//                   {order.totalPrice}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrders;
