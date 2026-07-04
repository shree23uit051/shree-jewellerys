import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart } = useCart();
  const wishlisted = isInWishlist(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#0f0f0f] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full shadow-lg"
    >
      {/* Product Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#161616]">
        
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-[#050505]/70 border border-[#D4AF37]/20 backdrop-blur-sm flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart
            size={16}
            className={`transition-colors duration-300 ${
              wishlisted ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'
            }`}
          />
        </button>

        {/* Status Badges */}
        <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestSeller && (
            <span className="bg-[#D4AF37] text-black text-[9px] tracking-wider uppercase font-extrabold px-2 py-0.5 rounded-sm">
              BEST SELLER
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-black/80 border border-[#D4AF37] text-[#D4AF37] text-[9px] tracking-wider uppercase font-bold px-2 py-0.5 rounded-sm">
              NEW ARRIVAL
            </span>
          )}
        </div>

        {/* Hover overlay icons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1 flex items-center justify-center gap-3.5">
          <Link
            to={`/product/${product.id}`}
            className="w-11 h-11 bg-black border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
            title="View Details"
          >
            <Eye size={18} />
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            className="w-11 h-11 bg-[#D4AF37] text-black hover:bg-white hover:border-white border border-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
            title="Add to Cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Main Product Image */}
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </Link>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-mono mb-1.5">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-serif text-sm sm:text-base text-white tracking-wide leading-snug hover:text-[#D4AF37] transition-colors mb-2 line-clamp-1">
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>

          {/* Ratings */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex text-[#D4AF37]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className={i < Math.floor(product.rating) ? 'fill-[#D4AF37]' : 'opacity-30'}
                />
              ))}
            </div>
            <span className="text-[10px] text-gray-400 font-mono">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Price & Action button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-900 mt-2">
          <span className="font-serif text-sm sm:text-base text-white font-semibold tracking-wide">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addToCart(product, 1)}
            className="text-[11px] font-sans tracking-widest text-[#D4AF37] hover:text-white uppercase transition-colors font-bold flex items-center gap-1 group/btn"
          >
            Add to Bag 
            <ShoppingBag size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
