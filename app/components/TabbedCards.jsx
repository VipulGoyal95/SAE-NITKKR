"use client";
import { useState } from "react";

const tabs = [
  { id: 1, title: "Engine", color: "bg-[#071e1b]" },
  { id: 2, title: "IOT", color: "bg-[#11342e]" },
  { id: 3, title: "DAQ", color: "bg-[#3e574c]" },
  { id: 4, title: "Solidworks", color: "bg-[#f27325]" },
  { id: 5, title: "AnsyS", color: "bg-[#a0763d]" },
  { id: 6, title: "Transmission", color: "bg-[#973933]" },
];

export default function TabbedCards() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex h-[60vh] w-full p-6 gap-2 bg-black">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${
            tab.color
          } text-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out ${
            activeTab === tab.id ? "w-full" : "w-32"
          } flex flex-col justify-between items-center overflow-hidden hover:opacity-95`}
        >
          <div className="p-4 w-full flex justify-between items-start">
            <span className="font-bold text-2xl opacity-80">
              {tab.id.toString().padStart(2, "0")}
            </span>
            {activeTab === tab.id && (
              <button
                className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                onClick={() => setActiveTab(0)}
              >
                <span className="text-xl">×</span>
              </button>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center transform -rotate-90 origin-center">
            {activeTab !== tab.id && (
              <span className="font-bold tracking-wide whitespace-nowrap text-xl">
                {tab.title}
              </span>
            )}
          </div>

          {activeTab === tab.id && (
            <div className="w-full p-8 flex flex-col items-start">
              <h2 className="text-4xl font-bold mb-6">{tab.title}</h2>
              <p className="text-white/80 text-lg">
                This is the {tab.title} section. Add your content here.
              </p>
            </div>
          )}

          {activeTab !== tab.id && (
            <button
              className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full mb-4 flex items-center justify-center hover:bg-white/30 transition-all"
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
