"use client";
import { useState, useRef, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const tabs = [
  { id: 1, title: "Transmission", marginbottom:"6", padding:"4",color: "bg-[#071e1b]", content:[
    {
      title: "Introduction",
      topics: ["What is transmission","Why it is used","Power and Torque"]
    },
    {
      title: "Clutch",
      topics: ["What is clutch","Type of Clutches","Advantages and Disadvantages","Their uses"]
    },
    {
      title: "Manual Transmission Gearbox",
      topics: ["Slidind Mesh","Constant Mesh","Synchromesh Gearbox"]
    },
    {
      title: "Automatic Transmission",
      topics: [" CVT"," DCT","E CVT","Torque Converter"]
    },
    {
      title: "Differential",
      topics: ["What is differential","Types of Differential","Uses, advantages and disadvantage","CV,UV"]
    },
    {
      title: "Drive train and shifting",
      topics:["4wd,2wd- advantages, disadvantages","Front wd, rear wd"]
    }
  ]},
  { id: 2, title: "Vehicle Dynamics", marginbottom:"4", padding:"4", color: "bg-[#11342e]", content:[
    {
      title: "Suspension",
      topics: ["Basic terminology"," Types","Springs","Types of springs","Dampers","Roll center analysis","Instant Center"]
    },
    {
      title:"Steering",
      topics: ["introduction","Objective","Basic terminology","Types","Ackermann geometry calculations","Power steering"]
    },
    {
      title: "Tire dynamics",
      topics: ["introduction","Basic terminology","Slip angle","Oversteer and Understeer case study","Rolling resistance","Tire load transfers","Wheel assembly"]
    },
    {
      title: "Aerodynamics",
      topics: ["introduction","Basic terminology","Forces","Parts"]
    }
  ]},
  { id: 3, title: "Brakes", marginbottom:"6", padding:"4", color: "bg-[#3e574c]"},
  { id: 4, title: "Engines Overhauling", marginbottom:"2", padding:"4", color: "bg-[#f27325]", content:[
    {
      title: "Overhauling of following engines",
      topics: ["Honda city","Audi","Mercedes","Land cruiser","Porsche"]
    },
    {
      title: "Engine Syallabus",
      topics: ["Introduction","Types of Engine","Classification of Engine","Basic Engine Parts","Fuel Injector","Variable Valve Timing","Turbochargers, Superchargers","Intercooler"]
    }
  ] },
  { id: 5, title: "IOT", marginbottom:"1", padding:"3", color: "bg-[#a0763d]",content:[
    {
      title: "Adruino",
      topics: ["Introduction to UART, SPI, I2C Communication","How these works- start bit, data frame, stop bits","Steps of Data Transmission","Slave and Master Communication","Advantages and Disadvantages","Use Cases"]
    },
    {
      title: "Communication Protocols",
      topics: [" Introduction to Arduino Boards","In depth review of Arduino architecture","Programming on Arduino IDE.","Learning about sensors","Live data tracking of various sensors","Establishing master slave communication"]
    },
    {
      title:"Can communication",
      topics:["Introduction","Need for CAN protocol","Electrical properties of CAN","Working","Comparison with similar technologies","Data transmission/ message framing","Troubleshooting","Practically implementing of logging CAN bus data"]
    },
    {
      title: "Telemetry",
      topics: ["Introduction","Need for telemetry","Application in EV and CV","How to implement a long distance telemetry using Arduino and RF signal models"," Live data tracking of a vehicle","Tackling range, reliability and stability issues"]
    }
  ] },
  { id: 6, title: "Electric Vehicle", marginbottom:"1", padding:"2", color: "bg-[#973933]", content:[
    {
      title: "Battery",
      topics: ["Mechanical design","Thermal design","Electrical design","Cell stacking","Types of cells(Shape/ Chemistry)"]
    },
    {
      title: "BMS",
      topics: ["Basics of BMS","Cell Balancing","Battery parameters Monitoring","Working Model of BMS","PCB Designing"]
    },
    {
      title: "Motor and Motor Controller",
      topics: ["Motor Considerations","Characteristics of Motors","Selection Of Power Rating","Torque Encoder","Motor Resolver","H Bridge","PWM","Motor Controller"]
    }
  ]},
  {
    id:7, title: "Softwares", marginbottom:"2", padding:"4", color: "bg-[#3D0301]", content:[
      {
        title:"Solidworks/Catia/Siemens NX",
        topics:["Installation","Introduction to UI","Part file(Sketching 2D)","Part File(Sketching 3D)","Extrude/cut/revolve a pattern by an example (sheaves of CVT)","Assembly(Dampers)"]
      },
      {
        title:"Ansys",
        topics: ["Introduction to Ansys","Design and Structural Analysis of components","Design and Thermal Analysis of components","Computational Fluid Analysis"]
      }
    ]
  }
];

export default function TabbedCards() {
  const [activeTab, setActiveTab] = useState(1);
  const scrollContainerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setAtStart(container.scrollLeft <= 30);
    setAtEnd(container.scrollLeft + container.offsetWidth >= container.scrollWidth - 30);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [activeTab]);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320 + 16;
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320 + 16;
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-[75vh] w-full p-6 gap-2 bg-black max-[450px]:flex-col max-[450px]:h-[100vh] max-[450px]:p-0">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${
            tab.color
          } text-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out ${
            activeTab === tab.id ? "w-full max-[450px]:relative max-[450px]:items-start max-[450px]:h-56 max-[450px]:flex-col" : "w-32 max-[450px]:w-full max-[450px]:h-14 max-[450px]:flex-row"
          } flex flex-col justify-items-start items-center overflow-hidden hover:opacity-95`}
        >
          <div className={`p-${tab.padding} w-full flex justify-between items-start max-[450px]:w-auto`}>
            <span className="font-bold text-2xl opacity-80">
              {tab.id.toString().padStart(2, "0")}
            </span>
            {activeTab === tab.id && (
              <button
                className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-all max-[450px]:absolute max-[450px]:right-[10px]"
                onClick={() => setActiveTab(0)}
              >
                <span className="text-xl">×</span>
              </button>
            )}
          </div>

            {activeTab !== tab.id && (
          <div className="flex-1 flex items-center justify-center transform -rotate-90 origin-center max-[450px]:-rotate-0">
              <span className="font-bold tracking-wide whitespace-nowrap text-xl">
                {tab.title}
              </span>
          </div>
            )}

          {activeTab === tab.id && (
            <div className={`w-full px-8 flex flex-col items-start max-[450px]:p-4 relative`}>
              <h2 className={`text-4xl font-bold mb-${tab.marginbottom} max-[450px]:text-[25px]`}>{tab.title}</h2>
              {tab.content ? (
                <div className="w-full relative">
                  <div
                    ref={scrollContainerRef}
                    className="w-full overflow-x-auto pb-4 scrollbar-hide"
                    style={{ paddingBottom: '20px', marginBottom: '-20px' }}
                  >
                    <div className="flex flex-row gap-4 min-w-max pr-4">
                      {tab.content.map((section, index) => (
                        <div key={index} className="w-80 flex-shrink-0 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                          <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
                          <ul className="list-disc list-inside space-y-2">
                            {section.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-white/80 hover:text-white transition-colors">{topic}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  {!atStart && (
                    <button
                      onClick={scrollToPrev}
                      className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all z-10"
                    >
                      <FiChevronLeft className="w-6 h-6 text-white/80" />
                    </button>
                  )}
                  {!atEnd && (
                    <button
                      onClick={scrollToNext}
                      className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all z-10"
                    >
                      <FiChevronRight className="w-6 h-6 text-white/80" />
                    </button>
                  )}
                </div>
              ) : (
                <p className="text-white/80 text-lg">
                  This is the {tab.title} section. Add your content here.
                </p>
              )}
            </div>
          )}

          {activeTab !== tab.id && (
            <button
              className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full mb-4 flex items-center justify-center hover:bg-white/30 transition-all max-[450px]:m-[10px]"
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="text-xl">+</span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// Custom scrollbar styles
// Add this to the bottom of the file or in your global CSS if preferred
// If using Tailwind JIT, you can use arbitrary variants as below

/*
.custom-scrollbar::-webkit-scrollbar {
  height: 8px;
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.18);
  border-radius: 8px;
}
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.32);
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar {
  scrollbar-color: rgba(255,255,255,0.18) transparent;
  scrollbar-width: thin;
}
*/
