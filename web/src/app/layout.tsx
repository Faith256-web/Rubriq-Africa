import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

// Import layout components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* ===== FONTS ===== */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ===== METADATA ===== */
export const metadata: Metadata = {
  title: "Rubriq Africa | Sustainable Construction Materials",
  description:
    "Rubriq Africa converts end-of-life vehicle tires into durable construction bricks and pavers, addressing urban waste pollution while supplying affordable sustainable materials.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="d-flex flex-column min-vh-100">

        {/* Navigation always visible */}
        <Navigation />

        {/* Page content */}
        <main className="flex-grow-1">
          {children}
        </main>

        {/* Footer always visible */}
        <Footer />

      </body>
    </html>
  );
}