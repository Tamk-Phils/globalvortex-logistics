"use client";

import { motion } from "framer-motion";
import { Book, FileText, Code, MessageCircle, HelpCircle, ArrowRight, Search, Download, Radar, Zap } from "lucide-react";

export default function ResourcesPage() {
    const categories = [
        {
            title: "TRANSIT PROTOCOLS",
            icon: Book,
            items: ["GLOBAL LOGISTICS 101", "CUSTOMS TELEMETRY GUIDE", "ASSET PACKAGING STANDARDS", "DANGEROUS GOODS MANIFEST"]
        },
        {
            title: "DEVELOPER UPLINK",
            icon: Code,
            items: ["TRACKING API ENDPOINTS", "WEBHOOK INTEGRATION", "TELEMETRY SCHEMA", "SDK REFERENCE"]
        },
        {
            title: "OPERATIONAL LOGS",
            icon: FileText,
            items: ["TERMS OF SERVICE", "PRIVACY & DATA PROTECTION", "CARRIER LIABILITY RULES", "CLAIMS PROCESS PROTOCOL"]
        }
    ];

    return (
        <main className="min-h-screen bg-white pt-32 pb-48 relative overflow-hidden">
             {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-slate-50/50 -skew-y-3 origin-top-left -z-10" />
            <div className="absolute top-40 right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto space-y-32">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-4 bg-primary/5 text-primary px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] border border-primary/10 mb-10">
                            <Radar size={16} className="animate-pulse" />
                            <span>VORTEX GLOBAL KNOWLEDGE CLUSTER</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-12 uppercase leading-[0.9]">
                            RESOURCES & <br/> <span className="text-primary italic">SUPPORT.</span>
                        </h1>
                        
                        <div className="max-w-3xl mx-auto relative group">
                            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={28} />
                            <input 
                                type="text" 
                                placeholder="SEARCH TELEMETRY, PROTOCOLS, AND SYSTEM LOGS..." 
                                className="w-full bg-white border border-slate-200 rounded-sm py-8 px-10 pl-20 text-[10px] font-black uppercase tracking-[0.3em] shadow-3xl focus:outline-none focus:border-primary transition-all placeholder:text-slate-300 outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {categories.map((cat, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
                                className="bg-white p-12 rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
                                <div className="w-16 h-16 rounded-sm bg-slate-50 border border-slate-100 text-primary flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                                    <cat.icon size={28} />
                                </div>
                                <h3 className="text-[10px] font-black text-slate-900 mb-8 uppercase tracking-[0.3em]">{cat.title}</h3>
                                <ul className="space-y-6">
                                    {cat.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center justify-between text-slate-400 font-black text-[9px] uppercase tracking-widest hover:text-primary cursor-pointer transition-colors group/item">
                                            {item}
                                            <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-all translate-x-[-10px] group-hover/item:translate-x-0" />
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-slate-900 rounded-sm p-16 text-white flex flex-col justify-between overflow-hidden relative shadow-3xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full blur-[80px]" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">DIRECT UPLINK</h3>
                                <p className="text-white/40 font-black text-[10px] mb-12 leading-relaxed max-w-sm uppercase tracking-widest">
                                    NEED IMMEDIATE ASSISTANCE WITH A COMPLEX TRANSIT VARIANCE? OUR COMMAND TEAM IS ONLINE 24/7.
                                </p>
                                <button className="bg-white text-slate-900 px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-primary hover:text-white transition-all shadow-xl">
                                    <MessageCircle size={20} /> START LIVE UPLINK
                                </button>
                            </div>
                            <div className="mt-16 flex gap-12 items-center pt-12 border-t border-white/5 opacity-40">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2">SYNC TIME</p>
                                    <p className="text-xs font-black uppercase tracking-widest">AVG. 45 SECONDS</p>
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2">SATISFACTION</p>
                                    <p className="text-xs font-black uppercase tracking-widest">99.2% POSITIVE</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-sm p-16 text-slate-900 flex flex-col justify-between overflow-hidden relative shadow-3xl">
                            <div className="absolute top-0 right-0 p-16 opacity-[0.03] text-primary">
                                <Download size={240} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic">PRESS LEDGER</h3>
                                <p className="text-slate-400 font-black text-[10px] mb-12 leading-relaxed max-w-sm uppercase tracking-widest">
                                    DOWNLOAD OFFICIAL BRANDING PROTOCOLS, CORE IDENTITY LOGOS, AND HIGH-RESOLUTION TELEMETRY PHOTOGRAPHY.
                                </p>
                                <button className="bg-slate-900 text-white px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-primary transition-all shadow-xl">
                                    <Download size={20} /> DOWNLOAD PRESS KIT
                                </button>
                            </div>
                            <div className="mt-16 flex gap-12 items-center pt-12 border-t border-slate-100">
                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">VERSION 2026.1.4  •  SYNCHRONIZED TODAY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
