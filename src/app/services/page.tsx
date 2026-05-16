import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Logistics Services",
    description: "Explore the full range of logistics services provided by Vortex Global, including air freight, ocean freight, warehousing, and supply chain management.",
    keywords: ["logistics services", "air freight shipping", "ocean cargo services", "global warehousing", "supply chain consulting"]
};

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen">
            <ServicesClient />
        </main>
    );
}
