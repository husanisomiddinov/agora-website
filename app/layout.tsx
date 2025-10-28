import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Agora | AI-Powered Education",
  description: "Project Agora is a knowledge institution focused on AI-powered education, transforming how people learn and grow.",
  metadataBase: new URL('https://projectagora.com'),
  keywords: ["AI education", "personalized learning", "online education", "adaptive learning"],
  authors: [{ name: "Project Agora Team" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Project Agora',
    title: "Project Agora | AI-Powered Education",
    description: "Transforming how people learn through AI-powered education",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Project Agora | AI-Powered Education",
    description: "Transforming how people learn through AI-powered education",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
