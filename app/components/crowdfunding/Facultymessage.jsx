// components/FacultyMessage.tsx
import React from "react";
import Image from "next/image";

const FacultyMessage = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Abstract Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-purple-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-blue-900/30 to-indigo-900/20 blur-xl"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Photo */}
        <div className="relative">
          {/* Orbit Accent */}
          <div className="absolute -left-4 -top-4 w-full h-full rounded-full border-4 border-dotted border-purple-800/30 animate-[spin_25s_linear_infinite]"></div>

          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 mix-blend-overlay z-10"></div>
            <Image
              src="/assets/images/crowdfunding/faculty.webp"
              alt="Faculty In-Charge"
              width={224}
              height={224}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            Faculty Speaks
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Message from Faculty In-Charge
          </h2>

          <p className="text-lg mb-4">
            <span className="font-bold text-blue-300">Dr. Rakesh Sharma</span>
            <br />
            <span className="text-sm text-gray-400">
              Faculty Advisor, SAE NIT Kurukshetra
            </span>
          </p>

          <div className="relative bg-gray-800/80 border border-gray-700 rounded-xl p-6 text-gray-300 leading-relaxed shadow-lg backdrop-blur-sm">
            {/* Quote SVG */}
            <svg
              className="absolute top-4 left-4 w-8 h-8 text-purple-500 opacity-70"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H10z M20,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H20z"></path>
            </svg>

            <p className="pl-10 text-lg">
              It gives me immense pride to see the students of SAE NIT
              Kurukshetra take initiative towards innovation and sustainability.
              Your support in this crowdfunding effort helps us nurture
              real-world engineering talent and develop path-breaking projects.
              Thank you for believing in our mission.
            </p>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600/20 rounded-full blur-md z-0"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-600/20 rounded-full blur-md z-0"></div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="#support"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            >
              Support Our Cause
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyMessage;
