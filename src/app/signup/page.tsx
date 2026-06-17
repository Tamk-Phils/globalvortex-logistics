"use client";

import { useRef, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Mail, Lock, UserPlus, ArrowRight, Loader2, User, LogIn, ShieldCheck } from "lucide-react";
import Link from "next/link";

// Static shell — never re-renders on form input changes
function SignupCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-2xl bg-white rounded-sm border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 signup-card-enter">
            <div className="md:w-1/3 bg-slate-900 p-10 flex flex-col justify-between text-white">
                <div>
                    <UserPlus size={48} className="text-primary mb-8" />
                    <h2 className="text-2xl font-black uppercase tracking-tighter leading-[0.9]">Create <br /><span className="text-primary">Account</span></h2>
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

export default function SignupPage() {
    // Refs for inputs — avoids re-render on every keystroke
    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSignup = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        const fullName = fullNameRef.current?.value ?? "";
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";

        setIsLoading(true);
        setError(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: fullName } },
        });

        if (error) {
            setError(error.message);
            setIsLoading(false);
        } else {
            setSuccess(true);
            setIsLoading(false);
            setTimeout(() => router.push("/login"), 3000);
        }
    }, [router]);

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 sm:p-10 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <SignupCard>
                <div className="mb-12">
                    <h1 className="text-3xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Create Account</h1>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest leading-relaxed">Register to access your shipment dashboard.</p>
                </div>

                {error && (
                    <div className="mb-8 p-6 bg-red-50 border border-red-100 text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                        {error}
                    </div>
                )}

                {success ? (
                    <div className="text-center space-y-6 py-12 bg-slate-50 border border-slate-200 rounded-sm">
                        <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-6 rounded-sm shadow-lg">
                            <ShieldCheck size={32} />
                        </div>
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest">Check Your Email</h2>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-tight px-8">A verification link has been sent to your inbox. Click it to activate your account.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSignup} className="space-y-8">
                        <div className="space-y-3">
                            <label htmlFor="signup-name" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Full Name</label>
                            <div className="relative">
                                <input
                                    id="signup-name"
                                    ref={fullNameRef}
                                    type="text"
                                    required
                                    autoComplete="name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-6 pl-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium text-slate-900 text-sm outline-none"
                                    placeholder="Your full name"
                                    aria-label="Full name"
                                />
                                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label htmlFor="signup-email" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Email</label>
                            <div className="relative">
                                <input
                                    id="signup-email"
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
                            <label htmlFor="signup-password" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Password</label>
                            <div className="relative">
                                <input
                                    id="signup-password"
                                    ref={passwordRef}
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    minLength={6}
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
                            className="w-full bg-primary hover:bg-slate-900 text-white py-6 rounded-sm font-black text-xs uppercase tracking-[0.4em] shadow-lg flex items-center justify-center gap-4"
                            style={{ transition: "background-color 0.2s" }}
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin" size={18} />
                            ) : (
                                <>Create Account <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>
                )}

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest">Already have an account?</p>
                    <Link href="/login" className="inline-flex items-center gap-2 text-primary hover:text-slate-900 font-black text-[10px] uppercase tracking-widest" style={{ transition: "color 0.2s" }}>
                        <LogIn size={14} /> Sign In
                    </Link>
                </div>
            </SignupCard>

            <style>{`
                .signup-card-enter {
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
