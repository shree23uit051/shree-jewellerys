import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(500000);
  const [sortBy, setSortBy] = useState<string>('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Load URL Search Parameters
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || 'All';
    const urlCollection = searchParams.get('collection') || 'All';
    
    if (urlSearch) setSearchQuery(urlSearch);
    if (urlCategory) setSelectedCategory(urlCategory);
    if (urlCollection) setSelectedCollection(urlCollection);
  }, [searchParams]);

  // Categories count list
  const categoriesList = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bangles', 'Bracelets', 'Pendants'];
  const collectionsList = ['All', 'Featured', 'Best Seller', 'New Arrival'];

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return PRODUCTS.length;
    return PRODUCTS.filter((p) => p.category === cat).length;
  };

  const getCollectionCount = (coll: string) => {
    if (coll === 'All') return PRODUCTS.length;
    if (coll === 'Featured') return PRODUCTS.filter((p) => p.isFeatured).length;
    if (coll === 'Best Seller') return PRODUCTS.filter((p) => p.isBestSeller).length;
    if (coll === 'New Arrival') return PRODUCTS.filter((p) => p.isNewArrival).length;
    return 0;
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCollection('All');
    setMaxPrice(500000);
    setSortBy('default');
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const matchesCollection =
      selectedCollection === 'All' ||
      (selectedCollection === 'Featured' && product.isFeatured) ||
      (selectedCollection === 'Best Seller' && product.isBestSeller) ||
      (selectedCollection === 'New Arrival' && product.isNewArrival);

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesCollection && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // Default
  });

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
        
        {/* Breadcrumb & Header */}
        <div className="border-b border-gray-900 pb-8 mb-12">
          <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono tracking-wider uppercase mb-3">
            <a href="/" className="hover:text-[#D4AF37]">Home</a>
            <ChevronRight size={10} />
            <span className="text-[#D4AF37]">Shop Collections</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wider text-white">
            THE ATELIER COLLECTION
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide mt-2 font-sans max-w-xl">
            A complete collection of meticulously curated fine jewelry masterpieces, handworked in heavy certified gold, sparkling diamonds, and precious emerald beads.
          </p>
        </div>

        {/* Toolbar: Search, Sort, Filter trigger */}
        <div className="bg-[#0f0f0f] border border-gray-900 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          
          {/* Search bar within Shop */}
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Search by ring, diamond, ruby, gold..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161616] border border-gray-800 text-white rounded-md pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-gray-500 transition-colors"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={15} />
          </div>

          <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Filter Toggle Button for Mobile */}
            <button
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-[#161616] border border-gray-800 hover:border-[#D4AF37] rounded-md text-xs tracking-wider uppercase font-semibold text-gray-300 hover:text-[#D4AF37]"
            >
              <SlidersHorizontal size={14} /> Filters
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2.5">
              <span className="text-xs text-gray-400 font-mono hidden sm:inline uppercase tracking-widest">Sort:</span>
              <div className="relative flex items-center bg-[#161616] border border-gray-800 rounded-md px-3 py-2">
                <ArrowUpDown size={12} className="text-[#D4AF37] mr-2" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs text-white focus:outline-none pr-4 cursor-pointer select-none"
                >
                  <option value="default" className="bg-[#161616] text-white">Bespoke Default</option>
                  <option value="price-low" className="bg-[#161616] text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-[#161616] text-white">Price: High to Low</option>
                  <option value="rating" className="bg-[#161616] text-white">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Main Content Area */}
        <div className="flex gap-10">
          
          {/* Sidebar Filters (Desktop only) */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            
            {/* Category Filter */}
            <div className="border border-gray-900 rounded-lg p-5 bg-[#0f0f0f]">
              <h3 className="font-serif text-sm tracking-widest text-white uppercase border-b border-gray-900 pb-3 mb-4">
                Categories
              </h3>
              <div className="space-y-2 text-xs">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full flex items-center justify-between py-1.5 transition-colors ${
                      selectedCategory === cat ? 'text-[#D4AF37] font-semibold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{cat === 'All' ? 'All Masterpieces' : cat}</span>
                    <span className="font-mono text-[10px] text-gray-500 bg-[#161616] px-1.5 py-0.5 rounded border border-gray-900">
                      {getCategoryCount(cat)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Collection Filter */}
            <div className="border border-gray-900 rounded-lg p-5 bg-[#0f0f0f]">
              <h3 className="font-serif text-sm tracking-widest text-white uppercase border-b border-gray-900 pb-3 mb-4">
                Collections
              </h3>
              <div className="space-y-2 text-xs">
                {collectionsList.map((coll) => (
                  <button
                    key={coll}
                    onClick={() => setSelectedCollection(coll)}
                    className={`w-full flex items-center justify-between py-1.5 transition-colors ${
                      selectedCollection === coll ? 'text-[#D4AF37] font-semibold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{coll === 'All' ? 'All Collections' : coll}</span>
                    <span className="font-mono text-[10px] text-gray-500 bg-[#161616] px-1.5 py-0.5 rounded border border-gray-900">
                      {getCollectionCount(coll)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div className="border border-gray-900 rounded-lg p-5 bg-[#0f0f0f]">
              <h3 className="font-serif text-sm tracking-widest text-white uppercase border-b border-gray-900 pb-3 mb-4 flex justify-between items-center">
                <span>Maximum Price</span>
                <span className="text-[#D4AF37] font-serif font-semibold text-xs">{formatPrice(maxPrice)}</span>
              </h3>
              <div className="space-y-4 pt-2">
                <input
                  type="range"
                  min="15000"
                  max="500000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-gray-800 h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>₹15,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>
            </div>

            {/* Reset All Filters Button */}
            <button
              onClick={handleResetFilters}
              className="w-full flex items-center justify-center gap-2 border border-dashed border-gray-800 hover:border-[#D4AF37] text-xs text-gray-400 hover:text-[#D4AF37] py-3.5 rounded-md uppercase tracking-wider font-semibold transition-all duration-300"
            >
              <RefreshCw size={12} /> Clear Filters
            </button>

          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-gray-400 font-mono tracking-widest uppercase">
                SHOWING {filteredProducts.length} OF {PRODUCTS.length} HEIRLOOMS
              </p>
              {selectedCategory !== 'All' || searchQuery !== '' || selectedCollection !== 'All' || maxPrice < 500000 ? (
                <span className="text-[10px] text-[#D4AF37] font-mono tracking-wider uppercase">
                  ✓ FILTER ACTIVE
                </span>
              ) : null}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-gray-950 rounded-lg py-20 text-center max-w-lg mx-auto bg-[#0f0f0f]/50 p-6">
                <SlidersHorizontal size={36} className="text-[#D4AF37] opacity-40 mx-auto mb-4 animate-pulse" />
                <h3 className="font-serif text-lg font-bold text-white mb-2">No Exquisite Jewels Match</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 font-sans">
                  We could not find any fine jewelry pieces matches your active filters. Try clearing some selections or search query.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-white transition-colors"
                >
                  Reset Active Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Slide-out Mobile Filters Drawer */}
      <AnimatePresence>
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm lg:hidden">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="bg-[#0f0f0f] w-full max-w-sm border-l border-gray-900 h-full p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-900 pb-4">
                  <h3 className="font-serif text-base font-bold text-white tracking-wider">FILTER CRITERIA</h3>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="text-gray-400 hover:text-white text-xs font-mono tracking-widest border border-gray-900 px-3 py-1 rounded-sm uppercase"
                  >
                    CLOSE
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-serif text-xs text-[#D4AF37] uppercase tracking-widest mb-3">Categories</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {categoriesList.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-left py-2 px-3 rounded-md border text-xs ${
                          selectedCategory === cat
                            ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37] font-semibold'
                            : 'bg-[#161616] border-gray-900 text-gray-400'
                        }`}
                      >
                        {cat === 'All' ? 'All Items' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Collections */}
                <div>
                  <h4 className="font-serif text-xs text-[#D4AF37] uppercase tracking-widest mb-3">Collections</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {collectionsList.map((coll) => (
                      <button
                        key={coll}
                        onClick={() => setSelectedCollection(coll)}
                        className={`text-left py-2 px-3 rounded-md border text-xs ${
                          selectedCollection === coll
                            ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37] font-semibold'
                            : 'bg-[#161616] border-gray-900 text-gray-400'
                        }`}
                      >
                        {coll === 'All' ? 'All' : coll}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-3">
                    <span className="font-serif text-white tracking-widest uppercase">Max Price</span>
                    <span className="text-[#D4AF37] font-serif font-bold">{formatPrice(maxPrice)}</span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="500000"
                    step="5000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] bg-gray-800 h-1.5 rounded-lg"
                  />
                </div>
              </div>

              <div className="pt-8 space-y-2">
                <button
                  onClick={() => {
                    handleResetFilters();
                    setShowMobileFilters(false);
                  }}
                  className="w-full py-3 bg-[#161616] hover:bg-black border border-gray-800 text-gray-400 hover:text-[#D4AF37] text-xs font-bold tracking-widest uppercase rounded"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full py-3 bg-[#D4AF37] text-black text-xs font-bold tracking-widest uppercase rounded"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
