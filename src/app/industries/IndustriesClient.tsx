"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Factory, Car, Pill, Laptop, ArrowRight } from "lucide-react";
import Image from "next/image";

const industries = [
    { name: "E-commerce & Retail", desc: "Specialized logistics for the fast-paced world of online retail.", icon: ShoppingBag, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" },
    { name: "Manufacturing", desc: "Reliable supply chain solutions for heavy industry and manufacturing.", icon: Factory, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
    { name: "Automotive", desc: "Just-in-time delivery for automotive parts and vehicle logistics.", icon: Car, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800" },
    { name: "Pharmaceuticals", desc: "Temperature-controlled shipping for sensitive medical supplies.", icon: Pill, image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800" },
    { name: "Technology", desc: "Secure and efficient logistics for high-value electronics and hardware.", icon: Laptop, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" }
];

const IndustriesClient = () => {
    return (
        <>
            <section className="pt-48 pb-32 bg-[#f0f9ff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Market Sectors</p>
                        <h1 className="text-6xl md:text-8xl font-black mb-10 text-slate-900 tracking-tighter uppercase leading-[0.85]">
                            Industries We <br />
                            <span className="text-primary italic">Transform.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-bold uppercase tracking-tight max-w-2xl mx-auto">
                            Vortex Global provides specialized logistics solutions across diverse sectors, ensuring your industry-specific needs are met with precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative rounded-[40px] overflow-hidden aspect-[4/5] bg-slate-100"
                            >
                                <Image src={industry.image} alt={industry.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
                                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-xl">
                                        <industry.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{industry.name}</h3>
                                    <p className="text-white/60 font-bold text-sm uppercase tracking-tight leading-relaxed mb-8">{industry.desc}</p>
                                    <button className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors">
                                        Learn More <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustriesClient;
