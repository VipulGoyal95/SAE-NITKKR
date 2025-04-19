// components/ParticipationAbsolute.jsx
import Image from 'next/image'
import topCar from "/public/upcar.png";
import bottomCar from "/public/lowcar.png";
import borderSupra from "/public/upborder.png";
import borderFormula from "/public/lowborder.png";

export default function ParticipationAbsolute() {
  return (
    <div className="relative w-full max-w-6xl h-[1000px] mx-auto bg-black">
      {/* Heading */}
      <h2 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white">
        Where Do We Participate ?
      </h2>

      {/* Top‑Left Photo */}
      <div className="absolute top-24 left-0 w-[45%] h-[39%] rounded-xl overflow-hidden">
        <Image
          src={topCar}
          alt="Drift race"
          fill
        //   className="object-cover"
        />
      </div>

      {/* Top‑Right “SUPRA” Card */}
      <div className="absolute top-24 right-0 w-[52.5%] h-[49%]">
        {/* Mint border PNG */}
        <Image
          src={borderSupra}
          alt="Supra border"
          fill
        //   className="object-cover"
        />
        {/* Content panel inside the border */}
        <div className="absolute inset-6 rounded-lg p-6 flex flex-col justify-start mt-[20px]">
          <h3 className="text-[50px] text-center font-semibold text-white">SUPRA</h3>
          <p className="mt-4 text-[18px] text-white leading-relaxed text-justify">
            SUPRA SAEINDIA is a national‑level Formula racing competition where engineering meets speed. Student teams design, build, and race their own formula‑style car, competing in both static and dynamic events. It’s a test of skill, innovation, and teamwork — where future engineers shift into high gear.
          </p>
        </div>
      </div>

      {/* Bottom‑Left “Formula Bharat” Card */}
      <div className="absolute bottom-0 left-0 w-[55.5%] h-[49%]">
        <Image
          src={borderFormula}
          alt="Formula Bharat border"
          fill
        //   className="object-cover"
        />
        <div className="absolute inset-6  rounded-lg p-6 flex flex-col justify-start">
          <h3 className="text-[45px] text-center font-semibold text-white">
            FORMULA BHARAT
          </h3>
          <p className="mt-4 text-[18px] text-white leading-relaxed text-justify">
            Formula Bharat is a national engineering design competition where student teams race to innovate. They build full‑scale Formula‑style cars from scratch each year, competing in design, cost, business, and dynamic performance. With self‑driven funding and relentless effort, it’s a true test of engineering passion and perseverance.
          </p>
        </div>
      </div>

      {/* Bottom‑Right Photo */}
      <div className="absolute bottom-0 right-0 w-[56.5%] h-[39.5%] rounded-xl overflow-hidden">
        <Image
          src={bottomCar}
          alt="Formula car"
          fill
        //   className="object-cover"
        />
      </div>
    </div>
  )
}
