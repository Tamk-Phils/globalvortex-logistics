"use client";

import { motion } from "framer-motion";
import { Globe, Target, ShieldCheck, Zap, Cpu, Radar } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="pt-48 pb-32 bg-[#f0f9ff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Our Journey</p>
                        <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 tracking-tighter uppercase leading-[0.85]">
                            The World&apos;s <br />
                            <span className="text-primary italic">Smartest Logistics</span> <br />
                            Network.
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-bold uppercase tracking-tight max-w-2xl mx-auto">
                            Established in 2026, Vortex Global was built to make international shipping easier. We don&apos;t just track packages; we connect the world&apos;s shipping routes with modern technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                        <div className="relative rounded-[40px] overflow-hidden shadow-3xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                            <Image 
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" 
                                alt="Vortex Infrastructure" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-16">
                            <div className="group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <Target size={32} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-slate-900">OUR MISSION</h3>
                                <p className="text-slate-500 leading-relaxed font-bold uppercase tracking-tight text-sm max-w-md">
                                    To make global logistics simple and transparent, providing reliable shipping data for everyone.
                                </p>
                            </div>
                            <div className="group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-slate-900">OUR VISION</h3>
                                <p className="text-slate-500 leading-relaxed font-bold uppercase tracking-tight text-sm max-w-md">
                                    A connected world where every package is tracked accurately, and shipping flows smoothly across borders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-24">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Our Foundation</p>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
                            Core <span className="text-primary italic">Values.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Transparency", desc: "Open communication and real-time visibility for every shipment.", icon: Globe },
                            { title: "Innovation", desc: "Continuously evolving our technology to lead the logistics sector.", icon: Cpu },
                            { title: "Integrity", desc: "A commitment to honesty and reliability in every global transaction.", icon: ShieldCheck }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                                    <value.icon size={24} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{value.title}</h3>
                                <p className="text-slate-500 font-bold text-sm uppercase tracking-tight leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-24">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">The Team</p>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-[0.95]">
                            Our <span className="text-primary italic">Leadership.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { name: "John Smith", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
                            { name: "Sarah Chen", role: "CTO", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400" },
                            { name: "Marcus Brown", role: "COO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
                            { name: "Elena Rossi", role: "Head of Logistics", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" }
                        ].map((member, i) => (
                            <div key={i} className="text-center">
                                <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden mb-6 shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" loading="lazy" />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{member.name}</h4>
                                <p className="text-primary font-black text-[9px] uppercase tracking-[0.4em] mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-primary/10 blur-[150px] translate-y-1/2 -translate-x-1/3" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div>
                            <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.95]">
                                MODERN <br /> 
                                <span className="text-primary italic">TECHNOLOGY</span> <br />
                                FOR GLOBAL TRADE.
                            </h2>
                            <p className="text-white/60 text-lg mb-12 leading-relaxed font-bold uppercase tracking-tight">
                                Vortex Global uses a global network of centers and real-time technology to ensure your package data is always up to date.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                        <ShieldCheck size={18} className="text-primary" />
                                    </div>
                                    <span className="font-black text-[10px] uppercase tracking-[0.4em] text-white/40">Secure Data Standards</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                        <ShieldCheck size={18} className="text-primary" />
                                    </div>
                                    <span className="font-black text-[10px] uppercase tracking-[0.4em] text-white/40">Real-time Verification</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[30px] border border-white/10 text-center">
                                <p className="text-5xl font-black text-primary mb-2 tracking-tighter">14.2K</p>
                                <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">Tracking Centers</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[30px] border border-white/10 text-center">
                                <p className="text-5xl font-black text-primary mb-2 tracking-tighter">0.08ms</p>
                                <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">Update Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
