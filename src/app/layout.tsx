import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClickSpark from "@/components/ClickSpark";
import Ballpit from "@/components/Ballpit";
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
        className={`${fira.className} bg-[url('data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%20width=%2732%27%20height=%2732%27%20fill=%27none%27%20stroke=%27rgb(0%200%200%20/%200.2)%27%3e%3cpath%20d=%27M0%20.5H31.5V32%27/%3e%3c/svg%3e')] antialiased`}
      >
        <div className=" p-5 md:p-10 lg:p-15">
          <ClickSpark
            sparkColor="blue"
            sparkSize={30}
            sparkRadius={30}
            sparkCount={8}
            duration={400}
          >
            {" "}
            <Navbar />
            {children}
            <Analytics />
          </ClickSpark>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "300px",
            maxHeight: "100px",
            width: "100%",
          }}
        >
          <Ballpit
            count={50}
            gravity={0.3}
            friction={0.9975}
            wallBounce={1}
            followCursor={true}
          />
        </div>
      </body>
    </html>
  );
}
