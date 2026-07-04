import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight, ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';

export const Wishlist: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  const handleQuickMoveToBag = (product: any) => {
    addToCart(product, 1);
    toggleWishlist(product); // Remove from wishlist after moving to cart
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono tracking-wider uppercase mb-8 border-b border-gray-900 pb-4">
          <Link to="/" className="hover:text-[#D4AF37]">Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#D4AF37]">Wishlist Private Ledger</span>
        </div>

        <div className="flex justify-between items-end border-b border-gray-900 pb-4 mb-10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase">PRIVATE LEDGER</span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mt-1">
              YOUR ATELIER WISHLIST
            </h1>
          </div>
          <span className="text-xs text-gray-500 font-mono">
            {wishlist.length} Designs Saved
          </span>
        </div>

        {wishlist.length > 0 ? (
          <div>
            {/* Grid Layout of Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {wishlist.map((product) => (
                <div key={product.id} className="relative group">
                  {/* Reuse our ProductCard which contains the wishlist heart button, hover states etc */}
                  <ProductCard product={product} />

                  {/* Add an overlay button for moving to bag quickly */}
                  <div className="mt-3.5">
                    <button
                      onClick={() => handleQuickMoveToBag(product)}
                      className="w-full py-2.5 bg-[#111] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-semibold text-[10px] tracking-widest uppercase rounded border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag size={11} /> Acquire & Move To Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-gray-900 pt-8 text-center max-w-md mx-auto">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                These saved jewelry creations are registered locally on your browser session. Book a private viewing to see them in person or customize materials.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white uppercase font-bold tracking-widest font-mono mt-4 border-b border-[#D4AF37]/30 pb-0.5"
              >
                Arrange Private Viewing Room <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 max-w-md mx-auto border border-dashed border-gray-950 rounded-lg bg-[#0f0f0f]/60 p-6">
            <Heart size={48} className="text-[#D4AF37] opacity-30 mx-auto mb-5 animate-pulse" />
            <h2 className="font-serif text-2xl font-bold text-white mb-2">Your Wishlist ledger is Empty</h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto font-sans">
              No saved items found. Click the golden heart icon on any jewelry item to add it to your private portfolio list.
            </p>
            <Link
              to="/shop"
              className="px-8 py-3.5 bg-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase rounded hover:bg-white transition-all shadow-lg"
            >
              Discover Rare Jewels
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};
