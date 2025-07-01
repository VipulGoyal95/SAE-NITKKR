"use client";

import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const marqueeText =
  "Help Drive Innovation at SAE NIT Kurukshetra! | We are raising ₹8 Lakhs in 45 Days to power the next big leaps for our teams! | Be a part of our journey. CLICK to check out our Crowdfunding Drive!";

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