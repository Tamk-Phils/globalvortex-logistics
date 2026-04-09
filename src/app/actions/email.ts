"use server";

import { sendShipmentCreatedEmail, sendShipmentUpdateEmail } from "@/lib/email";

export async function notifyShipmentCreated(params: {
    to: string;
    subject: string;
    trackingNumber: string;
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
}) {
    if (!process.env.RESEND_API_KEY) {
        console.warn("Email notification skipped: RESEND_API_KEY credentials not configured");
        return { success: false, error: "RESEND_API_KEY not configured" };
    }
    return await sendShipmentCreatedEmail(params);
}

export async function notifyShipmentUpdate(params: {
    to: string;
    subject: string;
    trackingNumber: string;
    recipientName: string;
    newStatus: string;
    location: string;
    description: string;
}) {
    if (!process.env.RESEND_API_KEY) {
        console.warn("Email notification skipped: RESEND_API_KEY credentials not configured");
        return { success: false, error: "RESEND_API_KEY not configured" };
    }
    return await sendShipmentUpdateEmail(params);
}
