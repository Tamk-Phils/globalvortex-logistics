"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

// Custom SVG marker for a premium feel
const customIcon = L.divIcon({
    html: `
        <div class="relative flex items-center justify-center">
            <div class="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping"></div>
            <div class="relative w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-xl">
                <div class="w-4 h-4 bg-primary rounded-full"></div>
            </div>
            <div class="absolute -top-12 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded-sm whitespace-nowrap shadow-xl uppercase tracking-widest">
                Vortex Signal v4.2
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
