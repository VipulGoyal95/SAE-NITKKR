"use client";
import { usePathname } from "next/navigation";
import BannerMarquee from "./BannerMarquee";
import Header from "./Navbar";
import Footer from "./Footer";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideBanner =
    pathname === "/crowdfunding" ||
    pathname === "/crowdfunding/form" ||
    pathname === "/crowdfunding/thankyou" ||
    pathname === "/crowdfunding/payment"

  return (
    <>
      {!hideBanner && <BannerMarquee />}
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
