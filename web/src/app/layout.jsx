
import { Geist, Geist_Mono } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./globals.css";

// Import layout components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import Google Analytics component
import { GoogleAnalytics } from "@next/third-parties/google";

// Import the auto-logout idle timer
import IdleTimeout from "@/components/IdleTimeout";

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
// Defines the default metadata (title, description) for the application for SEO
export const metadata = {
  title: "Rubriq Africa | Sustainable Construction Materials",
  description:
    "Rubriq Africa converts end-of-life vehicle tires into durable construction bricks and pavers, addressing urban waste pollution while supplying affordable sustainable materials.",
};

// Main Layout component that wraps every page
export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="d-flex flex-column min-vh-100">

        {/* Auto logout mechanism that watches user activity */}
        <IdleTimeout timeoutMinutes={5} />

        {/* Navigation always visible */}
        <Navigation />

        {/* Page content */}
        <main className="flex-grow-1">
          {children}
        </main>

        {/* Footer always visible */}
        <Footer />

      </body>
      
      {/* Initialize Google Analytics with a placeholder ID */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}