import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BICI Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
  icons: {
    icon: "/favicon2.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <NavBar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
