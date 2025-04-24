// components/FacultyMessage.tsx
import React from 'react';
import { QuoteIcon } from 'lucide-react'; // Optional: lucide-react for modern icons

const FacultyMessage = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -z-10 bg-purple-500 opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Photo */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl shrink-0">
          <img
            src="/assets/images/crowdfunding/faculty.png" // Replace with actual image
            alt="Faculty In-Charge"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Message from Faculty In-Charge</h2>
          <p className="text-lg text-gray-300 mb-4">
            Dr. Rakesh Sharma<br />
            <span className="text-sm text-gray-400">Faculty Advisor, SAE NIT Kurukshetra</span>
          </p>

          <div className="bg-[#111] border border-gray-700 rounded-xl p-6 text-gray-300 leading-relaxed shadow-lg relative">
            <QuoteIcon className="absolute top-4 left-4 w-6 h-6 text-purple-400 opacity-70" />
            <p className="pl-10">
              It gives me immense pride to see the students of SAE NIT Kurukshetra take initiative
              towards innovation and sustainability. Your support in this crowdfunding effort helps
              us nurture real-world engineering talent and develop path-breaking projects. Thank you
              for believing in our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyMessage;
