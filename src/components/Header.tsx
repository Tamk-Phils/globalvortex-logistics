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
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Tracking", href: "/tracking" },
    ];

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-2' : 'py-6'}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 px-8 rounded-full shadow-lg border border-slate-200' : 'py-4'}`}>
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <Logo className="w-8 h-8" />
                        <span className="text-xl font-black tracking-tighter uppercase text-slate-900">VortexGlobal</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[11px] font-bold transition-all hover:text-primary relative group ${pathname === link.href ? 'text-primary' : 'text-slate-600'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${pathname === link.href ? 'w-1' : 'w-0 group-hover:w-1'}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Actions & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link href="/quote" className="hidden lg:flex bg-primary text-white px-6 py-2.5 rounded-full text-[11px] font-bold hover:bg-slate-900 transition-all shadow-sm items-center gap-2">
                            Get a Quote <span className="opacity-60">&gt;</span>
                        </Link>
                        
                        <button 
                            className="lg:hidden text-slate-900 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
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
