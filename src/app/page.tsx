"use client";

import { motion } from "framer-motion";
import { MoveRight, Play, Star, ArrowUpRight, ShieldCheck, Globe, Zap, BarChart3, Clock, Users, Package, Radar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Stat Item Component
const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center py-12 border-r border-slate-100 last:border-0">
    <motion.h3 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-black text-slate-900 mb-2 tracking-tighter"
    >
      {value}
    </motion.h3>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{label}</p>
  </div>
);

// Solution Card Component
const SolutionCard = ({ title, status, image, delay }: { title: string, status: string, image: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative cursor-pointer"
  >
    <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">{status}</p>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">{title}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-48 pb-0 bg-[#f0f9ff] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-12"
            >
              Delivering Efficiency. <br />
              <span className="text-primary">Driving Growth.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Link href="/signup" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-slate-900 transition-all flex items-center gap-3 shadow-xl">
                Get Started <span className="opacity-60">&gt;</span>
              </Link>
            </motion.div>
          </div>

          {/* Hero Ship Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full max-w-6xl mx-auto rounded-t-[40px] overflow-hidden shadow-[0_-20px_80px_-20px_rgba(37,99,235,0.2)]"
          >
            <div className="aspect-[21/9] relative">
              <Image 
                src="/hero_ship.png" 
                alt="Vortex Global Hero" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20" />
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden md:block">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-2xl"
              >
                <Play fill="currentColor" size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <StatItem value="24+" label="Years of Experience" />
            <StatItem value="67M+" label="Satisfied Clients" />
            <StatItem value="83+" label="Delivery Monthly" />
            <StatItem value="3457" label="Total Store" />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-24">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black text-slate-900 leading-[0.95] tracking-tighter uppercase mb-8">
                Comprehensive <br />
                <span className="text-primary italic">Live Logistics</span> <br />
                Solutions
              </h2>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-tight leading-relaxed mb-10 max-w-md">
                Our comprehensive logistics services are designed to handle every stage of your supply chain with precision. From freight forwarding and warehousing.
              </p>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary transition-all">
                Explore Services &gt;
              </button>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <SolutionCard 
                title="Freight Forwarding" 
                status="Shipment Tracking" 
                image="/freight_card.png" 
                delay={0.1}
              />
              <SolutionCard 
                title="Continental Ocean Freight" 
                status="International" 
                image="/ocean_card.png" 
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Our Process</p>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
              How it <span className="text-primary italic">Works.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Package, title: "Book Your Shipment", desc: "Select your destination and package type through our easy-to-use portal." },
              { icon: Radar, title: "Real-time Tracking", desc: "Monitor your assets as they move through our global logistics network." },
              { icon: ShieldCheck, title: "Secure Delivery", desc: "Your package is delivered safely and on time, guaranteed." }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-tight leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-3xl">
              <Image 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200" 
                alt="Global Logistics Hub" 
                fill 
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Why Choose Vortex</p>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-12">
                Unmatched <br />
                <span className="text-primary italic">Precision & Speed.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { icon: Clock, title: "24/7 Monitoring", desc: "Continuous oversight of your valuable cargo." },
                  { icon: Globe, title: "Global Network", desc: "Presence in over 180 countries worldwide." },
                  { icon: ShieldCheck, title: "Enhanced Security", desc: "Military-grade encryption for all tracking data." },
                  { icon: Zap, title: "Instant Updates", desc: "Live status changes sent directly to your device." }
                ].map((feature, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-tight leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Dark) */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[150px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Real Reviews</p>
              <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                What Our <br />
                <span className="text-primary">Global Partners</span> <br />
                Are Saying
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
                &larr;
              </button>
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all">
                &rarr;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Darlene Robertson",
                role: "Operations Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
                quote: "The transparency provided by Vortex Global is unmatched. We've seen a 30% increase in delivery efficiency since switching."
              },
              {
                name: "Albert Flores",
                role: "Supply Chain Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
                quote: "Real-time telemetry has saved us countless hours of manual tracking. It's the most reliable platform we've ever used."
              },
              {
                name: "Marvin McKinney",
                role: "Logistics Lead",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
                quote: "Their global reach is impressive. No matter where our cargo is, we have perfect visibility through the Vortex portal."
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-12 rounded-[40px] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-accent mb-8">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xl font-bold text-white leading-relaxed uppercase tracking-tight mb-12">
                    &quot;{review.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden grayscale">
                    <Image src={review.image} alt={review.name} fill className="object-cover" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tight">{review.name}</h4>
                    <p className="text-primary font-black text-[9px] uppercase tracking-[0.4em] mt-1">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#f0f9ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase mb-10">
                Ready To <span className="text-primary">Redefine</span> Your <br />
                Logistics Strategy?
              </h2>
              <div className="flex flex-wrap gap-6">
                <Link href="/signup" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-slate-900 transition-all shadow-xl">
                  Get Started
                </Link>
                <Link href="/contact" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
                  Book A Demo
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
               <div className="absolute top-0 right-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl rotate-3 z-10">
                  <Image src="/ocean_card.png" alt="Logistics 1" fill className="object-cover" loading="lazy" />
               </div>
               <div className="absolute bottom-0 left-0 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl -rotate-6">
                  <Image src="/freight_card.png" alt="Logistics 2" fill className="object-cover" loading="lazy" />
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
