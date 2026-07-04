import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, Map, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'bespoke',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset form after a timeout
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: 'bespoke', message: '' });
      }, 6000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16 border-b border-gray-900 pb-10">
          <p className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-2">SHREE CONCIERGE</p>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wider text-white">
            CONTACT OUR PRIVATE ADVISORS
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 tracking-wide mt-3 max-w-xl mx-auto leading-relaxed">
            Whether inquiring about bespoke sizing, scheduling a private viewing, or requesting custom sketches, our luxury concierge desk is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Side: Contact details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Cards */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-[#D4AF37] tracking-widest uppercase mb-4">The Flagship Salons</h3>
              
              <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] border border-gray-900 rounded-lg">
                <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-white text-xs uppercase tracking-wider font-bold">Main Headquarters & Atelier</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1 leading-relaxed">
                    786 Rajpath Heritage Avenue, Suite 101<br />
                    Connaught Place, New Delhi, India 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] border border-gray-900 rounded-lg">
                <Phone className="text-[#D4AF37] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-white text-xs uppercase tracking-wider font-bold">Direct Telephone lines</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Salon Line: +91 11 555-SHREE (74733)<br />
                    Toll-Free USA: +1 (800) 555-SHREE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] border border-gray-900 rounded-lg">
                <Mail className="text-[#D4AF37] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-white text-xs uppercase tracking-wider font-bold">Secure Support Email</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    General Inquiries: concierge@shreejewellery.com<br />
                    Bespoke Custom Designing: atelier@shreejewellery.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#0f0f0f] border border-gray-900 rounded-lg">
                <Clock className="text-[#D4AF37] shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="text-white text-xs uppercase tracking-wider font-bold">Salon Operating Hours</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Monday to Saturday: 10:00 AM – 8:00 PM (IST)<br />
                    Sunday: Private VIP Appointmens Only
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="p-6 bg-[#128C7E]/10 border border-[#128C7E]/40 rounded-lg flex flex-col justify-between items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wide">Instant WhatsApp Concierge</h4>
                  <p className="text-xs text-gray-300">Start an instant dialogue with Evelyn Shree.</p>
                </div>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hello%20Shree%20Jewellery%2C%20I%20would%20like%20to%20consult%20on%20a%20fine%20jewelry%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-[#128C7E] hover:bg-[#1f9c8d] text-white font-bold text-xs uppercase tracking-widest rounded-md transition-colors"
              >
                Launch Live Session
              </a>
            </div>

          </div>

          {/* Right Side: Elegant Form */}
          <div className="lg:col-span-7 bg-[#0f0f0f] border border-[#D4AF37]/15 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16 space-y-5"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border-2 border-[#D4AF37] mx-auto">
                  <ShieldCheck size={32} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">COMMUNICATION RECEIVED</h3>
                <p className="text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-mono">Bespoke Ticket Registered Successfully</p>
                <p className="text-gray-400 text-xs font-sans max-w-sm mx-auto leading-relaxed">
                  Thank you, **{formData.name}**. An elite private advisor has been assigned to your ticket. We will contact you at **{formData.email}** within the next 2 hours.
                </p>
                <div className="pt-4 text-[10px] text-gray-500 font-mono">
                  Your tracking reference: #SH-REG-77402
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-900 pb-4">
                  <h3 className="font-serif text-lg text-white font-medium">Concierge Request Form</h3>
                  <p className="text-[10px] text-gray-500 font-sans mt-1">
                    Please provide your information below to initiate a private consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Lady Isabella"
                      className="w-full bg-[#161616] border border-gray-800 text-white rounded px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-gray-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. isabella@luxury.com"
                      className="w-full bg-[#161616] border border-gray-800 text-white rounded px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block">Phone Number (with country code)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full bg-[#161616] border border-gray-800 text-white rounded px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-gray-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block">Reason for Inquiry</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#161616] border border-gray-800 text-white rounded px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="bespoke">Bespoke Custom Jewelry Designing</option>
                      <option value="bridal">Bridal Set Consultation</option>
                      <option value="appointment">Private Viewing Appointment</option>
                      <option value="order">Active Order Sizing / Delivery Status</option>
                      <option value="partnership">Press & Corporate Collaborations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block">Inquiry Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about the gemstone carat preference, gold purity, event date, or custom engraving words you are envisioning..."
                    className="w-full bg-[#161616] border border-gray-800 text-white rounded px-4 py-3 text-xs focus:outline-none focus:border-[#D4AF37] placeholder-gray-600 transition-colors font-sans resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#E6C24A] hover:to-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                  Register Inquiry Session <ArrowRight size={14} />
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Google Map Luxury Dark Mode Placeholder */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-900 pb-3 mb-6">
            <h3 className="font-serif text-lg tracking-wider text-white flex items-center gap-2">
              <Map size={18} className="text-[#D4AF37]" /> Map coordinates of flagships
            </h3>
            <span className="text-[10px] text-[#D4AF37] font-mono">MAPPED SALONS</span>
          </div>

          <div className="relative aspect-[21/9] min-h-[250px] bg-[#090909] rounded-xl overflow-hidden border border-[#D4AF37]/25 flex items-center justify-center">
            
            {/* Styled dark grid and lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            
            {/* Map visual details */}
            <div className="relative z-10 text-center space-y-4 p-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#D4AF37] animate-ping opacity-40 rounded-full" />
                <div className="w-4 h-4 bg-[#D4AF37] border-2 border-black rounded-full shadow-lg relative z-10" />
              </div>
              <div>
                <h4 className="font-serif text-sm tracking-widest uppercase text-white font-bold">SHREE ATELIER SALON</h4>
                <p className="text-[10px] text-gray-400 font-mono mt-0.5">LATITUDE: 28.6139° N, LONGITUDE: 77.2090° E</p>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed mt-1 font-sans">
                  Connaught Place, New Delhi. Accessible via private gated elevator only. Secure armored parking valet available.
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] text-[#D4AF37] hover:text-white uppercase font-bold tracking-widest font-mono border border-[#D4AF37]/30 hover:border-white px-4 py-1.5 rounded"
              >
                Launch Navigation App
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
