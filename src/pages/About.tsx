import React from 'react';
import { Award, Compass, Heart, Shield, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mr. Devendra Shree',
      role: 'Founder & Chief Goldsmith',
      bio: 'A 4th-generation master jeweler with over 45 years of experience in hand-carving historical Mughal filigree and royal gold temple works.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Ms. Evelyn Shree',
      role: 'Co-Founder & Head of Diamond Acquisition',
      bio: 'A GIA graduate gemologist who hand-selects every round brilliant solitaire diamond above 1.0 carat, ensuring premium refractive fire.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Mr. Rohan Shree',
      role: 'Creative Director of Bespoke High-Jewelry',
      bio: 'Alumnus of London Academy of Luxury Arts, Rohan merges contemporary minimalist weightless geometries with traditional heavy Polki settings.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="text-center mb-20 border-b border-gray-900 pb-12">
          <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">OUR HERITAGE STORY</p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wider text-white">
            FOUR DECADES OF PRECIOUS ARTISTRY
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide mt-3 max-w-2xl mx-auto leading-relaxed">
            Preserving centuries of design lineage, SHREE JEWELLERY has stood as a beacon of unmatched goldsmithing purity, royal bridal legacies, and luxury confidence since 1982.
          </p>
        </div>

        {/* Narrative Split Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[#D4AF37] font-mono text-xs tracking-wider uppercase">
              <Sparkles size={14} /> SINCE 1982
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-wide text-white leading-tight">
              Where Ancient Metallurgy <br /> Meets Modern Contemporary Majesty
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
              Founded in the historic royal city hubs of India, Shree Jewellery began as a private appointment-only design room for royal houses and elite merchants. Our founder, Devendra Shree, believed that jewelry is not merely a combination of metal and stone, but a living, breathing sculpture of heritage.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
              Every filigree wire we weld, every Kundan foil we mold, and every solitaire we mount is done by hereditary craftsmen whose families have served high nobility for centuries. Today, we bring this rigorous level of precision, certification, and luxury to collectors worldwide, maintaining a strict stance on ethically sourced materials.
            </p>
          </div>

          {/* Luxury illustration/photo */}
          <div className="lg:col-span-6 aspect-[4/3] rounded-lg overflow-hidden border border-[#D4AF37]/20 relative shadow-2xl bg-black">
            <img
              src="https://i.pinimg.com/736x/f3/8a/09/f38a090684d1022de854b36a0a4d0c55.jpg"
              alt="Crafting fine jewelry"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest">ATELIER HIGHLIGHT</span>
              <p className="text-xs text-white leading-relaxed mt-1">
                Hand-engraving 22K gold floral filigree details at our state-of-the-art heritage design room.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision (Gold panels) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 sm:p-10 bg-[#0f0f0f] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 rounded-lg transition-all duration-300">
            <span className="font-mono text-xs text-[#D4AF37] tracking-[0.2em] uppercase block mb-3">01 / OUR PRINCIPLE MISSION</span>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-4">Sculpting Heirlooms of Purity</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
              To curate and construct heirloom-grade, conflict-free fine jewelry that carries structural excellence. We empower hereditary artisan communities, ensuring ancestral metalwork, gemstone-slicing, and meenakari techniques are preserved for future generations.
            </p>
          </div>
          <div className="p-8 sm:p-10 bg-[#0f0f0f] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 rounded-lg transition-all duration-300">
            <span className="font-mono text-xs text-[#D4AF37] tracking-[0.2em] uppercase block mb-3">02 / OUR FUTURE VISION</span>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-4">The Global High-Jewelry Benchmark</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
              To merge traditional eastern royal aesthetics with western minimal design guidelines. Shree aims to be the leading digital destination for customized high-jewelry acquisition, providing full transparency, GIA-level confidence, and armored door delivery.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="mb-24 py-16 border-t border-b border-gray-900">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase">PRESTIGE CHARACTERISTICS</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-wider text-white mt-1">Why Shree Represents Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-5 bg-[#070707] rounded border border-gray-950 hover:border-gray-900 transition-colors">
              <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/20 mb-4 mx-auto sm:mx-0">
                <Compass size={18} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-serif tracking-widest text-white uppercase mb-2">Ancestral Goldsmiths</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Handcrafted exclusively by hereditary artisans using ancient filigree, polki, and meenakari back-enamelling techniques.
              </p>
            </div>
            <div className="p-5 bg-[#070707] rounded border border-gray-950 hover:border-gray-900 transition-colors">
              <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/20 mb-4 mx-auto sm:mx-0">
                <Award size={18} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-serif tracking-widest text-white uppercase mb-2">Dual Purity Certification</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Every metal bar is BIS Hallmark Certified, and every diamond carries an individual GIA report with laser inscriptions.
              </p>
            </div>
            <div className="p-5 bg-[#070707] rounded border border-gray-950 hover:border-gray-900 transition-colors">
              <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/20 mb-4 mx-auto sm:mx-0">
                <Shield size={18} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-sm font-serif tracking-widest text-white uppercase mb-2">Ethical Diamond Mining</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                100% compliant with the Kimberley Process, tracking every precious gemstone strictly from conflict-free mine to polishing wheel.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase">THE BESPOKE CRAFT GUILD</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-wider text-white mt-1">Our Chief Visionaries</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0f0f0f] border border-[#D4AF37]/10 rounded-lg overflow-hidden flex flex-col items-center p-6 text-center hover:border-[#D4AF37]/40 transition-colors duration-300 shadow-xl"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#D4AF37] mb-5 relative bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-serif text-base font-bold text-white tracking-wide">{member.name}</h3>
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-mono font-medium mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed font-sans px-2">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
