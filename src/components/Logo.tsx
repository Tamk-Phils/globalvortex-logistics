"use client";

import { motion } from "framer-motion";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <motion.div 
            className={`relative ${className}`}
            whileHover={{ scale: 1.05 }}
        >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0070F3" />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                </defs>
                
                {/* Outer Ring */}
                <motion.circle 
                    cx="50" cy="50" r="45" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2" 
                    strokeDasharray="10 20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Stylized L Path */}
                <path 
                    d="M35 25V75H75" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="10" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="drop-shadow-sm"
                />
                
                {/* Focus Node */}
                <motion.circle 
                    cx="35" cy="75" r="8" 
                    fill="#0070F3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </svg>
        </motion.div>
    );
}
