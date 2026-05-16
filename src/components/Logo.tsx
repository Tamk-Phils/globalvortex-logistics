"use client";

import { motion } from "framer-motion";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <motion.div 
            className={`relative ${className}`}
            whileHover={{ scale: 1.05 }}
        >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M20 20L80 20L50 80L20 20Z" 
                    fill="currentColor"
                    className="text-primary"
                />
                <path 
                    d="M30 20L70 20L50 60L30 20Z" 
                    fill="white"
                    fillOpacity="0.3"
                />
                <motion.path 
                    d="M50 20V80" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </svg>
        </motion.div>
    );
}
