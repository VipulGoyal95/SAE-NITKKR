// components/ParticipationAbsolute.jsx
"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';


function Participation() {
  const pathname = usePathname();
  const isNitroxPage = pathname.includes('/nitrox');

  const acceleronsContent={
    top: "SUPRA",
    top_content: "SUPRA SAEINDIA Student Formula is a premier national level competition organized by the Society of Automotive Engineers India (SAEINDIA). It aims to provide a dynamic platform for student engineers to design, build, and learn through real-world automotive challenges and hands-on experience.",
    bottom: "FORMULA BHARAT",
    bottom_content: "Formula Bharat is a national-level engineering design competition where students from colleges and universities across the country design, build, and compete with Formula Student vehicles. Teams are evaluated on engineering design, cost efficiency, marketability, and dynamic on-track performance.",
  }

  const nitroxcontent={
    top:"eBAJA",
    top_content: "eBAJA is the flagship electric ATV competition organized by the SAE India, where student teams from universities across the country conceptualize, design, manufacture, and test their electric ATVs. The competition challenges participants to balance sustainability, engineering innovation, cost effectiveness, and on-track performance while working through real-world automotive design constraints.",
    top_subcontent: "For the 2025–26 season, our team participated in eBAJA 2026 held at NATRAX, Pithampur, and achieved: AIR 46 Overall, AIR 35 in Statics with the highlights being AIR 13 in Manufacturing Excellence, AIR 20 in Sustainability.",
    bottom: "ATVC",
    bottom_content: "ATVC (All-Terrain Vehicle Championship) is a premier student engineering competition in India organized by INFI LEAGUE MOTORSPORTS, where teams from universities across the country design, manufacture, and validate their own all-terrain vehicles.",
    bottom_subcontent: "In the 2025–26 season, we marked a significant milestone by returning to the electric category for the first time since 2020, delivering an exceptional performance with podium finishes across multiple categories: AIR 9 Overall. AIR 3 in Statics, AIR 7 in Endurance, AIR 3 in Design, AIR 4 in Business Plan and AIR 6 in Cost",
  }

  const imagesAcclerons = {
    top:"/accelerons_top.webp",
    bottom: "/accelerons_bottom.webp"
  }

  const imagesNitrox={
    top:"/nitrox_top.webp",
    bottom: "/nitrox_bottom.webp"
  }
  const team = isNitroxPage ? nitroxcontent : acceleronsContent;
  const images = isNitroxPage ? imagesNitrox : imagesAcclerons;
  return (
    <div className={`relative px-8 w-full max-w-6xl ${isNitroxPage?"h-[1000px] max-[1220px]:h-[1050px] max-[1060px]:h-[1100px] max-[750px]:w-[95%]":"h-[1000px]"} mx-auto bg-black max-[1220px]:w-[90%] max-[530px]:w-[95%] max-[530px]:h-[930px] max-[460px]:h-[850px]`}>
      {/* Heading */}
      <motion.h2 
        className="absolute w-full text-center top-5 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white mb-4 max-[482px]:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Where Do We Participate ?
      </motion.h2>

      {/* Top‑Left Photo */}
      <div className="absolute top-24 left-0 w-[45%] h-[39%] rounded-xl overflow-hidden max-[530px]:h-[32.5%]">
        <Image
          src={images.top}
          alt="Drift race"
          fill
        //   className="object-cover"
        />
      </div>

      {/* Top‑Right "SUPRA" Card */}
      <div className="absolute top-24 right-0 w-[52.5%] h-[49%] max-[530px]:h-[40%]">
        {/* Mint border PNG */}
        <Image
          src="/upborder.webp"
          alt="Supra border"
          fill
        //   className="object-cover"
        />
        {/* Content panel inside the border */}
        <motion.div 
          className={`absolute inset-6 rounded-lg ${isNitroxPage? "max-[955px]:inset-4 max-[835px]:inset-y-2 max-[800px]:inset-x-3 max-[720px]:inset-x-2 max-[700px]:inset-x-2 max-[700px]:inset-y-1": "p-4 max-[1038px]:p-3"} flex flex-col justify-start  max-[757px]:p-1 max-[657px]:p-0 max-[460px]:inset-3 max-[460px]:inset-y-2 ${isNitroxPage && "max-[392px]:inset-x-2" }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3 
            className={` ${isNitroxPage? "text-[30px] max-[868px]:text-[27px] max-[835px]:text-[26px] max-[700px]:text-[25px]": "text-[50px] max-[1038px]:text-[40px] max-[802px]:text-[32px]"} text-center font-semibold text-white  max-[896px]:text-[38px] max-[858px]:text-[35px]  max-[713px]:text-[29px] max-[602px]:text-[27px]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {team.top}
          </motion.h3>
          <motion.p 
            className={`${isNitroxPage? "mt-2 max-[1220px]:text-[17px] max-[1121px]:text-[16px] max-[955px]:text-[15px] max-[730px]:text-[14px] max-[622px]:text-[13px]":"mt-4 max-[896px]:mt-2 max-[858px]:text-[17px] max-[714px]:text-[16px] max-[657px]:text-[15px]"} text-[18px] text-white leading-relaxed text-justify  max-[637px]:mt-0 max-[530px]:text-[13px] max-[450px]:text-[12.2px]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {team.top_content}
          </motion.p>
          {
            isNitroxPage && 
            <motion.p 
              className="text-[18px] mt-2 text-white leading-relaxed text-justify max-[1220px]:mt-0 max-[1220px]:text-[17px] max-[1121px]:text-[16px] max-[1121px]:mt-2 max-[955px]:text-[15px] max-[820px]:mt-0 max-[730px]:text-[14px] max-[620px]:mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {team.top_subcontent}
            </motion.p>
          }
        </motion.div>
      </div>

      {/* Bottom‑Left "Formula Bharat" Card */}
      <div className="absolute bottom-0 left-0 w-[55.5%] h-[49%] max-[860px]:h-[49.5%] max-[530px]:bottom-15 max-[460px]:h-[48%]">
        <Image
          src="/lowborder.webp"
          alt="Formula Bharat border"
          fill
        //   className="object-cover"
        />
        <motion.div 
          className={`absolute inset-6 rounded-lg ${isNitroxPage? "p-0 max-[835px]:inset-y-2 max-[800px]:inset-x-3":"p-6 max-[1038px]:p-3"} flex flex-col justify-start  max-[757px]:p-1 max-[657px]:p-0 max-[460px]:inset-3 max-[460px]:inset-y-2 ${!isNitroxPage && "max-[393px]:inset-x-2"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3 
            className={`${isNitroxPage? "text-[30px] max-[868px]:text-[27px] max-[835px]:text-[26px] max-[700px]:text-[25px]" : "text-[45px] max-[1038px]:text-[40px] max-[896px]:text-[38px] max-[858px]:text-[35px]  max-[713px]:text-[29px] max-[802px]:text-[32px]"} text-center font-semibold text-white max-[602px]:text-[27px] max-[435px]:text-[25px]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {team.bottom}
          </motion.h3>
          <motion.p 
            className={`${isNitroxPage? "mt-2 max-[1220px]:text-[17px] max-[1121px]:text-[16px] max-[955px]:text-[15px] max-[800px]:mt-0 max-[730px]:text-[14px]":"mt-4 max-[714px]:text-[16px] max-[657px]:text-[15px]"} text-[18px] text-white leading-relaxed text-justify max-[896px]:mt-2  max-[637px]:mt-0 max-[530px]:text-[13px] max-[460px]:text-[12.2px]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {team.bottom_content}
          </motion.p>
          {
            isNitroxPage &&
            <motion.p 
              className="mt-2 w-[100%] text-[18px] text-white leading-relaxed text-justify max-[1220px]:text-[17px] max-[1121px]:text-[16px] max-[955px]:text-[15px] max-[730px]:text-[14px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {team.bottom_subcontent}
            </motion.p>
          }
        </motion.div>
      </div>

      {/* Bottom‑Right Photo */}
      <div className="absolute bottom-0 right-0 w-[56.5%] h-[39.5%] rounded-xl overflow-hidden max-[530px]:h-[40.5%] max-[530px]:bottom-15">
        <Image
          src={images.bottom}
          alt="Formula car"
          fill
        //   className="object-cover"
        />
      </div>
    </div>
  )
}

export default Participation;
