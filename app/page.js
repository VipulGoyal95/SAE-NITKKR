import Image from "next/image";
import Whoweare from "./components/Whoweare";
import OurTeams from "./components/OurTeams";
import TabbedCards from "./components/TabbedCards";
import Participation from "./components/Participation";
import ScrollingGallery from "./components/ScrollingGallery";
import Teammembers from "./components/Teammembers";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <div>
      <div className="relative text-center w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <Image
          src="/img2.png"
          alt="SAE NIT Kurukshetra"
          fill
          className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[90%] md:max-w-[550px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Welcome To
          </h1>
          <div className="relative group">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              SAE NIT Kurukshetra
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300" />
          </div>
          <p className="text-white/90 text-lg md:text-xl mt-6 mb-8 animate-fade-in-up delay-200">
            Society of Automotive Engineers
          </p>
        </div>
      </div>
      <Whoweare />
      <OurTeams />
      {/* <TabbedCards /> */}
      {/* <Participation /> */}
      {/* <ScrollingGallery/> */}
      <Sponsors />
      <Teammembers />
    </div>
  );
}
