"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

interface MapPickerProps {
    onChange: (lat: number, lng: number) => void;
    initialLat?: number;
    initialLng?: number;
}

function LocationMarker({ onChange, initialLat, initialLng }: MapPickerProps) {
    const [position, setPosition] = useState<L.LatLng>(
        new L.LatLng(initialLat || 52.5200, initialLng || 13.4050) // Default to Berlin
    );

    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            onChange(e.latlng.lat, e.latlng.lng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position} icon={customIcon} />
    );
}

export default function MapPicker({ onChange, initialLat, initialLng }: MapPickerProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="w-full h-64 bg-slate-100 animate-pulse rounded-2xl border-2 border-dashed border-slate-200" />;

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Select Surveillance Coordinates</label>
                <div className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">Click map to pinpoint location</div>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-inner group">
                <MapContainer
                    center={[initialLat || 52.5200, initialLng || 13.4050]}
                    zoom={10}
                    className="w-full h-full z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker onChange={onChange} initialLat={initialLat} initialLng={initialLng} />
                </MapContainer>
            </div>
        </div>
    );
}
