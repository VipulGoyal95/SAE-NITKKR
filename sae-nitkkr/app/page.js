import Image from "next/image";
import Whoweare from "./components/Whoweare";
import OurTeams from "./components/OurTeams";
import TeamShowcase from "./components/Teamshowcase";

export default function Home() {
  return (
    <div>
      <div className="relative text-center w-full h-[500px]">
        <Image
          src="/assets/images/homepage/sae_nit_kkr_cover.jpg"
          alt="sae"
          fill
          className="object-cover opacity-50"
          priority
        />
        <h1 className="w-[550px] text-[35px] font-[700] absolute top-1/2 left-1/2 text-white mx-auto -translate-x-1/2 -translate-y-1/2">
          Welcome To
          <br />
          <span className="relative flex flex-col items-center before:content-[''] before:block before:bg-white before:w-[80%] before:h-1 after:content-[''] after:block after:bg-white after:w-[80%] after:h-1">SAE NIT Kurukshetra</span>
          {/* <Cursor /> */}
        </h1>
      </div>
      <Whoweare/>
      <OurTeams/>
      {/* <TeamShowcase/> */}
    </div>
  );
}
