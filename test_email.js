require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
    try {
        console.log("Sending test email using Resend API...");
        console.log("Using API Key:", process.env.RESEND_API_KEY ? "Loaded Successfully" : "MISSING!");
        
        const data = await resend.emails.send({
            from: 'Global Nexus Tracker <support@globalnexustracker.com>',
            to: ['phils7872@gmail.com'],
            subject: 'Resend API Integration Test',
            html: `
            <div style="font-family:Arial,sans-serif;padding:20px;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;">
                <div style="background:#10b981;padding:20px;text-align:center;border-radius:8px 8px 0 0;">
                    <h1 style="color:white;margin:0;">Global Nexus Tracker</h1>
                    <p style="color:#d1fae5;margin:4px 0 0;">Resend SDK Verified ✓</p>
                </div>
                <div style="padding:30px;">
                    <p>This is a test email confirming that the Resend API is working correctly and bypassing Gmail spam filters.</p>
                </div>
            </div>`
        });

        if (data.error) {
            console.error("Resend returned an error:", data.error);
        } else {
            console.log("SUCCESS! Response payload from Resend:", data);
        }
    } catch (error) {
        console.error("Crash during execution:", error);
    }
}

test();
