"use server";

import { sendShipmentCreatedEmail } from "@/lib/email";

export async function notifyShipmentCreated(params: {
    to: string;
    subject: string;
    trackingNumber: string;
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
}) {
    // Only attempt to send if SMTP settings are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn("Email notification skipped: SMTP credentials not configured in .env.local");
        return { success: false, error: "SMTP credentials not configured" };
    }

    return await sendShipmentCreatedEmail(params);
}
