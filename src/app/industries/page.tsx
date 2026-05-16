import { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
    title: "Logistics by Industry",
    description: "Explore how Vortex Global provides specialized logistics solutions for E-commerce, Manufacturing, Automotive, Pharmaceuticals, and Technology sectors worldwide.",
    keywords: ["logistics by industry", "retail shipping solutions", "manufacturing supply chain", "automotive logistics", "pharma shipping"]
};

export default function IndustriesPage() {
    return (
        <main className="bg-white min-h-screen">
            <IndustriesClient />
        </main>
    );
}
