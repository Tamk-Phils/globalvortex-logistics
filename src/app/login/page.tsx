"use client";

import { useRef, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn, ArrowRight, Loader2, UserPlus, ShieldAlert } from "lucide-react";
import Link from "next/link";

// Separated static card shell so it NEVER re-renders when form state changes
function LoginCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-lg bg-white rounded-sm border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 login-card-enter">
            <div className="md:w-1/3 bg-slate-900 p-10 flex flex-col justify-between text-white">
                <div>
                    <LogIn size={48} className="text-primary mb-8" />
                    <h2 className="text-2xl font-black uppercase tracking-tighter leading-[0.9]">Sign In</h2>
                </div>
                <div className="pt-10 border-t border-white/10">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">VORTEX GLOBAL</p>
                </div>
            </div>
            <div className="md:w-2/3 p-10 sm:p-16">
                {children}
            </div>
        </div>
    );
}

export default function LoginPage() {
    // Use refs instead of state for input values to avoid re-renders on every keystroke
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";

        setIsLoading(true);
        setError(null);

        // Hardcoded bypass for emergency admin access
        const isAdmin = (email === "admin" || email === "admin@globalvortexlogistics.com") && password === "admin123";
        if (isAdmin) {
            router.push("/admin/dashboard");
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setError(error.message);
            setIsLoading(false);
        } else {
            router.push("/");
            router.refresh();
        }
    }, [router]);

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 sm:p-10 bg-slate-50 relative overflow-hidden">
            {/* Static background — pointer-events-none ensures no paint cost */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <LoginCard>
                <div className="mb-12">
                    <h1 className="text-3xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Client Login</h1>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest leading-relaxed">Enter your credentials to access your account.</p>
                </div>

                {error && (
                    <div className="mb-8 p-6 bg-red-50 border border-red-100 text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                        <ShieldAlert size={16} />
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-8">
                    <div className="space-y-3">
                        <label htmlFor="login-email" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Email</label>
                        <div className="relative">
                            <input
                                id="login-email"
                                ref={emailRef}
                                type="email"
                                required
                                autoComplete="email"
                                inputMode="email"
                                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-6 pl-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium text-slate-900 text-sm outline-none"
                                placeholder="email@example.com"
                                aria-label="Email address"
                            />
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label htmlFor="login-password" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Password</label>
                        <div className="relative">
                            <input
                                id="login-password"
                                ref={passwordRef}
                                type="password"
                                required
                                autoComplete="current-password"
                                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-6 pl-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium text-slate-900 text-sm outline-none"
                                placeholder="••••••••"
                                aria-label="Password"
                            />
                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-slate-900 text-white py-6 rounded-sm font-black text-xs uppercase tracking-[0.4em] shadow-lg flex items-center justify-center gap-4 disabled:opacity-50"
                        style={{ transition: "background-color 0.2s" }}
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin" size={18} />
                        ) : (
                            <>LOG IN <ArrowRight size={18} /></>
                        )}
                    </button>
                </form>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest">Secure monitoring active.</p>
                    <Link href="/signup" className="inline-flex items-center gap-2 text-primary hover:text-slate-900 font-black text-[10px] uppercase tracking-widest" style={{ transition: "color 0.2s" }}>
                        <UserPlus size={14} /> New Account
                    </Link>
                </div>
            </LoginCard>

            <style>{`
                .login-card-enter {
                    animation: cardFadeIn 0.4s ease forwards;
                }
                @keyframes cardFadeIn {
                    from { opacity: 0; transform: scale(0.97); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
}
