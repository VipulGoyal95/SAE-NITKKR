// components/AutokritiCard.jsx

export default function AutokritiCard() {
    return (
      <div className="flex flex-col md:flex-row bg-black text-white p-6 gap-6 items-center justify-center min-h-screen">
        {/* Left Poster Image */}
        <div className="w-full md:w-1/2 max-w-md">
          <img
            src="/dbced565-1f68-49c9-9d2c-8d7dc8048b29.png"
            alt="Autokriti Poster"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
  
        {/* Right Offer Box */}
        <div className="bg-[#0A0A26] text-white rounded-xl p-8 w-full md:w-1/2 max-w-md shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">What we Offer?</h2>
          <ul className="space-y-4">
            {[
              'Combustion Vehicle',
              'IOT',
              'Electric Vehicles',
              'Softwares',
            ].map((item, index) => (
              <li key={index} className="flex items-center text-lg font-semibold">
                <span className="text-2xl mr-4">{'>'}</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <button className="bg-red-600 text-white text-lg font-bold py-3 px-6 rounded-lg border-4 border-cyan-300 hover:bg-red-700 transition duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  