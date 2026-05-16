import { Metadata } from "next";
import TrackingClient from "./TrackingClient";

export const metadata: Metadata = {
    title: "Track Shipment",
    description: "Track your package in real-time with Vortex Global's advanced telemetry system. Enter your tracking number to get instant status updates and location data.",
    keywords: ["track package", "shipment telemetry", "real-time tracking", "vortex global tracking", "cargo status"]
};

export default function TrackingPage() {
    return (
        <main className="bg-white min-h-screen">
            <TrackingClient />
        </main>
    );
}
