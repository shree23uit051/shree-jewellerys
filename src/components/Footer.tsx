import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ShieldAlert, Award, Gem, ArrowUpRight } from 'lucide-react';
import logo from  "../assets/images/shree_luxury_logo_1783162317492.jpg";
<img src={logo} alt="Jewellerys Logo"/>
export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="luxury-footer" className="bg-[#050505] border-t border-[#D4AF37]/20 pt-16 pb-8 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Narrative */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/src/assets/images/shree_luxury_logo_1783162317492.jpg"
                alt="Jewellerys Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-cover rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  SHREE
                </span>
                <span className="text-[9px] tracking-[0.4em] text-[#D4AF37] uppercase -mt-1">
                  JEWELLERY
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 font-sans leading-relaxed pt-2">
              Heirloom-grade luxury jewelry carrying centuries of design heritage, crafted with the most brilliant ethically sourced conflict-free diamonds and pure yellow gold.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] transition-all duration-300">
                <Instagram size={14} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] transition-all duration-300">
                <Facebook size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] text-gray-400 hover:text-[#D4AF37] transition-all duration-300">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-serif text-sm tracking-[0.2em] uppercase border-b border-[#D4AF37]/10 pb-2">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/shop?category=Necklace" className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group">
                  <span>Exquisite Necklaces</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Ring" className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group">
                  <span>Solitaire Rings</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Earrings" className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group">
                  <span>Statement Earrings</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Bracelet" className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group">
                  <span>Luxury Kada & Bracelets</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Bridal" className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group">
                  <span>Royal Bridal Sets</span>
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Experience Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-serif text-sm tracking-[0.2em] uppercase border-b border-[#D4AF37]/10 pb-2">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">Our Story & Heritage</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Concierge</Link>
              </li>
              <li>
                <a href="#appointments" className="hover:text-[#D4AF37] transition-colors">Book Private Viewing</a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#D4AF37] transition-colors">Jewelry Lifetime Care</a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-[#D4AF37] transition-colors">Complimentary Insured Shipping</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-serif text-sm tracking-[0.2em] uppercase border-b border-[#D4AF37]/10 pb-2">
              THE PRIVÉ CLUB
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Subscribe to unlock early access to bespoke collections, private launch events, and high-jewelry editorials.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#111] border border-[#D4AF37]/30 text-white rounded-md px-4 py-2.5 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-gray-600 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-white transition-colors"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-[#D4AF37] tracking-wider font-mono">
                  ✓ Invitation sent. Welcome to the Privé Club.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Brand Core Promises */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-b border-[#D4AF37]/10 mb-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <Gem className="text-[#D4AF37]" size={20} />
            <div>
              <h5 className="text-xs font-serif tracking-widest text-white uppercase">GIA CERTIFIED</h5>
              <p className="text-[10px] text-gray-500">Every single stone comes fully certified by GIA/SGL.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <Award className="text-[#D4AF37]" size={20} />
            <div>
              <h5 className="text-xs font-serif tracking-widest text-white uppercase">LIFETIME WARRANTY</h5>
              <p className="text-[10px] text-gray-500">Complimentary polishing and structural lifetime guarantee.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <ShieldAlert className="text-[#D4AF37]" size={20} />
            <div>
              <h5 className="text-xs font-serif tracking-widest text-white uppercase">INSURED DELIVERY</h5>
              <p className="text-[10px] text-gray-500">100% armored secure shipping to your doorstep.</p>
            </div>
          </div>
        </div>

        {/* Copyrights and Contact Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} SHREE JEWELLERY. All Rights Reserved. Crafted for Excellency.</p>
          <div className="flex space-x-6">
            <span className="flex items-center gap-1"><Phone size={11} className="text-[#D4AF37]" /> +1 (800) 555-SHREE</span>
            <span className="flex items-center gap-1"><Mail size={11} className="text-[#D4AF37]" /> concierge@shreejewellery.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
