"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Globe, Sparkles, Radar, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <section className="pt-48 pb-32 bg-[#f0f9ff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-10"
                        >
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Support Operations</p>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 uppercase leading-[0.85]">
                                Get in <br />
                                <span className="text-primary italic">Touch.</span>
                            </h1>
                            <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-tight">
                                Have a question about your shipment or our services? Our team is available 24/7 to assist you.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-12">
                            {[
                                { icon: MessageSquare, title: "LIVE CHAT", desc: "Instant help from our support team via our live chat widget.", action: "START CHAT" },
                                { icon: Mail, title: "EMAIL SUPPORT", desc: "Send us an email for detailed inquiries or documentation.", action: "SUPPORT@GLOBALVORTEXLOGISTICS.COM" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-3xl transition-all"
                                >
                                    <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 font-bold text-sm mb-8 uppercase tracking-tight leading-relaxed">{item.desc}</p>
                                    <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-2">
                                        {item.action} &rarr;
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[40px] shadow-3xl border border-slate-100 p-12"
                        >
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-tight text-slate-900 focus:outline-none focus:border-primary transition-all outline-none" placeholder="JOHN" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-tight text-slate-900 focus:outline-none focus:border-primary transition-all outline-none" placeholder="DOE" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-tight text-slate-900 focus:outline-none focus:border-primary transition-all outline-none" placeholder="YOUR@EMAIL.COM" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                    <textarea rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-tight text-slate-900 focus:outline-none focus:border-primary transition-all resize-none outline-none" placeholder="HOW CAN WE HELP?" />
                                </div>
                                <button className="w-full bg-primary hover:bg-slate-900 text-white font-black text-[12px] uppercase tracking-[0.3em] py-6 rounded-full transition-all shadow-xl flex items-center justify-center gap-3">
                                    <Send size={18} />
                                    SEND MESSAGE
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
