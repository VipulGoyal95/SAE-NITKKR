// components/TeamTimeline.tsx

const teams = {
    "Team Nitrox": [
      { year: 2021, items: ["ATVC - VIRTUAL: AIR 1", "Shifted to ELECTRIC VEHICLE for BAJA"] },
      { year: 2020, items: ["ATVC - AIR 2 Overall"] },
      { year: 2019, items: ["BAJA - AIR 4 in Design", "AIR 7 in Sales", "AIR 6 in Acceleration", "AIR 8 in Rock Crawl"] },
      { year: 2018, items: ["BAJA USA - INTL RANK 22", "BAJA - AIR 6 Fastest Vehicle", "AIR 5 Light Weight", "AIR 5 Cost", "AIR 8 Endurance"] },
      { year: 2017, items: ["Ergonomic sling seat design", "Trailing arm suspension", "Innovated belt system", "AIR 29 of 400", "AIR 7 of 397"] },
      { year: 2016, items: ["AIR 2 Cost Effective", "AIR 4 Hill Climb", "AIR 6 Light Weight", "Self Designed Gearbox"] },
      { year: 2015, items: ["AIR 3 Suspension & Traction", "AIR 7 of 397"] }
    ],
    "Team Accelerons": [
      { year: 2022, items: ["Formula Bharat - AIR 5 Overall", "AIR 3 CGMR Event"] },
      { year: 2019, items: ["Clutchless FS Car", "Customized wiring", "Self-designed intake/exhaust"] },
      { year: 2018, items: ["1st among NITs in Formula Bharat", "AIR 6 Endurance", "AIR 12 Cost", "16th Overall of 70"] },
      { year: 2017, items: ["18th in SUPRA SAE INDIA"] },
      { year: 2016, items: ["AIR 25 in Formula Student India"] },
      { year: 2015, items: ["Pneumatic Gear Shifter", "AIR 10 Cost", "AIR 30 Formula Design"] },
    ],
  };
  
  const TeamTimeline = () => {
    return (
      <section className="py-16 px-4 md:px-16 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Team Achievements Timeline</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {Object.entries(teams).map(([teamName, timeline]) => (
            <div key={teamName}>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{teamName}</h3>
              <div className="relative border-l border-purple-700 ml-2">
                {timeline.map(({ year, items }, idx) => (
                  <div key={idx} className="ml-6 mb-8 relative">
                    <div className="absolute -left-[13px] w-6 h-6 bg-purple-600 rounded-full border-4 border-black" />
                    <p className="text-lg font-semibold text-purple-300">{year}</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-300 text-sm">
                      {items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TeamTimeline;
  