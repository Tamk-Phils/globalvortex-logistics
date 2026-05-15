"use client";

import { motion } from "framer-motion";
import { Globe, Target, ShieldCheck, Zap, Cpu, Radar } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="container mx-auto py-32 px-6 max-w-7xl text-slate-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-24 max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-3 bg-white text-primary px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] border border-slate-200 mb-10 shadow-sm">
                    <Radar size={14} className="animate-spin-slow" />
                    <span className="text-slate-500">About Us</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 tracking-tighter uppercase leading-[0.85]">OUR <span className="text-primary italic">STORY.</span></h1>
                <div className="space-y-6 text-xl text-slate-500 leading-relaxed font-bold uppercase tracking-tight">
                    <p>
                        Established in 2026, Vortex Global was built to make international shipping easier. We don&apos;t just track packages; we connect the world&apos;s shipping routes with modern technology.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-stretch">
                <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-2xl min-h-[400px]">
                    <Image 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" 
                        alt="Vortex Infrastructure" 
                        fill 
                        className="object-cover transition-all duration-1000"
                    />
                </div>
                <div className="flex flex-col gap-12">
                    <div className="bg-slate-50 p-12 rounded-sm border border-slate-200 shadow-sm group hover:bg-white hover:shadow-2xl transition-all flex-1">
                        <div className="w-16 h-16 rounded-sm bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <Target size={32} />
                        </div>
                        <h3 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-slate-900">THE MISSION</h3>
                        <p className="text-slate-500 leading-relaxed font-bold uppercase tracking-tight text-sm">
                            To make global logistics simple and transparent, providing reliable shipping data for everyone.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-12 rounded-sm border border-slate-200 shadow-sm group hover:bg-white hover:shadow-2xl transition-all flex-1">
                        <div className="w-16 h-16 rounded-sm bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-slate-900">THE VISION</h3>
                        <p className="text-slate-500 leading-relaxed font-bold uppercase tracking-tight text-sm">
                            A connected world where every package is tracked accurately, and shipping flows smoothly across borders.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-sm p-16 text-slate-900 overflow-hidden relative border border-slate-200 shadow-2xl mb-24">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter leading-tight">MODERN <br/> <span className="text-primary italic">TECHNOLOGY.</span></h2>
                        <p className="text-slate-500 text-lg mb-12 leading-relaxed font-bold uppercase tracking-tight">
                            Vortex Global uses a global network of centers and real-time technology to ensure your package data is always up to date.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-sm bg-primary/5 border border-primary/10 flex items-center justify-center">
                                    <ShieldCheck size={18} className="text-primary" />
                                </div>
                                <span className="font-black text-[10px] uppercase tracking-widest text-slate-500">Secure Data Standards</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-sm bg-primary/5 border border-primary/10 flex items-center justify-center">
                                    <ShieldCheck size={18} className="text-primary" />
                                </div>
                                <span className="font-black text-[10px] uppercase tracking-widest text-slate-500">Real-time Verification</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-10 rounded-sm border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all">
                            <p className="text-5xl font-black text-primary mb-4 tracking-tighter">14.2K</p>
                            <p className="text-slate-400 font-black text-[9px] uppercase tracking-widest">Tracking Centers</p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-sm border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all">
                            <p className="text-5xl font-black text-primary mb-4 tracking-tighter">0.08ms</p>
                            <p className="text-slate-400 font-black text-[9px] uppercase tracking-widest">Update Speed</p>
                        </div>
                        <div className="col-span-2 p-10 bg-slate-50 border border-slate-100 rounded-sm relative overflow-hidden h-40">
                             <Image 
                                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200" 
                                alt="Warehouse Hub" 
                                fill 
                                className="object-cover opacity-20 grayscale"
                            />
                            <div className="relative z-10">
                                <h3 className="text-[10px] font-black mb-4 text-slate-900 uppercase tracking-[0.3em] flex items-center gap-2">
                                    <Cpu size={14} className="text-primary" /> OUR NETWORK
                                </h3>
                                <p className="text-slate-500 font-bold text-sm uppercase tracking-tight leading-relaxed">To ensure stability, our shipping data is mirrored across thousands of secure servers worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
