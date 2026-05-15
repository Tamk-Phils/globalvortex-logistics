"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, User, ShieldCheck, Globe, ChevronDown, Bell, Zap, Radar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "TRACKING", href: "/tracking" },
        { name: "ABOUT US", href: "/about" },
        { name: "SUPPORT", href: "/contact" },
        { name: "LOGIN", href: "/login" },
    ];

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <nav className={`transition-all duration-500 rounded-sm ${isScrolled ? 'glass shadow-lg px-8 py-4 border-slate-200' : 'px-4 py-4 border-transparent'}`}>
                    <div className="flex items-center justify-between">
                        {/* Brand */}
                        <Link href="/" className="flex items-center gap-4 group">
                            <Logo className="w-10 h-10" />
                            <div className="flex flex-col">
                                <span className={`text-xl font-black tracking-tighter leading-none uppercase transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>LES TRACK</span>
                                <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Logistics</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[10px] font-black tracking-[0.25em] transition-all hover:text-primary relative group uppercase ${pathname === link.href ? 'text-primary' : 'text-slate-500'}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden lg:flex items-center gap-6">
                            <button className="text-slate-400 hover:text-primary transition-colors p-2">
                                <Search size={18} />
                            </button>
                            <Link href="/signup" className="bg-primary text-white px-8 py-3 rounded-sm text-[10px] font-black tracking-[0.3em] uppercase hover:bg-slate-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                                GET STARTED
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button 
                            className="lg:hidden text-slate-900 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-b border-slate-200 overflow-hidden mt-4 mx-6 rounded-sm shadow-2xl"
                    >
                        <div className="p-8 flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xs font-black tracking-[0.3em] text-slate-900 hover:text-primary transition-colors uppercase"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link 
                                href="/signup"
                                className="bg-primary text-white py-5 rounded-sm text-xs font-black tracking-[0.4em] uppercase text-center shadow-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                GET STARTED
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
