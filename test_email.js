require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function test() {
    console.log("Creating transporter with:", {
        host: process.env.SMTP_HOST || "smtp.spaceship.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        user: process.env.SMTP_USER,
        fromEmail: process.env.FROM_EMAIL
    });

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.spaceship.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        logger: true,
        debug: true
    });

    try {
        console.log("Verifying connection...");
        await transporter.verify();
        console.log("Connection verified successfully!");

        console.log("Attempting to send test email...");
        const info = await transporter.sendMail({
            from: `"${process.env.FROM_NAME || "Tracking Support"}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
            to: "phil7872@gmail.com",
            subject: "Global Nexus Tracker - Email System Test",
            html: `<div style="font-family:Arial,sans-serif;padding:20px;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;">
                <div style="background:#10b981;padding:20px;text-align:center;border-radius:8px 8px 0 0;">
                    <h1 style="color:white;margin:0;">Global Nexus Tracker</h1>
                    <p style="color:#d1fae5;margin:4px 0 0;">Email System Verified ✓</p>
                </div>
                <div style="padding:30px;">
                    <p>This is a test email confirming that your SMTP configuration is working correctly.</p>
                    <p style="color:#64748b;font-size:13px;">Sent from: ${process.env.FROM_EMAIL} via ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}</p>
                </div>
            </div>`,
        });

        console.log("Message sent:", info.messageId);
    } catch (error) {
        console.error("SMTP Error Details:", error);
    }
}

test();
