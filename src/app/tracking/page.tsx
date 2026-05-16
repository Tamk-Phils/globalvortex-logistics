"use client";

import { motion } from "framer-motion";
import { Package, ShieldCheck, Clock, MapPin, Radar, Activity, Globe } from "lucide-react";
import Image from "next/image";
import TrackingSearch from "@/components/TrackingSearch";

export default function TrackingPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="pt-48 pb-64 bg-[#f0f9ff] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.05] pointer-events-none grayscale">
                    <Image 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=1200" 
                        alt="Global Network" 
                        fill 
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Real-time Telemetry</p>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-[0.9]">
                                Track Your <br />
                                <span className="text-primary italic">Shipment.</span>
                            </h1>
                            <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-tight">
                                Enter your tracking number to see where your package is. 
                                We track shipments anywhere in the world.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-4 rounded-[40px] shadow-3xl border border-slate-100 relative z-20"
                        >
                            <TrackingSearch />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Our Infrastructure</p>
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95] mb-8">
                                Global <span className="text-primary italic">Presence.</span>
                            </h2>
                            <p className="text-slate-500 font-bold text-sm uppercase tracking-tight leading-relaxed mb-12 max-w-md">
                                With over 14,000 tracking nodes across every continent, we ensure your cargo is never out of sight. Our network is mirrored across secure global data centers for maximum reliability.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Strategic Hubs", value: "NY, London, Tokyo, Singapore" },
                                    { title: "Real-time Nodes", value: "14,200+ Active" },
                                    { title: "Satellite Link", value: "Dedicated Orbital Array" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                            <Globe size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.title}</p>
                                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{stat.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-3xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=1200" 
                                alt="Global Network Infrastructure" 
                                fill 
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-24">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Data Integrity</p>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
                            Security & <span className="text-primary italic">Compliance.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "End-to-End Encryption", desc: "All tracking data is encrypted using AES-256 standards from departure to delivery.", icon: ShieldCheck },
                            { title: "Regulatory Compliance", desc: "Fully compliant with international shipping regulations and data protection laws.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="p-12 bg-slate-900 rounded-[40px] text-white">
                                <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-8 border border-primary/30">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-white/40 font-bold text-sm uppercase tracking-tight leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white relative z-30 -mt-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "SECURE DATA", desc: "Your shipping information is protected by industry-standard encryption." },
                            { icon: Activity, title: "REAL-TIME UPDATES", desc: "Get instant notifications and status changes for your shipments." },
                            { icon: MapPin, title: "GLOBAL REACH", desc: "Reliable tracking across our entire international logistics network." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-3xl transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-tight">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
