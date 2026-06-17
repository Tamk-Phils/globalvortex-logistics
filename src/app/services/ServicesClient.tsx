"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
    { title: "Air Freight", desc: "Fast and reliable global air transport for time-sensitive cargo.", icon: Plane, image: "/images/hero-plane.png" },
    { title: "Ocean Freight", desc: "Cost-effective international shipping for large-volume ocean cargo.", icon: Ship, image: "/images/hero-ship.png" },
    { title: "Road Transport", desc: "Comprehensive trucking and inland delivery solutions across continents.", icon: Truck, image: "/images/delivery-van.png" },
    { title: "Warehousing", desc: "Secure and optimized storage and distribution network.", icon: Warehouse, image: "/images/vortex_warehouse.png" },
    { title: "Supply Chain", desc: "End-to-end consulting and optimization for global supply chains.", icon: BarChart3, image: "/images/tech-control.png" }
];

const ServicesClient = () => {
    return (
        <>
            <section className="pt-28 sm:pt-36 md:pt-48 pb-32 bg-[#f0f9ff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Our Solutions</p>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-10 text-slate-900 tracking-tighter uppercase leading-[0.85]">
                            Logistics <br />
                            <span className="text-primary italic">Excellence.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-bold uppercase tracking-tight max-w-2xl mx-auto">
                            Comprehensive shipping and supply chain services designed to power your global trade operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-16">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
                            >
                                <div className="lg:w-1/2 relative aspect-video w-full rounded-[40px] overflow-hidden shadow-3xl">
                                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                                </div>
                                <div className="lg:w-1/2 space-y-8">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10">
                                        <service.icon size={32} />
                                    </div>
                                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight">{service.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg uppercase tracking-tight leading-relaxed">{service.desc}</p>
                                    <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary transition-all flex items-center gap-3">
                                        Explore Service <ArrowRight size={16} />
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

export default ServicesClient;
