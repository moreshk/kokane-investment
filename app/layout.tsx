import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Kokane Investment",
  description: "Your trusted partner in financial investments since 2005",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-QTVBN7WT1H" />
      </body>
    </html>
  );
}