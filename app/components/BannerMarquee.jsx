"use client";

import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const marqueeText =
  "Together, we made it happen! In 45 days, we managed to raise ₹7.48 lakhs. Thank you to everyone who believed in our journey. Your trust resonates with us. For those who still wish to support, contributions are still welcome!";

export default function BannerMarquee() {
  return (
    <Link
      href="/crowdfunding"
      className="fixed top-0 right-0 z-[100] w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 py-2 overflow-hidden border-b-2 border-blue-300 shadow-lg transition duration-200 hover:brightness-110 cursor-pointer"
      style={{ textDecoration: 'none' }}
    >
      <Marquee
        pauseOnHover
        gradient={false}
        speed={100}
        direction="left"
        style={{ width: '100%' }}
        className="text-white font-semibold text-base md:text-lg"
        gap={500}
      >
        <span className="px-4 ml-[500px]">{marqueeText}</span>
      </Marquee>
    </Link>
  );
} 