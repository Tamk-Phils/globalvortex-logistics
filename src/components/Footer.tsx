"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight, Instagram, Zap, Globe, Shield } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-24 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group shrink-0">
                            <Logo className="w-8 h-8" />
                            <span className="text-xl font-black tracking-tighter uppercase text-slate-900">VortexGlobal</span>
                        </Link>
                        <p className="text-slate-500 font-bold leading-relaxed text-sm uppercase tracking-tight max-w-xs">
                            Your trusted partner in global shipping. Providing reliable, fast, and transparent logistics solutions worldwide.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] mb-8">Services</h4>
                        <ul className="space-y-4">
                            {['Express Shipping', 'Global Freight', 'Asset Tracking', 'Supply Chain'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-500 hover:text-primary font-bold uppercase tracking-tight text-xs transition-all">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] mb-8">Support</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Service Alerts', href: '/alerts' },
                                { name: 'Terms of Service', href: '/terms' },
                                { name: 'Privacy Policy', href: '/privacy' },
                                { name: 'Help Center', href: '#' }
                            ].map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-500 hover:text-primary font-bold uppercase tracking-tight text-xs transition-all">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[11px] mb-8">Contact</h4>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={18} />
                                </div>
                                <p className="text-slate-900 text-xs font-bold uppercase tracking-tight">support@globalvortexlogistics.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-slate-100 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">© 2026 VORTEX GLOBAL LOGISTICS. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Terms</Link>
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Status</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
