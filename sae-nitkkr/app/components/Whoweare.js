import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/homepage/1.png"
        alt="Car"
        width={1100}
        height={600}
        className="z-0"
        priority
      />

      {/* Overlay with skewed background */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10 clip-diagonal" />

      {/* Text Content */}
      <div className="absolute right-0 top-[42%] transform w-[60%] -translate-y-1/2 z-20 pr-0 p-6 md:p-12 md:pr-0 text-white">
        <div className="relative w-[820px] h-[100px] mx-[31px] mb-8">
          <Image
            src="/assets/images/homepage/3.png"
            alt="Heading Capsule"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 flex items-center pl-8 text-4xl font-bold">
            <span className="text-black mr-4 z-10">WHO {" "}</span>
            <span className="text-white">ARE WE?</span>
          </div>
        </div>
        <div className="w-[80%] absolute right-8 bg-opacity-90 p-8 rounded-md">
          <p className="text-justify md:text-base leading-relaxed mb-4">
            SAE NIT Kurukshetra is a collegiate club affiliated with SAE India,
            which is a wing of SAE International, on a national scale. The club
            is a platform for budding engineers to work together to drive at
            solutions to the problems in the mobility field. It forms a link
            between naive talents and pioneers of the industry...
          </p>
          <p className="font-semibold mt-4">We bring our skills to many competitions</p>
          <div className="flex flex-wrap gap-6 mt-2 text-sm md:text-base">
            <span>Baja SAE India</span>
            <span>SUPRA India</span>
            <span>ATVC</span>
            <span>Formula Bharat</span>
          </div>
        </div>
      </div>
    </div>
  );
}