"use client";

import { useEffect, useState, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Loader2, Maximize2, Minimize2, LocateFixed, X } from 'lucide-react';
import debounce from 'lodash.debounce';

// Delivery truck marker
const customIcon = L.divIcon({
    html: '<div style="font-size: 32px; line-height: 1; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));">🚚</div>',
    className: 'custom-emoji-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
});

interface MapPickerProps {
    onChange: (lat: number, lng: number, address: string) => void;
    initialLat?: number;
    initialLng?: number;
    initialAddress?: string;
}

// Handles click events and keeps marker in sync
function LocationMarker({
    position,
    onMapClick,
}: {
    position: L.LatLng;
    onMapClick: (latlng: L.LatLng) => void;
}) {
    useMapEvents({
        click(e) {
            onMapClick(e.latlng);
        },
    });
    return <Marker position={position} icon={customIcon} />;
}

// Syncs map center when position changes from address search
// Uses setView (no animation) to avoid tile-loading artifacts on mobile
function MapSync({ position }: { position: L.LatLng }) {
    const map = useMap();
    const prevPos = useRef<L.LatLng | null>(null);

    useEffect(() => {
        if (
            prevPos.current === null ||
            prevPos.current.lat !== position.lat ||
            prevPos.current.lng !== position.lng
        ) {
            map.setView([position.lat, position.lng], map.getZoom(), { animate: false });
            prevPos.current = position;
        }
    }, [position, map]);

    return null;
}

// Invalidates map size so tiles fill the container after resize / modal open
function MapInvalidator({ trigger }: { trigger: number }) {
    const map = useMap();
    useEffect(() => {
        const t1 = setTimeout(() => map.invalidateSize(), 50);
        const t2 = setTimeout(() => map.invalidateSize(), 300);
        const t3 = setTimeout(() => map.invalidateSize(), 600);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [map, trigger]);
    return null;
}

export default function MapPicker({ onChange, initialLat, initialLng, initialAddress = "" }: MapPickerProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [position, setPosition] = useState<L.LatLng>(
        new L.LatLng(initialLat || 52.5200, initialLng || 13.4050)
    );
    const [address, setAddress] = useState(initialAddress);
    const [isSearching, setIsSearching] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [invalidateTick, setInvalidateTick] = useState(0);

    useEffect(() => { setIsMounted(true); }, []);

    // Re-trigger invalidation when fullscreen toggles
    useEffect(() => {
        setInvalidateTick(t => t + 1);
    }, [isFullscreen]);

    // Reverse geocode on map click
    const handleMapClick = async (latlng: L.LatLng) => {
        setPosition(latlng);
        setIsSearching(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`
            );
            const data = await res.json();
            const parts: string[] = [];
            if (data.address?.city || data.address?.town || data.address?.village)
                parts.push(data.address.city || data.address.town || data.address.village);
            if (data.address?.state) parts.push(data.address.state);
            if (data.address?.country) parts.push(data.address.country);
            const newAddress = parts.length > 0 ? parts.join(", ") : (data.display_name || "Unknown Location");
            setAddress(newAddress);
            onChange(latlng.lat, latlng.lng, newAddress);
        } catch {
            onChange(latlng.lat, latlng.lng, address);
        } finally {
            setIsSearching(false);
        }
    };

    // Forward geocode from address input
    const searchAddress = async (query: string) => {
        if (!query.trim()) return;
        setIsSearching(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`
            );
            const data = await res.json();
            if (data?.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lng = parseFloat(data[0].lon);
                setPosition(new L.LatLng(lat, lng));
                onChange(lat, lng, query);
            }
        } catch {
            // silently fail
        } finally {
            setIsSearching(false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSearch = useCallback(debounce(searchAddress, 900), []);

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
        onChange(position.lat, position.lng, e.target.value);
        debouncedSearch(e.target.value);
    };

    if (!isMounted) {
        return <div className="w-full h-80 bg-slate-100 animate-pulse rounded-2xl border-2 border-dashed border-slate-200" />;
    }

    const mapElement = (
        <MapContainer
            center={[position.lat, position.lng]}
            zoom={12}
            className="w-full h-full"
            zoomControl={true}
            style={{ zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} onMapClick={handleMapClick} />
            <MapSync position={position} />
            <MapInvalidator trigger={invalidateTick} />
        </MapContainer>
    );

    return (
        <>
            <div className="space-y-4">
                {/* Address search bar */}
                <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-500 uppercase tracking-widest ml-1">
                        Current Location (Auto-Syncs with Map)
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-6 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 font-medium text-slate-900 text-sm"
                            placeholder="e.g. Heathrow Airport, UK"
                            value={address}
                            onChange={handleAddressChange}
                            required
                        />
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        {isSearching && (
                            <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 text-primary animate-spin" size={18} />
                        )}
                    </div>
                </div>

                {/* Map container */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">
                            Pinpoint Location
                        </label>
                        <button
                            type="button"
                            onClick={() => setIsFullscreen(true)}
                            className="flex items-center gap-1.5 text-[10px] font-bold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg"
                            style={{ transition: "background-color 0.15s" }}
                        >
                            <Maximize2 size={12} /> Full Screen
                        </button>
                    </div>

                    {/* Normal map — taller on mobile */}
                    <div className="h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
                        {mapElement}
                        {/* Tap hint overlay */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/70 text-white text-[10px] font-bold px-3 py-1 rounded-full pointer-events-none whitespace-nowrap z-[400]">
                            Tap map to drop pin
                        </div>
                    </div>

                    {/* Coordinates display */}
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                        {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
                    </p>
                </div>
            </div>

            {/* ── Fullscreen overlay ── */}
            {isFullscreen && (
                <div
                    className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col"
                    style={{ touchAction: "none" }}
                >
                    {/* Fullscreen top bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/10 flex-shrink-0">
                        <div>
                            <p className="text-white font-black text-sm uppercase tracking-tight">Select Location</p>
                            <p className="text-slate-400 text-[10px] font-bold mt-0.5">
                                {address || "Tap the map to pinpoint"}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsFullscreen(false)}
                            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Fullscreen address bar */}
                    <div className="px-4 py-3 bg-slate-800 flex-shrink-0">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full bg-slate-700 border border-slate-600 rounded-xl py-3 px-5 pl-10 text-white placeholder-slate-400 font-medium text-sm focus:outline-none focus:border-primary/60"
                                placeholder="Search location..."
                                value={address}
                                onChange={handleAddressChange}
                            />
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            {isSearching && (
                                <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 text-primary animate-spin" size={16} />
                            )}
                        </div>
                    </div>

                    {/* Fullscreen map */}
                    <div className="flex-1 relative" style={{ touchAction: "none" }}>
                        <MapContainer
                            center={[position.lat, position.lng]}
                            zoom={12}
                            className="w-full h-full"
                            zoomControl={true}
                            style={{ zIndex: 0, height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker position={position} onMapClick={handleMapClick} />
                            <MapSync position={position} />
                            <MapInvalidator trigger={invalidateTick} />
                        </MapContainer>

                        {/* Tap hint */}
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-slate-900/80 text-white text-[10px] font-bold px-4 py-2 rounded-full pointer-events-none z-[400] whitespace-nowrap">
                            Tap anywhere to place pin
                        </div>
                    </div>

                    {/* Fullscreen bottom bar */}
                    <div className="px-4 py-4 bg-slate-900 border-t border-white/10 flex-shrink-0 safe-area-bottom">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Coordinates</p>
                                <p className="text-white font-black text-sm">
                                    {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
                                </p>
                            </div>
                            <LocateFixed size={20} className="text-primary" />
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsFullscreen(false)}
                            className="w-full bg-primary text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                        >
                            <Minimize2 size={16} /> Confirm Location
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
