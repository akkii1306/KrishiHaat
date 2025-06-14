import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductsPage from "./pages/ProductsPage";
import Admin from './pages/Admin';
import MyOrders from './pages/MyOrders';
function App() {
  return (
    <>
     <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/auth" element={<Auth />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </main>
     <Footer />
    </>
  );
}

export default App;
