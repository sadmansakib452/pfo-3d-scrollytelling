import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PFO – Pure Fresh Organic | 3D Scrollytelling Experience",
  description: "Experience 100% Tree-Ripened Organic Mango from Rajshahi Orchards. Zero Chemicals, Zero Formalin, 100% Pure Organic Living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#081C15] text-[#F9F7F1] antialiased selection:bg-[#FFB703] selection:text-[#081C15]">
        {children}
      </body>
    </html>
  );
}
