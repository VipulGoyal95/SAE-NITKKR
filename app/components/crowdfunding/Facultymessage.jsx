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

        {/* Message Content */}
        <div className="flex flex-col items-center">
          <div className="inline-flex w-fit items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            Faculty Speaks
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent max-[500px]:text-center">
            Message from Faculty In-Charge
          </h2>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row flex-wrap gap-10 items-end max-[500px]:justify-center max-[500px]:gap-4">


            <div className="relative mb-0">
              {/* Orbit Accent */}
              <div className="absolute -left-4 -top-4 w-full h-full rounded-full border-4 border-dotted border-purple-800/30 animate-[spin_25s_linear_infinite]"></div>

              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 mix-blend-overlay z-10"></div>
                <Image
                  src="/assets/images/crowdfunding/Dr. Surjit Angra.webp"
                  alt="Faculty In-Charge"
                  width={100}
                  height={100}
                  className="w-full h-[130%] object-cover"
                />
              </div>
            </div>
            <div className="flex-1 max-[500px]:flex-auto">
              

              <p className="text-[26px] mb-4 max-[500px]:text-center">
                <span className="font-bold text-blue-300">Dr. Surjit Angra</span>
                <br />
                <span className="text-sm text-gray-400">
                  Ex- Faculty Advisor, SAE NIT Kurukshetra
                </span>
              </p>

              <div className="relative bg-gray-800/80 border border-gray-700 rounded-xl p-6 text-gray-300 leading-relaxed shadow-lg backdrop-blur-sm max-[500px]:w-full max-[500px]:mx-auto">
                {/* Quote SVG */}
                <svg
                  className="absolute top-4 left-4 w-8 h-8 text-purple-500 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H10z M20,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H20z"></path>
                </svg>

                <p className="pl-10 text-lg max-[500px]:text-[17px] max-[500px]:pl-6">
                  At SAE NIT Kurukshetra, we believe in nurturing talent through hands-on engineering challenges that extend far beyond the classroom. Our teams, Team Accelerons and Team Nitrox represent the spirit of innovation, dedication, and resilience that defines this institution.<br/> <br/>
                  Through national and international competitions, these students gain exposure to real-world design, manufacturing, and teamwork scenarios that prepare them for future careers in automotive and mobility sectors. However, excellence requires not just effort, but also resources.

                </p>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600/20 rounded-full blur-md z-0"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-600/20 rounded-full blur-md z-0"></div>
              </div>




              {/* CTA Button */}
              {/* <div className="mt-6">
            <a
            href="/donation"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            >
            Support Our Cause
            </a>
            </div> */}
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-10 items-end max-[500px]:justify-center max-[500px]:gap-4">


            <div className="relative mb-8">
              {/* Orbit Accent */}
              <div className="absolute -left-4 -top-4 w-full h-full rounded-full border-4 border-dotted border-purple-800/30 animate-[spin_25s_linear_infinite]"></div>

              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 mix-blend-overlay z-10"></div>
                <Image
                  src="/assets/images/crowdfunding/Dr. Satnam Singh.webp"
                  alt="Faculty In-Charge"
                  width={100}
                  height={100}
                  className="w-full h-[124%] object-cover"
                />
              </div>
            </div>
            <div className="flex-1 max-[500px]:flex-auto">


              <p className="text-[26px] mb-4 max-[500px]:text-center">
                <span className="font-bold text-blue-300">Dr. Satnam Singh</span>
                <br />
                <span className="text-sm text-gray-400">
                  Faculty Advisor, SAE NIT Kurukshetra
                </span>
              </p>

              <div className="relative bg-gray-800/80 border border-gray-700 rounded-xl p-6 text-gray-300 leading-relaxed shadow-lg backdrop-blur-sm max-[500px]:w-full max-[500px]:mx-auto">
                {/* Quote SVG */}
                <svg
                  className="absolute top-4 left-4 w-8 h-8 text-purple-500 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H10z M20,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H20z"></path>
                </svg>

                <p className="pl-10 text-lg max-[500px]:text-[17px] max-[500px]:pl-6">
                SAE NIT KKR has consistently empowered students to turn engineering theory into impactful, hands-on projects. Your support fuels that vision. Your support can help them to keep the wheels of innovation turning.<br/> <br/>
Your contributions will directly enable our students to innovate, compete, and represent NIT Kurukshetra on prestigious platforms.


                </p>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600/20 rounded-full blur-md z-0"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-600/20 rounded-full blur-md z-0"></div>
              </div>




              {/* CTA Button */}
              {/* <div className="mt-6">
            <a
            href="/donation"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            >
            Support Our Cause
            </a>
            </div> */}
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-10 items-end max-[500px]:justify-center max-[500px]:gap-4">


            <div className="relative mb-8">
              {/* Orbit Accent */}
              <div className="absolute -left-4 -top-4 w-full h-full rounded-full border-4 border-dotted border-purple-800/30 animate-[spin_25s_linear_infinite]"></div>

              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 mix-blend-overlay z-10"></div>
                <Image
                  src="/assets/images/crowdfunding/Dr. Vikas Kumar.webp"
                  alt="Faculty In-Charge"
                  width={100}
                  height={100}
                  className="w-full h-[110%] object-cover"
                />
              </div>
            </div>
            <div className="flex-1 max-[500px]:flex-auto">


              <p className="text-[26px] mb-4 max-[500px]:mx-auto">
                <span className="font-bold text-blue-300">Dr. Vikas Kumar</span>
                <br />
                <span className="text-sm text-gray-400">
                  Faculty Advisor, SAE NIT Kurukshetra
                </span>
              </p>

              <div className="relative bg-gray-800/80 border border-gray-700 rounded-xl p-6 text-gray-300 leading-relaxed shadow-lg backdrop-blur-sm max-[500px]:w-full max-[500px]:mx-auto">
                {/* Quote SVG */}
                <svg
                  className="absolute top-4 left-4 w-8 h-8 text-purple-500 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H10z M20,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H20z"></path>
                </svg>

                <p className="pl-10 text-lg max-[500px]:text-[17px] max-[500px]:pl-6">
                Behind every prototype and race-ready machine is a team of students who dared to dream. Stand with SAE NIT Kurukshetra as we turn those dreams into achievements, one contribution at a time.<br/> <br/>
I urge alumni, corporates, and well-wishers to support our crowdfunding campaign.


                </p>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600/20 rounded-full blur-md z-0"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-600/20 rounded-full blur-md z-0"></div>
              </div>




              {/* CTA Button */}
              {/* <div className="mt-6">
            <a
            href="/donation"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            >
            Support Our Cause
            </a>
            </div> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyMessage;
