import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-[#0B0B0B] text-white min-h-screen flex flex-col justify-between font-sans selection:bg-[#D4AF37]/30 selection:text-white">
          {/* Universal Header */}
          <Navbar />
          
          {/* Main Workspace Stage */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
          
          {/* Universal Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
