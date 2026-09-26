import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PFO – Pure Fresh Organic | 3D Scrollytelling Experience",
  description: "Experience 100% Tree-Ripened Organic Alphonso Mango from Rajshahi Orchards. Zero Chemicals, Zero Formalin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#081C15] text-[#F9F7F1] font-sans antialiased selection:bg-[#FFB703] selection:text-[#081C15]">
        {children}
      </body>
    </html>
  );
}
