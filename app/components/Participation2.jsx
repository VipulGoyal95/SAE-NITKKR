"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';


const Participation2 = () => {
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
    top_content: "eBAJA is a premier electric vehicle design competition organized by the Society of Automotive Engineers India (SAE India). In this dynamic competition, student teams from universities across the country design, build, and race electric-powered off-road vehicles, emphasizing sustainability, innovation, and performance.",
    bottom: "ATVC",
    bottom_content: "ATVC (All-Terrain Vehicle Challenge) is a prestigious competition in India where student teams from universities across the nation design, build, and test all-terrain vehicles. The competition provides a platform for students to apply their engineering knowledge, enhance their practical skills, and push the limits of off-road vehicle technology."
  }

  const imagesAcclerons = {
    top:"/mobile accelerons_top.webp",
    bottom: "/mobile accelerons botttom.webp"
  }

  const imagesNitrox={
    top:"/mobile nitrox_top.webp",
    bottom: "/mobile nitrox bottom.webp"
  }
  const team = isNitroxPage ? nitroxcontent : acceleronsContent;
  const images = isNitroxPage ? imagesNitrox : imagesAcclerons;
  return (
    <div className="relative px-8 w-full max-w-6xl h-[2000px] mx-auto bg-black max-[1220px]:w-[90%] max-[530px]:w-[95%] max-[530px]:h-[930px] max-[460px]:h-[1500px]">
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
      <div className="absolute top-24 left-0 w-full h-[22%] overflow-hidden">
        <Image
          src={images.top}
          alt="Drift race"
          fill
        //   className="object-cover"
        />
      </div>

      {/* Top‑Right "SUPRA" Card */}
      <div className="absolute top-[24.5%] left-0 w-full h-[26%]">
        {/* Mint border PNG */}
        <Image
          src="/mobile upborder.webp"
          alt="Supra border"
          fill
        //   className="object-cover"
        />
        {/* Content panel inside the border */}
        <motion.div 
          className={`absolute inset-6 rounded-lg p-4 flex flex-col justify-center max-[1038px]:p-3 max-[757px]:p-1 max-[657px]:p-0 max-[460px]:inset-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3 
            className="text-[50px] text-center font-semibold text-white max-[1038px]:text-[40px] max-[896px]:text-[38px] max-[858px]:text-[35px] max-[802px]:text-[32px] max-[713px]:text-[29px] max-[602px]:text-[27px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {team.top}
          </motion.h3>
          <motion.p 
            className="mt-4 text-[18px] text-white leading-relaxed text-justify max-[896px]:mt-2 max-[858px]:text-[17px] max-[714px]:text-[16px] max-[657px]:text-[14px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {team.top_content}
          </motion.p>
          {/* <motion.p 
            className="mt-2 text-[16px] border-x-[5px] px-2 border-[red] text-white leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {team.top_subcontent}
          </motion.p> */}
        </motion.div>
      </div>

      {/* Bottom‑Left "Formula Bharat" Card */}
      <div className="absolute top-[46.5%] left-0 w-full h-[26%] max-[530px]:bottom-15">
        <Image
          src="/mobile lowborder.webp"
          alt="Formula Bharat border"
          fill
        //   className="object-cover"
        />
        <motion.div 
          className={`absolute inset-6 rounded-lg p-6 flex flex-col justify-center max-[1038px]:p-3 max-[757px]:p-1 max-[657px]:p-0 max-[460px]:inset-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3 
            className="text-[45px] text-center font-semibold text-white max-[1038px]:text-[40px] max-[896px]:text-[38px] max-[858px]:text-[35px] max-[802px]:text-[32px] max-[713px]:text-[29px] max-[602px]:text-[27px] max-[435px]:text-[25px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {team.bottom}
          </motion.h3>
          <motion.p 
            className="mt-4 text-[18px] text-white leading-relaxed text-justify max-[896px]:mt-2 max-[858px]:text-[17px] max-[714px]:text-[16px] max-[657px]:text-[14px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {team.bottom_content}
          </motion.p>
          {/* <motion.p 
            className="mt-2 w-[70%] text-[16px] border-x-[5px] px-2 border-[red] text-white leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {team.bottom_subcontent}
          </motion.p> */}
        </motion.div>
      </div>

      {/* Bottom‑Right Photo */}
      <div className={`absolute bottom-0 right-0 w-full rounded-xl overflow-hidden ${isNitroxPage? "h-[26%] max-[530px]:bottom-20": "h-[28%] max-[530px]:bottom-13"}`}>
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

export default Participation2
