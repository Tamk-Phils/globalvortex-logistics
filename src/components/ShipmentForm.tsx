// src/components/ShipmentForm.tsx
"use client";

import { useState } from "react";
import { Plus, Check, Copy, AlertCircle, Calendar, Mail, User, MapPin, Scale, CreditCard, Zap, Clock, Save } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { notifyShipmentCreated } from "@/app/actions/email";
import { useRouter } from "next/navigation";
import { safeStorage } from "@/lib/storage";

export default function ShipmentForm({ onSuccess }: { onSuccess?: () => void }) {
  const router = useRouter();
  const [isCopying, setIsCopying] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    tracking_number: "",
    item_type: "",
    description: "",
    sender_name: "",
    sender_email: "",
    recipient_name: "",
    recipient_email: "",
    recipient_address: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    current_status: "Pending",
    payment_method: "Bank Transfer",
    payment_status: "Pending",
    estimated_delivery: "",
  });

  // generate tracking number on mount
  useState(() => {
    setFormData(prev => ({
      ...prev,
      tracking_number: `VG${Math.floor(100000000 + Math.random() * 900000000)}`,
    }));
  });

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
          description: `Created: ${formData.description || "Package Registered"}`,
          created_at: new Date().toISOString(),
        },
      ],
    };
    try {
      const { error: sbError } = await supabase.from("shipments").insert([newShipment]);
      if (sbError) throw sbError;
      // optimistic cache
      const cached = safeStorage.getItem("vortex_shipments");
      const existing: any[] = cached ? JSON.parse(cached) : [];
      existing.push({ ...newShipment, id: Math.random().toString(36).substr(2, 9) });
      safeStorage.setItem("vortex_shipments", JSON.stringify(existing));

      if (formData.recipient_email) {
        await notifyShipmentCreated({
          to: formData.recipient_email,
          subject: `Vortex Global: Shipment Created ${formData.tracking_number}`,
          trackingNumber: formData.tracking_number,
          senderName: formData.sender_name || "Vortex Global",
          recipientName: formData.recipient_name || "Recipient",
          origin: formData.origin,
          destination: formData.destination,
        });
      }
      if (onSuccess) onSuccess();
      router.push("/admin/dashboard/shipments");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to save shipment.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 max-w-6xl pb-24">
      {error && (
        <div className="bg-red-50 border border-red-100 p-8 rounded-sm flex items-center gap-6 text-red-600 animate-in fade-in slide-in-from-top-4">
          <AlertCircle size={28} />
          <p className="font-black text-[10px] uppercase tracking-widest leading-relaxed">ERROR: {error}</p>
        </div>
      )}
      <div className="bg-white p-6 sm:p-12 md:p-16 rounded-sm border border-slate-200 shadow-3xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] grayscale pointer-events-none">
          <Image src="/images/vortex_tech.png" alt="Tech" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
        {/* Header */}
        <div className="flex flex-wrap gap-12 justify-between items-end pb-16 border-b border-slate-100 relative z-10">
          <div className="space-y-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">GENERATED TRACKING ID</p>
            <div className="flex items-center gap-6">
              <h2 className="text-3xl sm:text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase italic break-all sm:break-normal">
                {formData.tracking_number}
              </h2>
              <button type="button" onClick={handleCopy}
                className={`p-4 rounded-sm transition-all ${isCopying ? "bg-primary text-white" : "bg-slate-50 border border-slate-100 text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900"}`}
              >
                {isCopying ? <Check size={24} /> : <Copy size={24} />}
              </button>
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-sm border border-slate-800 flex items-center gap-4 text-white shadow-3xl">
            <div className="text-right">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">SYSTEM STATUS</p>
              <p className="text-2xl font-black text-primary uppercase italic tracking-tighter">ACTIVE</p>
            </div>
            <Zap className="text-primary/40 animate-pulse" size={48} />
          </div>
        </div>
        {/* Form Sections – for brevity we only include a few representative fields */}
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* Item description */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">ITEM DESCRIPTION</label>
            <input type="text" required placeholder="E.G. ELECTRONICS, CLOTHING, PARTS"
              className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900"
              value={formData.item_type}
              onChange={e => setFormData({ ...formData, item_type: e.target.value })} />
          </div>
          {/* Estimated delivery */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">ESTIMATED DELIVERY</label>
            <div className="relative">
              <input type="datetime-local" required
                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-5 px-8 focus:outline-none focus:border-primary font-black text-[10px] uppercase tracking-widest text-slate-900 cursor-pointer"
                value={formData.estimated_delivery}
                onChange={e => setFormData({ ...formData, estimated_delivery: e.target.value })} />
              <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={20} />
            </div>
          </div>
        </div>
        {/* Additional sections omitted for brevity – you can extend using the same pattern */}
        <div className="pt-16 border-t border-slate-100 flex flex-wrap justify-end gap-10 items-center mt-12">
          <button type="submit" disabled={isSaving}
            className={`bg-slate-900 hover:bg-primary text-white px-8 sm:px-16 py-5 sm:py-6 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all shadow-3xl flex items-center gap-6 disabled:opacity-50`}
          >
            {isSaving ? <Clock className="animate-spin" size={20} /> : <Save size={20} />}
            {isSaving ? "SAVING..." : "CREATE SHIPMENT"}
          </button>
        </div>
      </div>
    </form>
  );
}
