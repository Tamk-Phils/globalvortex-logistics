"use client";

import { MoveRight, ShieldCheck, Globe, Zap, Star, ChevronDown, CheckCircle2, TrendingUp, Boxes, Briefcase, Camera, Play, Layers, Activity, Cpu, Radio, Radar, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import TrackingSearch from "@/components/TrackingSearch";
import Logo from "@/components/Logo";

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl font-black text-slate-800 group-hover:text-primary transition-all tracking-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-slate-300 group-hover:text-primary transition-colors"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-500 font-medium text-lg leading-relaxed max-w-3xl uppercase tracking-tight">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen overflow-hidden text-slate-900">

      {/* Light & Velocity Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40 lg:pt-48 lg:pb-64 hero-gradient">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.3em] border border-slate-200 shadow-sm">
                <Radar size={14} className="text-primary animate-spin-slow" />
                <span className="text-slate-500">Cloud Logistics Protocol</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-slate-900">
                VORTEX <br />
                <span className="text-primary italic">VELOCITY.</span>
              </h1>
              
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-bold uppercase tracking-tight">
                Experience the next generation of global transit. Pure speed, absolute visibility, and autonomous intelligence integrated into a single cloud platform.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link href="/tracking" className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-sm font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-900 transition-all shadow-xl hover:shadow-2xl group">
                  Enter Portal <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/login" className="inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-6 rounded-sm font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-50 transition-all border border-slate-200 shadow-sm">
                  Client Access
                </Link>
              </div>

              <div className="flex gap-12 pt-10 border-t border-slate-100 items-center">
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Global Nodes</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">14,200+</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Transit Speed</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">0.08ms</p>
                 </div>
              </div>
            </motion.div>

            <div className="relative h-[700px] w-full hidden lg:block">
              {/* External Professional Image Showcase */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-slate-100 rounded-sm overflow-hidden border border-slate-200 shadow-2xl"
              >
                 <Image 
                   src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
                   alt="Modern Logistics Hub" 
                   fill 
                   className="object-cover opacity-90 hover:opacity-100 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
              </motion.div>
              
              {/* Floating Performance Metric */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -left-20 bg-white p-10 rounded-sm border border-slate-100 shadow-2xl z-20 text-slate-900 min-w-[320px] backdrop-blur-xl"
              >
                <div className="flex items-center gap-6 mb-4">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/10">
                        <TrendingUp size={32} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 text-slate-500">Efficiency Index</p>
                        <p className="text-4xl font-black tracking-tighter">99.98<span className="text-primary">%</span></p>
                    </div>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "99.9%" }}
                        transition={{ duration: 2, delay: 1.5 }}
                        className="h-full bg-primary" 
                    />
                </div>
              </motion.div>

              {/* Data Stream Overlay */}
              <div className="absolute top-10 -right-10 bg-white/90 backdrop-blur-md p-8 rounded-sm shadow-2xl border border-slate-100 z-20 flex flex-col gap-4 max-w-[220px]">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary">Active Uplink</span>
                 </div>
                 <div className="space-y-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="h-1 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 1 + i, repeat: Infinity, ease: "linear" }}
                                className="w-1/2 h-full bg-primary/20" 
                            />
                        </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Tech Showcase Section */}
      <section className="py-40 bg-white relative overflow-hidden rounded-sm mx-4 lg:mx-6 mb-20 shadow-sm border border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 z-0 pointer-events-none grayscale">
            <Image 
                src="https://images.unsplash.com/photo-1451187534959-444563c139bb?auto=format&fit=crop&q=80&w=2000" 
                alt="Global Network" 
                fill 
                className="object-cover"
            />
        </div>

        <div className="container mx-auto px-10 relative z-10">
           <div className="mb-24 max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.0] tracking-tighter uppercase text-slate-900">
                 CLOUD <br /> <span className="text-primary italic">PRECISION.</span>
              </h2>
              <p className="text-slate-500 text-xl font-bold uppercase tracking-tight leading-relaxed max-w-2xl">
                 Our infrastructure leverages professional-grade data hubs and global satellite links to provide the industry&apos;s most reliable transit intelligence.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-50 border border-slate-200 p-10 rounded-sm hover:bg-white hover:shadow-2xl transition-all group cursor-pointer"
              >
                 <div className="relative w-full h-72 rounded-sm overflow-hidden mb-8 border border-slate-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000" alt="Autonomous Storage" fill className="object-cover" />
                 </div>
                 <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-primary">01. Smart Hubs</h3>
                 <p className="text-slate-500 font-bold uppercase tracking-tight text-sm">Automated logistics terminals with real-time inventory synchronization.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-50 border border-slate-200 p-10 rounded-sm hover:bg-white hover:shadow-2xl transition-all group cursor-pointer"
              >
                 <div className="relative w-full h-72 rounded-sm overflow-hidden mb-8 border border-slate-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src="https://images.unsplash.com/photo-1451187534959-444563c139bb?auto=format&fit=crop&q=80&w=2000" alt="Network Analysis" fill className="object-cover" />
                 </div>
                 <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-primary">02. Predictive AI</h3>
                 <p className="text-slate-500 font-bold uppercase tracking-tight text-sm">Deep learning models analyzing global trade flows for optimal routing.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-50 border border-slate-200 p-10 rounded-sm hover:bg-white hover:shadow-2xl transition-all group cursor-pointer"
              >
                 <div className="relative w-full h-72 rounded-sm overflow-hidden mb-8 border border-slate-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?auto=format&fit=crop&q=80&w=2000" alt="Last Mile Pods" fill className="object-cover" />
                 </div>
                 <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-primary">03. High-Speed Transit</h3>
                 <p className="text-slate-500 font-bold uppercase tracking-tight text-sm">Direct-line delivery protocols designed for the modern era of commerce.</p>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
                CORE <span className="text-primary italic">SYSTEMS.</span>
            </h2>
            <p className="text-slate-500 text-xl font-bold uppercase tracking-tight leading-relaxed">
              Vortex Global is built on a foundation of cryptographic security and 
              clinical infrastructure, setting the new benchmark for global logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: "DATA ENCRYPTED", desc: "Enterprise-grade protection for every transit record in the network." },
              { icon: Radio, title: "GLOBAL UPLINK", desc: "Always-on connectivity via our planetary ground and satellite network." },
              { icon: Activity, title: "REAL-TIME LOGS", desc: "Neural networks monitoring every package to predict and resolve delays." },
              { icon: Shield, title: "TRANSPARENT AUDIT", desc: "Full immutable audit trail for 100% transparent chain-of-custody." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white hover:bg-white p-12 rounded-sm border border-slate-200 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-sm bg-primary/5 flex items-center justify-center text-primary mb-10 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={32} />
                </div>
                <h3 className="text-[10px] font-black text-slate-900 mb-4 uppercase tracking-[0.3em]">{item.title}</h3>
                <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white border-y border-slate-100 relative">
        <div className="container mx-auto px-10 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">NETWORK <span className="text-primary italic">FEEDBACK.</span></h2>
              <div className="flex justify-center gap-1 mb-8 text-primary">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={24} fill="currentColor" />)}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Vance",
                role: "Operations Manager",
                company: "Nova Logistics",
                quote: "Vortex Global has transformed our replenishment cycles. The telemetry is flawless, and the speed is unprecedented."
              },
              {
                name: "Marcus Thorne",
                role: "Director of Tech",
                company: "Cyberdyne",
                quote: "Transitioning to the Vortex protocol was the best decision for our high-value asset division. Security is now absolute."
              },
              {
                name: "Elena Rodriguez",
                role: "Lead Engineer",
                company: "Horizon",
                quote: "The API latency is nonexistent. We've integrated Vortex into our core autonomous routing and haven't looked back."
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-12 rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500"
              >
                <div className="mb-8 flex text-primary">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 font-bold leading-relaxed text-lg mb-10 uppercase tracking-tight italic">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
                  <div className="relative w-14 h-14 rounded-sm border border-slate-200 flex items-center justify-center bg-white shadow-sm text-primary">
                    <span className="text-xl font-black">{t.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-[10px] uppercase tracking-widest">{t.name}</h4>
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tighter uppercase">
                SYSTEM <br />
                <span className="text-primary italic">GUIDANCE.</span>
              </h2>
              <p className="text-slate-500 text-xl font-bold mb-12 leading-relaxed uppercase tracking-tight">
                Technical documentation on transit protocols, autonomous routing, and centralized security.
              </p>
              <div className="p-10 bg-white border border-slate-200 rounded-sm shadow-xl">
                <p className="font-black text-slate-900 mb-4 text-xl uppercase tracking-[0.3em]">ESTABLISH UPLINK</p>
                <p className="text-slate-500 font-bold mb-10 text-sm uppercase tracking-tight">Our technical support engineering team is ready to integrate your assets into the Vortex protocol.</p>
                <Link href="/contact" className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl">
                  Contact Uplink <MoveRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <FAQItem
                question="HOW DOES ORBITAL TELEMETRY ENSURE PRECISION?"
                answer="Vortex utilizes a proprietary LEO satellite constellation with sub-meter resolution sensors. Every transit is tracked in real-time with centimeter-level accuracy."
              />
              <FAQItem
                 question="WHAT IS THE AUTONOMOUS ROUTING PROTOCOL?"
                 answer="Our AI engine, VORTEX-CORE, analyzes millions of data points—including port congestion and weather—to reroute assets before delays occur."
               />
               <FAQItem
                 question="IS THE NETWORK CENTRALIZED?"
                 answer="Vortex Global uses a hybrid architecture, combining high-speed central processing with decentralized edge nodes for maximum reliability."
               />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
