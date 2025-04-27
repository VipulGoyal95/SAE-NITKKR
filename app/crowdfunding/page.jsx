"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Crowdfunding() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-gray-100">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
        <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
            <Image
              src="/assets/images/racing-car.jpg"
              alt="Racing car"
              width={1200}
              height={600}
              className="object-cover w-full h-[40vh] md:h-[50vh]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl leading-tight">
                Every great journey begins with a spark — help us fuel the drive
                to victory.
              </h1>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fueling Dreams Together
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            Crowdfunding is the power of the crowd — a way for people to come
            together and support a cause they believe in. For students
            passionate about automotive engineering, it's a way to raise the
            funds we need to compete, innovate, and represent our college on
            national and global stages.
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Every contribution helps us participate in prestigious competitions,
            travel with our prototype vehicles, and build something amazing — as
            a team of engineers, innovators, and passionate learners.
          </p>
        </div>
      </section>

      {/* Funding Stats Section */}
      <section className="relative z-10 py-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mechanical Department */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Mechanical DEPT.</h3>
              <div className="mb-4">
                <p className="text-sm mb-2">Funds Left</p>
                <p className="text-5xl font-bold mb-4">60,000</p>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-4/5 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Electrical Department */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">ELECTRICAL DEPT.</h3>
              <div className="mb-4">
                <p className="text-sm mb-2">Funds Left</p>
                <p className="text-5xl font-bold mb-4">60,000</p>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-4/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Funds with checkered flag background */}
          <div className="mt-12 relative overflow-hidden rounded-2xl">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/95 p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">
                  Total Funds Received
                </h3>
                <p className="text-5xl md:text-6xl font-bold mb-6">2,00,000</p>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mb-10">
                <div className="h-full bg-green-500 w-4/5 rounded-full"></div>
              </div>

              <div className="flex justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md">
                  Contribute Now
                </button>
              </div>
            </div>

            {/* Checkered flag pattern at sides */}
            <div className="absolute -left-6 top-0 bottom-0 w-12 opacity-30">
              <div className="h-full bg-[repeating-linear-gradient(0deg,#fff_0px,#fff_10px,#000_10px,#000_20px)]"></div>
            </div>
            <div className="absolute -right-6 top-0 bottom-0 w-12 opacity-30">
              <div className="h-full bg-[repeating-linear-gradient(0deg,#fff_0px,#fff_10px,#000_10px,#000_20px)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Mentor Section */}
      <section className="relative z-10 py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            A Word From Our Faculty Mentor
          </h2>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden border-4 border-gray-700/70">
                <Image
                  src="/assets/images/faculty-mentor.jpg"
                  alt="Faculty Mentor"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-lg text-gray-300 mb-6">
                  At SAE NIT Kurukshetra, we don't just build vehicles—we shape
                  future engineers. Our mission is to instill the best of
                  engineering, passion, and teamwork. Our student-run club
                  proudly fosters enabling real-world learning and global
                  exposure. I wholeheartedly endorse their journey and invite
                  you to be a part of it.
                </p>
                <p className="text-right text-lg font-medium italic">
                  — Dr. [Name], Faculty In-Charge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Accelerons Section */}
      <section className="relative z-10 py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent transform -rotate-90 md:rotate-0 origin-top-left">
                ACCELERONS
              </h2>

              <div className="relative ml-4 pl-8 border-l-2 border-red-500">
                {[2020, 2021, 2022, 2023, 2024].map((year, index) => (
                  <div key={year} className="mb-8 relative">
                    <div className="absolute -left-[42px] w-8 h-8 bg-gray-800 border-2 border-red-500 rounded-full flex items-center justify-center">
                      {index === 4 ? (
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      ) : null}
                    </div>
                    <div className="text-xl font-bold">{year}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-2xl p-8 backdrop-blur-sm border border-red-900/30 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 mt-1.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p>7th Place in Supra SAE India Virtual</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 mt-1.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p>Selected for Efficycle main event - VRDE, Ahmednagar</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 mt-1.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p>Appreciated report from the SAE India judges</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 mt-1.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p>Successfully fabricated an all-new electric vehicle</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-5 mt-1.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p>The team is fully geared up for next season</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="inline-block bg-teal-500/90 text-white px-6 py-2 rounded-lg font-bold text-xl transform rotate-2">
              TESTIMONIALS
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
              <div className="min-w-[300px] md:min-w-[400px] snap-center bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/assets/images/testimonial1.jpg"
                      alt="Testimonial"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Student Name</h4>
                    <p className="text-sm text-gray-400">Batch of 2022</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Every race felt like a battle of confidence and perseverance.
                  I'm glad to be a part of it!
                </p>
              </div>

              <div className="min-w-[300px] md:min-w-[400px] snap-center bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/assets/images/testimonial2.jpg"
                      alt="Testimonial"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Alumni Name</h4>
                    <p className="text-sm text-gray-400">Batch of 2021</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Engineering excellence starts with belief — I'm glad to be a
                  part of it!
                </p>
              </div>

              <div className="min-w-[300px] md:min-w-[400px] snap-center bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/assets/images/testimonial3.jpg"
                      alt="Testimonial"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Faculty Name</h4>
                    <p className="text-sm text-gray-400">Professor</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Seeing the students' confidence in their future is the true
                  measure of our success.
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center border border-gray-700 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center border border-gray-700 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Navigation Section */}
      <section className="relative z-10 pt-16 pb-20 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-300 uppercase mb-4 text-sm tracking-wider">
                Sitemap
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-300 uppercase mb-4 text-sm tracking-wider">
                Documentation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Media Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-300 uppercase mb-4 text-sm tracking-wider">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Nitrox
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Accelerons
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    AutoKriti
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Team Drive
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Media Room
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-300 uppercase mb-4 text-sm tracking-wider">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} SAE NIT Kurukshetra. All rights
              reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
