import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMART.INC Join Waitlist",
  description: "Join a transformative Design Thinking program built for Robotics & AI pioneers ready to turn bold ideas into meaningful, lasting impact across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
