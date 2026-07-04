import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowLeft, ShieldCheck, Truck, ChevronRight, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Checkout modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');
  const [shippingInfo, setShippingInfo] = useState({
    name: 'Avinuty Intern',
    email: '23uit051@avinuty.ac.in',
    phone: '+91 99999 99999',
    address: 'Avinashilingam University, Mettupalayam Rd, Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641043',
    card: '•••• •••• •••• 1982',
    notes: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleQtyChange = (productId: string, qty: number, size?: string) => {
    updateCartQuantity(productId, qty, size);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleFinishCheckout = () => {
    setIsCheckoutOpen(false);
    clearCart();
    setCheckoutStep('form');
    navigate('/');
  };

  const itemTotal = getCartTotal();
  const salesTax = Math.floor(itemTotal * 0.05); // 5% luxury tax
  const finalTotal = itemTotal + salesTax;

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono tracking-wider uppercase mb-8 border-b border-gray-900 pb-4">
          <Link to="/" className="hover:text-[#D4AF37]">Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#D4AF37]">Shopping Bag</span>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Products List (Left 8 columns) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex justify-between items-end border-b border-gray-900 pb-3">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  YOUR SHOPPING BAG
                </h1>
                <span className="text-xs text-[#D4AF37] font-mono uppercase">
                  {cart.length} unique designs
                </span>
              </div>

              <div className="divide-y divide-gray-950">
                {cart.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize || index}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 gap-6"
                  >
                    
                    {/* Visual & Core details */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-20 aspect-[4/5] rounded bg-black overflow-hidden border border-gray-900 shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#D4AF37] tracking-widest uppercase font-mono">
                          {item.product.category}
                        </span>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
                          <Link to={`/product/${item.product.id}`} className="hover:text-[#D4AF37] transition-colors">
                            {item.product.name}
                          </Link>
                        </h3>
                        {item.selectedSize && (
                          <p className="text-xs text-gray-500 font-mono">
                            Selected Sizing: <span className="text-white font-semibold">{item.selectedSize}</span>
                          </p>
                        )}
                        <p className="text-xs font-serif text-[#D4AF37] font-medium sm:hidden">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Adjustment */}
                    <div className="flex items-center gap-6 justify-between w-full sm:w-auto">
                      <div className="flex items-center bg-[#111] border border-gray-900 rounded">
                        <button
                          onClick={() => handleQtyChange(item.product.id, item.quantity - 1, item.selectedSize)}
                          className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="w-9 text-center text-xs font-mono font-bold">{item.quantity}</span>
                        <button
                          onClick={() => handleQtyChange(item.product.id, item.quantity + 1, item.selectedSize)}
                          className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Total */}
                      <div className="text-right shrink-0 hidden sm:block">
                        <p className="font-serif text-sm font-semibold text-white">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <p className="text-[10px] text-gray-500 font-mono">
                          {formatPrice(item.product.price)} / unit
                        </p>
                      </div>

                      {/* Remove item */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="p-2 text-gray-500 hover:text-[#D4AF37] hover:scale-105 transition-all"
                        title="Remove jewelry item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Secure note */}
              <div className="p-4 bg-[#0f0f0f] border border-gray-900 rounded-lg flex items-start gap-3 text-xs text-gray-400">
                <ShieldCheck size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Every high-jewelry shipping contains a hidden active tracking tile, which is verified dynamically. SGL certification tags are sealed in safety cases and cannot be counterfeited.
                </p>
              </div>
            </div>

            {/* Checkout Invoice Summary (Right 4 columns) */}
            <div className="lg:col-span-4 bg-[#0f0f0f] border border-gray-900 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl h-fit">
              <h3 className="font-serif text-lg text-white font-medium border-b border-gray-900 pb-3">
                ORDER SUMMARY
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-950 pb-2">
                  <span className="text-gray-400">Atelier Subtotal</span>
                  <span className="text-white font-medium font-mono">{formatPrice(itemTotal)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-950 pb-2">
                  <span className="text-gray-400">Insured Armoured Shipping</span>
                  <span className="text-[#D4AF37] font-semibold uppercase tracking-wider font-mono">Complimentary</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-950 pb-2">
                  <span className="text-gray-400">Luxury GST / Sales Tax (5%)</span>
                  <span className="text-white font-medium font-mono">{formatPrice(salesTax)}</span>
                </div>
                <div className="flex justify-between items-end pt-3 text-sm">
                  <span className="text-white font-medium font-serif">Estimated Net Total</span>
                  <span className="text-xl text-[#D4AF37] font-bold font-serif tracking-wide">{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-950">
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#E6C24A] hover:to-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-xl"
                >
                  Proceed to Secure Checkout
                </button>
                <Link
                  to="/shop"
                  className="w-full py-3.5 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Continue Browsing Jewels
                </Link>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 pt-4 border-t border-gray-950 text-[11px] text-gray-500">
                <div className="flex items-center gap-2">
                  <Truck size={12} className="text-[#D4AF37]" /> Fully Insured Global Delivery
                </div>
                <div className="flex items-center gap-2">
                  <Gift size={12} className="text-[#D4AF37]" /> Luxury Shree Signature Wrapping
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-24 max-w-md mx-auto border border-dashed border-gray-950 rounded-lg bg-[#0f0f0f]/60 p-6">
            <ShoppingBag size={48} className="text-[#D4AF37] opacity-35 mx-auto mb-5 animate-bounce" />
            <h2 className="font-serif text-2xl font-bold text-white mb-2">Your Shopping Bag is Empty</h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto font-sans">
              You have not added any fine jewelry masterpieces to your order collection yet. Browse our collections to select your desired heirloom.
            </p>
            <Link
              to="/shop"
              className="px-8 py-3.5 bg-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase rounded hover:bg-white transition-all shadow-lg"
            >
              Browse Shop Collections
            </Link>
          </div>
        )}

      </div>

      {/* Checkout Simulated Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0f0f0f] border border-[#D4AF37]/40 rounded-xl p-6 sm:p-8 w-full max-w-lg relative shadow-2xl"
            >
              {checkoutStep === 'form' ? (
                <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                  <div className="border-b border-gray-900 pb-3">
                    <h3 className="font-serif text-lg font-bold text-[#D4AF37] tracking-wider uppercase">SECURE SECURED SECURE CHECKOUT</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">Please finalize your secure armoured vehicle delivery address.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-gray-400 block font-mono">Recipient Name *</label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.name}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                        className="w-full bg-[#161616] border border-gray-800 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-gray-400 block font-mono">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                        className="w-full bg-[#161616] border border-gray-800 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-gray-400 block font-mono">Detailed Armoured Delivery Address *</label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      className="w-full bg-[#161616] border border-gray-800 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-gray-400 block font-mono">State / Region *</label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                        className="w-full bg-[#161616] border border-gray-800 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-gray-400 block font-mono">Postal Pincode *</label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.pincode}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                        className="w-full bg-[#161616] border border-gray-800 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-gray-900">
                    <label className="text-[9px] uppercase tracking-widest text-gray-400 block font-mono">Premium Credit Card (Simulation) *</label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.card}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, card: e.target.value })}
                      placeholder="CARD NUMBER"
                      className="w-full bg-[#161616] border border-gray-800 text-white rounded px-3 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37] font-mono"
                    />
                  </div>

                  <div className="pt-3 flex justify-between items-center bg-[#161616] p-3 rounded border border-gray-900 font-serif">
                    <span className="text-xs text-gray-400 uppercase">Grand Net Invoiced Amount:</span>
                    <span className="text-base text-[#D4AF37] font-bold">{formatPrice(finalTotal)}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsCheckoutOpen(false)}
                      className="py-3 border border-gray-800 hover:border-white text-gray-400 hover:text-white font-bold text-[10px] tracking-widest uppercase rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="py-3 bg-[#D4AF37] text-black font-bold text-[10px] tracking-widest uppercase rounded shadow-lg"
                    >
                      Process Payment
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border-2 border-[#D4AF37] mx-auto animate-pulse">
                    <ShieldCheck size={32} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">ORDER ACQUIRED SECURELY</h3>
                    <p className="text-[10px] text-[#D4AF37] tracking-[0.2em] font-mono mt-1 uppercase">Shree Transaction Completed</p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-sm mx-auto">
                    We have successfully registered your payment and scheduled an armoured dispatch. A confirmation message and GPS live link has been pushed to **{shippingInfo.email}**.
                  </p>
                  <div className="bg-[#161616] border border-gray-900 rounded p-4 font-mono text-left max-w-sm mx-auto space-y-2">
                    <div className="flex justify-between text-[11px] border-b border-gray-950 pb-1.5">
                      <span className="text-gray-500">Invoice Id:</span>
                      <span className="text-white font-bold">#SH-ORD-5541920</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-gray-950 pb-1.5">
                      <span className="text-gray-500">Destination:</span>
                      <span className="text-white truncate max-w-[180px] font-sans">{shippingInfo.address}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-gray-500">Net Charged:</span>
                      <span className="text-[#D4AF37] font-bold">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleFinishCheckout}
                    className="w-full py-3.5 bg-[#D4AF37] hover:bg-white text-black font-bold text-xs tracking-widest uppercase rounded shadow-lg"
                  >
                    Close & Clear Invoice
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
