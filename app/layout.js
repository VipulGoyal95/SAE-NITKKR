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
  title: {
    default: "SAE NIT Kurukshetra",
    template: "%s - SAE NIT Kurukshetra",
  },
  description:
    "Official website of SAE NIT Kurukshetra - Society of Automotive Engineers NIT Kurukshetra",
  metadataBase: new URL("https://www.saenitkurukshetra.com"),
  alternates: {
    canonical: "https://www.saenitkurukshetra.com/",
  },
  icons: {
    icon: "/assets/images/sae-logo.webp",
    apple: "/assets/images/sae-logo.webp",
  },
  openGraph: {
    title: "SAE NIT Kurukshetra",
    description:
      "Explore SAE NIT Kurukshetra's engineering innovation and teams like Accelerons and Nitrox.",
    url: "https://www.saenitkurukshetra.com/",
    siteName: "SAE NIT Kurukshetra",
    images: [
      {
        url: "/assets/images/sae-logo.webp",
        width: 800,
        height: 600,
        alt: "SAE NIT Kurukshetra Logo",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
