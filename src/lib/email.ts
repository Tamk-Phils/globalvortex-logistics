import nodemailer from "nodemailer";

interface BaseEmailParams {
    to: string;
    subject: string;
    trackingNumber: string;
    recipientName: string;
}

interface NewShipmentParams extends BaseEmailParams {
    senderName: string;
    origin: string;
    destination: string;
}

interface UpdateShipmentParams extends BaseEmailParams {
    newStatus: string;
    location: string;
    description: string;
}

const createTransporter = () => nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.spaceship.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const getTrackingLink = () => `${process.env.NEXT_PUBLIC_APP_URL || "https://nexustrack.com"}/tracking`;

export async function sendShipmentCreatedEmail({
    to,
    subject,
    trackingNumber,
    senderName,
    recipientName,
    origin,
    destination
}: NewShipmentParams) {
    const transporter = createTransporter();
    const trackingLink = getTrackingLink();

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <div style="background-color: #2563eb; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0;">Global Nexus Tracker</h1>
                <p style="color: #bfdbfe; margin: 5px 0 0;">Global Logistics Intelligence</p>
            </div>
            <div style="padding: 30px; background-color: white;">
                <h2 style="color: #1e293b;">Shipment Registered Successfully</h2>
                <p style="color: #64748b; font-size: 16px; line-height: 1.6;">
                    Hello <strong>${recipientName}</strong>,
                </p>
                <p style="color: #64748b; font-size: 16px; line-height: 1.6;">
                    A new shipment has been registered for you by <strong>${senderName}</strong>. You can now track your parcel in real-time.
                </p>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0 0 5px; text-transform: uppercase; font-weight: bold;">Tracking Number</p>
                    <p style="color: #2563eb; font-family: monospace; font-size: 24px; font-weight: bold; margin: 0;">${trackingNumber}</p>
                </div>

                <div style="margin: 25px 0;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                                <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase;">From</span><br/>
                                <strong style="color: #1e293b;">${origin}</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; text-align: right;">
                                <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase;">To</span><br/>
                                <strong style="color: #1e293b;">${destination}</strong>
                            </td>
                        </tr>
                    </table>
                </div>

                <div style="text-align: center; margin-top: 40px;">
                    <a href="${trackingLink}" style="background-color: #2563eb; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Track Your Shipment</a>
                </div>
            </div>
            <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
                <p>&copy; 2026 Global Nexus Tracker Logistics Solutions. All rights reserved.</p>
            </div>
        </div>
    `;

    try {
        await transporter.sendMail({
            from: `"${process.env.FROM_NAME || "Global Nexus Tracker"}" <${process.env.FROM_EMAIL || process.env.SMTP_USER || "support@globalnexustracker.com"}>`,
            to,
            subject,
            html: htmlContent,
        });
        return { success: true };
    } catch (error) {
        console.error("Email Error:", error);
        return { success: false, error };
    }
}

export async function sendShipmentUpdateEmail({
    to,
    subject,
    trackingNumber,
    recipientName,
    newStatus,
    location,
    description
}: UpdateShipmentParams) {
    const transporter = createTransporter();
    const trackingLink = getTrackingLink();

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <div style="background-color: #2563eb; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: white; margin: 0;">Global Nexus Tracker</h1>
                <p style="color: #bfdbfe; margin: 5px 0 0;">Global Logistics Intelligence</p>
            </div>
            <div style="padding: 30px; background-color: white;">
                <h2 style="color: #1e293b;">Shipment Status Update</h2>
                <p style="color: #64748b; font-size: 16px; line-height: 1.6;">
                    Hello <strong>${recipientName}</strong>,
                </p>
                <p style="color: #64748b; font-size: 16px; line-height: 1.6;">
                    Your shipment <strong>${trackingNumber}</strong> has been updated.
                </p>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0;">
                    <div style="margin-bottom: 15px;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0 0 5px; text-transform: uppercase; font-weight: bold;">New Status</p>
                        <p style="color: #2563eb; font-size: 18px; font-weight: bold; margin: 0;">${newStatus}</p>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0 0 5px; text-transform: uppercase; font-weight: bold;">Current Location</p>
                        <p style="color: #1e293b; font-size: 16px; margin: 0;">${location || "In Transit"}</p>
                    </div>
                    <div>
                        <p style="color: #94a3b8; font-size: 12px; margin: 0 0 5px; text-transform: uppercase; font-weight: bold;">Details</p>
                        <p style="color: #64748b; font-size: 14px; margin: 0;">${description || "No additional details provided."}</p>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 40px;">
                    <a href="${trackingLink}" style="background-color: #2563eb; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Track Your Shipment</a>
                </div>
            </div>
            <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
                <p>&copy; 2026 Global Nexus Tracker Logistics Solutions. All rights reserved.</p>
            </div>
        </div>
    `;

    try {
        await transporter.sendMail({
            from: `"${process.env.FROM_NAME || "Global Nexus Tracker"}" <${process.env.FROM_EMAIL || process.env.SMTP_USER || "support@globalnexustracker.com"}>`,
            to,
            subject,
            html: htmlContent,
        });
        return { success: true };
    } catch (error) {
        console.error("Email Error:", error);
        return { success: false, error };
    }
}
