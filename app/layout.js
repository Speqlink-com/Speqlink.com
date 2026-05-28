import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

// ✅ Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// ✅ Metadata is automatically injected in App Router
export const metadata = {
  title: "Speqlink — Architecturing Intelligent Solutions",
  description: "Speqlink is a Kenyan technology company engineering intelligent software ecosystems, AI-powered systems, and scalable digital infrastructure for Africa's future.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
