"use client";

import { motion } from "framer-motion";
import { Calculator, Package, Globe, Ruler, Send, ArrowRight, CheckCircle2, Radar, Zap } from "lucide-react";
import { useState } from "react";

export default function QuotePage() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-white pt-48 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto bg-slate-50 p-16 rounded-sm border border-slate-200 shadow-3xl"
                    >
                        <div className="w-24 h-24 bg-primary text-white rounded-sm flex items-center justify-center mx-auto mb-10 shadow-2xl">
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">TELEMETRY RECEIVED</h2>
                        <p className="text-slate-500 font-bold text-lg mb-12 leading-relaxed uppercase tracking-tight">
                            The Vortex Global pricing engine is processing your specifications. A high-precision quote will be dispatched to your node within 300 seconds.
                        </p>
                        <button 
                            onClick={() => window.location.href = '/'}
                            className="bg-slate-900 text-white px-12 py-5 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-xl"
                        >
                            RETURN TO TERMINAL
                        </button>
                    </motion.div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white pt-32 pb-48 text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-24">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <div className="inline-flex items-center gap-3 bg-white text-primary px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] border border-slate-200 mb-10 shadow-sm">
                                <Radar size={14} className="animate-spin-slow" />
                                <span className="text-slate-500">Precision Quote Engine</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-10 uppercase">
                                INSTANT <br/>
                                <span className="text-primary italic">ANALYTICS.</span>
                            </h1>
                            <p className="text-xl text-slate-500 font-bold leading-relaxed uppercase tracking-tight">
                                Establish instant visibility into transit costs across our planetary network. No estimates, just data-driven pricing signatures.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Globe, title: "GLOBAL NETWORK", desc: "Real-time access to 14,200+ transit nodes worldwide." },
                                { icon: Package, title: "MULTI-MODAL SYNC", desc: "Orbital, Maritime, and Ground options synchronized." },
                                { icon: Ruler, title: "DIMENSIONAL CARGO", desc: "Special handling for high-value or institutional assets." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 text-[10px] uppercase tracking-[0.3em] mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-400 font-bold uppercase tracking-tight leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-slate-50 p-12 md:p-16 rounded-sm border border-slate-200 shadow-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                            
                            <form onSubmit={handleSubmit} className="relative z-10">
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                                        <h3 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">NODE TOPOLOGY</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">ORIGIN NODE</label>
                                                <input type="text" placeholder="BERLIN HUB" className="w-full bg-white border border-slate-200 rounded-sm py-5 px-8 font-black text-slate-900 text-[10px] uppercase tracking-widest outline-none focus:border-primary transition-all" required />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">DESTINATION NODE</label>
                                                <input type="text" placeholder="SINGAPORE HUB" className="w-full bg-white border border-slate-200 rounded-sm py-5 px-8 font-black text-slate-900 text-[10px] uppercase tracking-widest outline-none focus:border-primary transition-all" required />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">SERVICE PROTOCOL</label>
                                            <select className="w-full bg-white border border-slate-200 rounded-sm py-5 px-8 font-black text-slate-900 text-[10px] uppercase tracking-widest outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                                                <option>STANDARD TRANSIT (10-14 DAYS)</option>
                                                <option>PRIORITY UPLINK (3-5 DAYS)</option>
                                                <option>CRITICAL ORBITAL (NEXT DAY)</option>
                                            </select>
                                        </div>
                                        <button type="button" onClick={nextStep} className="w-full bg-slate-900 text-white py-6 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 group shadow-xl">
                                            SPECIFY CARGO <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                                        <h3 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">CARGO SPECIFICATIONS</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">NET MASS (KG)</label>
                                                <input type="number" placeholder="500" className="w-full bg-white border border-slate-200 rounded-sm py-5 px-8 font-black text-slate-900 text-[10px] uppercase tracking-widest outline-none focus:border-primary transition-all" required />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">VOLUME (m³)</label>
                                                <input type="number" placeholder="2.4" className="w-full bg-white border border-slate-200 rounded-sm py-5 px-8 font-black text-slate-900 text-[10px] uppercase tracking-widest outline-none focus:border-primary transition-all" required />
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <button type="button" onClick={prevStep} className="w-1/3 bg-white text-slate-400 py-6 rounded-sm font-black text-[10px] uppercase tracking-widest border border-slate-200 hover:text-slate-900 transition-all">
                                                BACK
                                            </button>
                                            <button type="submit" className="w-2/3 bg-primary text-white py-6 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 shadow-xl shadow-primary/20 hover:bg-slate-900 transition-all">
                                                TRANSMIT REQUEST <Send size={20} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        <div className="mt-12 p-10 bg-slate-900 rounded-sm text-white flex items-center justify-between shadow-3xl">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-1">INSTITUTIONAL</p>
                                    <p className="font-black uppercase tracking-widest text-xs">Massive Volume Protocols</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest underline cursor-pointer hover:text-primary transition-colors">INQUIRE UPLINK</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
