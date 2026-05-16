import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Vortex Global for any logistics inquiries, support, or partnership opportunities. Our team is available 24/7 to assist with your global shipping needs.",
    keywords: ["logistics support", "vortex global contact", "shipping inquiry", "customer service logistics"]
};

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <ContactClient />
        </main>
    );
}
