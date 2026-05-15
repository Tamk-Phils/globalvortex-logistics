"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Database, Activity, Radar } from "lucide-react";
import Image from "next/image";

export default function UsagePage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-48 text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 bg-white text-primary px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] border border-slate-200 mb-10 shadow-sm">
                        <Radar size={14} className="animate-spin-slow" />
                        <span className="text-slate-500">Operational Guidelines</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-10 uppercase leading-[0.9]">
                        PLATFORM <br/> <span className="text-primary italic">PROTOCOLS.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-bold leading-relaxed max-w-3xl mx-auto uppercase tracking-tight">
                        Vortex Global is engineered for institutional-grade logistics intelligence. To maintain peak performance, we enforce the following operational standards.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-slate-50 p-12 rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl hover:bg-white transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] grayscale pointer-events-none">
                            <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000" alt="Tech" fill className="object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-sm bg-primary/5 flex items-center justify-center text-primary mb-10 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter uppercase relative z-10">API BANDWIDTH</h3>
                        <p className="text-slate-500 font-bold leading-relaxed mb-10 uppercase tracking-tight text-sm relative z-10">
                            Institutional API access is limited to 10,000 requests per second. Enterprise nodes feature autonomous bursting capabilities defined in their respective SLAs.
                        </p>
                        <div className="flex gap-4 items-center p-6 bg-white rounded-sm border border-slate-100 shadow-inner relative z-10">
                           <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,112,243,0.3)]" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Live Fair-Usage Telemetry</span>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-12 rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl hover:bg-white transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] grayscale pointer-events-none">
                            <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000" alt="Delivery" fill className="object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-sm bg-primary/5 flex items-center justify-center text-primary mb-10 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter uppercase relative z-10">ACCESS INTEGRITY</h3>
                        <p className="text-slate-500 font-bold leading-relaxed mb-10 uppercase tracking-tight text-sm relative z-10">
                            Unauthorized telemetry scraping is prohibited. All autonomous access must authenticate via an official Vortex Gateway key with valid cryptographic headers.
                        </p>
                        <div className="flex gap-4 items-center p-6 bg-white rounded-sm border border-slate-100 shadow-inner relative z-10">
                           <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,112,243,0.3)]" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Handshake Protocol Enforced</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-20 rounded-sm relative overflow-hidden shadow-3xl">
                    {/* Background image overlay */}
                    <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none grayscale">
                        <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200" alt="Data Ethics" fill className="object-cover" />
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-[120px] pointer-events-none" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase leading-tight">DATA <br/><span className="text-primary italic">ETHICS.</span></h2>
                            <div className="space-y-8">
                                <div className="flex gap-8">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shrink-0">
                                        <Database size={28} className="text-primary" />
                                    </div>
                                    <p className="text-white/40 font-bold uppercase tracking-tight text-sm leading-relaxed">We never cache sensitive PII telemetry beyond the legal necessity for protocol fulfillment.</p>
                                </div>
                                <div className="flex gap-8">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shrink-0">
                                        <Cpu size={28} className="text-primary" />
                                    </div>
                                    <p className="text-white/40 font-bold uppercase tracking-tight text-sm leading-relaxed">Our autonomous algorithms are audited for accuracy in planetary ETA predictions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-16 bg-white/5 backdrop-blur-xl rounded-sm border border-white/10 text-center flex flex-col justify-center items-center group">
                            <p className="text-6xl font-black mb-4 tracking-tighter group-hover:text-primary transition-colors">99.999%</p>
                            <p className="text-white/20 font-black uppercase tracking-[0.4em] text-[10px]">UPTIME INTEGRITY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
