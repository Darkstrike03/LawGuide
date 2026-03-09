import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LawGuide — India's Open Legal Reference",
  description:
    "A free, open-source repository of Indian laws for the public, lawyers, and law students. Browse the IPC, CrPC, Constitution, and more.",
  keywords: ["law", "india", "ipc", "legal", "open source", "constitution"],
  openGraph: {
    title: "LawGuide — India's Open Legal Reference",
    description: "A free, open-source repository of Indian laws.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
