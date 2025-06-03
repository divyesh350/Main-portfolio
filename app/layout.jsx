import { Outfit } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

//components

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

//theme provider

import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Divyesh Bakaraniya",
  description: "Personal portfolio website of divyesh bakaraniya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={outfit.className}>
        <ThemeProvider attributes="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
