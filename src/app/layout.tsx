import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
const fira = Fira_Code({
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fira.className} bg-[url('data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%20width=%2732%27%20height=%2732%27%20fill=%27none%27%20stroke=%27rgb(0%200%200%20/%200.2)%27%3e%3cpath%20d=%27M0%20.5H31.5V32%27/%3e%3c/svg%3e')] antialiased p-10`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
