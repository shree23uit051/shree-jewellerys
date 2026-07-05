import React, { useState , useEffect } from 'react';
import darshini1 from "../assets/images/darshini1.jpg";
import shree2 from "../assets/images/shree2.jpg";
import mk3 from "../assets/images/mk3.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Heart, Shield, Award, Sparkles, MessageSquare, Compass, Send } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import showcaseImg from "../assets/images/jewellery_showcase_1783161546150.jpg";
export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
// 👉 showcase images list
const showcaseImages = [
  darshini1, // உன் import image
  shree2,
  mk3
];


const [currentIndex, setCurrentIndex] = useState(0);
  // Filter products for sections
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 3);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % showcaseImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, [showcaseImages.length]);
  const categories = [
    {
      name: 'Necklaces',
      label: 'Exquisite Necklaces',
      count: '7 Masterpieces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Rings',
      label: 'Solitaire Rings',
      count: '8 Masterpieces',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Earrings',
      label: 'Statement Earrings',
      count: '8 Masterpieces',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Bangles',
      label: 'Traditional Bangles',
      count: '7 Masterpieces',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Bracelets',
      label: 'Luxury Bracelets',
      count: '5 Masterpieces',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div className="bg-[#0B0B0B] text-white overflow-hidden">
      
      {/* 1. Luxury Hero Banner */}
      <section id="hero-banner" className="relative min-h-[90vh] py-12 lg:py-0 lg:h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Deep, premium dark overlay and zoom banner image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60 z-10" />
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1543294001-f7cbfe92237e?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury Jewellery Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: content */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-2 text-[#D4AF37] font-mono text-xs tracking-[0.3em] uppercase mb-4"
                >
                  <Compass size={14} className="animate-spin-slow text-[#D4AF37]" />
                  ESTABLISHED IN 1982 • BESPOKE LUXURY
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                >
                  Exquisite Craft <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1C0] to-[#C59B27]">
                    Timeless Splendor
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-gray-300 text-sm sm:text-base tracking-wide leading-relaxed mb-8 max-w-lg font-sans"
                >
                  Indulge in our masterfully crafted 22-karat gold, platinum, and brilliant-cut solitaire diamond heirlooms, custom-made for royalty.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/shop"
                    className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#E6C24A] hover:to-[#D4AF37] text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl"
                  >
                    Explore The Collections
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/about"
                    className="px-8 py-4 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2 transition-all duration-300 bg-black/40 backdrop-blur-sm"
                  >
                    Our Heritage Story
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right side: premium luxury jewellery showcase */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-12 lg:mt-0">
              
              {/* Backlight Glow Effect */}
              <div 
                className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-2xl pointer-events-none -z-10 animate-pulse" 
                style={{ 
                  animationDuration: '6s',
                  backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)'
                }} 
              />

              {/* Floating Container */}
              <motion.div
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] flex items-center justify-center"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Showcase Image with Radial Gradient Mask for Seamless Blending */}
                
                <motion.img
                  key={currentIndex}
                  src={showcaseImages[currentIndex]}
                  alt="Premium Luxury Jewellery Showcase"
                  className="w-full h-full object-cover rounded-2xl select-none"
 
                  style={{
                    maskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)'
                  }}
                />

                {/* Sparkling diamond animations overlay */}
                {[
                  { top: '25%', left: '30%', size: 10, delay: 0.2 }, // Left earring
                  { top: '25%', left: '70%', size: 10, delay: 0.8 }, // Right earring
                  { top: '40%', left: '50%', size: 12, delay: 1.4 }, // Necklace center
                  { top: '55%', left: '42%', size: 8, delay: 2.0 },  // Necklace detail
                  { top: '55%', left: '58%', size: 8, delay: 2.6 },  // Necklace detail
                  { top: '75%', left: '35%', size: 9, delay: 1.1 },  // Bracelet/Bangle
                  { top: '78%', left: '62%', size: 10, delay: 0.5 }, // Ring / Pendant
                  { top: '85%', left: '50%', size: 7, delay: 1.8 },  // Scattered diamond
                ].map((s, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute text-[#FFF1C0] pointer-events-none filter drop-shadow-[0_0_6px_rgba(255,241,192,0.9)]"
                    style={{ top: s.top, left: s.left }}
                    animate={{
                      opacity: [0.1, 1, 0.1],
                      scale: [0.5, 1.1, 0.5],
                      rotate: [0, 45, 90]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: s.delay,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles size={s.size} className="fill-current" />
                  </motion.div>
                ))}

                {/* Interactive elegant detail tag (Luxury branding without logos) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md border border-[#D4AF37]/30 px-4 py-1.5 rounded-full flex items-center gap-2 pointer-events-none shadow-2xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-mono uppercase">
                    SHREE SIGNATURE COLLECTION
                  </span>
                </div>
              </motion.div>

              {/* Soft shadow beneath the floating jewellery showcase */}
              <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[240px] h-[15px] bg-black/90 blur-xl rounded-full -z-20 opacity-80" />

              {/* Floating golden particles around showcase */}
              {Array.from({ length: 15 }).map((_, i) => {
                const size = Math.random() * 3 + 1.5;
                const duration = Math.random() * 6 + 7;
                const delay = Math.random() * 4;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFF1C0]/40 pointer-events-none"
                    style={{
                      width: size,
                      height: size,
                      left: `${left}%`,
                      top: `${top}%`,
                      opacity: Math.random() * 0.4 + 0.1,
                      boxShadow: '0 0 6px rgba(212, 175, 55, 0.4)',
                    }}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0.1, 0.6, 0.1],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      delay: delay,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-60">
          <span className="text-[9px] tracking-[0.25em] text-gray-400 uppercase">Scroll Down</span>
          <div className="w-[1.5px] h-10 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. Brand Statement / Values */}
      <section className="bg-[#050505] py-16 border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 mb-4">
                <Sparkles size={20} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-lg text-white tracking-widest uppercase mb-2">Artisanal Purity</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Handcrafted over hundreds of hours with Hallmarked 22K gold and pristine GIA-certified diamonds.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 mb-4">
                <Award size={20} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-lg text-white tracking-widest uppercase mb-2">Royal Inheritance</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Every design carries visual markers of legacy, blending royal heritage with minimalist sophistication.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 mb-4">
                <Shield size={20} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-lg text-white tracking-widest uppercase mb-2">Bespoke Fitting</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Custom jewelry design sessions with an elite Shree private advisor to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Shop by Category */}
      <section id="categories" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">DESIGN CATEGORIES</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-white">
            Shop by Exquisite Style
          </h2>
          <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => navigate(`/shop?category=${cat.name}`)}
              className="group cursor-pointer relative aspect-[4/5] rounded-lg overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-all duration-300 group-hover:via-black/20" />
              <img
                src={cat.image}
                alt={cat.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-5 left-0 right-0 z-20 text-center px-4">
                <h3 className="font-serif text-sm sm:text-base text-white tracking-widest uppercase mb-1">
                  {cat.name}
                </h3>
                <p className="text-[10px] text-[#D4AF37] tracking-wider uppercase font-mono group-hover:text-white transition-colors">
                  {cat.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Featured Collections (Bento grid visualizer) */}
      <section className="py-20 bg-[#070707] border-t border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Content Left */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase">BESPOKE COLLECTION</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                The Heritage <br />
                Solitaire Jewels
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                Curated by our top design house, these iconic solitaire rings and royal diamond necklaces capture unparalleled refractive beauty. Selected for exceptional color tiers, every single stone shimmers with certified prestige.
              </p>
              <div className="pt-4 flex flex-col gap-4 border-t border-gray-900">
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-sm font-mono font-bold">01/</span>
                  <div>
                    <h4 className="text-white text-xs uppercase tracking-wider font-semibold">Conflict-Free Certified</h4>
                    <p className="text-[11px] text-gray-500">Every diamond is ethically mined via the Kimberley Process.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-sm font-mono font-bold">02/</span>
                  <div>
                    <h4 className="text-white text-xs uppercase tracking-wider font-semibold">GIA Graded D-to-F Tiers</h4>
                    <p className="text-[11px] text-gray-500">Only color grades displaying extreme colorless brilliance are mounted.</p>
                  </div>
                </div>
              </div>
              <Link
                to="/shop?collection=featured"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#D4AF37] hover:text-white transition-colors duration-300 pt-2"
              >
                Browse Masterpieces <ArrowRight size={14} />
              </Link>
            </div>

            {/* Visual Right (Bento grid layout) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredProducts.map((p, i) => (
                <div
                  key={p.id}
                  className={`relative overflow-hidden rounded-lg border border-[#D4AF37]/10 group shadow-2xl ${
                    i === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-5">
                    <p className="text-[#D4AF37] text-[10px] tracking-wider uppercase font-mono mb-1">
                      {p.category} • MASTERPIECE
                    </p>
                    <h3 className="font-serif text-base sm:text-lg text-white font-semibold mb-2">
                      {p.name}
                    </h3>
                    <Link
                      to={`/product/${p.id}`}
                      className="text-[11px] tracking-widest text-[#D4AF37] hover:text-white uppercase font-bold flex items-center gap-1.5 transition-colors"
                    >
                      Acquire details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Best Sellers Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">POPULAR HEIRLOOMS</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-white">
              The Best Sellers
            </h2>
          </div>
          <Link
            to="/shop?sort=bestselling"
            className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] hover:text-white uppercase flex items-center gap-1.5 transition-colors duration-300 mt-4 sm:mt-0 border-b border-[#D4AF37]/40 pb-1"
          >
            View All Best Sellers <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. Promotional Banner (Middle of page, high impact) */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/85 z-10" />
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=80"
            alt="Royal Jewelry Collection"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-3">CONCIERGE OFFERS</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wider mb-6 leading-tight">
            The Royalty Premium Bridal Concierge
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-sans">
            Schedule a private, fully secured physical viewing of our bespoke collections. Enjoy custom design options with virtual simulations and custom weight configuration in absolute confidentiality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-white transition-colors duration-300"
            >
              Request Private Consultation
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hello%20Shree%20Jewellery%2C%20I%20am%20interested%20in%20arranging%20a%20bridal%20concierge%20private%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 bg-black/60"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>

      {/* 7. New Arrivals */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">RECENT RELEASES</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-white">
              The New Arrivals
            </h2>
          </div>
          <Link
            to="/shop?sort=newest"
            className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] hover:text-white uppercase flex items-center gap-1.5 transition-colors duration-300 mt-4 sm:mt-0 border-b border-[#D4AF37]/40 pb-1"
          >
            View All New Arrivals <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 8. Customer Reviews Slider */}
      <section className="py-24 bg-[#050505] border-t border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">TRUST & PRESTIGE</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-white">
              Testimonials of Our Elite Clients
            </h2>
            <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#0f0f0f] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 p-6 rounded-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#D4AF37] space-x-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < review.rating ? 'fill-[#D4AF37]' : 'opacity-20'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-xs font-sans leading-relaxed italic mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="border-t border-gray-900 pt-4 mt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white text-xs font-bold tracking-wider">{review.name}</h4>
                    <span className="text-[9px] text-[#D4AF37] uppercase font-mono bg-[#D4AF37]/5 px-2 py-0.5 rounded border border-[#D4AF37]/10">
                      Verified Collector
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-mono mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 mx-auto mb-6">
          <MessageSquare size={20} className="text-[#D4AF37]" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white mb-3">
          Join the Shree Editorial
        </h2>
        <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed mb-8">
          Subscribers receive curated catalogs of bespoke heritage gold pieces, priority booking for private physical viewing rooms, and custom sizing options.
        </p>

        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              placeholder="Enter your personal email..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 bg-[#111] border border-[#D4AF37]/30 text-white rounded-md px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-gray-600 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#b5942b] text-black font-semibold text-xs tracking-[0.15em] uppercase rounded-md flex items-center justify-center gap-1.5 transition-all"
            >
              Subscribe <Send size={12} />
            </button>
          </div>
          {newsletterSubscribed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-[#D4AF37] font-mono mt-3"
            >
              Thank you. You have been added to our private ledger of collectors.
            </motion.p>
          )}
        </form>
      </section>

    </div>
  );
};
