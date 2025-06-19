import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductsPage from "./pages/ProductsPage";
// import MyOrders from "./pages/MyOrders";
function App() {
  return (
    <>
     <ToastContainer />
     <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/auth" element={<Auth />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
       {/* <Route path="/my-orders" element={<MyOrders />} /> */}
        </Routes>
      </main>
     <Footer />
    </>
  );
}

export default App;
