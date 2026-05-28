// src/components/ShipmentLog.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { AlertCircle, Trash2, Check } from "lucide-react";

interface LogEntry {
  id: string;
  shipment_id: string;
  status: string;
  location: string;
  description: string;
  created_at: string;
}

export default function ShipmentLog({ shipmentId, isAdmin }: { shipmentId: string; isAdmin?: boolean }) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadLogs = async () => {
    setError(null);
    const { data, error } = await supabase
      .from("shipment_logs")
      .select("*")
      .eq("shipment_id", shipmentId)
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setLogs(data as LogEntry[]);
  };

  useEffect(() => {
    loadLogs();
  }, [shipmentId]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("shipment_logs").delete().eq("id", id);
    if (error) {
      alert("Failed to delete log");
    } else {
      setLogs(logs.filter((l) => l.id !== id));
    }
  };

  if (error)
    return (
      <div className="bg-red-50 border border-red-100 p-4 rounded-sm flex items-center gap-2 text-red-600">
        <AlertCircle size={16} />
        <span>{error}</span>
      </div>
    );

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-black text-slate-900">Shipment Activity Log</h3>
      {logs.length === 0 ? (
        <p className="text-slate-400">No activity yet.</p>
      ) : (
        <ul className="divide-y divide-slate-200">
          {logs.map((log) => (
            <li key={log.id} className="py-3 flex items-start gap-4">
              <div className="flex-1">
                <p className="font-black text-sm text-slate-900">
                  {log.status} - {log.location}
                </p>
                <p className="text-slate-500 text-xs">{log.description}</p>
                <p className="text-slate-400 text-[9px] mt-1">{new Date(log.created_at).toLocaleString()}</p>
              </div>
              {isAdmin && (
                <button
                  onClick={() => handleDelete(log.id)}
                  className="p-2 bg-red-50 border border-red-200 rounded-sm hover:bg-red-500 hover:text-white transition"
                  title="Delete log"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
