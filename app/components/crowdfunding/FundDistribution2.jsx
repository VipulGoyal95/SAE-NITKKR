// components/FundDistribution.tsx
import React from 'react';

const FundDistribution = () => {
  const funds = [
    {
      department: 'Mechanical DEPT.',
      fundsLeft: 60000,
      color: 'from-cyan-400 to-blue-200',
      fillColor: 'bg-blue-400',
    },
    {
      department: 'Electrical DEPT.',
      fundsLeft: 60000,
      color: 'from-green-400 to-green-100',
      fillColor: 'bg-green-400',
    },
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Fund Distribution Overview
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {funds.map((fund, idx) => (
          <div
            key={idx}
            className="bg-[#0a0a0a] text-center p-6 rounded-2xl shadow-lg border border-[#222] w-full md:w-80"
          >
            <h3 className="text-lg font-semibold mb-4 tracking-wide">{fund.department}</h3>

            <div className="bg-gradient-to-br from-[#1e2a78] to-[#252e4c] rounded-xl py-6 text-white font-bold text-3xl tracking-wider shadow-inner mb-6">
              <p className="text-sm mb-1 font-medium tracking-wider">Funds Left</p>
              ₹{fund.fundsLeft.toLocaleString()}
            </div>

            <div className="relative w-full h-6 bg-white rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${fund.fillColor}`}
                style={{ width: '60%' }} // or dynamic value based on progress
              ></div>
              <div
                className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r ${fund.color} opacity-30`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FundDistribution;
