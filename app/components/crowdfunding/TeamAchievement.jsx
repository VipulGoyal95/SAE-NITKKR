// components/TeamTimeline.tsx
import React from "react";

const teams = {
  "Team Nitrox": [
    {
      year: 2021,
      items: ["ATVC - VIRTUAL: AIR 1", "Shifted to ELECTRIC VEHICLE for BAJA"],
    },
    { year: 2020, items: ["ATVC - AIR 2 Overall"] },
    {
      year: 2019,
      items: [
        "BAJA - AIR 4 in Design",
        "AIR 7 in Sales",
        "AIR 6 in Acceleration",
        "AIR 8 in Rock Crawl",
      ],
    },
    {
      year: 2018,
      items: [
        "BAJA USA - INTL RANK 22",
        "BAJA - AIR 6 Fastest Vehicle",
        "AIR 5 Light Weight",
        "AIR 5 Cost",
        "AIR 8 Endurance",
      ],
    },
    {
      year: 2017,
      items: [
        "Ergonomic sling seat design",
        "Trailing arm suspension",
        "Innovated belt system",
        "AIR 29 of 400",
        "AIR 7 of 397",
      ],
    },
    {
      year: 2016,
      items: [
        "AIR 2 Cost Effective",
        "AIR 4 Hill Climb",
        "AIR 6 Light Weight",
        "Self Designed Gearbox",
      ],
    },
    { year: 2015, items: ["AIR 3 Suspension & Traction", "AIR 7 of 397"] },
  ],
  "Team Accelerons": [
    {
      year: 2022,
      items: ["Formula Bharat - AIR 5 Overall", "AIR 3 CGMR Event"],
    },
    {
      year: 2019,
      items: [
        "Clutchless FS Car",
        "Customized wiring",
        "Self-designed intake/exhaust",
      ],
    },
    {
      year: 2018,
      items: [
        "1st among NITs in Formula Bharat",
        "AIR 6 Endurance",
        "AIR 12 Cost",
        "16th Overall of 70",
      ],
    },
    { year: 2017, items: ["18th in SUPRA SAE INDIA"] },
    { year: 2016, items: ["AIR 25 in Formula Student India"] },
    {
      year: 2015,
      items: ["Pneumatic Gear Shifter", "AIR 10 Cost", "AIR 30 Formula Design"],
    },
  ],
};

const TeamTimeline = () => {
  return (
    <section className="py-20 px-4 md:px-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
            Team Achievements Timeline
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mb-6 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A chronicle of excellence and innovation through the years
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(teams).map(([teamName, timeline]) => (
            <div
              key={teamName}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                {/* Team Icon SVG */}
                <div className="w-12 h-12 mr-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
                  {teamName}
                </h3>
              </div>

              <div className="relative border-l-2 border-blue-700/70 ml-6 pl-8">
                {timeline.map(({ year, items }, idx) => (
                  <div key={idx} className="mb-10 relative">
                    {/* Year Node */}
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Year */}
                    <div className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
                      {year}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-blue-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/donation"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
          >
            Support Our Next Achievement
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamTimeline;
