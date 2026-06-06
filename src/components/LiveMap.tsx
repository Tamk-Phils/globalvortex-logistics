"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom SVG marker for a premium feel
const customIcon = L.divIcon({
    html: `
        <div class="relative flex items-center justify-center translate-x-2 -translate-y-2">
            <!-- Trail effect -->
            <div class="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-tr from-transparent to-primary/40 rounded-full blur-md origin-top-right rotate-45 animate-pulse"></div>
            <div class="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping"></div>
            <div class="relative w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-xl z-10">
                <div class="w-4 h-4 bg-primary rounded-full"></div>
                <!-- Directional Arrow -->
                <div class="absolute -top-2 -right-2 w-5 h-5 text-primary bg-white rounded-full border border-primary/20 flex items-center justify-center shadow-md animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
            </div>
            <div class="absolute -top-12 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded-sm whitespace-nowrap shadow-xl uppercase tracking-widest z-20">
                IN TRANSIT (MOVING)
            </div>
        </div>
    `,
    className: 'custom-vortex-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

interface LiveMapProps {
    lat: number;
    lng: number;
    zoom?: number;
}

// Component to handle map center updates
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

export default function LiveMap({ lat, lng, zoom = 13 }: LiveMapProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="w-full h-full bg-slate-50 animate-pulse rounded-sm" />;

    const position: [number, number] = [lat, lng];

    return (
        <MapContainer
            center={position}
            zoom={zoom}
            className="w-full h-full rounded-sm z-0"
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} icon={customIcon} />
            <ChangeView center={position} zoom={zoom} />
        </MapContainer>
    );
}
