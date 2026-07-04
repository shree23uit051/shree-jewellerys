import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, ArrowRight, ShieldCheck, Award, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import logo from  "../assets/images/shree_luxury_logo_1783162317492.jpg";
export const Navbar: React.FC = () => {
  const { getCartCount, wishlist, searchQuery, setSearchQuery } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchExpanded(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=featured' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header id="luxury-header" className="sticky top-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo Section */}
          <div className="flex-1 md:flex-initial flex justify-center md:justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              <img
               src={logo}
                alt="Jewellerys Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-11 sm:h-11 object-cover rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.15)]"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.25em] text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  SHREE
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.45em] text-[#D4AF37] uppercase -mt-1">
                  JEWELLERY
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-widest uppercase hover:text-[#D4AF37] transition-colors duration-300 relative py-2 ${
                    isActive ? 'text-[#D4AF37] font-semibold' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Icons */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            
            {/* Search Toggle */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {isSearchExpanded && (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    onSubmit={handleSearchSubmit}
                    className="mr-2"
                  >
                    <input
                      type="text"
                      placeholder="Search jewels..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#161616] border border-[#D4AF37]/30 text-white rounded-full px-4 py-1 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              <button
                id="search-icon-btn"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="text-gray-300 hover:text-[#D4AF37] p-2 transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="text-gray-300 hover:text-[#D4AF37] p-2 transition-colors duration-300 relative"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Cart Link */}
            <Link
              to="/cart"
              className="text-gray-300 hover:text-[#D4AF37] p-2 transition-colors duration-300 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* User Profile Action */}
            <button
              id="profile-trigger-btn"
              onClick={() => setIsProfileOpen(true)}
              className="text-gray-300 hover:text-[#D4AF37] p-2 transition-colors duration-300"
              aria-label="User Profile"
            >
              <User size={20} />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#0B0B0B] border-r border-[#D4AF37]/20 z-50 flex flex-col p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2.5">
                <img
                  src={logo}
                  alt="Jewellery Logo"
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 object-cover rounded-full border border-[#D4AF37]/30"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-[0.2em] text-white">SHREE</span>
                  <span className="text-[8px] tracking-[0.4em] text-[#D4AF37] uppercase -mt-1">JEWELLERY</span>
                </div>
              </div>
              <button
                id="close-mobile-menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#D4AF37] p-1"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#161616] border border-[#D4AF37]/30 text-white rounded-md pl-4 pr-10 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D4AF37]"
                >
                  <Search size={16} />
                </button>
              </div>
            </form>

            <nav className="flex-1 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm tracking-widest uppercase py-2.5 border-b border-gray-900 flex justify-between items-center ${
                      isActive ? 'text-[#D4AF37] font-semibold' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-40" />
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-[#D4AF37]/20 pt-6 mt-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/30">
                  <User size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold tracking-wider">Avinuty Intern</h4>
                  <p className="text-[10px] text-gray-400">23uit051@avinuty.ac.in</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsProfileOpen(true);
                }}
                className="w-full text-center text-xs tracking-widest text-black bg-[#D4AF37] hover:bg-[#Bca031] font-bold py-2.5 px-4 rounded-md uppercase transition-all duration-300"
              >
                View Account
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#111111] border border-[#D4AF37]/40 rounded-xl p-6 sm:p-8 w-full max-w-md relative shadow-2xl overflow-hidden"
            >
              {/* Gold light effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

              <button
                id="close-profile-modal"
                onClick={() => setIsProfileOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border-2 border-[#D4AF37] mx-auto mb-3">
                  <User size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-xl font-bold tracking-wider text-white">WELCOME BACK</h3>
                <p className="text-xs text-[#D4AF37] tracking-[0.2em] uppercase font-mono mt-0.5">SHREE ELITE MEMBER</p>
              </div>

              <div className="space-y-4 border-t border-b border-gray-800 py-5 my-5">
                <div className="flex justify-between text-xs py-1.5">
                  <span className="text-gray-400">Account Owner</span>
                  <span className="text-white font-medium">Avinuty Intern</span>
                </div>
                <div className="flex justify-between text-xs py-1.5">
                  <span className="text-gray-400">Email Address</span>
                  <span className="text-white font-medium">23uit051@avinuty.ac.in</span>
                </div>
                <div className="flex justify-between text-xs py-1.5">
                  <span className="text-gray-400">Loyalty Level</span>
                  <span className="text-[#D4AF37] font-semibold flex items-center gap-1">
                    <Award size={14} /> Solitaire Platinum
                  </span>
                </div>
                <div className="flex justify-between text-xs py-1.5">
                  <span className="text-gray-400">Personal Advisor</span>
                  <span className="text-white font-medium">Ms. Evelyn Shree</span>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-3">
                  Recent Activity & Orders
                </h4>
                <div className="bg-[#161616] rounded-lg p-3.5 border border-gray-800/60 mb-5">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium">Order #SH-2026-904</span>
                    <span className="text-[#D4AF37] font-mono">In Transit</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-400">
                    <span>1x Solitaire Diamond Ring</span>
                    <span>Est. July 08</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => setIsProfileOpen(false)}
                  className="w-full text-center text-xs tracking-widest text-black bg-[#D4AF37] hover:bg-[#b5942b] font-bold py-3 rounded-lg uppercase transition-all duration-300"
                >
                  Continue Shopping
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2 font-mono">
                  <ShieldCheck size={14} className="text-[#D4AF37]/60" /> Secure Luxury Session
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
