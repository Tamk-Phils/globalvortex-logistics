"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight, Instagram, Zap, Globe, Shield } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 relative overflow-hidden">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-4 group">
                            <Logo className="w-12 h-12" />
                            <div className="flex flex-col">
                                <span className="text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">VORTEX GLOBAL</span>
                                <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Logistics</span>
                            </div>
                        </Link>
                        <p className="text-slate-500 font-bold leading-relaxed text-sm uppercase tracking-tight">
                            Your trusted partner in global shipping. Providing reliable, fast, and transparent logistics solutions worldwide.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] mb-8 border-b border-slate-200 pb-4 flex items-center gap-2">
                            <Zap size={12} className="text-primary" /> Services
                        </h4>
                        <ul className="space-y-4">
                            {['Express Shipping', 'Global Freight', 'Asset Tracking', 'Supply Chain'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 group hover:translate-x-2">
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] mb-8 border-b border-slate-200 pb-4 flex items-center gap-2">
                            <Shield size={12} className="text-primary" /> Support
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Service Alerts', href: '/alerts' },
                                { name: 'Terms of Service', href: '/terms' },
                                { name: 'Privacy Policy', href: '/privacy' },
                                { name: 'Help Center', href: '#' }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-500 hover:text-primary font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-2 group hover:translate-x-2">
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-[0.3em] text-[10px] mb-8 border-b border-slate-200 pb-4 flex items-center gap-2">
                            <Globe size={12} className="text-primary" /> Contact
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={16} />
                                </div>
                                <p className="text-slate-900 text-xs font-black uppercase tracking-widest break-all">support@globalvortexlogistics.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="flex-1 max-w-md">
                        <h5 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Newsletter</h5>
                        <div className="flex gap-2">
                            <input type="email" placeholder="ENTER YOUR EMAIL" className="flex-1 bg-white border border-slate-200 rounded-sm py-3 px-4 text-slate-900 text-[10px] font-black uppercase tracking-widest focus:ring-1 focus:ring-primary transition-all outline-none" />
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-md">Subscribe</button>
                        </div>
                    </div>
                    <div className="text-center lg:text-right">
                        <p className="text-slate-400 font-black text-[9px] uppercase tracking-[0.4em] mb-4">© 2026 VORTEX GLOBAL LOGISTICS. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-6 justify-center lg:justify-end">
                            <Link href="#" className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Terms of Service</Link>
                            <Link href="#" className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">System Status</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
