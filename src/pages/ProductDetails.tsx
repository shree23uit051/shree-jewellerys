import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, Heart, MessageCircle, ArrowLeft, Shield, Award, Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  // States
  const [activeImage, setActiveImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'shipping'>('details');

  // Set default active image when product changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setQuantity(1);
      // Default sizes based on category
      if (product.category === 'Rings') {
        setSelectedSize('7');
      } else if (product.category === 'Bracelets' || product.category === 'Bangles') {
        setSelectedSize('6.5 inches');
      } else {
        setSelectedSize('');
      }
    }
  }, [product]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="bg-[#0B0B0B] text-white min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md border border-gray-900 rounded-lg p-10 bg-[#0f0f0f]">
          <h2 className="font-serif text-2xl font-bold text-[#D4AF37] mb-3">Masterpiece Not Found</h2>
          <p className="text-xs text-gray-500 mb-6 font-sans leading-relaxed">
            The particular heirloom you are seeking is either in private archives or does not exist in our public collections.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-widest text-black bg-[#D4AF37] hover:bg-white px-6 py-3 rounded uppercase font-bold transition-colors"
          >
            <ArrowLeft size={14} /> Back to Atelier Shop
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize || undefined);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize || undefined);
    navigate('/cart');
  };

  const generateWhatsAppLink = () => {
    const message = `Hello Shree Jewellery, I am interested in acquiring the "${product.name}" (${formatPrice(product.price)}). ${
      selectedSize ? `Preferred Size: ${selectedSize}.` : ''
    } Can you please confirm the availability and gold weight options?`;
    return `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
  };

  // Filter related items
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  // Sizes lists
  const ringSizes = ['5', '6', '7', '8', '9', '10'];
  const braceletSizes = ['6.0 inches', '6.5 inches', '7.0 inches', '7.5 inches'];

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono tracking-wider uppercase mb-8 border-b border-gray-900 pb-4">
          <Link to="/" className="hover:text-[#D4AF37]">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-[#D4AF37]">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-[#D4AF37]">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-[#D4AF37] line-clamp-1 max-w-xs">{product.name}</span>
        </div>

        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#D4AF37] uppercase tracking-widest mb-8 font-mono group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return to all Collections
        </Link>

        {/* Product Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Visual Galleries */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="aspect-[4/5] bg-[#0f0f0f] border border-[#D4AF37]/15 rounded-lg overflow-hidden relative shadow-2xl">
              <img
                src={activeImage || product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Star-shimmer watermark */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-[#D4AF37]/30 text-[#D4AF37] flex items-center gap-1 text-[10px] font-mono tracking-wider">
                <Sparkles size={11} className="animate-pulse" /> CERTIFIED HEIRLOOM
              </div>
            </div>

            {/* Thumbnails Gallery Carousel */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 aspect-[4/5] shrink-0 rounded-md overflow-hidden bg-[#161616] border transition-all ${
                    activeImage === img ? 'border-[#D4AF37] scale-95 shadow-md' : 'border-gray-900 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} gallery ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Transaction Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Category & Ratings */}
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
                  {product.category} COLLECTION
                </span>
                <div className="flex items-center gap-1 bg-[#111] px-2.5 py-1 rounded border border-gray-900 text-xs text-gray-300">
                  <Star size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                  <span className="font-serif font-semibold">{product.rating}</span>
                  <span className="text-gray-500">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <div className="space-y-2">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white leading-tight">
                  {product.name}
                </h1>
                <p className="font-serif text-2xl sm:text-3xl text-[#D4AF37] font-semibold tracking-wide">
                  {formatPrice(product.price)}
                </p>
                <p className="text-[10px] text-gray-500 tracking-wider uppercase font-mono">
                  Complimentary luxury box packing & fully insured transit included.
                </p>
              </div>

              {/* Brief Intro */}
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Size Selectors */}
              {product.category === 'Rings' && (
                <div className="space-y-2.5 pt-2 border-t border-gray-900">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-mono uppercase tracking-wider">Select US Ring Size:</span>
                    <a href="#size-guide" className="text-[#D4AF37] text-[10px] uppercase tracking-widest underline">Size Guide</a>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {ringSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-11 h-11 rounded-md text-xs font-bold border transition-all flex items-center justify-center ${
                          selectedSize === size
                            ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-extrabold scale-105 shadow-md'
                            : 'bg-transparent border-gray-800 text-gray-400 hover:border-[#D4AF37] hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(product.category === 'Bracelets' || product.category === 'Bangles') && (
                <div className="space-y-2.5 pt-2 border-t border-gray-900">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-mono uppercase tracking-wider">Select Wrist Length:</span>
                    <span className="text-gray-500 text-[10px]">Adjustable Clasp</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {braceletSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 h-11 rounded-md text-xs font-bold border transition-all flex items-center justify-center ${
                          selectedSize === size
                            ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-extrabold scale-105 shadow-md'
                            : 'bg-transparent border-gray-800 text-gray-400 hover:border-[#D4AF37] hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-900">
                <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Quantity:</span>
                <div className="flex items-center bg-[#111] border border-gray-800 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-xs font-mono font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-md border flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-mono transition-all ${
                    isInWishlist(product.id)
                      ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37]'
                      : 'border-gray-800 text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                  }`}
                >
                  <Heart size={14} className={isInWishlist(product.id) ? 'fill-[#D4AF37]' : ''} /> 
                  {isInWishlist(product.id) ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
              </div>

              {/* CTA Transaction Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full h-14 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <ShoppingBag size={16} /> Add to Shopping Bag
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full h-14 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#E6C24A] hover:to-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                  Acquire Now (Buy)
                </button>
              </div>

              {/* WhatsApp direct link */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 bg-[#128C7E] hover:bg-[#25D366] text-white font-bold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md"
                >
                  <MessageCircle size={18} /> Order Via WhatsApp
                </a>
              </div>

            </div>

            {/* Core Brand Value Items */}
            <div className="grid grid-cols-3 gap-3 pt-8 border-t border-gray-900 mt-8 text-center sm:text-left">
              <div className="p-3 bg-[#0f0f0f] border border-gray-950 rounded">
                <Award size={16} className="text-[#D4AF37] mx-auto sm:mx-0 mb-1" />
                <h5 className="text-[10px] text-white font-bold uppercase tracking-widest font-mono">100% Certified</h5>
                <p className="text-[9px] text-gray-500">BIS Hallmark & GIA certs</p>
              </div>
              <div className="p-3 bg-[#0f0f0f] border border-gray-950 rounded">
                <Shield size={16} className="text-[#D4AF37] mx-auto sm:mx-0 mb-1" />
                <h5 className="text-[10px] text-white font-bold uppercase tracking-widest font-mono">Armored Shipping</h5>
                <p className="text-[9px] text-gray-500">Fully insured courier</p>
              </div>
              <div className="p-3 bg-[#0f0f0f] border border-gray-950 rounded">
                <RefreshCw size={16} className="text-[#D4AF37] mx-auto sm:mx-0 mb-1" />
                <h5 className="text-[10px] text-white font-bold uppercase tracking-widest font-mono">14-Day Returns</h5>
                <p className="text-[9px] text-gray-500">Hassle-free exchange</p>
              </div>
            </div>

          </div>
        </div>

        {/* Tabbed Info Panel: Narrative, Specs, Shipping */}
        <section className="mb-24 border border-gray-900 rounded-lg p-6 sm:p-8 bg-[#0f0f0f]">
          <div className="flex border-b border-gray-900 mb-6">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 text-xs tracking-[0.2em] uppercase font-semibold border-b-2 mr-6 sm:mr-10 transition-all ${
                activeTab === 'details' ? 'border-[#D4AF37] text-white' : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              The Story & Inspiration
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-xs tracking-[0.2em] uppercase font-semibold border-b-2 mr-6 sm:mr-10 transition-all ${
                activeTab === 'specs' ? 'border-[#D4AF37] text-white' : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              Gemstone Specifications
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 text-xs tracking-[0.2em] uppercase font-semibold border-b-2 transition-all ${
                activeTab === 'shipping' ? 'border-[#D4AF37] text-white' : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              Insured Logistics & Returns
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'details' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="space-y-4"
              >
                <h3 className="font-serif text-lg text-white font-medium tracking-wide">The Crafting Process</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {product.longDescription}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed font-sans">
                  Our hereditary artisans combine age-old techniques with modern computer-aided design simulations to ensure structural perfection. The setting has been optimized to maximize light exposure to the gemstones, giving them unmatched brightness and fiery dispersion.
                </p>
              </motion.div>
            )}

            {activeTab === 'specs' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans"
              >
                <div className="flex justify-between py-2 border-b border-gray-900">
                  <span className="text-gray-500">Metal & Framing</span>
                  <span className="text-white font-medium font-mono">{product.specifications.metal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900">
                  <span className="text-gray-500">Gold Purity Rating</span>
                  <span className="text-white font-medium font-mono">{product.specifications.purity}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900">
                  <span className="text-gray-500">Certified Gemstones</span>
                  <span className="text-white font-medium font-mono">{product.specifications.gemstone}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900">
                  <span className="text-gray-500">Gross Metal Weight</span>
                  <span className="text-white font-medium font-mono">{product.specifications.weight}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900 sm:col-span-2">
                  <span className="text-gray-500">Laboratory Certification</span>
                  <span className="text-[#D4AF37] font-semibold font-mono uppercase tracking-wide">
                    {product.specifications.certification}
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === 'shipping' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-300 font-sans"
              >
                <p>
                  We offer **complimentary, fully-insured armoured transport** globally. All deliveries require an adult signature and ID verification at the time of delivery. A live tracker link and coordinates are sent via SMS and Email as soon as the package leaves our secure vault.
                </p>
                <p>
                  Returns are eligible within **14 days of receipt** in original pristine condition with security tag and GIA certification papers fully intact. We provide immediate complementary pick-up in high-security logistics vehicles.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Recommended / Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="pt-12 border-t border-gray-900">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <p className="text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase">MATCHING HARMONIES</p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-white">
                  Related Fine Masterpieces
                </h3>
              </div>
              <Link
                to={`/shop?category=${product.category}`}
                className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] hover:text-white uppercase flex items-center gap-1.5 transition-colors mt-2 sm:mt-0"
              >
                Explore more of this category <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
