import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Justin T. Wender | Blockchain Researcher & Data Scientist",
  description: "Portfolio and blog of Justin T. Wender - Blockchain researcher, data scientist, and creative technologist specializing in DeFi, tokenomics, and digital asset research.",
  keywords: ["Justin Wender", "blockchain", "DeFi", "tokenomics", "data science", "cryptocurrency", "Web3"],
  authors: [{ name: "Justin T. Wender" }],
  openGraph: {
    title: "Justin T. Wender | Blockchain Researcher & Data Scientist",
    description: "Portfolio and blog of Justin T. Wender - Blockchain researcher, data scientist, and creative technologist.",
    url: "https://justinwender.com",
    siteName: "Justin T. Wender",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin T. Wender | Blockchain Researcher & Data Scientist",
    description: "Portfolio and blog of Justin T. Wender - Blockchain researcher, data scientist, and creative technologist.",
    creator: "@wenderjustin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-background text-text-primary">
        <Header />
        <div className="flex-grow pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
