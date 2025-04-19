import Image from "next/image";
// import progress1 from '../../../../public/assets/images/autokriti/progress1.svg';
// import progress2 from '../../../../public/assets/images/autokriti/progress2.svg';
// import progress3 from '../../../../public/assets/images/autokriti/progress3.svg';

const AboutAutokriti = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 md:px-8">
      <div className="w-full lg:w-[30%] mb-10 lg:mb-0">
        <div className="flex flex-col sm:flex-row items-start justify-center gap-8 md:gap-12 h-[400px]">
          {/* First Progress Bar */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-[3px] bg-white h-[200px] group-hover:h-[300px] transition-all duration-500 ease-in-out">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full" />
            </div>
            <div className="text-2xl sm:text-[30px] font-bold whitespace-pre mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
              15+
              <br />
              workshops
            </div>
          </div>

          {/* Second Progress Bar */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-[3px] bg-white h-[300px] group-hover:h-[360px] transition-all duration-500 ease-in-out">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full" />
            </div>
            <div className="text-2xl sm:text-[30px] font-bold whitespace-pre mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
              2500+
              <br />
              students
            </div>
          </div>

          {/* Third Progress Bar */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-[3px] bg-white h-[160px] group-hover:h-[260px] transition-all duration-500 ease-in-out">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full" />
            </div>
            <div className="text-2xl sm:text-[30px] font-bold whitespace-pre mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
              North India's
              <br />
              biggest
              <br />
              workshop
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] lg:pl-16">
        <h1 className="text-4xl sm:text-[70px] font-bold mb-8 lg:mb-12">
          About Autokriti
        </h1>
        <div className="text-justify text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            Autokriti is north India's largest automobile workshop which began
            in 2010. Every year loads of students gets enrolled to gain
            firsthand knowledge of industrial vehicles. The last held physical
            autokriti in 2019 saw a participation of 700+ candidates.
          </p>
          <p>
            It involves overhauling of a star engine, which varied from a 2
            stroke engine of a scooter in Autokriti 1 to 3.6L turbocharged V6
            Porsche Cayenne in season 11.0; always in cahoots with technology.
            And not just the gearheads, but geeks from all branches of
            technology find here the stuffs of their interest.
          </p>
          <p>
            E- Autokriti is a digital edition of Autokriti, where this legacy of
            imparting knowledge continues amid the current covid crisis. And
            with many new surprises awaiting e-autokriti 2.0, we are expecting
            an even greater engagement
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAutokriti;
