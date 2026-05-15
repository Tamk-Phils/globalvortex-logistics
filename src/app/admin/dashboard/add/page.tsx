"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Save, Package, User, MapPin, Scale, AlertCircle, Clock, CreditCard, FileText, Calendar, Copy, Check, Mail, Radar, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { notifyShipmentCreated } from "@/app/actions/email";

export default function AddShipment() {
    const router = useRouter();
    const [isCopying, setIsCopying] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        tracking_number: "",
        item_type: "",
        description: "",
        sender_name: "",
        sender_email: "",
        recipient_name: "",
        recipient_address: "",
        recipient_email: "",
        origin: "USA Hub",
        destination: "",
        weight: "",
        dimensions: "",
        current_status: "Pending",
        payment_method: "Bank Transfer",
        payment_status: "Pending",
        estimated_delivery: ""
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Generate tracking number
        setFormData(prev => ({
            ...prev,
            tracking_number: `VG${Math.floor(100000000 + Math.random() * 900000000)}`
        }));
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(formData.tracking_number);
        setIsCopying(true);
        setTimeout(() => setIsCopying(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSaving(true);

        const newShipment = {
            ...formData,
            weight: parseFloat(formData.weight) || 0,
            estimated_delivery: formData.estimated_delivery ? new Date(formData.estimated_delivery).toISOString() : null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            updates: [
                {
                    id: Math.random().toString(36).substr(2, 9),
                    status: formData.current_status,
                    location: formData.origin,
                    description: `Shipment Created: ${formData.description || 'Package Registered'}. Type: ${formData.item_type}`,
                    created_at: new Date().toISOString()
                }
            ]
        };

        try {
            const { error: sbError } = await supabase
                .from('shipments')
                .insert([newShipment]);

            if (sbError) throw sbError;

            // Cache fallback
            const existingRaw = localStorage.getItem("vortex_shipments");
            const existing: any[] = existingRaw ? JSON.parse(existingRaw) : [];
            existing.push({ ...newShipment, id: Math.random().toString(36).substr(2, 9) });
            localStorage.setItem("vortex_shipments", JSON.stringify(existing));

            if (formData.recipient_email) {
                await notifyShipmentCreated({
                    to: formData.recipient_email,
                    subject: `Vortex Global: Shipment Created ${formData.tracking_number}`,
                    trackingNumber: formData.tracking_number,
                    senderName: formData.sender_name || 'Vortex Global Client',
                    recipientName: formData.recipient_name || 'Package Receiver',
                    origin: formData.origin || 'Origin Hub',
                    destination: formData.destination || 'Destination Hub'
                });
            }

            router.push("/admin/dashboard/shipments");
        } catch (err: any) {
            console.error("Full Supabase Error:", err);
            setError(`Error: ${err.message || "Failed to save shipment."}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="space-y-12 max-w-6xl pb-24">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/admin/dashboard/shipments" className="p-5 rounded-sm bg-white border border-slate-200 text-slate-400 hover:text-slate-900 transition-all shadow-sm group">
                        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </Link>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Radar size={16} className="text-primary animate-pulse" />
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">New Entry</span>
                        </div>
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">ADD <span className="text-primary italic">SHIPMENT.</span></h1>
                    </div>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-100 p-8 rounded-sm flex items-center gap-6 text-red-600 animate-in fade-in slide-in-from-top-4">
                    <AlertCircle size={28} />
                    <p className="font-black text-[10px] uppercase tracking-widest leading-relaxed">ERROR CODE: {error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="bg-white p-12 md:p-20 rounded-sm border border-slate-200 shadow-3xl space-y-16 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.01] grayscale pointer-events-none">
                         <Image src="/images/vortex_tech.png" alt="Tech" fill className="object-cover" />
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
                    
                    {/* Tracking ID Header */}
                    <div className="flex flex-wrap gap-12 justify-between items-end pb-16 border-b border-slate-100 relative z-10">
                        <div className="space-y-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">GENERATED TRACKING ID</p>
                            <div className="flex items-center gap-6">
                                <h2 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
                                    {formData.tracking_number}
                                </h2>
                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    className={`p-4 rounded-sm transition-all ${isCopying ? 'bg-primary text-white' : 'bg-slate-50 border border-slate-100 text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900'}`}
                                >
                                    {isCopying ? <Check size={24} /> : <Copy size={24} />}
                                </button>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-10 rounded-sm border border-slate-800 flex items-center gap-8 text-white shadow-3xl">
                            <div className="text-right">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">SYSTEM STATUS</p>
                                <p className="text-2xl font-black text-primary uppercase italic tracking-tighter">ACTIVE</p>
                            </div>
                            <Zap className="text-primary/40 animate-pulse" size={48} />
                        </div>
                    </div>

                    {/* Section 1: Asset Intelligence */}
                    <div className="space-y-10 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-primary">
                                <Package size={20} />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">SHIPMENT DETAILS</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">ITEM DESCRIPTION</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="E.G. ELECTRONICS, CLOTHING, PARTS"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                    value={formData.item_type}
                                    onChange={(e) => setFormData({ ...formData, item_type: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">ESTIMATED DELIVERY</label>
                                <div className="relative">
                                    <input
                                        type="datetime-local"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none cursor-pointer"
                                        value={formData.estimated_delivery}
                                        onChange={(e) => setFormData({ ...formData, estimated_delivery: e.target.value })}
                                    />
                                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">ADDITIONAL DETAILS</label>
                            <div className="relative">
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="PROVIDE ADDITIONAL DETAILS OR SPECIAL INSTRUCTIONS..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-6 px-8 pl-14 focus:outline-none focus:border-primary font-bold text-slate-500 text-xs outline-none resize-none uppercase tracking-tight"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                                <FileText className="absolute left-6 top-7 text-slate-300" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Topology */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
                        {/* Origin */}
                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-primary">
                                    <User size={20} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">SENDER INFORMATION</h3>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">SENDER NAME</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="FULL NAME / COMPANY"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                        value={formData.sender_name}
                                        onChange={(e) => setFormData({ ...formData, sender_name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">SENDER EMAIL</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            required
                                            placeholder="SENDER@EXAMPLE.COM"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 pl-14 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                            value={formData.sender_email}
                                            onChange={(e) => setFormData({ ...formData, sender_email: e.target.value })}
                                        />
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">ORIGIN CITY</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            placeholder="CITY, COUNTRY"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 pl-14 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                            value={formData.origin}
                                            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                                        />
                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Destination */}
                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-primary">
                                    <User size={20} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">RECIPIENT INFORMATION</h3>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">RECIPIENT NAME</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="FULL NAME / COMPANY"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                        value={formData.recipient_name}
                                        onChange={(e) => setFormData({ ...formData, recipient_name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">SENDER EMAIL</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            required
                                            placeholder="RECIPIENT@EXAMPLE.COM"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 pl-14 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                            value={formData.recipient_email}
                                            onChange={(e) => setFormData({ ...formData, recipient_email: e.target.value })}
                                        />
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">RECIPIENT ADDRESS</label>
                                    <textarea
                                        required
                                        rows={1}
                                        placeholder="STREET, SUITE, ZIP, COUNTRY"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none resize-none"
                                        value={formData.recipient_address}
                                        onChange={(e) => setFormData({ ...formData, recipient_address: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Metrology & Logistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-slate-100 relative z-10">
                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-primary">
                                    <Scale size={20} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">MEASUREMENTS</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">WEIGHT (LBS)</label>
                                    <input
                                        type="number"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                        value={formData.weight}
                                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">DIMENSIONS</label>
                                    <input
                                        type="text"
                                        placeholder="L X W X H"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none"
                                        value={formData.dimensions}
                                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10 md:col-span-2">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-primary">
                                    <CreditCard size={20} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">SHIPMENT SETTINGS</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">PAYMENT METHOD</label>
                                        <select
                                            className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none cursor-pointer appearance-none"
                                            value={formData.payment_method}
                                            onChange={(e) => setFormData({ ...formData, payment_method: e.target.value })}
                                        >
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="Crypto">Crypto</option>
                                            <option value="Institutional Credit">Credit</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">PAYMENT STATUS</label>
                                        <select
                                            className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 outline-none cursor-pointer appearance-none"
                                            value={formData.payment_status}
                                            onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Partially Synced">Partial</option>
                                            <option value="Verified">Verified</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">STATUS</label>
                                        <select
                                            className="w-full bg-slate-900 text-white border border-slate-900 rounded-sm py-5 px-8 focus:outline-none focus:bg-primary font-black text-[10px] uppercase tracking-widest cursor-pointer appearance-none outline-none"
                                            value={formData.current_status}
                                            onChange={(e) => setFormData({ ...formData, current_status: e.target.value })}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Out for Delivery">Out for Delivery</option>
                                            <option value="Held">Held at Customs</option>
                                            <option value="Postponed">Postponed</option>
                                        </select>
                                    </div>
                                    <div className="p-6 bg-slate-50 border border-dashed border-slate-200 rounded-sm">
                                        <p className="text-[9px] font-black text-slate-400 leading-relaxed uppercase tracking-[0.1em]">
                                            THIS SHIPMENT WILL BE ADDED TO THE VORTEX GLOBAL DATABASE.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 border-t border-slate-100 flex flex-wrap justify-end gap-10 items-center relative z-10">
                        <Link href="/admin/dashboard/shipments" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors">CANCEL</Link>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className={`bg-slate-900 hover:bg-primary text-white px-16 py-6 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all shadow-3xl flex items-center gap-6 disabled:opacity-50`}
                        >
                            {isSaving ? <Clock className="animate-spin" size={20} /> : <Save size={20} />}
                            {isSaving ? "SAVING..." : "CREATE SHIPMENT"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
