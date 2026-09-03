import nodemailer from 'nodemailer';

let host = process.env.SMTP_HOST;
let port = process.env.SMTP_PORT;
let user = process.env.SMTP_USER;
let pass = process.env.SMTP_PASSWORD;

// Clean up quotes if node --env-file passes them literally
if (host?.startsWith('"') && host?.endsWith('"')) host = host.slice(1, -1);
if (port?.startsWith('"') && port?.endsWith('"')) port = port.slice(1, -1);
if (user?.startsWith('"') && user?.endsWith('"')) user = user.slice(1, -1);
if (pass?.startsWith('"') && pass?.endsWith('"')) pass = pass.slice(1, -1);

async function verifyConnection() {
  console.log(`Verifying SMTP connection to ${host}:${port} with user ${user}...`);
  
  const transporter = nodemailer.createTransport({
    host,
    port: parseInt(port || '587'),
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection is fully functional and ready to send emails!");
  } catch (error) {
    console.error("❌ Failed to verify SMTP connection:", error);
    process.exit(1);
  }
}

verifyConnection();
