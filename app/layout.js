import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Navbar'
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SAE NIT KURUKSHETRA",
  description: "Official website of SAE NIT Kurukshetra - Society of Automotive Engineers",
  icons: {
    icon: '/assets//images/sae-logo.webp',
    apple: '/assets//images/sae-logo.webp',
  },
  openGraph: {
    images: '/assets/images/sae-logo.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 selection:bg-red-500 selection:text-white scroll-smooth`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
