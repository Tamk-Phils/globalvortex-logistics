// src/app/api/shipments/route.ts
"use server";

import { supabase } from "@/lib/supabase";
import { z } from "zod";

// Zod schema for shipment payload (matches fields used in AddShipment)
const ShipmentSchema = z.object({
  tracking_number: z.string(),
  item_type: z.string().optional(),
  description: z.string().optional(),
  sender_name: z.string().optional(),
  sender_email: z.string().optional(),
  recipient_name: z.string().optional(),
  recipient_email: z.string().optional(),
  origin: z.string().optional(),
  destination: z.string().optional(),
  weight: z.coerce.number().optional(),
  dimensions: z.string().optional(),
  current_status: z.string().optional(),
  payment_method: z.string().optional(),
  payment_status: z.string().optional(),
  estimated_delivery: z.string().optional(),
  // Additional optional fields for future extensions
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional()
});

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = ShipmentSchema.parse(raw);

    // Insert shipment record into Supabase
    const { data: inserted, error: insertError } = await supabase
      .from("shipments")
      .insert([parsed]);

    if (insertError) throw insertError;

    // Create initial activity log entry for this shipment
    const logEntry = {
      id: Math.random().toString(36).substr(2, 9),
      shipment_id: parsed.tracking_number,
      status: parsed.current_status ?? "Pending",
      location: parsed.origin ?? "",
      description: `Shipment created – ${parsed.description || "No description"}`,
      created_at: new Date().toISOString()
    };

    const { error: logError } = await supabase
      .from("shipment_logs")
      .insert([logEntry]);
    if (logError) console.warn("Log insert failed:", logError);

    return new Response(JSON.stringify({ success: true, shipment: inserted?.[0] }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}
