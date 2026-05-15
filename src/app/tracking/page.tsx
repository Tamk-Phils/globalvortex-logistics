"use client";

import { motion } from "framer-motion";
import { Package, ShieldCheck, Clock, MapPin, Radar, Activity } from "lucide-react";
import Image from "next/image";
import TrackingSearch from "@/components/TrackingSearch";

export default function TrackingPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            
            <section className="pt-32 pb-48 relative overflow-hidden hero-gradient">
                {/* Background decorative image */}
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] z-0 pointer-events-none grayscale">
                    <Image 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=2000" 
                        alt="Global Network" 
                        fill 
                        className="object-cover"
                    />
                </div>
                
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-24"
                        >
                            <div className="inline-flex items-center gap-3 bg-white text-primary px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] border border-slate-200 mb-10 shadow-sm">
                                <Radar size={14} className="animate-spin-slow" />
                                <span className="text-slate-500">Global Tracking Active</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-[0.9]">
                                TRACK <span className="text-primary italic">PACKAGE.</span>
                            </h1>
                            <p className="text-xl text-slate-500 font-bold max-w-3xl mx-auto leading-relaxed uppercase tracking-tight">
                                Enter your tracking number to see where your package is. 
                                We track shipments anywhere in the world.
                            </p>
                        </motion.div>

                        <div className="bg-white p-2 rounded-sm shadow-2xl border border-slate-200 relative overflow-hidden group">
                             <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                             <div className="relative z-10">
                                <TrackingSearch />
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
                            {[
                                { icon: ShieldCheck, title: "SECURE DATA", desc: "Your shipping information is protected by industry-standard encryption." },
                                { icon: Activity, title: "REAL-TIME UPDATES", desc: "Get instant notifications and status changes for your shipments." },
                                { icon: MapPin, title: "GLOBAL REACH", desc: "Reliable tracking across our entire international logistics network." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="bg-slate-50 p-12 rounded-sm border border-slate-200 group hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                                >
                                    <div className="w-16 h-16 bg-primary/5 rounded-sm flex items-center justify-center text-primary mb-10 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-[10px] font-black text-slate-900 mb-4 uppercase tracking-[0.3em]">{item.title}</h3>
                                    <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-tight">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
