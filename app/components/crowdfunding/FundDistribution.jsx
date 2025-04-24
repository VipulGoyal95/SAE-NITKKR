// components/FundDistribution.tsx
import React from 'react';

const FundDistribution = () => {
  const funds = [
    {
      department: 'Mechanical Department',
      icon: '🛠️',
      raised: 42000,
      target: 75000,
    },
    {
      department: 'Electrical Department',
      icon: '⚡',
      raised: 30000,
      target: 50000,
    },
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Fund Distribution Overview
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {funds.map((fund, idx) => {
          const percentage = Math.min((fund.raised / fund.target) * 100, 100).toFixed(0);

          return (
            <div
              key={idx}
              className="bg-[#111] border border-[#222] p-6 rounded-2xl shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  {fund.icon} {fund.department}
                </h3>
                <span className="text-sm text-gray-400">
                  ₹{fund.raised.toLocaleString()} raised of ₹{fund.target.toLocaleString()}
                </span>
              </div>

              <div className="w-full bg-[#222] rounded-full h-4">
                <div
                  className="bg-yellow-400 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-right text-gray-400 mt-1">{percentage}% funded</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FundDistribution;
