import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { Footer } from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niddam",
  description: "Portfolio",
   icons: {
    icon: "/public/sw.ico", // Path to your favicon file
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel='icon' href='/sw.ico' />
      <body className={`${inter.className} bg-[#140000] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
