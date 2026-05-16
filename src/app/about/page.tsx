import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about the mission, vision, and leadership of Vortex Global. We are dedicated to revolutionizing global logistics through modern technology and transparent shipping solutions.",
    keywords: ["vortex global mission", "logistics leadership", "shipping technology company", "global logistics values"]
};

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <AboutClient />
        </main>
    );
}
